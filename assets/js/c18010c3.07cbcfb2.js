"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2845],{70876:(e,r,n)=>{n.d(r,{Z:()=>y});var t=n(27378),i=n(37140),s=n(33441),o=n(90362),a=n(74229);const l={details:"details_IpIu",isBrowser:"isBrowser_QD4r",collapsibleContent:"collapsibleContent_Fd2D"};var c=n(24246);function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function p(e,r){return!!e&&(e===r||p(e.parentElement,r))}function u(e){let{summary:r,children:n,...i}=e;const u=(0,o.Z)(),m=(0,t.useRef)(null),{collapsed:h,setCollapsed:y}=(0,a.u)({initialState:!i.open}),[f,g]=(0,t.useState)(i.open),x=t.isValidElement(r)?r:(0,c.jsx)("summary",{children:r??"Details"});return(0,c.jsxs)("details",{...i,ref:m,open:f,"data-collapsed":h,className:(0,s.Z)(l.details,u&&l.isBrowser,i.className),onMouseDown:e=>{d(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const r=e.target;d(r)&&p(r,m.current)&&(e.preventDefault(),h?(y(!1),g(!0)):y(!0))},children:[x,(0,c.jsx)(a.z,{lazy:!1,collapsed:h,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{y(e),g(!e)},children:(0,c.jsx)("div",{className:l.collapsibleContent,children:n})})]})}const m={details:"details_jERq"},h="alert alert--info";function y(e){let{...r}=e;return(0,c.jsx)(u,{...r,className:(0,i.Z)(h,m.details,r.className)})}},48536:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var t=n(24246),i=n(71670),s=n(70876);const o={title:"Adding and removing query properties",description:"Customizing the query object",hide_table_of_contents:!0},a=void 0,l={id:"tips/adding-removing-query-properties",title:"Adding and removing query properties",description:"Customizing the query object",source:"@site/docs/tips/adding-removing-query-properties.mdx",sourceDirName:"tips",slug:"/tips/adding-removing-query-properties",permalink:"/docs/next/tips/adding-removing-query-properties",draft:!1,unlisted:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/docs/tips/adding-removing-query-properties.mdx",tags:[],version:"current",frontMatter:{title:"Adding and removing query properties",description:"Customizing the query object",hide_table_of_contents:!0},sidebar:"mySidebar",previous:{title:"Custom bind variables",permalink:"/docs/next/tips/custom-bind-variables"},next:{title:"Common mistakes",permalink:"/docs/next/tips/common-mistakes"}},c={},d=[{value:"Removing properties",id:"removing-properties",level:2},{value:"Adding properties",id:"adding-properties",level:2}];function p(e){const r={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"removing-properties",children:"Removing properties"}),"\n",(0,t.jsxs)(r.p,{children:["To convert a standard query object to a JSON string containing only certain properties, you can take advantage of the second parameter of the ",(0,t.jsxs)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify",children:[(0,t.jsx)(r.code,{children:"JSON.stringify"})," function"]}),"."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"const query: RuleGroupType = {\n  id: 'root',\n  combinator: 'and',\n  rules: [\n    {\n      field: 'firstName',\n      operator: '=',\n      value: 'Steve',\n    },\n  ],\n};\n\n// This will leave off the `id` and `combinator` properties:\nconsole.log(JSON.stringify(query, ['rules', 'field', 'operator', 'value']));\n// '{\"rules\":[{\"field\":\"firstName\",\"operator\":\"=\",\"value\":\"Steve\"}]}'\n"})}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"formatQuery"})," function also provides a shortcut for producing a JSON string representing everything in the query except the ",(0,t.jsx)(r.code,{children:"id"})," properties:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:'console.log(formatQuery(query, \'json_without_ids\'));\n// \'{"combinator":"and","rules":[{"field":"firstName","operator":"=","value":"Steve"}]}\'\n'})}),"\n",(0,t.jsx)(r.h2,{id:"adding-properties",children:"Adding properties"}),"\n",(0,t.jsxs)(r.p,{children:["To produce a query object with additional properties, you can loop through the ",(0,t.jsx)(r.code,{children:"rules"})," array recursively. The ",(0,t.jsx)(r.a,{href:"../utils/misc#transformquery",children:(0,t.jsx)(r.code,{children:"transformQuery"})})," function is provided for use cases such as this."]}),"\n",(0,t.jsxs)(r.p,{children:["In the example below (inspired by ",(0,t.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/issues/226",children:"issue #226"}),"), the ",(0,t.jsx)(r.code,{children:"inputType"})," from the ",(0,t.jsx)(r.code,{children:"fields"})," array is added to each rule."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"import type { Field, RuleGroupType, RuleType } from 'react-querybuilder';\nimport { transformQuery } from 'react-querybuilder';\n\nconst fields: Field[] = [\n  { name: 'description', label: 'Description', inputType: 'string' },\n  { name: 'price', label: 'Price', inputType: 'number' },\n];\n\nconst ruleProcessor = (r: RuleType): RuleType & { inputType?: string } => ({\n  ...r,\n  inputType: fields.find(f => f.name === r.field)?.inputType,\n});\n\nconst result = transformQuery(query, { ruleProcessor });\n"})}),"\n",(0,t.jsxs)(s.Z,{summary:"Manual recursion",children:[(0,t.jsxs)(r.p,{children:["This example (",(0,t.jsx)(r.em,{children:"directly"})," from ",(0,t.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/issues/226",children:"issue #226"}),") demonstrates manual recursion to achieve exactly the same result as the ",(0,t.jsx)(r.code,{children:"transformQuery"})," example above."]}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"import type { Field, RuleGroupType, RuleType } from 'react-querybuilder';\n\nconst fields: Field[] = [\n  { name: 'description', label: 'Description', inputType: 'string' },\n  { name: 'price', label: 'Price', inputType: 'number' },\n];\n\nconst processRule = (r: RuleType): RuleType & { inputType?: string } => ({\n  ...r,\n  inputType: fields.find(f => f.name === r.field)?.inputType,\n});\n\nconst processGroup = (rg: RuleGroupType): RuleGroupType => ({\n  ...rg,\n  rules: rg.rules.map(r => {\n    if ('field' in r) {\n      return processRule(r);\n    }\n    return processGroup(r);\n  }),\n});\n\nconst result = processGroup(query);\n"})})]})]})}function u(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},71670:(e,r,n)=>{n.d(r,{Z:()=>a,a:()=>o});var t=n(27378);const i={},s=t.createContext(i);function o(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);