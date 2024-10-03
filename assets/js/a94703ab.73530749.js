"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[79048],{16804:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ne});var r=n(62540),o=n(63696),i=n(11750),a=n(92143),c=n(2545),l=n(33154),s=n(51839),d=n(50524),u=n(2474),b=n(51212);const p={backToTopButton:"backToTopButton_iEvu",backToTopButtonShow:"backToTopButtonShow_DO8w"};function m(){const{shown:e,scrollToTop:t}=function({threshold:e}){const[t,n]=(0,o.useState)(!1),r=(0,o.useRef)(!1),{startScroll:i,cancelScroll:a}=(0,u.gk)();return(0,u.Mq)((({scrollY:t},o)=>{const i=null==o?void 0:o.scrollY;i&&(r.current?r.current=!1:t>=i?(a(),n(!1)):t<e?n(!1):t+window.innerHeight<document.documentElement.scrollHeight&&n(!0))})),(0,b.$)((e=>{e.location.hash&&(r.current=!0,n(!1))})),{shown:t,scrollToTop:()=>i(0)}}({threshold:300});return(0,r.jsx)("button",{"aria-label":(0,d.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,i.A)("clean-btn",c.G.common.backToTopButton,p.backToTopButton,e&&p.backToTopButtonShow),type:"button",onClick:t})}var f=n(87719),h=n(49519),j=n(65667),y=n(70824),O=n(43023);function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function v(e){return(0,r.jsx)("svg",x(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){g(e,t,n[t])}))}return e}({width:"20",height:"20","aria-hidden":"true"},e),{children:(0,r.jsxs)("g",{fill:"#7a7a7a",children:[(0,r.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,r.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})}))}const w="collapseSidebarButton_oTwn",S="collapseSidebarButtonIcon_pMEX";function P({onClick:e}){return(0,r.jsx)("button",{type:"button",title:(0,d.T)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,d.T)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.A)("button button--secondary button--outline",w),onClick:e,children:(0,r.jsx)(v,{className:S})})}var k=n(47767),C=n(41594);const _=Symbol("EmptyContext"),A=o.createContext(_);function T({children:e}){const[t,n]=(0,o.useState)(null),i=(0,o.useMemo)((()=>({expandedItem:t,setExpandedItem:n})),[t]);return(0,r.jsx)(A.Provider,{value:i,children:e})}var I=n(46732),N=n(58159),E=n(3348),D=n(20373);function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){B(e,t,n[t])}))}return e}function M(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function H(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function G({collapsed:e,categoryLabel:t,onClick:n}){return(0,r.jsx)("button",{"aria-label":e?(0,d.T)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:t}):(0,d.T)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:t}),"aria-expanded":!e,type:"button",className:"clean-btn menu__caret",onClick:n})}function R(e){var{item:t,onItemClick:n,activePath:a,level:s,index:d}=e,u=H(e,["item","onItemClick","activePath","level","index"]);const{items:b,label:p,collapsible:m,className:f,href:h}=t,{docs:{sidebar:{autoCollapseCategories:j}}}=(0,y.p)(),O=function(e){const t=(0,D.A)();return(0,o.useMemo)((()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,l.Nr)(e):void 0),[e,t])}(t),g=(0,l.w8)(t,a),x=(0,N.ys)(h,a),{collapsed:v,setCollapsed:w}=(0,I.u)({initialState:()=>!!m&&(!g&&t.collapsed)}),{expandedItem:S,setExpandedItem:P}=function(){const e=(0,o.useContext)(A);if(e===_)throw new C.dV("DocSidebarItemsExpandedStateProvider");return e}(),k=(e=!v)=>{P(e?null:d),w(e)};return function({isActive:e,collapsed:t,updateCollapsed:n}){const r=(0,C.ZC)(e);(0,o.useEffect)((()=>{e&&!r&&t&&n(!1)}),[e,r,t,n])}({isActive:g,collapsed:v,updateCollapsed:k}),(0,o.useEffect)((()=>{m&&null!=S&&S!==d&&j&&w(!0)}),[m,S,d,w,j]),(0,r.jsxs)("li",{className:(0,i.A)(c.G.docs.docSidebarItemCategory,c.G.docs.docSidebarItemCategoryLevel(s),"menu__list-item",{"menu__list-item--collapsed":v},f),children:[(0,r.jsxs)("div",{className:(0,i.A)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":x}),children:[(0,r.jsx)(E.A,M(L({className:(0,i.A)("menu__link",{"menu__link--sublist":m,"menu__link--sublist-caret":!h&&m,"menu__link--active":g}),onClick:m?e=>{null==n||n(t),h?k(!1):(e.preventDefault(),k())}:()=>{null==n||n(t)},"aria-current":x?"page":void 0,role:m&&!h?"button":void 0,"aria-expanded":m&&!h?!v:void 0,href:m?null!=O?O:"#":O},u),{children:p})),h&&m&&(0,r.jsx)(G,{collapsed:v,categoryLabel:p,onClick:e=>{e.preventDefault(),k()}})]}),(0,r.jsx)(I.N,{lazy:!0,as:"ul",className:"menu__list",collapsed:v,children:(0,r.jsx)(oe,{items:b,tabIndex:v?-1:0,onItemClick:n,activePath:a,level:s+1})})]})}var W=n(79068),V=n(78438);const Y="menuExternalLink_BiEj";function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){F(e,t,n[t])}))}return e}function U(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function z(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function K(e){var{item:t,onItemClick:n,activePath:o,level:a,index:s}=e,d=z(e,["item","onItemClick","activePath","level","index"]);const{href:u,label:b,className:p,autoAddBaseUrl:m}=t,f=(0,l.w8)(t,o),h=(0,W.A)(u);return(0,r.jsx)("li",{className:(0,i.A)(c.G.docs.docSidebarItemLink,c.G.docs.docSidebarItemLinkLevel(a),"menu__list-item",p),children:(0,r.jsxs)(E.A,U(q({className:(0,i.A)("menu__link",!h&&Y,{"menu__link--active":f}),autoAddBaseUrl:m,"aria-current":f?"page":void 0,to:u},h&&{onClick:n?()=>n(t):void 0},d),{children:[b,!h&&(0,r.jsx)(V.A,{})]}))},b)}const X="menuHtmlItem_OniL";function J({item:e,level:t,index:n}){const{value:o,defaultStyle:a,className:l}=e;return(0,r.jsx)("li",{className:(0,i.A)(c.G.docs.docSidebarItemLink,c.G.docs.docSidebarItemLinkLevel(t),a&&[X,"menu__list-item"],l),dangerouslySetInnerHTML:{__html:o}},n)}function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Z(e,t,n[t])}))}return e}function Q(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function ee(e){var{item:t}=e,n=Q(e,["item"]);switch(t.type){case"category":return(0,r.jsx)(R,$({item:t},n));case"html":return(0,r.jsx)(J,$({item:t},n));default:return(0,r.jsx)(K,$({item:t},n))}}function te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ne(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function re(e){var{items:t}=e,n=ne(e,["items"]);const o=(0,l.Y)(t,n.activePath);return(0,r.jsx)(T,{children:o.map(((e,t)=>(0,r.jsx)(ee,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){te(e,t,n[t])}))}return e}({item:e,index:t},n),t)))})}const oe=(0,o.memo)(re),ie="menu_jmj1",ae="menuWithAnnouncementBar_YufC";function ce({path:e,sidebar:t,className:n}){const a=function(){const{isActive:e}=(0,k.M)(),[t,n]=(0,o.useState)(e);return(0,u.Mq)((({scrollY:t})=>{e&&n(0===t)}),[e]),e&&t}();return(0,r.jsx)("nav",{"aria-label":(0,d.T)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,i.A)("menu thin-scrollbar",ie,a&&ae,n),children:(0,r.jsx)("ul",{className:(0,i.A)(c.G.docs.docSidebarMenu,"menu__list"),children:(0,r.jsx)(oe,{items:t,activePath:e,level:1})})})}const le="sidebar_CUen",se="sidebarWithHideableNavbar_w4KB",de="sidebarHidden_k6VE",ue="sidebarLogo_CYvI";function be({path:e,sidebar:t,onCollapse:n,isHidden:o}){const{navbar:{hideOnScroll:a},docs:{sidebar:{hideable:c}}}=(0,y.p)();return(0,r.jsxs)("div",{className:(0,i.A)(le,a&&se,o&&de),children:[a&&(0,r.jsx)(O.A,{tabIndex:-1,className:ue}),(0,r.jsx)(ce,{path:e,sidebar:t}),c&&(0,r.jsx)(P,{onClick:n})]})}const pe=o.memo(be);var me=n(94330),fe=n(96023);const he=({sidebar:e,path:t})=>{const n=(0,fe.M)();return(0,r.jsx)("ul",{className:(0,i.A)(c.G.docs.docSidebarMenu,"menu__list"),children:(0,r.jsx)(oe,{items:e,activePath:t,onItemClick:e=>{"category"===e.type&&e.href&&n.toggle(),"link"===e.type&&n.toggle()},level:1})})};function je(e){return(0,r.jsx)(me.GX,{component:he,props:e})}const ye=o.memo(je);function Oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ge(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Oe(e,t,n[t])}))}return e}function xe(e){const t=(0,j.l)(),n="desktop"===t||"ssr"===t,o="mobile"===t;return(0,r.jsxs)(r.Fragment,{children:[n&&(0,r.jsx)(pe,ge({},e)),o&&(0,r.jsx)(ye,ge({},e))]})}const ve={expandButton:"expandButton_pLDq",expandButtonIcon:"expandButtonIcon_X5ff"};function we({toggleSidebar:e}){return(0,r.jsx)("div",{className:ve.expandButton,title:(0,d.T)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,d.T)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:e,onClick:e,children:(0,r.jsx)(v,{className:ve.expandButtonIcon})})}const Se={docSidebarContainer:"docSidebarContainer_c7NB",docSidebarContainerHidden:"docSidebarContainerHidden_P3S_",sidebarViewport:"sidebarViewport_KYo0"};function Pe({children:e}){const t=(0,s.t)();var n;return(0,r.jsx)(o.Fragment,{children:e},null!==(n=null==t?void 0:t.name)&&void 0!==n?n:"noSidebar")}function ke({sidebar:e,hiddenSidebarContainer:t,setHiddenSidebarContainer:n}){const{pathname:a}=(0,h.zy)(),[l,s]=(0,o.useState)(!1),d=(0,o.useCallback)((()=>{l&&s(!1),!l&&(0,f.O)()&&s(!0),n((e=>!e))}),[n,l]);return(0,r.jsx)("aside",{className:(0,i.A)(c.G.docs.docSidebarContainer,Se.docSidebarContainer,t&&Se.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(Se.docSidebarContainer)&&t&&s(!0)},children:(0,r.jsx)(Pe,{children:(0,r.jsxs)("div",{className:(0,i.A)(Se.sidebarViewport,l&&Se.sidebarViewportHidden),children:[(0,r.jsx)(xe,{sidebar:e,path:a,onCollapse:d,isHidden:l}),l&&(0,r.jsx)(we,{toggleSidebar:d})]})})})}const Ce={docMainContainer:"docMainContainer_a9sJ",docMainContainerEnhanced:"docMainContainerEnhanced_grEJ",docItemWrapperEnhanced:"docItemWrapperEnhanced_VqDq"};function _e({hiddenSidebarContainer:e,children:t}){const n=(0,s.t)();return(0,r.jsx)("main",{className:(0,i.A)(Ce.docMainContainer,(e||!n)&&Ce.docMainContainerEnhanced),children:(0,r.jsx)("div",{className:(0,i.A)("container padding-top--md padding-bottom--lg",Ce.docItemWrapper,e&&Ce.docItemWrapperEnhanced),children:t})})}const Ae={docRoot:"docRoot_DfVB",docsWrapper:"docsWrapper__sE8"};function Te({children:e}){const t=(0,s.t)(),[n,i]=(0,o.useState)(!1);return(0,r.jsxs)("div",{className:Ae.docsWrapper,children:[(0,r.jsx)(m,{}),(0,r.jsxs)("div",{className:Ae.docRoot,children:[t&&(0,r.jsx)(ke,{sidebar:t.items,hiddenSidebarContainer:n,setHiddenSidebarContainer:i}),(0,r.jsx)(_e,{hiddenSidebarContainer:n,children:e})]})]})}var Ie=n(65701);function Ne(e){const t=(0,l.B5)(e);if(!t)return(0,r.jsx)(Ie.A,{});const{docElement:n,sidebarName:o,sidebarItems:d}=t;return(0,r.jsx)(a.e3,{className:(0,i.A)(c.G.page.docsDocPage),children:(0,r.jsx)(s.V,{name:o,items:d,children:(0,r.jsx)(Te,{children:n})})})}},65701:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(62540),o=(n(63696),n(11750)),i=n(50524),a=n(12859);function c({className:e}){return(0,r.jsx)("main",{className:(0,o.A)("container margin-vert--xl",e),children:(0,r.jsx)("div",{className:"row",children:(0,r.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,r.jsx)(a.A,{as:"h1",className:"hero__title",children:(0,r.jsx)(i.A,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,r.jsx)("p",{children:(0,r.jsx)(i.A,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,r.jsx)("p",{children:(0,r.jsx)(i.A,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}}}]);