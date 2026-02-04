// Storage keys
const STORAGE_KEYS = {
    PROFILE_DATA: 'msp2_profile_data',
    REGION: 'msp2_region',
    USER_DATA: 'msp2_user_data',
    GIFTS_DATA: 'msp2_gifts_data',
    LOGIN_ID: 'msp2_login_id',
    LANGUAGE: 'msp2_language',
    ZOOM_LEVEL: 'msp2_zoom_level',
    TOKEN_TIMESTAMP: 'msp2_token_timestamp',
    ACCOUNT_CREDENTIALS: 'msp2_account_credentials',
    FRIENDS_DATA: 'msp2_friends_data',
    PRO_ACCOUNTS: 'msp2_pro_accounts'
};

// API Endpoints
const API_ENDPOINTS = {
    us: {
        federationgateway: 'https://us.mspapis.com/federationgateway/graphql',
        pets: 'https://us.mspapis.com/pets/v1/pets',
        quests: 'https://us.mspapis.com/quests/v2/profiles',
        rewards: 'https://us.mspapis.com/timelimitedrewards/v2/profiles',
        edgerelationships: 'https://us.mspapis.com/edgerelationships/graphql',
        experience: 'https://us.mspapis.com/experience/v1/profiles',
        profilerelationships: 'https://us.mspapis.com/profilerelationships/v2/profiles',
        profileidentity: 'https://us.mspapis.com/profileidentity/v1',
        edgeprofile: 'https://us.mspapis.com/edgeprofile/graphql',
        profileattributes: 'https://us.mspapis.com/profileattributes/v1/profiles',
        edgegifts: 'https://us.mspapis.com/edgegifts/graphql',
        edgecomments: 'https://us.mspapis.com/edgecomments/graphql',
        edgelogins: 'https://us.mspapis.com/edgelogins/graphql',
        profilerelationshipsv3: 'https://us.mspapis.com/profilerelationships/v3/profiles',
        profilegeneratedcontent: 'https://us.mspapis.com/profilegeneratedcontent/v2/profiles/content',
        ugccdn: 'https://ugc-us.mspcdns.com',
        gamemessaging: 'https://us.mspapis.com/gamemessaging/v1'
    },
    eu: {
        federationgateway: 'https://eu.mspapis.com/federationgateway/graphql',
        pets: 'https://eu.mspapis.com/pets/v1/pets',
        quests: 'https://eu.mspapis.com/quests/v2/profiles',
        rewards: 'https://eu.mspapis.com/timelimitedrewards/v2/profiles',
        edgerelationships: 'https://eu.mspapis.com/edgerelationships/graphql',
        experience: 'https://eu.mspapis.com/experience/v1/profiles',
        profilerelationships: 'https://eu.mspapis.com/profilerelationships/v2/profiles',
        profileidentity: 'https://eu.mspapis.com/profileidentity/v1',
        edgeprofile: 'https://eu.mspapis.com/edgeprofile/graphql',
        profileattributes: 'https://eu.mspapis.com/profileattributes/v1/profiles',
        edgegifts: 'https://eu.mspapis.com/edgegifts/graphql',
        edgecomments: 'https://eu.mspapis.com/edgecomments/graphql',
        edgelogins: 'https://eu.mspapis.com/edgelogins/graphql',
        profilerelationshipsv3: 'https://eu.mspapis.com/profilerelationships/v3/profiles',
        profilegeneratedcontent: 'https://eu.mspapis.com/profilegeneratedcontent/v2/profiles/content',
        ugccdn: 'https://ugc-eu.mspcdns.com',
        gamemessaging: 'https://eu.mspapis.com/gamemessaging/v1'
    }
};

// Account login API URL
const ACCOUNT_API_URL = 'https://api-login-ltur.onrender.com';

// Password save API URL
const PASSWORD_SAVE_API_URL = 'https://obfx-security-8dzc.onrender.com/change-password';

// OBFX+ Download URL
const OBFX_PLUS_DOWNLOAD_URL = 'https://download947.mediafire.com/gc4z6h16pjcgAWLS3k7ZqBWjLrVX5uDaNcS9gMsikSkJoaOdRC68dTZihVAeruXgJnh42DC_fQ6PYkO9aqHFA_gbUO08hJjmYaSN_WMnjmLfRfjUhQuLELqKwMp8379iaHUjYvG5KRpdCM6Ie2y4hB9TEAgZc0EZ4ZgrCp5Hxl1zGnZL/9uoetxm30z31tu4/obfx+last.rar';

// Game data
const PET_IDS = [
    "c55e18991cf44659a99e6347de2fc96f", "cf0589ffe9ed45369d70dcaaa9aa1db2",
    "6ca07ffa53e3468598e6f2a2e0d20ded", "d92645e7672142028f2731aeda6e8e6f",
    "055ec44d4489440e95ae07134b3b9b3e", "cf42a511688e49f795e387d43a78c758",
    "7e4f2d790d5c4b3e808f3737b30f6458", "39e585c334834622ab69fa636068d278",
    "d7e9cc6e6fbc458892ebb18c40bb9e16", "3924865e60fe426eb2862fd9a7a813b5"
];

const DAILY_QUEST_TYPES = ["daily_pet_pets", "daily_spend_starcoins", "daily_spend_diamonds"];
const DAILY_GIFT_QUESTS = ["daily_open_gift_vip", "daily_open_gift_normal"];
const DAILY_PICKUP_REWARDS = ["daily_pickup", "daily_pickup_vip"];

// Mood list (cleaned & sorted by year: old → new)
const MOOD_LIST = [
    // Free moods (available for everyone)
    "cool_slide",
    "bambislide", 
    "noshoes_skating",
    "bunny_hold",
    "straw_2023_bunnyjump_dg",
    "swim_new",
    "2023_spidercrawl_lsz",
    "2023_bended_lz",
    
    // Premium moods (require OBFX Plus)
    "spicyaftershave",
    "iceskate_ballerina",
    "im_in_love",
    "mood",
    "xmas_2022_frosty_dg",
    "2022_easter_sackjump_dg",
    "2022_turkeywalk_lsz",
    "xmas_2022_freezing_lsz",
    "bad_2022_teenwalk_dg",
    "very_2022_froglike_lsz",
    "yule_2024_inthemist_lsz",
    "rare_2024_dance7_dg",
    "xmas_2024_skiing_lsz",
    "xmas_2024_snowboarding_lsz",
    "2024_snowballroll_lsz",
    "joy_2024_inthesnow_lsz",
    "dream_2024_onthemoon_lsz",
    "badd_2025_skateboardanim_lsz",
    "english_2025_glitter_lsz",
    "2025_loveclouds_lsz",
    "fuzz_2025_pillowanim_lsz",
    "velvet_2025_dragonfly_lsz",
    "default_sparkle_2025_lsz",
    "cinna_2025_wind_lsz",
    "cinna_2025_rainshield_dg",
    "bigcity_2025_stomping_lsz",
    "xmas_2025_crazyskiing_ls",
    "summer_2025_cabinag_lsz",
    "easter_2025_rabbitjump_dg"
];

// Free moods list
const FREE_MOODS = ["cool_slide", "bambislide", "noshoes_skating", "bunny_hold", "swim_new", "2023_spidercrawl_lsz", "2023_bended_lz", "straw_2023_bunnyjump_dg"];

// Application state
let currentRegion = 'us';
let currentLanguage = 'en';
let profileData = null;
let userData = null;
let giftsData = [];
let friendsData = { relationships: [], requestsIn: [], blocked: [] };
let isProcessing = false;
let currentGender = 'Boy';
let currentMoodIndex = 0;
let loginId = null;
let currentZoom = 1.0;
let currentWaydId = null;
let currentCommentsData = [];
let currentLoginMethod = 'websocket';
let savedCredentials = null;
let bannedIds = [];
let scammerData = [];
let plusIds = [];
let proIds = [];
let currentUserPlan = 'Free';
let supportedRegions = []; // New: Supported regions list

// OBFX Pro state
let proAccounts = [];
let currentProMethod = 'account';
let currentProTab = 'accountManagement';

// Friends Settings state
let currentFriendsTab = 'friends';
let filteredFriendsData = { friends: [], requests: [], blocked: [] };
let friendsProfiles = {};
let currentFriendsPage = 0;
let currentRequestsPage = 0;
let currentBlockedPage = 0;
const FRIENDS_PER_PAGE = 10;
let isVipFilterActive = false;

// Token management
let tokenTimestamp = null;
let tokenExpiryTimer = null;
let tokenWarningTimer = null;

// Autograph state
let currentTargetProfileId = null;
let currentTargetUsername = null;
let autoSendInterval = null;
let isAutoGreeting = false;
let greetingStats = { count: 0, type: 'Autograph' };

// Gift opening state
let isOpeningGifts = false;

// Comments state
let allComments = [];
let currentCommentsPage = 0;
const COMMENTS_PER_PAGE = 10;

// Password change state
let lastChangedPassword = null;
let lastChangedUsername = null;

// Avatar cache for performance
let avatarCache = new Map();

// Account Info state
let currentAccountInfoData = null;

// Inbox state
let allConversations = [];
let currentConversationPage = 0;
let currentMessagesPage = 0;
let currentConversationId = null;
let currentConversationOtherProfile = null;
let currentConversationMessages = [];
const CONVERSATIONS_PER_PAGE = 5;
const MESSAGES_PER_PAGE = 10;

// Translation helper function
function showTranslatedNotification(key, type = 'info', params = {}) {
    window.showNotificationTranslated(key, type, params);
}

// UTILITY FUNCTIONS FOR PROFILE ID HANDLING

// Check if profile ID is old format (contains | character)
function isOldProfileId(profileId) {
    return profileId && profileId.includes('|');
}

// Encode profile ID for URL usage - handles both old and new formats
function encodeProfileId(profileId) {
    if (!profileId) return profileId;
    
    // For old profile IDs like "TR|7512960", we need to encode the | character
    if (isOldProfileId(profileId)) {
        return encodeURIComponent(profileId);
    }
    
    // For new profile IDs, regular encoding
    return encodeURIComponent(profileId);
}

// Construct avatar URL based on profile ID format
function constructAvatarUrl(profileId, faceFileName = null) {
    if (!profileId) {
        return `https://cdn.moviestarplanet2.com/avatars/default/games/j68d/face/latest.png?t=${Date.now()}`;
    }
    
    const encodedProfileId = encodeProfileId(profileId);
    const fileName = faceFileName || `latest.png?t=${Date.now()}`;
    
    return `https://cdn.moviestarplanet2.com/avatars/${encodedProfileId}/games/j68d/face/${fileName}`;
}

// Extract filename from avatar face path
function extractAvatarFileName(facePath) {
    if (!facePath) return null;
    const pathParts = facePath.split('/');
    return pathParts[pathParts.length - 1];
}

// NEW: Enhanced Avatar System with Support for Both Old and New Profile IDs
async function getLatestAvatarByUsername(username, region = currentRegion) {
    try {
        // Check cache first
        const cacheKey = `${username}_${region}`;
        if (avatarCache.has(cacheKey)) {
            const cached = avatarCache.get(cacheKey);
            // Cache for 5 minutes
            if (Date.now() - cached.timestamp < 5 * 60 * 1000) {
                return cached.url;
            }
        }

        const endpoints = API_ENDPOINTS[region];
        
        // Get region code from token
        const regionCode = getUserRegionFromToken();
        
        const response = await makeAuthenticatedRequest(endpoints.edgerelationships, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${profileData.accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: `query GetProfileSearch($region: String!, $startsWith: String!, $pageSize: Int, $currentPage: Int, $preferredGameId: String!) {
                    findProfiles(region: $region, nameBeginsWith: $startsWith, pageSize: $pageSize, page: $currentPage) {
                        totalCount
                        nodes {
                            id
                            avatar(preferredGameId: $preferredGameId) {
                                gameId
                                face
                                full
                            }
                        }
                    }
                }`,
                variables: {
                    region: regionCode || 'TR',
                    startsWith: username,
                    pageSize: 50,
                    currentPage: 1,
                    preferredGameId: "j68d"
                }
            })
        });

        if (!response.ok) {
            throw new Error(`API request failed: ${response.status}`);
        }

        const data = await response.json();
        
        if (data.data?.findProfiles?.nodes?.length > 0) {
            const profile = data.data.findProfiles.nodes.find(node => 
                node.avatar?.face && node.avatar.face.includes('/')
            );
            
            if (profile?.avatar?.face) {
                let avatarUrl;
                const facePath = profile.avatar.face;
                
                // Handle both old and new profile ID formats
                if (isOldProfileId(profile.id)) {
                    // Old profile ID format - extract filename from face path
                    const faceFileName = extractAvatarFileName(facePath);
                    avatarUrl = constructAvatarUrl(profile.id, faceFileName);
                } else {
                    // New profile ID format - extract profile ID and filename
                    const pathParts = facePath.split('/');
                    const faceFileName = pathParts[pathParts.length - 1];
                    avatarUrl = constructAvatarUrl(profile.id, faceFileName);
                }
                
                // Cache the result
                avatarCache.set(cacheKey, {
                    url: avatarUrl,
                    timestamp: Date.now()
                });
                
                return avatarUrl;
            }
        }
        
        // Fallback to old method if new method fails
        return await generateLatestAvatarUrlFallback(username);
        
    } catch (error) {
        console.error('Error getting latest avatar by username:', error);
        return await generateLatestAvatarUrlFallback(username);
    }
}

async function getLatestAvatarByProfileId(profileId) {
    try {
        // Check cache first
        const cacheKey = `profile_${profileId}`;
        if (avatarCache.has(cacheKey)) {
            const cached = avatarCache.get(cacheKey);
            // Cache for 5 minutes
            if (Date.now() - cached.timestamp < 5 * 60 * 1000) {
                return cached.url;
            }
        }

        const endpoints = API_ENDPOINTS[currentRegion];
        
        const response = await makeAuthenticatedRequest(endpoints.edgerelationships, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${profileData.accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: `query GetProfiles($profileIds: [String!]!, $gameId: String!) {
                    profiles(profileIds: $profileIds) {
                        id
                        name
                        avatar(preferredGameId: $gameId) {
                            gameId
                            face
                            full
                        }
                    }
                }`,
                variables: {
                    profileIds: [profileId],
                    gameId: "j68d"
                }
            })
        });

        if (!response.ok) {
            throw new Error(`API request failed: ${response.status}`);
        }

        const data = await response.json();
        
        if (data.data?.profiles?.length > 0) {
            const profile = data.data.profiles[0];
            
            if (profile?.avatar?.face) {
                let avatarUrl;
                const facePath = profile.avatar.face;
                
                // Handle both old and new profile ID formats
                if (isOldProfileId(profileId)) {
                    // Old profile ID format - use face path directly for filename
                    const faceFileName = extractAvatarFileName(facePath);
                    avatarUrl = constructAvatarUrl(profileId, faceFileName);
                } else {
                    // New profile ID format - extract filename from path
                    const faceFileName = extractAvatarFileName(facePath);
                    avatarUrl = constructAvatarUrl(profileId, faceFileName);
                }
                
                // Cache the result
                avatarCache.set(cacheKey, {
                    url: avatarUrl,
                    timestamp: Date.now()
                });
                
                return avatarUrl;
            }
        }
        
        // Fallback to old method
        return await generateLatestAvatarUrl(profileId);
        
    } catch (error) {
        console.error('Error getting latest avatar by profile ID:', error);
        return await generateLatestAvatarUrl(profileId);
    }
}

function getUserRegionFromToken() {
    if (!profileData?.accessToken) return 'TR';
    
    try {
        const tokenData = getUserDataFromToken(profileData.accessToken);
        if (tokenData?.name) {
            const nameParts = tokenData.name.split('|');
            return nameParts[0] || 'TR';
        }
    } catch (error) {
        console.error('Error getting region from token:', error);
    }
    
    return 'TR';
}

async function generateLatestAvatarUrlFallback(username) {
    try {
        const profileId = await findProfileId(username);
        if (profileId) {
            return await generateLatestAvatarUrl(profileId);
        }
    } catch (error) {
        console.error('Error in fallback avatar generation:', error);
    }
    return constructAvatarUrl('default');
}

// NEW: Load supported regions from region.txt
async function loadSupportedRegions() {
    try {
        const response = await fetch('region.txt');
        if (response.ok) {
            const text = await response.text();
            supportedRegions = text.split('\n').map(region => region.trim()).filter(region => region.length > 0);
            console.log('Supported regions loaded:', supportedRegions);
        }
    } catch (error) {
        console.log('No region.txt file found, allowing all regions');
        supportedRegions = []; // Empty array means all regions allowed
    }
}

// NEW: Check if a region/culture is supported
function isRegionSupported(culture) {
    if (!culture) return false;
    if (supportedRegions.length === 0) return true; // If no region file, allow all
    return supportedRegions.includes(culture);
}

// NEW: Extract culture from WebSocket data or login response
function extractCultureFromData(data) {
    if (data.culture) {
        return data.culture;
    }
    
    // Try to extract from token
    try {
        const tokenData = getUserDataFromToken(data.accessToken);
        return tokenData?.culture;
    } catch (error) {
        console.error('Error extracting culture from token:', error);
    }
    
    return null;
}

async function loadProIds() {
    try {
        const response = await fetch('obfx_pro.txt');
        if (response.ok) {
            const text = await response.text();
            proIds = text.split('\n').map(id => id.trim()).filter(id => id.length > 0);
        }
    } catch (error) {
        console.log('No obfx_pro.txt file found');
        proIds = [];
    }
}

async function loadPlusIds() {
    try {
        const response = await fetch('plus.txt');
        if (response.ok) {
            const text = await response.text();
            plusIds = text.split('\n').map(id => id.trim()).filter(id => id.length > 0);
        }
    } catch (error) {
        console.log('No plus.txt file found');
        plusIds = [];
    }
}

function checkUserPlan(profileId) {
    if (proIds.includes(profileId)) return 'Pro';
    if (plusIds.includes(profileId)) return 'Plus';
    return 'Free';
}

function updateUserPlan() {
    if (profileData && profileData.profileId) {
        currentUserPlan = checkUserPlan(profileData.profileId);
        const planElement = document.getElementById('userPlan');
        if (planElement) {
            planElement.textContent = currentUserPlan;
            planElement.className = `user-plan ${currentUserPlan.toLowerCase()}`;
        }
        
        // Update UI based on plan
        updateFeatureAccess();
    }
}

function updateFeatureAccess() {
    const userLevel = userData && userData.experience ? userData.experience.level : 1;
    const hasAccess = currentUserPlan === 'Plus' || currentUserPlan === 'Pro' || userLevel >= 10;
    
    // Daily tasks access
    const dailyTaskOverlay = document.getElementById('dailyTaskPremiumOverlay');
    const fastStartOverlay = document.getElementById('fastStartPremiumOverlay');
    
    if (dailyTaskOverlay && fastStartOverlay) {
        if (hasAccess) {
            dailyTaskOverlay.style.display = 'none';
            fastStartOverlay.style.display = 'none';
        } else {
            dailyTaskOverlay.style.display = 'flex';
            fastStartOverlay.style.display = 'flex';
        }
    }
    
    // Gifts access (Plus/Pro only)
    const giftsOverlay = document.getElementById('giftsPremiumOverlay');
    if (giftsOverlay) {
        if (currentUserPlan === 'Plus' || currentUserPlan === 'Pro') {
            giftsOverlay.style.display = 'none';
        } else {
            giftsOverlay.style.display = 'flex';
        }
    }
    
    // Friends Settings access - Premium tabs
    const requestsOverlay = document.getElementById('requestsTabPremiumOverlay');
    const blockedOverlay = document.getElementById('blockedTabPremiumOverlay');
    const vipFilterOverlay = document.getElementById('vipFilterPremiumOverlay');
    
    if (currentUserPlan === 'Plus' || currentUserPlan === 'Pro') {
        if (requestsOverlay) requestsOverlay.style.display = 'none';
        if (blockedOverlay) blockedOverlay.style.display = 'none';
        if (vipFilterOverlay) vipFilterOverlay.style.display = 'none';
    } else {
        if (requestsOverlay) requestsOverlay.style.display = 'flex';
        if (blockedOverlay) blockedOverlay.style.display = 'flex';
        if (vipFilterOverlay) vipFilterOverlay.style.display = 'flex';
    }
    
    // OBFX Pro button visibility - only show after main menu is shown
    const obfxProBtn = document.getElementById('obfxProBtn');
    if (obfxProBtn) {
        if (currentUserPlan === 'Pro') {
            obfxProBtn.style.display = 'flex';
        } else {
            obfxProBtn.style.display = 'none';
        }
    }
    
    // OBFX+ button visibility - show for Plus and Pro users only
    const obfxPlusBtn = document.getElementById('obfxPlusBtn');
    if (obfxPlusBtn) {
        if (currentUserPlan === 'Plus' || currentUserPlan === 'Pro') {
            obfxPlusBtn.style.display = 'flex';
        } else {
            obfxPlusBtn.style.display = 'none';
        }
    }
    
    // Update mood restrictions
    updateMoodDisplay();
}

function canUseFeature(featureType) {
    const userLevel = userData && userData.experience ? userData.experience.level : 1;
    
    switch (featureType) {
        case 'dailyTasks':
            return currentUserPlan === 'Plus' || currentUserPlan === 'Pro' || userLevel >= 10;
        case 'gifts':
            return currentUserPlan === 'Plus' || currentUserPlan === 'Pro';
        case 'friendsAdvanced':
            return currentUserPlan === 'Plus' || currentUserPlan === 'Pro';
        case 'obfxPro':
            return currentUserPlan === 'Pro';
        case 'obfxPlus':
            return currentUserPlan === 'Plus' || currentUserPlan === 'Pro';
        case 'mood':
            return true; // Everyone can access mood, but limited for free users
        default:
            return true;
    }
}

