(()=>{"use strict";var e={153:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(81),a=n.n(r),o=n(645),i=n.n(o),c=n(667),s=n.n(c),l=new URL(n(279),n.b),d=new URL(n(358),n.b),u=i()(a()),p=s()(l),f=s()(d);u.push([e.id,'@font-face{font-family:"Carrara Light";src:url('+p+') format("woff")}body{font-family:"Carrara Light",serif;margin:0;color:#36312b}#app,#app-404{display:flex;justify-content:center;flex-direction:column;align-items:center;padding:1rem;background-image:url('+f+");background-color:#c09372;background-repeat:repeat;background-size:25rem;height:100vh}.location{width:75%;margin:.25rem;padding:1rem;background-color:#fcfcfc;display:flex;justify-content:center;box-shadow:rgba(0,0,0,.15) 0 .1rem .3rem}",""]);const m=u},448:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([e.id,"#app-404 .location{flex-direction:column;align-items:center}#app-404 .location a{text-decoration:none;color:#a02527;transition:color .3s linear,font-size .3s linear}#app-404 .location a:hover{color:#36312b;font-size:1.2rem}",""]);const c=i},741:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([e.id,"",""]);const c=i},623:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([e.id,".title img{padding:1rem;width:auto}",""]);const c=i},486:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([e.id,"",""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],d=o[l]||0,u="".concat(l," ").concat(d);o[l]=d+1;var p=n(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=a(f,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function a(e,t){var n=t.domAPI(t);n.update(e);return function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=n(o[i]);t[c].references--}for(var s=r(e,a),l=0;l<o.length;l++){var d=n(o[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},279:(e,t,n)=>{e.exports=n.p+"3e8cd5802301a9be3a09.woff"},358:(e,t,n)=>{e.exports=n.p+"7239993048fa10d5b35a.jpeg"}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.p="/",n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),a=n.n(r),o=n(569),i=n.n(o),c=n(565),s=n.n(c),l=n(216),d=n.n(l),u=n(589),p=n.n(u),f=n(153),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=d();t()(f.Z,m);f.Z&&f.Z.locals&&f.Z.locals;var h=n(623),v={};v.styleTagTransform=p(),v.setAttributes=s(),v.insert=i().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=d();t()(h.Z,v);h.Z&&h.Z.locals&&h.Z.locals;var g=n(741),b={};b.styleTagTransform=p(),b.setAttributes=s(),b.insert=i().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=d();t()(g.Z,b);g.Z&&g.Z.locals&&g.Z.locals;var y=n(486),w={};w.styleTagTransform=p(),w.setAttributes=s(),w.insert=i().bind(null,"head"),w.domAPI=a(),w.insertStyleElement=d();t()(y.Z,w);y.Z&&y.Z.locals&&y.Z.locals;var x=n(448),E={};E.styleTagTransform=p(),E.setAttributes=s(),E.insert=i().bind(null,"head"),E.domAPI=a(),E.insertStyleElement=d();t()(x.Z,E);x.Z&&x.Z.locals&&x.Z.locals;!function(){const e="home",t="marriage",n="wedding";let r={},a={},o=document.getElementById("app");function i(){!function(e){let t=document.getElementsByClassName("title")[0];if(!t){t=document.createElement("div"),t.setAttribute("class","title"),t.setAttribute("class",`${t.getAttribute("class")} location`);const n=document.createElement("img");n.src="./bedzie-slub.svg",n.alt="Będzie ślub!",t.appendChild(n),e.appendChild(t)}}(o),function(e){let t=document.getElementsByClassName("church-location")[0];if(!t){const n="&#128146; X x";t=document.createElement("div"),t.setAttribute("class","church-location"),t.setAttribute("class",`${t.getAttribute("class")} location`);const r=document.createElement("div");r.innerHTML=n,t.appendChild(r),e.appendChild(t)}}(o),function(e){let t=document.getElementsByClassName("wedding-location")[0];const n=window.localStorage.getItem("w");if(n&&!t){const n="&#127881;";t=document.createElement("div"),t.setAttribute("class","wedding-location"),t.setAttribute("class",`${t.getAttribute("class")} location`);const r=document.createElement("div");r.innerHTML=n,t.appendChild(r),e.appendChild(t)}!n&&t&&t.remove()}(o)}function c(e,t){r[e]=a[t]}function s(e,t){a[e]=t}function l(e){let t=window.location.hash.slice(1)||"/";(0,r[t])()}s(e,(function(){i()})),s(t,(function(){window.localStorage.getItem("w")&&window.localStorage.clear(),i()})),s(n,(function(){window.localStorage.setItem("w","true"),i()})),c("/",e),c("/w",n),c("/m",t),window.addEventListener("load",l),window.addEventListener("hashchange",l)}(),function(){const e=document.getElementById("app-404");if(!e)return;const t=document.createElement("div");t.setAttribute("class","location");const n=document.createElement("h1");n.innerText="Tutaj nic nie ma",t.appendChild(n);const r=document.createElement("p");r.innerHTML='Przejdź na stronę główną klikając <a href="https://aniamateusz.github.io/" alt="https://aniamateusz.github.io/">tutaj</a>',t.appendChild(r),e.appendChild(t)}()})()})();