"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[112],{32769:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=t(24246),i=t(71670),o=t(1188);const s={title:"Adding and removing query properties",description:"Customizing the query object",hide_table_of_contents:!0},c=void 0,l={id:"tips/adding-removing-query-properties",title:"Adding and removing query properties",description:"Customizing the query object",source:"@site/versioned_docs/version-5/tips/adding-removing-query-properties.mdx",sourceDirName:"tips",slug:"/tips/adding-removing-query-properties",permalink:"/docs/5/tips/adding-removing-query-properties",draft:!1,unlisted:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/versioned_docs/version-5/tips/adding-removing-query-properties.mdx",tags:[],version:"5",frontMatter:{title:"Adding and removing query properties",description:"Customizing the query object",hide_table_of_contents:!0},sidebar:"mySidebar",previous:{title:"Custom bind variables",permalink:"/docs/5/tips/custom-bind-variables"},next:{title:"Common mistakes",permalink:"/docs/5/tips/common-mistakes"}},a={},u=[{value:"Removing properties",id:"removing-properties",level:2},{value:"Adding properties",id:"adding-properties",level:2}];function p(e){const r={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"removing-properties",children:"Removing properties"}),"\n",(0,n.jsxs)(r.p,{children:["To convert a standard query object to a JSON string containing only certain properties, you can take advantage of the second parameter of the ",(0,n.jsxs)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify",children:[(0,n.jsx)(r.code,{children:"JSON.stringify"})," function"]}),"."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"const query: RuleGroupType = {\n  id: 'root',\n  combinator: 'and',\n  rules: [\n    {\n      field: 'firstName',\n      operator: '=',\n      value: 'Steve',\n    },\n  ],\n};\n\n// This will leave off the `id` and `combinator` properties:\nconsole.log(JSON.stringify(query, ['rules', 'field', 'operator', 'value']));\n// '{\"rules\":[{\"field\":\"firstName\",\"operator\":\"=\",\"value\":\"Steve\"}]}'\n"})}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"formatQuery"})," function also provides a shortcut for producing a JSON string representing everything in the query except the ",(0,n.jsx)(r.code,{children:"id"})," properties:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:'console.log(formatQuery(query, \'json_without_ids\'));\n// \'{"combinator":"and","rules":[{"field":"firstName","operator":"=","value":"Steve"}]}\'\n'})}),"\n",(0,n.jsx)(r.h2,{id:"adding-properties",children:"Adding properties"}),"\n",(0,n.jsxs)(r.p,{children:["To produce a query object with additional properties, you can loop through the ",(0,n.jsx)(r.code,{children:"rules"})," array recursively. The ",(0,n.jsx)(r.a,{href:"../api/misc#transformquery",children:(0,n.jsx)(r.code,{children:"transformQuery"})})," function is provided for use cases such as this."]}),"\n",(0,n.jsxs)(r.p,{children:["In the example below (inspired by ",(0,n.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/issues/226",children:"issue #226"}),"), the ",(0,n.jsx)(r.code,{children:"inputType"})," from the ",(0,n.jsx)(r.code,{children:"fields"})," array is added to each rule."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"import type { Field, RuleGroupType, RuleType } from 'react-querybuilder';\nimport { transformQuery } from 'react-querybuilder';\n\nconst fields: Field[] = [\n  { name: 'description', label: 'Description', inputType: 'string' },\n  { name: 'price', label: 'Price', inputType: 'number' },\n];\n\nconst ruleProcessor = (r: RuleType): RuleType & { inputType?: string } => ({\n  ...r,\n  inputType: fields.find(f => f.name === r.field)?.inputType,\n});\n\nconst result = transformQuery(query, { ruleProcessor });\n"})}),"\n",(0,n.jsxs)(o.Z,{summary:"Manual recursion",children:[(0,n.jsxs)(r.p,{children:["This example (",(0,n.jsx)(r.em,{children:"directly"})," from ",(0,n.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/issues/226",children:"issue #226"}),") demonstrates manual recursion to achieve exactly the same result as the ",(0,n.jsx)(r.code,{children:"transformQuery"})," example above."]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"import type { Field, RuleGroupType, RuleType } from 'react-querybuilder';\n\nconst fields: Field[] = [\n  { name: 'description', label: 'Description', inputType: 'string' },\n  { name: 'price', label: 'Price', inputType: 'number' },\n];\n\nconst processRule = (r: RuleType): RuleType & { inputType?: string } => ({\n  ...r,\n  inputType: fields.find(f => f.name === r.field)?.inputType,\n});\n\nconst processGroup = (rg: RuleGroupType): RuleGroupType => ({\n  ...rg,\n  rules: rg.rules.map(r => {\n    if ('field' in r) {\n      return processRule(r);\n    }\n    return processGroup(r);\n  }),\n});\n\nconst result = processGroup(query);\n"})})]})]})}function d(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},1188:(e,r,t)=>{t.d(r,{Z:()=>v});var n=t(24246),i=t(27378),o=t(40624),s=t(30101),c=t(16151);const l={details:"details_IpIu",isBrowser:"isBrowser_QD4r",collapsibleContent:"collapsibleContent_Fd2D"};function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function p(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function f(e,r){return!!e&&(e===r||f(e.parentElement,r))}function y(e){var{summary:r,children:t}=e,y=p(e,["summary","children"]);const m=(0,s.Z)(),b=(0,i.useRef)(null),{collapsed:h,setCollapsed:g}=(0,c.u)({initialState:!y.open}),[j,v]=(0,i.useState)(y.open),O=i.isValidElement(r)?r:(0,n.jsx)("summary",{children:null!=r?r:"Details"});return(0,n.jsxs)("details",u(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){a(e,r,t[r])}))}return e}({},y),{ref:b,open:j,"data-collapsed":h,className:(0,o.Z)(l.details,m&&l.isBrowser,y.className),onMouseDown:e=>{d(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const r=e.target;d(r)&&f(r,b.current)&&(e.preventDefault(),h?(g(!1),v(!0)):g(!0))},children:[O,(0,n.jsx)(c.z,{lazy:!1,collapsed:h,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{g(e),v(!e)},children:(0,n.jsx)("div",{className:l.collapsibleContent,children:t})})]}))}const m={details:"details_jERq"};function b(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function h(){return h=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},h.apply(this,arguments)}function g(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}const j="alert alert--info";function v(e){var r=h({},function(e){if(null==e)throw new TypeError("Cannot destructure "+e);return e}(e));return(0,n.jsx)(y,g(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){b(e,r,t[r])}))}return e}({},r),{className:(0,o.Z)(j,m.details,r.className)}))}},71670:(e,r,t)=>{t.d(r,{Z:()=>c,a:()=>s});var n=t(27378);const i={},o=n.createContext(i);function s(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);