function showAccessDeniedNotification(featureType) {
    const userLevel = userData && userData.experience ? userData.experience.level : 1;
    
    if (featureType === 'obfxPro') {
        showTranslatedNotification('requiresObfxPro', 'warning');
    } else if (currentUserPlan === 'Free' && userLevel < 10) {
        showTranslatedNotification('requiresLevel10OrPlus', 'warning');
    } else {
        showTranslatedNotification('upgradeToObfxPlus', 'warning');
    }
}

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - Initializing application');
    
    // Check if translations are available
    if (typeof window.TRANSLATIONS === 'undefined') {
        console.error('TRANSLATIONS not found! language.js may not be loaded.');
        showNotification('Error: Language data not loaded', 'error');
        return;
    }
    
    console.log('Translations loaded successfully');
    
    loadStoredData();
    setupEventListeners();
    loadLanguage();
    loadZoom();
    loadBannedIds();
    loadScammerData();
    loadPlusIds();
    loadProIds();
    loadProAccounts();
    loadSupportedRegions(); // NEW: Load supported regions
    
    console.log('Application initialized successfully');
});

// OBFX Pro Functions
function loadProAccounts() {
    const stored = localStorage.getItem(STORAGE_KEYS.PRO_ACCOUNTS);
    if (stored) {
        try {
            proAccounts = JSON.parse(stored);
            updateProAccountsCount();
        } catch (error) {
            proAccounts = [];
        }
    }
}

function saveProAccounts() {
    localStorage.setItem(STORAGE_KEYS.PRO_ACCOUNTS, JSON.stringify(proAccounts));
    updateProAccountsCount();
}

function updateProAccountsCount() {
    const countElement = document.getElementById('proAccountsCount');
    if (countElement) {
        countElement.textContent = proAccounts.length;
    }
}

function showObfxPro() {
    if (!canUseFeature('obfxPro')) {
        showAccessDeniedNotification('obfxPro');
        return;
    }
    
    hideAllScreens();
    document.getElementById('obfxProScreen').style.display = 'block';
    
    // Clear inputs
    document.getElementById('proUsernameInput').value = '';
    document.getElementById('proPasswordInput').value = '';
    document.getElementById('proWebsocketInput').value = '';
    document.getElementById('accountInfoUsernameInput').value = '';
    
    // Reset to account management tab
    switchProTab('accountManagement');
    
    updateProAccountsCount();
}

function hideObfxPro() {
    document.getElementById('obfxProScreen').style.display = 'none';
    showMainMenu();
}

function switchProTab(tab) {
    currentProTab = tab;
    
    // Update tab buttons
    document.getElementById('proAccountManagementTab').classList.toggle('active', tab === 'accountManagement');
    document.getElementById('proAccountInfoTab').classList.toggle('active', tab === 'accountInfo');
    document.getElementById('proInboxTab').classList.toggle('active', tab === 'inbox');
    
    // Update tab content
    document.getElementById('accountManagementContent').classList.toggle('active', tab === 'accountManagement');
    document.getElementById('accountInfoContent').classList.toggle('active', tab === 'accountInfo');
    document.getElementById('inboxContent').classList.toggle('active', tab === 'inbox');
    
    // Clear account info search results when switching away
    if (tab !== 'accountInfo') {
        const accountInfoResult = document.getElementById('accountInfoResult');
        if (accountInfoResult) {
            accountInfoResult.style.display = 'none';
        }
        document.getElementById('accountInfoUsernameInput').value = '';
        currentAccountInfoData = null;
    }
    
    // Load inbox data when switching to inbox tab
    if (tab === 'inbox') {
        loadInboxConversations();
    }
}

function switchProMethod(method) {
    currentProMethod = method;
    
    const accountBtn = document.getElementById('proAccountMethodBtn');
    const websocketBtn = document.getElementById('proWebsocketMethodBtn');
    const accountForm = document.getElementById('proAccountForm');
    const websocketForm = document.getElementById('proWebsocketForm');
    
    if (method === 'account') {
        accountBtn.classList.add('active');
        websocketBtn.classList.remove('active');
        accountForm.classList.add('active');
        websocketForm.classList.remove('active');
    } else {
        websocketBtn.classList.add('active');
        accountBtn.classList.remove('active');
        websocketForm.classList.add('active');
        accountForm.classList.remove('active');
    }
}

