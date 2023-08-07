"use strict";(self.webpackChunkvinumar_web=self.webpackChunkvinumar_web||[]).push([[4222],{1695:function(e,t,n){function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var a,r,l=[],o=!0,s=!1;try{for(n=n.call(e);!(o=(a=n.next()).done)&&(l.push(a.value),!t||l.length!==t);o=!0);}catch(i){s=!0,r=i}finally{try{o||null==n.return||n.return()}finally{if(s)throw r}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}var c=n(7294);function u(e){return e&&"object"===i(e)&&"default"in e?e:{default:e}}var m,d,b,v,g,f,p=u(c),E=(d={},b=[],(v=function(){"function"==typeof Image&&(m=new Array(3).fill(0).map((function(){return new Image})))})(),{load:function(e){if(m){if(e&&!d[e])if(0===m.length)b.push(e);else{var t=m.shift();t.src=e,t.onload=function(){d[e]=!0,b.length>0?t.src=b.shift():m.push(t)}}}else v()}});!function(e){e[e.NORMAL=1]="NORMAL",e[e.BOLD=2]="BOLD"}(g||(g={})),function(e){e.LEFT="left",e.RIGHT="right"}(f||(f={}));var h=function(e){return p.default.createElement(p.default.Fragment,null,e.visible&&p.default.createElement("button",{type:"button",style:k.getNavStyle(e.direction,e.size,e.margin),onClick:e.onClickNav(e.direction)},p.default.createElement("img",{src:e.type===g.NORMAL?"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24' viewBox='0 0 24 24'%3e %3cdefs%3e %3cfilter id='8utpkffr2a' width='171.8%25' height='232.4%25' x='-35.9%25' y='-66.2%25' filterUnits='objectBoundingBox'%3e %3cfeOffset in='SourceAlpha' result='shadowOffsetOuter1'/%3e %3cfeGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='2'/%3e %3cfeColorMatrix in='shadowBlurOuter1' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0'/%3e %3c/filter%3e %3cpath id='6inzdknobb' d='M20 6.999L20.707 7.706 12.354 16.06 4 7.706 4.707 6.999 12.354 14.646z'/%3e %3c/defs%3e %3cg fill='none' fill-rule='evenodd'%3e %3cg%3e %3cg%3e %3cg transform='translate(-67 -27) translate(67 27) rotate(90 12.354 11.53)'%3e %3cuse fill='black' filter='url(%238utpkffr2a)' xlink:href='%236inzdknobb'/%3e %3cuse fill='white' xlink:href='%236inzdknobb'/%3e %3c/g%3e %3c/g%3e %3c/g%3e %3c/g%3e%3c/svg%3e":"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24' viewBox='0 0 24 24'%3e %3cdefs%3e %3cfilter id='0ls8o9a99a' width='168.9%25' height='218.6%25' x='-34.5%25' y='-59.3%25' filterUnits='objectBoundingBox'%3e %3cfeOffset in='SourceAlpha' result='shadowOffsetOuter1'/%3e %3cfeGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='2'/%3e %3cfeColorMatrix in='shadowBlurOuter1' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0'/%3e %3c/filter%3e %3cpath id='rs87bry78b' d='M19 7L20.413 8.414 11.707 17.12 2.999 8.414 4.413 7 11.707 14.291z'/%3e %3c/defs%3e %3cg fill='none' fill-rule='evenodd'%3e %3cg%3e %3cg%3e %3cg transform='translate(-24 -27) translate(24 27) rotate(90 11.707 12.06)'%3e %3cuse fill='black' filter='url(%230ls8o9a99a)' xlink:href='%23rs87bry78b'/%3e %3cuse fill='white' xlink:href='%23rs87bry78b'/%3e %3c/g%3e %3c/g%3e %3c/g%3e %3c/g%3e%3c/svg%3e",style:o({width:"100%"},e.direction===f.RIGHT&&{transform:"rotate(180deg)"}),alt:e.direction===f.LEFT?"slide to left":"slide to right"})))},w={display:"block",margin:"0",padding:"0",border:"0"},y={position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundSize:"cover"},N={position:"absolute",top:"50%",cursor:"pointer",outline:"none",background:"none"},x={position:"absolute",left:"50%",bottom:"15px"},I={display:"inline-block",cursor:"pointer",outline:"none",background:"none",boxShadow:"1px 1px 1px 0px #1a1a1a",borderRadius:"50%",border:"1px solid #FFFFFF",width:"".concat(15,"px"),height:"".concat(15,"px"),marginLeft:"".concat(3,"px"),marginRight:"".concat(3,"px")},k={ImageSlider:o(o({},w),{position:"absolute",left:0,top:0,width:"100%",height:"100%"}),ImageSlideCurrent:o(o({},y),{},{overflow:"hidden"}),ImageSlideNext:o(o({},y),{},{overflow:"hidden"}),NavLeft:o(o(o({},w),N),{},{left:"30px",marginTop:"-25px"}),NavRight:o(o(o({},w),N),{},{right:"30px",marginTop:"-25px"}),BulletNormal:o(o({},w),I),BulletActive:o(o(o({},w),I),{},{background:"#FFF"}),getRootContainer:function(e,t,n){return o(o({},w),{},{overflow:"hidden",width:e,height:t,backgroundColor:n})},getSubContainer:function(e,t){return o(o({},w),{},{position:"absolute",overflow:"hidden",width:e,height:t})},getBulletContainer:function(e){return o(o(o({},w),x),{},{marginLeft:"-".concat(21*e/2,"px")})},getImageSlide:function(e,t,n,a){return o(o({},y),{},{overflow:"hidden",transition:"".concat(t,"s"),backgroundImage:"url(".concat(e,")"),transform:a?"translate3d(".concat(100*n,"%, 0px, 0px)"):"translate(".concat(100*n,"%, 0px)")})},getNavStyle:function(e,t,n){return o(o(o(o({},w),N),e===f.LEFT?{left:"".concat(n,"px")}:{right:"".concat(n,"px")}),{},{marginTop:"-".concat(Math.floor(t/2),"px"),width:"".concat(t,"px")})}},S=function(e){var t=e.visible,n=e.length,a=e.currentIdx,r=e.onClickBullets;return p.default.createElement(p.default.Fragment,null,t&&n>0&&p.default.createElement("div",{style:k.getBulletContainer(n)},Array.from(Array(n).keys()).map((function(e){return p.default.createElement("button",{key:"bullet-".concat(e),type:"button","data-id":"bullet-".concat(e),style:e===a?k.BulletActive:k.BulletNormal,onClick:function(){return r(e)}})}))))},C=function(e){var t=e.startIndex,n=e.imageCount,r=e.autoPlay,l=e.autoPlayDelay,o=a(c.useState(t<n?t:0),2),s=o[0],i=o[1],u=c.useRef(!0),m=c.useRef(s),d=c.useRef(null),b=function(){null!==d.current&&(clearTimeout(d.current),d.current=null)},v=function(e){return e>=n?0:e<0?n-1:e},g=function(e){u.current=e>s,m.current=s,i(v(e))};return c.useEffect((function(){var e;return b(),e=s+1,r&&!d.current&&(d.current=setTimeout((function(){g(e)}),1e3*l)),b}),[s]),{slideIdx:s,updateSlideIdx:g,getNextLoopingIdx:v,isRightDirection:u.current,previousSlideIdx:m.current}};e.exports=function(e){var t,n=e.width,r=e.height,l=e.images,s=e.showNavs,i=e.showBullets,u=e.loop,m=void 0===u||u,d=e.autoPlay,b=void 0!==d&&d,v=e.autoPlayDelay,w=void 0===v?2:v,y=e.startIndex,N=void 0===y?0:y,x=e.style,I=void 0===x?void 0:x,O=e.slideDuration,U=void 0===O?.5:O,F=e.bgColor,B=void 0===F?"#000":F,M=e.useGPURender,L=void 0===M||M,A=e.navSize,R=void 0===A?50:A,T=e.navMargin,z=void 0===T?30:T,j=e.navStyle,P=void 0===j?g.NORMAL:j,D=e.onClick,_=void 0===D?void 0:D,G=e.onClickNav,Z=void 0===G?void 0:G,H=e.onClickBullets,Y=void 0===H?void 0:H,q=e.onStartSlide,W=void 0===q?void 0:q,J=e.onCompleteSlide,K=void 0===J?void 0:J,$=c.useMemo((function(){return k.getRootContainer(n,r,B)}),[n,r,B]),Q=C({imageCount:l.length,startIndex:N,autoPlay:b,autoPlayDelay:w+U}),V=Q.slideIdx,X=Q.updateSlideIdx,ee=Q.isRightDirection,te=Q.getNextLoopingIdx,ne=Q.previousSlideIdx,ae=a(c.useState(k.getImageSlide(l[0].url,U,0,L)),2),re=ae[0],le=ae[1],oe=a(c.useState(k.getImageSlide(null===(t=l[1])||void 0===t?void 0:t.url,U,1,L)),2),se=oe[0],ie=oe[1],ce=c.useRef(!1),ue=c.useCallback((function(e){null==_||_(V,e)}),[V]),me=c.useCallback((function(e){return function(){if(!ce.current){var t=e===f.RIGHT;null==Z||Z(t),X(t?V+1:V-1)}}}),[Z,V,X]),de=c.useCallback((function(e){e===V||ce.current||(null==Y||Y(e),X(e))}),[Y,V,X]);c.useEffect((function(){if(V!==ne){var e=l[te(ee?V-1:V+1)].url,t=l[V].url,n=ee?-1:1,a=ee?1:-1;null==W||W(V+1,l.length),ie(k.getImageSlide(t,0,a,L)),setTimeout((function(){ce.current=!0,le(k.getImageSlide(e,U,n,L)),ie(k.getImageSlide(t,U,0,L))}),50)}}),[W,V,ee]);var be=c.useCallback((function(){var e;ce.current=!1,E.load(null===(e=l[V+2])||void 0===e?void 0:e.url),le(k.getImageSlide(l[V].url,0,0,L)),null==K||K(V+1,l.length)}),[K,V]);return p.default.createElement("div",{style:o(o({},$),I)},p.default.createElement("div",{style:k.getSubContainer(n,r)},p.default.createElement("div",{style:k.ImageSlider,onClick:ue,className:"rsis-container"},p.default.createElement("div",{style:re,onTransitionEnd:be,className:"rsis-image"}),l.length>1&&p.default.createElement("div",{style:se})),(m||V>0)&&p.default.createElement(h,{direction:f.LEFT,visible:s&&l.length>0,type:P,size:R,margin:z,onClickNav:me}),(m||V<l.length-1)&&p.default.createElement(h,{direction:f.RIGHT,visible:s&&l.length>0,type:P,size:R,margin:z,onClickNav:me}),p.default.createElement(S,{visible:i,length:l.length,currentIdx:V,onClickBullets:de})))}},1256:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7294),r=n(1597),l=n(7194),o=n(960),s=n(1359),i=n(4269),c=n(4675),u=function(e){var t=e.location,n=e.lang,u=(0,a.useContext)(s.pK),m=(0,a.useState)(!1),d=m[0],b=m[1],v=(0,a.useState)(!1),g=v[0],f=v[1],p=(0,a.useState)(!1),E=p[0],h=p[1],w=(0,a.useState)(),y=(w[0],w[1]),N=(0,a.useState)("415px"),x=N[0],I=N[1],k=(0,c.A)(t),S=(0,a.useState)("undefined"!=typeof window&&window.screen.width),C=S[0],O=S[1],U=function(){if(y(window.scrollY),window.scrollY>215)I("214px");else{var e=window.scrollY;I(415-e+"px")}};(0,a.useEffect)((function(){"undefined"!=typeof window&&window.addEventListener("resize",(function(e){O(window.screen.width)}))}),[]),(0,a.useEffect)((function(){window.addEventListener("scroll",U)}),[]);var F=function(){return a.createElement("div",null,a.createElement(r.rU,{to:"/"},a.createElement("img",{className:"navbar-logo",onScroll:B,src:o.Z,width:x,alt:"Logo"})))},B=function(e){},M=function(){b(!0),f(!1),h(!1)},L=function(){f(!0),b(!1),h(!1)},A=function(){d&&b(!1),g&&f(!1),E&&h(!1)},R=function(e){if(n.toUpperCase()!==e.target.innerText){u({type:e.target.innerText});var a=t.pathname;a.slice(0,3);"en"===k?(0,r.c4)(i.I.routing[a]):(0,r.c4)("/en"+i.I.routing[a]+"/")}},T=function(){h(!0),f(!1),b(!1)},z=function(){b(!d)},j=function(){f(!g)},P=function(){h(!E)};return C>1270?a.createElement(a.Fragment,null,a.createElement("div",{id:"outer-container",className:"navbar-container"},F(),a.createElement("ul",{id:"page-wrap",className:"navbar-list-general"},a.createElement("li",{className:"navbar-list-element"},a.createElement(r.rU,{className:"navbar-list-general-element",onMouseOver:A,to:"es"===n?"/":"/en"},i.I.navbar.home[n])),a.createElement("li",{className:"navbar-list-element navbar-relative"},a.createElement("p",{className:"navbar-list-general-element",tabIndex:"0",onClick:M,onMouseOver:M},i.I.navbar.products.title[n]),d&&a.createElement(a.Fragment,null,a.createElement("ul",{className:"navbar-menu",onMouseLeave:function(){return A()},onBlur:function(){return A()}},a.createElement("li",{className:"no-border"},a.createElement(r.rU,{className:"navbar-list-sub-menu",to:"es"===n?"/producto/extracto-piel-uva":"/en/product/grape-skin-extracts"},i.I.navbar.products.grape_skin[n])),a.createElement("li",null,a.createElement(r.rU,{className:"navbar-list-sub-menu",to:"es"===n?"/producto/extracto-vino":"/en/product/wine-extracts"},i.I.navbar.products.wine_extracts[n])),a.createElement("li",null,a.createElement(r.rU,{className:"navbar-list-sub-menu",to:"es"===n?"/producto/taninos-uva":"/en/product/grape-tannins"},i.I.navbar.products.tannins[n])),a.createElement("li",null,a.createElement(r.rU,{className:"navbar-list-sub-menu",to:"es"===n?"/producto/extracto-de-semilla-de-uva":"/en/product/grape-seed-extract"},i.I.navbar.products.seed_extract[n])),a.createElement("li",null,a.createElement(r.rU,{className:"navbar-list-sub-menu",to:"es"===n?"/producto/alcoholes":"/en/product/alcohols"},i.I.navbar.products.alcohols[n])),a.createElement("li",null,a.createElement(r.rU,{className:"navbar-list-sub-menu",to:"es"===n?"/producto/pepita-de-uva":"/en/product/grape-seed"},i.I.navbar.products.grape_seed[n]))))),a.createElement("li",{className:"navbar-list-element navbar-relative"},a.createElement("p",{className:"navbar-list-general-element",tabIndex:"0",onMouseOver:L,to:"/Nosotros"},i.I.navbar.about.title[n]),g&&a.createElement(a.Fragment,null,a.createElement("ul",{className:"navbar-menu",onMouseLeave:function(){return A()}},a.createElement("li",{className:"no-border"},a.createElement(r.rU,{className:"navbar-list-sub-menu",to:"es"===n?"/sobre-nosotros/instalaciones":"/en/about-us/facilities"},i.I.navbar.about.resources[n])),a.createElement("li",null,a.createElement(r.rU,{className:"navbar-list-sub-menu",to:"es"===n?"/sobre-nosotros/nuestra-historia":"/en/about-us/history"},i.I.navbar.about.history[n])),a.createElement("li",null,a.createElement(r.rU,{className:"navbar-list-sub-menu",to:"es"===n?"/sobre-nosotros/valores":"/en/about-us/values"},i.I.navbar.about.values[n]))))),a.createElement("li",{className:"navbar-list-element"},a.createElement(r.rU,{className:"navbar-list-general-element",onMouseOver:A,to:"es"===n?"/donde-estamos":"/en/where-we-are"},i.I.navbar.where[n])),a.createElement("li",{className:"navbar-list-element"},a.createElement(r.rU,{className:"navbar-list-general-element",onMouseOver:A,to:"es"===n?"/sostenibilidad":"/en/sustainability"},i.I.navbar.sustainability[n])),a.createElement("li",{className:"navbar-list-element-contact"},a.createElement(r.rU,{className:"navbar-list-general-element",onMouseOver:A,to:"es"===n?"/contacto":"/en/contact-us"},i.I.navbar.contact[n])),a.createElement("li",{className:"navbar-list-element-lang"},a.createElement("p",{className:"navbar-list-general-element",onClick:T,onMouseOver:T,to:"/"},"es"===n?"ES":"EN"),E&&a.createElement(a.Fragment,null,a.createElement("ul",{className:"navbar-menu",onMouseLeave:function(){return A()}},a.createElement("li",{className:"no-border navbar-list-sub-menu li-lang",onClick:R},"ES"),a.createElement("li",{className:"navbar-list-sub-menu li-lang",onClick:R},"EN"))))))):a.createElement(a.Fragment,null,a.createElement("div",{id:"outer-container",className:"navbar-container"},F(),a.createElement(a.Fragment,null,a.createElement(l.slide,{right:!0,pageWrapId:"page-wrap",outerContainerId:"outer-container"},a.createElement("ul",{id:"page-wrap",className:"navbar-burger-general"},a.createElement("li",{className:"navbar-burger-element"},a.createElement(r.rU,{className:"navbar-burger-general-element",onMouseOver:A,to:"es"===n?"/":"/en"},i.I.navbar.home[n])),a.createElement("li",{className:"navbar-burger-element navbar-relative"},a.createElement("p",{className:"navbar-burger-general-element",tabIndex:"0",onClick:z},i.I.navbar.products.title[n]),d&&a.createElement(a.Fragment,null,a.createElement("ul",{className:"navbar-menu-burger",onMouseLeave:function(){return A()},onBlur:function(){return A()}},a.createElement("li",{className:"no-border"},a.createElement(r.rU,{className:"navbar-list-sub-menu-burger",to:"es"===n?"/producto/extracto-piel-uva":"/en/product/grape-skin-extracts"},i.I.navbar.products.grape_skin[n])),a.createElement("li",null,a.createElement(r.rU,{className:"navbar-list-sub-menu-burger",to:"es"===n?"/producto/extracto-vino":"/en/product/wine-extracts"},i.I.navbar.products.wine_extracts[n])),a.createElement("li",null,a.createElement(r.rU,{className:"navbar-list-sub-menu-burger",to:"es"===n?"/producto/taninos-uva":"/en/product/grape-tannins"},i.I.navbar.products.tannins[n])),a.createElement("li",null,a.createElement(r.rU,{className:"navbar-list-sub-menu-burger",to:"es"===n?"/producto/extracto-de-semilla-de-uva":"/en/product/grape-seed-extract"},i.I.navbar.products.seed_extract[n])),a.createElement("li",null,a.createElement(r.rU,{className:"navbar-list-sub-menu-burger",to:"es"===n?"/producto/alcoholes":"/en/product/alcohols"},i.I.navbar.products.alcohols[n])),a.createElement("li",null,a.createElement(r.rU,{className:"navbar-list-sub-menu-burger",to:"es"===n?"/producto/pepita-de-uva":"/en/product/grape-seed"},i.I.navbar.products.grape_seed[n]))))),a.createElement("li",{className:"navbar-burger-element navbar-relative"},a.createElement("p",{className:"navbar-burger-general-element",tabIndex:"0",onClick:j,to:"/Nosotros"},i.I.navbar.about.title[n]),g&&a.createElement(a.Fragment,null,a.createElement("ul",{className:"navbar-menu-burger",onMouseLeave:function(){return A()}},a.createElement("li",{className:"no-border"},a.createElement(r.rU,{className:"navbar-list-sub-menu-burger",to:"es"===n?"/sobre-nosotros/instalaciones":"/en/about-us/facilities"},i.I.navbar.about.resources[n])),a.createElement("li",null,a.createElement(r.rU,{className:"navbar-list-sub-menu-burger",to:"es"===n?"/sobre-nosotros/nuestra-historia":"/en/about-us/history"},i.I.navbar.about.history[n])),a.createElement("li",null,a.createElement(r.rU,{className:"navbar-list-sub-menu-burger",to:"es"===n?"/sobre-nosotros/valores":"/en/about-us/values"},i.I.navbar.about.values[n]))))),a.createElement("li",{className:"navbar-burger-element"},a.createElement(r.rU,{className:"navbar-burger-general-element",onMouseOver:A,to:"es"===n?"/donde-estamos":"/en/where-we-are"},i.I.navbar.where[n])),a.createElement("li",{className:"navbar-burger-element"},a.createElement(r.rU,{className:"navbar-burger-general-element",onMouseOver:A,to:"es"===n?"/sostenibilidad":"/en/sustainability"},i.I.navbar.sustainability[n])),a.createElement("li",{className:"navbar-burger-element navbar-burger-element-contact"},a.createElement(r.rU,{className:"navbar-burger-general-element",onMouseOver:A,to:"es"===n?"/contacto":"/en/contact-us"},i.I.navbar.contact[n])),a.createElement("li",{className:"navbar-burger-element navbar-burger-element-lang"},a.createElement("p",{className:"navbar-burger-general-element",onClick:P,to:"/"},"es"===n?"ES":"EN"),E&&a.createElement(a.Fragment,null,a.createElement("ul",{className:"navbar-menu-burger",onMouseLeave:function(){return A()}},a.createElement("li",{className:"no-border navbar-list-sub-menu-burger li-lang",onClick:R},"ES"),a.createElement("li",{className:"navbar-list-sub-menu-burger li-lang",onClick:R},"EN")))))))))},m=n(4646),d=n(9776),b=n(9499),v=n(9024),g=(n(757),n(926)),f=n(6004),p=function(e){var t=e.children,n=e.pageLocation,r=(0,b.useLocation)(),l=(0,g.J)(r);return a.createElement(a.Fragment,null,a.createElement(u,{location:n,lang:l}),a.createElement(d.ZP,{declineButtonText:"Rechazar",enableDeclineButton:!0,buttonText:"Aceptar",style:{backgroundColor:"rgba(160, 46, 51, 0.7)"},onAccept:function(){(0,v.initializeAndTrack)(r)},buttonWrapperClasses:"consent-container-btn",buttonClasses:"consent-btn-accept",declineButtonClasses:"consent-btn-decline",cookieName:"gatsby-gdpr",onDecline:function(){}},a.createElement(a.Fragment,null,a.createElement("div",{className:"consent-container"},a.createElement("p",{className:"consent-title"},"Esta página web usa cookies"),a.createElement("p",null,"Utilizamos cookies propias para fines estrictamente funcionales (navegar por la página, visitar secciones), así como cookies analíticas propias y de terceros para reconocerte, conocer tus preferencias y ofrecerte información personalizada. Algunas de estas cookies de terceros son utilizadas para personalizar el contenido y los anuncios.  Si nos otorgas tu consentimiento a través del botón aceptar, se almacenarán en tu dispositivo. Además, puedes rechazarlas a través del botón Rechazar. Dispones de más información en nuestra ",a.createElement("a",{href:f.Z,target:"_blank"},"Política de Cookies"),"."),a.createElement("br",null),a.createElement("p",null,"Este banner se mantendrá activo hasta que indiques o decidas su aceptación o deshabilitación. Al rechazar, solo se aceptan las cookies funcionales.")))),a.createElement("main",null,t),a.createElement(m.Z,{lang:l}))}},3902:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.width,r=e.className,l=e.lang,o=(0,a.useState)(!1),s=o[0],i=o[1],c=(0,a.useState)(!1),u=c[0],m=c[1],d=(0,a.useState)(!1),b=d[0],v=d[1],g=function(){i(!s)},f={es:"...ver más",en:"... read more"},p={es:"ver menos",en:"show less"};(0,a.useEffect)((function(){"string"!=typeof t&&m(!0)}),[]),(0,a.useEffect)((function(){n<800?(v(!0),i(!0)):(v(!1),i(!1))}),[n]);var E=function(){return a.createElement(a.Fragment,null,a.createElement("span",{onClick:g,className:"read-more"}," ",f[l]))},h=function(){return a.createElement(a.Fragment,null,a.createElement("br",null),a.createElement("span",{onClick:g,className:"read-more"},p[l]))};return u?b?a.createElement(a.Fragment,null,a.createElement("p",null,s?t.props.children[0]:t,s?E():h())):a.createElement(a.Fragment,null,a.createElement("p",null,t)):b?a.createElement(a.Fragment,null,a.createElement("p",{className:r&&r},s?t.slice(0,225):t,s?E():h())):a.createElement(a.Fragment,null,a.createElement("p",{className:r&&r},t))}}}]);
//# sourceMappingURL=6d413c41abacafbc6bb328537f991c84dc7eeb61-c2e2316289db0b8ca099.js.map