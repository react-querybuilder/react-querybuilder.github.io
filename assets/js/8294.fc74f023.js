/*! For license information please see 8294.fc74f023.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8294],{48294:(e,t,r)=>{r.d(t,{C:()=>k,_:()=>a,a:()=>$,b:()=>it,c:()=>y,d:()=>g,e:()=>i,f:()=>p,g:()=>w,h:()=>b,i:()=>c,j:()=>ze,k:()=>S,l:()=>f,m:()=>Ft,n:()=>l,o:()=>u,p:()=>_e,r:()=>It,s:()=>Gt,t:()=>Ve,u:()=>Ht,v:()=>Bt,w:()=>st,x:()=>at});var n=r(16829),o=(r(93794),r(67294));function i(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&(o[r]=e[r]);return o}function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function s(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=s(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function p(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=s(e))&&(n&&(n+=" "),n+=t);return n}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function f(e){return null!==e&&"object"==typeof e&&e.constructor===Object}function u(e,t,r={clone:!0}){const n=r.clone?c({},e):e;return f(e)&&f(t)&&Object.keys(t).forEach((o=>{"__proto__"!==o&&(f(t[o])&&o in e&&f(e[o])?n[o]=u(e[o],t[o],r):n[o]=t[o])})),n}function l(e){let t="https://mui.com/production-error/?code="+e;for(let r=1;r<arguments.length;r+=1)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}var d,m={exports:{}},h={};m.exports=function(){if(d)return h;d=1;var e,t=Symbol.for("react.element"),r=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),s=Symbol.for("react.context"),p=Symbol.for("react.server_context"),c=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),u=Symbol.for("react.suspense_list"),l=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),y=Symbol.for("react.offscreen");function g(e){if("object"==typeof e&&null!==e){var d=e.$$typeof;switch(d){case t:switch(e=e.type){case n:case i:case o:case f:case u:return e;default:switch(e=e&&e.$$typeof){case p:case s:case c:case m:case l:case a:return e;default:return d}}case r:return d}}}return e=Symbol.for("react.module.reference"),h.ContextConsumer=s,h.ContextProvider=a,h.Element=t,h.ForwardRef=c,h.Fragment=n,h.Lazy=m,h.Memo=l,h.Portal=r,h.Profiler=i,h.StrictMode=o,h.Suspense=f,h.SuspenseList=u,h.isAsyncMode=function(){return!1},h.isConcurrentMode=function(){return!1},h.isContextConsumer=function(e){return g(e)===s},h.isContextProvider=function(e){return g(e)===a},h.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},h.isForwardRef=function(e){return g(e)===c},h.isFragment=function(e){return g(e)===n},h.isLazy=function(e){return g(e)===m},h.isMemo=function(e){return g(e)===l},h.isPortal=function(e){return g(e)===r},h.isProfiler=function(e){return g(e)===i},h.isStrictMode=function(e){return g(e)===o},h.isSuspense=function(e){return g(e)===f},h.isSuspenseList=function(e){return g(e)===u},h.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===n||t===i||t===o||t===f||t===u||t===y||"object"==typeof t&&null!==t&&(t.$$typeof===m||t.$$typeof===l||t.$$typeof===a||t.$$typeof===s||t.$$typeof===c||t.$$typeof===e||void 0!==t.getModuleId)},h.typeOf=g,h}();function y(e){if("string"!=typeof e)throw new Error(l(7));return e.charAt(0).toUpperCase()+e.slice(1)}function g(e,t){const r=c({},t);return Object.keys(e).forEach((t=>{void 0===r[t]&&(r[t]=e[t])})),r}function b(e,t,r){const n={};return Object.keys(e).forEach((o=>{n[o]=e[o].reduce(((e,n)=>(n&&(e.push(t(n)),r&&r[n]&&e.push(r[n])),e)),[]).join(" ")})),n}const x=e=>e,v=(()=>{let e=x;return{configure(t){e=t},generate:t=>e(t),reset(){e=x}}})(),k=v,O={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",required:"required",selected:"selected"};function w(e,t,r="Mui"){const n=O[t];return n?`${r}-${n}`:`${k.generate(e)}-${t}`}function $(e,t,r="Mui"){const n={};return t.forEach((t=>{n[t]=w(e,t,r)})),n}function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},S.apply(this,arguments)}function A(e,t){return t?u(e,t,{clone:!1}):e}const j={xs:0,sm:600,md:900,lg:1200,xl:1536},P={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${j[e]}px)`};function R(e,t,r){const n=e.theme||{};if(Array.isArray(t)){const e=n.breakpoints||P;return t.reduce(((n,o,i)=>(n[e.up(e.keys[i])]=r(t[i]),n)),{})}if("object"==typeof t){const e=n.breakpoints||P;return Object.keys(t).reduce(((n,o)=>{if(-1!==Object.keys(e.values||j).indexOf(o)){n[e.up(o)]=r(t[o],o)}else{const e=o;n[e]=t[e]}return n}),{})}return r(t)}function C(e,t,r=!0){if(!t||"string"!=typeof t)return null;if(e&&e.vars&&r){const r=`vars.${t}`.split(".").reduce(((e,t)=>e&&e[t]?e[t]:null),e);if(null!=r)return r}return t.split(".").reduce(((e,t)=>e&&null!=e[t]?e[t]:null),e)}function T(e,t,r,n=r){let o;return o="function"==typeof e?e(r):Array.isArray(e)?e[r]||n:C(e,r)||n,t&&(o=t(o)),o}function _(e){const{prop:t,cssProperty:r=e.prop,themeKey:n,transform:o}=e,i=e=>{if(null==e[t])return null;const i=e[t],a=C(e.theme,n)||{};return R(e,i,(e=>{let n=T(a,o,e);return e===n&&"string"==typeof e&&(n=T(a,o,`${t}${"default"===e?"":y(e)}`,e)),!1===r?n:{[r]:n}}))};return i.propTypes={},i.filterProps=[t],i}function M(...e){const t=e.reduce(((e,t)=>(t.filterProps.forEach((r=>{e[r]=t})),e)),{}),r=e=>Object.keys(e).reduce(((r,n)=>t[n]?A(r,t[n](e)):r),{});return r.propTypes={},r.filterProps=e.reduce(((e,t)=>e.concat(t.filterProps)),[]),r}const E={m:"margin",p:"padding"},z={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},K={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},W=function(e){const t={};return r=>(void 0===t[r]&&(t[r]=e(r)),t[r])}((e=>{if(e.length>2){if(!K[e])return[e];e=K[e]}const[t,r]=e.split(""),n=E[t],o=z[r]||"";return Array.isArray(o)?o.map((e=>n+e)):[n+o]})),F=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd","p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];function I(e,t,r,n){var o;const i=null!=(o=C(e,t,!1))?o:r;return"number"==typeof i?e=>"string"==typeof e?e:i*e:Array.isArray(i)?e=>"string"==typeof e?e:i[e]:"function"==typeof i?i:()=>{}}function B(e){return I(e,"spacing",8)}function L(e,t){if("string"==typeof t||null==t)return t;const r=e(Math.abs(t));return t>=0?r:"number"==typeof r?-r:`-${r}`}function G(e,t,r,n){if(-1===t.indexOf(r))return null;const o=function(e,t){return r=>e.reduce(((e,n)=>(e[n]=L(t,r),e)),{})}(W(r),n);return R(e,e[r],o)}function H(e){return function(e,t){const r=B(e.theme);return Object.keys(e).map((n=>G(e,t,n,r))).reduce(A,{})}(e,F)}function V(e){return"number"!=typeof e?e:`${e}px solid`}H.propTypes={},H.filterProps=F;const X=_({prop:"border",themeKey:"borders",transform:V}),Y=_({prop:"borderTop",themeKey:"borders",transform:V}),D=_({prop:"borderRight",themeKey:"borders",transform:V}),U=_({prop:"borderBottom",themeKey:"borders",transform:V}),q=_({prop:"borderLeft",themeKey:"borders",transform:V}),N=_({prop:"borderColor",themeKey:"palette"}),J=_({prop:"borderTopColor",themeKey:"palette"}),Z=_({prop:"borderRightColor",themeKey:"palette"}),Q=_({prop:"borderBottomColor",themeKey:"palette"}),ee=_({prop:"borderLeftColor",themeKey:"palette"}),te=e=>{if(void 0!==e.borderRadius&&null!==e.borderRadius){const t=I(e.theme,"shape.borderRadius",4),r=e=>({borderRadius:L(t,e)});return R(e,e.borderRadius,r)}return null};te.propTypes={},te.filterProps=["borderRadius"];const re=M(X,Y,D,U,q,N,J,Z,Q,ee,te),ne=_({prop:"displayPrint",cssProperty:!1,transform:e=>({"@media print":{display:e}})}),oe=M(ne,_({prop:"display"}),_({prop:"overflow"}),_({prop:"textOverflow"}),_({prop:"visibility"}),_({prop:"whiteSpace"})),ie=M(_({prop:"flexBasis"}),_({prop:"flexDirection"}),_({prop:"flexWrap"}),_({prop:"justifyContent"}),_({prop:"alignItems"}),_({prop:"alignContent"}),_({prop:"order"}),_({prop:"flex"}),_({prop:"flexGrow"}),_({prop:"flexShrink"}),_({prop:"alignSelf"}),_({prop:"justifyItems"}),_({prop:"justifySelf"})),ae=e=>{if(void 0!==e.gap&&null!==e.gap){const t=I(e.theme,"spacing",8),r=e=>({gap:L(t,e)});return R(e,e.gap,r)}return null};ae.propTypes={},ae.filterProps=["gap"];const se=e=>{if(void 0!==e.columnGap&&null!==e.columnGap){const t=I(e.theme,"spacing",8),r=e=>({columnGap:L(t,e)});return R(e,e.columnGap,r)}return null};se.propTypes={},se.filterProps=["columnGap"];const pe=e=>{if(void 0!==e.rowGap&&null!==e.rowGap){const t=I(e.theme,"spacing",8),r=e=>({rowGap:L(t,e)});return R(e,e.rowGap,r)}return null};pe.propTypes={},pe.filterProps=["rowGap"];const ce=M(ae,se,pe,_({prop:"gridColumn"}),_({prop:"gridRow"}),_({prop:"gridAutoFlow"}),_({prop:"gridAutoColumns"}),_({prop:"gridAutoRows"}),_({prop:"gridTemplateColumns"}),_({prop:"gridTemplateRows"}),_({prop:"gridTemplateAreas"}),_({prop:"gridArea"})),fe=M(_({prop:"color",themeKey:"palette"}),_({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"}),_({prop:"backgroundColor",themeKey:"palette"})),ue=M(_({prop:"position"}),_({prop:"zIndex",themeKey:"zIndex"}),_({prop:"top"}),_({prop:"right"}),_({prop:"bottom"}),_({prop:"left"})),le=_({prop:"boxShadow",themeKey:"shadows"});function de(e){return e<=1&&0!==e?100*e+"%":e}const me=_({prop:"width",transform:de}),he=e=>{if(void 0!==e.maxWidth&&null!==e.maxWidth){const t=t=>{var r,n,o;return{maxWidth:(null==(r=e.theme)||null==(n=r.breakpoints)||null==(o=n.values)?void 0:o[t])||j[t]||de(t)}};return R(e,e.maxWidth,t)}return null};he.filterProps=["maxWidth"];const ye=_({prop:"minWidth",transform:de}),ge=_({prop:"height",transform:de}),be=_({prop:"maxHeight",transform:de}),xe=_({prop:"minHeight",transform:de});_({prop:"size",cssProperty:"width",transform:de}),_({prop:"size",cssProperty:"height",transform:de});const ve=M(me,he,ye,ge,be,xe,_({prop:"boxSizing"})),ke=_({prop:"fontFamily",themeKey:"typography"}),Oe=_({prop:"fontSize",themeKey:"typography"}),we=_({prop:"fontStyle",themeKey:"typography"}),$e=_({prop:"fontWeight",themeKey:"typography"}),Se=_({prop:"letterSpacing"}),Ae=_({prop:"textTransform"}),je=_({prop:"lineHeight"}),Pe=_({prop:"textAlign"}),Re=M(_({prop:"typography",cssProperty:!1,themeKey:"typography"}),ke,Oe,we,$e,Se,je,Pe,Ae),Ce={borders:re.filterProps,display:oe.filterProps,flexbox:ie.filterProps,grid:ce.filterProps,positions:ue.filterProps,palette:fe.filterProps,shadows:le.filterProps,sizing:ve.filterProps,spacing:H.filterProps,typography:Re.filterProps},Te={borders:re,display:oe,flexbox:ie,grid:ce,positions:ue,palette:fe,shadows:le,sizing:ve,spacing:H,typography:Re},_e=Object.keys(Ce).reduce(((e,t)=>(Ce[t].forEach((r=>{e[r]=Te[t]})),e)),{});const Me=function(e=Te){const t=Object.keys(e).reduce(((t,r)=>(e[r].filterProps.forEach((n=>{t[n]=e[r]})),t)),{});function r(e,r,n){const o={[e]:r,theme:n},i=t[e];return i?i(o):{[e]:r}}return function e(n){const{sx:o,theme:i={}}=n||{};if(!o)return null;function a(n){let o=n;if("function"==typeof n)o=n(i);else if("object"!=typeof n)return n;if(!o)return null;const a=function(e={}){var t;return(null==(t=e.keys)?void 0:t.reduce(((t,r)=>(t[e.up(r)]={},t)),{}))||{}}(i.breakpoints),s=Object.keys(a);let p=a;return Object.keys(o).forEach((n=>{const a=function(e,t){return"function"==typeof e?e(t):e}(o[n],i);if(null!=a)if("object"==typeof a)if(t[n])p=A(p,r(n,a,i));else{const t=R({theme:i},a,(e=>({[n]:e})));!function(...e){const t=e.reduce(((e,t)=>e.concat(Object.keys(t))),[]),r=new Set(t);return e.every((e=>r.size===Object.keys(e).length))}(t,a)?p=A(p,t):p[n]=e({sx:a,theme:i})}else p=A(p,r(n,a,i))})),function(e,t){return e.reduce(((e,t)=>{const r=e[t];return(!r||0===Object.keys(r).length)&&delete e[t],e}),t)}(s,p)}return Array.isArray(o)?o.map(a):a(o)}}();Me.filterProps=["sx"];const Ee=Me;function ze(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&(o[r]=e[r]);return o}const Ke=["values","unit","step"];function We(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:r="px",step:n=5}=e,o=ze(e,Ke),i=(e=>{const t=Object.keys(e).map((t=>({key:t,val:e[t]})))||[];return t.sort(((e,t)=>e.val-t.val)),t.reduce(((e,t)=>S({},e,{[t.key]:t.val})),{})})(t),a=Object.keys(i);function s(e){return`@media (min-width:${"number"==typeof t[e]?t[e]:e}${r})`}function p(e){return`@media (max-width:${("number"==typeof t[e]?t[e]:e)-n/100}${r})`}function c(e,o){const i=a.indexOf(o);return`@media (min-width:${"number"==typeof t[e]?t[e]:e}${r}) and (max-width:${(-1!==i&&"number"==typeof t[a[i]]?t[a[i]]:o)-n/100}${r})`}return S({keys:a,values:i,up:s,down:p,between:c,only:function(e){return a.indexOf(e)+1<a.length?c(e,a[a.indexOf(e)+1]):s(e)},not:function(e){const t=a.indexOf(e);return 0===t?s(a[1]):t===a.length-1?p(a[t]):c(e,a[a.indexOf(e)+1]).replace("@media","@media not all and")},unit:r},o)}const Fe={borderRadius:4};const Ie=["breakpoints","palette","spacing","shape"];function Be(e={},...t){const{breakpoints:r={},palette:n={},spacing:o,shape:i={}}=e,a=ze(e,Ie),s=We(r),p=function(e=8){if(e.mui)return e;const t=B({spacing:e}),r=(...e)=>(0===e.length?[1]:e).map((e=>{const r=t(e);return"number"==typeof r?`${r}px`:r})).join(" ");return r.mui=!0,r}(o);let c=u({breakpoints:s,direction:"ltr",components:{},palette:S({mode:"light"},n),spacing:p,shape:S({},Fe,i)},a);return c=t.reduce(((e,t)=>u(e,t)),c),c}const Le=o.createContext(null);function Ge(e=null){const t=o.useContext(Le);return!t||function(e){return 0===Object.keys(e).length}(t)?e:t}const He=Be();function Ve(e=He){return Ge(e)}const Xe=["variant"];function Ye(e){return 0===e.length}function De(e){const{variant:t}=e,r=ze(e,Xe);let n=t||"";return Object.keys(r).sort().forEach((t=>{n+="color"===t?Ye(n)?e[t]:y(e[t]):`${Ye(n)?t:y(t)}${y(e[t].toString())}`})),n}const Ue=["name","slot","skipVariantsResolver","skipSx","overridesResolver"],qe=["theme"],Ne=["theme"];function Je(e){return 0===Object.keys(e).length}function Ze(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}const Qe=Be();function et({props:e,name:t,defaultTheme:r}){return function(e){const{theme:t,name:r,props:n}=e;return t&&t.components&&t.components[r]&&t.components[r].defaultProps?g(t.components[r].defaultProps,n):n}({theme:Ve(r),name:t,props:e})}function tt(e,t=0,r=1){return Math.min(Math.max(t,e),r)}function rt(e){if(e.type)return e;if("#"===e.charAt(0))return rt(function(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let r=e.match(t);return r&&1===r[0].length&&(r=r.map((e=>e+e))),r?`rgb${4===r.length?"a":""}(${r.map(((e,t)=>t<3?parseInt(e,16):Math.round(parseInt(e,16)/255*1e3)/1e3)).join(", ")})`:""}(e));const t=e.indexOf("("),r=e.substring(0,t);if(-1===["rgb","rgba","hsl","hsla","color"].indexOf(r))throw new Error(l(9,e));let n,o=e.substring(t+1,e.length-1);if("color"===r){if(o=o.split(" "),n=o.shift(),4===o.length&&"/"===o[3].charAt(0)&&(o[3]=o[3].slice(1)),-1===["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(n))throw new Error(l(10,n))}else o=o.split(",");return o=o.map((e=>parseFloat(e))),{type:r,values:o,colorSpace:n}}function nt(e){const{type:t,colorSpace:r}=e;let{values:n}=e;return-1!==t.indexOf("rgb")?n=n.map(((e,t)=>t<3?parseInt(e,10):e)):-1!==t.indexOf("hsl")&&(n[1]=`${n[1]}%`,n[2]=`${n[2]}%`),n=-1!==t.indexOf("color")?`${r} ${n.join(" ")}`:`${n.join(", ")}`,`${t}(${n})`}function ot(e){let t="hsl"===(e=rt(e)).type?rt(function(e){e=rt(e);const{values:t}=e,r=t[0],n=t[1]/100,o=t[2]/100,i=n*Math.min(o,1-o),a=(e,t=(e+r/30)%12)=>o-i*Math.max(Math.min(t-3,9-t,1),-1);let s="rgb";const p=[Math.round(255*a(0)),Math.round(255*a(8)),Math.round(255*a(4))];return"hsla"===e.type&&(s+="a",p.push(t[3])),nt({type:s,values:p})}(e)).values:e.values;return t=t.map((t=>("color"!==e.type&&(t/=255),t<=.03928?t/12.92:((t+.055)/1.055)**2.4))),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function it(e,t){return e=rt(e),t=tt(t),("rgb"===e.type||"hsl"===e.type)&&(e.type+="a"),"color"===e.type?e.values[3]=`/${t}`:e.values[3]=t,nt(e)}function at(e,t){if(e=rt(e),t=tt(t),-1!==e.type.indexOf("hsl"))e.values[2]*=1-t;else if(-1!==e.type.indexOf("rgb")||-1!==e.type.indexOf("color"))for(let r=0;r<3;r+=1)e.values[r]*=1-t;return nt(e)}function st(e,t){if(e=rt(e),t=tt(t),-1!==e.type.indexOf("hsl"))e.values[2]+=(100-e.values[2])*t;else if(-1!==e.type.indexOf("rgb"))for(let r=0;r<3;r+=1)e.values[r]+=(255-e.values[r])*t;else if(-1!==e.type.indexOf("color"))for(let r=0;r<3;r+=1)e.values[r]+=(1-e.values[r])*t;return nt(e)}function pt(e,t){return a({toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}}},t)}const ct={black:"#000",white:"#fff"},ft={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},ut={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},lt={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},dt={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},mt={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},ht={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},yt={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},gt=["mode","contrastThreshold","tonalOffset"],bt={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:ct.white,default:ct.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},xt={text:{primary:ct.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:ct.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function vt(e,t,r,n){const o=n.light||n,i=n.dark||1.5*n;e[t]||(e.hasOwnProperty(r)?e[t]=e[r]:"light"===t?e.light=st(e.main,o):"dark"===t&&(e.dark=at(e.main,i)))}function kt(e){const{mode:t="light",contrastThreshold:r=3,tonalOffset:n=.2}=e,o=i(e,gt),s=e.primary||function(e="light"){return"dark"===e?{main:mt[200],light:mt[50],dark:mt[400]}:{main:mt[700],light:mt[400],dark:mt[800]}}(t),p=e.secondary||function(e="light"){return"dark"===e?{main:ut[200],light:ut[50],dark:ut[400]}:{main:ut[500],light:ut[300],dark:ut[700]}}(t),c=e.error||function(e="light"){return"dark"===e?{main:lt[500],light:lt[300],dark:lt[700]}:{main:lt[700],light:lt[400],dark:lt[800]}}(t),f=e.info||function(e="light"){return"dark"===e?{main:ht[400],light:ht[300],dark:ht[700]}:{main:ht[700],light:ht[500],dark:ht[900]}}(t),d=e.success||function(e="light"){return"dark"===e?{main:yt[400],light:yt[300],dark:yt[700]}:{main:yt[800],light:yt[500],dark:yt[900]}}(t),m=e.warning||function(e="light"){return"dark"===e?{main:dt[400],light:dt[300],dark:dt[700]}:{main:"#ed6c02",light:dt[500],dark:dt[900]}}(t);function h(e){const t=function(e,t){const r=ot(e),n=ot(t);return(Math.max(r,n)+.05)/(Math.min(r,n)+.05)}(e,xt.text.primary)>=r?xt.text.primary:bt.text.primary;return t}const y=({color:e,name:t,mainShade:r=500,lightShade:o=300,darkShade:i=700})=>{if(!(e=a({},e)).main&&e[r]&&(e.main=e[r]),!e.hasOwnProperty("main"))throw new Error(l(11,t?` (${t})`:"",r));if("string"!=typeof e.main)throw new Error(l(12,t?` (${t})`:"",JSON.stringify(e.main)));return vt(e,"light",o,n),vt(e,"dark",i,n),e.contrastText||(e.contrastText=h(e.main)),e},g={dark:xt,light:bt};return u(a({common:a({},ct),mode:t,primary:y({color:s,name:"primary"}),secondary:y({color:p,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:y({color:c,name:"error"}),warning:y({color:m,name:"warning"}),info:y({color:f,name:"info"}),success:y({color:d,name:"success"}),grey:ft,contrastThreshold:r,getContrastText:h,augmentColor:y,tonalOffset:n},g[t]),o)}const Ot=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function wt(e){return Math.round(1e5*e)/1e5}const $t={textTransform:"uppercase"},St='"Roboto", "Helvetica", "Arial", sans-serif';function At(e,t){const r="function"==typeof t?t(e):t,{fontFamily:n=St,fontSize:o=14,fontWeightLight:s=300,fontWeightRegular:p=400,fontWeightMedium:c=500,fontWeightBold:f=700,htmlFontSize:l=16,allVariants:d,pxToRem:m}=r,h=i(r,Ot),y=o/14,g=m||(e=>e/l*y+"rem"),b=(e,t,r,o,i)=>a({fontFamily:n,fontWeight:e,fontSize:g(t),lineHeight:r},n===St?{letterSpacing:`${wt(o/t)}em`}:{},i,d),x={h1:b(s,96,1.167,-1.5),h2:b(s,60,1.2,-.5),h3:b(p,48,1.167,0),h4:b(p,34,1.235,.25),h5:b(p,24,1.334,0),h6:b(c,20,1.6,.15),subtitle1:b(p,16,1.75,.15),subtitle2:b(c,14,1.57,.1),body1:b(p,16,1.5,.15),body2:b(p,14,1.43,.15),button:b(c,14,1.75,.4,$t),caption:b(p,12,1.66,.4),overline:b(p,12,2.66,1,$t)};return u(a({htmlFontSize:l,pxToRem:g,fontFamily:n,fontSize:o,fontWeightLight:s,fontWeightRegular:p,fontWeightMedium:c,fontWeightBold:f},x),h,{clone:!1})}function jt(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,0.2)`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,0.14)`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,0.12)`].join(",")}const Pt=["none",jt(0,2,1,-1,0,1,1,0,0,1,3,0),jt(0,3,1,-2,0,2,2,0,0,1,5,0),jt(0,3,3,-2,0,3,4,0,0,1,8,0),jt(0,2,4,-1,0,4,5,0,0,1,10,0),jt(0,3,5,-1,0,5,8,0,0,1,14,0),jt(0,3,5,-1,0,6,10,0,0,1,18,0),jt(0,4,5,-2,0,7,10,1,0,2,16,1),jt(0,5,5,-3,0,8,10,1,0,3,14,2),jt(0,5,6,-3,0,9,12,1,0,3,16,2),jt(0,6,6,-3,0,10,14,1,0,4,18,3),jt(0,6,7,-4,0,11,15,1,0,4,20,3),jt(0,7,8,-4,0,12,17,2,0,5,22,4),jt(0,7,8,-4,0,13,19,2,0,5,24,4),jt(0,7,9,-4,0,14,21,2,0,5,26,4),jt(0,8,9,-5,0,15,22,2,0,6,28,5),jt(0,8,10,-5,0,16,24,2,0,6,30,5),jt(0,8,11,-5,0,17,26,2,0,6,32,5),jt(0,9,11,-5,0,18,28,2,0,7,34,6),jt(0,9,12,-6,0,19,29,2,0,7,36,6),jt(0,10,13,-6,0,20,31,3,0,8,38,7),jt(0,10,13,-6,0,21,33,3,0,8,40,7),jt(0,10,14,-6,0,22,35,3,0,8,42,7),jt(0,11,14,-7,0,23,36,3,0,9,44,8),jt(0,11,15,-7,0,24,38,3,0,9,46,8)],Rt=["duration","easing","delay"],Ct={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},Tt={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function _t(e){return`${Math.round(e)}ms`}function Mt(e){if(!e)return 0;const t=e/36;return Math.round(10*(4+15*t**.25+t/5))}function Et(e){const t=a({},Ct,e.easing),r=a({},Tt,e.duration);return a({getAutoHeightDuration:Mt,create:(e=["all"],n={})=>{const{duration:o=r.standard,easing:a=t.easeInOut,delay:s=0}=n;i(n,Rt);return(Array.isArray(e)?e:[e]).map((e=>`${e} ${"string"==typeof o?o:_t(o)} ${a} ${"string"==typeof s?s:_t(s)}`)).join(",")}},e,{easing:t,duration:r})}const zt={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},Kt=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];const Wt=function(e={},...t){const{mixins:r={},palette:n={},transitions:o={},typography:s={}}=e,p=i(e,Kt);if(e.vars)throw new Error(l(18));const c=kt(n),f=Be(e);let d=u(f,{mixins:pt(f.breakpoints,r),palette:c,shadows:Pt.slice(),typography:At(c,s),transitions:Et(o),zIndex:a({},zt)});return d=u(d,p),d=t.reduce(((e,t)=>u(e,t)),d),d}(),Ft=Wt,It=e=>Ze(e)&&"classes"!==e,Bt=Ze,Lt=function(e={}){const{defaultTheme:t=Qe,rootShouldForwardProp:r=Ze,slotShouldForwardProp:o=Ze,styleFunctionSx:i=Ee}=e,a=e=>{const r=Je(e.theme)?t:e.theme;return i(S({},e,{theme:r}))};return a.__mui_systemSx=!0,(e,i={})=>{((e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))})(e,(e=>e.filter((e=>!(null!=e&&e.__mui_systemSx)))));const{name:s,slot:p,skipVariantsResolver:c,skipSx:f,overridesResolver:u}=i,l=ze(i,Ue),d=void 0!==c?c:p&&"Root"!==p||!1,m=f||!1;let h=Ze;"Root"===p?h=r:p?h=o:function(e){return"string"==typeof e&&e.charCodeAt(0)>96}(e)&&(h=void 0);const y=function(e,t){return(0,n.Z)(e,t)}(e,S({shouldForwardProp:h,label:undefined},l)),g=(e,...r)=>{const n=r?r.map((e=>"function"==typeof e&&e.__emotion_real!==e?r=>{let{theme:n}=r,o=ze(r,qe);return e(S({theme:Je(n)?t:n},o))}:e)):[];let o=e;s&&u&&n.push((e=>{const r=Je(e.theme)?t:e.theme,n=((e,t)=>t.components&&t.components[e]&&t.components[e].styleOverrides?t.components[e].styleOverrides:null)(s,r);if(n){const t={};return Object.entries(n).forEach((([n,o])=>{t[n]="function"==typeof o?o(S({},e,{theme:r})):o})),u(e,t)}return null})),s&&!d&&n.push((e=>{const r=Je(e.theme)?t:e.theme;return((e,t,r,n)=>{var o,i;const{ownerState:a={}}=e,s=[],p=null==r||null==(o=r.components)||null==(i=o[n])?void 0:i.variants;return p&&p.forEach((r=>{let n=!0;Object.keys(r.props).forEach((t=>{a[t]!==r.props[t]&&e[t]!==r.props[t]&&(n=!1)})),n&&s.push(t[De(r.props)])})),s})(e,((e,t)=>{let r=[];t&&t.components&&t.components[e]&&t.components[e].variants&&(r=t.components[e].variants);const n={};return r.forEach((e=>{const t=De(e.props);n[t]=e.style})),n})(s,r),r,s)})),m||n.push(a);const i=n.length-r.length;if(Array.isArray(e)&&i>0){const t=new Array(i).fill("");o=[...e,...t],o.raw=[...e.raw,...t]}else"function"==typeof e&&e.__emotion_real!==e&&(o=r=>{let{theme:n}=r,o=ze(r,Ne);return e(S({theme:Je(n)?t:n},o))});return y(o,...n)};return y.withConfig&&(g.withConfig=y.withConfig),g}}({defaultTheme:Ft,rootShouldForwardProp:It}),Gt=Lt;function Ht({props:e,name:t}){return et({props:e,name:t,defaultTheme:Ft})}}}]);