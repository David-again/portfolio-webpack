(()=>{"use strict";var e,t,n={216:(e,t,n)=>{function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n(486),n(90);const o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.menuIcon=document.querySelector(".navbar__menu-icon"),this.menuContent=document.querySelector(".navbar__menu-content"),this.menuItems=document.querySelectorAll(".nav-link"),this.events()}var t,n;return t=e,(n=[{key:"events",value:function(){var e=this;this.menuIcon.addEventListener("click",(function(){return e.toggleTheMenu()})),this.menuItems.forEach((function(t){return t.addEventListener("click",(function(){return e.closeTheMenu()}))}))}},{key:"toggleTheMenu",value:function(){this.menuContent.classList.toggle("navbar__menu-content--is-visible"),this.menuIcon.classList.toggle("navbar__menu-icon--close-x")}},{key:"closeTheMenu",value:function(){this.menuContent.classList.remove("navbar__menu-content--is-visible"),this.menuIcon.classList.remove("navbar__menu-icon--close-x")}}])&&r(t.prototype,n),e}();var a=n(294),i=n(935);n(213).all;const c=function(){return a.createElement("div",null,a.createElement("h2",null,"Contact me"),a.createElement("p",null," I would love to hear from you.  Please email me, or connect on Github/LinkedIn.  Also, feel free to leave me a note here with the feedback form. "))};var l;i.render(a.createElement(c,null),document.querySelector("#main-doc-react")),new o,document.querySelectorAll(".under-construction").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),void 0===l?n.e(342).then(n.bind(n,342)).then((function(e){l=new e.default,setTimeout((function(){return l.openTheModal()}),20)})).catch((function(){return console.log("There was a problem.")})):l.openTheModal()}))}))}},r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={id:e,loaded:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.loaded=!0,t.exports}o.m=n,o.x=e=>{},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,n)=>(o.f[n](e,t),t)),[])),o.u=e=>e+".8bc97d1a7bbe58a0d0c0.js",o.miniCssF=e=>"styles."+{342:"8bc97d1a7bbe58a0d0c0",773:"2e6d20050bffd3e26b3a"}[e]+".css",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="portfolio-webpack:",o.l=(n,r,a)=>{if(e[n])e[n].push(r);else{var i,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var s=l[u];if(s.getAttribute("src")==n||s.getAttribute("data-webpack")==t+a){i=s;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.setAttribute("data-webpack",t+a),i.src=n),e[n]=[r];var d=(t,r)=>{i.onerror=i.onload=null,clearTimeout(f);var o=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(r))),t)return t(r)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),c&&document.head.appendChild(i)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e={179:0},t=[[216,773]];o.f.j=(t,n)=>{var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var a=new Promise(((n,o)=>{r=e[t]=[n,o]}));n.push(r[2]=a);var i=o.p+o.u(t),c=new Error;o.l(i,(n=>{if(o.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,r[1](c)}}),"chunk-"+t)}};var n=e=>{},r=(r,a)=>{for(var i,c,[l,u,s,d]=a,f=0,h=[];f<l.length;f++)c=l[f],o.o(e,c)&&e[c]&&h.push(e[c][0]),e[c]=0;for(i in u)o.o(u,i)&&(o.m[i]=u[i]);for(s&&s(o),r&&r(a);h.length;)h.shift()();return d&&t.push.apply(t,d),n()},a=self.webpackChunkportfolio_webpack=self.webpackChunkportfolio_webpack||[];function i(){for(var n,r=0;r<t.length;r++){for(var a=t[r],i=!0,c=1;c<a.length;c++){var l=a[c];0!==e[l]&&(i=!1)}i&&(t.splice(r--,1),n=o(o.s=a[0]))}return 0===t.length&&(o.x(),o.x=e=>{}),n}a.forEach(r.bind(null,0)),a.push=r.bind(null,a.push.bind(a));var c=o.x;o.x=()=>(o.x=c||(e=>{}),(n=i)())})(),o.x()})();