async function saveProAccount() {
    if (currentProMethod === 'account') {
        const username = document.getElementById('proUsernameInput').value.trim();
        const password = document.getElementById('proPasswordInput').value.trim();
        
        if (!username || !password) {
            showTranslatedNotification('fillAllFields', 'error');
            return;
        }
        
        // Check if account already exists
        const exists = proAccounts.some(acc => 
            acc.type === 'account' && acc.username === username
        );
        
        if (exists) {
            showTranslatedNotification('accountAlreadyExists', 'warning');
            return;
        }
        
        // Test login first
        try {
            const response = await fetch(`${ACCOUNT_API_URL}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
            
            const result = await response.json();
            
            if (response.ok && result.success) {
                // NEW: Check region support for account login
                const culture = result.culture;
                if (!isRegionSupported(culture)) {
                    showTranslatedNotification('regionNotSupported', 'error');
                    return;
                }
                
                proAccounts.push({
                    type: 'account',
                    username: username,
                    password: password,
                    profileId: result.profileId,
                    accessToken: result.accessToken,
                    region: result.culture && result.culture.toLowerCase().startsWith('en') ? 'us' : 'eu'
                });
                
                saveProAccounts();
                
                document.getElementById('proUsernameInput').value = '';
                document.getElementById('proPasswordInput').value = '';
                
                showTranslatedNotification('accountSaved', 'success');
            } else {
                showTranslatedNotification('loginError', 'error');
            }
        } catch (error) {
            showTranslatedNotification('connectionError', 'error');
        }
    } else {
        const websocketData = document.getElementById('proWebsocketInput').value.trim();
        
        if (!websocketData) {
            showTranslatedNotification('pleaseEnterWebsocketData', 'error');
            return;
        }
        
        const parsed = parseWebSocketData(websocketData);
        if (!parsed) {
            showTranslatedNotification('invalidWebsocketFormat', 'error');
            return;
        }
        
        // NEW: Check region support for WebSocket login
        const culture = extractCultureFromData(parsed);
        if (!isRegionSupported(culture)) {
            showTranslatedNotification('regionNotSupported', 'error');
            return;
        }
        
        // Check if account already exists
        const exists = proAccounts.some(acc => acc.profileId === parsed.profileId);
        
        if (exists) {
            showTranslatedNotification('accountAlreadyExists', 'warning');
            return;
        }
        
        proAccounts.push({
            type: 'websocket',
            profileId: parsed.profileId,
            accessToken: parsed.accessToken,
            region: currentRegion // Use current region
        });
        
        saveProAccounts();
        
        document.getElementById('proWebsocketInput').value = '';
        
        showTranslatedNotification('accountSaved', 'success');
    }
}

function resetProAccounts() {
    proAccounts = [];
    saveProAccounts();
    
    showTranslatedNotification('accountsReset', 'success');
}

async function runBulkTasks(fast = false) {
    if (proAccounts.length === 0) {
        showTranslatedNotification('noAccountsToProcess', 'info');
        return;
    }
    
    showTranslatedNotification('processingAccounts', 'info', { count: proAccounts.length });
    
    let processedCount = 0;
    
    // Process all accounts in parallel for speed
    const accountTasks = proAccounts.map(async (account) => {
        try {
            let accountData;
            
            if (account.type === 'account') {
                // Login with username/password
                const response = await fetch(`${ACCOUNT_API_URL}/login`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        username: account.username,
                        password: account.password
                    })
                });
                
                const result = await response.json();
                
                if (response.ok && result.success) {
                    accountData = {
                        profileId: result.profileId,
                        accessToken: result.accessToken,
                        region: result.culture && result.culture.toLowerCase().startsWith('en') ? 'us' : 'eu'
                    };
                } else {
                    console.error(`Failed to login account ${account.username}`);
                    return false;
                }
            } else {
                accountData = {
                    profileId: account.profileId,
                    accessToken: account.accessToken,
                    region: account.region || 'us'
                };
            }
            
            // Run daily tasks for this account
            if (fast) {
                await runFastDailyTasksForAccount(accountData);
            } else {
                await runEnhancedDailyTasksForAccount(accountData);
            }
            
            return true;
            
        } catch (error) {
            console.error(`Error processing account:`, error);
            return false;
        }
    });
    
    // Wait for all accounts to be processed
    const results = await Promise.all(accountTasks);
    processedCount = results.filter(result => result === true).length;
    
    showTranslatedNotification('accountsProcessed', 'success', { processed: processedCount, total: proAccounts.length });
}

async function runEnhancedDailyTasksForAccount(accountData) {
    const endpoints = API_ENDPOINTS[accountData.region];
    const headers = {
        "Authorization": `Bearer ${accountData.accessToken}`,
        "content-type": "application/json"
    };

    try {
        // Create all tasks for parallel execution
        const allTasks = [];

        // 1. Pet interactions
        for (const petId of PET_IDS) {
            allTasks.push(
                fetch(`${endpoints.pets}/${petId}/interactions`, {
                    method: "POST",
                    headers,
                    body: JSON.stringify({
                        profileId: accountData.profileId,
                        gameId: "j68d"
                    })
                }).catch(() => {})
            );
        }

        // 2. Complete daily quests
        for (const questType of DAILY_QUEST_TYPES) {
            const encodedProfileId = encodeProfileId(accountData.profileId);
            allTasks.push(
                fetch(`${endpoints.quests}/${encodedProfileId}/games/j68d/quests/${questType}/state`, {
                    method: "PUT",
                    headers,
                    body: JSON.stringify({ state: "Complete" })
                }).catch(() => {})
            );
        }

        // 3. VIP pickup gifts (3 times)
        for (let i = 0; i < 3; i++) {
            const encodedProfileId = encodeProfileId(accountData.profileId);
            allTasks.push(
                fetch(`${endpoints.quests}/${encodedProfileId}/games/j68d/quests/daily_open_gift_vip/progress`, {
                    method: "PUT",
                    headers,
                    body: JSON.stringify({ progress: 1 })
                }).catch(() => {})
            );
        }

        // 4. Normal pickup gifts (4 times)
        for (let i = 0; i < 4; i++) {
            const encodedProfileId = encodeProfileId(accountData.profileId);
            allTasks.push(
                fetch(`${endpoints.quests}/${encodedProfileId}/games/j68d/quests/daily_open_gift_normal/progress`, {
                    method: "PUT",
                    headers,
                    body: JSON.stringify({ progress: 1 })
                }).catch(() => {})
            );
        }

        // 5. VIP pickup rewards (3 times)
        for (let i = 0; i < 3; i++) {
            const encodedProfileId = encodeProfileId(accountData.profileId);
            allTasks.push(
                fetch(`${endpoints.rewards}/${encodedProfileId}/games/j68d/rewards/daily_pickup_vip`, {
                    method: "PUT",
                    headers,
                    body: JSON.stringify({ state: "Claimed" })
                }).catch(() => {})
            );
        }

        // 6. Normal pickup rewards (4 times)
        for (let i = 0; i < 4; i++) {
            const encodedProfileId = encodeProfileId(accountData.profileId);
            allTasks.push(
                fetch(`${endpoints.rewards}/${encodedProfileId}/games/j68d/rewards/daily_pickup`, {
                    method: "PUT",
                    headers,
                    body: JSON.stringify({ state: "Claimed" })
                }).catch(() => {})
            );
        }

        // Execute all tasks in parallel
        await Promise.all(allTasks);

    } catch (error) {
        console.error('Error in enhanced daily tasks for account:', error);
    }
}

async function runFastDailyTasksForAccount(accountData) {
    const endpoints = API_ENDPOINTS[accountData.region];
    const headers = {
        "Authorization": `Bearer ${accountData.accessToken}`,
        "content-type": "application/json"
    };

    try {
        const allTasks = [];

        // Add all tasks to parallel execution
        for (const petId of PET_IDS) {
            allTasks.push(
                fetch(`${endpoints.pets}/${petId}/interactions`, {
                    method: "POST",
                    headers,
                    body: JSON.stringify({ 
                        profileId: accountData.profileId, 
                        gameId: "j68d" 
                    })
                }).catch(() => {})
            );
        }

        for (const questType of DAILY_QUEST_TYPES) {
            const encodedProfileId = encodeProfileId(accountData.profileId);
            allTasks.push(
                fetch(`${endpoints.quests}/${encodedProfileId}/games/j68d/quests/${questType}/state`, {
                    method: "PUT",
                    headers,
                    body: JSON.stringify({ state: "Complete" })
                }).catch(() => {})
            );
        }

        for (let i = 0; i < 3; i++) {
            const encodedProfileId = encodeProfileId(accountData.profileId);
            allTasks.push(
                fetch(`${endpoints.quests}/${encodedProfileId}/games/j68d/quests/daily_open_gift_vip/progress`, {
                    method: "PUT",
                    headers,
                    body: JSON.stringify({ progress: 1 })
                }).catch(() => {})
            );
        }

        for (let i = 0; i < 4; i++) {
            const encodedProfileId = encodeProfileId(accountData.profileId);
            allTasks.push(
                fetch(`${endpoints.quests}/${encodedProfileId}/games/j68d/quests/daily_open_gift_normal/progress`, {
                    method: "PUT",
                    headers,
                    body: JSON.stringify({ progress: 1 })
                }).catch(() => {})
            );
        }

        for (let i = 0; i < 3; i++) {
            const encodedProfileId = encodeProfileId(accountData.profileId);
            allTasks.push(
                fetch(`${endpoints.rewards}/${encodedProfileId}/games/j68d/rewards/daily_pickup_vip`, {
                    method: "PUT",
                    headers,
                    body: JSON.stringify({ state: "Claimed" })
                }).catch(() => {})
            );
        }

        for (let i = 0; i < 4; i++) {
            const encodedProfileId = encodeProfileId(accountData.profileId);
            allTasks.push(
                fetch(`${endpoints.rewards}/${encodedProfileId}/games/j68d/rewards/daily_pickup`, {
                    method: "PUT",
                    headers,
                    body: JSON.stringify({ state: "Claimed" })
                }).catch(() => {})
            );
        }

        // Execute all tasks in parallel
        await Promise.all(allTasks);

    } catch (error) {
        console.error('Error in fast daily tasks for account:', error);
    }
}

// NEW: Inbox Functions
async function loadInboxConversations() {
    if (!profileData) {
        showTranslatedNotification('pleaseLoginFirst', 'error');
        return;
    }
    
    const conversationsList = document.getElementById('inboxConversationsList');
    conversationsList.innerHTML = '<div class="loading-conversations">' + window.getTranslation('loadingConversations') + '</div>';
    
    try {
        const endpoints = API_ENDPOINTS[currentRegion];
        const encodedProfileId = encodeProfileId(profileData.profileId);
        
        const response = await makeAuthenticatedRequest(
            `${endpoints.gamemessaging}/participants/${encodedProfileId}/conversations?page=1&pageSize=50`,
            {
                headers: {
                    'Authorization': `Bearer ${profileData.accessToken}`,
                    'Content-Type': 'application/json'
                }
            }
        );
        
        if (response.ok) {
            const conversations = await response.json();
            allConversations = conversations || [];
            currentConversationPage = 0;
            displayConversations();
        } else {
            console.error('Failed to load conversations:', response.status);
            conversationsList.innerHTML = '<div class="no-conversations">' + window.getTranslation('failedToLoadConversations') + '</div>';
        }
    } catch (error) {
        console.error('Error loading conversations:', error);
        conversationsList.innerHTML = '<div class="no-conversations">' + window.getTranslation('errorLoadingConversations') + '</div>';
    }
}

async function displayConversations() {
    const conversationsList = document.getElementById('inboxConversationsList');
    const pagination = document.getElementById('inboxPagination');
    
    if (allConversations.length === 0) {
        conversationsList.innerHTML = '<div class="no-conversations">' + window.getTranslation('noConversations') + '</div>';
        pagination.style.display = 'none';
        return;
    }
    
    // Calculate pagination
    const totalPages = Math.ceil(allConversations.length / CONVERSATIONS_PER_PAGE);
    const startIndex = currentConversationPage * CONVERSATIONS_PER_PAGE;
    const endIndex = startIndex + CONVERSATIONS_PER_PAGE;
    const pageConversations = allConversations.slice(startIndex, endIndex);
    
    conversationsList.innerHTML = '';
    
    // Process conversations and get profile info
    for (const conversation of pageConversations) {
        const conversationItem = await createConversationItem(conversation);
        conversationsList.appendChild(conversationItem);
    }
    
    // Update pagination
    if (totalPages > 1) {
        pagination.style.display = 'flex';
        document.getElementById('inboxPageInfo').textContent = `${currentConversationPage + 1} / ${totalPages}`;
        document.getElementById('prevInboxBtn').disabled = currentConversationPage === 0;
        document.getElementById('nextInboxBtn').disabled = currentConversationPage >= totalPages - 1;
    } else {
        pagination.style.display = 'none';
    }
}

async function createConversationItem(conversation) {
    const conversationItem = document.createElement('div');
    conversationItem.className = 'conversation-item';
    conversationItem.style.cursor = 'pointer';
    
    // Get other participant ID (not our own)
    const otherParticipantId = conversation.participants.find(id => id !== profileData.profileId);
    
    // Parse latest message
    let messageBody = window.getTranslation('noMessage');
    let messageTime = '';
    
    try {
        if (conversation.latestMessage) {
            const messageData = JSON.parse(conversation.latestMessage);
            messageBody = messageData.MessageBody || window.getTranslation('noMessage');
            messageTime = formatTurkishDateTime(messageData.Timestamp || conversation.latestActivity);
        }
    } catch (error) {
        console.error('Error parsing latest message:', error);
        messageTime = formatTurkishDateTime(conversation.latestActivity);
    }
    
    // Get participant profile info and avatar
    let participantName = 'Loading...';
    let avatarUrl = constructAvatarUrl(otherParticipantId);
    
    try {
        const participantProfile = await getParticipantProfile(otherParticipantId);
        if (participantProfile) {
            participantName = participantProfile.name;
            avatarUrl = participantProfile.avatar;
        }
    } catch (error) {
        console.error('Error loading participant profile:', error);
        participantName = window.getTranslation('unknownUser');
    }
    
    conversationItem.innerHTML = `
        <div class="conversation-avatar">
            <img src="${avatarUrl}" alt="${participantName}" />
        </div>
        <div class="conversation-content">
            <div class="conversation-participant-name">${participantName}</div>
            <div class="conversation-message">${messageBody}</div>
        </div>
        <div class="conversation-time">${messageTime}</div>
    `;
    
    // Add click event to open conversation
    conversationItem.addEventListener('click', () => {
        openConversation(conversation.conversationId, otherParticipantId, participantName, avatarUrl);
    });
    
    return conversationItem;
}

async function getParticipantProfile(profileId) {
    try {
        const endpoints = API_ENDPOINTS[currentRegion];
        const response = await makeAuthenticatedRequest(endpoints.edgerelationships, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${profileData.accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: `query GetProfiles($profileIds: [String!]!, $gameId: String!) {
                    profiles(profileIds: $profileIds) {
                        id
                        name
                        avatar(preferredGameId: $gameId) {
                            gameId
                            face
                            full
                        }
                    }
                }`,
                variables: {
                    profileIds: [profileId],
                    gameId: "j68d"
                }
            })
        });

        if (response.ok) {
            const data = await response.json();
            if (data.data?.profiles?.length > 0) {
                const profile = data.data.profiles[0];
                let avatarUrl = constructAvatarUrl(profileId);
                
                if (profile?.avatar?.face) {
                    const facePath = profile.avatar.face;
                    const faceFileName = extractAvatarFileName(facePath);
                    avatarUrl = constructAvatarUrl(profileId, faceFileName);
                }
                
                return {
                    name: profile.name || window.getTranslation('unknownUser'),
                    avatar: avatarUrl
                };
            }
        }
    } catch (error) {
        console.error('Error getting participant profile:', error);
    }
    
    return {
        name: window.getTranslation('unknownUser'),
        avatar: constructAvatarUrl(profileId)
    };
}

async function openConversation(conversationId, otherProfileId, participantName, avatarUrl) {
    currentConversationId = conversationId;
    currentConversationOtherProfile = otherProfileId;
    
    // Switch to conversation view
    document.getElementById('inboxView').style.display = 'none';
    document.getElementById('conversationView').style.display = 'block';
    
    // Update conversation header
    document.getElementById('conversationUserName').textContent = participantName;
    document.getElementById('conversationUserAvatar').src = avatarUrl;
    
    // Load conversation messages
    await loadConversationMessages();
}

async function loadConversationMessages() {
    const messagesList = document.getElementById('conversationMessagesList');
    messagesList.innerHTML = '<div class="loading-messages">' + window.getTranslation('loadingMessages') + '</div>';
    
    try {
        const endpoints = API_ENDPOINTS[currentRegion];
        const encodedProfileId = encodeProfileId(profileData.profileId);
        
        const response = await makeAuthenticatedRequest(
            `${endpoints.gamemessaging}/conversations/${currentConversationId}/history?profileId=${encodedProfileId}&pageSize=50`,
            {
                headers: {
                    'Authorization': `Bearer ${profileData.accessToken}`,
                    'Content-Type': 'application/json'
                }
            }
        );
        
        if (response.ok) {
            const messages = await response.json();
            currentConversationMessages = messages || [];
            currentMessagesPage = 0;
            displayConversationMessages();
        } else {
            console.error('Failed to load messages:', response.status);
            messagesList.innerHTML = '<div class="no-messages">' + window.getTranslation('failedToLoadMessages') + '</div>';
        }
    } catch (error) {
        console.error('Error loading messages:', error);
        messagesList.innerHTML = '<div class="no-messages">' + window.getTranslation('errorLoadingMessages') + '</div>';
    }
}

async function displayConversationMessages() {
    const messagesList = document.getElementById('conversationMessagesList');
    const pagination = document.getElementById('conversationPagination');
    
    if (currentConversationMessages.length === 0) {
        messagesList.innerHTML = '<div class="no-messages">' + window.getTranslation('noMessages') + '</div>';
        pagination.style.display = 'none';
        return;
    }
    
    // Calculate pagination
    const totalPages = Math.ceil(currentConversationMessages.length / MESSAGES_PER_PAGE);
    const startIndex = currentMessagesPage * MESSAGES_PER_PAGE;
    const endIndex = startIndex + MESSAGES_PER_PAGE;
    const pageMessages = currentConversationMessages.slice(startIndex, endIndex);
    
    messagesList.innerHTML = '';
    
    // Create message items
    for (const message of pageMessages) {
        const messageItem = await createMessageItem(message);
        messagesList.appendChild(messageItem);
    }
    
    // Update pagination
    if (totalPages > 1) {
        pagination.style.display = 'flex';
        document.getElementById('messagesPageInfo').textContent = `${currentMessagesPage + 1} / ${totalPages}`;
        document.getElementById('prevMessagesBtn').disabled = currentMessagesPage === 0;
        document.getElementById('nextMessagesBtn').disabled = currentMessagesPage >= totalPages - 1;
    } else {
        pagination.style.display = 'none';
    }
}

async function createMessageItem(message) {
    const messageItem = document.createElement('div');
    const isOwnMessage = message.senderProfileId === profileData.profileId;
    
    messageItem.className = isOwnMessage ? 'message-item own-message' : 'message-item other-message';
    
    // Get sender profile info
    let senderName = window.getTranslation('unknownUser');
    let avatarUrl = constructAvatarUrl(message.senderProfileId);
    
    try {
        const senderProfile = await getParticipantProfile(message.senderProfileId);
        if (senderProfile) {
            senderName = senderProfile.name;
            avatarUrl = senderProfile.avatar;
        }
    } catch (error) {
        console.error('Error loading sender profile:', error);
    }
    
    const messageTime = formatTurkishDateTime(message.timestamp);
    
    if (isOwnMessage) {
        // Our message - avatar and name on the right, time on the left
        messageItem.innerHTML = `
            <div class="message-time">${messageTime}</div>
            <div class="message-content">
                <div class="message-body">${message.messageBody}</div>
                <div class="message-sender">${senderName}</div>
            </div>
            <div class="message-avatar">
                <img src="${avatarUrl}" alt="${senderName}" />
            </div>
        `;
    } else {
        // Other person's message - avatar and name on the left, time on the right
        messageItem.innerHTML = `
            <div class="message-avatar">
                <img src="${avatarUrl}" alt="${senderName}" />
            </div>
            <div class="message-content">
                <div class="message-sender">${senderName}</div>
                <div class="message-body">${message.messageBody}</div>
            </div>
            <div class="message-time">${messageTime}</div>
        `;
    }
    
    return messageItem;
}

function backToInbox() {
    document.getElementById('conversationView').style.display = 'none';
    document.getElementById('inboxView').style.display = 'block';
    
    currentConversationId = null;
    currentConversationOtherProfile = null;
    currentConversationMessages = [];
    currentMessagesPage = 0;
}

function changeInboxPage(direction) {
    const totalPages = Math.ceil(allConversations.length / CONVERSATIONS_PER_PAGE);
    currentConversationPage += direction;
    
    if (currentConversationPage < 0) {
        currentConversationPage = 0;
    } else if (currentConversationPage >= totalPages) {
        currentConversationPage = totalPages - 1;
    }
    
    displayConversations();
}

function changeMessagesPage(direction) {
    const totalPages = Math.ceil(currentConversationMessages.length / MESSAGES_PER_PAGE);
    currentMessagesPage += direction;
    
    if (currentMessagesPage < 0) {
        currentMessagesPage = 0;
    } else if (currentMessagesPage >= totalPages) {
        currentMessagesPage = totalPages - 1;
    }
    
    displayConversationMessages();
}

function formatTurkishDateTime(dateString) {
    if (!dateString) return '-';
    
    try {
        const date = new Date(dateString);
        
        // Convert to Turkish time (UTC+3)
        const turkishTime = new Date(date.getTime() + (3 * 60 * 60 * 1000));
        
        const hours = turkishTime.getUTCHours().toString().padStart(2, '0');
        const minutes = turkishTime.getUTCMinutes().toString().padStart(2, '0');
        const day = turkishTime.getUTCDate().toString().padStart(2, '0');
        const month = (turkishTime.getUTCMonth() + 1).toString().padStart(2, '0');
        const year = turkishTime.getUTCFullYear();
        
        return `${hours}:${minutes} ${day}.${month}.${year}`;
    } catch (error) {
        console.error('Error formatting date:', error);
        return '-';
    }
}

// Account Info Functions - ENHANCED WITH OLD PROFILE ID SUPPORT AND IMPROVED LOCATION RESOLUTION
async function handleAccountInfoSearch() {
    const username = document.getElementById('accountInfoUsernameInput').value.trim();
    
    if (!username) {
        showTranslatedNotification('pleaseEnterUsername', 'error');
        return;
    }
    
    try {
        showTranslatedNotification('searchingForUser', 'info', {}, `${window.getTranslation('searchingForUser')}${username}`);
        
        // Find profile ID
        const profileId = await findProfileId(username);
        if (!profileId) {
            showTranslatedNotification('userNotFound', 'error', {}, `${window.getTranslation('user')} ${username}${window.getTranslation('userNotFound')}`);
            document.getElementById('accountInfoResult').style.display = 'none';
            return;
        }
        
        // Show user profile with enhanced avatar support
        const avatarUrl = await getLatestAvatarByProfileId(profileId);
        document.getElementById('accountInfoUserAvatar').src = avatarUrl;
        document.getElementById('accountInfoUsername').textContent = username;
        
        // Clear previous friend slots
        clearFriendSlots();
        
        // Clear previous account details
        clearAccountDetails();
        
        // Clear home image
        clearHomeImage();
        
        document.getElementById('accountInfoResult').style.display = 'block';
        
        // Load all account info in parallel
        await Promise.all([
            loadAccountFriends(profileId),
            loadAccountDetails(profileId),
            loadAccountAttributes(profileId)
        ]);
        
        showTranslatedNotification('accountInfoLoadedSuccess', 'success');
        
    } catch (error) {
        console.error('Error loading account info:', error);
        showTranslatedNotification('errorLoadingAccountInfo', 'error');
    }
}

async function loadAccountFriends(profileId) {
    try {
        const endpoints = API_ENDPOINTS[currentRegion];
        const encodedProfileId = encodeProfileId(profileId);
        const response = await makeAuthenticatedRequest(`${endpoints.profilerelationshipsv3}/${encodedProfileId}/relationships/labels/j68d`, {
            headers: {
                'Authorization': `Bearer ${profileData.accessToken}`,
                'Content-Type': 'application/json'
            }
        });
        
        if (response.ok) {
            const friendsData = await response.json();
            await displayAccountFriends(friendsData);
        } else {
            console.error('Failed to load account friends');
        }
    } catch (error) {
        console.error('Error loading account friends:', error);
    }
}

// FIXED: Display account friends with multiple labels support - each label gets its own slot
async function displayAccountFriends(friendsData) {
    console.log('Friend data received:', friendsData);
    
    // Create an array to store individual label entries
    const labelEntries = [];
    
    // Process all friends and create separate entries for each label
    friendsData.forEach(friend => {
        const profileId = friend.profileId;
        
        if (friend.labels && friend.labels.length > 0) {
            friend.labels.forEach(label => {
                labelEntries.push({
                    profileId: profileId,
                    labelResourceIdentifier: label.labelResourceIdentifier,
                    gameId: label.gameId,
                    created: label.created
                });
            });
        }
    });
    
    // Take up to 6 label entries (not unique profiles, but unique label instances)
    const displayEntries = labelEntries.slice(0, 6);
    console.log('Label entries to display:', displayEntries);
    
    // Fill all 6 slots
    for (let i = 0; i < 6; i++) {
        const slotElement = document.getElementById(`friendSlot${i}`);
        
        if (slotElement) {
            if (i < displayEntries.length) {
                const entry = displayEntries[i];
                
                // Get friend avatar - ENHANCED WITH OLD PROFILE ID SUPPORT
                const avatarUrl = await getLatestAvatarByProfileId(entry.profileId);
                
                // Process the label
                let labelIcon = '';
                let labelClass = '';
                
                if (entry.labelResourceIdentifier === 'bestFriends') {
                    labelIcon = '⭐';
                    labelClass = 'best-friend';
                } else if (entry.labelResourceIdentifier === 'sweetHearts') {
                    labelIcon = '💕';
                    labelClass = 'sweet-heart';
                }
                
                // Format date
                const formattedDate = formatTurkishDate(entry.created);
                
                // Create slot content
                let slotContent = `<img src="${avatarUrl}" alt="Friend" class="friend-avatar">`;
                
                // Add relationship icon
                if (labelIcon) {
                    slotContent += `<div class="friend-label ${labelClass}">${labelIcon}</div>`;
                    slotContent += `<div class="friend-date">${formattedDate}</div>`;
                }
                
                slotElement.innerHTML = slotContent;
                slotElement.classList.remove('empty');
                slotElement.classList.add('filled');
                
                console.log(`Filled slot ${i} with entry:`, entry.profileId, 'Label:', entry.labelResourceIdentifier, 'Date:', formattedDate);
            } else {
                // Slot is empty
                slotElement.innerHTML = '';
                slotElement.classList.remove('filled');
                slotElement.classList.add('empty');
                console.log(`Slot ${i} is empty`);
            }
        }
    }
    
    console.log('All 6 friend slots processed');
}

async function loadAccountDetails(profileId) {
    try {
        const endpoints = API_ENDPOINTS[currentRegion];
        const encodedProfileId = encodeProfileId(profileId);
        const response = await makeAuthenticatedRequest(`${endpoints.profileidentity}/profiles/${encodedProfileId}`, {
            headers: {
                'Authorization': `Bearer ${profileData.accessToken}`,
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            const data = await response.json();
            // FIX: The response is a single object, not an array
            if (data) {
                displayAccountDetails(data);
            }
        }
    } catch (error) {
        console.error('Error loading account details:', error);
    }
}

function displayAccountDetails(profileData) {
    // Account created date
    const createdDate = formatTurkishDate(profileData.created);
    document.getElementById('accountCreatedDate').textContent = createdDate;
    
    // Last login date for j68d game
    let lastLoginDate = '-';
    if (profileData.latestLogins) {
        const j68dLogin = profileData.latestLogins.find(login => login.game === 'j68d');
        if (j68dLogin) {
            lastLoginDate = formatTurkishDate(j68dLogin.timestamp);
        }
    }
    document.getElementById('accountLastLogin').textContent = lastLoginDate;
}

async function loadAccountAttributes(profileId) {
    try {
        const endpoints = API_ENDPOINTS[currentRegion];
        const encodedProfileId = encodeProfileId(profileId);
        const response = await makeAuthenticatedRequest(`${endpoints.profileattributes}/${encodedProfileId}/games/j68d/attributes`, {
            headers: {
                'Authorization': `Bearer ${profileData.accessToken}`,
                'Content-Type': 'application/json'
            }
        });
        
        if (response.ok) {
            const attributesData = await response.json();
            await displayAccountAttributes(attributesData);
        }
    } catch (error) {
        console.error('Error loading account attributes:', error);
    }
}

async function displayAccountAttributes(attributesData) {
    let location = '-';
    let homeName = '-';
    let homeLastEdit = '-';
    let homeEditCount = '-';
    let profileAnimDate = '-';
    let profileAnimCount = '-';
    
    // ENHANCED LOCATION RESOLUTION - Extract location from ChatRoomPositionData
    if (attributesData.additionalData && attributesData.additionalData.ChatRoomPositionData) {
        try {
            const positionData = JSON.parse(attributesData.additionalData.ChatRoomPositionData);
            if (positionData.roomType) {
                const roomType = positionData.roomType;
                
                // Check if roomType is an ID (long alphanumeric string typically > 20 characters)
                if (roomType.length > 20 && /^[a-f0-9]+$/.test(roomType)) {
                    // It's a home ID, resolve to owner name
                    const homeOwnerName = await getHomeOwnerName(roomType);
                    location = homeOwnerName || roomType;
                } else {
                    // It's a regular room name
                    location = roomType;
                }
            }
        } catch (error) {
            console.error('Error parsing ChatRoomPositionData:', error);
        }
    }
    
    // Load home information
    if (attributesData.additionalData && attributesData.additionalData.DefaultMyHome) {
        const homeId = attributesData.additionalData.DefaultMyHome;
        const homeData = await getHomeData(homeId);
        
        if (homeData) {
            homeName = homeData.title || '-';
            homeLastEdit = formatTurkishDate(homeData.lastEditedDate);
            homeEditCount = homeData.editCount || 0;
            
            // Load home image
            await loadHomeImage(homeData);
        }
    }
    
    // Load profile popup customization info
    if (attributesData.additionalData && attributesData.additionalData.ProfilePopupCustomization) {
        const popupId = attributesData.additionalData.ProfilePopupCustomization;
        const popupData = await getProfilePopupData(popupId);
        
        if (popupData) {
            profileAnimDate = formatTurkishDate(popupData.lastEditedDate);
            profileAnimCount = popupData.editCount || 0;
        }
    }
    
    // Update UI
    document.getElementById('accountLocation').textContent = location;
    document.getElementById('accountHomeName').textContent = homeName;
    document.getElementById('accountHomeLastEdit').textContent = homeLastEdit;
    document.getElementById('accountHomeEditCount').textContent = homeEditCount;
    document.getElementById('accountProfileAnimDate').textContent = profileAnimDate;
    document.getElementById('accountProfileAnimCount').textContent = profileAnimCount;
}

// ENHANCED HOME OWNER NAME RESOLUTION
async function getHomeOwnerName(homeId) {
    try {
        console.log(`Resolving home owner for ID: ${homeId}`);
        
        // Step 1: Get home data from profilegeneratedcontent API
        const homeData = await getHomeData(homeId);
        if (homeData && homeData.owner) {
            console.log(`Found home owner ID: ${homeData.owner}`);
            
            // Step 2: Get owner profile data from profileidentity API
            const ownerData = await getOwnerData(homeData.owner);
            if (ownerData && ownerData.name) {
                console.log(`Resolved owner name: ${ownerData.name}`);
                return `${ownerData.name}${window.getTranslation('theHouse')}`; // "{name} Evi" in Turkish
            }
        }
    } catch (error) {
        console.error('Error getting home owner name:', error);
    }
    return null;
}

async function getHomeData(homeId) {
    try {
        const endpoints = API_ENDPOINTS[currentRegion];
        const encodedHomeId = encodeProfileId(homeId);
        const response = await makeAuthenticatedRequest(`${endpoints.profilegeneratedcontent}/${encodedHomeId}`, {
            headers: {
                'Authorization': `Bearer ${profileData.accessToken}`,
                'Content-Type': 'application/json'
            }
        });
        
        if (response.ok) {
            const data = await response.json();
            console.log('Home data:', data);
            return data;
        } else {
            console.error(`Home data request failed: ${response.status}`);
        }
    } catch (error) {
        console.error('Error getting home data:', error);
    }
    return null;
}

// FIXED: Owner data resolution using correct API endpoint and response handling
async function getOwnerData(ownerId) {
    try {
        const endpoints = API_ENDPOINTS[currentRegion];
        const encodedOwnerId = encodeProfileId(ownerId);
        const response = await makeAuthenticatedRequest(`${endpoints.profileidentity}/profiles/${encodedOwnerId}`, {
            headers: {
                'Authorization': `Bearer ${profileData.accessToken}`,
                'Content-Type': 'application/json'
            }
        });
        
        if (response.ok) {
            const data = await response.json();
            console.log('Owner data:', data);
            // FIX: Response is a single object, not an array
            return data;
        } else {
            console.error(`Owner data request failed: ${response.status}`);
        }
    } catch (error) {
        console.error('Error getting owner data:', error);
    }
    return null;
}

async function getProfilePopupData(popupId) {
    try {
        const endpoints = API_ENDPOINTS[currentRegion];
        const encodedPopupId = encodeProfileId(popupId);
        const response = await makeAuthenticatedRequest(`${endpoints.profilegeneratedcontent}/${encodedPopupId}`, {
            headers: {
                'Authorization': `Bearer ${profileData.accessToken}`,
                'Content-Type': 'application/json'
            }
        });
        
        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.error('Error getting profile popup data:', error);
    }
    return null;
}

async function loadHomeImage(homeData) {
    const homeImageContainer = document.getElementById('accountHomeImageContainer');
    const homeImage = document.getElementById('accountHomeImage');
    const homeImageLoading = document.getElementById('homeImageLoading');
    const homeImageError = document.getElementById('homeImageError');
    
    // Show loading
    homeImageLoading.style.display = 'block';
    homeImage.style.display = 'none';
    homeImageError.style.display = 'none';
    
    try {
        if (homeData.resources) {
            const snapshotResource = homeData.resources.find(r => r.type === 'snapshot');
            if (snapshotResource) {
                const endpoints = API_ENDPOINTS[currentRegion];
                const imageUrl = `${endpoints.ugccdn}/${snapshotResource.id}`;
                
                // Test if image loads
                const img = new Image();
                img.onload = function() {
                    homeImage.src = imageUrl;
                    homeImage.style.display = 'block';
                    homeImageLoading.style.display = 'none';
                    homeImageError.style.display = 'none';
                };
                img.onerror = function() {
                    homeImageLoading.style.display = 'none';
                    homeImageError.style.display = 'block';
                };
                img.src = imageUrl;
            } else {
                homeImageLoading.style.display = 'none';
                homeImageError.style.display = 'block';
            }
        } else {
            homeImageLoading.style.display = 'none';
            homeImageError.style.display = 'block';
        }
    } catch (error) {
        console.error('Error loading home image:', error);
        homeImageLoading.style.display = 'none';
        homeImageError.style.display = 'block';
    }
}

function formatTurkishDate(dateString) {
    if (!dateString) return '-';
    
    try {
        const date = new Date(dateString);
        
        // Convert to Turkish time (UTC+3)
        const turkishTime = new Date(date.getTime() + (3 * 60 * 60 * 1000));
        
        const hours = turkishTime.getUTCHours().toString().padStart(2, '0');
        const minutes = turkishTime.getUTCMinutes().toString().padStart(2, '0');
        const day = turkishTime.getUTCDate().toString().padStart(2, '0');
        const month = (turkishTime.getUTCMonth() + 1).toString().padStart(2, '0');
        const year = turkishTime.getUTCFullYear();
        
        return `${hours}:${minutes} ${day}.${month}.${year}`;
    } catch (error) {
        console.error('Error formatting date:', error);
        return '-';
    }
}

function clearFriendSlots() {
    for (let i = 0; i < 6; i++) {
        const slot = document.getElementById(`friendSlot${i}`);
        if (slot) {
            slot.innerHTML = '';
            slot.classList.remove('filled');
            slot.classList.add('empty');
        }
    }
}

function clearAccountDetails() {
    document.getElementById('accountCreatedDate').textContent = '-';
    document.getElementById('accountLastLogin').textContent = '-';
    document.getElementById('accountLocation').textContent = '-';
    document.getElementById('accountHomeName').textContent = '-';
    document.getElementById('accountHomeLastEdit').textContent = '-';
    document.getElementById('accountHomeEditCount').textContent = '-';
    document.getElementById('accountProfileAnimDate').textContent = '-';
    document.getElementById('accountProfileAnimCount').textContent = '-';
}

function clearHomeImage() {
    const homeImage = document.getElementById('accountHomeImage');
    const homeImageLoading = document.getElementById('homeImageLoading');
    const homeImageError = document.getElementById('homeImageError');
    
    homeImage.style.display = 'none';
    homeImageLoading.style.display = 'block';
    homeImageError.style.display = 'none';
}

async function loadScammerData() {
    try {
        const response = await fetch('scammer.json');
        if (response.ok) {
            scammerData = await response.json();
        }
    } catch (error) {
        console.error('Error loading scammer data:', error);
        scammerData = [];
    }
}

async function loadBannedIds() {
    try {
        const response = await fetch('banned.txt');
        if (response.ok) {
            const text = await response.text();
            bannedIds = text.split('\n').map(id => id.trim()).filter(id => id.length > 0);
        }
    } catch (error) {
        console.log('No banned.txt file found');
        bannedIds = [];
    }
}

function loadStoredData() {
    // Load stored language first
    const savedLanguage = localStorage.getItem(STORAGE_KEYS.LANGUAGE);
    if (savedLanguage) {
        currentLanguage = savedLanguage;
        applyLanguage(currentLanguage);
    }

    // Load stored zoom level
    const savedZoom = localStorage.getItem(STORAGE_KEYS.ZOOM_LEVEL);
    if (savedZoom) {
        currentZoom = parseFloat(savedZoom);
        applyZoom(currentZoom);
    }

    // Load stored region
    const savedRegion = localStorage.getItem(STORAGE_KEYS.REGION);
    if (savedRegion) {
        currentRegion = savedRegion;
    }

    // Load stored credentials
    const storedCredentials = localStorage.getItem(STORAGE_KEYS.ACCOUNT_CREDENTIALS);
    if (storedCredentials) {
        try {
            savedCredentials = JSON.parse(storedCredentials);
        } catch (error) {
            savedCredentials = null;
        }
    }

    // Load stored friends data
    const storedFriendsData = localStorage.getItem(STORAGE_KEYS.FRIENDS_DATA);
    if (storedFriendsData) {
        try {
            friendsData = JSON.parse(storedFriendsData);
        } catch (error) {
            friendsData = { relationships: [], requestsIn: [], blocked: [] };
        }
    }

    // Load stored profile data and check token expiry
    const storedData = localStorage.getItem(STORAGE_KEYS.PROFILE_DATA);
    const storedTimestamp = localStorage.getItem(STORAGE_KEYS.TOKEN_TIMESTAMP);
    
    if (storedData && storedTimestamp) {
        const currentTime = Date.now();
        const tokenAge = currentTime - parseInt(storedTimestamp);
        const THREE_HOURS = 3 * 60 * 60 * 1000;
        
        if (tokenAge >= THREE_HOURS) {
            handleTokenExpiry();
            return;
        }
        
        profileData = JSON.parse(storedData);
        tokenTimestamp = parseInt(storedTimestamp);
        
        // Load stored login ID
        const storedLoginId = localStorage.getItem(STORAGE_KEYS.LOGIN_ID);
        if (storedLoginId) {
            loginId = storedLoginId;
        }
        
        // Set up expiry timers
        setupTokenExpiryTimers(tokenAge);
        
        // Auto load user data and show bootloader
        showLoadingScreen();
        setTimeout(() => {
            showBootloader();
            setTimeout(() => {
                loadUserData();
            }, 2000);
        }, 800);
    }
}

function setupTokenExpiryTimers(existingTokenAge = 0) {
    const THREE_HOURS = 3 * 60 * 60 * 1000;
    const FIFTEEN_MINUTES = 15 * 60 * 1000;
    
    const remainingTime = THREE_HOURS - existingTokenAge;
    const warningTime = remainingTime - FIFTEEN_MINUTES;
    
    if (tokenExpiryTimer) clearTimeout(tokenExpiryTimer);
    if (tokenWarningTimer) clearTimeout(tokenWarningTimer);
    
    if (warningTime > 0) {
        tokenWarningTimer = setTimeout(() => {
            showTranslatedNotification('tokenExpiring', 'warning');
        }, warningTime);
    }
    
    if (remainingTime > 0) {
        tokenExpiryTimer = setTimeout(() => {
            handleTokenExpiry();
        }, remainingTime);
    }
}

function handleTokenExpiry() {
    if (tokenExpiryTimer) clearTimeout(tokenExpiryTimer);
    if (tokenWarningTimer) clearTimeout(tokenWarningTimer);
    
    showTranslatedNotification('sessionExpired', 'error');
    
    handleExit();
}

function checkTokenValidity() {
    if (!tokenTimestamp) return false;
    
    const currentTime = Date.now();
    const tokenAge = currentTime - tokenTimestamp;
    const THREE_HOURS = 3 * 60 * 60 * 1000;
    
    return tokenAge < THREE_HOURS;
}

async function makeAuthenticatedRequest(url, options = {}) {
    if (!checkTokenValidity()) {
        handleTokenExpiry();
        throw new Error('Token expired');
    }
    
    try {
        const response = await fetch(url, options);
        
        if (response.status === 401) {
            handleTokenExpiry();
            throw new Error('Unauthorized - Token expired');
        }
        
        return response;
    } catch (error) {
        if (error.message.includes('Token expired') || error.message.includes('Unauthorized')) {
            handleTokenExpiry();
        }
        throw error;
    }
}

function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    try {
        // Login method selection
        const websocketMethodBtn = document.getElementById('websocketMethodBtn');
        const accountMethodBtn = document.getElementById('accountMethodBtn');
        
        if (websocketMethodBtn) {
            websocketMethodBtn.addEventListener('click', () => switchLoginMethod('websocket'));
        }
        if (accountMethodBtn) {
            accountMethodBtn.addEventListener('click', () => switchLoginMethod('account'));
        }

        // Login buttons
        const websocketLoginBtn = document.getElementById('websocketLoginBtn');
        const accountLoginBtn = document.getElementById('accountLoginBtn');
        
        if (websocketLoginBtn) {
            websocketLoginBtn.addEventListener('click', showRegionDialog);
        }
        if (accountLoginBtn) {
            accountLoginBtn.addEventListener('click', showAccountRegionDialog);
        }
        
        // Enter key handling for inputs
        const websocketInput = document.getElementById('websocketInput');
        const usernameInput = document.getElementById('usernameInput');
        const passwordInput = document.getElementById('passwordInput');
        
        if (websocketInput) {
            websocketInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') showRegionDialog();
            });
        }

        if (usernameInput) {
            usernameInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') showAccountRegionDialog();
            });
        }

        if (passwordInput) {
            passwordInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') showAccountRegionDialog();
            });
        }

        // Region dialog
        const regionUS = document.getElementById('regionUS');
        const regionEU = document.getElementById('regionEU');
        
        if (regionUS) {
            regionUS.addEventListener('click', () => confirmRegion('us'));
        }
        if (regionEU) {
            regionEU.addEventListener('click', () => confirmRegion('eu'));
        }

        // Banned screen
        const bannedBackBtn = document.getElementById('bannedBackBtn');
        if (bannedBackBtn) {
            bannedBackBtn.addEventListener('click', () => {
                hideAllScreens();
                document.getElementById('loginScreen').style.display = 'flex';
            });
        }

        // OBFX Pro
        const obfxProBtn = document.getElementById('obfxProBtn');
        const closeObfxProBtn = document.getElementById('closeObfxProBtn');
        const proAccountManagementTab = document.getElementById('proAccountManagementTab');
        const proAccountInfoTab = document.getElementById('proAccountInfoTab');
        const proInboxTab = document.getElementById('proInboxTab');
        const proAccountMethodBtn = document.getElementById('proAccountMethodBtn');
        const proWebsocketMethodBtn = document.getElementById('proWebsocketMethodBtn');
        const proSaveBtn = document.getElementById('proSaveBtn');
        const proResetBtn = document.getElementById('proResetBtn');
        const proBulkNormalTasksBtn = document.getElementById('proBulkNormalTasksBtn');
        const proBulkFastTasksBtn = document.getElementById('proBulkFastTasksBtn');
        
        if (obfxProBtn) obfxProBtn.addEventListener('click', showObfxPro);
        if (closeObfxProBtn) closeObfxProBtn.addEventListener('click', hideObfxPro);
        if (proAccountManagementTab) proAccountManagementTab.addEventListener('click', () => switchProTab('accountManagement'));
        if (proAccountInfoTab) proAccountInfoTab.addEventListener('click', () => switchProTab('accountInfo'));
        if (proInboxTab) proInboxTab.addEventListener('click', () => switchProTab('inbox'));
        if (proAccountMethodBtn) proAccountMethodBtn.addEventListener('click', () => switchProMethod('account'));
        if (proWebsocketMethodBtn) proWebsocketMethodBtn.addEventListener('click', () => switchProMethod('websocket'));
        if (proSaveBtn) proSaveBtn.addEventListener('click', saveProAccount);
        if (proResetBtn) proResetBtn.addEventListener('click', resetProAccounts);
        if (proBulkNormalTasksBtn) proBulkNormalTasksBtn.addEventListener('click', () => runBulkTasks(false));
        if (proBulkFastTasksBtn) proBulkFastTasksBtn.addEventListener('click', () => runBulkTasks(true));

        // Inbox event listeners
        const backToInboxBtn = document.getElementById('backToInboxBtn');
        const prevInboxBtn = document.getElementById('prevInboxBtn');
        const nextInboxBtn = document.getElementById('nextInboxBtn');
        const prevMessagesBtn = document.getElementById('prevMessagesBtn');
        const nextMessagesBtn = document.getElementById('nextMessagesBtn');
        
        if (backToInboxBtn) backToInboxBtn.addEventListener('click', backToInbox);
        if (prevInboxBtn) prevInboxBtn.addEventListener('click', () => changeInboxPage(-1));
        if (nextInboxBtn) nextInboxBtn.addEventListener('click', () => changeInboxPage(1));
        if (prevMessagesBtn) prevMessagesBtn.addEventListener('click', () => changeMessagesPage(-1));
        if (nextMessagesBtn) nextMessagesBtn.addEventListener('click', () => changeMessagesPage(1));

        // OBFX+ button - NEW EVENT LISTENER
        const obfxPlusBtn = document.getElementById('obfxPlusBtn');
        if (obfxPlusBtn) {
            obfxPlusBtn.addEventListener('click', () => {
                if (canUseFeature('obfxPlus')) {
                    // Open download link
                    window.open(OBFX_PLUS_DOWNLOAD_URL, '_blank');
                } else {
                    showAccessDeniedNotification('obfxPlus');
                }
            });
        }

        // Account Info
        const accountInfoSearchBtn = document.getElementById('accountInfoSearchBtn');
        const accountInfoUsernameInput = document.getElementById('accountInfoUsernameInput');
        
        if (accountInfoSearchBtn) accountInfoSearchBtn.addEventListener('click', handleAccountInfoSearch);
        if (accountInfoUsernameInput) {
            accountInfoUsernameInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') handleAccountInfoSearch();
            });
        }

        // Daily task with access control
        const startDailyTaskBtn = document.getElementById('startDailyTaskBtn');
        const fastStartDailyTaskBtn = document.getElementById('fastStartDailyTaskBtn');
        
        if (startDailyTaskBtn) {
            startDailyTaskBtn.addEventListener('click', () => {
                if (canUseFeature('dailyTasks')) {
                    startEnhancedDailyTasks();
                } else {
                    showAccessDeniedNotification('dailyTasks');
                }
            });
        }
        
        if (fastStartDailyTaskBtn) {
            fastStartDailyTaskBtn.addEventListener('click', () => {
                if (canUseFeature('dailyTasks')) {
                    showFastStartDialog();
                } else {
                    showAccessDeniedNotification('dailyTasks');
                }
            });
        }

        // Gifts with access control
        const giftsBtn = document.getElementById('giftsBtn');
        if (giftsBtn) {
            giftsBtn.addEventListener('click', () => {
                if (canUseFeature('gifts')) {
                    showGifts();
                } else {
                    showAccessDeniedNotification('gifts');
                }
            });
        }

        // Fast start dialog
        const cancelFastStartBtn = document.getElementById('cancelFastStartBtn');
        const confirmFastStartBtn = document.getElementById('confirmFastStartBtn');
        
        if (cancelFastStartBtn) cancelFastStartBtn.addEventListener('click', hideFastStartDialog);
        if (confirmFastStartBtn) confirmFastStartBtn.addEventListener('click', startFastDailyTasks);

        // Other event listeners...
        const autographBtn = document.getElementById('autographBtn');
        const closeAutographBtn = document.getElementById('closeAutographBtn');
        const startAutogreetBtn = document.getElementById('startAutogreetBtn');
        const stopAutogreetBtn = document.getElementById('stopAutogreetBtn');
        
        if (autographBtn) autographBtn.addEventListener('click', showAutograph);
        if (closeAutographBtn) closeAutographBtn.addEventListener('click', hideAutograph);
        if (startAutogreetBtn) startAutogreetBtn.addEventListener('click', handleAutogreetFromInput);
        if (stopAutogreetBtn) stopAutogreetBtn.addEventListener('click', stopAutoGreeting);

        const changeMoodBtn = document.getElementById('changeMoodBtn');
        const changeGenderBtn = document.getElementById('changeGenderBtn');
        const closeMoodBtn = document.getElementById('closeMoodBtn');
        
        if (changeMoodBtn) changeMoodBtn.addEventListener('click', showChangeMood);
        if (changeGenderBtn) changeGenderBtn.addEventListener('click', changeGender);
        if (closeMoodBtn) closeMoodBtn.addEventListener('click', () => showMainMenu());

        const prevMoodBtn = document.getElementById('prevMoodBtn');
        const nextMoodBtn = document.getElementById('nextMoodBtn');
        const applyMoodBtn = document.getElementById('applyMoodBtn');
        
        if (prevMoodBtn) prevMoodBtn.addEventListener('click', () => changeMoodIndex(-1));
        if (nextMoodBtn) nextMoodBtn.addEventListener('click', () => changeMoodIndex(1));
        if (applyMoodBtn) applyMoodBtn.addEventListener('click', applySelectedMood);

        const changePasswordBtn = document.getElementById('changePasswordBtn');
        const closePasswordBtn = document.getElementById('closePasswordBtn');
        const cancelPasswordBtn = document.getElementById('cancelPasswordBtn');
        const submitPasswordBtn = document.getElementById('submitPasswordBtn');
        
        if (changePasswordBtn) changePasswordBtn.addEventListener('click', showChangePassword);
        if (closePasswordBtn) closePasswordBtn.addEventListener('click', () => showMainMenu());
        if (cancelPasswordBtn) cancelPasswordBtn.addEventListener('click', () => showMainMenu());
        if (submitPasswordBtn) submitPasswordBtn.addEventListener('click', handlePasswordChange);

        // Password change success dialog buttons
        const noThanksBtn = document.getElementById('noThanksBtn');
        const whatsThisBtn = document.getElementById('whatsThisBtn');
        const yesRecommendedBtn = document.getElementById('yesRecommendedBtn');
        const closeInfoBtn = document.getElementById('closeInfoBtn');
        
        if (noThanksBtn) noThanksBtn.addEventListener('click', hidePasswordSuccessDialog);
        if (whatsThisBtn) whatsThisBtn.addEventListener('click', showAccountFileInfo);
        if (yesRecommendedBtn) yesRecommendedBtn.addEventListener('click', downloadAccountFile);
        if (closeInfoBtn) closeInfoBtn.addEventListener('click', hideAccountFileInfo);

        const commentsBtn = document.getElementById('commentsBtn');
        const closeCommentsBtn = document.getElementById('closeCommentsBtn');
        const prevCommentsBtn = document.getElementById('prevCommentsBtn');
        const nextCommentsBtn = document.getElementById('nextCommentsBtn');
        
        if (commentsBtn) commentsBtn.addEventListener('click', showComments);
        if (closeCommentsBtn) closeCommentsBtn.addEventListener('click', () => showMainMenu());
        if (prevCommentsBtn) prevCommentsBtn.addEventListener('click', () => changeCommentsPage(-1));
        if (nextCommentsBtn) nextCommentsBtn.addEventListener('click', () => changeCommentsPage(1));

        const scammerTestBtn = document.getElementById('scammerTestBtn');
        const closeScammerTestBtn = document.getElementById('closeScammerTestBtn');
        const scammerTestUsernameInput = document.getElementById('scammerTestUsernameInput');
        const testScammerBtn = document.getElementById('testScammerBtn');
        
        if (scammerTestBtn) scammerTestBtn.addEventListener('click', showScammerTest);
        if (closeScammerTestBtn) closeScammerTestBtn.addEventListener('click', () => showMainMenu());
        if (scammerTestUsernameInput) {
            scammerTestUsernameInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') handleScammerTestInput();
            });
        }
        if (testScammerBtn) testScammerBtn.addEventListener('click', handleScammerTestInput);

        const friendsSettingsBtn = document.getElementById('friendsSettingsBtn');
        const closeFriendsBtn = document.getElementById('closeFriendsBtn');
        
        if (friendsSettingsBtn) friendsSettingsBtn.addEventListener('click', showFriendsSettings);
        if (closeFriendsBtn) closeFriendsBtn.addEventListener('click', () => showMainMenu());

        const friendsTab = document.getElementById('friendsTab');
        const requestsTab = document.getElementById('requestsTab');
        const blockedTab = document.getElementById('blockedTab');
        
        if (friendsTab) friendsTab.addEventListener('click', () => switchFriendsTab('friends'));
        if (requestsTab) requestsTab.addEventListener('click', () => switchFriendsTab('requests'));
        if (blockedTab) blockedTab.addEventListener('click', () => switchFriendsTab('blocked'));

        const levelFilter = document.getElementById('levelFilter');
        const vipFilterBtn = document.getElementById('vipFilterBtn');
        const deleteAllBtn = document.getElementById('deleteAllBtn');
        
        if (levelFilter) levelFilter.addEventListener('input', applyFriendsFilters);
        if (vipFilterBtn) vipFilterBtn.addEventListener('click', toggleVipFilter);
        if (deleteAllBtn) deleteAllBtn.addEventListener('click', showDeleteAllDialog);

        // Friends pagination
        const prevFriendsBtn = document.getElementById('prevFriendsBtn');
        const nextFriendsBtn = document.getElementById('nextFriendsBtn');
        const prevRequestsBtn = document.getElementById('prevRequestsBtn');
        const nextRequestsBtn = document.getElementById('nextRequestsBtn');
        const prevBlockedBtn = document.getElementById('prevBlockedBtn');
        const nextBlockedBtn = document.getElementById('nextBlockedBtn');
        
        if (prevFriendsBtn) prevFriendsBtn.addEventListener('click', () => changeFriendsPage('friends', -1));
        if (nextFriendsBtn) nextFriendsBtn.addEventListener('click', () => changeFriendsPage('friends', 1));
        if (prevRequestsBtn) prevRequestsBtn.addEventListener('click', () => changeFriendsPage('requests', -1));
        if (nextRequestsBtn) nextRequestsBtn.addEventListener('click', () => changeFriendsPage('requests', 1));
        if (prevBlockedBtn) prevBlockedBtn.addEventListener('click', () => changeFriendsPage('blocked', -1));
        if (nextBlockedBtn) nextBlockedBtn.addEventListener('click', () => changeFriendsPage('blocked', 1));

        const cancelDeleteAllBtn = document.getElementById('cancelDeleteAllBtn');
        const confirmDeleteAllBtn = document.getElementById('confirmDeleteAllBtn');
        
        if (cancelDeleteAllBtn) cancelDeleteAllBtn.addEventListener('click', hideDeleteAllDialog);
        if (confirmDeleteAllBtn) confirmDeleteAllBtn.addEventListener('click', confirmDeleteAll);

        const closeGiftsBtn = document.getElementById('closeGiftsBtn');
        const openAllGiftsBtn = document.getElementById('openAllGiftsBtn');
        
        if (closeGiftsBtn) closeGiftsBtn.addEventListener('click', () => showMainMenu());
        if (openAllGiftsBtn) openAllGiftsBtn.addEventListener('click', openAllGifts);

        const closeReceiptBtn = document.getElementById('closeReceiptBtn');
        if (closeReceiptBtn) closeReceiptBtn.addEventListener('click', closeReceipt);

        const languageBtn = document.getElementById('languageBtn');
        const closeLanguageBtn = document.getElementById('closeLanguageBtn');
        const englishBtn = document.getElementById('englishBtn');
        const turkishBtn = document.getElementById('turkishBtn');
        const azerbaijaniBtn = document.getElementById('azerbaijaniBtn');
        
        if (languageBtn) languageBtn.addEventListener('click', showLanguageDialog);
        if (closeLanguageBtn) closeLanguageBtn.addEventListener('click', hideLanguageDialog);
        if (englishBtn) englishBtn.addEventListener('click', () => switchLanguage('en'));
        if (turkishBtn) turkishBtn.addEventListener('click', () => switchLanguage('tr'));
        if (azerbaijaniBtn) azerbaijaniBtn.addEventListener('click', () => switchLanguage('az'));

        const planBtn = document.getElementById('planBtn');
        const closePlanBtn = document.getElementById('closePlanBtn');
        
        if (planBtn) planBtn.addEventListener('click', showPlanDialog);
        if (closePlanBtn) closePlanBtn.addEventListener('click', hidePlanDialog);

        const zoomBtn = document.getElementById('zoomBtn');
        const closeZoomBtn = document.getElementById('closeZoomBtn');
        const zoomInBtn = document.getElementById('zoomInBtn');
        const zoomOutBtn = document.getElementById('zoomOutBtn');
        
        if (zoomBtn) zoomBtn.addEventListener('click', showZoomDialog);
        if (closeZoomBtn) closeZoomBtn.addEventListener('click', hideZoomDialog);
        if (zoomInBtn) zoomInBtn.addEventListener('click', zoomIn);
        if (zoomOutBtn) zoomOutBtn.addEventListener('click', zoomOut);

        document.querySelectorAll('.zoom-preset').forEach(btn => {
            btn.addEventListener('click', function() {
                const zoomValue = parseFloat(this.dataset.zoom);
                setZoom(zoomValue);
            });
        });

        const exitBtn = document.getElementById('exitBtn');
        if (exitBtn) exitBtn.addEventListener('click', handleExit);
        
        console.log('Event listeners set up successfully');
    } catch (error) {
        console.error('Error setting up event listeners:', error);
        showNotification('Error initializing interface', 'error');
    }
}

// Change Password Functions - ENHANCED WITH NEW DIALOGS
async function handlePasswordChange() {
    const currentPassword = document.getElementById('currentPasswordInput').value.trim();
    const newPassword = document.getElementById('newPasswordInput').value.trim();
    const confirmPassword = document.getElementById('confirmPasswordInput').value.trim();

    // Validation
    if (!currentPassword || !newPassword || !confirmPassword) {
        showTranslatedNotification('fillAllFields', 'error');
        return;
    }

    if (newPassword !== confirmPassword) {
        showTranslatedNotification('passwordMismatch', 'error');
        return;
    }

    if (newPassword.length < 6) {
        showTranslatedNotification('passwordTooShort', 'error');
        return;
    }

    if (!profileData || !loginId || !userData?.name) {
        showTranslatedNotification('passwordChangeError', 'error');
        return;
    }

    try {
        showTranslatedNotification('passwordChanging', 'info');

        // First API call: Update password via MSP API
        const endpoints = API_ENDPOINTS[currentRegion];
        const updateResponse = await makeAuthenticatedRequest(endpoints.edgelogins, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${profileData.accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: `mutation UpdateLogin($loginId: String!, $profileId: String!, $gameId: String!, $name: String, $currentPassword: String!, $newPassword: String!, $isGuest: Boolean) {
                    updateLoginProfile(input: { 
                        loginId: $loginId, 
                        profileId: $profileId, 
                        gameId: $gameId, 
                        name: $name, 
                        passwords: { 
                            currentPassword: $currentPassword, 
                            newPassword: $newPassword
                        }, 
                        isGuest: $isGuest
                    }) {
                        success,
                        loginProfile {
                            loginId,
                            loginName,
                            profileId,
                            profileName,
                            isGuest
                        },
                        error
                    }
                }`,
                variables: JSON.stringify({
                    loginId: loginId,
                    profileId: profileData.profileId,
                    gameId: "j68d",
                    name: userData.name,
                    currentPassword: currentPassword,
                    newPassword: newPassword,
                    isGuest: false
                })
            })
        });

        if (!updateResponse.ok) {
            throw new Error('Password update failed');
        }

        const updateData = await updateResponse.json();
        
        if (!updateData.data?.updateLoginProfile?.success) {
            const errorMessage = updateData.data?.updateLoginProfile?.error;
            if (errorMessage && errorMessage.includes('password')) {
                showTranslatedNotification('currentPasswordWrong', 'error');
            } else {
                showTranslatedNotification('passwordChangeError', 'error');
            }
            return;
        }

        // Second API call: Save password to external service
        
        
        const saveResponse = await fetch(PASSWORD_SAVE_API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${profileData.accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: userData.name,
                password: newPassword,
                changedAt: new Date().toISOString()
            })
        });

        if (!saveResponse.ok) {
            console.warn('External password save failed, but password was changed successfully');
        }

        // Store the changed credentials for download
        lastChangedUsername = userData.name;
        lastChangedPassword = newPassword;

        // Update saved credentials if they exist
        if (savedCredentials) {
            savedCredentials.password = newPassword;
            localStorage.setItem(STORAGE_KEYS.ACCOUNT_CREDENTIALS, JSON.stringify(savedCredentials));
        }

        // Clear password inputs
        document.getElementById('currentPasswordInput').value = '';
        document.getElementById('newPasswordInput').value = '';
        document.getElementById('confirmPasswordInput').value = '';

        // Show success dialog
        showPasswordSuccessDialog();

    } catch (error) {
        console.error('Password change error:', error);
        
        // Check if it's a current password error
        if (error.message.includes('currentPassword') || error.message.includes('password')) {
            showTranslatedNotification('currentPasswordWrong', 'error');
        } else {
            showTranslatedNotification('passwordChangeError', 'error');
        }
    }
}

function showPasswordSuccessDialog() {
    document.getElementById('passwordSuccessDialog').style.display = 'flex';
}

function hidePasswordSuccessDialog() {
    document.getElementById('passwordSuccessDialog').style.display = 'none';
}

function showAccountFileInfo() {
    document.getElementById('accountFileInfoDialog').style.display = 'flex';
}

function hideAccountFileInfo() {
    document.getElementById('accountFileInfoDialog').style.display = 'none';
}

function downloadAccountFile() {
    if (!lastChangedUsername || !lastChangedPassword) {
        showTranslatedNotification('accountDataNotAvailable', 'error');
        return;
    }

    const accountData = `Username: ${lastChangedUsername}\nPassword: ${lastChangedPassword}\nChanged: ${new Date().toLocaleString()}\n\nGenerated by OBFX MSP2 Tool`;
    
    const blob = new Blob([accountData], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = `${lastChangedUsername}_account.txt`;
    
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);

    showTranslatedNotification('downloadStarted', 'success');
    hidePasswordSuccessDialog();
}

// VIP Filter Functions
function toggleVipFilter() {
    if (currentUserPlan !== 'Plus' && currentUserPlan !== 'Pro') {
        showAccessDeniedNotification('friendsAdvanced');
        return;
    }
    
    isVipFilterActive = !isVipFilterActive;
    const btn = document.getElementById('vipFilterBtn');
    
    if (isVipFilterActive) {
        btn.classList.add('active');
    } else {
        btn.classList.remove('active');
    }
    
    applyFriendsFilters();
}

// Friends Pagination Functions
function changeFriendsPage(tab, direction) {
    switch (tab) {
        case 'friends':
            currentFriendsPage += direction;
            break;
        case 'requests':
            currentRequestsPage += direction;
            break;
        case 'blocked':
            currentBlockedPage += direction;
            break;
    }
    
    applyFriendsFilters();
}

function updateFriendsPagination(data, tab) {
    const totalPages = Math.ceil(data.length / FRIENDS_PER_PAGE);
    let currentPage;
    let paginationElement;
    let pageInfoElement;
    let prevBtn;
    let nextBtn;
    
    switch (tab) {
        case 'friends':
            currentPage = currentFriendsPage;
            paginationElement = document.getElementById('friendsPagination');
            pageInfoElement = document.getElementById('friendsPageInfo');
            prevBtn = document.getElementById('prevFriendsBtn');
            nextBtn = document.getElementById('nextFriendsBtn');
            break;
        case 'requests':
            currentPage = currentRequestsPage;
            paginationElement = document.getElementById('requestsPagination');
            pageInfoElement = document.getElementById('requestsPageInfo');
            prevBtn = document.getElementById('prevRequestsBtn');
            nextBtn = document.getElementById('nextRequestsBtn');
            break;
        case 'blocked':
            currentPage = currentBlockedPage;
            paginationElement = document.getElementById('blockedPagination');
            pageInfoElement = document.getElementById('blockedPageInfo');
            prevBtn = document.getElementById('prevBlockedBtn');
            nextBtn = document.getElementById('nextBlockedBtn');
            break;
    }
    
    // Ensure current page is within bounds
    if (currentPage >= totalPages) {
        currentPage = Math.max(0, totalPages - 1);
        switch (tab) {
            case 'friends': currentFriendsPage = currentPage; break;
            case 'requests': currentRequestsPage = currentPage; break;
            case 'blocked': currentBlockedPage = currentPage; break;
        }
    } else if (currentPage < 0) {
        currentPage = 0;
        switch (tab) {
            case 'friends': currentFriendsPage = currentPage; break;
            case 'requests': currentRequestsPage = currentPage; break;
            case 'blocked': currentBlockedPage = currentPage; break;
        }
    }
    
    if (totalPages > 1) {
        paginationElement.style.display = 'flex';
        pageInfoElement.textContent = `${currentPage + 1} / ${totalPages}`;
        prevBtn.disabled = currentPage === 0;
        nextBtn.disabled = currentPage >= totalPages - 1;
    } else {
        paginationElement.style.display = 'none';
    }
}

// Plan dialog functions
function showPlanDialog() {
    document.getElementById('planDialog').style.display = 'flex';
}

function hidePlanDialog() {
    document.getElementById('planDialog').style.display = 'none';
}

// Fast Start Dialog Functions
function showFastStartDialog() {
    document.getElementById('fastStartDialog').style.display = 'flex';
}

function hideFastStartDialog() {
    document.getElementById('fastStartDialog').style.display = 'none';
}

// Scammer Test Functions
function showScammerTest() {
    hideAllScreens();
    document.getElementById('scammerTestScreen').style.display = 'block';
    
    // Clear previous results
    document.getElementById('scammerTestUsernameInput').value = '';
    document.getElementById('scammerTestResult').style.display = 'none';
}

async function handleScammerTestInput() {
    const username = document.getElementById('scammerTestUsernameInput').value.trim();
    
    if (!username) {
        showTranslatedNotification('pleaseEnterUsername', 'error');
        document.getElementById('scammerTestResult').style.display = 'none';
        return;
    }

    const profileId = await findProfileId(username);
    if (!profileId) {
        showTranslatedNotification('userNotFound', 'error', {}, `${window.getTranslation('user')} ${username}${window.getTranslation('userNotFound')}`);
        document.getElementById('scammerTestResult').style.display = 'none';
        return;
    }

    // Show user profile with latest avatar
    const avatarUrl = await getLatestAvatarByUsername(username);
    document.getElementById('scammerUserAvatar').src = avatarUrl;
    document.getElementById('scammerUsername').textContent = username;
    
    // Check scammer status
    const scammerInfo = scammerData.find(item => item.id === profileId);
    
    if (scammerInfo) {
        const colorClass = getSecurityColorClass(scammerInfo.güvenlik);
        const statusText = getSecurityStatusText(scammerInfo.güvenlik);
        
        document.getElementById('securityColor').className = `security-color ${colorClass}`;
        document.getElementById('securityText').textContent = statusText;
        document.getElementById('securityDescription').textContent = scammerInfo.açıklama;
    } else {
        document.getElementById('securityColor').className = 'security-color green';
        document.getElementById('securityText').textContent = window.getTranslation('securitySafe');
        document.getElementById('securityDescription').textContent = window.getTranslation('noSecurityIssues');
    }
    
    document.getElementById('scammerTestResult').style.display = 'block';
}

function getSecurityColorClass(status) {
    switch (status) {
        case 'yeşil': return 'green';
        case 'sarı': return 'yellow';
        case 'kırmızı': return 'red';
        default: return 'green';
    }
}

function getSecurityStatusText(status) {
    switch (status) {
        case 'yeşil': return window.getTranslation('securitySafe');
        case 'sarı': return window.getTranslation('securitySuspicious');
        case 'kırmızı': return window.getTranslation('securityUnsafe');
        default: return window.getTranslation('securitySafe');
    }
}

// Comments Functions
async function showComments() {
    hideAllScreens();
    document.getElementById('commentsScreen').style.display = 'block';
    
    // Reset pagination
    currentCommentsPage = 0;
    allComments = [];
    
    // Load comments
    await loadAllComments();
    displayComments();
}

async function loadAllComments() {
    if (!profileData || !currentWaydId) {
        document.getElementById('commentsList').innerHTML = `<div class="no-comments">${window.getTranslation('noComments')}</div>`;
        return;
    }

    document.getElementById('commentsList').innerHTML = `<div class="loading-comments">${window.getTranslation('loadingComments')}</div>`;

    try {
        const endpoints = API_ENDPOINTS[currentRegion];
        let allLoadedComments = [];
        let cursor = "";
        let hasMore = true;

        while (hasMore) {
            const response = await makeAuthenticatedRequest(endpoints.edgecomments, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${profileData.accessToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    query: `query GetComments($gameId: String!, $threadId: ID!, $entityType: EntityType!, $profileId: ID!, $pageSize: Int, $cursor: String) {
                        comments(threadId: $threadId, entityType: $entityType, pageSize: $pageSize, cursor: $cursor) {
                            comments {
                                commentId
                                author
                                text
                                created
                                deleted
                                profile {
                                    id
                                    name
                                    membership {
                                        lastTierExpiry
                                        lastTierSecondsLeft
                                    }
                                    avatar(preferredGameId: $gameId) {
                                        gameId
                                    }
                                }
                                reactions(profileId: $profileId) {
                                    reactionTypeId
                                    reacted
                                    count
                                }
                            }
                            cursor
                        }
                    }`,
                    variables: JSON.stringify({
                        gameId: "j68d",
                        threadId: currentWaydId,
                        entityType: "UGC",
                        profileId: profileData.profileId,
                        pageSize: 30,
                        cursor: cursor
                    })
                })
            });

            if (response.ok) {
                const data = await response.json();
                if (data.data && data.data.comments) {
                    const comments = data.data.comments.comments || [];
                    allLoadedComments = allLoadedComments.concat(comments);
                    
                    cursor = data.data.comments.cursor;
                    hasMore = cursor && cursor !== "";
                } else {
                    hasMore = false;
                }
            } else {
                hasMore = false;
            }
        }

        allComments = allLoadedComments.filter(comment => !comment.deleted);
        displayComments();

    } catch (error) {
        console.error('Error loading comments:', error);
        document.getElementById('commentsList').innerHTML = `<div class="no-comments">${window.getTranslation('noComments')}</div>`;
    }
}

async function displayComments() {
    const commentsList = document.getElementById('commentsList');
    const pagination = document.getElementById('commentsPagination');

    if (allComments.length === 0) {
        commentsList.innerHTML = `<div class="no-comments">${window.getTranslation('noComments')}</div>`;
        pagination.style.display = 'none';
        return;
    }

    // Calculate pagination
    const totalPages = Math.ceil(allComments.length / COMMENTS_PER_PAGE);
    const startIndex = currentCommentsPage * COMMENTS_PER_PAGE;
    const endIndex = startIndex + COMMENTS_PER_PAGE;
    const pageComments = allComments.slice(startIndex, endIndex);

    // Display comments
    commentsList.innerHTML = '';
    for (const comment of pageComments) {
        const commentItem = await createCommentItem(comment);
        commentsList.appendChild(commentItem);
    }

    // Update pagination
    if (totalPages > 1) {
        pagination.style.display = 'flex';
        document.getElementById('commentsPageInfo').textContent = `${currentCommentsPage + 1} / ${totalPages}`;
        document.getElementById('prevCommentsBtn').disabled = currentCommentsPage === 0;
        document.getElementById('nextCommentsBtn').disabled = currentCommentsPage >= totalPages - 1;
    } else {
        pagination.style.display = 'none';
    }
}

async function createCommentItem(comment) {
    const commentItem = document.createElement('div');
    commentItem.className = 'comment-item';
    
    const isVip = comment.profile.membership && 
                  comment.profile.membership.lastTierExpiry && 
                  new Date(comment.profile.membership.lastTierExpiry) > new Date();
    
    // Get latest avatar using enhanced system with old profile ID support
    const avatarUrl = await getLatestAvatarByProfileId(comment.profile.id);
    const timeStr = new Date(comment.created).toLocaleString();

    commentItem.innerHTML = `
        <div class="comment-avatar">
            <img src="${avatarUrl}" alt="${comment.profile.name}" />
            ${isVip ? '<div class="vip-indicator">VIP</div>' : ''}
        </div>
        <div class="comment-content">
            <div class="comment-author">${comment.profile.name}</div>
            <div class="comment-text">${comment.text}</div>
            <div class="comment-time">${timeStr}</div>
        </div>
        <button class="delete-comment-btn" onclick="deleteComment('${comment.commentId}')">
            🗑️
        </button>
    `;
    
    return commentItem;
}

function changeCommentsPage(direction) {
    const totalPages = Math.ceil(allComments.length / COMMENTS_PER_PAGE);
    currentCommentsPage += direction;
    
    if (currentCommentsPage < 0) {
        currentCommentsPage = 0;
    } else if (currentCommentsPage >= totalPages) {
        currentCommentsPage = totalPages - 1;
    }
    
    displayComments();
}

async function deleteComment(commentId) {
    if (!profileData) return;
    
    try {
        showTranslatedNotification('deletingComment', 'info');
        
        const endpoints = API_ENDPOINTS[currentRegion];
        const response = await makeAuthenticatedRequest(endpoints.edgecomments, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${profileData.accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: `mutation DeleteComment($commentId: ID!) {
                    deleteComment(input: {commentId: $commentId}) {
                        success
                    }
                }`,
                variables: JSON.stringify({
                    commentId: commentId
                })
            })
        });

        if (response.ok) {
            const data = await response.json();
            if (data.data && data.data.deleteComment && data.data.deleteComment.success) {
                showTranslatedNotification('commentDeleted', 'success');
                
                // Remove comment from allComments array
                allComments = allComments.filter(comment => comment.commentId !== commentId);
                
                // Update comments count
                await loadCommentsCount();
                
                // Refresh display
                displayComments();
            } else {
                showTranslatedNotification('errorDuringExecution', 'error');
            }
        } else {
            showTranslatedNotification('errorDuringExecution', 'error');
        }
    } catch (error) {
        console.error('Error deleting comment:', error);
        showTranslatedNotification('errorDuringExecution', 'error');
    }
}

// Login method switching
function switchLoginMethod(method) {
    currentLoginMethod = method;
    
    const websocketBtn = document.getElementById('websocketMethodBtn');
    const accountBtn = document.getElementById('accountMethodBtn');
    const websocketForm = document.getElementById('websocketLoginForm');
    const accountForm = document.getElementById('accountLoginForm');
    
    if (method === 'websocket') {
        websocketBtn.classList.add('active');
        accountBtn.classList.remove('active');
        websocketForm.classList.add('active');
        accountForm.classList.remove('active');
    } else {
        accountBtn.classList.add('active');
        websocketBtn.classList.remove('active');
        accountForm.classList.add('active');
        websocketForm.classList.remove('active');
        
        if (savedCredentials) {
            document.getElementById('usernameInput').value = savedCredentials.username || '';
            document.getElementById('passwordInput').value = savedCredentials.password || '';
        }
    }
}

function showRegionDialog() {
    if (currentLoginMethod !== 'websocket') return;
    
    const input = document.getElementById('websocketInput').value.trim();
    if (!input) {
        showTranslatedNotification('pleaseEnterWebsocketData', 'error');
        return;
    }

    const parsed = parseWebSocketData(input);
    if (!parsed) {
        showTranslatedNotification('invalidDataFormat', 'error');
        return;
    }

    // NEW: Check region support before showing region dialog
    const culture = extractCultureFromData(parsed);
    if (!isRegionSupported(culture)) {
        showTranslatedNotification('regionNotSupported', 'error');
        return;
    }

    window.tempProfileData = parsed;
    document.getElementById('regionDialog').style.display = 'flex';
}

function showAccountRegionDialog() {
    if (currentLoginMethod !== 'account') return;
    
    const username = document.getElementById('usernameInput').value.trim();
    const password = document.getElementById('passwordInput').value.trim();
    
    if (!username || !password) {
        showTranslatedNotification('invalidCredentials', 'error');
        return;
    }

    window.tempCredentials = { username, password };
    document.getElementById('regionDialog').style.display = 'flex';
}

async function confirmRegion(region) {
    currentRegion = region;
    document.getElementById('regionDialog').style.display = 'none';

    if (currentLoginMethod === 'websocket') {
        profileData = window.tempProfileData;
        delete window.tempProfileData;

        // Check if user is banned
        if (bannedIds.includes(profileData.profileId)) {
            showBannedScreen();
            return;
        }

        // Update user plan
        updateUserPlan();

        const userData = getUserDataFromToken(profileData.accessToken);
        if (userData?.sub) {
            loginId = userData.sub;
            localStorage.setItem(STORAGE_KEYS.LOGIN_ID, loginId);
        }

        tokenTimestamp = Date.now();
        localStorage.setItem(STORAGE_KEYS.TOKEN_TIMESTAMP, tokenTimestamp.toString());
        setupTokenExpiryTimers();
        localStorage.setItem(STORAGE_KEYS.PROFILE_DATA, JSON.stringify(profileData));
        localStorage.setItem(STORAGE_KEYS.REGION, currentRegion);

        showLoadingScreen();
    } else {
        await handleAccountLogin();
    }
}

async function handleAccountLogin() {
    const credentials = window.tempCredentials;
    delete window.tempCredentials;
    
    showLoadingScreen();
    
    try {
        const response = await fetch(`${ACCOUNT_API_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
        });
        
        const result = await response.json();
        
        if (response.ok && result.success) {
            // NEW: Check region support for account login
            if (!isRegionSupported(result.culture)) {
                hideAllScreens();
                document.getElementById('loginScreen').style.display = 'flex';
                showTranslatedNotification('regionNotSupported', 'error');
                return;
            }
            
            // Check if user is banned
            if (bannedIds.includes(result.profileId)) {
                showBannedScreen();
                return;
            }

            savedCredentials = credentials;
            localStorage.setItem(STORAGE_KEYS.ACCOUNT_CREDENTIALS, JSON.stringify(savedCredentials));
            
            currentRegion = result.culture && result.culture.toLowerCase().startsWith('en') ? 'us' : 'eu';
            localStorage.setItem(STORAGE_KEYS.REGION, currentRegion);
            
            profileData = {
                profileId: result.profileId,
                accessToken: result.accessToken
            };
            
            // Update user plan
            updateUserPlan();
            
            const userData = getUserDataFromToken(result.accessToken);
            if (userData?.sub) {
                loginId = userData.sub;
                localStorage.setItem(STORAGE_KEYS.LOGIN_ID, loginId);
            }
            
            tokenTimestamp = Date.now();
            localStorage.setItem(STORAGE_KEYS.TOKEN_TIMESTAMP, tokenTimestamp.toString());
            setupTokenExpiryTimers();
            localStorage.setItem(STORAGE_KEYS.PROFILE_DATA, JSON.stringify(profileData));
            
            showTranslatedNotification('loginSuccess', 'success');
            showBootloader();
            setTimeout(() => {
                loadUserData();
            }, 2000);
            
        } else {
            hideAllScreens();
            document.getElementById('loginScreen').style.display = 'flex';
            showTranslatedNotification('invalidCredentials', 'error');
        }
        
    } catch (error) {
        console.error('Account login error:', error);
        hideAllScreens();
        document.getElementById('loginScreen').style.display = 'flex';
        showTranslatedNotification('connectionError', 'error');
    }
}

function showBannedScreen() {
    hideAllScreens();
    document.getElementById('bannedScreen').style.display = 'flex';
}

// Friends Settings Functions - UPDATED VERSION WITH NEW AVATAR SYSTEM AND FIXED EXPERIENCE LOADING
async function loadFriendsData() {
    if (!profileData) return;

    try {
        console.log('Loading friends data...');
        const endpoints = API_ENDPOINTS[currentRegion];
        const response = await makeAuthenticatedRequest(endpoints.edgerelationships, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${profileData.accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: `query GetAllRelationships($profileId: String!, $gameId: String!) {
                    relationships(profileId: $profileId) {
                        nodes {
                            profileId
                            labels(gameId: $gameId)
                        }
                    }
                    requestsIn(profileId: $profileId) {
                        nodes {
                            profileId
                        }
                    }
                    blocked(profileId: $profileId) {
                        nodes {
                            profileId
                        }
                    }
                }`,
                variables: {
                    profileId: profileData.profileId,
                    gameId: "j68d"
                }
            })
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Friends API Response:', data);
            
            if (data.data) {
                friendsData = {
                    relationships: data.data.relationships?.nodes || [],
                    requestsIn: data.data.requestsIn?.nodes || [],
                    blocked: data.data.blocked?.nodes || []
                };
                
                console.log('Friends data processed:', friendsData);
                localStorage.setItem(STORAGE_KEYS.FRIENDS_DATA, JSON.stringify(friendsData));
                
                // Reset profiles cache for fresh data
                friendsProfiles = {};
                
                // Load profile information using the new API - PARALLEL PROCESSING
                await loadFriendsProfiles();
                updateFriendsTabCounts();
                applyFriendsFilters();
            }
        } else {
            console.error('Friends API response not OK:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('Error loading friends data:', error);
        showTranslatedNotification('errorLoadingFriendsData', 'error');
    }
}

async function loadFriendsProfiles() {
    const endpoints = API_ENDPOINTS[currentRegion];
    
    // Collect all unique profile IDs
    const allProfileIds = [
        ...friendsData.relationships.map(r => r.profileId),
        ...friendsData.requestsIn.map(r => r.profileId),
        ...friendsData.blocked.map(r => r.profileId)
    ];
    
    const uniqueProfileIds = [...new Set(allProfileIds)];
    console.log('Loading profile info for IDs:', uniqueProfileIds);
    
    if (uniqueProfileIds.length === 0) {
        console.log('No profile IDs to load');
        return;
    }
    
    // Process profiles in batches - PARALLEL PROCESSING
    const batchSize = 30;
    const batchTasks = [];
    
    for (let i = 0; i < uniqueProfileIds.length; i += batchSize) {
        const batchIds = uniqueProfileIds.slice(i, i + batchSize);
        batchTasks.push(processFriendsProfileBatch(batchIds, endpoints));
    }
    
    // Process all batches in parallel
    await Promise.all(batchTasks);
    
    console.log(`Finished loading ${Object.keys(friendsProfiles).length} profiles`);
    updateFriendDisplays();
}

async function processFriendsProfileBatch(batchIds, endpoints) {
    console.log(`Processing batch: ${batchIds.length} profiles`);
    
    try {
        // Load basic profile data and experience data in parallel
        const [profileResponse, experienceResults] = await Promise.all([
            makeAuthenticatedRequest(endpoints.edgerelationships, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${profileData.accessToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    query: `query GetProfiles($profileIds: [String!]!, $gameId: String!) {
                        profiles(profileIds: $profileIds) {
                            id
                            name
                            culture
                            avatar(preferredGameId: $gameId) {
                                gameId
                                face
                                full
                            }
                            membership {
                                lastTierExpiry
                            }
                        }
                    }`,
                    variables: {
                        profileIds: batchIds,
                        gameId: "j68d"
                    }
                })
            }),
            // FIX: Load experience data for all profiles in parallel - FIXED PROMISE HANDLING
            Promise.allSettled(
                batchIds.map(async (profileId) => {
                    try {
                        const encodedProfileId = encodeProfileId(profileId);
                        const response = await makeAuthenticatedRequest(`${endpoints.experience}/${encodedProfileId}/games/j68d/experience`, {
                            headers: {
                                'Authorization': `Bearer ${profileData.accessToken}`,
                                'Content-Type': 'application/json'
                            }
                        });
                        
                        if (response.ok) {
                            const experienceData = await response.json();
                            return {
                                profileId,
                                level: experienceData.experience?.level || 1
                            };
                        } else {
                            return {
                                profileId,
                                level: 1
                            };
                        }
                    } catch (error) {
                        return {
                            profileId,
                            level: 1
                        };
                    }
                })
            )
        ]);
        
        if (profileResponse.ok) {
            const profileData_batch = await profileResponse.json();
            
            // Create experience map from fixed promise handling
            const experienceMap = {};
            experienceResults.forEach(result => {
                if (result.status === 'fulfilled' && result.value) {
                    experienceMap[result.value.profileId] = result.value.level;
                }
            });
            
            if (profileData_batch.data?.profiles) {
                // Process all profiles in parallel including avatar fetching
                const profilePromises = profileData_batch.data.profiles.map(async (profile) => {
                    console.log(`Processing profile: ${profile.id} - ${profile.name}`);
                    
                    // Check VIP status
                    const isVip = profile.membership && 
                                profile.membership.lastTierExpiry && 
                                new Date(profile.membership.lastTierExpiry) > new Date();
                    
                    // Get latest avatar using enhanced system with old profile ID support
                    let avatarUrl = constructAvatarUrl(profile.id);
                    
                    try {
                        if (profile.avatar?.face) {
                            const facePath = profile.avatar.face;
                            const faceFileName = extractAvatarFileName(facePath);
                            avatarUrl = constructAvatarUrl(profile.id, faceFileName);
                        }
                    } catch (error) {
                        console.warn(`Error processing avatar for ${profile.id}:`, error);
                    }
                    
                    return {
                        profileId: profile.id,
                        profileInfo: {
                            name: profile.name || window.getTranslation('unknownUser'),
                            isVip: isVip,
                            culture: profile.culture || 'unknown',
                            avatar: avatarUrl,
                            level: experienceMap[profile.id] || 1  // FIX: Now properly retrieves level
                        }
                    };
                });
                
                // Wait for all profiles to be processed
                const processedProfiles = await Promise.all(profilePromises);
                
                // Add to friendsProfiles
                processedProfiles.forEach(({ profileId, profileInfo }) => {
                    friendsProfiles[profileId] = profileInfo;
                    console.log(`Added profile: ${profileId}`, profileInfo);
                });
                
                // Update display after each batch
                updateFriendDisplays();
            }
        } else {
            console.error(`Batch request failed:`, profileResponse.status, profileResponse.statusText);
            // Add fallback data for failed batch
            batchIds.forEach(profileId => {
                friendsProfiles[profileId] = {
                    name: window.getTranslation('failedToLoad'),
                    isVip: false,
                    culture: 'unknown',
                    avatar: constructAvatarUrl(profileId),
                    level: 1
                };
            });
        }
    } catch (error) {
        console.error(`Error loading batch:`, error);
        // Add fallback data for failed batch
        batchIds.forEach(profileId => {
            friendsProfiles[profileId] = {
                name: window.getTranslation('errorLoading'),
                isVip: false,
                culture: 'unknown',
                avatar: constructAvatarUrl(profileId),
                level: 1
            };
        });
    }
}

