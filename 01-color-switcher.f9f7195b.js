!function(){var o=document.querySelector("button[data-start]");console.log(o);var t=document.querySelector("button[data-stop]");console.log(t);var e=document.querySelector("body");function n(){e.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16)),console.log(e)}console.log(e),o.addEventListener("click",(function(){timerId=setInterval(n,1e3)})),t.addEventListener("click",(function(){clearInterval(timerId)}))}();
//# sourceMappingURL=01-color-switcher.f9f7195b.js.map