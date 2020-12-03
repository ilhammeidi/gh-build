(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{"67b33837ab127ea41b98":function(e,o,t){"use strict";t.r(o);var n,i=t("8af190b70a6bc55c6f1b"),r=t.n(i),l=t("0d7f0986bcd2f33d8a2a"),a=t("1037a6e0d5914309f74c"),c=t.n(a),s=t("435859b6b76fb67a754a"),u=t.n(s),d=t("4dd2a92e69dcbe1bab10"),f=t("05c8eb146240928faf44");function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,o,t,i){n||(n="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,l=arguments.length-3;if(o||0===l||(o={children:void 0}),1===l)o.children=i;else if(l>1){for(var a=new Array(l),c=0;c<l;c++)a[c]=arguments[c+3];o.children=a}if(o&&r)for(var s in r)void 0===o[s]&&(o[s]=r[s]);else o||(o=r||{});return{$$typeof:n,type:e,key:void 0===t?null:""+t,ref:null,props:o,_owner:null}}function b(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function v(e,o){for(var t=0;t<o.length;t++){var n=o[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e,o){return(y=Object.setPrototypeOf||function(e,o){return e.__proto__=o,e})(e,o)}function g(e){var o=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=w(e);if(o){var i=w(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return h(this,t)}}function h(e,o){return!o||"object"!==p(o)&&"function"!==typeof o?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):o}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var S=m(f.eb,{}),D=m(f.O,{}),j=m(f.c,{}),O=m(f.sb,{}),T=m(f.tb,{}),x=m(f.F,{}),P=m(f.G,{}),R=m(f.pb,{}),_=function(e){!function(e,o){if("function"!==typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),o&&y(e,o)}(r,e);var o,t,n,i=g(r);function r(){return b(this,r),i.apply(this,arguments)}return o=r,(t=[{key:"render",value:function(){var e=c.a.name+" - UI Elements",o=c.a.desc,t="containers/UiElements/demos/DialogModal/";return m("div",{},void 0,m(l.Helmet,{},void 0,m("title",{},void 0,e),m("meta",{name:"description",content:o}),m("meta",{property:"og:title",content:e}),m("meta",{property:"og:description",content:o}),m("meta",{property:"twitter:title",content:e}),m("meta",{property:"twitter:description",content:o})),m(d.ob,{title:"Modals",icon:"ios-browsers-outline",desc:"The modal component provides a solid foundation for creating dialogs, popovers, lightboxes, or whatever else."},void 0,m("div",{},void 0,S,m(d.Tb,{componentName:t+"ModalDemo.js"}))),m(d.ob,{title:"Image Popup",icon:"ios-images-outline",desc:"A flexible lightbox component for displaying images. It's also can handle zoom and panning of images. Mobile friendly, with pinch to zoom and swipe"},void 0,m("div",{},void 0,D,m(d.Tb,{componentName:t+"ImagePopup.js"}))),m(d.ob,{title:"Alerts",icon:"ios-warning-outline",desc:"Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation."},void 0,m("div",{},void 0,j,m(d.Tb,{componentName:t+"AlertDialog.js"}))),m(u.a,{container:!0,spacing:2},void 0,m(u.a,{item:!0,md:6},void 0,m(d.ob,{title:"Selection Dialog",icon:"ios-list-box-outline",desc:"Choosing an option immediately commits the option and closes the menu"},void 0,m("div",{},void 0,O,m(d.Tb,{componentName:t+"SelectDialog.js"})))),m(u.a,{item:!0,md:6},void 0,m(d.ob,{title:"Selection Radio Dialog",icon:"ios-list-box-outline",desc:"In this example, users can listen to multiple ringtones but only make a final selection upon touching \u201cOK.\u201d"},void 0,m("div",{},void 0,T,m(d.Tb,{componentName:t+"SelectRadioDialog.js"}))))),m(d.ob,{title:"Form dialogs",icon:"ios-create-outline",desc:"Form dialogs allow users to fill out form fields within a dialog."},void 0,m("div",{},void 0,x,m(d.Tb,{componentName:t+"FormDialog.js"}))),m(u.a,{container:!0,spacing:2},void 0,m(u.a,{item:!0,md:6,xs:12},void 0,m(d.ob,{title:"Full Screen (Responsive)",icon:"ios-easel-outline",desc:"You may make a Dialog responsively full screen the dialog using withMobileDialog. By default, withMobileDialog()(Dialog) responsively full screens at or below the sm screen size."},void 0,m("div",{},void 0,P,m(d.Tb,{componentName:t+"FullScreenDialog.js"})))),m(u.a,{item:!0,md:6,xs:12},void 0,m(d.ob,{title:"Scrolling dialog",icon:"ios-download-outline",desc:"When dialogs become too long for the user\u2019s viewport or device, they scroll."},void 0,m("div",{},void 0,R,m(d.Tb,{componentName:t+"ScrollDialog.js"}))))))}}])&&v(o.prototype,t),n&&v(o,n),r}(r.a.Component);o.default=_}}]);