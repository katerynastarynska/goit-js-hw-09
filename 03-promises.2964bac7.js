function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("eWCmQ");const u=document.querySelector(".form"),l=document.querySelector('input[name="delay"]'),a=document.querySelector('input[name="step"]'),d=document.querySelector('input[name="amount"]');function s(t,n){const o=Math.random()>.3;return new Promise(((e,t)=>{setInterval((()=>{o?e():t()}),n)})).then((()=>{e(i).Notify.success(`Fulfilled promise ${t} in ${n}ms`)})).catch((()=>{e(i).Notify.failure(`Rejected promise ${t} in ${n}ms`)}))}u.addEventListener("submit",(function(e){e.preventDefault();let t=parseInt(l.value);for(let e=1;e<=d.value;e+=1)1!==e&&(t+=parseInt(a.value)),s(e,t)})),e(i).Notify.init({width:"280px",position:"right-top",distance:"10px",opacity:1});
//# sourceMappingURL=03-promises.2964bac7.js.map
