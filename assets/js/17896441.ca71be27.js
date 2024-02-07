"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7918],{76447:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ae});var r=n(24246),o=n(27378),a=n(24093),s=n(3077);const l=o.createContext(null);function c({children:e,content:t}){const n=function(e){return(0,o.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(t);return(0,r.jsx)(l.Provider,{value:n,children:e})}function i(){const e=(0,o.useContext)(l);if(null===e)throw new s.i6("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=i();var o;return(0,r.jsx)(a.d,{title:e.title,description:e.description,keywords:t.keywords,image:null!==(o=n.image)&&void 0!==o?o:t.image})}var u=n(18453),p=n(34976),b=n(66049);function m(){const{metadata:e}=i();return(0,r.jsx)(b.Z,{previous:e.previous,next:e.next})}var f=n(32575),h=n(42834),j=n(19741),g=n(83640);function x({lastUpdatedAt:e,formattedLastUpdatedAt:t}){return(0,r.jsx)(g.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,r.jsx)("b",{children:(0,r.jsx)("time",{dateTime:new Date(1e3*e).toISOString(),children:t})})},children:" on {date}"})}function y({lastUpdatedBy:e}){return(0,r.jsx)(g.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,r.jsx)("b",{children:e})},children:" by {user}"})}function O({lastUpdatedAt:e,formattedLastUpdatedAt:t,lastUpdatedBy:n}){return(0,r.jsxs)("span",{className:j.k.common.lastUpdated,children:[(0,r.jsx)(g.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:e&&t?(0,r.jsx)(x,{lastUpdatedAt:e,formattedLastUpdatedAt:t}):"",byUser:n?(0,r.jsx)(y,{lastUpdatedBy:n}):""},children:"Last updated{atDate}{byUser}"}),!1]})}var v=n(98089);const w={iconEdit:"iconEdit_bHB7"};function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function U(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function k(e){var{className:t}=e,n=U(e,["className"]);return(0,r.jsx)("svg",P(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){C(e,t,n[t])}))}return e}({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,u.Z)(w.iconEdit,t),"aria-hidden":"true"},n),{children:(0,r.jsx)("g",{children:(0,r.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})}))}function _({editUrl:e}){return(0,r.jsxs)(v.Z,{to:e,className:j.k.common.editThisPage,children:[(0,r.jsx)(k,{}),(0,r.jsx)(g.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}const Z={tag:"tag_otG2",tagRegular:"tagRegular_s0E1",tagWithCount:"tagWithCount_PGyn"};function N({permalink:e,label:t,count:n}){return(0,r.jsxs)(v.Z,{href:e,className:(0,u.Z)(Z.tag,n?Z.tagWithCount:Z.tagRegular),children:[t,n&&(0,r.jsx)("span",{children:n})]})}const B={tags:"tags_Ow0B",tag:"tag_DFxh"};function E({tags:e}){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("b",{children:(0,r.jsx)(g.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,r.jsx)("ul",{className:(0,u.Z)(B.tags,"padding--none","margin-left--sm"),children:e.map((({label:e,permalink:t})=>(0,r.jsx)("li",{className:B.tag,children:(0,r.jsx)(N,{label:e,permalink:t})},t)))})]})}const L={lastUpdated:"lastUpdated_pbO5"};function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){D(e,t,n[t])}))}return e}function S(e){return(0,r.jsx)("div",{className:(0,u.Z)(j.k.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(E,T({},e))})})}function A({editUrl:e,lastUpdatedAt:t,lastUpdatedBy:n,formattedLastUpdatedAt:o}){return(0,r.jsxs)("div",{className:(0,u.Z)(j.k.docs.docFooterEditMetaRow,"row"),children:[(0,r.jsx)("div",{className:"col",children:e&&(0,r.jsx)(_,{editUrl:e})}),(0,r.jsx)("div",{className:(0,u.Z)("col",L.lastUpdated),children:(t||n)&&(0,r.jsx)(O,{lastUpdatedAt:t,formattedLastUpdatedAt:o,lastUpdatedBy:n})})]})}function M(){const{metadata:e}=i(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:o,lastUpdatedBy:a,tags:s}=e,l=s.length>0,c=!!(t||n||a);return l||c?(0,r.jsxs)("footer",{className:(0,u.Z)(j.k.docs.docFooter,"docusaurus-mt-lg"),children:[l&&(0,r.jsx)(S,{tags:s}),c&&(0,r.jsx)(A,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:a,formattedLastUpdatedAt:o})]}):null}var H=n(16151),I=n(46344);const F={tocCollapsibleButton:"tocCollapsibleButton_iI2p",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_cHjC"};function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function G(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function W(e){var{collapsed:t}=e,n=G(e,["collapsed"]);return(0,r.jsx)("button",z(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){R(e,t,n[t])}))}return e}({type:"button"},n),{className:(0,u.Z)("clean-btn",F.tocCollapsibleButton,!t&&F.tocCollapsibleButtonExpanded,n.className),children:(0,r.jsx)(g.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})}))}const q={tocCollapsible:"tocCollapsible_wXna",tocCollapsibleContent:"tocCollapsibleContent_vea0",tocCollapsibleExpanded:"tocCollapsibleExpanded_BbRn"};function Q({toc:e,className:t,minHeadingLevel:n,maxHeadingLevel:o}){const{collapsed:a,toggleCollapsed:s}=(0,H.u)({initialState:!0});return(0,r.jsxs)("div",{className:(0,u.Z)(q.tocCollapsible,!a&&q.tocCollapsibleExpanded,t),children:[(0,r.jsx)(W,{collapsed:a,onClick:s}),(0,r.jsx)(H.z,{lazy:!0,className:q.tocCollapsibleContent,collapsed:a,children:(0,r.jsx)(I.Z,{toc:e,minHeadingLevel:n,maxHeadingLevel:o})})]})}const X={tocMobile:"tocMobile_Ojys"};function $(){const{toc:e,frontMatter:t}=i();return(0,r.jsx)(Q,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.Z)(j.k.docs.docTocMobile,X.tocMobile)})}var J=n(67093);function K(){const{toc:e,frontMatter:t}=i();return(0,r.jsx)(J.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:j.k.docs.docTocDesktop})}var V=n(18996),Y=n(27193);function ee({children:e}){const t=function(){const{metadata:e,frontMatter:t,contentTitle:n}=i();return t.hide_title||void 0!==n?null:e.title}();return(0,r.jsxs)("div",{className:(0,u.Z)(j.k.docs.docMarkdown,"markdown"),children:[t&&(0,r.jsx)("header",{children:(0,r.jsx)(V.Z,{as:"h1",children:t})}),(0,r.jsx)(Y.Z,{children:e})]})}var te=n(57856),ne=n(70540);const re={docItemContainer:"docItemContainer_tjFy",docItemCol:"docItemCol_Qr34"};function oe({children:e}){const t=function(){const{frontMatter:e,toc:t}=i(),n=(0,p.i)(),o=e.hide_table_of_contents,a=!o&&t.length>0;return{hidden:o,mobile:a?(0,r.jsx)($,{}):void 0,desktop:!a||"desktop"!==n&&"ssr"!==n?void 0:(0,r.jsx)(K,{})}}(),{metadata:{unlisted:n}}=i();return(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:(0,u.Z)("col",!t.hidden&&re.docItemCol),children:[n&&(0,r.jsx)(ne.Z,{}),(0,r.jsx)(f.Z,{}),(0,r.jsxs)("div",{className:re.docItemContainer,children:[(0,r.jsxs)("article",{children:[(0,r.jsx)(te.Z,{}),(0,r.jsx)(h.Z,{}),t.mobile,(0,r.jsx)(ee,{children:e}),(0,r.jsx)(M,{})]}),(0,r.jsx)(m,{})]})]}),t.desktop&&(0,r.jsx)("div",{className:"col col--3",children:t.desktop})]})}function ae(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,r.jsx)(c,{content:e.content,children:(0,r.jsxs)(a.FG,{className:t,children:[(0,r.jsx)(d,{}),(0,r.jsx)(oe,{children:(0,r.jsx)(n,{})})]})})}}}]);