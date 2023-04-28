"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3496],{94134:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(52685),a=(n(27378),n(35318));const o={title:"Rule",description:"Layout and config component for rules"},l=void 0,i={unversionedId:"components/rule",id:"components/rule",title:"Rule",description:"Layout and config component for rules",source:"@site/docs/components/rule.mdx",sourceDirName:"components",slug:"/components/rule",permalink:"/docs/next/components/rule",draft:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/docs/components/rule.mdx",tags:[],version:"current",frontMatter:{title:"Rule",description:"Layout and config component for rules"},sidebar:"mySidebar",previous:{title:"RuleGroup",permalink:"/docs/next/components/rulegroup"},next:{title:"ActionElement",permalink:"/docs/next/components/actionelement"}},p={},s=[{value:"Subcomponents",id:"subcomponents",level:2}],u={toc:s},m="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Rule")," component represents query conditions. ",(0,a.kt)("inlineCode",{parentName:"p"},"Rule")," calls the ",(0,a.kt)("a",{parentName:"p",href:"../utils/hooks#userule"},(0,a.kt)("inlineCode",{parentName:"a"},"useRule"))," hook to prepare the subcomponent props."),(0,a.kt)("h2",{id:"subcomponents"},"Subcomponents"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Rule")," renders elements in this order:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Drag handle",(0,a.kt)("sup",{parentName:"li",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,a.kt)("li",{parentName:"ul"},"Field selector"),(0,a.kt)("li",{parentName:"ul"},"Operator selector",(0,a.kt)("sup",{parentName:"li",id:"fnref-2"},(0,a.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))),(0,a.kt)("li",{parentName:"ul"},"Value source selector",(0,a.kt)("sup",{parentName:"li",id:"fnref-3"},(0,a.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3"))," ",(0,a.kt)("sup",{parentName:"li",id:"fnref-4"},(0,a.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4"))),(0,a.kt)("li",{parentName:"ul"},"Value editor",(0,a.kt)("sup",{parentName:"li",id:"fnref-4"},(0,a.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4"))),(0,a.kt)("li",{parentName:"ul"},"Clone rule button",(0,a.kt)("sup",{parentName:"li",id:"fnref-5"},(0,a.kt)("a",{parentName:"sup",href:"#fn-5",className:"footnote-ref"},"5"))),(0,a.kt)("li",{parentName:"ul"},"Lock rule button",(0,a.kt)("sup",{parentName:"li",id:"fnref-6"},(0,a.kt)("a",{parentName:"sup",href:"#fn-6",className:"footnote-ref"},"6"))),(0,a.kt)("li",{parentName:"ul"},"Remove rule button")),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"The ",(0,a.kt)("a",{parentName:"li",href:"../styling/overview"},"default styles")," hide this element if ",(0,a.kt)("a",{parentName:"li",href:"./querybuilder#enabledraganddrop"},(0,a.kt)("inlineCode",{parentName:"a"},"enableDragAndDrop"))," is ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),", but it is ",(0,a.kt)("em",{parentName:"li"},"always")," rendered.",(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-2"},"Only rendered if ",(0,a.kt)("a",{parentName:"li",href:"./querybuilder#autoselectfield"},(0,a.kt)("inlineCode",{parentName:"a"},"autoSelectField"))," is ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," or the rule's ",(0,a.kt)("inlineCode",{parentName:"li"},"field")," doesn't match ",(0,a.kt)("inlineCode",{parentName:"li"},"translations.fields.placeholderName"),".",(0,a.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-3"},"Only rendered if the rule's ",(0,a.kt)("inlineCode",{parentName:"li"},"operator")," is neither ",(0,a.kt)("inlineCode",{parentName:"li"},'"null"')," nor ",(0,a.kt)("inlineCode",{parentName:"li"},'"notNull"')," and the derived ",(0,a.kt)("inlineCode",{parentName:"li"},"valueSources")," array has more than one element.",(0,a.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-4"},"Only rendered when (1) the ",(0,a.kt)("inlineCode",{parentName:"li"},"arity")," property of the rule's ",(0,a.kt)("inlineCode",{parentName:"li"},"operator")," is not ",(0,a.kt)("inlineCode",{parentName:"li"},'"unary"')," or ",(0,a.kt)("inlineCode",{parentName:"li"},"< 2"),", and (2) ",(0,a.kt)("a",{parentName:"li",href:"./querybuilder#autoselectoperator"},(0,a.kt)("inlineCode",{parentName:"a"},"autoSelectOperator"))," is ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," ",(0,a.kt)("em",{parentName:"li"},"or")," the rule's ",(0,a.kt)("inlineCode",{parentName:"li"},"operator")," doesn't match ",(0,a.kt)("inlineCode",{parentName:"li"},"translations.operators.placeholderName"),".",(0,a.kt)("a",{parentName:"li",href:"#fnref-4",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-5"},"Only rendered if ",(0,a.kt)("a",{parentName:"li",href:"./querybuilder#showclonebuttons"},(0,a.kt)("inlineCode",{parentName:"a"},"showCloneButtons"))," is ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),".",(0,a.kt)("a",{parentName:"li",href:"#fnref-5",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-6"},"Only rendered if ",(0,a.kt)("a",{parentName:"li",href:"./querybuilder#showlockbuttons"},(0,a.kt)("inlineCode",{parentName:"a"},"showLockButtons"))," is ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),".",(0,a.kt)("a",{parentName:"li",href:"#fnref-6",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0},35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),c=a,d=m["".concat(p,".").concat(c)]||m[c]||f[c]||o;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);