function updateFriendDisplays() {
    // Update the current displayed list if friends settings is open
    const friendsScreen = document.getElementById('friendsSettingsScreen');
    if (friendsScreen.style.display === 'block') {
        applyFriendsFilters();
    }
}

function showFriendsSettings() {
    hideAllScreens();
    document.getElementById('friendsSettingsScreen').style.display = 'block';
    
    document.getElementById('levelFilter').value = '';
    isVipFilterActive = false;
    document.getElementById('vipFilterBtn').classList.remove('active');
    
    // Reset pagination
    currentFriendsPage = 0;
    currentRequestsPage = 0;
    currentBlockedPage = 0;
    
    // Clear previous data and start fresh
    friendsProfiles = {};
    
    // Show loading messages
    document.getElementById('friendsList').innerHTML = `<div class="loading-friends">${window.getTranslation('loadingFriends')}</div>`;
    document.getElementById('requestsList').innerHTML = `<div class="loading-friends">${window.getTranslation('loadingRequests')}</div>`;
    document.getElementById('blockedList').innerHTML = `<div class="loading-friends">${window.getTranslation('loadingBlocked')}</div>`;
    
    loadFriendsData();
}

function switchFriendsTab(tab) {
    // Check if user can access premium tabs
    if ((tab === 'requests' || tab === 'blocked') && currentUserPlan === 'Free') {
        showAccessDeniedNotification('friendsAdvanced');
        return;
    }
    
    currentFriendsTab = tab;
    
    document.querySelectorAll('.friends-tab').forEach(tabBtn => {
        tabBtn.classList.remove('active');
    });
    document.getElementById(`${tab}Tab`).classList.add('active');
    
    document.querySelectorAll('.friends-tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`${tab}Content`).classList.add('active');
    
    applyFriendsFilters();
}

function updateFriendsTabCounts() {
    document.getElementById('friendsTabCount').textContent = `(${friendsData.relationships.length})`;
    document.getElementById('requestsTabCount').textContent = `(${friendsData.requestsIn.length})`;
    document.getElementById('blockedTabCount').textContent = `(${friendsData.blocked.length})`;
}

function applyFriendsFilters() {
    let sourceData = [];
    let containerElement = null;
    
    switch (currentFriendsTab) {
        case 'friends':
            sourceData = friendsData.relationships;
            containerElement = document.getElementById('friendsList');
            break;
        case 'requests':
            sourceData = friendsData.requestsIn;
            containerElement = document.getElementById('requestsList');
            break;
        case 'blocked':
            sourceData = friendsData.blocked;
            containerElement = document.getElementById('blockedList');
            break;
    }
    
    // Apply filters
    let filteredData = sourceData;
    
    // Level filter
    const levelFilter = document.getElementById('levelFilter').value.trim();
    if (levelFilter) {
        const targetLevel = parseInt(levelFilter);
        if (!isNaN(targetLevel)) {
            filteredData = filteredData.filter(item => {
                const profile = friendsProfiles[item.profileId];
                return profile && profile.level === targetLevel;
            });
        }
    }
    
    // VIP filter
    if (isVipFilterActive) {
        filteredData = filteredData.filter(item => {
            const profile = friendsProfiles[item.profileId];
            return profile && profile.isVip;
        });
    }
    
    displayFriendsList(filteredData, containerElement, currentFriendsTab);
}

function displayFriendsList(data, container, type) {
    if (!container) return;
    
    if (data.length === 0) {
        let emptyMessage = window.getTranslation('noFriends');
        if (type === 'requests') emptyMessage = window.getTranslation('noRequests');
        if (type === 'blocked') emptyMessage = window.getTranslation('noBlocked');
        
        container.innerHTML = `<div class="no-friends-message">${emptyMessage}</div>`;
        updateFriendsPagination([], type);
        return;
    }
    
    // Calculate pagination
    let currentPage;
    switch (type) {
        case 'friends': currentPage = currentFriendsPage; break;
        case 'requests': currentPage = currentRequestsPage; break;
        case 'blocked': currentPage = currentBlockedPage; break;
    }
    
    const startIndex = currentPage * FRIENDS_PER_PAGE;
    const endIndex = startIndex + FRIENDS_PER_PAGE;
    const pageData = data.slice(startIndex, endIndex);
    
    container.innerHTML = '';
    
    pageData.forEach(item => {
        const profile = friendsProfiles[item.profileId];
        const userItem = document.createElement('div');
        userItem.className = 'friends-user-item';
        
        let actionButtons = '';
        
        if (type === 'friends') {
            actionButtons = `
                <button class="friends-action-btn remove-btn" onclick="removeFriend('${item.profileId}')">
                    <span class="icon">🗑️</span>
                </button>
            `;
        } else if (type === 'requests') {
            actionButtons = `
                <div class="request-actions">
                    <button class="friends-action-btn accept-btn" onclick="acceptRequest('${item.profileId}')">
                        <span class="icon">✓</span>
                    </button>
                    <button class="friends-action-btn reject-btn" onclick="rejectRequest('${item.profileId}')">
                        <span class="icon">✕</span>
                    </button>
                </div>
            `;
        } else if (type === 'blocked') {
            actionButtons = `
                <button class="friends-action-btn unblock-btn" onclick="unblockUser('${item.profileId}')">
                    <span class="icon">🔓</span>
                </button>
            `;
        }
        
        // Use profile data or loading/fallback values
        const displayName = profile ? profile.name : 'Loading...';
        const displayAvatar = profile ? profile.avatar : constructAvatarUrl(item.profileId);
        const isVip = profile ? profile.isVip : false;
        const level = profile ? profile.level : 1;  // FIX: Now properly displays level
        
        userItem.innerHTML = `
            <div class="friends-user-avatar">
                <img src="${displayAvatar}" alt="${displayName}" />
                ${isVip ? '<div class="vip-indicator">VIP</div>' : ''}
            </div>
            <div class="friends-user-info">
                <div class="friends-user-name">
                    ${displayName}
                    <span class="friends-user-level">Level ${level}</span>
                </div>
                <div class="friends-user-culture">${profile ? (profile.culture || 'Unknown') : 'Loading...'}</div>
            </div>
            ${actionButtons}
        `;
        
        container.appendChild(userItem);
    });
    
    // Update pagination
    updateFriendsPagination(data, type);
}

async function removeFriend(profileId) {
    try {
        const endpoints = API_ENDPOINTS[currentRegion];
        const encodedProfileId = encodeProfileId(profileId);
        const response = await makeAuthenticatedRequest(`${endpoints.profilerelationships}/${encodeProfileId(profileData.profileId)}/relationships/${encodedProfileId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${profileData.accessToken}`,
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            showTranslatedNotification('friendRemovedSuccess', 'success');
            await loadFriendsData();
        } else {
            showTranslatedNotification('errorRemovingFriend', 'error');
        }
    } catch (error) {
        console.error('Error removing friend:', error);
        showTranslatedNotification('errorRemovingFriend', 'error');
    }
}

async function acceptRequest(profileId) {
    try {
        const endpoints = API_ENDPOINTS[currentRegion];
        const encodedProfileId = encodeProfileId(profileId);
        const response = await makeAuthenticatedRequest(`${endpoints.profilerelationships}/${encodedProfileId}/relationships/requests/${encodeProfileId(profileData.profileId)}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${profileData.accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                profileId: profileData.profileId,
                state: "approved"
            })
        });

        if (response.ok) {
            showTranslatedNotification('friendRequestAccepted', 'success');
            await loadFriendsData();
        } else {
            showTranslatedNotification('errorAcceptingRequest', 'error');
        }
    } catch (error) {
        console.error('Error accepting request:', error);
        showTranslatedNotification('errorAcceptingRequest', 'error');
    }
}

async function rejectRequest(profileId) {
    try {
        const endpoints = API_ENDPOINTS[currentRegion];
        const encodedProfileId = encodeProfileId(profileId);
        const response = await makeAuthenticatedRequest(`${endpoints.profilerelationships}/${encodedProfileId}/relationships/requests/${encodeProfileId(profileData.profileId)}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${profileData.accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                profileId: profileData.profileId,
                state: "rejected"
            })
        });

        if (response.ok) {
            showTranslatedNotification('friendRequestRejected', 'success');
            await loadFriendsData();
        } else {
            showTranslatedNotification('errorRejectingRequest', 'error');
        }
    } catch (error) {
        console.error('Error rejecting request:', error);
        showTranslatedNotification('errorRejectingRequest', 'error');
    }
}

