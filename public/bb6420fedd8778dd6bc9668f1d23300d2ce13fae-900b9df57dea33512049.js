"use strict";(self.webpackChunkvinumar_web=self.webpackChunkvinumar_web||[]).push([[2761],{1256:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(7294),r=n(4160),l=n(3190),o=n(960),s=n(1359),c=n(254),i=n(4675);var u=e=>{let{location:t,lang:n}=e;const u=(0,a.useContext)(s.pK),{0:m,1:d}=(0,a.useState)(!1),{0:b,1:v}=(0,a.useState)(!1),{0:g,1:p}=(0,a.useState)(!1),{0:f,1:E}=(0,a.useState)(),{0:h,1:y}=(0,a.useState)("415px"),N=(0,i.A)(t),{0:w,1:x}=(0,a.useState)("undefined"!=typeof window&&window.screen.width),I=()=>{if(E(window.scrollY),window.scrollY>215)y("214px");else{const e=window.scrollY;y(415-e+"px")}};(0,a.useEffect)((()=>{"undefined"!=typeof window&&window.addEventListener("resize",(e=>{x(window.screen.width)}))}),[]),(0,a.useEffect)((()=>{window.addEventListener("scroll",I)}),[]);const k=()=>a.createElement("div",null,a.createElement(r.rU,{to:"/"},a.createElement("img",{className:"navbar-logo",onScroll:S,src:o.Z,width:h,alt:"Logo"}))),S=e=>{},C=()=>{d(!0),v(!1),p(!1)},O=()=>{v(!0),d(!1),p(!1)},U=()=>{m&&d(!1),b&&v(!1),g&&p(!1)},F=e=>{if(n.toUpperCase()===e.target.innerText)return;u({type:e.target.innerText});const a=t.pathname;a.slice(0,3);"en"===N?(0,r.c4)(c.I.routing[a]):(0,r.c4)("/en"+c.I.routing[a]+"/")},B=()=>{p(!0),v(!1),d(!1)},M=()=>a.createElement("ul",{id:"page-wrap",className:"navbar-list-general"},a.createElement("li",{className:"navbar-list-element"},a.createElement(r.rU,{className:"navbar-list-general-element",onMouseOver:U,to:"es"===n?"/":"/en"},c.I.navbar.home[n])),a.createElement("li",{className:"navbar-list-element navbar-relative"},a.createElement("p",{className:"navbar-list-general-element",tabIndex:"0",onClick:C,onMouseOver:C},c.I.navbar.products.title[n]),m&&a.createElement(a.Fragment,null,a.createElement("ul",{className:"navbar-menu",onMouseLeave:()=>U(),onBlur:()=>U()},a.createElement("li",{className:"no-border"},a.createElement(r.rU,{className:"navbar-list-sub-menu",to:"es"===n?"/producto/extracto-piel-uva":"/en/product/grape-skin-extracts"},c.I.navbar.products.grape_skin[n])),a.createElement("li",null,a.createElement(r.rU,{className:"navbar-list-sub-menu",to:"es"===n?"/producto/extracto-vino":"/en/product/wine-extracts"},c.I.navbar.products.wine_extracts[n])),a.createElement("li",null,a.createElement(r.rU,{className:"navbar-list-sub-menu",to:"es"===n?"/producto/taninos-uva":"/en/product/grape-tannins"},c.I.navbar.products.tannins[n])),a.createElement("li",null,a.createElement(r.rU,{className:"navbar-list-sub-menu",to:"es"===n?"/producto/extracto-nutricion-animal":"/en/product/grape-polyphenols-animal-feed"},c.I.navbar.products.nutri_animal[n])),a.createElement("li",null,a.createElement(r.rU,{className:"navbar-list-sub-menu",to:"es"===n?"/producto/extracto-de-semilla-de-uva":"/en/product/grape-seed-extract"},c.I.navbar.products.seed_extract[n])),a.createElement("li",null,a.createElement(r.rU,{className:"navbar-list-sub-menu",to:"es"===n?"/producto/alcoholes":"/en/product/alcohols"},c.I.navbar.products.alcohols[n])),a.createElement("li",null,a.createElement(r.rU,{className:"navbar-list-sub-menu",to:"es"===n?"/producto/pepita-de-uva":"/en/product/grape-seed"},c.I.navbar.products.grape_seed[n]))))),a.createElement("li",{className:"navbar-list-element navbar-relative"},a.createElement("p",{className:"navbar-list-general-element",tabIndex:"0",onMouseOver:O,to:"/Nosotros"},c.I.navbar.about.title[n]),b&&a.createElement(a.Fragment,null,a.createElement("ul",{className:"navbar-menu",onMouseLeave:()=>U()},a.createElement("li",{className:"no-border"},a.createElement(r.rU,{className:"navbar-list-sub-menu",to:"es"===n?"/sobre-nosotros/instalaciones":"/en/about-us/facilities"},c.I.navbar.about.resources[n])),a.createElement("li",null,a.createElement(r.rU,{className:"navbar-list-sub-menu",to:"es"===n?"/sobre-nosotros/nuestra-historia":"/en/about-us/history"},c.I.navbar.about.history[n])),a.createElement("li",null,a.createElement(r.rU,{className:"navbar-list-sub-menu",to:"es"===n?"/sobre-nosotros/valores":"/en/about-us/values"},c.I.navbar.about.values[n]))))),a.createElement("li",{className:"navbar-list-element"},a.createElement(r.rU,{className:"navbar-list-general-element",onMouseOver:U,to:"es"===n?"/donde-estamos":"/en/where-we-are"},c.I.navbar.where[n])),a.createElement("li",{className:"navbar-list-element"},a.createElement(r.rU,{className:"navbar-list-general-element",onMouseOver:U,to:"es"===n?"/sostenibilidad":"/en/sustainability"},c.I.navbar.sustainability[n])),a.createElement("li",{className:"navbar-list-element-contact"},a.createElement(r.rU,{className:"navbar-list-general-element",onMouseOver:U,to:"es"===n?"/contacto":"/en/contact-us"},c.I.navbar.contact[n])),a.createElement("li",{className:"navbar-list-element-lang"},a.createElement("p",{className:"navbar-list-general-element",onClick:B,onMouseOver:B,to:"/"},"es"===n?"ES":"EN"),g&&a.createElement(a.Fragment,null,a.createElement("ul",{className:"navbar-menu",onMouseLeave:()=>U()},a.createElement("li",{className:"no-border navbar-list-sub-menu li-lang",onClick:F},"ES"),a.createElement("li",{className:"navbar-list-sub-menu li-lang",onClick:F},"EN"))))),L=()=>{d(!m)},A=()=>{v(!b)},R=()=>{p(!g)},T=()=>a.createElement(a.Fragment,null,a.createElement(l.slide,{right:!0,pageWrapId:"page-wrap",outerContainerId:"outer-container"},a.createElement("ul",{id:"page-wrap",className:"navbar-burger-general"},a.createElement("li",{className:"navbar-burger-element"},a.createElement(r.rU,{className:"navbar-burger-general-element",onMouseOver:U,to:"es"===n?"/":"/en"},c.I.navbar.home[n])),a.createElement("li",{className:"navbar-burger-element navbar-relative"},a.createElement("p",{className:"navbar-burger-general-element",tabIndex:"0",onClick:L},c.I.navbar.products.title[n]),m&&a.createElement(a.Fragment,null,a.createElement("ul",{className:"navbar-menu-burger",onMouseLeave:()=>U(),onBlur:()=>U()},a.createElement("li",{className:"no-border"},a.createElement(r.rU,{className:"navbar-list-sub-menu-burger",to:"es"===n?"/producto/extracto-piel-uva":"/en/product/grape-skin-extracts"},c.I.navbar.products.grape_skin[n])),a.createElement("li",null,a.createElement(r.rU,{className:"navbar-list-sub-menu-burger",to:"es"===n?"/producto/extracto-vino":"/en/product/wine-extracts"},c.I.navbar.products.wine_extracts[n])),a.createElement("li",null,a.createElement(r.rU,{className:"navbar-list-sub-menu-burger",to:"es"===n?"/producto/taninos-uva":"/en/product/grape-tannins"},c.I.navbar.products.tannins[n])),a.createElement("li",null,a.createElement(r.rU,{className:"navbar-list-sub-menu",to:"es"===n?"/producto/extracto-nutricion-animal":"/en/product/grape-polyphenols-animal-feed"},c.I.navbar.products.nutri_animal[n])),a.createElement("li",null,a.createElement(r.rU,{className:"navbar-list-sub-menu-burger",to:"es"===n?"/producto/extracto-de-semilla-de-uva":"/en/product/grape-seed-extract"},c.I.navbar.products.seed_extract[n])),a.createElement("li",null,a.createElement(r.rU,{className:"navbar-list-sub-menu-burger",to:"es"===n?"/producto/alcoholes":"/en/product/alcohols"},c.I.navbar.products.alcohols[n])),a.createElement("li",null,a.createElement(r.rU,{className:"navbar-list-sub-menu-burger",to:"es"===n?"/producto/pepita-de-uva":"/en/product/grape-seed"},c.I.navbar.products.grape_seed[n]))))),a.createElement("li",{className:"navbar-burger-element navbar-relative"},a.createElement("p",{className:"navbar-burger-general-element",tabIndex:"0",onClick:A,to:"/Nosotros"},c.I.navbar.about.title[n]),b&&a.createElement(a.Fragment,null,a.createElement("ul",{className:"navbar-menu-burger",onMouseLeave:()=>U()},a.createElement("li",{className:"no-border"},a.createElement(r.rU,{className:"navbar-list-sub-menu-burger",to:"es"===n?"/sobre-nosotros/instalaciones":"/en/about-us/facilities"},c.I.navbar.about.resources[n])),a.createElement("li",null,a.createElement(r.rU,{className:"navbar-list-sub-menu-burger",to:"es"===n?"/sobre-nosotros/nuestra-historia":"/en/about-us/history"},c.I.navbar.about.history[n])),a.createElement("li",null,a.createElement(r.rU,{className:"navbar-list-sub-menu-burger",to:"es"===n?"/sobre-nosotros/valores":"/en/about-us/values"},c.I.navbar.about.values[n]))))),a.createElement("li",{className:"navbar-burger-element"},a.createElement(r.rU,{className:"navbar-burger-general-element",onMouseOver:U,to:"es"===n?"/donde-estamos":"/en/where-we-are"},c.I.navbar.where[n])),a.createElement("li",{className:"navbar-burger-element"},a.createElement(r.rU,{className:"navbar-burger-general-element",onMouseOver:U,to:"es"===n?"/sostenibilidad":"/en/sustainability"},c.I.navbar.sustainability[n])),a.createElement("li",{className:"navbar-burger-element navbar-burger-element-contact"},a.createElement(r.rU,{className:"navbar-burger-general-element",onMouseOver:U,to:"es"===n?"/contacto":"/en/contact-us"},c.I.navbar.contact[n])),a.createElement("li",{className:"navbar-burger-element navbar-burger-element-lang"},a.createElement("p",{className:"navbar-burger-general-element",onClick:R,to:"/"},"es"===n?"ES":"EN"),g&&a.createElement(a.Fragment,null,a.createElement("ul",{className:"navbar-menu-burger",onMouseLeave:()=>U()},a.createElement("li",{className:"no-border navbar-list-sub-menu-burger li-lang",onClick:F},"ES"),a.createElement("li",{className:"navbar-list-sub-menu-burger li-lang",onClick:F},"EN")))))));return w>1270?a.createElement(a.Fragment,null,a.createElement("div",{id:"outer-container",className:"navbar-container"},k(),M())):a.createElement(a.Fragment,null,a.createElement("div",{id:"outer-container",className:"navbar-container"},k(),T()))},m=n(4646),d=n(143),b=n(7896),v=n(9024),g=(n(757),n(926)),p=n(6004);var f=e=>{let{children:t,pageLocation:n}=e;const r=(0,b.useLocation)(),l=(0,g.J)(r);return a.createElement(a.Fragment,null,a.createElement(u,{location:n,lang:l}),a.createElement(d.ZP,{declineButtonText:"Rechazar",enableDeclineButton:!0,buttonText:"Aceptar",style:{backgroundColor:"rgba(160, 46, 51, 0.7)"},onAccept:()=>{(0,v.initializeAndTrack)(r)},buttonWrapperClasses:"consent-container-btn",buttonClasses:"consent-btn-accept",declineButtonClasses:"consent-btn-decline",cookieName:"gatsby-gdpr",onDecline:()=>{}},a.createElement(a.Fragment,null,a.createElement("div",{className:"consent-container"},a.createElement("p",{className:"consent-title"},"Esta página web usa cookies"),a.createElement("p",null,"Utilizamos cookies propias para fines estrictamente funcionales (navegar por la página, visitar secciones), así como cookies analíticas propias y de terceros para reconocerte, conocer tus preferencias y ofrecerte información personalizada. Algunas de estas cookies de terceros son utilizadas para personalizar el contenido y los anuncios.  Si nos otorgas tu consentimiento a través del botón aceptar, se almacenarán en tu dispositivo. Además, puedes rechazarlas a través del botón Rechazar. Dispones de más información en nuestra ",a.createElement("a",{href:p.Z,target:"_blank"},"Política de Cookies"),"."),a.createElement("br",null),a.createElement("p",null,"Este banner se mantendrá activo hasta que indiques o decidas su aceptación o deshabilitación. Al rechazar, solo se aceptan las cookies funcionales.")))),a.createElement("main",null,t),a.createElement(m.Z,{lang:l}))}},9816:function(e,t,n){var a=n(7294),r=n(4160);t.Z=e=>{let{goTo:t,style:n,width:l,children:o,onClickButton:s,type:c}=e;return a.createElement(a.Fragment,null,a.createElement("div",{className:"button-component"},c?a.createElement("button",{type:c,className:""+n},o):a.createElement("button",{className:""+n,onClick:e=>(e=>{s?s(e):(0,r.c4)(t)})(e)},o)))}},3902:function(e,t,n){var a=n(7294);t.Z=e=>{let{children:t,width:n,className:r,lang:l}=e;const{0:o,1:s}=(0,a.useState)(!1),{0:c,1:i}=(0,a.useState)(!1),{0:u,1:m}=(0,a.useState)(!1),d=()=>{s(!o)},b={es:"...ver más",en:"... read more"},v={es:"ver menos",en:"show less"};(0,a.useEffect)((()=>{"string"!=typeof t&&i(!0)}),[]),(0,a.useEffect)((()=>{n<800?(m(!0),s(!0)):(m(!1),s(!1))}),[n]);const g=()=>a.createElement(a.Fragment,null,a.createElement("span",{onClick:d,className:"read-more"}," ",b[l])),p=()=>a.createElement(a.Fragment,null,a.createElement("br",null),a.createElement("span",{onClick:d,className:"read-more"},v[l]));return c?u?a.createElement(a.Fragment,null,a.createElement("p",null,o?t.props.children[0]:t,o?g():p())):a.createElement(a.Fragment,null,a.createElement("p",null,t)):u?a.createElement(a.Fragment,null,a.createElement("p",{className:r&&r},o?t.slice(0,225):t,o?g():p())):a.createElement(a.Fragment,null,a.createElement("p",{className:r&&r},t))}},3225:function(e,t,n){function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var a,r,l=[],o=!0,s=!1;try{for(n=n.call(e);!(o=(a=n.next()).done)&&(l.push(a.value),!t||l.length!==t);o=!0);}catch(c){s=!0,r=c}finally{try{o||null==n.return||n.return()}finally{if(s)throw r}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}var i=n(7294);function u(e){return e&&"object"===c(e)&&"default"in e?e:{default:e}}var m,d,b,v,g,p,f=u(i),E=(d={},b=[],(v=function(){"function"==typeof Image&&(m=new Array(3).fill(0).map((function(){return new Image})))})(),{load:function(e){if(m){if(e&&!d[e])if(0===m.length)b.push(e);else{var t=m.shift();t.src=e,t.onload=function(){d[e]=!0,b.length>0?t.src=b.shift():m.push(t)}}}else v()}});!function(e){e[e.NORMAL=1]="NORMAL",e[e.BOLD=2]="BOLD"}(g||(g={})),function(e){e.LEFT="left",e.RIGHT="right"}(p||(p={}));var h=function(e){return f.default.createElement(f.default.Fragment,null,e.visible&&f.default.createElement("button",{type:"button",style:k.getNavStyle(e.direction,e.size,e.margin),onClick:e.onClickNav(e.direction)},f.default.createElement("img",{src:e.type===g.NORMAL?"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24' viewBox='0 0 24 24'%3e %3cdefs%3e %3cfilter id='8utpkffr2a' width='171.8%25' height='232.4%25' x='-35.9%25' y='-66.2%25' filterUnits='objectBoundingBox'%3e %3cfeOffset in='SourceAlpha' result='shadowOffsetOuter1'/%3e %3cfeGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='2'/%3e %3cfeColorMatrix in='shadowBlurOuter1' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0'/%3e %3c/filter%3e %3cpath id='6inzdknobb' d='M20 6.999L20.707 7.706 12.354 16.06 4 7.706 4.707 6.999 12.354 14.646z'/%3e %3c/defs%3e %3cg fill='none' fill-rule='evenodd'%3e %3cg%3e %3cg%3e %3cg transform='translate(-67 -27) translate(67 27) rotate(90 12.354 11.53)'%3e %3cuse fill='black' filter='url(%238utpkffr2a)' xlink:href='%236inzdknobb'/%3e %3cuse fill='white' xlink:href='%236inzdknobb'/%3e %3c/g%3e %3c/g%3e %3c/g%3e %3c/g%3e%3c/svg%3e":"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24' viewBox='0 0 24 24'%3e %3cdefs%3e %3cfilter id='0ls8o9a99a' width='168.9%25' height='218.6%25' x='-34.5%25' y='-59.3%25' filterUnits='objectBoundingBox'%3e %3cfeOffset in='SourceAlpha' result='shadowOffsetOuter1'/%3e %3cfeGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='2'/%3e %3cfeColorMatrix in='shadowBlurOuter1' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0'/%3e %3c/filter%3e %3cpath id='rs87bry78b' d='M19 7L20.413 8.414 11.707 17.12 2.999 8.414 4.413 7 11.707 14.291z'/%3e %3c/defs%3e %3cg fill='none' fill-rule='evenodd'%3e %3cg%3e %3cg%3e %3cg transform='translate(-24 -27) translate(24 27) rotate(90 11.707 12.06)'%3e %3cuse fill='black' filter='url(%230ls8o9a99a)' xlink:href='%23rs87bry78b'/%3e %3cuse fill='white' xlink:href='%23rs87bry78b'/%3e %3c/g%3e %3c/g%3e %3c/g%3e %3c/g%3e%3c/svg%3e",style:o({width:"100%"},e.direction===p.RIGHT&&{transform:"rotate(180deg)"}),alt:e.direction===p.LEFT?"slide to left":"slide to right"})))},y={display:"block",margin:"0",padding:"0",border:"0"},N={position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundSize:"cover"},w={position:"absolute",top:"50%",cursor:"pointer",outline:"none",background:"none"},x={position:"absolute",left:"50%",bottom:"15px"},I={display:"inline-block",cursor:"pointer",outline:"none",background:"none",boxShadow:"1px 1px 1px 0px #1a1a1a",borderRadius:"50%",border:"1px solid #FFFFFF",width:"".concat(15,"px"),height:"".concat(15,"px"),marginLeft:"".concat(3,"px"),marginRight:"".concat(3,"px")},k={ImageSlider:o(o({},y),{position:"absolute",left:0,top:0,width:"100%",height:"100%"}),ImageSlideCurrent:o(o({},N),{},{overflow:"hidden"}),ImageSlideNext:o(o({},N),{},{overflow:"hidden"}),NavLeft:o(o(o({},y),w),{},{left:"30px",marginTop:"-25px"}),NavRight:o(o(o({},y),w),{},{right:"30px",marginTop:"-25px"}),BulletNormal:o(o({},y),I),BulletActive:o(o(o({},y),I),{},{background:"#FFF"}),getRootContainer:function(e,t,n){return o(o({},y),{},{overflow:"hidden",width:e,height:t,backgroundColor:n})},getSubContainer:function(e,t){return o(o({},y),{},{position:"absolute",overflow:"hidden",width:e,height:t})},getBulletContainer:function(e){return o(o(o({},y),x),{},{marginLeft:"-".concat(21*e/2,"px")})},getImageSlide:function(e,t,n,a){return o(o({},N),{},{overflow:"hidden",transition:"".concat(t,"s"),backgroundImage:"url(".concat(e,")"),transform:a?"translate3d(".concat(100*n,"%, 0px, 0px)"):"translate(".concat(100*n,"%, 0px)")})},getNavStyle:function(e,t,n){return o(o(o(o({},y),w),e===p.LEFT?{left:"".concat(n,"px")}:{right:"".concat(n,"px")}),{},{marginTop:"-".concat(Math.floor(t/2),"px"),width:"".concat(t,"px")})}},S=function(e){var t=e.visible,n=e.length,a=e.currentIdx,r=e.onClickBullets;return f.default.createElement(f.default.Fragment,null,t&&n>0&&f.default.createElement("div",{style:k.getBulletContainer(n)},Array.from(Array(n).keys()).map((function(e){return f.default.createElement("button",{key:"bullet-".concat(e),type:"button","data-id":"bullet-".concat(e),style:e===a?k.BulletActive:k.BulletNormal,onClick:function(){return r(e)}})}))))},C=function(e){var t=e.startIndex,n=e.imageCount,r=e.autoPlay,l=e.autoPlayDelay,o=a(i.useState(t<n?t:0),2),s=o[0],c=o[1],u=i.useRef(!0),m=i.useRef(s),d=i.useRef(null),b=function(){null!==d.current&&(clearTimeout(d.current),d.current=null)},v=function(e){return e>=n?0:e<0?n-1:e},g=function(e){u.current=e>s,m.current=s,c(v(e))};return i.useEffect((function(){var e;return b(),e=s+1,r&&!d.current&&(d.current=setTimeout((function(){g(e)}),1e3*l)),b}),[s]),{slideIdx:s,updateSlideIdx:g,getNextLoopingIdx:v,isRightDirection:u.current,previousSlideIdx:m.current}},O=function(e,t){var n;return(null===(n=e[t])||void 0===n?void 0:n.url)||e[t]};e.exports=function(e){var t=e.width,n=e.height,r=e.images,l=e.showNavs,s=e.showBullets,c=e.loop,u=void 0===c||c,m=e.autoPlay,d=void 0!==m&&m,b=e.autoPlayDelay,v=void 0===b?2:b,y=e.startIndex,N=void 0===y?0:y,w=e.style,x=void 0===w?void 0:w,I=e.slideDuration,U=void 0===I?.5:I,F=e.bgColor,B=void 0===F?"#000":F,M=e.useGPURender,L=void 0===M||M,A=e.navSize,R=void 0===A?50:A,T=e.navMargin,z=void 0===T?30:T,j=e.navStyle,P=void 0===j?g.NORMAL:j,D=e.onClick,_=void 0===D?void 0:D,G=e.onClickNav,Z=void 0===G?void 0:G,H=e.onClickBullets,Y=void 0===H?void 0:H,q=e.onStartSlide,W=void 0===q?void 0:q,J=e.onCompleteSlide,K=void 0===J?void 0:J,$=i.useMemo((function(){return k.getRootContainer(t,n,B)}),[t,n,B]),Q=C({imageCount:r.length,startIndex:N,autoPlay:d,autoPlayDelay:v+U}),V=Q.slideIdx,X=Q.updateSlideIdx,ee=Q.isRightDirection,te=Q.getNextLoopingIdx,ne=Q.previousSlideIdx,ae=a(i.useState(k.getImageSlide(O(r,N),U,0,L)),2),re=ae[0],le=ae[1],oe=a(i.useState(k.getImageSlide(O(r,N+1),U,1,L)),2),se=oe[0],ce=oe[1],ie=i.useRef(!1),ue=i.useCallback((function(e){null==_||_(V,e)}),[V]),me=i.useCallback((function(e){return function(){if(!ie.current){var t=e===p.RIGHT;null==Z||Z(t),X(t?V+1:V-1)}}}),[Z,V,X]),de=i.useCallback((function(e){e===V||ie.current||(null==Y||Y(e),X(e))}),[Y,V,X]);i.useEffect((function(){if(V!==ne){var e=O(r,te(ee?V-1:V+1)),t=O(r,V),n=ee?-1:1,a=ee?1:-1;null==W||W(V+1,r.length),ce(k.getImageSlide(t,0,a,L)),setTimeout((function(){ie.current=!0,le(k.getImageSlide(e,U,n,L)),ce(k.getImageSlide(t,U,0,L))}),50)}}),[W,V,ee]);var be=i.useCallback((function(){ie.current=!1,E.load(O(r,V+2)),le(k.getImageSlide(O(r,V),0,0,L)),null==K||K(V+1,r.length)}),[K,V]);return f.default.createElement("div",{style:o(o({},$),x)},f.default.createElement("div",{style:k.getSubContainer(t,n)},f.default.createElement("div",{style:k.ImageSlider,onClick:ue,className:"rsis-container"},f.default.createElement("div",{style:re,onTransitionEnd:be,className:"rsis-image"}),r.length>1&&f.default.createElement("div",{style:se})),(u||V>0)&&f.default.createElement(h,{direction:p.LEFT,visible:l&&r.length>0,type:P,size:R,margin:z,onClickNav:me}),(u||V<r.length-1)&&f.default.createElement(h,{direction:p.RIGHT,visible:l&&r.length>0,type:P,size:R,margin:z,onClickNav:me}),f.default.createElement(S,{visible:s,length:r.length,currentIdx:V,onClickBullets:de})))}}}]);
//# sourceMappingURL=bb6420fedd8778dd6bc9668f1d23300d2ce13fae-900b9df57dea33512049.js.map