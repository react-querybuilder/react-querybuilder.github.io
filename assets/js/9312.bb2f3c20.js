"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9312],{90488:e=>{var t,r=Object.defineProperty,n=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,s=Object.prototype.hasOwnProperty,a={};((e,t)=>{for(var n in t)r(e,n,{get:t[n],enumerable:!0})})(a,{Immer:()=>J,applyPatches:()=>ae,castDraft:()=>ue,castImmutable:()=>ce,createDraft:()=>ie,current:()=>H,enableMapSet:()=>ee,enablePatches:()=>Z,finishDraft:()=>le,freeze:()=>P,immerable:()=>l,isDraft:()=>p,isDraftable:()=>d,nothing:()=>i,original:()=>b,produce:()=>re,produceWithPatches:()=>ne,setAutoFreeze:()=>oe,setUseStrictShallowCopy:()=>se}),e.exports=(t=a,((e,t,a,i)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let l of o(t))!s.call(e,l)&&l!==a&&r(e,l,{get:()=>t[l],enumerable:!(i=n(t,l))||i.enumerable});return e})(r({},"__esModule",{value:!0}),t));var i=Symbol.for("immer-nothing"),l=Symbol.for("immer-draftable"),u=Symbol.for("immer-state");function c(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var f=Object.getPrototypeOf;function p(e){return!!e&&!!e[u]}function d(e){return!!e&&($(e)||Array.isArray(e)||!!e[l]||!!e.constructor?.[l]||w(e)||O(e))}var h=Object.prototype.constructor.toString();function $(e){if(!e||"object"!=typeof e)return!1;let t=f(e);if(null===t)return!0;let r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===h}function b(e){return p(e)||c(15),e[u].t}function m(e,t){0===g(e)?Object.entries(e).forEach((([r,n])=>{t(r,n,e)})):e.forEach(((r,n)=>t(n,r,e)))}function g(e){let t=e[u];return t?t.o:Array.isArray(e)?1:w(e)?2:O(e)?3:0}function y(e,t){return 2===g(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function v(e,t){return 2===g(e)?e.get(t):e[t]}function N(e,t,r){let n=g(e);2===n?e.set(t,r):3===n?e.add(r):e[t]=r}function w(e){return e instanceof Map}function O(e){return e instanceof Set}function j(e){return e.e||e.t}function I(e,t){if(w(e))return new Map(e);if(O(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);if(!t&&$(e))return f(e)?{...e}:Object.assign(Object.create(null),e);let r=Object.getOwnPropertyDescriptors(e);delete r[u];let n=Reflect.ownKeys(r);for(let o=0;o<n.length;o++){let t=n[o],s=r[t];!1===s.writable&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(r[t]={configurable:!0,writable:!0,enumerable:s.enumerable,value:e[t]})}return Object.create(f(e),r)}function P(e,t=!1){return S(e)||p(e)||!d(e)||(g(e)>1&&(e.set=e.add=e.clear=e.delete=W),Object.freeze(e),t&&m(e,((e,t)=>P(t,!0)))),e}function W(){c(2)}function S(e){return Object.isFrozen(e)}var C,x={};function D(e){let t=x[e];return t||c(0),t}function E(e,t){x[e]||(x[e]=t)}function A(){return C}function M(e,t){t&&(D("Patches"),e.f=[],e.h=[],e.b=t)}function L(e){X(e),e.a.forEach(B),e.a=null}function X(e){e===C&&(C=e.i)}function _(e){return C=function(e,t){return{a:[],i:e,p:t,P:!0,d:0}}(C,e)}function B(e){let t=e[u];0===t.o||1===t.o?t.x():t.m=!0}function V(e,t){t.d=t.a.length;let r=t.a[0];return void 0!==e&&e!==r?(r[u].s&&(L(t),c(4)),d(e)&&(e=R(t,e),t.i||z(t,e)),t.f&&D("Patches").T(r[u].t,e,t.f,t.h)):e=R(t,r,[]),L(t),t.f&&t.b(t.f,t.h),e!==i?e:void 0}function R(e,t,r){if(S(t))return t;let n=t[u];if(!n)return m(t,((o,s)=>F(e,n,t,o,s,r))),t;if(n.n!==e)return t;if(!n.s)return z(e,n.t,!0),n.t;if(!n.c){n.c=!0,n.n.d--;let t=n.e,o=t,s=!1;3===n.o&&(o=new Set(t),t.clear(),s=!0),m(o,((o,a)=>F(e,n,t,o,a,r,s))),z(e,t,!1),r&&e.f&&D("Patches").g(n,r,e.f,e.h)}return n.e}function F(e,t,r,n,o,s,a){if(p(o)){let a=R(e,o,s&&t&&3!==t.o&&!y(t.r,n)?s.concat(n):void 0);if(N(r,n,a),!p(a))return;e.P=!1}else a&&r.add(o);if(d(o)&&!S(o)){if(!e.p.y&&e.d<1)return;R(e,o),(!t||!t.n.i)&&z(e,o)}}function z(e,t,r=!1){!e.i&&e.p.y&&e.P&&P(t,r)}var k={get(e,t){if(t===u)return e;let r=j(e);if(!y(r,t))return function(e,t,r){let n=T(t,r);return n?"value"in n?n.value:n.get?.call(e.u):void 0}(e,r,t);let n=r[t];return e.c||!d(n)?n:n===Q(e.t,t)?(K(e),e.e[t]=G(n,e)):n},has:(e,t)=>t in j(e),ownKeys:e=>Reflect.ownKeys(j(e)),set(e,t,r){let n=T(j(e),t);if(n?.set)return n.set.call(e.u,r),!0;if(!e.s){let n=Q(j(e),t),o=n?.[u];if(o&&o.t===r)return e.e[t]=r,e.r[t]=!1,!0;if(function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}(r,n)&&(void 0!==r||y(e.t,t)))return!0;K(e),U(e)}return e.e[t]===r&&(void 0!==r||t in e.e)||Number.isNaN(r)&&Number.isNaN(e.e[t])||(e.e[t]=r,e.r[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==Q(e.t,t)||t in e.t?(e.r[t]=!1,K(e),U(e)):delete e.r[t],e.e&&delete e.e[t],!0),getOwnPropertyDescriptor(e,t){let r=j(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:1!==e.o||"length"!==t,enumerable:n.enumerable,value:r[t]}},defineProperty(){c(11)},getPrototypeOf:e=>f(e.t),setPrototypeOf(){c(12)}},q={};function Q(e,t){let r=e[u];return(r?j(r):e)[t]}function T(e,t){if(!(t in e))return;let r=f(e);for(;r;){let e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=f(r)}}function U(e){e.s||(e.s=!0,e.i&&U(e.i))}function K(e){e.e||(e.e=I(e.t,e.n.p.S))}m(k,((e,t)=>{q[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),q.deleteProperty=function(e,t){return q.set.call(this,e,t,void 0)},q.set=function(e,t,r){return k.set.call(this,e[0],t,r,e[0])};var J=class{constructor(e){this.y=!0,this.S=!1,this.produce=(e,t,r)=>{if("function"==typeof e&&"function"!=typeof t){let r=t;t=e;let n=this;return function(e=r,...o){return n.produce(e,(e=>t.call(this,e,...o)))}}let n;if("function"!=typeof t&&c(6),void 0!==r&&"function"!=typeof r&&c(7),d(e)){let o=_(this),s=G(e,void 0),a=!0;try{n=t(s),a=!1}finally{a?L(o):X(o)}return M(o,r),V(n,o)}if(!e||"object"!=typeof e){if(n=t(e),void 0===n&&(n=e),n===i&&(n=void 0),this.y&&P(n,!0),r){let t=[],o=[];D("Patches").T(e,n,t,o),r(t,o)}return n}c(1)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...r)=>this.produceWithPatches(t,(t=>e(t,...r)));let r,n;return[this.produce(e,t,((e,t)=>{r=e,n=t})),r,n]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){d(e)||c(8),p(e)&&(e=H(e));let t=_(this),r=G(e,void 0);return r[u].l=!0,X(t),r}finishDraft(e,t){let r=e&&e[u];(!r||!r.l)&&c(9);let{n:n}=r;return M(n,t),V(void 0,n)}setAutoFreeze(e){this.y=e}setUseStrictShallowCopy(e){this.S=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){let n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));let n=D("Patches").A;return p(e)?n(e,t):this.produce(e,(e=>n(e,t)))}};function G(e,t){let r=w(e)?D("MapSet").I(e,t):O(e)?D("MapSet").D(e,t):function(e,t){let r=Array.isArray(e),n={o:r?1:0,n:t?t.n:A(),s:!1,c:!1,r:{},i:t,t:e,u:null,e:null,x:null,l:!1},o=n,s=k;r&&(o=[n],s=q);let{revoke:a,proxy:i}=Proxy.revocable(o,s);return n.u=i,n.x=a,i}(e,t);return(t?t.n:A()).a.push(r),r}function H(e){return p(e)||c(10),Y(e)}function Y(e){if(!d(e)||S(e))return e;let t,r=e[u];if(r){if(!r.s)return r.t;r.c=!0,t=I(e,r.n.p.S)}else t=I(e,!0);return m(t,((e,r)=>{N(t,e,Y(r))})),r&&(r.c=!1),t}function Z(){let e="replace",t="add",r="remove";function n(e){if(!d(e))return e;if(Array.isArray(e))return e.map(n);if(w(e))return new Map(Array.from(e.entries()).map((([e,t])=>[e,n(t)])));if(O(e))return new Set(Array.from(e).map(n));let t=Object.create(f(e));for(let r in e)t[r]=n(e[r]);return y(e,l)&&(t[l]=e[l]),t}function o(e){return p(e)?n(e):e}E("Patches",{A:function(o,s){return s.forEach((s=>{let{path:a,op:i}=s,l=o;for(let e=0;e<a.length-1;e++){let t=g(l),r=a[e];"string"!=typeof r&&"number"!=typeof r&&(r=""+r),(0===t||1===t)&&("__proto__"===r||"constructor"===r)&&c(19),"function"==typeof l&&"prototype"===r&&c(19),l=v(l,r),"object"!=typeof l&&c(18,a.join("/"))}let u=g(l),f=n(s.value),p=a[a.length-1];switch(i){case e:switch(u){case 2:return l.set(p,f);case 3:c(16);default:return l[p]=f}case t:switch(u){case 1:return"-"===p?l.push(f):l.splice(p,0,f);case 2:return l.set(p,f);case 3:return l.add(f);default:return l[p]=f}case r:switch(u){case 1:return l.splice(p,1);case 2:return l.delete(p);case 3:return l.delete(s.value);default:return delete l[p]}default:c(17)}})),o},g:function(n,s,a,i){switch(n.o){case 0:case 2:return function(n,s,a,i){let{t:l,e:u}=n;m(n.r,((n,c)=>{let f=v(l,n),p=v(u,n),d=c?y(l,n)?e:t:r;if(f===p&&d===e)return;let h=s.concat(n);a.push(d===r?{op:d,path:h}:{op:d,path:h,value:p}),i.push(d===t?{op:r,path:h}:d===r?{op:t,path:h,value:o(f)}:{op:e,path:h,value:o(f)})}))}(n,s,a,i);case 1:return function(n,s,a,i){let{t:l,r:u}=n,c=n.e;c.length<l.length&&([l,c]=[c,l],[a,i]=[i,a]);for(let t=0;t<l.length;t++)if(u[t]&&c[t]!==l[t]){let r=s.concat([t]);a.push({op:e,path:r,value:o(c[t])}),i.push({op:e,path:r,value:o(l[t])})}for(let e=l.length;e<c.length;e++){let r=s.concat([e]);a.push({op:t,path:r,value:o(c[e])})}for(let e=c.length-1;l.length<=e;--e){let t=s.concat([e]);i.push({op:r,path:t})}}(n,s,a,i);case 3:return function(e,n,o,s){let{t:a,e:i}=e,l=0;a.forEach((e=>{if(!i.has(e)){let a=n.concat([l]);o.push({op:r,path:a,value:e}),s.unshift({op:t,path:a,value:e})}l++})),l=0,i.forEach((e=>{if(!a.has(e)){let a=n.concat([l]);o.push({op:t,path:a,value:e}),s.unshift({op:r,path:a,value:e})}l++}))}(n,s,a,i)}},T:function(t,r,n,o){n.push({op:e,path:[],value:r===i?void 0:r}),o.push({op:e,path:[],value:t})}})}function ee(){class e extends Map{constructor(e,t){super(),this[u]={o:2,i:t,n:t?t.n:A(),s:!1,c:!1,e:void 0,r:void 0,t:e,u:this,l:!1,m:!1}}get size(){return j(this[u]).size}has(e){return j(this[u]).has(e)}set(e,r){let n=this[u];return o(n),(!j(n).has(e)||j(n).get(e)!==r)&&(t(n),U(n),n.r.set(e,!0),n.e.set(e,r),n.r.set(e,!0)),this}delete(e){if(!this.has(e))return!1;let r=this[u];return o(r),t(r),U(r),r.t.has(e)?r.r.set(e,!1):r.r.delete(e),r.e.delete(e),!0}clear(){let e=this[u];o(e),j(e).size&&(t(e),U(e),e.r=new Map,m(e.t,(t=>{e.r.set(t,!1)})),e.e.clear())}forEach(e,t){j(this[u]).forEach(((r,n,o)=>{e.call(t,this.get(n),n,this)}))}get(e){let r=this[u];o(r);let n=j(r).get(e);if(r.c||!d(n)||n!==r.t.get(e))return n;let s=G(n,r);return t(r),r.e.set(e,s),s}keys(){return j(this[u]).keys()}values(){let e=this.keys();return{[Symbol.iterator]:()=>this.values(),next:()=>{let t=e.next();return t.done?t:{done:!1,value:this.get(t.value)}}}}entries(){let e=this.keys();return{[Symbol.iterator]:()=>this.entries(),next:()=>{let t=e.next();if(t.done)return t;let r=this.get(t.value);return{done:!1,value:[t.value,r]}}}}[Symbol.iterator](){return this.entries()}}function t(e){e.e||(e.r=new Map,e.e=new Map(e.t))}class r extends Set{constructor(e,t){super(),this[u]={o:3,i:t,n:t?t.n:A(),s:!1,c:!1,e:void 0,t:e,u:this,a:new Map,m:!1,l:!1}}get size(){return j(this[u]).size}has(e){let t=this[u];return o(t),t.e?!!(t.e.has(e)||t.a.has(e)&&t.e.has(t.a.get(e))):t.t.has(e)}add(e){let t=this[u];return o(t),this.has(e)||(n(t),U(t),t.e.add(e)),this}delete(e){if(!this.has(e))return!1;let t=this[u];return o(t),n(t),U(t),t.e.delete(e)||!!t.a.has(e)&&t.e.delete(t.a.get(e))}clear(){let e=this[u];o(e),j(e).size&&(n(e),U(e),e.e.clear())}values(){let e=this[u];return o(e),n(e),e.e.values()}entries(){let e=this[u];return o(e),n(e),e.e.entries()}keys(){return this.values()}[Symbol.iterator](){return this.values()}forEach(e,t){let r=this.values(),n=r.next();for(;!n.done;)e.call(t,n.value,n.value,this),n=r.next()}}function n(e){e.e||(e.e=new Set,e.t.forEach((t=>{if(d(t)){let r=G(t,e);e.a.set(t,r),e.e.add(r)}else e.e.add(t)})))}function o(e){e.m&&c(3,JSON.stringify(j(e)))}E("MapSet",{I:function(t,r){return new e(t,r)},D:function(e,t){return new r(e,t)}})}var te=new J,re=te.produce,ne=te.produceWithPatches.bind(te),oe=te.setAutoFreeze.bind(te),se=te.setUseStrictShallowCopy.bind(te),ae=te.applyPatches.bind(te),ie=te.createDraft.bind(te),le=te.finishDraft.bind(te);function ue(e){return e}function ce(e){return e}},67267:(e,t,r)=>{e.exports=r(90488)},34362:(e,t,r)=>{e.exports=r(31062)},31062:e=>{var t,r=Object.defineProperty,n=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,s=Object.prototype.hasOwnProperty,a={};((e,t)=>{for(var n in t)r(e,n,{get:t[n],enumerable:!0})})(a,{defaultOptions:()=>$,numericQuantity:()=>g,numericRegex:()=>l,numericRegexWithTrailingInvalid:()=>u,parseRomanNumerals:()=>b,romanNumeralRegex:()=>h,romanNumeralUnicodeRegex:()=>d,romanNumeralUnicodeToAsciiMap:()=>p,romanNumeralValues:()=>f,vulgarFractionToAsciiMap:()=>i,vulgarFractionsRegex:()=>c}),e.exports=(t=a,((e,t,a,i)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let l of o(t))!s.call(e,l)&&l!==a&&r(e,l,{get:()=>t[l],enumerable:!(i=n(t,l))||i.enumerable});return e})(r({},"__esModule",{value:!0}),t));var i={"\xbc":"1/4","\xbd":"1/2","\xbe":"3/4","\u2150":"1/7","\u2151":"1/9","\u2152":"1/10","\u2153":"1/3","\u2154":"2/3","\u2155":"1/5","\u2156":"2/5","\u2157":"3/5","\u2158":"4/5","\u2159":"1/6","\u215a":"5/6","\u215b":"1/8","\u215c":"3/8","\u215d":"5/8","\u215e":"7/8","\u215f":"1/"},l=/^(?=-?\s*\.\d|-?\s*\d)(-)?\s*((?:\d(?:[\d,_]*\d)?)*)(([eE][+-]?\d(?:[\d,_]*\d)?)?|\.\d(?:[\d,_]*\d)?([eE][+-]?\d(?:[\d,_]*\d)?)?|(\s+\d(?:[\d,_]*\d)?\s*)?\s*\/\s*\d(?:[\d,_]*\d)?)?$/,u=new RegExp(l.source.replace(/\$$/,"(?:\\s*[^\\.\\d\\/].*)?")),c=new RegExp(`(${Object.keys(i).join("|")})`),f={MMM:3e3,MM:2e3,M:1e3,CM:900,DCCC:800,DCC:700,DC:600,D:500,CD:400,CCC:300,CC:200,C:100,XC:90,LXXX:80,LXX:70,LX:60,L:50,XL:40,XXX:30,XX:20,XII:12,XI:11,X:10,IX:9,VIII:8,VII:7,VI:6,V:5,IV:4,III:3,II:2,I:1},p={"\u2160":"I","\u2161":"II","\u2162":"III","\u2163":"IV","\u2164":"V","\u2165":"VI","\u2166":"VII","\u2167":"VIII","\u2168":"IX","\u2169":"X","\u216a":"XI","\u216b":"XII","\u216c":"L","\u216d":"C","\u216e":"D","\u216f":"M","\u2170":"I","\u2171":"II","\u2172":"III","\u2173":"IV","\u2174":"V","\u2175":"VI","\u2176":"VII","\u2177":"VIII","\u2178":"IX","\u2179":"X","\u217a":"XI","\u217b":"XII","\u217c":"L","\u217d":"C","\u217e":"D","\u217f":"M"},d=new RegExp(`(${Object.keys(p).join("|")})`,"gi"),h=/^(?=[MDCLXVI])(M{0,3})(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$/i,$={round:3,allowTrailingInvalid:!1,romanNumerals:!1},b=e=>{let t=`${e}`.replace(d,((e,t)=>p[t])).toUpperCase(),r=h.exec(t);if(!r)return NaN;let[,n,o,s,a]=r;return(f[n]??0)+(f[o]??0)+(f[s]??0)+(f[a]??0)},m=/^\s*\//,g=(e,t=$)=>{if("number"==typeof e||"bigint"==typeof e)return e;let r=NaN,n=`${e}`.replace(c,((e,t)=>` ${i[t]}`)).replace("\u2044","/").trim();if(0===n.length)return NaN;let o={...$,...t},s=(o.allowTrailingInvalid?u:l).exec(n);if(!s)return o.romanNumerals?b(n):NaN;let[,a,f,p]=s,d=f.replace(/[,_]/g,""),h=null==p?void 0:p.replace(/[,_]/g,"");if(r=!d&&h&&h.startsWith(".")?0:parseInt(d),!h)return a?-1*r:r;let g=!1===o.round?NaN:parseFloat(`1e${Math.floor(Math.max(0,o.round))}`);if(h.startsWith(".")||h.startsWith("e")||h.startsWith("E")){let e=parseFloat(`${r}${h}`);r=isNaN(g)?e:Math.round(e*g)/g}else if(m.test(h)){let e=parseInt(d),t=parseInt(h.replace("/",""));r=isNaN(g)?e/t:Math.round(e*g/t)/g}else{let e=h.split("/"),[t,n]=e.map((e=>parseInt(e)));r+=isNaN(g)?t/n:Math.round(t*g/n)/g}return a?-1*r:r}},59312:(e,t,r)=>{function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){n(e,t,r[t])}))}return e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}var a,i=Object.defineProperty,l=Object.getOwnPropertyDescriptor,u=Object.getOwnPropertyNames,c=Object.prototype.hasOwnProperty,f={};((e,t)=>{for(var r in t)i(e,r,{get:t[r],enumerable:!0})})(f,{defaultCELValueProcessor:()=>be,defaultMongoDBValueProcessor:()=>$e,defaultRuleProcessorCEL:()=>M,defaultRuleProcessorJsonLogic:()=>q,defaultRuleProcessorMongoDB:()=>X,defaultRuleProcessorSQL:()=>Q,defaultRuleProcessorSpEL:()=>R,defaultSpELValueProcessor:()=>me,defaultValueProcessor:()=>he,defaultValueProcessorByRule:()=>z,defaultValueProcessorCELByRule:()=>ge,defaultValueProcessorMongoDBByRule:()=>ye,defaultValueProcessorSpELByRule:()=>ve,formatQuery:()=>fe,jsonLogicAdditionalOperators:()=>P}),e.exports=(a=f,((e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of u(t))c.call(e,o)||o===r||i(e,o,{get:()=>t[o],enumerable:!(n=l(t,o))||n.enumerable});return e})(i({},"__esModule",{value:!0}),a));var p="~",d="~",h=e=>"string"==typeof e?e.trim():e,$=e=>Array.isArray(e)?e.map(h):"string"==typeof e?((e,t=",")=>"string"==typeof e?e.split(`\\${t}`).map((e=>e.split(t))).reduce(((e,r,n)=>0===n?r:[...e.slice(0,e.length-1),`${e[e.length-1]}${t}${r[0]}`,...r.slice(1)]),[]):[])(e,",").filter((e=>!/^\s*$/.test(e))).map((e=>e.trim())):"number"==typeof e?[e]:[],b=r(34362),m=(e,{parseNumbers:t}={})=>{if(!t||"bigint"==typeof e||"number"==typeof e)return e;if("native"===t)return parseFloat(e);const r=(0,b.numericQuantity)(e,{allowTrailingInvalid:"enhanced"===t,romanNumerals:!0,round:!1});return isNaN(r)?e:r},g=r(34362),y=new RegExp(g.numericRegex.source.replace(/^\^/,"^\\s*").replace(/\$$/,"\\s*$")),v=e=>null!==e&&"object"==typeof e&&Object.getPrototypeOf(e)===Object.prototype,N=e=>v(e)&&"rules"in e&&Array.isArray(e.rules),w=e=>N(e)&&"string"==typeof e.combinator,O=e=>{switch(e.toLowerCase()){case"null":return"is null";case"notnull":return"is not null";case"notin":return"not in";case"notbetween":return"not between";case"contains":case"beginswith":case"endswith":return"like";case"doesnotcontain":case"doesnotbeginwith":case"doesnotendwith":return"not like";default:return e}},j={"=":"$eq","!=":"$ne","<":"$lt","<=":"$lte",">":"$gt",">=":"$gte",in:"$in",notIn:"$nin"},I={and:"&&",or:"||"},P={startsWith:(e,t)=>"string"==typeof e&&e.startsWith(t),endsWith:(e,t)=>"string"==typeof e&&e.endsWith(t)},W=e=>s(o({},e),{rules:e.rules.map((e=>{if("string"==typeof e)return e;if(N(e))return W(e);let{value:t}=e;return"string"==typeof t&&(t=m(t,{parseNumbers:!0})),s(o({},e),{value:t})}))}),S=e=>"string"==typeof e&&e.length>0||"number"==typeof e&&!isNaN(e)||"string"!=typeof e&&"number"!=typeof e,C=(e,t)=>t&&("number"==typeof e||"bigint"==typeof e||"string"==typeof e&&y.test(e)),x=e=>e.length>=3,D=(e=["",""])=>Array.isArray(e)?e:"string"==typeof e?[e,e]:null!=e?e:["",""],E=e=>/^(does)?not/i.test(e),A=(e,t)=>"string"==typeof e&&t?e.replaceAll('"','\\"'):e,M=({field:e,operator:t,value:r,valueSource:n},{escapeQuotes:o,parseNumbers:s}={})=>{const a="field"===n,i=t.replace(/^=$/,"=="),l="number"==typeof r||"boolean"==typeof r||"bigint"==typeof r||C(r,s);switch(i){case"<":case"<=":case"==":case"!=":case">":case">=":return`${e} ${i} ${a||l?h(r):`"${A(r,o)}"`}`;case"contains":case"doesNotContain":return`${E(i)?"!":""}${e}.contains(${a?h(r):`"${A(r,o)}"`})`;case"beginsWith":case"doesNotBeginWith":return`${E(i)?"!":""}${e}.startsWith(${a?h(r):`"${A(r,o)}"`})`;case"endsWith":case"doesNotEndWith":return`${E(i)?"!":""}${e}.endsWith(${a?h(r):`"${A(r,o)}"`})`;case"null":return`${e} == null`;case"notNull":return`${e} != null`;case"in":case"notIn":{const t=E(i),n=$(r);return n.length>0?`${t?"!(":""}${e} in [${n.map((e=>a||C(e,s)?`${h(e)}`:`"${A(e,o)}"`)).join(", ")}]${t?")":""}`:""}case"between":case"notBetween":{const n=$(r);if(n.length>=2&&n[0]&&n[1]){const[r,s]=n,i=C(r,!0)?m(r,{parseNumbers:!0}):NaN,l=C(s,!0)?m(s,{parseNumbers:!0}):NaN;let u=isNaN(i)?a?`${r}`:`"${A(r,o)}"`:i,c=isNaN(l)?a?`${s}`:`"${A(s,o)}"`:l;if(u===i&&c===l&&l<i){c=i,u=l}return"between"===t?`(${e} >= ${u} && ${e} <= ${c})`:`(${e} < ${u} || ${e} > ${c})`}return""}}return""},L=e=>"string"!=typeof e?e:e.replaceAll("\\","\\\\").replaceAll('"','\\"'),X=({field:e,operator:t,value:r,valueSource:n},{parseNumbers:o}={})=>{const s="field"===n,a="number"==typeof r||"boolean"==typeof r||"bigint"==typeof r||C(r,o);if("="===t&&!s)return`{"${e}":${a?h(r):`"${L(r)}"`}}`;switch(t){case"<":case"<=":case"=":case"!=":case">":case">=":{const n=j[t];return s?`{"$expr":{"${n}":["$${e}","$${r}"]}}`:`{"${e}":{"${n}":${a?h(r):`"${L(r)}"`}}}`}case"contains":return s?`{"$where":"this.${e}.includes(this.${r})"}`:`{"${e}":{"$regex":"${L(r)}"}}`;case"beginsWith":return s?`{"$where":"this.${e}.startsWith(this.${r})"}`:`{"${e}":{"$regex":"^${L(r)}"}}`;case"endsWith":return s?`{"$where":"this.${e}.endsWith(this.${r})"}`:`{"${e}":{"$regex":"${L(r)}$"}}`;case"doesNotContain":return s?`{"$where":"!this.${e}.includes(this.${r})"}`:`{"${e}":{"$not":{"$regex":"${L(r)}"}}}`;case"doesNotBeginWith":return s?`{"$where":"!this.${e}.startsWith(this.${r})"}`:`{"${e}":{"$not":{"$regex":"^${L(r)}"}}}`;case"doesNotEndWith":return s?`{"$where":"!this.${e}.endsWith(this.${r})"}`:`{"${e}":{"$not":{"$regex":"${L(r)}$"}}}`;case"null":return`{"${e}":null}`;case"notNull":return`{"${e}":{"$ne":null}}`;case"in":case"notIn":{const n=$(r);return n.length>0?s?`{"$where":"${"notIn"===t?"!":""}[${n.map((e=>`this.${e}`)).join(",")}].includes(this.${e})"}`:`{"${e}":{"${j[t]}":[${n.map((e=>C(e,o)?`${h(e)}`:`"${L(e)}"`)).join(",")}]}}`:""}case"between":case"notBetween":{const n=$(r);if(n.length>=2&&S(n[0])&&S(n[1])){const[r,o]=n,a=C(r,!0)?m(r,{parseNumbers:!0}):NaN,i=C(o,!0)?m(o,{parseNumbers:!0}):NaN,l=s||!isNaN(a)?`${r}`:`"${L(r)}"`,u=s||!isNaN(i)?`${o}`:`"${L(o)}"`;return"between"===t?s?`{"$and":[{"$expr":{"$gte":["$${e}","$${l}"]}},{"$expr":{"$lte":["$${e}","$${u}"]}}]}`:`{"${e}":{"$gte":${l},"$lte":${u}}}`:s?`{"$or":[{"$expr":{"$lt":["$${e}","$${l}"]}},{"$expr":{"$gt":["$${e}","$${u}"]}}]}`:`{"$or":[{"${e}":{"$lt":${l}}},{"${e}":{"$gt":${u}}}]}`}return""}}return""},_=e=>/^(does)?not/i.test(e),B=(e,t)=>t?`!(${e})`:`${e}`,V=(e,t)=>"string"==typeof e&&t?e.replaceAll("'","\\'"):e,R=({field:e,operator:t,value:r,valueSource:n},{escapeQuotes:o,parseNumbers:s}={})=>{const a="field"===n,i=t.replace(/^=$/,"=="),l="number"==typeof r||"boolean"==typeof r||"bigint"==typeof r||C(r,s);switch(i){case"<":case"<=":case"==":case"!=":case">":case">=":return`${e} ${i} ${a||l?h(r):`'${V(r,o)}'`}`;case"contains":case"doesNotContain":return B(`${e} matches ${a||l?h(r):`'${V(r,o)}'`}`,_(i));case"beginsWith":case"doesNotBeginWith":{const t=a?`'^'.concat(${h(r)})`:`'${"string"==typeof r&&!r.startsWith("^")||l?"^":""}${V(r,o)}'`;return B(`${e} matches ${t}`,_(i))}case"endsWith":case"doesNotEndWith":{const t=a?`${h(r)}.concat('$')`:`'${V(r,o)}${"string"==typeof r&&!r.endsWith("$")||l?"$":""}'`;return B(`${e} matches ${t}`,_(i))}case"null":return`${e} == null`;case"notNull":return`${e} != null`;case"in":case"notIn":{const t=_(i)?"!":"",n=$(r);return n.length>0?`${t}(${n.map((t=>`${e} == ${a||C(t,s)?`${h(t)}`:`'${V(t,o)}'`}`)).join(" or ")})`:""}case"between":case"notBetween":{const n=$(r);if(n.length>=2&&n[0]&&n[1]){const[r,s]=n,i=C(r,!0)?m(r,{parseNumbers:!0}):NaN,l=C(s,!0)?m(s,{parseNumbers:!0}):NaN;let u=isNaN(i)?a?`${r}`:`'${V(r,o)}'`:i,c=isNaN(l)?a?`${s}`:`'${V(s,o)}'`:l;if(u===i&&c===l&&l<i){c=i,u=l}return"between"===t?`(${e} >= ${u} and ${e} <= ${c})`:`(${e} < ${u} or ${e} > ${c})`}return""}}return""},F=(e,t)=>t&&"string"==typeof e?e.replaceAll("'","''"):e,z=({operator:e,value:t,valueSource:r},{escapeQuotes:n,parseNumbers:o,quoteFieldNamesWith:s}={})=>{const a="field"===r,[i,l]=D(s),u=e.toLowerCase(),c=e=>`${i}${e}${l}`;switch(u){case"null":case"notnull":return"";case"in":case"notin":{const e=$(t);return e.length>0?`(${e.map((e=>a?c(e):C(e,o)?`${h(e)}`:`'${F(e,n)}'`)).join(", ")})`:""}case"between":case"notbetween":{const e=$(t);if(e.length>=2&&S(e[0])&&S(e[1])){const[t,r]=e;return a?`${c(t)} and ${c(r)}`:C(t,o)&&C(r,o)?`${h(t)} and ${h(r)}`:`'${F(t,n)}' and '${F(r,n)}'`}return""}case"contains":case"doesnotcontain":return a?`'%' || ${c(t)} || '%'`:`'%${F(t,n)}%'`;case"beginswith":case"doesnotbeginwith":return a?`${c(t)} || '%'`:`'${F(t,n)}%'`;case"endswith":case"doesnotendwith":return a?`'%' || ${c(t)}`:`'%${F(t,n)}'`}return"boolean"==typeof t?t?"TRUE":"FALSE":a?c(t):C(t,o)?`${h(t)}`:`'${F(t,n)}'`},k=(e,t)=>/^(does)?not/i.test(e)?{"!":t}:t,q=({field:e,operator:t,value:r,valueSource:n},{parseNumbers:o}={})=>{const s="field"===n,a={var:e},i=e=>s?{var:`${e}`}:C(e,o)?m(e,{parseNumbers:o}):e;switch(t){case"<":case"<=":case"=":case"!=":case">":case">=":return{[(l=t,l.replace(/^(=)$/,"$1=").replace(/^notNull$/i,"!=").replace(/^null$/i,"=="))]:[a,i(r)]};case"null":case"notNull":return{[("notNull"===t?"!":"=")+"="]:[a,null]};case"in":case"notIn":{const e=$(r).map(i);if(e.length>0){return k(t,{in:[a,e]})}return!1}case"between":case"notBetween":{const e=$(r);if(e.length>=2&&S(e[0])&&S(e[1])){let[r,n]=e;if(!s&&C(r,!0)&&C(n,!0)){const e=m(r,{parseNumbers:!0}),t=m(n,{parseNumbers:!0});if(t<e){n=e,r=t}else r=e,n=t}else s&&(r={var:r},n={var:n});return k(t,{"<=":[r,a,n]})}return!1}case"contains":case"doesNotContain":{const e={in:[i(r),a]};return k(t,e)}case"beginsWith":case"doesNotBeginWith":{const e={startsWith:[a,i(r)]};return k(t,e)}case"endsWith":case"doesNotEndWith":{const e={endsWith:[a,i(r)]};return k(t,e)}}var l;return!1},Q=(e,{parseNumbers:t,escapeQuotes:r,quoteFieldNamesWith:n=["",""],valueProcessor:o=z}={})=>{const s=o(e,{parseNumbers:t,escapeQuotes:r,quoteFieldNamesWith:n}),a=O(e.operator),i=a.toLowerCase();if(("in"===i||"not in"===i||"between"===i||"not between"===i)&&!s)return"";const[l,u]=D(n);return`${l}${e.field}${u} ${a} ${s}`.trim()},T=e=>N(e)?U(e):e,U=e=>{const t=[],r=e=>t.push(T(e));let n=0;for(let o=0;o<e.rules.length;o+=2)if(1===e.rules.length)r(e.rules[0]);else if("and"===e.rules[o+1]){n=o;let r=1;for(;"and"===e.rules[n+r];)o+=2,r+=2;t.push({rules:e.rules.slice(n,o+1).map(T)}),o-=2}else"or"===e.rules[o+1]&&(0===o||o===e.rules.length-3?(0!==o&&"or"!==e.rules[o-1]||r(e.rules[o]),r(e.rules[o+1]),o===e.rules.length-3&&r(e.rules[o+2])):("and"===e.rules[o-1]||r(e.rules[o]),r(e.rules[o+1])));return 1===t.length&&"object"==typeof t[0]&&N(t[0])?o({},e,t[0]):s(o({},e),{rules:t})},K=e=>{if(w(e))return e;const t=U(e),r=t.rules.map((e=>"string"!=typeof e&&N(e)?K(e):e)),n=r.length<2?"and":r[1],a=r.filter((e=>"string"!=typeof e));return s(o({},t),{combinator:n,rules:a})},J=e=>v(e)&&"boolean"==typeof e.valid,G=(e,t,r)=>{if("boolean"==typeof t)return t;if(J(t))return t.valid;if("function"==typeof r&&!N(e)){const t=r(e);if("boolean"==typeof t)return t;if(J(t))return t.valid}return!0},H=r(67267),Y=e=>v(e)&&"name"in e&&"string"==typeof e.name,Z=e=>v(e)&&"value"in e&&"string"==typeof e.value;function ee(e){return(0,H.produce)((e=>{Y(e)&&!Z(e)?e.value=e.name:!Y(e)&&Z(e)&&(e.name=e.value)}))(e)}var te=e=>Array.isArray(e)&&e.length>0&&v(e[0])&&"options"in e[0],re=e=>Array.isArray(e)&&e.length>0&&v(e[0])&&"options"in e[0]&&v(e[0].options[0])&&("name"in e[0].options[0]||"value"in e[0].options[0]),ne=(e,t)=>(te(e)?e.flatMap((e=>e.options)):e).find((e=>e.name===t)),oe=e=>(e=>{const t=new Set,r=[];return e.forEach((e=>{var n,o;t.has(null!==(n=e.value)&&void 0!==n?n:e.name)||(t.add(null!==(o=e.value)&&void 0!==o?o:e.name),r.push(e))})),e.length===r.length?e:r})(te(e)?e.flatMap((e=>e.options)):e),se={"<":"lt","<=":"lte",">":"gt",">=":"gte"},ae=(e,t)=>/^(does)?not/i.test(e)?{bool:{must_not:t}}:t,ie=e=>null==e?void 0:e.replace(/('|\\)/g,"\\$1"),le={beginsWith:"startsWith",doesNotContain:"contains",doesNotBeginWith:"startsWith",doesNotEndWith:"endsWith"},ue=(e,t)=>"boolean"==typeof e?e:C(e,t)?m(e,{parseNumbers:t}):e,ce=({field:e,operator:t,value:r,valueSource:n},{parseNumbers:o}={})=>{if("field"===n){if($(r).some((e=>"string"!=typeof e)))return!1;const n=ie(e);switch(t){case"=":case"!=":case">":case">=":case"<":case"<=":{const e="="===t?"==":t,o=ie(r);return!!o&&{bool:{filter:{script:{script:`doc['${n}'] ${e} doc['${o}']`}}}}}case"in":case"notIn":{const e=$(r);if(e.length>0){const r=e.map((e=>({bool:{filter:{script:{script:`doc['${n}'] == doc['${e}']`}}}})));return{bool:"in"===t?{should:r}:{must_not:r}}}return!1}case"between":case"notBetween":{const e=$(r);if(e.length>=2&&e[0]&&e[1]){const r=`doc['${n}'] >= doc['${e[0]}'] && doc['${n}'] <= doc['${e[1]}']`;return{bool:{filter:{script:{script:"notBetween"===t?`!(${r})`:r}}}}}return!1}case"contains":case"doesNotContain":case"beginsWith":case"doesNotBeginWith":case"endsWith":case"doesNotEndWith":{const e=ie(r);if(!e)return!1;return{bool:{filter:{script:{script:((e,t,r)=>{var n;const o=`doc['${e}'].${null!==(n=le[t])&&void 0!==n?n:t}(doc['${r}'])`;return t.startsWith("d")?`!${o}`:o})(n,t,e)}}}}}}}switch(t){case"<":case"<=":case">":case">=":return{range:{[e]:{[se[t]]:ue(r,o)}}};case"=":return{term:{[e]:ue(r,o)}};case"!=":return{bool:{must_not:{term:{[e]:ue(r,o)}}}};case"null":return{bool:{must_not:{exists:{field:e}}}};case"notNull":return{exists:{field:e}};case"in":case"notIn":{const n=$(r).map((e=>ue(e,o)));if(n.length>0){const r=n.map((t=>({term:{[e]:ue(t,o)}})));return{bool:"in"===t?{should:r}:{must_not:r}}}return!1}case"between":case"notBetween":{const n=$(r);if(n.length>=2&&S(n[0])&&S(n[1])){let[r,o]=n;if(C(r,!0)&&C(o,!0)){const e=m(r,{parseNumbers:!0}),t=m(o,{parseNumbers:!0});if(t<e){o=e,r=t}else r=e,o=t}return ae(t,{range:{[e]:{gte:r,lte:o}}})}return!1}case"contains":case"doesNotContain":return ae(t,{regexp:{[e]:{value:r}}});case"beginsWith":case"doesNotBeginWith":return ae(t,{regexp:{[e]:{value:`^${r}`}}});case"endsWith":case"doesNotEndWith":return ae(t,{regexp:{[e]:{value:`${r}$`}}})}return!1};function fe(e,t={}){let r="json",n=z,o=null,s=["",""],a=()=>!0,i=[],l={},u="",c=":",f=!1,h=!1,b=p,g=d;if("string"==typeof t)r=t.toLowerCase(),"mongodb"===r?o=X:"cel"===r?o=M:"spel"===r?o=R:"jsonlogic"===r?o=q:"elasticsearch"===r&&(o=ce);else{var y;r=(null!==(y=t.format)&&void 0!==y?y:"json").toLowerCase();const{valueProcessor:e=null,ruleProcessor:l=null}=t;var v,j,P,S,E,A;"function"==typeof l&&(o=l),n="function"==typeof e?(t,r)=>x(e)?e(t.field,t.operator,t.value,t.valueSource):e(t,r):"mongodb"===r?null!=o?o:X:"cel"===r?null!=o?o:M:"spel"===r?null!=o?o:R:"jsonlogic"===r?null!=o?o:q:"elasticsearch"==r?null!=o?o:ce:z,s=D(t.quoteFieldNamesWith),a=null!==(v=t.validator)&&void 0!==v?v:()=>!0,L=null!==(j=t.fields)&&void 0!==j?j:[],i=Array.isArray(L)?(0,H.produce)((e=>{if(re(e))for(const t of e)t.options.forEach(((e,r)=>t.options[r]=ee(e)));else e.forEach(((t,r)=>e[r]=ee(t)))}))(L):[],u=null!==(P=t.fallbackExpression)&&void 0!==P?P:"",c=null!==(S=t.paramPrefix)&&void 0!==S?S:":",f=!!t.paramsKeepPrefix,h=!!t.parseNumbers,b=null!==(E=t.placeholderFieldName)&&void 0!==E?E:p,g=null!==(A=t.placeholderOperatorName)&&void 0!==A?A:d}var L;if(u||(u="mongodb"===r?'"$and":[{"$expr":true}]':"cel"===r||"spel"===r?"1 == 1":"(1 = 1)"),"json"===r||"json_without_ids"===r){const t=h?W(e):e;return"json"===r?JSON.stringify(t,null,2):JSON.stringify(t,((e,t)=>"id"===e||"path"===e?void 0:t))}if("function"==typeof a){const t=a(e);if("boolean"==typeof t){if(!1===t)return"parameterized"===r?{sql:u,params:[]}:"parameterized_named"===r?{sql:u,params:{}}:"mongodb"===r?`{${u}}`:"jsonlogic"!==r&&("elasticsearch"===r?{}:u)}else l=t}const _={},B=oe(i);B.forEach((e=>{var t;"function"==typeof e.validator&&(_[null!==(t=e.value)&&void 0!==t?t:e.name]=e.validator)}));const V=e=>{let t,r;if(e.id&&(t=l[e.id]),B.length){const t=B.filter((t=>t.name===e.field));if(t.length){const e=t[0];"function"==typeof e.validator&&(r=e.validator)}}return[t,r]};if("sql"===r){const t=(e,a)=>{var c;if(!G(e,l[null!==(c=e.id)&&void 0!==c?c:""]))return a?u:"";const f=e.rules.map((a=>{if("string"==typeof a)return a;if(N(a))return t(a,1===e.rules.length);const[l,u]=V(a);if(!G(a,l,u)||a.field===b||a.operator===g)return"";var c;const f="value"===(null!==(c=a.valueSource)&&void 0!==c?c:"value"),p=ne(i,a.field);return"function"==typeof o?o(a,{parseNumbers:h,escapeQuotes:f,quoteFieldNamesWith:s,fieldData:p,format:r}):Q(a,{parseNumbers:h,escapeQuotes:f,valueProcessor:n,quoteFieldNamesWith:s,fieldData:p,format:r})}));return 0===f.length?u:`${e.not?"NOT ":""}(${f.filter(Boolean).join(w(e)?` ${e.combinator} `:" ")})`};return t(e,!0)}if("parameterized"===r||"parameterized_named"===r){const t="parameterized"===r,o=[],a={},p={},d=e=>{var t;return p[e]=(null!==(t=p[e])&&void 0!==t?t:0)+1,`${e}_${p[e]}`},y=e=>{const[l,u]=V(e);if(!G(e,l,u)||e.field===b||e.operator===g)return"";const p=ne(i,e.field),y=n(e,{parseNumbers:h,quoteFieldNamesWith:s,fieldData:p,format:r}),v=O(e.operator);var N;if("value"===(null!==(N=e.valueSource)&&void 0!==N?N:"value")){if("is null"===v.toLowerCase()||"is not null"===v.toLowerCase())return`${s[0]}${e.field}${s[1]} ${v}`;if("in"===v.toLowerCase()||"not in"===v.toLowerCase()){if(y){const r=$(e.value);if(t)return r.forEach((e=>o.push(C(e,h)?m(e,{parseNumbers:h}):e))),`${s[0]}${e.field}${s[1]} ${v} (${r.map((()=>"?")).join(", ")})`;const n=[];return r.forEach((t=>{const r=d(e.field);n.push(`${c}${r}`),a[`${f?c:""}${r}`]=C(t,h)?m(t,{parseNumbers:h}):t})),`${s[0]}${e.field}${s[1]} ${v} (${n.join(", ")})`}return""}if("between"===v.toLowerCase()||"not between"===v.toLowerCase()){if(y){const r=$(e.value),[n,i]=r.slice(0,2).map((e=>C(e,h)?m(e,{parseNumbers:h}):e));if(t)return o.push(n),o.push(i),`${s[0]}${e.field}${s[1]} ${v} ? and ?`;const l=d(e.field),u=d(e.field);return a[`${f?c:""}${l}`]=n,a[`${f?c:""}${u}`]=i,`${s[0]}${e.field}${s[1]} ${v} ${c}${l} and ${c}${u}`}return""}let r=e.value;"string"==typeof e.value&&(r=C(e.value,h)?m(e.value,{parseNumbers:h}):/^'.*'$/g.test(y)?y.replace(/(^'|'$)/g,""):y);let n="";return t?o.push(r):(n=d(e.field),a[`${f?c:""}${n}`]=r),`${s[0]}${e.field}${s[1]} ${v} ${t?"?":`${c}${n}`}`.trim()}{const e=v.toLowerCase();if(("in"===e||"not in"===e||"between"===e||"not between"===e)&&!y)return""}return`${s[0]}${e.field}${s[1]} ${v} ${y}`.trim()},v=(e,t)=>{var r;if(!G(e,l[null!==(r=e.id)&&void 0!==r?r:""]))return t?u:"";const n=e.rules.map((t=>"string"==typeof t?t:N(t)?v(t,1===e.rules.length):y(t)));return 0===n.length?u:`${e.not?"NOT ":""}(${n.filter(Boolean).join(w(e)?` ${e.combinator} `:" ")})`};return t?{sql:v(e,!0),params:o}:{sql:v(e,!0),params:a}}if("mongodb"===r){const t=(e,s)=>{var a;if(!G(e,l[null!==(a=e.id)&&void 0!==a?a:""]))return s?u:"";const c=`"$${e.combinator.toLowerCase()}"`;let f=!1;const p=e.rules.map((e=>{if(N(e)){const r=t(e);return r?(f=!0,/^\{.+\}$/.test(r)?r:`{${r}}`):""}const[s,a]=V(e);if(!G(e,s,a)||e.field===b||e.operator===g)return"";const l=ne(i,e.field);return(null!=o?o:n)(e,{parseNumbers:h,fieldData:l,format:r})})).filter(Boolean);return p.length>0?1!==p.length||f?`${c}:[${p.join(",")}]`:p[0]:u},s=w(e)?e:K(e),a=t(s,!0);return/^\{.+\}$/.test(a)?a:`{${a}}`}if("cel"===r){const t=(e,s)=>{var a;if(!G(e,l[null!==(a=e.id)&&void 0!==a?a:""]))return s?u:"";const c=e.rules.map((e=>{if("string"==typeof e)return I[e];if(N(e))return t(e);const[s,a]=V(e);if(!G(e,s,a)||e.field===b||e.operator===g)return"";const l=ne(i,e.field);var u;return(null!=o?o:n)(e,{parseNumbers:h,escapeQuotes:"value"===(null!==(u=e.valueSource)&&void 0!==u?u:"value"),fieldData:l,format:r})})).filter(Boolean).join(w(e)?` ${I[e.combinator]} `:" "),[f,p]=e.not||!s?[(e.not?"!":"")+"(",")"]:["",""];return c?`${f}${c}${p}`:u};return t(e,!0)}if("spel"===r){const t=(e,s)=>{var a;if(!G(e,l[null!==(a=e.id)&&void 0!==a?a:""]))return s?u:"";const c=e.rules.map((e=>{if("string"==typeof e)return e;if(N(e))return t(e);const[s,a]=V(e);if(!G(e,s,a)||e.field===b||e.operator===g)return"";const l=ne(i,e.field);var u;return(null!=o?o:n)(e,{parseNumbers:h,escapeQuotes:"value"===(null!==(u=e.valueSource)&&void 0!==u?u:"value"),fieldData:l,format:r})})).filter(Boolean).join(w(e)?` ${e.combinator} `:" "),[f,p]=e.not||!s?[(e.not?"!":"")+"(",")"]:["",""];return c?`${f}${c}${p}`:u};return t(e,!0)}if("jsonlogic"===r){const t=w(e)?e:K(e),s=(e,t)=>{var a;if(!G(e,l[null!==(a=e.id)&&void 0!==a?a:""]))return!1;const u=e.rules.map((e=>{if(N(e))return s(e);const[t,a]=V(e);if(!G(e,t,a)||e.field===b||e.operator===g)return!1;const l=ne(i,e.field);return(null!=o?o:n)(e,{parseNumbers:h,fieldData:l,format:r})})).filter(Boolean);if(0===u.length)return!1;const c=1===u.length&&t?u[0]:{[e.combinator]:u};return e.not?{"!":c}:c};return s(t,!0)}if("elasticsearch"===r){const t=w(e)?e:K(e),s=e=>{var t;if(!G(e,l[null!==(t=e.id)&&void 0!==t?t:""]))return!1;const a=e.rules.map((e=>{if(N(e))return s(e);const[t,a]=V(e);if(!G(e,t,a)||e.field===b||e.operator===g)return!1;const l=ne(i,e.field);return(null!=o?o:n)(e,{parseNumbers:h,fieldData:l,format:r})})).filter(Boolean);return 0!==a.length&&{bool:e.not?{must_not:"or"===e.combinator?{bool:{should:a}}:a}:{["or"===e.combinator?"should":"must"]:a}}},a=s(t);return!1===a?{}:a}return""}var pe={default:z,mongodb:X,cel:M,spel:R},de=e=>(t,r,n,o)=>pe[e]({field:t,operator:r,value:n,valueSource:o},{parseNumbers:!1}),he=de("default"),$e=de("mongodb"),be=de("cel"),me=de("spel"),ge=M,ye=X,ve=R}}]);