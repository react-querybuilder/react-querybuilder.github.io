(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[45567],{19934:(e,t)=>{function r(e){let t,r=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))r.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,o,c]=t;if(n&&c){n=parseInt(n),c=parseInt(c);const e=n<c?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(c+=e);for(let t=n;t!==c;t+=e)r.push(t)}}return r}t.default=r,e.exports=r},45567:(e,t,r)=>{"use strict";r.d(t,{A:()=>ne});var n=r(62540),o=r(63696),c=r(20373),s=r(12689),a=r(64871),l=r(70824);function i(){const{prism:e}=(0,l.p)(),{colorMode:t}=(0,a.G)(),r=e.theme,n=e.darkTheme||r;return"dark"===t?n:r}var u=r(2545),b=r(19934),p=r.n(b);function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const d=RegExp("title=(?<quote>[\"'])(?<title>.*?)\\1"),m=RegExp("\\{(?<range>[\\d,-]+)\\}"),y={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},O=(g=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){f(e,t,r[t])}))}return e}({},y),j=null!=(j={lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}})?j:{},Object.getOwnPropertyDescriptors?Object.defineProperties(g,Object.getOwnPropertyDescriptors(j)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(j)).forEach((function(e){Object.defineProperty(g,e,Object.getOwnPropertyDescriptor(j,e))})),g);var g,j;const h=Object.keys(y);function w(e,t){const r=e.map((e=>{const{start:r,end:n}=O[e];return`(?:${r}\\s*(${t.flatMap((e=>{var t,r;return[e.line,null===(t=e.block)||void 0===t?void 0:t.start,null===(r=e.block)||void 0===r?void 0:r.end].filter(Boolean)})).join("|")})\\s*${n})`})).join("|");return new RegExp(`^\\s*(?:${r})\\s*$`)}function v(e,t){let r=e.replace(/\n$/,"");const{language:n,magicComments:o,metastring:c}=t;if(c&&m.test(c)){const e=c.match(m).groups.range;if(0===o.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${c}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=o[0].className,n=p()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(n),code:r}}if(void 0===n)return{lineClassNames:{},code:r};const s=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return w(["js","jsBlock"],t);case"jsx":case"tsx":return w(["js","jsBlock","jsx"],t);case"html":return w(["js","jsBlock","html"],t);case"python":case"py":case"bash":return w(["bash"],t);case"markdown":case"md":return w(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return w(["tex"],t);case"lua":case"haskell":case"sql":return w(["lua"],t);case"wasm":return w(["wasm"],t);case"vb":case"vba":case"visual-basic":return w(["vb","rem"],t);case"vbnet":return w(["vbnet","rem"],t);case"batch":return w(["rem"],t);case"basic":return w(["rem","f90"],t);case"fsharp":return w(["js","ml"],t);case"ocaml":case"sml":return w(["ml"],t);case"fortran":return w(["f90"],t);case"cobol":return w(["cobol"],t);default:return w(h,t)}}(n,o),a=r.split("\n"),l=Object.fromEntries(o.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(o.filter((e=>e.line)).map((({className:e,line:t})=>[t,e]))),u=Object.fromEntries(o.filter((e=>e.block)).map((({className:e,block:t})=>[t.start,e]))),b=Object.fromEntries(o.filter((e=>e.block)).map((({className:e,block:t})=>[t.end,e])));for(let p=0;p<a.length;){const e=a[p].match(s);if(!e){p+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?l[i[t]].range+=`${p},`:u[t]?l[u[t]].start=p:b[t]&&(l[b[t]].range+=`${l[b[t]].start}-${p-1},`),a.splice(p,1)}r=a.join("\n");const f={};return Object.entries(l).forEach((([e,{range:t}])=>{p()(t).forEach((t=>{var r,n,o;null!==(o=(r=f)[n=t])&&void 0!==o||(r[n]=[]),f[t].push(e)}))})),{lineClassNames:f,code:r}}const P={codeBlockContainer:"codeBlockContainer_mQmQ"};function k(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function x(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function B(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function E(e){var{as:t}=e,r=B(e,["as"]);const o=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},r={};return Object.entries(e.plain).forEach((([e,n])=>{const o=t[e];o&&"string"==typeof n&&(r[o]=n)})),r}(i());return(0,n.jsx)(t,x(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){k(e,t,r[t])}))}return e}({},r),{style:o,className:(0,s.A)(r.className,P.codeBlockContainer,u.G.common.codeBlock)}))}const S={codeBlockContent:"codeBlockContent_D5yF",codeBlockTitle:"codeBlockTitle_x_ju",codeBlock:"codeBlock_RMoD",codeBlockStandalone:"codeBlockStandalone_wQog",codeBlockLines:"codeBlockLines_AclH",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_O625",buttonGroup:"buttonGroup_aaMX"};function N({children:e,className:t}){return(0,n.jsx)(E,{as:"pre",tabIndex:0,className:(0,s.A)(S.codeBlockStandalone,"thin-scrollbar",t),children:(0,n.jsx)("code",{className:S.codeBlockLines,children:e})})}var C=r(41594);const D={attributes:!0,characterData:!0,childList:!0,subtree:!0};function L(e,t){const[r,n]=(0,o.useState)(),c=(0,o.useCallback)((()=>{var t;n(null===(t=e.current)||void 0===t?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,n]);(0,o.useEffect)((()=>{c()}),[c]),function(e,t,r=D){const n=(0,C._q)(t),c=(0,C.Be)(r);(0,o.useEffect)((()=>{const t=new MutationObserver(n);return e&&t.observe(e,c),()=>t.disconnect()}),[e,n,c])}(r,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),c())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var A=r(13915);const T={codeLine:"codeLine_FAqz",codeLineNumber:"codeLineNumber_BE9Z",codeLineContent:"codeLineContent_EF2y"};function I(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){I(e,t,r[t])}))}return e}function $(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function R({line:e,classNames:t,showLineNumbers:r,getLineProps:o,getTokenProps:c}){1===e.length&&"\n"===e[0].content&&(e[0].content="");const a=o({line:e,className:(0,s.A)(t,r&&T.codeLine)}),l=e.map(((e,t)=>(0,n.jsx)("span",_({},c({token:e})),t)));return(0,n.jsxs)("span",$(_({},a),{children:[r?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:T.codeLineNumber}),(0,n.jsx)("span",{className:T.codeLineContent,children:l})]}):l,(0,n.jsx)("br",{})]}))}var W=r(50524);function H(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function M(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function z(e){return(0,n.jsx)("svg",M(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){H(e,t,r[t])}))}return e}({viewBox:"0 0 24 24"},e),{children:(0,n.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})}))}function V(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function q(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function F(e){return(0,n.jsx)("svg",q(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){V(e,t,r[t])}))}return e}({viewBox:"0 0 24 24"},e),{children:(0,n.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})}))}const G={copyButtonCopied:"copyButtonCopied_TYdd",copyButtonIcons:"copyButtonIcons_z5j7",copyButtonIcon:"copyButtonIcon_FoOz",copyButtonSuccessIcon:"copyButtonSuccessIcon_L0B6"};function Q({code:e,className:t}){const[r,c]=(0,o.useState)(!1),a=(0,o.useRef)(void 0),l=(0,o.useCallback)((()=>{!function(e,{target:t=document.body}={}){if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const r=document.createElement("textarea"),n=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";const o=document.getSelection(),c=o.rangeCount>0&&o.getRangeAt(0);t.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch(a){}r.remove(),c&&(o.removeAllRanges(),o.addRange(c)),n&&n.focus()}(e),c(!0),a.current=window.setTimeout((()=>{c(!1)}),1e3)}),[e]);return(0,o.useEffect)((()=>()=>window.clearTimeout(a.current)),[]),(0,n.jsx)("button",{type:"button","aria-label":r?(0,W.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,W.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,W.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,s.A)("clean-btn",t,G.copyButton,r&&G.copyButtonCopied),onClick:l,children:(0,n.jsxs)("span",{className:G.copyButtonIcons,"aria-hidden":"true",children:[(0,n.jsx)(z,{className:G.copyButtonIcon}),(0,n.jsx)(F,{className:G.copyButtonSuccessIcon})]})})}function Z(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function X(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function Y(e){return(0,n.jsx)("svg",X(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){Z(e,t,r[t])}))}return e}({viewBox:"0 0 24 24"},e),{children:(0,n.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})}))}const J={wordWrapButtonIcon:"wordWrapButtonIcon_HV9T",wordWrapButtonEnabled:"wordWrapButtonEnabled_XzR1"};function K({className:e,onClick:t,isEnabled:r}){const o=(0,W.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,n.jsx)("button",{type:"button",onClick:t,className:(0,s.A)("clean-btn",e,r&&J.wordWrapButtonEnabled),"aria-label":o,title:o,children:(0,n.jsx)(Y,{className:J.wordWrapButtonIcon,"aria-hidden":"true"})})}function U({children:e,className:t="",metastring:r,title:c,showLineNumbers:a,language:u}){const{prism:{defaultLanguage:b,magicComments:p}}=(0,l.p)();var f;const m=function(e){return null==e?void 0:e.toLowerCase()}(null!==(f=null!=u?u:function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return null==t?void 0:t.replace(/language-/,"")}(t))&&void 0!==f?f:b),y=i(),O=function(){const[e,t]=(0,o.useState)(!1),[r,n]=(0,o.useState)(!1),c=(0,o.useRef)(null),s=(0,o.useCallback)((()=>{const r=c.current.querySelector("code");e?r.removeAttribute("style"):(r.style.whiteSpace="pre-wrap",r.style.overflowWrap="anywhere"),t((e=>!e))}),[c,e]),a=(0,o.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=c.current,r=e>t||c.current.querySelector("code").hasAttribute("style");n(r)}),[c]);return L(c,a),(0,o.useEffect)((()=>{a()}),[e,a]),(0,o.useEffect)((()=>(window.addEventListener("resize",a,{passive:!0}),()=>{window.removeEventListener("resize",a)})),[a]),{codeBlockRef:c,isEnabled:e,isCodeScrollable:r,toggle:s}}(),g=function(e){var t,r;return null!==(r=null==e||null===(t=e.match(d))||void 0===t?void 0:t.groups.title)&&void 0!==r?r:""}(r)||c,{lineClassNames:j,code:h}=v(e,{metastring:r,language:m,magicComments:p}),w=null!=a?a:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(r);return(0,n.jsxs)(E,{as:"div",className:(0,s.A)(t,m&&!t.includes(`language-${m}`)&&`language-${m}`),children:[g&&(0,n.jsx)("div",{className:S.codeBlockTitle,children:g}),(0,n.jsxs)("div",{className:S.codeBlockContent,children:[(0,n.jsx)(A.f4,{theme:y,code:h,language:null!=m?m:"text",children:({className:e,style:t,tokens:r,getLineProps:o,getTokenProps:c})=>(0,n.jsx)("pre",{tabIndex:0,ref:O.codeBlockRef,className:(0,s.A)(e,S.codeBlock,"thin-scrollbar"),style:t,children:(0,n.jsx)("code",{className:(0,s.A)(S.codeBlockLines,w&&S.codeBlockLinesWithNumbering),children:r.map(((e,t)=>(0,n.jsx)(R,{line:e,getLineProps:o,getTokenProps:c,classNames:j[t],showLineNumbers:w},t)))})})}),(0,n.jsxs)("div",{className:S.buttonGroup,children:[(O.isEnabled||O.isCodeScrollable)&&(0,n.jsx)(K,{className:S.codeButton,onClick:()=>O.toggle(),isEnabled:O.isEnabled}),(0,n.jsx)(Q,{className:S.codeButton,code:h})]})]})]})}function ee(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function te(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function re(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function ne(e){var{children:t}=e,r=re(e,["children"]);const s=(0,c.A)(),a=function(e){return o.Children.toArray(e).some((e=>(0,o.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),l="string"==typeof a?U:N;return(0,n.jsx)(l,te(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){ee(e,t,r[t])}))}return e}({},r),{children:a}),String(s))}}}]);