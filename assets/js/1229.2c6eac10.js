"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1229],{90488:e=>{var t,r=Object.defineProperty,n=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,a=Object.prototype.hasOwnProperty,i={};((e,t)=>{for(var n in t)r(e,n,{get:t[n],enumerable:!0})})(i,{Immer:()=>q,applyPatches:()=>ie,castDraft:()=>se,castImmutable:()=>ce,createDraft:()=>ue,current:()=>H,enableMapSet:()=>ee,enablePatches:()=>Z,finishDraft:()=>le,freeze:()=>M,immerable:()=>l,isDraft:()=>p,isDraftable:()=>h,nothing:()=>u,original:()=>b,produce:()=>re,produceWithPatches:()=>ne,setAutoFreeze:()=>oe,setUseStrictShallowCopy:()=>ae}),e.exports=(t=i,((e,t,i,u)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let l of o(t))!a.call(e,l)&&l!==i&&r(e,l,{get:()=>t[l],enumerable:!(u=n(t,l))||u.enumerable});return e})(r({},"__esModule",{value:!0}),t));var u=Symbol.for("immer-nothing"),l=Symbol.for("immer-draftable"),s=Symbol.for("immer-state");function c(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var f=Object.getPrototypeOf;function p(e){return!!e&&!!e[s]}function h(e){return!!e&&(y(e)||Array.isArray(e)||!!e[l]||!!e.constructor?.[l]||O(e)||P(e))}var d=Object.prototype.constructor.toString();function y(e){if(!e||"object"!=typeof e)return!1;let t=f(e);if(null===t)return!0;let r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===d}function b(e){return p(e)||c(15),e[s].t}function g(e,t){0===m(e)?Reflect.ownKeys(e).forEach((r=>{t(r,e[r],e)})):e.forEach(((r,n)=>t(n,r,e)))}function m(e){let t=e[s];return t?t.o:Array.isArray(e)?1:O(e)?2:P(e)?3:0}function v(e,t){return 2===m(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function I(e,t){return 2===m(e)?e.get(t):e[t]}function w(e,t,r){let n=m(e);2===n?e.set(t,r):3===n?e.add(r):e[t]=r}function O(e){return e instanceof Map}function P(e){return e instanceof Set}function j(e){return e.e||e.t}function S(e,t){if(O(e))return new Map(e);if(P(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);let r=y(e);if(!0===t||"class_only"===t&&!r){let t=Object.getOwnPropertyDescriptors(e);delete t[s];let r=Reflect.ownKeys(t);for(let n=0;n<r.length;n++){let o=r[n],a=t[o];!1===a.writable&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(t[o]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[o]})}return Object.create(f(e),t)}{let t=f(e);if(null!==t&&r)return{...e};let n=Object.create(t);return Object.assign(n,e)}}function M(e,t=!1){return x(e)||p(e)||!h(e)||(m(e)>1&&(e.set=e.add=e.clear=e.delete=N),Object.freeze(e),t&&Object.entries(e).forEach((([e,t])=>M(t,!0)))),e}function N(){c(2)}function x(e){return Object.isFrozen(e)}var C,X={};function D(e){let t=X[e];return t||c(0),t}function A(e,t){X[e]||(X[e]=t)}function E(){return C}function V(e,t){t&&(D("Patches"),e.f=[],e.h=[],e.b=t)}function _(e){R(e),e.a.forEach(z),e.a=null}function R(e){e===C&&(C=e.i)}function $(e){return C=function(e,t){return{a:[],i:e,p:t,P:!0,d:0}}(C,e)}function z(e){let t=e[s];0===t.o||1===t.o?t.x():t.m=!0}function k(e,t){t.d=t.a.length;let r=t.a[0];return void 0!==e&&e!==r?(r[s].s&&(_(t),c(4)),h(e)&&(e=F(t,e),t.i||W(t,e)),t.f&&D("Patches").T(r[s].t,e,t.f,t.h)):e=F(t,r,[]),_(t),t.f&&t.b(t.f,t.h),e!==u?e:void 0}function F(e,t,r){if(x(t))return t;let n=t[s];if(!n)return g(t,((o,a)=>L(e,n,t,o,a,r))),t;if(n.n!==e)return t;if(!n.s)return W(e,n.t,!0),n.t;if(!n.c){n.c=!0,n.n.d--;let t=n.e,o=t,a=!1;3===n.o&&(o=new Set(t),t.clear(),a=!0),g(o,((o,i)=>L(e,n,t,o,i,r,a))),W(e,t,!1),r&&e.f&&D("Patches").g(n,r,e.f,e.h)}return n.e}function L(e,t,r,n,o,a,i){if(p(o)){let i=F(e,o,a&&t&&3!==t.o&&!v(t.r,n)?a.concat(n):void 0);if(w(r,n,i),!p(i))return;e.P=!1}else i&&r.add(o);if(h(o)&&!x(o)){if(!e.p.y&&e.d<1)return;F(e,o),(!t||!t.n.i)&&"symbol"!=typeof n&&Object.prototype.propertyIsEnumerable.call(r,n)&&W(e,o)}}function W(e,t,r=!1){!e.i&&e.p.y&&e.P&&M(t,r)}var T={get(e,t){if(t===s)return e;let r=j(e);if(!v(r,t))return function(e,t,r){let n=Q(t,r);return n?"value"in n?n.value:n.get?.call(e.u):void 0}(e,r,t);let n=r[t];return e.c||!h(n)?n:n===K(e.t,t)?(J(e),e.e[t]=B(n,e)):n},has:(e,t)=>t in j(e),ownKeys:e=>Reflect.ownKeys(j(e)),set(e,t,r){let n=Q(j(e),t);if(n?.set)return n.set.call(e.u,r),!0;if(!e.s){let n=K(j(e),t),o=n?.[s];if(o&&o.t===r)return e.e[t]=r,e.r[t]=!1,!0;if(function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}(r,n)&&(void 0!==r||v(e.t,t)))return!0;J(e),G(e)}return e.e[t]===r&&(void 0!==r||t in e.e)||Number.isNaN(r)&&Number.isNaN(e.e[t])||(e.e[t]=r,e.r[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==K(e.t,t)||t in e.t?(e.r[t]=!1,J(e),G(e)):delete e.r[t],e.e&&delete e.e[t],!0),getOwnPropertyDescriptor(e,t){let r=j(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:1!==e.o||"length"!==t,enumerable:n.enumerable,value:r[t]}},defineProperty(){c(11)},getPrototypeOf:e=>f(e.t),setPrototypeOf(){c(12)}},U={};function K(e,t){let r=e[s];return(r?j(r):e)[t]}function Q(e,t){if(!(t in e))return;let r=f(e);for(;r;){let e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=f(r)}}function G(e){e.s||(e.s=!0,e.i&&G(e.i))}function J(e){e.e||(e.e=S(e.t,e.n.p.S))}g(T,((e,t)=>{U[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),U.deleteProperty=function(e,t){return U.set.call(this,e,t,void 0)},U.set=function(e,t,r){return T.set.call(this,e[0],t,r,e[0])};var q=class{constructor(e){this.y=!0,this.S=!1,this.produce=(e,t,r)=>{if("function"==typeof e&&"function"!=typeof t){let r=t;t=e;let n=this;return function(e=r,...o){return n.produce(e,(e=>t.call(this,e,...o)))}}let n;if("function"!=typeof t&&c(6),void 0!==r&&"function"!=typeof r&&c(7),h(e)){let o=$(this),a=B(e,void 0),i=!0;try{n=t(a),i=!1}finally{i?_(o):R(o)}return V(o,r),k(n,o)}if(!e||"object"!=typeof e){if(n=t(e),void 0===n&&(n=e),n===u&&(n=void 0),this.y&&M(n,!0),r){let t=[],o=[];D("Patches").T(e,n,t,o),r(t,o)}return n}c(1)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...r)=>this.produceWithPatches(t,(t=>e(t,...r)));let r,n;return[this.produce(e,t,((e,t)=>{r=e,n=t})),r,n]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){h(e)||c(8),p(e)&&(e=H(e));let t=$(this),r=B(e,void 0);return r[s].l=!0,R(t),r}finishDraft(e,t){let r=e&&e[s];(!r||!r.l)&&c(9);let{n:n}=r;return V(n,t),k(void 0,n)}setAutoFreeze(e){this.y=e}setUseStrictShallowCopy(e){this.S=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){let n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));let n=D("Patches").A;return p(e)?n(e,t):this.produce(e,(e=>n(e,t)))}};function B(e,t){let r=O(e)?D("MapSet").I(e,t):P(e)?D("MapSet").D(e,t):function(e,t){let r=Array.isArray(e),n={o:r?1:0,n:t?t.n:E(),s:!1,c:!1,r:{},i:t,t:e,u:null,e:null,x:null,l:!1},o=n,a=T;r&&(o=[n],a=U);let{revoke:i,proxy:u}=Proxy.revocable(o,a);return n.u=u,n.x=i,u}(e,t);return(t?t.n:E()).a.push(r),r}function H(e){return p(e)||c(10),Y(e)}function Y(e){if(!h(e)||x(e))return e;let t,r=e[s];if(r){if(!r.s)return r.t;r.c=!0,t=S(e,r.n.p.S)}else t=S(e,!0);return g(t,((e,r)=>{w(t,e,Y(r))})),r&&(r.c=!1),t}function Z(){let e="replace",t="add",r="remove";function n(e){if(!h(e))return e;if(Array.isArray(e))return e.map(n);if(O(e))return new Map(Array.from(e.entries()).map((([e,t])=>[e,n(t)])));if(P(e))return new Set(Array.from(e).map(n));let t=Object.create(f(e));for(let r in e)t[r]=n(e[r]);return v(e,l)&&(t[l]=e[l]),t}function o(e){return p(e)?n(e):e}A("Patches",{A:function(o,a){return a.forEach((a=>{let{path:i,op:u}=a,l=o;for(let e=0;e<i.length-1;e++){let t=m(l),r=i[e];"string"!=typeof r&&"number"!=typeof r&&(r=""+r),(0===t||1===t)&&("__proto__"===r||"constructor"===r)&&c(19),"function"==typeof l&&"prototype"===r&&c(19),l=I(l,r),"object"!=typeof l&&c(18,i.join("/"))}let s=m(l),f=n(a.value),p=i[i.length-1];switch(u){case e:switch(s){case 2:return l.set(p,f);case 3:c(16);default:return l[p]=f}case t:switch(s){case 1:return"-"===p?l.push(f):l.splice(p,0,f);case 2:return l.set(p,f);case 3:return l.add(f);default:return l[p]=f}case r:switch(s){case 1:return l.splice(p,1);case 2:return l.delete(p);case 3:return l.delete(a.value);default:return delete l[p]}default:c(17)}})),o},g:function(n,a,i,u){switch(n.o){case 0:case 2:return function(n,a,i,u){let{t:l,e:s}=n;g(n.r,((n,c)=>{let f=I(l,n),p=I(s,n),h=c?v(l,n)?e:t:r;if(f===p&&h===e)return;let d=a.concat(n);i.push(h===r?{op:h,path:d}:{op:h,path:d,value:p}),u.push(h===t?{op:r,path:d}:h===r?{op:t,path:d,value:o(f)}:{op:e,path:d,value:o(f)})}))}(n,a,i,u);case 1:return function(n,a,i,u){let{t:l,r:s}=n,c=n.e;c.length<l.length&&([l,c]=[c,l],[i,u]=[u,i]);for(let t=0;t<l.length;t++)if(s[t]&&c[t]!==l[t]){let r=a.concat([t]);i.push({op:e,path:r,value:o(c[t])}),u.push({op:e,path:r,value:o(l[t])})}for(let e=l.length;e<c.length;e++){let r=a.concat([e]);i.push({op:t,path:r,value:o(c[e])})}for(let e=c.length-1;l.length<=e;--e){let t=a.concat([e]);u.push({op:r,path:t})}}(n,a,i,u);case 3:return function(e,n,o,a){let{t:i,e:u}=e,l=0;i.forEach((e=>{if(!u.has(e)){let i=n.concat([l]);o.push({op:r,path:i,value:e}),a.unshift({op:t,path:i,value:e})}l++})),l=0,u.forEach((e=>{if(!i.has(e)){let i=n.concat([l]);o.push({op:t,path:i,value:e}),a.unshift({op:r,path:i,value:e})}l++}))}(n,a,i,u)}},T:function(t,r,n,o){n.push({op:e,path:[],value:r===u?void 0:r}),o.push({op:e,path:[],value:t})}})}function ee(){class e extends Map{constructor(e,t){super(),this[s]={o:2,i:t,n:t?t.n:E(),s:!1,c:!1,e:void 0,r:void 0,t:e,u:this,l:!1,m:!1}}get size(){return j(this[s]).size}has(e){return j(this[s]).has(e)}set(e,r){let n=this[s];return o(n),(!j(n).has(e)||j(n).get(e)!==r)&&(t(n),G(n),n.r.set(e,!0),n.e.set(e,r),n.r.set(e,!0)),this}delete(e){if(!this.has(e))return!1;let r=this[s];return o(r),t(r),G(r),r.t.has(e)?r.r.set(e,!1):r.r.delete(e),r.e.delete(e),!0}clear(){let e=this[s];o(e),j(e).size&&(t(e),G(e),e.r=new Map,g(e.t,(t=>{e.r.set(t,!1)})),e.e.clear())}forEach(e,t){j(this[s]).forEach(((r,n,o)=>{e.call(t,this.get(n),n,this)}))}get(e){let r=this[s];o(r);let n=j(r).get(e);if(r.c||!h(n)||n!==r.t.get(e))return n;let a=B(n,r);return t(r),r.e.set(e,a),a}keys(){return j(this[s]).keys()}values(){let e=this.keys();return{[Symbol.iterator]:()=>this.values(),next:()=>{let t=e.next();return t.done?t:{done:!1,value:this.get(t.value)}}}}entries(){let e=this.keys();return{[Symbol.iterator]:()=>this.entries(),next:()=>{let t=e.next();if(t.done)return t;let r=this.get(t.value);return{done:!1,value:[t.value,r]}}}}[Symbol.iterator](){return this.entries()}}function t(e){e.e||(e.r=new Map,e.e=new Map(e.t))}class r extends Set{constructor(e,t){super(),this[s]={o:3,i:t,n:t?t.n:E(),s:!1,c:!1,e:void 0,t:e,u:this,a:new Map,m:!1,l:!1}}get size(){return j(this[s]).size}has(e){let t=this[s];return o(t),t.e?!!(t.e.has(e)||t.a.has(e)&&t.e.has(t.a.get(e))):t.t.has(e)}add(e){let t=this[s];return o(t),this.has(e)||(n(t),G(t),t.e.add(e)),this}delete(e){if(!this.has(e))return!1;let t=this[s];return o(t),n(t),G(t),t.e.delete(e)||!!t.a.has(e)&&t.e.delete(t.a.get(e))}clear(){let e=this[s];o(e),j(e).size&&(n(e),G(e),e.e.clear())}values(){let e=this[s];return o(e),n(e),e.e.values()}entries(){let e=this[s];return o(e),n(e),e.e.entries()}keys(){return this.values()}[Symbol.iterator](){return this.values()}forEach(e,t){let r=this.values(),n=r.next();for(;!n.done;)e.call(t,n.value,n.value,this),n=r.next()}}function n(e){e.e||(e.e=new Set,e.t.forEach((t=>{if(h(t)){let r=B(t,e);e.a.set(t,r),e.e.add(r)}else e.e.add(t)})))}function o(e){e.m&&c(3,JSON.stringify(j(e)))}A("MapSet",{I:function(t,r){return new e(t,r)},D:function(e,t){return new r(e,t)}})}var te=new q,re=te.produce,ne=te.produceWithPatches.bind(te),oe=te.setAutoFreeze.bind(te),ae=te.setUseStrictShallowCopy.bind(te),ie=te.applyPatches.bind(te),ue=te.createDraft.bind(te),le=te.finishDraft.bind(te);function se(e){return e}function ce(e){return e}},67267:(e,t,r)=>{e.exports=r(90488)},34362:(e,t,r)=>{e.exports=r(31062)},31062:e=>{var t,r=Object.defineProperty,n=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,a=Object.prototype.hasOwnProperty,i={};((e,t)=>{for(var n in t)r(e,n,{get:t[n],enumerable:!0})})(i,{defaultOptions:()=>y,numericQuantity:()=>m,numericRegex:()=>l,numericRegexWithTrailingInvalid:()=>s,parseRomanNumerals:()=>b,romanNumeralRegex:()=>d,romanNumeralUnicodeRegex:()=>h,romanNumeralUnicodeToAsciiMap:()=>p,romanNumeralValues:()=>f,vulgarFractionToAsciiMap:()=>u,vulgarFractionsRegex:()=>c}),e.exports=(t=i,((e,t,i,u)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let l of o(t))!a.call(e,l)&&l!==i&&r(e,l,{get:()=>t[l],enumerable:!(u=n(t,l))||u.enumerable});return e})(r({},"__esModule",{value:!0}),t));var u={"\xbc":"1/4","\xbd":"1/2","\xbe":"3/4","\u2150":"1/7","\u2151":"1/9","\u2152":"1/10","\u2153":"1/3","\u2154":"2/3","\u2155":"1/5","\u2156":"2/5","\u2157":"3/5","\u2158":"4/5","\u2159":"1/6","\u215a":"5/6","\u215b":"1/8","\u215c":"3/8","\u215d":"5/8","\u215e":"7/8","\u215f":"1/"},l=/^(?=-?\s*\.\d|-?\s*\d)(-)?\s*((?:\d(?:[\d,_]*\d)?)*)(([eE][+-]?\d(?:[\d,_]*\d)?)?|\.\d(?:[\d,_]*\d)?([eE][+-]?\d(?:[\d,_]*\d)?)?|(\s+\d(?:[\d,_]*\d)?\s*)?\s*\/\s*\d(?:[\d,_]*\d)?)?$/,s=new RegExp(l.source.replace(/\$$/,"(?:\\s*[^\\.\\d\\/].*)?")),c=new RegExp(`(${Object.keys(u).join("|")})`),f={MMM:3e3,MM:2e3,M:1e3,CM:900,DCCC:800,DCC:700,DC:600,D:500,CD:400,CCC:300,CC:200,C:100,XC:90,LXXX:80,LXX:70,LX:60,L:50,XL:40,XXX:30,XX:20,XII:12,XI:11,X:10,IX:9,VIII:8,VII:7,VI:6,V:5,IV:4,III:3,II:2,I:1},p={"\u2160":"I","\u2161":"II","\u2162":"III","\u2163":"IV","\u2164":"V","\u2165":"VI","\u2166":"VII","\u2167":"VIII","\u2168":"IX","\u2169":"X","\u216a":"XI","\u216b":"XII","\u216c":"L","\u216d":"C","\u216e":"D","\u216f":"M","\u2170":"I","\u2171":"II","\u2172":"III","\u2173":"IV","\u2174":"V","\u2175":"VI","\u2176":"VII","\u2177":"VIII","\u2178":"IX","\u2179":"X","\u217a":"XI","\u217b":"XII","\u217c":"L","\u217d":"C","\u217e":"D","\u217f":"M"},h=new RegExp(`(${Object.keys(p).join("|")})`,"gi"),d=/^(?=[MDCLXVI])(M{0,3})(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$/i,y={round:3,allowTrailingInvalid:!1,romanNumerals:!1},b=e=>{let t=`${e}`.replace(h,((e,t)=>p[t])).toUpperCase(),r=d.exec(t);if(!r)return NaN;let[,n,o,a,i]=r;return(f[n]??0)+(f[o]??0)+(f[a]??0)+(f[i]??0)},g=/^\s*\//,m=(e,t=y)=>{if("number"==typeof e||"bigint"==typeof e)return e;let r=NaN,n=`${e}`.replace(c,((e,t)=>` ${u[t]}`)).replace("\u2044","/").trim();if(0===n.length)return NaN;let o={...y,...t},a=(o.allowTrailingInvalid?s:l).exec(n);if(!a)return o.romanNumerals?b(n):NaN;let[,i,f,p]=a,h=f.replace(/[,_]/g,""),d=null==p?void 0:p.replace(/[,_]/g,"");if(r=!h&&d&&d.startsWith(".")?0:parseInt(h),!d)return i?-1*r:r;let m=!1===o.round?NaN:parseFloat(`1e${Math.floor(Math.max(0,o.round))}`);if(d.startsWith(".")||d.startsWith("e")||d.startsWith("E")){let e=parseFloat(`${r}${d}`);r=isNaN(m)?e:Math.round(e*m)/m}else if(g.test(d)){let e=parseInt(h),t=parseInt(d.replace("/",""));r=isNaN(m)?e/t:Math.round(e*m/t)/m}else{let e=d.split("/"),[t,n]=e.map((e=>parseInt(e)));r+=isNaN(m)?t/n:Math.round(t*m/n)/m}return i?-1*r:r}},91229:(e,t,r)=>{function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){n(e,t,r[t])}))}return e}var a,i=Object.defineProperty,u=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,s=Object.prototype.hasOwnProperty,c={};((e,t)=>{for(var r in t)i(e,r,{get:t[r],enumerable:!0})})(c,{transformQuery:()=>b}),e.exports=(a=c,((e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of l(t))s.call(e,o)||o===r||i(e,o,{get:()=>t[o],enumerable:!(n=u(t,o))||n.enumerable});return e})(i({},"__esModule",{value:!0}),a));var f=r(67267),p=r(34362),h=(new RegExp(p.numericRegex.source.replace(/^\^/,"^\\s*").replace(/\$$/,"\\s*$")),e=>{return null!==(t=e)&&"object"==typeof t&&Object.getPrototypeOf(t)===Object.prototype&&"rules"in e&&Array.isArray(e.rules);var t}),d=e=>h(e)&&"string"==typeof e.combinator,y=(e,t,r)=>(0,f.produce)(e,(e=>{for(const[n,o]of Object.entries(t))!1===o?delete e[n]:o&&n!==o&&n in e&&(e[o]=e[n],r&&delete e[n])}));function b(e,t={}){const{ruleProcessor:r=(e=>e),ruleGroupProcessor:n=(e=>e),propertyMap:a={},combinatorMap:i={},operatorMap:u={},omitPath:l=!1,deleteRemappedProperties:s=!0}=t,c=e=>{var t,f;return o({},n(y(o({},e,d(e)?{combinator:null!==(t=i[e.combinator])&&void 0!==t?t:e.combinator}:{}),a,s)),!1===a.rules?null:{[null!==(f=a.rules)&&void 0!==f?f:"rules"]:e.rules.map(((t,n)=>{const f=l?null:{path:[...e.path,n]};var p,d;return"string"==typeof t?null!==(p=i[t])&&void 0!==p?p:t:h(t)?c(o({},t,f)):r(y(o({},o({},t,f),"operator"in t?{operator:null!==(d=u[t.operator])&&void 0!==d?d:t.operator}:{}),a,s))}))})};return c(o({},e,l?null:{path:[]}))}}}]);