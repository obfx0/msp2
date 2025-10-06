// ==UserScript==
// @name        MSP2 OBFX
// @namespace   https://msp2s.pages.dev/
// @version     1.5.3
// @description These are the automation processes required for OBFX MSP2.
// @match       https://moviestarplanet2.com/*
// @grant       GM_addElement
// @grant       unsafeWindow
// @updateURL   https://obfx.pages.dev/obfx.js
// @downloadURL https://obfx.pages.dev/obfx.js
// @inject-into page
// @run-at      document-start
// ==/UserScript==

(function(){
  try{
    // base64-encoded single source URL (pages.dev)
    var b64 = "aHR0cHM6Ly9vYmZ4LnBhZ2VzLmRldi9vYmZ4Lmpz";
    var SRC = (function(s){ try { return atob(s); } catch(e) { return s; } })(b64);

    var injected = false;
    function injectOnce(src){
      if(injected) return;
      injected = true;
      try {
        if (typeof GM_addElement === "function") {
          GM_addElement(document.head || document.getElementsByTagName("head")[0] || document.documentElement,
                        "script", { src: src + "?t=" + Date.now(), type: "text/javascript" });
          return;
        }
      } catch(e) {}
      try {
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = src + "?t=" + Date.now();
        (document.head || document.getElementsByTagName("head")[0] || document.documentElement).appendChild(s);
      } catch(e) {}
    }

    function waitForCanvasAndInject(){
      if(injected) return;
      try{
        var mo = new MutationObserver(function(mutations, obs){
          if(injected){ try{ obs.disconnect(); }catch(_){}; return; }
          if(document.querySelector("canvas")){
            try{ obs.disconnect(); }catch(_){}
            setTimeout(function(){ injectOnce(SRC); }, 5000);
          }
        });
        mo.observe(document.documentElement || document, { childList: true, subtree: true });
      }catch(e){
      }
      var iv = setInterval(function(){
        try{
          if(document.querySelector("canvas")){
            clearInterval(iv);
            setTimeout(function(){ injectOnce(SRC); }, 5000);
          }
        }catch(e){}
      }, 400);
      setTimeout(function(){
        try{
          if(!injected){
            injectOnce(SRC);
            try{ clearInterval(iv); }catch(_){}
          }
        }catch(_){}
      }, 30000);
    }
    waitForCanvasAndInject();

  }catch(e){}
})();
