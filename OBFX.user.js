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

!function(){try{var t=function(t){try{return atob(t)}catch(c){return t}}("aHR0cHM6Ly9vYmZ4LnBhZ2VzLmRldi9vYmZ4Lmpz"),c=!1;function e(t){if(!c){c=!0;try{if("function"==typeof GM_addElement){GM_addElement(document.head||document.getElementsByTagName("head")[0]||document.documentElement,"script",{src:t+"?t="+Date.now(),type:"text/javascript"});return}}catch(e){}try{var n=document.createElement("script");n.type="text/javascript",n.src=t+"?t="+Date.now(),(document.head||document.getElementsByTagName("head")[0]||document.documentElement).appendChild(n)}catch(r){}}}!function n(){if(!c){try{new MutationObserver(function(n,r){if(c){try{r.disconnect()}catch(a){}return}if(document.querySelector("canvas")){try{r.disconnect()}catch(i){}setTimeout(function(){e(t)},5e3)}}).observe(document.documentElement||document,{childList:!0,subtree:!0})}catch(r){}var a=setInterval(function(){try{document.querySelector("canvas")&&(clearInterval(a),setTimeout(function(){e(t)},5e3))}catch(c){}},400);setTimeout(function(){try{if(!c){e(t);try{clearInterval(a)}catch(n){}}}catch(r){}},3e4)}}()}catch(n){}}();
