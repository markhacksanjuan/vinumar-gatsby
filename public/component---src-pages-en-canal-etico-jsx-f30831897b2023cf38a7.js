"use strict";(self.webpackChunkvinumar_web=self.webpackChunkvinumar_web||[]).push([[7093],{1256:function(e,a,t){t.d(a,{Z:function(){return g}});var n=t(7294),r=t(4160),l=t(3190),s=t(960),c=t(1359),o=t(254),i=t(4675);var u=e=>{let{location:a,lang:t}=e;const u=(0,n.useContext)(c.pK),{0:m,1:b}=(0,n.useState)(!1),{0:v,1:E}=(0,n.useState)(!1),{0:d,1:p}=(0,n.useState)(!1),{0:g,1:N}=(0,n.useState)(),{0:I,1:h}=(0,n.useState)("415px"),k=(0,i.A)(a),{0:C,1:A}=(0,n.useState)("undefined"!=typeof window&&window.screen.width),f=()=>{if(N(window.scrollY),window.scrollY>215)h("214px");else{const e=window.scrollY;h(415-e+"px")}};(0,n.useEffect)((()=>{"undefined"!=typeof window&&window.addEventListener("resize",(e=>{A(window.screen.width)}))}),[]),(0,n.useEffect)((()=>{window.addEventListener("scroll",f)}),[]);const S=()=>n.createElement("div",null,n.createElement(r.rU,{to:"/"},n.createElement("img",{className:"navbar-logo",onScroll:w,src:s.Z,width:I,alt:"Logo"}))),w=e=>{},Q=()=>{b(!0),E(!1),p(!1)},J=()=>{E(!0),b(!1),p(!1)},x=()=>{m&&b(!1),v&&E(!1),d&&p(!1)},U=e=>{if(t.toUpperCase()===e.target.innerText)return;u({type:e.target.innerText});const n=a.pathname;n.slice(0,3);"en"===k?(0,r.c4)(o.I.routing[n]):(0,r.c4)("/en"+o.I.routing[n]+"/")},z=()=>{p(!0),E(!1),b(!1)},y=()=>n.createElement("ul",{id:"page-wrap",className:"navbar-list-general"},n.createElement("li",{className:"navbar-list-element"},n.createElement(r.rU,{className:"navbar-list-general-element",onMouseOver:x,to:"es"===t?"/":"/en"},o.I.navbar.home[t])),n.createElement("li",{className:"navbar-list-element navbar-relative"},n.createElement("p",{className:"navbar-list-general-element",tabIndex:"0",onClick:Q,onMouseOver:Q},o.I.navbar.products.title[t]),m&&n.createElement(n.Fragment,null,n.createElement("ul",{className:"navbar-menu",onMouseLeave:()=>x(),onBlur:()=>x()},n.createElement("li",{className:"no-border"},n.createElement(r.rU,{className:"navbar-list-sub-menu",to:"es"===t?"/producto/extracto-piel-uva":"/en/product/grape-skin-extracts"},o.I.navbar.products.grape_skin[t])),n.createElement("li",null,n.createElement(r.rU,{className:"navbar-list-sub-menu",to:"es"===t?"/producto/extracto-vino":"/en/product/wine-extracts"},o.I.navbar.products.wine_extracts[t])),n.createElement("li",null,n.createElement(r.rU,{className:"navbar-list-sub-menu",to:"es"===t?"/producto/taninos-uva":"/en/product/grape-tannins"},o.I.navbar.products.tannins[t])),n.createElement("li",null,n.createElement(r.rU,{className:"navbar-list-sub-menu",to:"es"===t?"/producto/extracto-nutricion-animal":"/en/product/grape-polyphenols-animal-feed"},o.I.navbar.products.nutri_animal[t])),n.createElement("li",null,n.createElement(r.rU,{className:"navbar-list-sub-menu",to:"es"===t?"/producto/extracto-de-semilla-de-uva":"/en/product/grape-seed-extract"},o.I.navbar.products.seed_extract[t])),n.createElement("li",null,n.createElement(r.rU,{className:"navbar-list-sub-menu",to:"es"===t?"/producto/alcoholes":"/en/product/alcohols"},o.I.navbar.products.alcohols[t])),n.createElement("li",null,n.createElement(r.rU,{className:"navbar-list-sub-menu",to:"es"===t?"/producto/pepita-de-uva":"/en/product/grape-seed"},o.I.navbar.products.grape_seed[t]))))),n.createElement("li",{className:"navbar-list-element navbar-relative"},n.createElement("p",{className:"navbar-list-general-element",tabIndex:"0",onMouseOver:J,to:"/Nosotros"},o.I.navbar.about.title[t]),v&&n.createElement(n.Fragment,null,n.createElement("ul",{className:"navbar-menu",onMouseLeave:()=>x()},n.createElement("li",{className:"no-border"},n.createElement(r.rU,{className:"navbar-list-sub-menu",to:"es"===t?"/sobre-nosotros/instalaciones":"/en/about-us/facilities"},o.I.navbar.about.resources[t])),n.createElement("li",null,n.createElement(r.rU,{className:"navbar-list-sub-menu",to:"es"===t?"/sobre-nosotros/nuestra-historia":"/en/about-us/history"},o.I.navbar.about.history[t])),n.createElement("li",null,n.createElement(r.rU,{className:"navbar-list-sub-menu",to:"es"===t?"/sobre-nosotros/valores":"/en/about-us/values"},o.I.navbar.about.values[t]))))),n.createElement("li",{className:"navbar-list-element"},n.createElement(r.rU,{className:"navbar-list-general-element",onMouseOver:x,to:"es"===t?"/donde-estamos":"/en/where-we-are"},o.I.navbar.where[t])),n.createElement("li",{className:"navbar-list-element"},n.createElement(r.rU,{className:"navbar-list-general-element",onMouseOver:x,to:"es"===t?"/sostenibilidad":"/en/sustainability"},o.I.navbar.sustainability[t])),n.createElement("li",{className:"navbar-list-element-contact"},n.createElement(r.rU,{className:"navbar-list-general-element",onMouseOver:x,to:"es"===t?"/contacto":"/en/contact-us"},o.I.navbar.contact[t])),n.createElement("li",{className:"navbar-list-element-lang"},n.createElement("p",{className:"navbar-list-general-element",onClick:z,onMouseOver:z,to:"/"},"es"===t?"ES":"EN"),d&&n.createElement(n.Fragment,null,n.createElement("ul",{className:"navbar-menu",onMouseLeave:()=>x()},n.createElement("li",{className:"no-border navbar-list-sub-menu li-lang",onClick:U},"ES"),n.createElement("li",{className:"navbar-list-sub-menu li-lang",onClick:U},"EN"))))),M=()=>{b(!m)},F=()=>{E(!v)},T=()=>{p(!d)},L=()=>n.createElement(n.Fragment,null,n.createElement(l.slide,{right:!0,pageWrapId:"page-wrap",outerContainerId:"outer-container"},n.createElement("ul",{id:"page-wrap",className:"navbar-burger-general"},n.createElement("li",{className:"navbar-burger-element"},n.createElement(r.rU,{className:"navbar-burger-general-element",onMouseOver:x,to:"es"===t?"/":"/en"},o.I.navbar.home[t])),n.createElement("li",{className:"navbar-burger-element navbar-relative"},n.createElement("p",{className:"navbar-burger-general-element",tabIndex:"0",onClick:M},o.I.navbar.products.title[t]),m&&n.createElement(n.Fragment,null,n.createElement("ul",{className:"navbar-menu-burger",onMouseLeave:()=>x(),onBlur:()=>x()},n.createElement("li",{className:"no-border"},n.createElement(r.rU,{className:"navbar-list-sub-menu-burger",to:"es"===t?"/producto/extracto-piel-uva":"/en/product/grape-skin-extracts"},o.I.navbar.products.grape_skin[t])),n.createElement("li",null,n.createElement(r.rU,{className:"navbar-list-sub-menu-burger",to:"es"===t?"/producto/extracto-vino":"/en/product/wine-extracts"},o.I.navbar.products.wine_extracts[t])),n.createElement("li",null,n.createElement(r.rU,{className:"navbar-list-sub-menu-burger",to:"es"===t?"/producto/taninos-uva":"/en/product/grape-tannins"},o.I.navbar.products.tannins[t])),n.createElement("li",null,n.createElement(r.rU,{className:"navbar-list-sub-menu",to:"es"===t?"/producto/extracto-nutricion-animal":"/en/product/grape-polyphenols-animal-feed"},o.I.navbar.products.nutri_animal[t])),n.createElement("li",null,n.createElement(r.rU,{className:"navbar-list-sub-menu-burger",to:"es"===t?"/producto/extracto-de-semilla-de-uva":"/en/product/grape-seed-extract"},o.I.navbar.products.seed_extract[t])),n.createElement("li",null,n.createElement(r.rU,{className:"navbar-list-sub-menu-burger",to:"es"===t?"/producto/alcoholes":"/en/product/alcohols"},o.I.navbar.products.alcohols[t])),n.createElement("li",null,n.createElement(r.rU,{className:"navbar-list-sub-menu-burger",to:"es"===t?"/producto/pepita-de-uva":"/en/product/grape-seed"},o.I.navbar.products.grape_seed[t]))))),n.createElement("li",{className:"navbar-burger-element navbar-relative"},n.createElement("p",{className:"navbar-burger-general-element",tabIndex:"0",onClick:F,to:"/Nosotros"},o.I.navbar.about.title[t]),v&&n.createElement(n.Fragment,null,n.createElement("ul",{className:"navbar-menu-burger",onMouseLeave:()=>x()},n.createElement("li",{className:"no-border"},n.createElement(r.rU,{className:"navbar-list-sub-menu-burger",to:"es"===t?"/sobre-nosotros/instalaciones":"/en/about-us/facilities"},o.I.navbar.about.resources[t])),n.createElement("li",null,n.createElement(r.rU,{className:"navbar-list-sub-menu-burger",to:"es"===t?"/sobre-nosotros/nuestra-historia":"/en/about-us/history"},o.I.navbar.about.history[t])),n.createElement("li",null,n.createElement(r.rU,{className:"navbar-list-sub-menu-burger",to:"es"===t?"/sobre-nosotros/valores":"/en/about-us/values"},o.I.navbar.about.values[t]))))),n.createElement("li",{className:"navbar-burger-element"},n.createElement(r.rU,{className:"navbar-burger-general-element",onMouseOver:x,to:"es"===t?"/donde-estamos":"/en/where-we-are"},o.I.navbar.where[t])),n.createElement("li",{className:"navbar-burger-element"},n.createElement(r.rU,{className:"navbar-burger-general-element",onMouseOver:x,to:"es"===t?"/sostenibilidad":"/en/sustainability"},o.I.navbar.sustainability[t])),n.createElement("li",{className:"navbar-burger-element navbar-burger-element-contact"},n.createElement(r.rU,{className:"navbar-burger-general-element",onMouseOver:x,to:"es"===t?"/contacto":"/en/contact-us"},o.I.navbar.contact[t])),n.createElement("li",{className:"navbar-burger-element navbar-burger-element-lang"},n.createElement("p",{className:"navbar-burger-general-element",onClick:T,to:"/"},"es"===t?"ES":"EN"),d&&n.createElement(n.Fragment,null,n.createElement("ul",{className:"navbar-menu-burger",onMouseLeave:()=>x()},n.createElement("li",{className:"no-border navbar-list-sub-menu-burger li-lang",onClick:U},"ES"),n.createElement("li",{className:"navbar-list-sub-menu-burger li-lang",onClick:U},"EN")))))));return C>1270?n.createElement(n.Fragment,null,n.createElement("div",{id:"outer-container",className:"navbar-container"},S(),y())):n.createElement(n.Fragment,null,n.createElement("div",{id:"outer-container",className:"navbar-container"},S(),L()))},m=t(4286),b=t(143),v=t(7896),E=t(9024),d=(t(757),t(926)),p=t(6004);var g=e=>{let{children:a,pageLocation:t}=e;const r=(0,v.useLocation)(),l=(0,d.J)(r);return n.createElement(n.Fragment,null,n.createElement(u,{location:t,lang:l}),n.createElement(b.ZP,{declineButtonText:"Rechazar",enableDeclineButton:!0,buttonText:"Aceptar",style:{backgroundColor:"rgba(160, 46, 51, 0.7)"},onAccept:()=>{(0,E.initializeAndTrack)(r)},buttonWrapperClasses:"consent-container-btn",buttonClasses:"consent-btn-accept",declineButtonClasses:"consent-btn-decline",cookieName:"gatsby-gdpr",onDecline:()=>{}},n.createElement(n.Fragment,null,n.createElement("div",{className:"consent-container"},n.createElement("p",{className:"consent-title"},"Esta página web usa cookies"),n.createElement("p",null,"Utilizamos cookies propias para fines estrictamente funcionales (navegar por la página, visitar secciones), así como cookies analíticas propias y de terceros para reconocerte, conocer tus preferencias y ofrecerte información personalizada. Algunas de estas cookies de terceros son utilizadas para personalizar el contenido y los anuncios.  Si nos otorgas tu consentimiento a través del botón aceptar, se almacenarán en tu dispositivo. Además, puedes rechazarlas a través del botón Rechazar. Dispones de más información en nuestra ",n.createElement("a",{href:p.Z,target:"_blank"},"Política de Cookies"),"."),n.createElement("br",null),n.createElement("p",null,"Este banner se mantendrá activo hasta que indiques o decidas su aceptación o deshabilitación. Al rechazar, solo se aceptan las cookies funcionales.")))),n.createElement("main",null,a),n.createElement(m.Z,{lang:l}))}},2592:function(e,a,t){t.d(a,{Z:function(){return o}});var n=t(7294),r=t(1256),l=t(66),s=(t(1359),t(254)),c=t(926);var o=e=>{let{location:a}=e;const t=(0,c.J)(a);(0,n.useEffect)((()=>{}),[]);return n.createElement(n.Fragment,null,n.createElement(l.Z,{pageTitle:s.I.ethic.title[t]}),n.createElement(r.Z,{pageLocation:a},n.createElement(n.Fragment,null,n.createElement("div",{className:"ethic-container recursos-recursos-container"},n.createElement("div",null,n.createElement("h4",null,s.I.ethic.title[t]),n.createElement("div",{className:"ethic-link-container"},n.createElement("p",{className:"ethic-text"},s.I.ethic.description[t],n.createElement("br",null)),n.createElement("a",{className:"ethic-link",target:"_blank",href:"https://bfef6082fa25db8b9586.canal.h2c.app/form.html"},s.I.ethic.link[t]),n.createElement("div",{className:"qr-container"},n.createElement("img",{className:"qr-code",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAooAAAKKAQMAAACAuujPAAAABlBMVEX///8AAABVwtN+AAAACXBIWXMAAA7EAAAOxAGVKw4bAAADdUlEQVR4nO3cMXbjIBDG8dFT4dJH0FF8NOtoOoqO4FJFXtgAwzBg2XK2W+3/K7yxgJ/SzQNmI6HPLCnXEPRDZIjPv0Ru8UPkEidd8pA8rV+eH0FCQkJC/tPkKjWjzp6LVsfH9pVp6CHP6yEhISEhIT8gB6tEo19i5ewnU65ke263HhISEhIS8vfkRb8m0o+H7FbtAQkJCQn5P5I/ucfZmsm0W/5pi+PB7YsgISEhISF/S9bUcpYqVVmnQ7Xczfb4aT0kJCQkJOQh2cXf96SPKXzrmVvqNbjncrbZVqoLJCQkJOS5yP3c87Df/JR9T1d7Pg4kJCQkJKQmuKR9TTDNyCFubtJQue9J5Wy/3EFCQkJCQh6S/r5GtJLVrZSNVy20B3NrfFrL3QIJCQkJeSrS1456OTNb43LoM0tJ+hqXlixlBBISEhIS8oBM6cpVipYz8evUvehPuwgkJCQkJOQbst1Kje3sq5WrNfeblVeG5sytvFcDCQkJCQl5SEp8Xu5rdMnDzRl0kt7nXHaO8TS+xxoSEhIS8iRkyGduJXMculuvcztbjEzpapPteyAhISEhIQ/IkkWaaE3zTWcpmzalhfLe8istZR0kJCQkJOQbUjM5ebNy5huixW+lgpG29MvGISEhISHPRCqzyl6uebBpWqsR61zzv9ICCQkJCQl5RK72vzJrY8BsqpLixuuQL3f+zA0SEhISEvIt6ctVyT3Prg3RmrRu04YEe1qa2iAhISEhT0qWLLZEtzT14r+eqSVtzku7MzcNJCQkJCTkAbnafY4m3ec83IPBkzoe3CtrY8DYnLlBQkJCQkK+IsW2UuXMLeReg+D2S+OrprXdYzxISEhISMgjMuXVVmmv12DTcS2HKUt5FSQkJCTkCckye85f01WPry3NK3dS90WQkJCQkJBvyZ00Z2ox3zpwy69M45uVu7rvWXY2R5CQkJCQkD0Z+uw0RNc05cpvpdozN0hISEjIM5GrmzV6zTdET87d/J+WiRnaV0JCQkJCQh6S9b6maQxoG6KD7ZJKuQtNaqWDhISEhIT8KzK4fjSJblrSXArppPTKfisFCQkJCXlu0i/RjDaeUgpU/Kf7iwOQkJCQkJCHpPh1nuwaom9xfW0M0Ezx65pfCQkJCQkJ+QnZRcmnhui6RNr7nimv+3I91pCQkJCQkK/JPyGyvC2aoBSlAAAAAElFTkSuQmCC",alt:"QR Code"}))))))))}},1462:function(e,a,t){t.r(a);var n=t(7294),r=t(2592),l=t(1359);a.default=e=>{let{location:a}=e;const{lang:t}=(0,n.useContext)(l.Ie);return n.createElement(n.Fragment,null,n.createElement(r.Z,{lang:t,location:a}))}}}]);
//# sourceMappingURL=component---src-pages-en-canal-etico-jsx-f30831897b2023cf38a7.js.map