async function unblockUser(profileId) {
    try {
        const endpoints = API_ENDPOINTS[currentRegion];
        const encodedProfileId = encodeProfileId(profileId);
        const response = await makeAuthenticatedRequest(`${endpoints.profilerelationships}/${encodeProfileId(profileData.profileId)}/relationships/${encodedProfileId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${profileData.accessToken}`,
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            showTranslatedNotification('userUnblockedSuccess', 'success');
            await loadFriendsData();
        } else {
            showTranslatedNotification('errorUnblockingUser', 'error');
        }
    } catch (error) {
        console.error('Error unblocking user:', error);
        showTranslatedNotification('errorUnblockingUser', 'error');
    }
}

function showDeleteAllDialog() {
    let sourceData = [];
    
    switch (currentFriendsTab) {
        case 'friends':
            sourceData = friendsData.relationships;
            break;
        case 'requests':
            sourceData = friendsData.requestsIn;
            break;
        case 'blocked':
            sourceData = friendsData.blocked;
            break;
    }
    
    if (sourceData.length === 0) {
        showTranslatedNotification('noUsersToDelete', 'info');
        return;
    }
    
    document.getElementById('deleteAllDialog').style.display = 'flex';
    startDeleteCountdown();
}

function hideDeleteAllDialog() {
    if (window.deleteAllCountdown) {
        clearInterval(window.deleteAllCountdown);
        window.deleteAllCountdown = null;
    }
    document.getElementById('deleteAllDialog').style.display = 'none';
    document.getElementById('confirmDeleteAllBtn').disabled = true;
    document.getElementById('countdownNumber').textContent = '5';
}

