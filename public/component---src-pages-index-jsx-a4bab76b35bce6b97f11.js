"use strict";(self.webpackChunkvinumar_web=self.webpackChunkvinumar_web||[]).push([[230],{3902:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.width,c=e.className,i=e.lang,d=(0,a.useState)(!1),r=d[0],l=d[1],o=(0,a.useState)(!1),s=o[0],m=o[1],u=(0,a.useState)(!1),x=u[0],p=u[1],E=function(){l(!r)},f={es:"...ver más",en:"... read more"},w={es:"ver menos",en:"show less"};(0,a.useEffect)((function(){"string"!=typeof t&&m(!0),console.log(t)}),[]),(0,a.useEffect)((function(){n<800?(p(!0),l(!0)):(p(!1),l(!1))}),[n]);var g=function(){return a.createElement(a.Fragment,null,a.createElement("span",{onClick:E,className:"read-more"}," ",f[i]))},v=function(){return a.createElement(a.Fragment,null,a.createElement("br",null),a.createElement("span",{onClick:E,className:"read-more"},w[i]))};return s?x?a.createElement(a.Fragment,null,a.createElement("p",null,r?t.props.children[0]:t,r?g():v())):a.createElement(a.Fragment,null,a.createElement("p",null,t)):x?a.createElement(a.Fragment,null,a.createElement("p",{className:c&&c},r?t.slice(0,225):t,r?g():v())):a.createElement(a.Fragment,null,a.createElement("p",{className:c&&c},t))}},8982:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.width,c=e.margin;return a.createElement("h4",{className:"component-text-centered",style:{width:n,marginBottom:c&&c}},t)}},1797:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var a=n(7294),c=(n(3673),n(4529),n(3879)),i=n(8982),d=(n(1597),n(7847)),r=n(3902),l=n(6956),o=n.p+"static/DJI_0698 (principal)-01ea6648100dfe9b06f4d97143e729f6.jpg",s=n.p+"static/BL8A9509_1-22d962486488d7261c702979f7666bd0.jpg",m=n.p+"static/BL8A9953_1-e87e0ed75c52bd4d2bc7f8b57478816c.jpg",u=n.p+"static/BL8A9520_1-91a57c050364ea36d8a3f95485239fdf.jpg",x=n(5398),p=n.p+"static/BL8A9093-8ae3212d4506d75799fdb1b3350454b1.jpg",E=n(633),f=n(4435),w=n(1359),g=n(3040),v=function(){var e=(0,a.useContext)(w.Ie).lang,t=(0,a.useState)(),n=(t[0],t[1]),v=(0,a.useState)(!1),b=v[0],h=v[1],N=(0,a.useState)(!1),_=N[0],I=N[1],S=(0,a.useState)(!1),Z=S[0],y=S[1],B=(0,a.useState)(!1),k=B[0],F=B[1],T=(0,a.useState)(!1),j=T[0],A=T[1],C=(0,a.useState)(!1),L=C[0],M=C[1],V=(0,a.useState)(!1),R=V[0],D=V[1],z=(0,a.useState)(!1),H=z[0],J=z[1],O=(0,a.useState)(!1),U=O[0],Y=O[1],q=(0,a.useState)(!1),G=q[0],K=q[1],P=(0,a.useState)("undefined"!=typeof window?window.screen.width:1920),Q=P[0],W=P[1];(0,a.useEffect)((function(){"undefined"!=typeof window&&window.addEventListener("resize",(function(e){W(window.screen.width)}))}),[]),(0,a.useEffect)((function(){"undefined"!=typeof window&&(window.onscroll=function(){var e=window.scrollY;n(e),e>100&&h(!0),e>400&&y(!0),e>500&&F(!0),e>600&&A(!0),e>1e3&&M(!0),e>1100&&D(!0),e>1500&&J(!0),e>3e3&&I(!0),e>3200&&Y(!0),e>2400&&K(!0)},window.scrollBy({top:-window.innerHeight,left:0,behavior:"smooth"}))}),[]);var X=function(){y(!0),"undefined"!=typeof window&&(Q<281?window.scrollBy({top:1260,left:0,behavior:"smooth"}):Q<426?window.scrollBy({top:1580,left:0,behavior:"smooth"}):Q<769?window.scrollBy({top:1380,left:0,behavior:"smooth"}):Q<1025?window.scrollBy({top:1280,left:0,behavior:"smooth"}):window.scrollBy({top:1460,left:0,behavior:"smooth"}))},$=function(t){var n=t.title,i=t.text,d=t.image,r=t.goTo,l=t.className;return a.createElement(a.Fragment,null,a.createElement("div",{className:"index-container-text-card"},a.createElement("p",{className:"index-title-card"},n),a.createElement("p",{className:"index-text-card"},i)),a.createElement("div",{className:"view"},a.createElement("img",{src:d,className:"index-card-img "+(l||""),alt:n}),a.createElement("div",{className:"mask"},a.createElement(c.Z,{className:"index-card-button",style:"white-button-product",width:"164",goTo:r},g.I.index.products.button_more[e]))))};return a.createElement(a.Fragment,null,a.createElement(l.Z,null),a.createElement(d.Z,null,a.createElement("div",{className:"index-container"},a.createElement(a.Fragment,null,a.createElement("div",{className:"index-container-header"},a.createElement("img",{src:o,alt:"Vinumar"}),a.createElement("div",{className:"index-container-header-h2"},a.createElement("h2",{className:"index-h2"},g.I.index.head_title[e])),a.createElement("div",{className:"button-fade-in"},a.createElement(c.Z,{style:"white-button-header",onClickButton:X},g.I.index.button_view_products[e])))),a.createElement("div",{className:"text-centered-bottom "+(b?"text-centered-animated-bottom":"")},a.createElement(i.Z,null,g.I.index.text_centered_top[e])),a.createElement(a.Fragment,null,a.createElement("div",{id:"productos",className:"index-container-product "+(Z&&"index-container-product-animated")},a.createElement("h2",null,g.I.index.products.title[e]),a.createElement("div",{className:"index-container-cards"},a.createElement("div",{className:"index-card "+(k&&"index-card-animated-bottom")},a.createElement($,{title:g.I.index.products.grape_skin.title[e],text:g.I.index.products.grape_skin.text[e],image:s,goTo:"/producto/extracto-piel-uva"})),a.createElement("div",{className:"index-card "+(j&&"index-card-animated-bottom")},a.createElement($,{title:g.I.index.products.wine_extracts.title[e],text:g.I.index.products.wine_extracts.text[e],image:m,goTo:"/producto/extracto-vino",className:"index-card-vino"})),a.createElement("div",{className:"index-card "+(L&&"index-card-animated-bottom")},a.createElement($,{title:g.I.index.products.grape_tannins.title[e],text:g.I.index.products.grape_tannins.text[e],image:u,goTo:"/producto/taninos-uva",className:"index-card-tanino"})),a.createElement("div",{className:"index-card "+(R&&"index-card-animated-bottom")},a.createElement($,{title:g.I.index.products.alcohols.title[e],text:g.I.index.products.alcohols.text[e],image:x.Z,goTo:"/producto/alcoholes",className:"index-card-alcohol"})),a.createElement("div",{className:"index-card "+(H&&"index-card-animated-bottom")},a.createElement($,{title:g.I.index.products.grape_seed.title[e],text:g.I.index.products.grape_seed.text[e],image:p,goTo:"/producto/pepita-de-uva"}))))),a.createElement(a.Fragment,null,a.createElement("div",{className:"index-container-donde "+(G&&"donde-animated")},a.createElement("h2",null,g.I.index.where.title[e]),a.createElement("div",{className:"index-card-donde "},a.createElement("div",{className:"index-container-donde-text "},a.createElement("p",{className:"index-donde-direccion "+(G&&"index-donde-direccion-animated")},"ctra. Munera, 5",a.createElement("span",null,"02600 Villarrobledo"),a.createElement("span",null,"Albacete, ",g.I.index.spain[e])),a.createElement("div",{className:"index-donde-text "+(G&&"index-donde-text-animated")},a.createElement(r.Z,{width:Q,lang:e},a.createElement("div",null,g.I.index.where.text_top[e],a.createElement("span",{className:"parrafo"},g.I.index.where.text_bottom[e]))))),a.createElement("div",{className:"view-donde"},a.createElement("img",{className:"index-donde-img "+(G&&"index-donde-img-animated"),src:"es"===e?E.Z:f.Z,alt:"Donde estamos"}),a.createElement("div",{className:"mask-donde"},a.createElement(c.Z,{className:"index-card-button",style:"white-button",width:"164",goTo:"/donde-estamos"},g.I.index.where.button_where[e])))))),a.createElement("div",{className:"text-centered-fade-in "+(_&&"fade-in")},a.createElement(i.Z,{width:"960px",margin:"60px"},g.I.index.text_centered_bottom[e]))),a.createElement("div",{className:"index-button-mas "+(U&&"fade-in")},a.createElement(c.Z,{text:"SABER MÁS SOBRE VINUMAR",goTo:"/sobre-nosotros/valores",style:"red-button",width:"292px"},g.I.index.button_know_more[e]))))}},5398:function(e,t,n){t.Z=n.p+"static/BL8A9307-bef87c24578f7bf2bfe4bf0e21802cc2.jpg"},633:function(e,t,n){t.Z=n.p+"static/Vinumar_Ilustraciones_Mapa_2-93223b36febf24f97cb59eb27d278367.jpg"},4435:function(e,t,n){t.Z=n.p+"static/Vinumar_Ilustraciones_Mapa_3-61876d218667e824c19aa6597911119b.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-jsx-a4bab76b35bce6b97f11.js.map