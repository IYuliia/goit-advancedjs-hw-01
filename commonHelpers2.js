import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{P as r,l as a}from"./assets/vendor-78be7656.js";const i=document.querySelector("iframe"),t=new r(i);t.on("timeupdate",a(function(e){const o=e.seconds;localStorage.setItem("videoplayer-current-time",o)},1e3));t.on("loaded",function(){const e=JSON.parse(localStorage.getItem("videoplayer-current-time"));isNaN(e)||t.setCurrentTime(e)});
//# sourceMappingURL=commonHelpers2.js.map