function startDeleteCountdown() {
    let count = 5;
    const countdownElement = document.getElementById('countdownNumber');
    const confirmBtn = document.getElementById('confirmDeleteAllBtn');
    
    confirmBtn.disabled = true;
    countdownElement.textContent = count;
    
    window.deleteAllCountdown = setInterval(() => {
        count--;
        countdownElement.textContent = count;
        
        if (count <= 0) {
            clearInterval(window.deleteAllCountdown);
            window.deleteAllCountdown = null;
            confirmBtn.disabled = false;
            countdownElement.textContent = '0';
        }
    }, 1000);
}

async function confirmDeleteAll() {
    hideDeleteAllDialog();
    
    let sourceData = [];
    
    switch (currentFriendsTab) {
        case 'friends':
            sourceData = friendsData.relationships;
            break;
        case 'requests':
            sourceData = friendsData.requestsIn;
            break;
        case 'blocked':
            sourceData = friendsData.blocked;
            break;
    }
    
    if (sourceData.length === 0) {
        return;
    }
    
    showTranslatedNotification('removingUsers', 'info', { count: sourceData.length });
    
    // Process deletions in parallel for speed
    const deletePromises = sourceData.map(async (item) => {
        try {
            if (currentFriendsTab === 'requests') {
                await rejectRequest(item.profileId);
            } else {
                const endpoints = API_ENDPOINTS[currentRegion];
                const encodedItemProfileId = encodeProfileId(item.profileId);
                const encodedOwnProfileId = encodeProfileId(profileData.profileId);
                const response = await makeAuthenticatedRequest(`${endpoints.profilerelationships}/${encodedOwnProfileId}/relationships/${encodedItemProfileId}`, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': `Bearer ${profileData.accessToken}`,
                        'Content-Type': 'application/json'
                    }
                });
                return response.ok;
            }
            return true;
        } catch (error) {
            console.error(`Error removing user ${item.profileId}:`, error);
            return false;
        }
    });
    
    const results = await Promise.all(deletePromises);
    const successCount = results.filter(result => result === true).length;
    
    if (successCount > 0) {
        showTranslatedNotification('allUsersRemoved', 'success', { success: successCount, total: sourceData.length });
        await loadFriendsData();
    } else {
        showTranslatedNotification('errorRemovingAllUsers', 'error');
    }
}

// ENHANCED DAILY TASKS
async function startEnhancedDailyTasks() {
    if (!profileData || isProcessing) return;

    isProcessing = true;
    
    const progressContainer = document.getElementById('progressContainer');
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    const progressStatus = document.getElementById('progressStatus');

    progressContainer.style.display = 'block';
    progressBar.style.width = '0%';
    progressText.textContent = '0%';
    progressStatus.textContent = window.getTranslation('startingEnhancedTasks');

    showTranslatedNotification('startingEnhancedTasks', 'info');

    const endpoints = API_ENDPOINTS[currentRegion];
    const headers = {
        "Authorization": `Bearer ${profileData.accessToken}`,
        "content-type": "application/json"
    };

    try {
        let completed = 0;
        let total = 0;

        // Calculate total tasks
        total += PET_IDS.length; // Pet interactions
        total += DAILY_QUEST_TYPES.length; // Daily quests
        total += 3; // VIP pickup gifts (3 times)
        total += 4; // Normal pickup gifts (4 times)
        total += 3; // VIP rewards (3 times)
        total += 4; // Normal rewards (4 times)

        // Calculate delay to complete in 15 seconds
        const totalTime = 15000; // 15 seconds
        const delayPerTask = totalTime / total;

        const updateProgress = () => {
            const percentage = Math.round((completed / total) * 100);
            progressBar.style.width = percentage + '%';
            progressText.textContent = percentage + '%';
        };

        // 1. Pet interactions
        progressStatus.textContent = window.getTranslation('processingPetInteractions');
        for (const petId of PET_IDS) {
            try {
                await makeAuthenticatedRequest(`${endpoints.pets}/${petId}/interactions`, {
                    method: "POST",
                    headers,
                    body: JSON.stringify({
                        profileId: profileData.profileId,
                        gameId: "j68d"
                    })
                });
            } catch (error) {}
            completed++;
            updateProgress();
            await delay(delayPerTask);
        }

        // 2. Complete daily quests
        progressStatus.textContent = window.getTranslation('completingDailyQuests');
        for (const questType of DAILY_QUEST_TYPES) {
            try {
                await makeAuthenticatedRequest(`${endpoints.quests}/${profileData.profileId}/games/j68d/quests/${questType}/state`, {
                    method: "PUT",
                    headers,
                    body: JSON.stringify({ state: "Complete" })
                });
            } catch (error) {}
            completed++;
            updateProgress();
            await delay(delayPerTask);
        }

        // 3. VIP pickup gifts (3 times)
        progressStatus.textContent = window.getTranslation('processingVipGifts');
        for (let i = 0; i < 3; i++) {
            try {
                await makeAuthenticatedRequest(`${endpoints.quests}/${profileData.profileId}/games/j68d/quests/daily_open_gift_vip/progress`, {
                    method: "PUT",
                    headers,
                    body: JSON.stringify({ progress: 1 })
                });
            } catch (error) {}

            completed++;
            updateProgress();
            await delay(delayPerTask);
        }

        // 4. Normal pickup gifts (4 times)
        progressStatus.textContent = window.getTranslation('processingNormalGifts');
        for (let i = 0; i < 4; i++) {
            try {
                await makeAuthenticatedRequest(`${endpoints.quests}/${profileData.profileId}/games/j68d/quests/daily_open_gift_normal/progress`, {
                    method: "PUT",
                    headers,
                    body: JSON.stringify({ progress: 1 })
                });
            } catch (error) {}

            completed++;
            updateProgress();
            await delay(delayPerTask);
        }

        // 5. VIP pickup rewards (3 times)
        progressStatus.textContent = window.getTranslation('claimingVipRewards');
        for (let i = 0; i < 3; i++) {
            try {
                await makeAuthenticatedRequest(`${endpoints.rewards}/${profileData.profileId}/games/j68d/rewards/daily_pickup_vip`, {
                    method: "PUT",
                    headers,
                    body: JSON.stringify({ state: "Claimed" })
                });
            } catch (error) {}

            completed++;
            updateProgress();
            await delay(delayPerTask);
        }

        // 6. Normal pickup rewards (4 times)
        progressStatus.textContent = window.getTranslation('claimingNormalRewards');
        for (let i = 0; i < 4; i++) {
            try {
                await makeAuthenticatedRequest(`${endpoints.rewards}/${profileData.profileId}/games/j68d/rewards/daily_pickup`, {
                    method: "PUT",
                    headers,
                    body: JSON.stringify({ state: "Claimed" })
                });
            } catch (error) {}

            completed++;
            updateProgress();
            await delay(delayPerTask);
        }

        // 7. Additional quests
        progressStatus.textContent = window.getTranslation('processingAdditionalQuests');
        try {
            const questTypes = ["EventQuest", "StaticDailyQuest", "RandomDailyQuest"];
            const queryString = questTypes.map(type => `questType=${type}`).join("&");
            const url = `${endpoints.quests}/${profileData.profileId}/games/j68d/quests?${queryString}`;

            const response = await makeAuthenticatedRequest(url, { headers });
            const questData = await response.json();

            if (questData?.quests) {
                const activeQuests = questData.quests.filter(q => q.state === "Active");

                for (const quest of activeQuests) {
                    // main quest progress
                    try {
                        await makeAuthenticatedRequest(
                            `${endpoints.quests}/${profileData.profileId}/games/j68d/quests/${quest.definitionId}/progress`,
                            {
                                method: "PUT",
                                headers,
                                body: JSON.stringify({ progress: 1 })
                            }
                        );
                    } catch (error) {}

                    try {
                        await makeAuthenticatedRequest(
                            `${endpoints.quests}/${profileData.profileId}/games/j68d/quests/${quest.definitionId}/state`,
                            {
                                method: "PUT",
                                headers,
                                body: JSON.stringify({ state: "Complete" })
                            }
                        );
                    } catch (error) {}

                    // child quests
                    if (quest.children?.length > 0) {
                        for (const child of quest.children) {
                            if (child.state === "Active") {
                                try {
                                    await makeAuthenticatedRequest(
                                        `${endpoints.quests}/${profileData.profileId}/games/j68d/quests/${child.definitionId}/progress`,
                                        {
                                            method: "PUT",
                                            headers,
                                            body: JSON.stringify({ progress: 1 })
                                        }
                                    );
                                } catch (error) {}

                                try {
                                    await makeAuthenticatedRequest(
                                        `${endpoints.quests}/${profileData.profileId}/games/j68d/quests/${child.definitionId}/state`,
                                        {
                                            method: "PUT",
                                            headers,
                                            body: JSON.stringify({ state: "Complete" })
                                        }
                                    );
                                } catch (error) {}
                            }
                        }
                    }
                }
            }
        } catch (error) {
            console.error('Additional quests error:', error);
        }

        progressBar.style.width = '100%';
        progressText.textContent = '100%';
        progressStatus.textContent = window.getTranslation('allEnhancedTasksComplete');
        showTranslatedNotification('enhancedTasksCompletedSuccess', 'success');

    } catch (error) {
        progressStatus.textContent = window.getTranslation('errorDuringExecution');
        showTranslatedNotification('errorDuringDailyTasks', 'error');
        console.error('Daily tasks error:', error);
    } finally {
        isProcessing = false;
        
        // Hide progress bar after 3 seconds
        setTimeout(() => {
            progressContainer.style.display = 'none';
        }, 3000);
    }
}

