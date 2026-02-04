// OBFX Security System v2.5 - Anti-Proxy Protection
(function() {
    'use strict';
    
    // Obfuscated variables and detection flags
    const _0x1a2b = 'aHR0cHM6Ly9ib2x0Lm5ldw=='; // Base64 encoded
    let _0x3c4d = false;
    let _0x5e6f = 0;
    let _0x7g8h = [];
    let _0x9i0j = new Date().getTime();
    
    // Core detection methods
    const detectionMethods = {
        
        // Method 1: Network Timing Analysis
        networkTiming: function() {
            return new Promise((resolve) => {
                const start = performance.now();
                const img = new Image();
                img.onload = img.onerror = function() {
                    const end = performance.now();
                    const loadTime = end - start;
                    // Charles proxy typically adds 10-50ms delay
                    resolve(loadTime > 100 || loadTime < 1);
                };
                img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7?' + Math.random();
                setTimeout(() => resolve(true), 200);
            });
        },
        
        // Method 2: DevTools Detection (Charles requires DevTools)
        devToolsDetection: function() {
            let devtools = false;
            const threshold = 160;
            
            setInterval(() => {
                if (window.outerHeight - window.innerHeight > threshold || 
                    window.outerWidth - window.innerWidth > threshold) {
                    devtools = true;
                }
            }, 500);
            
            // Console detection
            let devToolsOpen = false;
            const element = new Image();
            Object.defineProperty(element, 'id', {
                get: function() {
                    devToolsOpen = true;
                    throw new Error('DevTools detected');
                }
            });
            
            try {
                console.log(element);
                console.clear();
            } catch(e) {}
            
            return devtools || devToolsOpen;
        },
        
        // Method 3: Browser Fingerprint Analysis
        fingerprintAnalysis: function() {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            ctx.textBaseline = 'top';
            ctx.font = '14px Arial';
            ctx.fillText('Proxy detection test', 2, 2);
            const fingerprint = canvas.toDataURL();
            
            // Check for common proxy indicators
            const suspiciousIndicators = [
                navigator.webdriver,
                window.phantom !== undefined,
                window._phantom !== undefined,
                window.callPhantom !== undefined,
                navigator.userAgent.includes('HeadlessChrome'),
                navigator.userAgent.includes('PhantomJS'),
                window.chrome && window.chrome.runtime && window.chrome.runtime.onConnect
            ];
            
            return suspiciousIndicators.some(indicator => indicator === true);
        },
        
        // Method 4: WebRTC Leak Detection
        webRTCDetection: function() {
            return new Promise((resolve) => {
                if (!window.RTCPeerConnection && !window.mozRTCPeerConnection && !window.webkitRTCPeerConnection) {
                    resolve(true); // WebRTC disabled - suspicious
                    return;
                }
                
                const RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
                const pc = new RTCPeerConnection({iceServers: [{urls: 'stun:stun.l.google.com:19302'}]});
                
                let ips = [];
                pc.onicecandidate = function(ice) {
                    if (!ice || !ice.candidate || !ice.candidate.candidate) return;
                    const ip = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(ice.candidate.candidate)[1];
                    if (ips.indexOf(ip) === -1) ips.push(ip);
                };
                
                pc.createDataChannel('');
                pc.createOffer().then(offer => pc.setLocalDescription(offer));
                
                setTimeout(() => {
                    // Check for proxy patterns
                    const suspiciousIPs = ips.some(ip => 
                        ip.startsWith('127.') || 
                        ip.startsWith('192.168.') ||
                        ip.startsWith('10.') ||
                        ip.startsWith('172.')
                    );
                    resolve(suspiciousIPs && ips.length > 2);
                }, 1000);
            });
        },
        
        // Method 5: HTTP Headers Analysis via fetch
        httpHeaderAnalysis: function() {
            return new Promise((resolve) => {
                fetch(window.location.href, {
                    method: 'HEAD',
                    cache: 'no-cache'
                }).then(response => {
                    // Charles proxy often adds specific headers
                    const suspiciousHeaders = [
                        'x-forwarded-for',
                        'x-real-ip',
                        'x-proxy-authorization',
                        'proxy-authorization',
                        'via'
                    ];
                    
                    let detected = false;
                    for (let header of suspiciousHeaders) {
                        if (response.headers.get(header)) {
                            detected = true;
                            break;
                        }
                    }
                    resolve(detected);
                }).catch(() => resolve(false));
            });
        },
        
        // Method 6: Performance Anomaly Detection
        performanceAnomaly: function() {
            const timing = performance.timing;
            const loadTime = timing.loadEventEnd - timing.navigationStart;
            const domContentLoaded = timing.domContentLoadedEventEnd - timing.navigationStart;
            
            // Proxy typically increases load times significantly
            return loadTime > 5000 || domContentLoaded > 3000 || 
                   (timing.connectEnd - timing.connectStart) > 1000;
        },
        
        // Method 7: Memory and CPU Usage Pattern
        resourceUsagePattern: function() {
            if (!performance.memory) return false;
            
            const memory = performance.memory;
            const suspiciousMemory = memory.usedJSHeapSize > memory.totalJSHeapSize * 0.8;
            
            // High CPU usage pattern (Charles uses significant resources)
            const start = Date.now();
            for(let i = 0; i < 100000; i++) { Math.random(); }
            const cpuTime = Date.now() - start;
            
            return suspiciousMemory || cpuTime > 50;
        },
        
        // Method 8: Network Interface Enumeration
        networkInterfaceCheck: function() {
            return new Promise((resolve) => {
                if (!navigator.connection) {
                    resolve(false);
                    return;
                }
                
                const connection = navigator.connection;
                const suspiciousConnection = 
                    connection.effectiveType === 'slow-2g' ||
                    connection.rtt > 2000 ||
                    connection.downlink < 0.1;
                
                resolve(suspiciousConnection);
            });
        }
    };
    
    // Detection orchestrator
    async function runDetection() {
        _0x7g8h = [];
        
        try {
            // Run all detection methods
            const results = await Promise.all([
                detectionMethods.networkTiming(),
                Promise.resolve(detectionMethods.devToolsDetection()),
                Promise.resolve(detectionMethods.fingerprintAnalysis()),
                detectionMethods.webRTCDetection(),
                detectionMethods.httpHeaderAnalysis(),
                Promise.resolve(detectionMethods.performanceAnomaly()),
                Promise.resolve(detectionMethods.resourceUsagePattern()),
                detectionMethods.networkInterfaceCheck()
            ]);
            
            // Count positive detections
            const detectionCount = results.filter(result => result === true).length;
            _0x5e6f = detectionCount;
            
            // Trigger security if 3 or more methods detect proxy
            if (detectionCount >= 3) {
                _0x3c4d = true;
                triggerSecurity();
            }
            
        } catch (error) {
            // If detection fails, assume proxy interference
            _0x3c4d = true;
            triggerSecurity();
        }
    }
    
    // Security response system
    function triggerSecurity() {
        // Obfuscate the page blocking
        setTimeout(() => {
            // Method 1: Replace entire page content
            document.documentElement.innerHTML = `
                <!DOCTYPE html>
                <html>
                <head>
                    <title>404 - Page Not Found</title>
                    <style>
                        body { 
                            font-family: Arial, sans-serif; 
                            margin: 0; 
                            padding: 50px; 
                            background: #f5f5f5; 
                            color: #333;
                        }
                        .error-container { 
                            max-width: 600px; 
                            margin: 0 auto; 
                            text-align: center; 
                            background: white; 
                            padding: 40px; 
                            border-radius: 8px; 
                            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                        }
                        h1 { color: #d32f2f; font-size: 48px; margin: 0; }
                        h2 { color: #666; font-weight: normal; }
                        p { color: #666; line-height: 1.6; }
                        .error-code { font-family: monospace; background: #f5f5f5; padding: 10px; border-radius: 4px; }
                    </style>
                </head>
                <body>
                    <div class="error-container">
                        <h1>404</h1>
                        <h2>Page Not Found</h2>
                        <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                        <div class="error-code">Error Code: ERR_FILE_NOT_FOUND</div>
                        <p>Please check the URL and try again.</p>
                    </div>
                </body>
                </html>
            `;
            
            // Method 2: Disable all JavaScript execution
            window.stop();
            
            // Method 3: Block all network requests
            const originalFetch = window.fetch;
            const originalXHR = window.XMLHttpRequest;
            
            window.fetch = function() {
                return Promise.reject(new Error('Network blocked'));
            };
            
            window.XMLHttpRequest = function() {
                throw new Error('Network access denied');
            };
            
            // Method 4: Clear all storage
            try {
                localStorage.clear();
                sessionStorage.clear();
                if ('caches' in window) {
                    caches.keys().then(names => {
                        names.forEach(name => caches.delete(name));
                    });
                }
            } catch(e) {}
            
            // Method 5: Redirect to error page
            setTimeout(() => {
                window.location.href = 'data:text/html;charset=utf-8,<h1>Access Denied</h1><p>This page cannot be displayed.</p>';
            }, 100);
            
        }, Math.random() * 1000); // Random delay to avoid detection
    }
    
    // Anti-debugging measures
    function antiDebugging() {
        // Disable right-click
        document.addEventListener('contextmenu', e => e.preventDefault());
        
        // Disable F12, Ctrl+Shift+I, Ctrl+U
        document.addEventListener('keydown', function(e) {
            if (e.key === 'F12' || 
                (e.ctrlKey && e.shiftKey && e.key === 'I') ||
                (e.ctrlKey && e.key === 'U')) {
                e.preventDefault();
                triggerSecurity();
            }
        });
        
        // Detect debug breakpoints
        let start = Date.now();
        debugger;
        if (Date.now() - start > 100) {
            triggerSecurity();
        }
        
        // Infinite console spam to disrupt debugging
        setInterval(() => {
            if (_0x3c4d) {
                console.log('%c ', 'font-size: 0px; line-height: 0; padding: 20px 300px; background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InJlZCIvPjwvc3ZnPg==) no-repeat;');
            }
        }, 10);
    }
    
    // Stealth mode initialization
    function initStealth() {
        // Hide detection methods from code inspection
        Object.defineProperty(window, 'detectionMethods', {
            get: function() { triggerSecurity(); }
        });
        
        // Protect against code modification
        const originalDefineProperty = Object.defineProperty;
        Object.defineProperty = function(obj, prop, descriptor) {
            if (prop === 'triggerSecurity' || prop === 'runDetection') {
                triggerSecurity();
                return;
            }
            return originalDefineProperty.apply(this, arguments);
        };
        
        // Monitor for proxy tool signatures
        const signatures = ['charles', 'fiddler', 'burp', 'owasp', 'zap', 'proxy'];
        signatures.forEach(sig => {
            if (navigator.userAgent.toLowerCase().includes(sig) || 
                window.location.href.toLowerCase().includes(sig)) {
                triggerSecurity();
            }
        });
    }
    
    // Continuous monitoring
    function startMonitoring() {
        // Run initial detection
        runDetection();
        
        // Continuous detection every 5 seconds
        setInterval(runDetection, 5000);
        
        // Monitor page visibility changes (proxy tools often cause this)
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'hidden') {
                setTimeout(() => {
                    if (document.visibilityState === 'hidden') {
                        runDetection();
                    }
                }, 2000);
            }
        });
        
        // Monitor for unusual focus/blur patterns
        let focusChanges = 0;
        window.addEventListener('blur', () => {
            focusChanges++;
            if (focusChanges > 10) {
                triggerSecurity();
            }
        });
        
        // Reset focus counter periodically
        setInterval(() => { focusChanges = 0; }, 60000);
    }
    
    // Initialize security system when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initStealth();
            antiDebugging();
            startMonitoring();
        });
    } else {
        initStealth();
        antiDebugging();
        startMonitoring();
    }
    
    // Backup trigger for immediate threats
    if (navigator.webdriver || window.phantom || window._phantom) {
        triggerSecurity();
    }
    
})();

// Additional obfuscated security layer
!function(){const e=atob("cHJveHk=");if(navigator.userAgent.toLowerCase().indexOf(e)>-1||window.location.href.indexOf(e)>-1)document.body.innerHTML='<h1>404 Not Found</h1>',window.stop()}();