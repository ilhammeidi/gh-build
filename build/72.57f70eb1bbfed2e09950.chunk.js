(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{c1943cd5ee3999736122:function(t,e,r){"use strict";r.r(e);var n,o=r("8af190b70a6bc55c6f1b"),i=r("0d7f0986bcd2f33d8a2a"),a=r("1037a6e0d5914309f74c"),c=r.n(a),l=(r("8a2d1b95e05b6a321e74"),r("6938d226fd372a75cbf9")),u=r("4dd2a92e69dcbe1bab10"),f=r("387190e83edf0e5eb8f6");function d(t,e,r,o){n||(n="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=t&&t.defaultProps,a=arguments.length-3;if(e||0===a||(e={children:void 0}),1===a)e.children=o;else if(a>1){for(var c=new Array(a),l=0;l<a;l++)c[l]=arguments[l+3];e.children=c}if(e&&i)for(var u in i)void 0===e[u]&&(e[u]=i[u]);else e||(e=i||{});return{$$typeof:n,type:t,key:void 0===r?null:""+r,ref:null,props:e,_owner:null}}function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return p(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}e.default=Object(l.withStyles)(f.a)((function(t){var e=s(Object(o.useState)(null),2),r=e[0],n=e[1],a=c.a.name+" - Login Version 3",l=c.a.desc,f=t.classes;return d("div",{className:f.rootFull},void 0,d(i.Helmet,{},void 0,d("title",{},void 0,a),d("meta",{name:"description",content:l}),d("meta",{property:"og:title",content:a}),d("meta",{property:"og:description",content:l}),d("meta",{property:"twitter:title",content:a}),d("meta",{property:"twitter:description",content:l})),d("div",{className:f.container},void 0,d("div",{className:f.fullFormWrap},void 0,d(u.fb,{onSubmit:function(t){return function(t){setTimeout((function(){n(t),console.log("You submitted:\n\n".concat(r)),window.location.href="/app"}),500)}(t)}}))))}))}}]);