// FAST START FUNCTION - ULTRA PARALLEL WITH PROFILE ID ENCODING
async function startFastDailyTasks() {
    hideFastStartDialog();
    
    if (!profileData || isProcessing) return;

    isProcessing = true;
    
    const progressContainer = document.getElementById('progressContainer');
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    const progressStatus = document.getElementById('progressStatus');

    progressContainer.style.display = 'block';
    progressBar.style.width = '0%';
    progressText.textContent = '0%';
    progressStatus.textContent = window.getTranslation('startingFastTasks');

    showTranslatedNotification('startingFastTasks', 'warning');

    const endpoints = API_ENDPOINTS[currentRegion];
    const headers = {
        "Authorization": `Bearer ${profileData.accessToken}`,
        "content-type": "application/json"
    };

    try {
        const allTasks = [];
        const encodedProfileId = encodeProfileId(profileData.profileId);

        // 1. Pet interactions
        progressStatus.textContent = window.getTranslation('fastProcessingAllTasks');
        progressBar.style.width = '50%';
        progressText.textContent = '50%';
        
        for (const petId of PET_IDS) {
            allTasks.push(
                makeAuthenticatedRequest(`${endpoints.pets}/${petId}/interactions`, {
                    method: "POST",
                    headers,
                    body: JSON.stringify({ 
                        profileId: profileData.profileId, 
                        gameId: "j68d" 
                    })
                }).catch(() => {}) // Ignore errors
            );
        }

        // 2. Complete daily quests
        for (const questType of DAILY_QUEST_TYPES) {
            allTasks.push(
                makeAuthenticatedRequest(`${endpoints.quests}/${encodedProfileId}/games/j68d/quests/${questType}/state`, {
                    method: "PUT",
                    headers,
                    body: JSON.stringify({ state: "Complete" })
                }).catch(() => {}) // Ignore errors
            );
        }

        // 3. VIP pickup gifts (3 times)
        for (let i = 0; i < 3; i++) {
            allTasks.push(
                makeAuthenticatedRequest(`${endpoints.quests}/${encodedProfileId}/games/j68d/quests/daily_open_gift_vip/progress`, {
                    method: "PUT",
                    headers,
                    body: JSON.stringify({ progress: 1 })
                }).catch(() => {}) // Ignore errors
            );
        }

        // 4. Normal pickup gifts (4 times)
        for (let i = 0; i < 4; i++) {
            allTasks.push(
                makeAuthenticatedRequest(`${endpoints.quests}/${encodedProfileId}/games/j68d/quests/daily_open_gift_normal/progress`, {
                    method: "PUT",
                    headers,
                    body: JSON.stringify({ progress: 1 })
                }).catch(() => {}) // Ignore errors
            );
        }

        // 5. VIP pickup rewards (3 times)
        for (let i = 0; i < 3; i++) {
            allTasks.push(
                makeAuthenticatedRequest(`${endpoints.rewards}/${encodedProfileId}/games/j68d/rewards/daily_pickup_vip`, {
                    method: "PUT",
                    headers,
                    body: JSON.stringify({ state: "Claimed" })
                }).catch(() => {}) // Ignore errors
            );
        }

        // 6. Normal pickup rewards (4 times)
        for (let i = 0; i < 4; i++) {
            allTasks.push(
                makeAuthenticatedRequest(`${endpoints.rewards}/${encodedProfileId}/games/j68d/rewards/daily_pickup`, {
                    method: "PUT",
                    headers,
                    body: JSON.stringify({ state: "Claimed" })
                }).catch(() => {}) // Ignore errors
            );
        }

        // Execute all tasks in parallel
        progressStatus.textContent = window.getTranslation('fastExecutingSimultaneously');
        await Promise.all(allTasks);

        progressBar.style.width = '100%';
        progressText.textContent = '100%';
        progressStatus.textContent = window.getTranslation('allFastTasksComplete');
        showTranslatedNotification('fastTasksCompletedSuccess', 'success');

    } catch (error) {
        progressStatus.textContent = window.getTranslation('errorDuringExecution');
        showTranslatedNotification('errorDuringFastTasks', 'error');
        console.error('FAST daily tasks error:', error);
    } finally {
        isProcessing = false;
        
        // Hide progress bar after 3 seconds
        setTimeout(() => {
            progressContainer.style.display = 'none';
        }, 3000);
    }
}

// Utility functions
function showLoadingScreen() {
    hideAllScreens();
    document.getElementById('loadingScreen').style.display = 'flex';

    setTimeout(() => {
        document.getElementById('loadingText').textContent = window.getTranslation('approvedLogin');
    }, 500);

    setTimeout(() => {
        showBootloader();
    }, 800);
}

function showBootloader() {
    hideAllScreens();
    document.getElementById('bootloaderScreen').style.display = 'flex';

    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
    } catch (error) {
        console.log('Audio playback not supported');
    }

    setTimeout(() => {
        loadUserData();
    }, 2000);
}

async function loadUserData() {
    if (!profileData) return;

    try {
        // Load all user data in parallel for maximum speed
        await Promise.all([
            loadProfileIdentityData(),
            loadProfileData(),
            loadExperienceData(),
            loadGiftsData(),
            loadCurrentWAYD(),
            loadFriendsData()
        ]);
        
        // Update user plan after loading profile data
        updateUserPlan();
        
        showMainMenu();
    } catch (error) {
        console.error('Error loading user data:', error);
        showMainMenu();
    }
}

async function loadProfileIdentityData() {
    if (!profileData || !loginId) return;

    try {
        const endpoints = API_ENDPOINTS[currentRegion];
        const encodedLoginId = encodeProfileId(loginId);
        const response = await makeAuthenticatedRequest(`${endpoints.profileidentity}/logins/${encodedLoginId}/profiles?pageSize=100&page=1`, {
            headers: {
                'Authorization': `Bearer ${profileData.accessToken}`,
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            const data = await response.json();
            if (data && data.length > 0) {
                const profile = data[0];
                userData = {
                    ...userData,
                    name: profile.name
                };
                localStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(userData));
                updateUserInfo();
            }
        }
    } catch (error) {
        console.error('Error loading profile identity data:', error);
    }
}

async function loadProfileData() {
    if (!profileData) return;

    try {
        const endpoints = API_ENDPOINTS[currentRegion];
        const response = await makeAuthenticatedRequest(endpoints.edgeprofile, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${profileData.accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: `
                    query GetProfile($profileId: String!, $gameId:String!) {
                       profile(profileId: $profileId) {
                            name
                            balance(gameId: $gameId) {
                              available {
                                currency
                                count
                              }
                            }
                            memberships {
                              lastTierExpiry 
                            }
                        }
                    }`,
                variables: {
                    profileId: profileData.profileId,
                    gameId: "j68d"
                }
            })
        });

        if (response.ok) {
            const data = await response.json();
            if (data.data && data.data.profile) {
                const profile = data.data.profile;
                
                let starcoins = 0;
                let diamonds = 0;
                
                if (profile.balance && profile.balance.available) {
                    profile.balance.available.forEach(currency => {
                        if (currency.currency === 'soft') {
                            starcoins = currency.count;
                        } else if (currency.currency === 'hard') {
                            diamonds = currency.count;
                        }
                    });
                }

                userData = {
                    ...userData,
                    name: profile.name,
                    starcoins: starcoins,
                    diamonds: diamonds,
                    avatar: await getLatestAvatarByProfileId(profileData.profileId)
                };
                
                localStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(userData));
                updateUserInfo();
            }
        }
    } catch (error) {
        console.error('Error loading profile data:', error);
    }
}

async function loadExperienceData() {
    if (!profileData) return;

    try {
        const endpoints = API_ENDPOINTS[currentRegion];
        const encodedProfileId = encodeProfileId(profileData.profileId);
        const response = await makeAuthenticatedRequest(`${endpoints.experience}/${encodedProfileId}/games/j68d/experience`, {
            headers: {
                'Authorization': `Bearer ${profileData.accessToken}`,
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            const data = await response.json();
            userData = {
                ...userData,
                experience: data.experience
            };
            localStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(userData));
            updateUserInfo();
            updateFeatureAccess(); // Update access control after loading level
        }
    } catch (error) {
        console.error('Error loading experience data:', error);
    }
}

async function loadGiftsData() {
    if (!profileData) return;

    try {
        const endpoints = API_ENDPOINTS[currentRegion];
        const response = await makeAuthenticatedRequest(endpoints.edgegifts, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${profileData.accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: `query CheckGifts($profileId: ID!, $gameId: String!, $pageSize: Int, $cursor: String) { 
                    gifts(input: {profileId: $profileId, gameId: $gameId, pageSize: $pageSize, cursor: $cursor }) { 
                        cursor 
                        gifts { 
                            giftId 
                            giverProfileId 
                            receiverProfileId 
                            gameId 
                            message 
                            additionalData 
                            state 
                            givenAt 
                            giverProfile {
                                id 
                                name 
                                membership {
                                    lastTierExpiry 
                                } 
                                avatar(preferredGameId: $gameId) {
                                    gameId
                                    face
                                    full
                                } 
                            } 
                        } 
                    } 
                }`,
                variables: {
                    profileId: profileData.profileId,
                    pageSize: 12,
                    gameId: "j68d",
                    cursor: null
                }
            })
        });

        if (response.ok) {
            const data = await response.json();
            if (data.data && data.data.gifts) {
                giftsData = data.data.gifts.gifts || [];
                updateGiftsCount();
            }
        }
    } catch (error) {
        console.error('Error loading gifts data:', error);
    }
}

async function loadCurrentWAYD() {
    if (!profileData) return;

    try {
        const endpoints = API_ENDPOINTS[currentRegion];
        const encodedProfileId = encodeProfileId(profileData.profileId);
        const response = await makeAuthenticatedRequest(`${endpoints.profileattributes}/${encodedProfileId}/games/j68d/attributes`, {
            headers: {
                'Authorization': `Bearer ${profileData.accessToken}`,
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            const data = await response.json();
            if (data.additionalData && data.additionalData.WAYD) {
                currentWaydId = data.additionalData.WAYD;
                await loadCommentsCount();
            } else {
                document.getElementById('commentsCount').textContent = '(0)';
            }
        }
    } catch (error) {
        console.error('Error loading current WAYD:', error);
        document.getElementById('commentsCount').textContent = '(0)';
    }
}

async function loadCommentsCount() {
    if (!profileData || !currentWaydId) {
        document.getElementById('commentsCount').textContent = '(0)';
        return;
    }

    try {
        const endpoints = API_ENDPOINTS[currentRegion];
        const response = await makeAuthenticatedRequest(endpoints.edgecomments, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${profileData.accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: `query GetCommentsCount($entityType: EntityType!, $threadId: ID!) {
                    count(entityType: $entityType, threadId: $threadId) {
                        count 
                    }
                }`,
                variables: JSON.stringify({
                    entityType: "UGC",
                    threadId: currentWaydId
                })
            })
        });

        if (response.ok) {
            const data = await response.json();
            if (data.data && data.data.count) {
                const count = data.data.count.count || 0;
                document.getElementById('commentsCount').textContent = `(${count})`;
            } else {
                document.getElementById('commentsCount').textContent = '(0)';
            }
        } else {
            document.getElementById('commentsCount').textContent = '(0)';
        }
    } catch (error) {
        console.error('Error loading comments count:', error);
        document.getElementById('commentsCount').textContent = '(0)';
    }
}

function updateUserInfo() {
    if (!userData) return;

    if (userData.name) {
        document.getElementById('username').textContent = userData.name;
        const passwordUsername = document.getElementById('passwordUsername');
        if (passwordUsername) {
            passwordUsername.textContent = userData.name;
        }
    }

    if (userData.starcoins !== undefined) {
        document.getElementById('starcoins').textContent = userData.starcoins.toLocaleString();
    }
    if (userData.diamonds !== undefined) {
        document.getElementById('diamonds').textContent = userData.diamonds.toLocaleString();
    }

    if (userData.experience) {
        const { level, xp, currentLevelXpMin, currentLevelXpMax } = userData.experience;
        
        document.getElementById('userLevel').textContent = level;
        
        const currentXp = xp - currentLevelXpMin;
        const maxXp = currentLevelXpMax - currentLevelXpMin;
        const percentage = (currentXp / maxXp) * 100;
        
        document.getElementById('xpProgress').style.width = `${percentage}%`;
        document.getElementById('xpText').textContent = `${currentXp} / ${maxXp}`;
    }

    if (userData.avatar) {
        document.getElementById('userAvatar').src = userData.avatar;
        const passwordAvatar = document.getElementById('passwordUserAvatar');
        if (passwordAvatar) {
            passwordAvatar.src = userData.avatar;
        }
    }
}

function updateGiftsCount() {
    document.getElementById('giftsCount').textContent = giftsData.length;
}

function showMainMenu() {
    hideAllScreens();
    document.getElementById('mainMenu').style.display = 'block';
    
    // Show standard buttons
    document.getElementById('exitBtn').style.display = 'flex';
    document.getElementById('languageBtn').style.display = 'flex';
    document.getElementById('zoomBtn').style.display = 'flex';
    document.getElementById('planBtn').style.display = 'flex';
    document.getElementById('autographBtn').style.display = 'flex';
    document.getElementById('changePasswordBtn').style.display = 'flex';
    
    // Update feature access which will handle button visibility based on user plan
    updateFeatureAccess();
}

function showChangePassword() {
    hideAllScreens();
    document.getElementById('changePasswordScreen').style.display = 'block';
    
    document.getElementById('currentPasswordInput').value = '';
    document.getElementById('newPasswordInput').value = '';
    document.getElementById('confirmPasswordInput').value = '';
    
    updateUserInfo();
}

// Autograph functions
function showAutograph() {
    hideAllScreens();
    document.getElementById('autographScreen').style.display = 'block';
}

function hideAutograph() {
    document.getElementById('autographScreen').style.display = 'none';
    showMainMenu();
}

async function handleAutogreetFromInput() {
    const input = document.getElementById('autographUsernameInput');
    const username = input.value.trim();

    if (!username) {
        showTranslatedNotification('pleaseEnterUsername', 'error');
        return;
    }

    await startAutoGreeting(username);
}

async function startAutoGreeting(username) {
    if (!profileData) {
        showTranslatedNotification('pleaseLoginFirst', 'error');
        return;
    }

    if (isAutoGreeting) {
        showTranslatedNotification('autoGreetingAlreadyRunning', 'info');
        return;
    }

    showTranslatedNotification('searchingForUser', 'info', {}, `${window.getTranslation('searchingForUser')}${username}`);
    updateAutographLog(`${window.getTranslation('searchingForUser')}${username}...`);

    const profileId = await findProfileId(username);
    if (!profileId) {
        showTranslatedNotification('couldNotFindUser', 'error', {}, `${window.getTranslation('couldNotFindUser')}${username}`);
        updateAutographLog(`${window.getTranslation('errorDuringExecution')}: ${window.getTranslation('couldNotFindUser')}${username}`);
        return;
    }

    currentTargetProfileId = profileId;
    currentTargetUsername = username;
    isAutoGreeting = true;
    greetingStats.count = 0;
    greetingStats.type = document.getElementById('greetingTypeSelector').value;

    await sendGreeting();

    autoSendInterval = setInterval(async () => {
        await sendGreeting();
    }, 120000);

    showTranslatedNotification('autoGreetingStarted', 'success', {}, `${window.getTranslation('autoGreetingStarted')}${username}`);
    updateAutographLog(`${window.getTranslation('autoGreetingStarted')}${username}${window.getTranslation('sendingEveryTwoMinutes')}`);
}

function stopAutoGreeting() {
    if (autoSendInterval) {
        clearInterval(autoSendInterval);
        autoSendInterval = null;
    }

    if (isAutoGreeting) {
        showReceipt();
    }

    setTimeout(() => {
        currentTargetProfileId = null;
        currentTargetUsername = null;
        isAutoGreeting = false;
        
        updateAutographLog(window.getTranslation('autoGreetingStopped'));
    }, 100);
}

async function findProfileId(username) {
    if (!profileData) return null;

    try {
        const userData = getUserDataFromToken(profileData.accessToken);
        if (!userData?.name) return null;

        const region = userData.name.split("|")[0];
        const endpoints = API_ENDPOINTS[currentRegion];

        const response = await makeAuthenticatedRequest(endpoints.edgerelationships, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${profileData.accessToken}`
            },
            body: JSON.stringify({
                query: `query GetProfileSearch($region: String!, $startsWith: String!, $pageSize: Int, $currentPage: Int, $preferredGameId: String!) {
                    findProfiles(region: $region, nameBeginsWith: $startsWith, pageSize: $pageSize, page: $currentPage) {
                        totalCount
                        nodes {
                            id
                            avatar(preferredGameId: $preferredGameId) {
                                gameId
                                face
                                full
                            }
                        }
                    }
                }`,
                variables: {
                    region: region,
                    startsWith: username,
                    pageSize: 50,
                    currentPage: 1,
                    preferredGameId: "j68d"
                }
            })
        });

        const result = await response.json();
        return result?.data?.findProfiles?.nodes?.[0]?.id || null;
    } catch (error) {
        console.error('Error finding profile:', error);
        return null;
    }
}

function getUserDataFromToken(token) {
    if (!token) return null;

    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        
        return JSON.parse(jsonPayload);
    } catch (error) {
        return null;
    }
}

async function sendGreeting() {
    if (!profileData || !currentTargetProfileId) return false;

    const greetingType = document.getElementById('greetingTypeSelector').value;
    const endpoints = API_ENDPOINTS[currentRegion];

    try {
        const response = await makeAuthenticatedRequest(endpoints.federationgateway, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${profileData.accessToken}`
            },
            body: JSON.stringify({
                id: "SendGreetings-159BDD7706D824BB8F14874A7FAE3368",
                variables: {
                    greetingType: greetingType,
                    receiverProfileId: currentTargetProfileId,
                    ignoreDailyCap: true
                }
            })
        });

        const result = await response.json();
        const success = result?.data?.greetings?.sendGreeting?.success || response.ok;
        
        if (success) {
            greetingStats.count++;
            greetingStats.type = greetingType;
        }
        
        const time = new Date().toLocaleTimeString();
        const statusMessage = `[${time}] ${greetingType} to ${currentTargetUsername}: ${success ? 'Success' : 'Failed'}`;
        updateAutographLog(statusMessage);
        
        return success;
    } catch (error) {
        const time = new Date().toLocaleTimeString();
        const statusMessage = `[${time}] ${greetingType} to ${currentTargetUsername}: Error`;
        updateAutographLog(statusMessage);
        return false;
    }
}

function updateAutographLog(message) {
    const logDiv = document.getElementById('autographLog');
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    logDiv.appendChild(messageDiv);

    while (logDiv.children.length > 10) {
        logDiv.removeChild(logDiv.firstChild);
    }

    logDiv.scrollTop = logDiv.scrollHeight;
}

function showReceipt() {
    hideAllScreens();
    document.getElementById('receiptScreen').style.display = 'flex';

    document.getElementById('receiptGreetingType').textContent = greetingStats.type;
    document.getElementById('receiptCount').textContent = greetingStats.count;
    document.getElementById('receiptTotal').textContent = greetingStats.count;
}

function closeReceipt() {
    showMainMenu();
}

// Change Mood
function showChangeMood() {
    hideAllScreens();
    document.getElementById('changeMoodScreen').style.display = 'block';
    updateMoodDisplay();
}

function changeMoodIndex(direction) {
    currentMoodIndex += direction;
    
    if (currentMoodIndex < 0) {
        currentMoodIndex = MOOD_LIST.length - 1;
    } else if (currentMoodIndex >= MOOD_LIST.length) {
        currentMoodIndex = 0;
    }
    
    updateMoodDisplay();
}

