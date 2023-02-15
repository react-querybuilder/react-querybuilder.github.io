"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2845],{87310:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var n=t(83117),i=(t(67294),t(3905));const o={title:"Adding and removing query properties",description:"Customizing the query object",hide_table_of_contents:!0},a=void 0,p={unversionedId:"tips/adding-removing-query-properties",id:"tips/adding-removing-query-properties",title:"Adding and removing query properties",description:"Customizing the query object",source:"@site/docs/tips/adding-removing-query-properties.mdx",sourceDirName:"tips",slug:"/tips/adding-removing-query-properties",permalink:"/docs/next/tips/adding-removing-query-properties",draft:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/docs/tips/adding-removing-query-properties.mdx",tags:[],version:"current",frontMatter:{title:"Adding and removing query properties",description:"Customizing the query object",hide_table_of_contents:!0},sidebar:"mySidebar",previous:{title:"Custom bind variables",permalink:"/docs/next/tips/custom-bind-variables"},next:{title:"Common mistakes",permalink:"/docs/next/tips/common-mistakes"}},s={},u=[{value:"Removing properties",id:"removing-properties",level:2},{value:"Adding properties",id:"adding-properties",level:2}],l={toc:u};function c(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"removing-properties"},"Removing properties"),(0,i.kt)("p",null,"To convert a standard query object to a JSON string containing only certain properties, you can take advantage of the second parameter of the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify"},(0,i.kt)("inlineCode",{parentName:"a"},"JSON.stringify")," function"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const query: RuleGroupType = {\n  id: 'root',\n  combinator: 'and',\n  rules: [\n    {\n      field: 'firstName',\n      operator: '=',\n      value: 'Steve',\n    },\n  ],\n};\n\n// This will leave off the `id` and `combinator` properties:\nconsole.log(JSON.stringify(query, ['rules', 'field', 'operator', 'value']));\n// '{\"rules\":[{\"field\":\"firstName\",\"operator\":\"=\",\"value\":\"Steve\"}]}'\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"formatQuery")," function also provides a shortcut for producing a JSON string representing everything in the query except the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," properties:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'console.log(formatQuery(query, \'json_without_ids\'));\n// \'{"combinator":"and","rules":[{"field":"firstName","operator":"=","value":"Steve"}]}\'\n')),(0,i.kt)("h2",{id:"adding-properties"},"Adding properties"),(0,i.kt)("p",null,"To produce a query object with additional properties, you can loop through the ",(0,i.kt)("inlineCode",{parentName:"p"},"rules")," array recursively. The ",(0,i.kt)("a",{parentName:"p",href:"../utils/misc#transformquery"},(0,i.kt)("inlineCode",{parentName:"a"},"transformQuery"))," function is provided for use cases such as this."),(0,i.kt)("p",null,"In the example below (inspired by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-querybuilder/react-querybuilder/issues/226"},"issue #226"),"), the ",(0,i.kt)("inlineCode",{parentName:"p"},"inputType")," from the ",(0,i.kt)("inlineCode",{parentName:"p"},"fields")," array is added to each rule."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import type { Field, RuleGroupType, RuleType } from 'react-querybuilder';\nimport { transformQuery } from 'react-querybuilder';\n\nconst fields: Field[] = [\n  { name: 'description', label: 'Description', inputType: 'string' },\n  { name: 'price', label: 'Price', inputType: 'number' },\n];\n\nconst ruleProcessor = (r: RuleType): RuleType & { inputType?: string } => ({\n  ...r,\n  inputType: fields.find(f => f.name === r.field)?.inputType,\n});\n\nconst result = transformQuery(query, { ruleProcessor });\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Manual recursion"),(0,i.kt)("p",null,"This example (",(0,i.kt)("em",{parentName:"p"},"directly")," from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-querybuilder/react-querybuilder/issues/226"},"issue #226"),") demonstrates manual recursion to achieve exactly the same result as the ",(0,i.kt)("inlineCode",{parentName:"p"},"transformQuery")," example above."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import type { Field, RuleGroupType, RuleType } from 'react-querybuilder';\n\nconst fields: Field[] = [\n  { name: 'description', label: 'Description', inputType: 'string' },\n  { name: 'price', label: 'Price', inputType: 'number' },\n];\n\nconst processRule = (r: RuleType): RuleType & { inputType?: string } => ({\n  ...r,\n  inputType: fields.find(f => f.name === r.field)?.inputType,\n});\n\nconst processGroup = (rg: RuleGroupType): RuleGroupType => ({\n  ...rg,\n  rules: rg.rules.map(r => {\n    if ('field' in r) {\n      return processRule(r);\n    }\n    return processGroup(r);\n  }),\n});\n\nconst result = processGroup(query);\n"))))}c.isMDXComponent=!0},3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=u(t),m=i,y=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return t?n.createElement(y,a(a({ref:r},l),{},{components:t})):n.createElement(y,a({ref:r},l))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var u=2;u<o;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);