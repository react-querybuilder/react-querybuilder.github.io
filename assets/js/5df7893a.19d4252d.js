"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5543],{35318:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(27378);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(t),c=o,f=m["".concat(p,".").concat(c)]||m[c]||d[c]||a;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=c;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},91494:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=t(52685),o=(t(27378),t(35318));const a={title:"RuleGroup",description:"Recursive layout and config component for groups"},i=void 0,l={unversionedId:"components/rulegroup",id:"version-6/components/rulegroup",title:"RuleGroup",description:"Recursive layout and config component for groups",source:"@site/versioned_docs/version-6/components/rulegroup.mdx",sourceDirName:"components",slug:"/components/rulegroup",permalink:"/docs/components/rulegroup",draft:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/versioned_docs/version-6/components/rulegroup.mdx",tags:[],version:"6",frontMatter:{title:"RuleGroup",description:"Recursive layout and config component for groups"},sidebar:"mySidebar",previous:{title:"QueryBuilder",permalink:"/docs/components/querybuilder"},next:{title:"Rule",permalink:"/docs/components/rule"}},p={},u=[{value:"Subcomponents",id:"subcomponents",level:2},{value:"<code>RuleGroupHeaderComponents</code>",id:"rulegroupheadercomponents",level:3},{value:"<code>RuleGroupBodyComponents</code>",id:"rulegroupbodycomponents",level:3}],s={toc:u},m="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(m,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"RuleGroup")," component allows React Query Builder to visually represent its recursive, hierarchical query structure. ",(0,o.kt)("inlineCode",{parentName:"p"},"RuleGroup")," calls the ",(0,o.kt)("a",{parentName:"p",href:"../utils/hooks#userulegroup"},(0,o.kt)("inlineCode",{parentName:"a"},"useRuleGroup"))," hook to prepare the subcomponent props."),(0,o.kt)("h2",{id:"subcomponents"},"Subcomponents"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"RuleGroup")," renders an outer ",(0,o.kt)("inlineCode",{parentName:"p"},"<div>")," and two inner ",(0,o.kt)("inlineCode",{parentName:"p"},"<div>"),"s, the first containing ",(0,o.kt)("a",{parentName:"p",href:"#rulegroupheadercomponents"},"header elements")," (derived from the group properties) and the second containing ",(0,o.kt)("a",{parentName:"p",href:"#rulegroupbodycomponents"},"body elements")," (derived primarily from a map of the group's ",(0,o.kt)("inlineCode",{parentName:"p"},"rules")," array)."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The header and body layout components themselves don't rely on HTML elements like ",(0,o.kt)("inlineCode",{parentName:"p"},"<div>"),". This allows ",(0,o.kt)("inlineCode",{parentName:"p"},"@react-querybuilder/native"),", for example, to render the same layout components within React Native ",(0,o.kt)("inlineCode",{parentName:"p"},"<View>")," elements. Feel free to use them in the same way.")),(0,o.kt)("h3",{id:"rulegroupheadercomponents"},(0,o.kt)("inlineCode",{parentName:"h3"},"RuleGroupHeaderComponents")),(0,o.kt)("p",null,"This component renders the following elements in this order:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Drag handle",(0,o.kt)("sup",{parentName:"li",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,o.kt)("li",{parentName:"ul"},"Combinator selector",(0,o.kt)("sup",{parentName:"li",id:"fnref-2"},(0,o.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))),(0,o.kt)("li",{parentName:"ul"},'"Not" toggle',(0,o.kt)("sup",{parentName:"li",id:"fnref-3"},(0,o.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3"))),(0,o.kt)("li",{parentName:"ul"},"Add rule button"),(0,o.kt)("li",{parentName:"ul"},"Add group button"),(0,o.kt)("li",{parentName:"ul"},"Clone group button",(0,o.kt)("sup",{parentName:"li",id:"fnref-4"},(0,o.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4"))),(0,o.kt)("li",{parentName:"ul"},"Lock group button",(0,o.kt)("sup",{parentName:"li",id:"fnref-5"},(0,o.kt)("a",{parentName:"sup",href:"#fn-5",className:"footnote-ref"},"5"))),(0,o.kt)("li",{parentName:"ul"},"Remove group button",(0,o.kt)("sup",{parentName:"li",id:"fnref-6"},(0,o.kt)("a",{parentName:"sup",href:"#fn-6",className:"footnote-ref"},"6")))),(0,o.kt)("h3",{id:"rulegroupbodycomponents"},(0,o.kt)("inlineCode",{parentName:"h3"},"RuleGroupBodyComponents")),(0,o.kt)("p",null,"This component loops through a group's ",(0,o.kt)("inlineCode",{parentName:"p"},"rules")," array and renders a child ",(0,o.kt)("inlineCode",{parentName:"p"},"RuleGroup")," element for each group and a ",(0,o.kt)("a",{parentName:"p",href:"./rule"},(0,o.kt)("inlineCode",{parentName:"a"},"Rule"))," element for each rule."),(0,o.kt)("p",null,"If ",(0,o.kt)("a",{parentName:"p",href:"./querybuilder#showcombinatorsbetweenrules"},(0,o.kt)("inlineCode",{parentName:"a"},"showCombinatorsBetweenRules"))," is ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", an inline combinator",(0,o.kt)("sup",{parentName:"p",id:"fnref-7"},(0,o.kt)("a",{parentName:"sup",href:"#fn-7",className:"footnote-ref"},"7"))," (whose ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," is the group's ",(0,o.kt)("inlineCode",{parentName:"p"},"combinator"),") is rendered ahead of each rule or group except the first."),(0,o.kt)("p",null,"When ",(0,o.kt)("a",{parentName:"p",href:"./querybuilder#independentcombinators"},(0,o.kt)("inlineCode",{parentName:"a"},"independentCombinators"))," is ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", each odd-numbered index in the ",(0,o.kt)("inlineCode",{parentName:"p"},"rules")," array is a ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," representing a combinator. For those elements, an independent, inline combinator is rendered."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"independentCombinators")," prop supersedes ",(0,o.kt)("inlineCode",{parentName:"p"},"showCombinatorsBetweenRules"),".")),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},"The default styles hide this element if ",(0,o.kt)("a",{parentName:"li",href:"./querybuilder#enabledraganddrop"},(0,o.kt)("inlineCode",{parentName:"a"},"enableDragAndDrop"))," is ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),", but it is ",(0,o.kt)("em",{parentName:"li"},"always")," rendered.",(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-2"},"Only rendered if neither ",(0,o.kt)("a",{parentName:"li",href:"./querybuilder#showcombinatorsbetweenrules"},(0,o.kt)("inlineCode",{parentName:"a"},"showCombinatorsBetweenRules"))," nor ",(0,o.kt)("a",{parentName:"li",href:"./querybuilder#independentcombinators"},(0,o.kt)("inlineCode",{parentName:"a"},"independentCombinators"))," are ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),".",(0,o.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-3"},"Only rendered if ",(0,o.kt)("a",{parentName:"li",href:"./querybuilder#shownottoggle"},(0,o.kt)("inlineCode",{parentName:"a"},"showNotToggle"))," is ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),".",(0,o.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-4"},"Only rendered if ",(0,o.kt)("a",{parentName:"li",href:"./querybuilder#showclonebuttons"},(0,o.kt)("inlineCode",{parentName:"a"},"showCloneButtons"))," is ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),".",(0,o.kt)("a",{parentName:"li",href:"#fnref-4",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-5"},"Only rendered if ",(0,o.kt)("a",{parentName:"li",href:"./querybuilder#showlockbuttons"},(0,o.kt)("inlineCode",{parentName:"a"},"showLockButtons"))," is ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),".",(0,o.kt)("a",{parentName:"li",href:"#fnref-5",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-6"},"Only rendered if the group is not the query root.",(0,o.kt)("a",{parentName:"li",href:"#fnref-6",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-7"},"The ",(0,o.kt)("a",{parentName:"li",href:"./querybuilder#inlinecombinator"},(0,o.kt)("inlineCode",{parentName:"a"},"inlineCombinator"))," component in turn renders the configured ",(0,o.kt)("a",{parentName:"li",href:"./querybuilder#combinatorselector"},(0,o.kt)("inlineCode",{parentName:"a"},"combinatorSelector")),".",(0,o.kt)("a",{parentName:"li",href:"#fnref-7",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0}}]);