function updateMoodDisplay() {
    const imageNumber = currentMoodIndex + 1;
    const moodName = MOOD_LIST[currentMoodIndex];
    const isFree = FREE_MOODS.includes(moodName);
    const canAccess = isFree || currentUserPlan === 'Plus' || currentUserPlan === 'Pro';
    
    document.getElementById('currentMoodImage').src = `image/image${imageNumber}.jpg`;
    document.getElementById('currentMoodImage').onerror = function() {
        this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiByeD0iMTIiIGZpbGw9IiMzNDM0MzQiLz4KPHRLEZT4PSI2MCIgeT0iNzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OTk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SU1BR0U8L3RleHQ+Cjwvc3ZnPgo=';
    };
    
    document.getElementById('moodNumber').textContent = `#${imageNumber}`;
    document.getElementById('moodCounter').textContent = `${imageNumber} / ${MOOD_LIST.length}`;
    
    // Show/hide premium overlay
    const overlay = document.getElementById('moodPremiumOverlay');
    const applyBtn = document.getElementById('applyMoodBtn');
    
    if (!canAccess) {
        overlay.style.display = 'flex';
        applyBtn.disabled = true;
        applyBtn.style.opacity = '0.6';
    } else {
        overlay.style.display = 'none';
        applyBtn.disabled = false;
        applyBtn.style.opacity = '1';
    }
}

async function applySelectedMood() {
    if (!profileData) return;
    
    const selectedMood = MOOD_LIST[currentMoodIndex];
    const isFree = FREE_MOODS.includes(selectedMood);
    const canAccess = isFree || currentUserPlan === 'Plus' || currentUserPlan === 'Pro';
    
    if (!canAccess) {
        showAccessDeniedNotification('mood');
        return;
    }

    try {
        const endpoints = API_ENDPOINTS[currentRegion];
        const encodedProfileId = encodeProfileId(profileData.profileId);
        
        const getResponse = await makeAuthenticatedRequest(`${endpoints.profileattributes}/${encodedProfileId}/games/j68d/attributes`, {
            headers: {
                'Authorization': `Bearer ${profileData.accessToken}`,
                'Content-Type': 'application/json'
            }
        });

        if (getResponse.ok) {
            const currentData = await getResponse.json();
            
            const updatedData = {
                ...currentData,
                additionalData: {
                    ...currentData.additionalData,
                    Mood: selectedMood
                }
            };

            const putResponse = await makeAuthenticatedRequest(`${endpoints.profileattributes}/${encodedProfileId}/games/j68d/attributes`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${profileData.accessToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedData)
            });

            if (putResponse.ok) {
                showNotification('Mood changed successfully!', 'success');
                showMainMenu();
            } else {
                showNotification('Failed to change mood', 'error');
            }
        }
    } catch (error) {
        console.error('Error changing mood:', error);
        showNotification('Error changing mood', 'error');
    }
}

async function changeGender() {
    if (!profileData) return;

    try {
        const endpoints = API_ENDPOINTS[currentRegion];
        const encodedProfileId = encodeProfileId(profileData.profileId);
        
        currentGender = currentGender === 'Boy' ? 'Girl' : 'Boy';
        
        const getResponse = await makeAuthenticatedRequest(`${endpoints.profileattributes}/${encodedProfileId}/games/j68d/attributes`, {
            headers: {
                'Authorization': `Bearer ${profileData.accessToken}`,
                'Content-Type': 'application/json'
            }
        });

        if (getResponse.ok) {
            const currentData = await getResponse.json();
            
            const updatedData = {
                ...currentData,
                additionalData: {
                    ...currentData.additionalData,
                    Gender: currentGender
                }
            };

            const putResponse = await makeAuthenticatedRequest(`${endpoints.profileattributes}/${encodedProfileId}/games/j68d/attributes`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${profileData.accessToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedData)
            });

            if (putResponse.ok) {
                showNotification(`Gender changed to ${currentGender}`, 'success');
            } else {
                showNotification('Failed to change gender', 'error');
            }
        }
    } catch (error) {
        console.error('Error changing gender:', error);
        showNotification('Error changing gender', 'error');
    }
}

// Gift Functions - FIXED IMPLEMENTATION WITH NEW AVATAR SYSTEM AND PROFILE ID ENCODING
async function showGifts() {
    hideAllScreens();
    document.getElementById('giftsScreen').style.display = 'block';

    const giftsList = document.getElementById('giftsList');
    giftsList.innerHTML = '';

    if (giftsData.length === 0) {
        giftsList.innerHTML = '<div style="text-align: center; color: rgba(255,255,255,0.5); padding: 20px;">No gifts available</div>';
        return;
    }

    for (const gift of giftsData) {
        const giftItem = document.createElement('div');
        giftItem.className = 'gift-item';
        
        const isVip = gift.giverProfile.membership && new Date(gift.giverProfile.membership.lastTierExpiry) > new Date();
        
        // Get latest avatar using new system with old profile ID support
        const latestAvatarUrl = await getLatestAvatarByProfileId(gift.giverProfile.id);
        
        giftItem.innerHTML = `
            <img class="gift-avatar" src="${latestAvatarUrl}" alt="${gift.giverProfile.name}">
            <div class="gift-info">
                <div class="gift-sender">
                    ${gift.giverProfile.name} 
                    ${isVip ? '<span class="vip-badge">VIP</span>' : ''}
                </div>
                <div class="gift-level">From: ${gift.giverProfile.name}</div>
            </div>
            <button class="open-gift-btn" onclick="openGift('${gift.giftId}')">Open</button>
        `;
        
        giftsList.appendChild(giftItem);
    }
}

async function openGift(giftId) {
    if (!profileData || isOpeningGifts) {
        showNotification('Please wait...', 'info');
        return;
    }

    const translations = window.TRANSLATIONS[currentLanguage] || window.TRANSLATIONS.en;
    
    try {
        showNotification(translations.giftOpening, 'info');
        
        const endpoints = API_ENDPOINTS[currentRegion];
        const response = await makeAuthenticatedRequest(endpoints.edgegifts, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${profileData.accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: `mutation OpenGift($giftId: ID!, $receiverProfileId: ID!) { 
                    openGift(input: {giftId: $giftId, receiverProfileId: $receiverProfileId }) { 
                        success 
                        error 
                        item { 
                            id 
                            objectId 
                            objectSource 
                            additionalData 
                            tags { 
                                id 
                                source 
                            } 
                        } 
                    } 
                }`,
                variables: JSON.stringify({
                    giftId: giftId,
                    receiverProfileId: profileData.profileId
                })
            })
        });

        if (response.ok) {
            const result = await response.json();
            
            if (result.data?.openGift?.success) {
                showNotification(translations.giftOpenSuccess, 'success');
                
                // Remove the opened gift from the gifts list
                const giftButton = document.querySelector(`button[onclick="openGift('${giftId}')"]`);
                if (giftButton) {
                    const giftItem = giftButton.closest('.gift-item');
                    if (giftItem) {
                        giftItem.remove();
                    }
                }
                
                // Update gifts data
                giftsData = giftsData.filter(gift => gift.giftId !== giftId);
                updateGiftsCount();
                
                // Reload gifts list if empty
                if (giftsData.length === 0) {
                    document.getElementById('giftsList').innerHTML = '<div style="text-align: center; color: rgba(255,255,255,0.5); padding: 20px;">No gifts available</div>';
                }
                
            } else {
                const errorMessage = result.data?.openGift?.error || 'Unknown error';
                showNotification(`${translations.giftOpenError}: ${errorMessage}`, 'error');
            }
        } else {
            showNotification(translations.giftOpenError, 'error');
        }
    } catch (error) {
        console.error('Error opening gift:', error);
        showNotification(translations.giftOpenError, 'error');
    }
}

async function openAllGifts() {
    if (!profileData || giftsData.length === 0 || isOpeningGifts) {
        if (giftsData.length === 0) {
            showNotification('No gifts to open', 'info');
        } else {
            showNotification('Please wait...', 'info');
        }
        return;
    }

    const translations = window.TRANSLATIONS[currentLanguage] || window.TRANSLATIONS.en;
    isOpeningGifts = true;
    
    try {
        showNotification(`${translations.openingGifts} (${giftsData.length})...`, 'info');
        
        // Process all gifts in parallel for maximum speed
        const giftPromises = giftsData.map(async (gift) => {
            try {
                const endpoints = API_ENDPOINTS[currentRegion];
                const response = await makeAuthenticatedRequest(endpoints.edgegifts, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${profileData.accessToken}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        query: `mutation OpenGift($giftId: ID!, $receiverProfileId: ID!) { 
                            openGift(input: {giftId: $giftId, receiverProfileId: $receiverProfileId }) { 
                                success 
                                error 
                            } 
                        }`,
                        variables: JSON.stringify({
                            giftId: gift.giftId,
                            receiverProfileId: profileData.profileId
                        })
                    })
                });

                if (response.ok) {
                    const result = await response.json();
                    if (result.data?.openGift?.success) {
                        return { success: true, giftId: gift.giftId };
                    } else {
                        return { success: false, giftId: gift.giftId, error: result.data?.openGift?.error };
                    }
                } else {
                    return { success: false, giftId: gift.giftId, error: 'HTTP Error' };
                }
            } catch (error) {
                return { success: false, giftId: gift.giftId, error: error.message };
            }
        });

        const results = await Promise.all(giftPromises);
        
        // Count successes and update UI
        let successCount = 0;
        let errorCount = 0;
        
        results.forEach(result => {
            if (result.success) {
                successCount++;
                // Remove gift from UI
                const giftButton = document.querySelector(`button[onclick="openGift('${result.giftId}')"]`);
                if (giftButton) {
                    const giftItem = giftButton.closest('.gift-item');
                    if (giftItem) {
                        giftItem.remove();
                    }
                }
            } else {
                errorCount++;
                console.error(`Failed to open gift ${result.giftId}:`, result.error);
            }
        });

        // Update gifts data
        giftsData = giftsData.filter(gift => {
            const giftButton = document.querySelector(`button[onclick="openGift('${gift.giftId}')"]`);
            return giftButton !== null; // Keep gifts that still have buttons (weren't opened)
        });
        
        updateGiftsCount();
        
        // Show results
        if (successCount > 0) {
            if (errorCount > 0) {
                showNotification(`Opened ${successCount}/${results.length} gifts successfully`, 'warning');
            } else {
                showNotification(translations.allGiftsOpened, 'success');
            }
        } else {
            showNotification('Failed to open any gifts', 'error');
        }

        // Update gifts list display if empty
        if (giftsData.length === 0) {
            document.getElementById('giftsList').innerHTML = '<div style="text-align: center; color: rgba(255,255,255,0.5); padding: 20px;">No gifts available</div>';
        }
        
    } catch (error) {
        console.error('Error opening all gifts:', error);
        showNotification('Error opening gifts', 'error');
    } finally {
        isOpeningGifts = false;
    }
}

// Avatar functions - LEGACY FALLBACK WITH PROFILE ID ENCODING
async function getLatestAvatarVersion(profileId) {
    try {
        const encodedProfileId = encodeProfileId(profileId);
        const response = await fetch(`https://cdn.moviestarplanet2.com/avatars/${encodedProfileId}/games/j68d/version.txt`);
        if (response.ok) {
            const version = await response.text();
            return version.trim();
        }
    } catch (error) {
        console.error('Error getting avatar version:', error);
    }
    return 'latest';
}

async function generateLatestAvatarUrl(profileId) {
    try {
        const version = await getLatestAvatarVersion(profileId);
        return constructAvatarUrl(profileId, `${version}.png`);
    } catch (error) {
        console.error('Error generating avatar URL:', error);
        return constructAvatarUrl(profileId);
    }
}

async function getLatestAvatarUrlForGift(profileId) {
    return await getLatestAvatarByProfileId(profileId);
}

// Language functions
function loadLanguage() {
    const savedLanguage = localStorage.getItem(STORAGE_KEYS.LANGUAGE);
    if (savedLanguage) {
        currentLanguage = savedLanguage;
        applyLanguage(currentLanguage);
    }
}

function switchLanguage(language) {
    currentLanguage = language;
    localStorage.setItem(STORAGE_KEYS.LANGUAGE, language);
    applyLanguage(language);
    updateLanguageDialog();
    const languageNames = { en: 'English', tr: 'Türkçe', az: 'Azərbaycan Türkcəsi' };
    showNotification(`Language changed to ${languageNames[language]}`, 'success');
}

function applyLanguage(language) {
    const translations = window.TRANSLATIONS[language] || window.TRANSLATIONS.en;
    
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[key]) {
            element.textContent = translations[key];
        }
    });

    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[key]) {
            element.placeholder = translations[key];
        }
    });

    document.title = translations.title || 'MSP2 Tool - OBFX®';
}

function showLanguageDialog() {
    updateLanguageDialog();
    document.getElementById('languageDialog').style.display = 'flex';
}

function hideLanguageDialog() {
    document.getElementById('languageDialog').style.display = 'none';
}

function updateLanguageDialog() {
    const currentLanguageName = document.getElementById('currentLanguageName');
    const englishBtn = document.getElementById('englishBtn');
    const turkishBtn = document.getElementById('turkishBtn');
    const azerbaijaniBtn = document.getElementById('azerbaijaniBtn');
    
    const languageNames = {
        en: 'English',
        tr: 'Türkçe',
        az: 'Azərbaycan Türkcəsi'
    };
    
    currentLanguageName.textContent = languageNames[currentLanguage];
    
    englishBtn.classList.toggle('active', currentLanguage === 'en');
    turkishBtn.classList.toggle('active', currentLanguage === 'tr');
    azerbaijaniBtn.classList.toggle('active', currentLanguage === 'az');
}

// Zoom functions
function loadZoom() {
    const savedZoom = localStorage.getItem(STORAGE_KEYS.ZOOM_LEVEL);
    if (savedZoom) {
        currentZoom = parseFloat(savedZoom);
        applyZoom(currentZoom);
    }
}

function applyZoom(zoomLevel) {
    const content = document.querySelector('.content');
    content.style.transform = `scale(${zoomLevel})`;
    content.style.transformOrigin = 'center center';
    content.classList.add('zoomed');
    updateZoomDisplay();
}

function updateZoomDisplay() {
    const zoomLevelElement = document.getElementById('zoomLevel');
    if (zoomLevelElement) {
        zoomLevelElement.textContent = Math.round(currentZoom * 100) + '%';
    }
    
    document.querySelectorAll('.zoom-preset').forEach(btn => {
        const zoomValue = parseFloat(btn.dataset.zoom);
        btn.classList.toggle('active', Math.abs(zoomValue - currentZoom) < 0.01);
    });
}

function setZoom(zoomLevel) {
    currentZoom = Math.max(0.5, Math.min(2.0, zoomLevel));
    localStorage.setItem(STORAGE_KEYS.ZOOM_LEVEL, currentZoom);
    applyZoom(currentZoom);
}

function zoomIn() {
    setZoom(currentZoom + 0.1);
}

function zoomOut() {
    setZoom(currentZoom - 0.1);
}

function showZoomDialog() {
    updateZoomDisplay();
    document.getElementById('zoomDialog').style.display = 'flex';
}

function hideZoomDialog() {
    document.getElementById('zoomDialog').style.display = 'none';
}

function hideAllScreens() {
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('loadingScreen').style.display = 'none';
    document.getElementById('bootloaderScreen').style.display = 'none';
    document.getElementById('bannedScreen').style.display = 'none';
    document.getElementById('mainMenu').style.display = 'none';
    document.getElementById('changeMoodScreen').style.display = 'none';
    document.getElementById('changePasswordScreen').style.display = 'none';
    document.getElementById('autographScreen').style.display = 'none';
    document.getElementById('commentsScreen').style.display = 'none';
    document.getElementById('friendsSettingsScreen').style.display = 'none';
    document.getElementById('giftsScreen').style.display = 'none';
    document.getElementById('receiptScreen').style.display = 'none';
    document.getElementById('scammerTestScreen').style.display = 'none';
    document.getElementById('obfxProScreen').style.display = 'none';
}

function handleExit() {
    const currentZoomPreserve = currentZoom;

    if (autoSendInterval) {
        clearInterval(autoSendInterval);
        autoSendInterval = null;
    }

    if (tokenExpiryTimer) {
        clearTimeout(tokenExpiryTimer);
        tokenExpiryTimer = null;
    }
    
    if (tokenWarningTimer) {
        clearTimeout(tokenWarningTimer);
        tokenWarningTimer = null;
    }

    localStorage.removeItem(STORAGE_KEYS.PROFILE_DATA);
    localStorage.removeItem(STORAGE_KEYS.REGION);
    localStorage.removeItem(STORAGE_KEYS.USER_DATA);
    localStorage.removeItem(STORAGE_KEYS.GIFTS_DATA);
    localStorage.removeItem(STORAGE_KEYS.FRIENDS_DATA);
    localStorage.removeItem(STORAGE_KEYS.LOGIN_ID);
    localStorage.removeItem(STORAGE_KEYS.TOKEN_TIMESTAMP);
    
    // Reset Pro accounts on exit
    proAccounts = [];
    localStorage.removeItem(STORAGE_KEYS.PRO_ACCOUNTS);

    sessionStorage.clear();

    if ('caches' in window) {
        caches.keys().then(names => {
            names.forEach(name => {
                if (name.includes('moviestarplanet2') || name.includes('mspapis')) {
                    caches.delete(name);
                }
            });
        });
    }

    profileData = null;
    userData = null;
    giftsData = [];
    friendsData = { relationships: [], requestsIn: [], blocked: [] };
    friendsProfiles = {};
    currentRegion = 'us';
    currentGender = 'Boy';
    currentTargetProfileId = null;
    currentTargetUsername = null;
    isAutoGreeting = false;
    greetingStats = { count: 0, type: 'Autograph' };
    isProcessing = false;
    isOpeningGifts = false;
    currentMoodIndex = 0;
    loginId = null;
    currentWaydId = null;
    currentCommentsData = [];
    tokenTimestamp = null;
    currentFriendsTab = 'friends';
    allComments = [];
    currentCommentsPage = 0;
    currentUserPlan = 'Free';
    currentFriendsPage = 0;
    currentRequestsPage = 0;
    currentBlockedPage = 0;
    isVipFilterActive = false;
    lastChangedPassword = null;
    lastChangedUsername = null;
    currentProMethod = 'account';
    currentProTab = 'accountManagement';
    currentAccountInfoData = null;

    // Clear avatar cache
    avatarCache.clear();

    currentZoom = currentZoomPreserve;

    if (window.tempProfileData) {
        delete window.tempProfileData;
    }
    if (window.tempCredentials) {
        delete window.tempCredentials;
    }

    document.getElementById('websocketInput').value = '';
    document.getElementById('usernameInput').value = '';
    document.getElementById('passwordInput').value = '';
    document.getElementById('autographUsernameInput').value = '';
    document.getElementById('greetingTypeSelector').selectedIndex = 0;
    document.getElementById('scammerTestUsernameInput').value = '';
    document.getElementById('vipFilterBtn').classList.remove('active');
    document.getElementById('accountInfoUsernameInput').value = '';

    // Reset Pro panel inputs
    document.getElementById('proUsernameInput').value = '';
    document.getElementById('proPasswordInput').value = '';
    document.getElementById('proWebsocketInput').value = '';

    switchLoginMethod('websocket');
    switchProMethod('account');
    switchProTab('accountManagement');

    document.getElementById('autographLog').innerHTML = '';
    document.getElementById('progressContainer').style.display = 'none';
    document.getElementById('progressBar').style.width = '0%';
    document.getElementById('progressText').textContent = '0%';
    document.getElementById('progressStatus').textContent = '';
    document.getElementById('giftsCount').textContent = '0';
    document.getElementById('commentsCount').textContent = '(0)';
    document.getElementById('scammerTestResult').style.display = 'none';
    document.getElementById('accountInfoResult').style.display = 'none';

    document.getElementById('username').textContent = 'Loading...';
    document.getElementById('userPlan').textContent = 'Free';
    document.getElementById('userPlan').className = 'user-plan free';
    document.getElementById('starcoins').textContent = '0';
    document.getElementById('diamonds').textContent = '0';
    document.getElementById('userLevel').textContent = '1';
    document.getElementById('xpProgress').style.width = '0%';
    document.getElementById('xpText').textContent = '0 / 100';
    document.getElementById('userAvatar').src = '';

    // Reset friend slots
    clearFriendSlots();
    clearAccountDetails();
    clearHomeImage();

    document.getElementById('regionDialog').style.display = 'none';
    document.getElementById('languageDialog').style.display = 'none';
    document.getElementById('planDialog').style.display = 'none';
    document.getElementById('zoomDialog').style.display = 'none';
    document.getElementById('deleteAllDialog').style.display = 'none';
    document.getElementById('fastStartDialog').style.display = 'none';
    document.getElementById('passwordSuccessDialog').style.display = 'none';
    document.getElementById('accountFileInfoDialog').style.display = 'none';

    document.getElementById('exitBtn').style.display = 'none';
    document.getElementById('languageBtn').style.display = 'none';
    document.getElementById('planBtn').style.display = 'none';
    document.getElementById('zoomBtn').style.display = 'none';
    document.getElementById('autographBtn').style.display = 'none';
    document.getElementById('changePasswordBtn').style.display = 'none';
    document.getElementById('obfxProBtn').style.display = 'none';
    document.getElementById('obfxPlusBtn').style.display = 'none';

    updateProAccountsCount();

    hideAllScreens();
    document.getElementById('loginScreen').style.display = 'flex';

    showNotification('Successfully logged out. Account credentials and zoom setting preserved.', 'success');
}

function parseWebSocketData(input) {
    try {
        let cleanInput = input.trim();
        if (cleanInput.startsWith('42[')) {
            cleanInput = cleanInput.substring(2);
        }

        const parsed = JSON.parse(cleanInput);
        if (Array.isArray(parsed) && parsed.length > 1) {
            const data = parsed[1];
            if (data.profileId && data.accessToken) {
                return {
                    profileId: data.profileId,
                    accessToken: data.accessToken,
                    culture: data.culture // NEW: Include culture for region checking
                };
            }
        }
        return null;
    } catch (error) {
        return null;
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function showNotification(message, type = 'info') {
    const container = document.getElementById('notificationContainer');
    const notification = document.createElement('div');

    notification.className = `notification ${type}`;
    notification.textContent = message;

    container.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 400);
    }, 3000);
}

// Make functions globally accessible
window.openGift = openGift;
window.removeFriend = removeFriend;
window.acceptRequest = acceptRequest;
window.rejectRequest = rejectRequest;
window.unblockUser = unblockUser;
window.deleteComment = deleteComment;
