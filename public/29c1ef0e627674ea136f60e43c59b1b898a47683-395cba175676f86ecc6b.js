"use strict";(self.webpackChunkvinumar_web=self.webpackChunkvinumar_web||[]).push([[1996],{9816:function(e,t,n){var r=n(7294),a=n(4160);t.Z=e=>{let{goTo:t,style:n,width:l,children:i,onClickButton:c,type:o}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:"button-component"},o?r.createElement("button",{type:o,className:""+n},i):r.createElement("button",{className:""+n,onClick:e=>(e=>{c?c(e):(0,a.c4)(t)})(e)},i)))}},6037:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(7294),a=n(3225),l=n.n(a),i=n(3902),c=n.p+"static/173236994-ab1590b1ad461827037d4b171d5214e5.jpg",o=n.p+"static/DSC00958-bc4b936b152baced7a83e7eb433518c0.jpg",u=n.p+"static/DJI_0705-2-ef1c6f57d52ab3d9ba870c4e7b91890a.jpg",s=n.p+"static/DJI_0684-2-edf7ab7aaddc3de784fc6e867d3146ea.jpg",d=n.p+"static/BL8A8217-98fa6dff4becd3cb2db075daa223d6d9.jpg",m=n.p+"static/BL8A8677-30863bee5d626cb643313418d03f7c0c.jpg",f=n.p+"static/BL8A8864-948c2270355bf8d3e04c5f53b681724d.jpg",g=n.p+"static/BL8A8679-b93caa1ba4bddedaeac07f4ee6536607.jpg",p=n.p+"static/BL8A8730-f611a39f22bee6729c3336582cd274d8.jpg",v=n(1359),h=n(254);var b=e=>{let{type:t,children:n,title:a,width:b}=e;const{lang:E}=(0,r.useContext)(v.Ie),y=[{url:c},{url:o},{url:u}];(0,r.useEffect)((()=>{}),[]);const w=h.I.natural.title[E],x=h.I.natural.text1[E],k=h.I.natural.text2[E];switch(t){case"slider":return r.createElement(r.Fragment,null,r.createElement("div",{className:"entorno-container"},r.createElement("div",{className:"entorno-text-container"},r.createElement("h4",null,w),r.createElement(i.Z,{width:b},r.createElement("div",null,x,r.createElement("span",{className:"block"},k)))),r.createElement(l(),{images:y,width:"72.82%",height:600,showNavs:!0,className:"entorno-slider",showBullets:!0,autoPlay:!0,autoPlayDelay:4})));case"alcohol":return r.createElement(r.Fragment,null,r.createElement("div",{className:"entorno-container"},r.createElement("div",{className:"entorno-text-container"},r.createElement("h4",null,w),r.createElement(i.Z,{width:b},r.createElement("div",null,x,r.createElement("span",{className:"block"},k)))),r.createElement("div",{className:"entorno-img-container"},r.createElement("img",{src:s,alt:"image"}),r.createElement("img",{src:g,alt:"image"}))));case"pepita":return r.createElement(r.Fragment,null,r.createElement("div",{className:"entorno-container"},r.createElement("div",{className:"entorno-text-container"},r.createElement("h4",null,w),r.createElement(i.Z,{width:b},r.createElement("div",null,x,r.createElement("span",{className:"block"},k)))),r.createElement("div",{className:"entorno-img-container"},r.createElement("img",{src:s,alt:"image"}),r.createElement("img",{src:p,alt:"image"}))));case"piel":return r.createElement(r.Fragment,null,r.createElement("div",{className:"entorno-container"},r.createElement("div",{className:"entorno-text-container"},r.createElement("h4",null,w),r.createElement(i.Z,{width:b},r.createElement("div",null,x,r.createElement("span",{className:"block"},k)))),r.createElement("div",{className:"entorno-img-container"},r.createElement("img",{src:s,alt:"image"}),r.createElement("img",{src:d,alt:"image"}))));case"vino":return r.createElement(r.Fragment,null,r.createElement("div",{className:"entorno-container"},r.createElement("div",{className:"entorno-text-container"},r.createElement("h4",null,w),r.createElement(i.Z,{width:b},r.createElement("div",null,x,r.createElement("span",{className:"block"},k)))),r.createElement("div",{className:"entorno-img-container"},r.createElement("img",{src:s,alt:"image"}),r.createElement("img",{src:m,alt:"image"}))));case"taninos":return r.createElement(r.Fragment,null,r.createElement("div",{className:"entorno-container"},r.createElement("div",{className:"entorno-text-container"},r.createElement("h4",null,w),r.createElement(i.Z,{width:b},r.createElement("div",null,x,r.createElement("span",{className:"block"},k)))),r.createElement("div",{className:"entorno-img-container"},r.createElement("img",{src:s,alt:"image"}),r.createElement("img",{src:f,alt:"image"}))))}}},3902:function(e,t,n){var r=n(7294);t.Z=e=>{let{children:t,width:n,className:a,lang:l}=e;const{0:i,1:c}=(0,r.useState)(!1),{0:o,1:u}=(0,r.useState)(!1),{0:s,1:d}=(0,r.useState)(!1),m=()=>{c(!i)},f={es:"...ver más",en:"... read more"},g={es:"ver menos",en:"show less"};(0,r.useEffect)((()=>{"string"!=typeof t&&u(!0)}),[]),(0,r.useEffect)((()=>{n<800?(d(!0),c(!0)):(d(!1),c(!1))}),[n]);const p=()=>r.createElement(r.Fragment,null,r.createElement("span",{onClick:m,className:"read-more"}," ",f[l])),v=()=>r.createElement(r.Fragment,null,r.createElement("br",null),r.createElement("span",{onClick:m,className:"read-more"},g[l]));return o?s?r.createElement(r.Fragment,null,r.createElement("p",null,i?t.props.children[0]:t,i?p():v())):r.createElement(r.Fragment,null,r.createElement("p",null,t)):s?r.createElement(r.Fragment,null,r.createElement("p",{className:a&&a},i?t.slice(0,225):t,i?p():v())):r.createElement(r.Fragment,null,r.createElement("p",{className:a&&a},t))}},3225:function(e,t,n){function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,l=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);i=!0);}catch(o){c=!0,a=o}finally{try{i||null==n.return||n.return()}finally{if(c)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}var u=n(7294);function s(e){return e&&"object"===o(e)&&"default"in e?e:{default:e}}var d,m,f,g,p,v,h=s(u),b=(m={},f=[],(g=function(){"function"==typeof Image&&(d=new Array(3).fill(0).map((function(){return new Image})))})(),{load:function(e){if(d){if(e&&!m[e])if(0===d.length)f.push(e);else{var t=d.shift();t.src=e,t.onload=function(){m[e]=!0,f.length>0?t.src=f.shift():d.push(t)}}}else g()}});!function(e){e[e.NORMAL=1]="NORMAL",e[e.BOLD=2]="BOLD"}(p||(p={})),function(e){e.LEFT="left",e.RIGHT="right"}(v||(v={}));var E=function(e){return h.default.createElement(h.default.Fragment,null,e.visible&&h.default.createElement("button",{type:"button",style:S.getNavStyle(e.direction,e.size,e.margin),onClick:e.onClickNav(e.direction)},h.default.createElement("img",{src:e.type===p.NORMAL?"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24' viewBox='0 0 24 24'%3e %3cdefs%3e %3cfilter id='8utpkffr2a' width='171.8%25' height='232.4%25' x='-35.9%25' y='-66.2%25' filterUnits='objectBoundingBox'%3e %3cfeOffset in='SourceAlpha' result='shadowOffsetOuter1'/%3e %3cfeGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='2'/%3e %3cfeColorMatrix in='shadowBlurOuter1' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0'/%3e %3c/filter%3e %3cpath id='6inzdknobb' d='M20 6.999L20.707 7.706 12.354 16.06 4 7.706 4.707 6.999 12.354 14.646z'/%3e %3c/defs%3e %3cg fill='none' fill-rule='evenodd'%3e %3cg%3e %3cg%3e %3cg transform='translate(-67 -27) translate(67 27) rotate(90 12.354 11.53)'%3e %3cuse fill='black' filter='url(%238utpkffr2a)' xlink:href='%236inzdknobb'/%3e %3cuse fill='white' xlink:href='%236inzdknobb'/%3e %3c/g%3e %3c/g%3e %3c/g%3e %3c/g%3e%3c/svg%3e":"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24' viewBox='0 0 24 24'%3e %3cdefs%3e %3cfilter id='0ls8o9a99a' width='168.9%25' height='218.6%25' x='-34.5%25' y='-59.3%25' filterUnits='objectBoundingBox'%3e %3cfeOffset in='SourceAlpha' result='shadowOffsetOuter1'/%3e %3cfeGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='2'/%3e %3cfeColorMatrix in='shadowBlurOuter1' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0'/%3e %3c/filter%3e %3cpath id='rs87bry78b' d='M19 7L20.413 8.414 11.707 17.12 2.999 8.414 4.413 7 11.707 14.291z'/%3e %3c/defs%3e %3cg fill='none' fill-rule='evenodd'%3e %3cg%3e %3cg%3e %3cg transform='translate(-24 -27) translate(24 27) rotate(90 11.707 12.06)'%3e %3cuse fill='black' filter='url(%230ls8o9a99a)' xlink:href='%23rs87bry78b'/%3e %3cuse fill='white' xlink:href='%23rs87bry78b'/%3e %3c/g%3e %3c/g%3e %3c/g%3e %3c/g%3e%3c/svg%3e",style:i({width:"100%"},e.direction===v.RIGHT&&{transform:"rotate(180deg)"}),alt:e.direction===v.LEFT?"slide to left":"slide to right"})))},y={display:"block",margin:"0",padding:"0",border:"0"},w={position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundSize:"cover"},x={position:"absolute",top:"50%",cursor:"pointer",outline:"none",background:"none"},k={position:"absolute",left:"50%",bottom:"15px"},N={display:"inline-block",cursor:"pointer",outline:"none",background:"none",boxShadow:"1px 1px 1px 0px #1a1a1a",borderRadius:"50%",border:"1px solid #FFFFFF",width:"".concat(15,"px"),height:"".concat(15,"px"),marginLeft:"".concat(3,"px"),marginRight:"".concat(3,"px")},S={ImageSlider:i(i({},y),{position:"absolute",left:0,top:0,width:"100%",height:"100%"}),ImageSlideCurrent:i(i({},w),{},{overflow:"hidden"}),ImageSlideNext:i(i({},w),{},{overflow:"hidden"}),NavLeft:i(i(i({},y),x),{},{left:"30px",marginTop:"-25px"}),NavRight:i(i(i({},y),x),{},{right:"30px",marginTop:"-25px"}),BulletNormal:i(i({},y),N),BulletActive:i(i(i({},y),N),{},{background:"#FFF"}),getRootContainer:function(e,t,n){return i(i({},y),{},{overflow:"hidden",width:e,height:t,backgroundColor:n})},getSubContainer:function(e,t){return i(i({},y),{},{position:"absolute",overflow:"hidden",width:e,height:t})},getBulletContainer:function(e){return i(i(i({},y),k),{},{marginLeft:"-".concat(21*e/2,"px")})},getImageSlide:function(e,t,n,r){return i(i({},w),{},{overflow:"hidden",transition:"".concat(t,"s"),backgroundImage:"url(".concat(e,")"),transform:r?"translate3d(".concat(100*n,"%, 0px, 0px)"):"translate(".concat(100*n,"%, 0px)")})},getNavStyle:function(e,t,n){return i(i(i(i({},y),x),e===v.LEFT?{left:"".concat(n,"px")}:{right:"".concat(n,"px")}),{},{marginTop:"-".concat(Math.floor(t/2),"px"),width:"".concat(t,"px")})}},I=function(e){var t=e.visible,n=e.length,r=e.currentIdx,a=e.onClickBullets;return h.default.createElement(h.default.Fragment,null,t&&n>0&&h.default.createElement("div",{style:S.getBulletContainer(n)},Array.from(Array(n).keys()).map((function(e){return h.default.createElement("button",{key:"bullet-".concat(e),type:"button","data-id":"bullet-".concat(e),style:e===r?S.BulletActive:S.BulletNormal,onClick:function(){return a(e)}})}))))},O=function(e){var t=e.startIndex,n=e.imageCount,a=e.autoPlay,l=e.autoPlayDelay,i=r(u.useState(t<n?t:0),2),c=i[0],o=i[1],s=u.useRef(!0),d=u.useRef(c),m=u.useRef(null),f=function(){null!==m.current&&(clearTimeout(m.current),m.current=null)},g=function(e){return e>=n?0:e<0?n-1:e},p=function(e){s.current=e>c,d.current=c,o(g(e))};return u.useEffect((function(){var e;return f(),e=c+1,a&&!m.current&&(m.current=setTimeout((function(){p(e)}),1e3*l)),f}),[c]),{slideIdx:c,updateSlideIdx:p,getNextLoopingIdx:g,isRightDirection:s.current,previousSlideIdx:d.current}},C=function(e,t){var n;return(null===(n=e[t])||void 0===n?void 0:n.url)||e[t]};e.exports=function(e){var t=e.width,n=e.height,a=e.images,l=e.showNavs,c=e.showBullets,o=e.loop,s=void 0===o||o,d=e.autoPlay,m=void 0!==d&&d,f=e.autoPlayDelay,g=void 0===f?2:f,y=e.startIndex,w=void 0===y?0:y,x=e.style,k=void 0===x?void 0:x,N=e.slideDuration,B=void 0===N?.5:N,F=e.bgColor,j=void 0===F?"#000":F,A=e.useGPURender,L=void 0===A||A,R=e.navSize,D=void 0===R?50:R,P=e.navMargin,T=void 0===P?30:P,M=e.navStyle,z=void 0===M?p.NORMAL:M,Z=e.onClick,G=void 0===Z?void 0:Z,H=e.onClickNav,U=void 0===H?void 0:H,_=e.onClickBullets,J=void 0===_?void 0:_,$=e.onStartSlide,q=void 0===$?void 0:$,K=e.onCompleteSlide,Q=void 0===K?void 0:K,V=u.useMemo((function(){return S.getRootContainer(t,n,j)}),[t,n,j]),W=O({imageCount:a.length,startIndex:w,autoPlay:m,autoPlayDelay:g+B}),X=W.slideIdx,Y=W.updateSlideIdx,ee=W.isRightDirection,te=W.getNextLoopingIdx,ne=W.previousSlideIdx,re=r(u.useState(S.getImageSlide(C(a,w),B,0,L)),2),ae=re[0],le=re[1],ie=r(u.useState(S.getImageSlide(C(a,w+1),B,1,L)),2),ce=ie[0],oe=ie[1],ue=u.useRef(!1),se=u.useCallback((function(e){null==G||G(X,e)}),[X]),de=u.useCallback((function(e){return function(){if(!ue.current){var t=e===v.RIGHT;null==U||U(t),Y(t?X+1:X-1)}}}),[U,X,Y]),me=u.useCallback((function(e){e===X||ue.current||(null==J||J(e),Y(e))}),[J,X,Y]);u.useEffect((function(){if(X!==ne){var e=C(a,te(ee?X-1:X+1)),t=C(a,X),n=ee?-1:1,r=ee?1:-1;null==q||q(X+1,a.length),oe(S.getImageSlide(t,0,r,L)),setTimeout((function(){ue.current=!0,le(S.getImageSlide(e,B,n,L)),oe(S.getImageSlide(t,B,0,L))}),50)}}),[q,X,ee]);var fe=u.useCallback((function(){ue.current=!1,b.load(C(a,X+2)),le(S.getImageSlide(C(a,X),0,0,L)),null==Q||Q(X+1,a.length)}),[Q,X]);return h.default.createElement("div",{style:i(i({},V),k)},h.default.createElement("div",{style:S.getSubContainer(t,n)},h.default.createElement("div",{style:S.ImageSlider,onClick:se,className:"rsis-container"},h.default.createElement("div",{style:ae,onTransitionEnd:fe,className:"rsis-image"}),a.length>1&&h.default.createElement("div",{style:ce})),(s||X>0)&&h.default.createElement(E,{direction:v.LEFT,visible:l&&a.length>0,type:z,size:D,margin:T,onClickNav:de}),(s||X<a.length-1)&&h.default.createElement(E,{direction:v.RIGHT,visible:l&&a.length>0,type:z,size:D,margin:T,onClickNav:de}),h.default.createElement(I,{visible:c,length:a.length,currentIdx:X,onClickBullets:me})))}}}]);
//# sourceMappingURL=29c1ef0e627674ea136f60e43c59b1b898a47683-395cba175676f86ecc6b.js.map