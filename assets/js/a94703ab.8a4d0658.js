"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4666],{14428:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ne});var r=n(71948),o=n(96952),c=n(68112),a=n(65888),i=n(51552),l=n(10788),s=n(43444),d=n(91888),u=n(19552),b=n(90376);const p={backToTopButton:"backToTopButton_iEvu",backToTopButtonShow:"backToTopButtonShow_DO8w"};function m(){const{shown:e,scrollToTop:t}=function({threshold:e}){const[t,n]=(0,o.useState)(!1),r=(0,o.useRef)(!1),{startScroll:c,cancelScroll:a}=(0,u.yI)();return(0,u.SM)((({scrollY:t},o)=>{const c=null==o?void 0:o.scrollY;c&&(r.current?r.current=!1:t>=c?(a(),n(!1)):t<e?n(!1):t+window.innerHeight<document.documentElement.scrollHeight&&n(!0))})),(0,b.c)((e=>{e.location.hash&&(r.current=!0,n(!1))})),{shown:t,scrollToTop:()=>c(0)}}({threshold:300});return(0,r.jsx)("button",{"aria-label":(0,d.G)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,c.c)("clean-btn",i.W.common.backToTopButton,p.backToTopButton,e&&p.backToTopButtonShow),type:"button",onClick:t})}var f=n(84404),h=n(7976),j=n(28e3),y=n(91667),O=n(72152);function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function v(e){return(0,r.jsx)("svg",x(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){g(e,t,n[t])}))}return e}({width:"20",height:"20","aria-hidden":"true"},e),{children:(0,r.jsxs)("g",{fill:"#7a7a7a",children:[(0,r.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,r.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})}))}const S={collapseSidebarButton:"collapseSidebarButton_oTwn",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_pMEX"};function w({onClick:e}){return(0,r.jsx)("button",{type:"button",title:(0,d.G)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,d.G)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.c)("button button--secondary button--outline",S.collapseSidebarButton),onClick:e,children:(0,r.jsx)(v,{className:S.collapseSidebarButtonIcon})})}var P=n(45176),k=n(43652);const _=Symbol("EmptyContext"),C=o.createContext(_);function I({children:e}){const[t,n]=(0,o.useState)(null),c=(0,o.useMemo)((()=>({expandedItem:t,setExpandedItem:n})),[t]);return(0,r.jsx)(C.Provider,{value:c,children:e})}var N=n(12896),E=n(53216),T=n(36108),B=n(77904);function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){D(e,t,n[t])}))}return e}function L(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function W(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function M({collapsed:e,categoryLabel:t,onClick:n}){return(0,r.jsx)("button",{"aria-label":e?(0,d.G)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:t}):(0,d.G)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function H(e){var{item:t,onItemClick:n,activePath:a,level:s,index:d}=e,u=W(e,["item","onItemClick","activePath","level","index"]);const{items:b,label:p,collapsible:m,className:f,href:h}=t,{docs:{sidebar:{autoCollapseCategories:j}}}=(0,y.y)(),O=function(e){const t=(0,B.c)();return(0,o.useMemo)((()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,l.Gw)(e):void 0),[e,t])}(t),g=(0,l.Md)(t,a),x=(0,E.Sc)(h,a),{collapsed:v,setCollapsed:S}=(0,N.a)({initialState:()=>!!m&&(!g&&t.collapsed)}),{expandedItem:w,setExpandedItem:P}=function(){const e=(0,o.useContext)(C);if(e===_)throw new k.AH("DocSidebarItemsExpandedStateProvider");return e}(),I=(e=!v)=>{P(e?null:d),S(e)};return function({isActive:e,collapsed:t,updateCollapsed:n}){const r=(0,k.i0)(e);(0,o.useEffect)((()=>{e&&!r&&t&&n(!1)}),[e,r,t,n])}({isActive:g,collapsed:v,updateCollapsed:I}),(0,o.useEffect)((()=>{m&&null!=w&&w!==d&&j&&S(!0)}),[m,w,d,S,j]),(0,r.jsxs)("li",{className:(0,c.c)(i.W.docs.docSidebarItemCategory,i.W.docs.docSidebarItemCategoryLevel(s),"menu__list-item",{"menu__list-item--collapsed":v},f),children:[(0,r.jsxs)("div",{className:(0,c.c)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":x}),children:[(0,r.jsx)(T.c,L(A({className:(0,c.c)("menu__link",{"menu__link--sublist":m,"menu__link--sublist-caret":!h&&m,"menu__link--active":g}),onClick:m?e=>{null==n||n(t),h?I(!1):(e.preventDefault(),I())}:()=>{null==n||n(t)},"aria-current":x?"page":void 0,"aria-expanded":m?!v:void 0,href:m?null!=O?O:"#":O},u),{children:p})),h&&m&&(0,r.jsx)(M,{collapsed:v,categoryLabel:p,onClick:e=>{e.preventDefault(),I()}})]}),(0,r.jsx)(N.U,{lazy:!0,as:"ul",className:"menu__list",collapsed:v,children:(0,r.jsx)(re,{items:b,tabIndex:v?-1:0,onItemClick:n,activePath:a,level:s+1})})]})}var R=n(66564),G=n(75184);const U={menuExternalLink:"menuExternalLink_BiEj"};function V(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){V(e,t,n[t])}))}return e}function Y(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function q(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function z(e){var{item:t,onItemClick:n,activePath:o,level:a,index:s}=e,d=q(e,["item","onItemClick","activePath","level","index"]);const{href:u,label:b,className:p,autoAddBaseUrl:m}=t,f=(0,l.Md)(t,o),h=(0,R.c)(u);return(0,r.jsx)("li",{className:(0,c.c)(i.W.docs.docSidebarItemLink,i.W.docs.docSidebarItemLinkLevel(a),"menu__list-item",p),children:(0,r.jsxs)(T.c,Y(F({className:(0,c.c)("menu__link",!h&&U.menuExternalLink,{"menu__link--active":f}),autoAddBaseUrl:m,"aria-current":f?"page":void 0,to:u},h&&{onClick:n?()=>n(t):void 0},d),{children:[b,!h&&(0,r.jsx)(G.c,{})]}))},b)}const K={menuHtmlItem:"menuHtmlItem_OniL"};function J({item:e,level:t,index:n}){const{value:o,defaultStyle:a,className:l}=e;return(0,r.jsx)("li",{className:(0,c.c)(i.W.docs.docSidebarItemLink,i.W.docs.docSidebarItemLinkLevel(t),a&&[K.menuHtmlItem,"menu__list-item"],l),dangerouslySetInnerHTML:{__html:o}},n)}function X(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){X(e,t,n[t])}))}return e}function Z(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function $(e){var{item:t}=e,n=Z(e,["item"]);switch(t.type){case"category":return(0,r.jsx)(H,Q({item:t},n));case"html":return(0,r.jsx)(J,Q({item:t},n));default:return(0,r.jsx)(z,Q({item:t},n))}}function ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function te(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function ne(e){var{items:t}=e,n=te(e,["items"]);const o=(0,l.mg)(t,n.activePath);return(0,r.jsx)(I,{children:o.map(((e,t)=>(0,r.jsx)($,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){ee(e,t,n[t])}))}return e}({item:e,index:t},n),t)))})}const re=(0,o.memo)(ne),oe={menu:"menu_jmj1",menuWithAnnouncementBar:"menuWithAnnouncementBar_YufC"};function ce({path:e,sidebar:t,className:n}){const a=function(){const{isActive:e}=(0,P.el)(),[t,n]=(0,o.useState)(e);return(0,u.SM)((({scrollY:t})=>{e&&n(0===t)}),[e]),e&&t}();return(0,r.jsx)("nav",{"aria-label":(0,d.G)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,c.c)("menu thin-scrollbar",oe.menu,a&&oe.menuWithAnnouncementBar,n),children:(0,r.jsx)("ul",{className:(0,c.c)(i.W.docs.docSidebarMenu,"menu__list"),children:(0,r.jsx)(re,{items:t,activePath:e,level:1})})})}const ae="sidebar_CUen",ie="sidebarWithHideableNavbar_w4KB",le="sidebarHidden_k6VE",se="sidebarLogo_CYvI";function de({path:e,sidebar:t,onCollapse:n,isHidden:o}){const{navbar:{hideOnScroll:a},docs:{sidebar:{hideable:i}}}=(0,y.y)();return(0,r.jsxs)("div",{className:(0,c.c)(ae,a&&ie,o&&le),children:[a&&(0,r.jsx)(O.c,{tabIndex:-1,className:se}),(0,r.jsx)(ce,{path:e,sidebar:t}),i&&(0,r.jsx)(w,{onClick:n})]})}const ue=o.memo(de);var be=n(82668),pe=n(3216);const me=({sidebar:e,path:t})=>{const n=(0,pe.q)();return(0,r.jsx)("ul",{className:(0,c.c)(i.W.docs.docSidebarMenu,"menu__list"),children:(0,r.jsx)(re,{items:e,activePath:t,onItemClick:e=>{"category"===e.type&&e.href&&n.toggle(),"link"===e.type&&n.toggle()},level:1})})};function fe(e){return(0,r.jsx)(be.Mx,{component:me,props:e})}const he=o.memo(fe);function je(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ye(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){je(e,t,n[t])}))}return e}function Oe(e){const t=(0,j.U)(),n="desktop"===t||"ssr"===t,o="mobile"===t;return(0,r.jsxs)(r.Fragment,{children:[n&&(0,r.jsx)(ue,ye({},e)),o&&(0,r.jsx)(he,ye({},e))]})}const ge={expandButton:"expandButton_pLDq",expandButtonIcon:"expandButtonIcon_X5ff"};function xe({toggleSidebar:e}){return(0,r.jsx)("div",{className:ge.expandButton,title:(0,d.G)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,d.G)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:e,onClick:e,children:(0,r.jsx)(v,{className:ge.expandButtonIcon})})}const ve={docSidebarContainer:"docSidebarContainer_c7NB",docSidebarContainerHidden:"docSidebarContainerHidden_P3S_",sidebarViewport:"sidebarViewport_KYo0"};function Se({children:e}){const t=(0,s.m)();var n;return(0,r.jsx)(o.Fragment,{children:e},null!==(n=null==t?void 0:t.name)&&void 0!==n?n:"noSidebar")}function we({sidebar:e,hiddenSidebarContainer:t,setHiddenSidebarContainer:n}){const{pathname:a}=(0,h.IT)(),[l,s]=(0,o.useState)(!1),d=(0,o.useCallback)((()=>{l&&s(!1),!l&&(0,f.I)()&&s(!0),n((e=>!e))}),[n,l]);return(0,r.jsx)("aside",{className:(0,c.c)(i.W.docs.docSidebarContainer,ve.docSidebarContainer,t&&ve.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(ve.docSidebarContainer)&&t&&s(!0)},children:(0,r.jsx)(Se,{children:(0,r.jsxs)("div",{className:(0,c.c)(ve.sidebarViewport,l&&ve.sidebarViewportHidden),children:[(0,r.jsx)(Oe,{sidebar:e,path:a,onCollapse:d,isHidden:l}),l&&(0,r.jsx)(xe,{toggleSidebar:d})]})})})}const Pe={docMainContainer:"docMainContainer_a9sJ",docMainContainerEnhanced:"docMainContainerEnhanced_grEJ",docItemWrapperEnhanced:"docItemWrapperEnhanced_VqDq"};function ke({hiddenSidebarContainer:e,children:t}){const n=(0,s.m)();return(0,r.jsx)("main",{className:(0,c.c)(Pe.docMainContainer,(e||!n)&&Pe.docMainContainerEnhanced),children:(0,r.jsx)("div",{className:(0,c.c)("container padding-top--md padding-bottom--lg",Pe.docItemWrapper,e&&Pe.docItemWrapperEnhanced),children:t})})}const _e={docRoot:"docRoot_DfVB",docsWrapper:"docsWrapper__sE8"};function Ce({children:e}){const t=(0,s.m)(),[n,c]=(0,o.useState)(!1);return(0,r.jsxs)("div",{className:_e.docsWrapper,children:[(0,r.jsx)(m,{}),(0,r.jsxs)("div",{className:_e.docRoot,children:[t&&(0,r.jsx)(we,{sidebar:t.items,hiddenSidebarContainer:n,setHiddenSidebarContainer:c}),(0,r.jsx)(ke,{hiddenSidebarContainer:n,children:e})]})]})}var Ie=n(26936);function Ne(e){const t=(0,l.Uj)(e);if(!t)return(0,r.jsx)(Ie.c,{});const{docElement:n,sidebarName:o,sidebarItems:d}=t;return(0,r.jsx)(a.cr,{className:(0,c.c)(i.W.page.docsDocPage),children:(0,r.jsx)(s.y,{name:o,items:d,children:(0,r.jsx)(Ce,{children:n})})})}},26936:(e,t,n)=>{n.d(t,{c:()=>i});var r=n(71948),o=(n(96952),n(68112)),c=n(91888),a=n(97048);function i({className:e}){return(0,r.jsx)("main",{className:(0,o.c)("container margin-vert--xl",e),children:(0,r.jsx)("div",{className:"row",children:(0,r.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,r.jsx)(a.c,{as:"h1",className:"hero__title",children:(0,r.jsx)(c.c,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,r.jsx)("p",{children:(0,r.jsx)(c.c,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,r.jsx)("p",{children:(0,r.jsx)(c.c,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}}}]);