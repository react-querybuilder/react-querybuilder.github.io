"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5347],{29433:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=t(24246),a=t(71670),o=t(21871);const i={title:"Managing operators",description:"Which operators are allowed for which fields, and how they are labeled",hide_table_of_contents:!0},l=void 0,s={id:"tips/managing-operators",title:"Managing operators",description:"Which operators are allowed for which fields, and how they are labeled",source:"@site/docs/tips/managing-operators.mdx",sourceDirName:"tips",slug:"/tips/managing-operators",permalink:"/docs/next/tips/managing-operators",draft:!1,unlisted:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/docs/tips/managing-operators.mdx",tags:[],version:"current",frontMatter:{title:"Managing operators",description:"Which operators are allowed for which fields, and how they are labeled",hide_table_of_contents:!0},sidebar:"mySidebar",previous:{title:"Tips & tricks",permalink:"/docs/next/category/tips--tricks"},next:{title:"Path concepts",permalink:"/docs/next/tips/path"}},d={},p=[{value:"Field <code>operators</code> property",id:"field-operators-property",level:2},{value:"<code>getOperators</code> prop",id:"getoperators-prop",level:2}];function c(e){const r={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:['A common requirement of React Query Builder implementations is to limit or alter the operators based on the selected field. For example, when a field represents a date value, a label of "before" might be more appropriate for the ',(0,n.jsx)(r.code,{children:"<"})," operator than the default ",(0,n.jsx)(r.code,{children:'"<"'}),'. A number-type field might use a label of "less than" for the ',(0,n.jsx)(r.code,{children:"<"})," operator, while a text field probably wouldn't use the ",(0,n.jsx)(r.code,{children:"<"})," operator at all."]}),"\n",(0,n.jsxs)(r.h2,{id:"field-operators-property",children:["Field ",(0,n.jsx)(r.code,{children:"operators"})," property"]}),"\n",(0,n.jsxs)(r.p,{children:["The first way to address this requirement is with the field ",(0,n.jsx)(r.code,{children:"operators"})," property. The ",(0,n.jsx)(r.code,{children:"operators"})," property of a field determines which operators are displayed once the user selects that field in the field selector. The downside of this method is that the operators list must be fully defined for each field, potentially duplicating lists across fields with equivalent data types."]}),"\n",(0,n.jsx)(o.c,{rqbVersion:6,options:{editorHeight:444},children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:"import { defaultOperators, Field, QueryBuilder, RuleGroupType } from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.css';\n\nconst fields: Field[] = [\n  {\n    name: 'name',\n    label: 'Name',\n    operators: [\n      { name: '=', label: 'is' },\n      ...defaultOperators.filter(op => ['contains', 'beginsWith', 'endsWith'].includes(op.name)),\n    ],\n  },\n  {\n    name: 'birthday',\n    label: 'Birthday',\n    inputType: 'date',\n    operators: [\n      { name: '=', label: 'on' },\n      { name: '<', label: 'before' },\n      { name: '>', label: 'after' },\n    ],\n  },\n  {\n    name: 'guitars',\n    label: 'Guitars',\n    inputType: 'number',\n    operators: [\n      { name: '=', label: 'equals' },\n      { name: '<', label: 'less than' },\n      { name: '>', label: 'greater than' },\n    ],\n  },\n  {\n    name: 'favoriteMovie',\n    label: 'Favorite Movie',\n    operators: [{ name: '=', label: 'is' }],\n  },\n];\n\nconst defaultQuery: RuleGroupType = {\n  combinator: 'and',\n  rules: [\n    { field: 'name', operator: 'beginsWith', value: 'Stev' },\n    { field: 'birthday', operator: '<', value: '1970-01-01' },\n    { field: 'guitars', operator: '>', value: 5 },\n    { field: 'favoriteMovie', operator: '=', value: 'Crossroads (1986)' },\n  ],\n};\n\nexport default () => <QueryBuilder fields={fields} defaultQuery={defaultQuery} />;\n"})})}),"\n",(0,n.jsxs)(r.h2,{id:"getoperators-prop",children:[(0,n.jsx)(r.code,{children:"getOperators"})," prop"]}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"operators"})," field property is useful when individual fields deviate from the default operator list, but the ",(0,n.jsx)(r.code,{children:"getOperators"})," function prop allows you to put all operator lists and logic in one place."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"getOperators"})," is passed a single argument, the ",(0,n.jsx)(r.code,{children:"field"})," name. Based on that, you can gather information from the same array provided to the ",(0,n.jsx)(r.code,{children:"fields"})," prop (or any other data source) and return a list of operator names and labels."]}),"\n",(0,n.jsxs)(r.p,{children:["The example below takes advantage of the ability to add arbitrary properties to field definitions. A non-standard ",(0,n.jsx)(r.code,{children:"datatype"})," property on each field is used to determine which operators are displayed and how they are labeled. The ",(0,n.jsx)(r.code,{children:"defaultOperators"})," export is utilized where appropriate. It also shows how, if present, a field's ",(0,n.jsx)(r.code,{children:"operators"})," property will take precedence over the result of the ",(0,n.jsx)(r.code,{children:"getOperators"}),' function (see the fourth rule, where the field selection of "Favorite Movie" limits the operator list to "is" even though its ',(0,n.jsx)(r.code,{children:"datatype"}),' is "text").']}),"\n",(0,n.jsx)(o.c,{rqbVersion:6,options:{editorHeight:444},children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:"import { defaultOperators, Field, QueryBuilder, RuleGroupType } from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.css';\n\nconst fields: Field[] = [\n  { name: 'name', label: 'Name', datatype: 'text' },\n  { name: 'birthday', label: 'Birthday', datatype: 'date', inputType: 'date' },\n  { name: 'guitars', label: 'Guitars', datatype: 'number', inputType: 'number' },\n  {\n    name: 'favoriteMovie',\n    label: 'Favorite Movie',\n    datatype: 'text',\n    operators: [{ name: '=', label: 'is' }],\n  },\n];\n\nconst getOperators = (fieldName: string) => {\n  const field = fields.find(fld => fld.name === fieldName);\n\n  switch (field.datatype) {\n    case 'text':\n      return [\n        { name: '=', label: 'is' },\n        { name: '!=', label: 'is not' },\n        ...defaultOperators.filter(op =>\n          [\n            'contains',\n            'beginsWith',\n            'endsWith',\n            'doesNotContain',\n            'doesNotBeginWith',\n            'doesNotEndWith',\n            'null',\n            'notNull',\n            'in',\n            'notIn',\n          ].includes(op.name)\n        ),\n      ];\n    case 'number':\n      return [\n        ...defaultOperators.filter(op => ['=', '!='].includes(op.name)),\n        { name: '<', label: 'less than' },\n        { name: '<=', label: 'less than or equal to' },\n        { name: '>', label: 'greater than' },\n        { name: '>=', label: 'greater than or equal to' },\n        ...defaultOperators.filter(op => ['null', 'notNull'].includes(op.name)),\n      ];\n    case 'date':\n      return [\n        { name: '=', label: 'on' },\n        { name: '!=', label: 'not on' },\n        { name: '<', label: 'before' },\n        { name: '<=', label: 'on or before' },\n        { name: '>', label: 'after' },\n        { name: '>=', label: 'on or after' },\n        ...defaultOperators.filter(op => ['null', 'notNull'].includes(op.name)),\n      ];\n  }\n  return defaultOperators;\n};\n\nconst defaultQuery: RuleGroupType = {\n  combinator: 'and',\n  rules: [\n    { field: 'name', operator: 'beginsWith', value: 'Stev' },\n    { field: 'birthday', operator: '<', value: '1970-01-01' },\n    { field: 'guitars', operator: '>', value: 5 },\n    { field: 'favoriteMovie', operator: '=', value: 'Crossroads (1986)' },\n  ],\n};\n\nexport default () => (\n  <QueryBuilder fields={fields} defaultQuery={defaultQuery} getOperators={getOperators} />\n);\n"})})})]})}function u(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},21871:(e,r,t)=>{t.d(r,{c:()=>p});var n=t(24246),a=t(42349),o=t(34513),i=t(27378);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){l(e,r,t[r])}))}return e}function d(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}const p=({children:e,customSetup:r,options:t,rqbVersion:l=6})=>{var p,c;const u="dark"===(0,o.I)().colorMode,h=i.Children.toArray(e),f=u?"#343a46":"#ffffff";let m=!0;const b={};for(const n of h){const{props:e}=n.props.children;let r,t=!1,a=!1;if(e.metastring){const[n,...o]=e.metastring.split(" ");r="/"+n,t=o.includes("hidden"),a=o.includes("active")}else if("language-tsx"===e.className)r="/App.tsx";else if("language-js"===e.className)r="/App.js";else{if("language-css"!==e.className)throw new Error(`Code block is missing a filename: ${e.children}`);r="/styles.css"}if(b[r])throw new Error(`File ${r} was defined multiple times. Each file snippet should have a unique path name.`);"/styles.css"!==r||t||(m=!1),b[r]={code:e.children,hidden:t,active:a}}const y=RegExp("^import +'react-querybuilder/dist/query-builder\\.s?css';?$").test(null===(p=b["/App.tsx"])||void 0===p?void 0:p.code)?"":"@import 'react-querybuilder/dist/query-builder.css';",g=`\nbody {\n  background-color: ${f};\n}\npre {\n  padding: 1rem;\n  background-color: white;\n  border: 1px solid lightgray;\n  border-radius: 0.25rem;\n  white-space: pre-wrap;\n}\n${u?"\nh1, h2, h3, h4, h5, h6 {\n  color: white;\n}":""}`;var v;b["/styles.css"]={code:[y,g,null!==(v=null===(c=b["/styles.css"])||void 0===c?void 0:c.code)&&void 0!==v?v:""].join("\n\n"),hidden:m};const x=4===l?{"react-querybuilder":"^4.5.3"}:5===l?{"@react-querybuilder/dnd":"^5.4.1","react-querybuilder":"^5.4.1"}:{"@react-querybuilder/dnd":"^6.0.7","react-querybuilder":"^6.0.7"},j=d(s({},r),{dependencies:s({},null==r?void 0:r.dependencies,x)});return(0,n.jsx)("div",{className:"sandpackrqb",children:(0,n.jsx)(a.xR,{files:b,theme:u?"dark":void 0,template:"vite-react-ts",customSetup:j,options:t})},`v${l}`)}}}]);