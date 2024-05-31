"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53233],{1741:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(62540),a=r(65404),o=r(67650);const i={title:"Managing operators",description:"Which operators are allowed for which fields, and how they are labeled",hide_table_of_contents:!0},l=void 0,s={id:"tips/managing-operators",title:"Managing operators",description:"Which operators are allowed for which fields, and how they are labeled",source:"@site/versioned_docs/version-7/tips/managing-operators.mdx",sourceDirName:"tips",slug:"/tips/managing-operators",permalink:"/docs/tips/managing-operators",draft:!1,unlisted:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/versioned_docs/version-7/tips/managing-operators.mdx",tags:[],version:"7",frontMatter:{title:"Managing operators",description:"Which operators are allowed for which fields, and how they are labeled",hide_table_of_contents:!0},sidebar:"mySidebar",previous:{title:"Customization showcase",permalink:"/docs/tips/showcase"},next:{title:"Custom components with fallbacks",permalink:"/docs/tips/custom-with-fallback"}},d={},p=[{value:"Field <code>operators</code> property",id:"field-operators-property",level:2},{value:"<code>getOperators</code> prop",id:"getoperators-prop",level:2}];function c(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:['A common requirement of React Query Builder implementations is to limit or alter the operators based on the selected field. For example, when a field represents a date value, a label of "before" might be more appropriate for the ',(0,n.jsx)(t.code,{children:"<"})," operator than the default ",(0,n.jsx)(t.code,{children:'"<"'}),'. A number-type field might use a label of "less than" for the ',(0,n.jsx)(t.code,{children:"<"})," operator, while a text field probably wouldn't use the ",(0,n.jsx)(t.code,{children:"<"})," operator at all."]}),"\n",(0,n.jsxs)(t.h2,{id:"field-operators-property",children:["Field ",(0,n.jsx)(t.code,{children:"operators"})," property"]}),"\n",(0,n.jsxs)(t.p,{children:["The first way to address this requirement is with the field ",(0,n.jsx)(t.code,{children:"operators"})," property. The ",(0,n.jsx)(t.code,{children:"operators"})," property of a field determines which operators are displayed once the user selects that field in the field selector. The downside of this method is that the operators list must be fully defined for each field, potentially duplicating lists across fields with equivalent data types."]}),"\n",(0,n.jsx)(o.b,{rqbVersion:7,options:{editorHeight:444},children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { defaultOperators, Field, QueryBuilder, RuleGroupType } from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.css';\n\nconst fields: Field[] = [\n  {\n    name: 'name',\n    label: 'Name',\n    operators: [\n      { name: '=', label: 'is' },\n      ...defaultOperators.filter(op => ['contains', 'beginsWith', 'endsWith'].includes(op.name)),\n    ],\n  },\n  {\n    name: 'birthday',\n    label: 'Birthday',\n    inputType: 'date',\n    operators: [\n      { name: '=', label: 'on' },\n      { name: '<', label: 'before' },\n      { name: '>', label: 'after' },\n    ],\n  },\n  {\n    name: 'guitars',\n    label: 'Guitars',\n    inputType: 'number',\n    operators: [\n      { name: '=', label: 'equals' },\n      { name: '<', label: 'less than' },\n      { name: '>', label: 'greater than' },\n    ],\n  },\n  {\n    name: 'favoriteMovie',\n    label: 'Favorite Movie',\n    operators: [{ name: '=', label: 'is' }],\n  },\n];\n\nconst defaultQuery: RuleGroupType = {\n  combinator: 'and',\n  rules: [\n    { field: 'name', operator: 'beginsWith', value: 'Stev' },\n    { field: 'birthday', operator: '<', value: '1970-01-01' },\n    { field: 'guitars', operator: '>', value: 5 },\n    { field: 'favoriteMovie', operator: '=', value: 'Crossroads (1986)' },\n  ],\n};\n\nexport default () => <QueryBuilder fields={fields} defaultQuery={defaultQuery} />;\n"})})}),"\n",(0,n.jsxs)(t.h2,{id:"getoperators-prop",children:[(0,n.jsx)(t.code,{children:"getOperators"})," prop"]}),"\n",(0,n.jsxs)(t.p,{children:["The field ",(0,n.jsx)(t.code,{children:"operators"})," property is useful when individual fields deviate from the default operator list, but the ",(0,n.jsx)(t.code,{children:"getOperators"})," function prop allows you to put all operator lists and logic in one place."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"getOperators"})," is passed two arguments: the ",(0,n.jsx)(t.code,{children:"field"}),' identifier and a "meta" object with a ',(0,n.jsx)(t.code,{children:"fieldData"})," property containing the full field definition. Based on that, you can gather information from the same array provided to the ",(0,n.jsx)(t.code,{children:"fields"})," prop (or any other data source) and return a list of operator names and labels."]}),"\n",(0,n.jsxs)(t.p,{children:["The example below takes advantage of the ability to add arbitrary properties to field definitions. A non-standard ",(0,n.jsx)(t.code,{children:"datatype"})," property on each field is used to determine which operators are displayed and how they are labeled. The ",(0,n.jsx)(t.code,{children:"defaultOperators"})," export is utilized where appropriate. It also shows how, if present, a field's ",(0,n.jsx)(t.code,{children:"operators"})," property will take precedence over the result of the ",(0,n.jsx)(t.code,{children:"getOperators"}),' function (see the fourth rule, where the field selection of "Favorite Movie" limits the operator list to "is" even though its ',(0,n.jsx)(t.code,{children:"datatype"}),' is "text").']}),"\n",(0,n.jsx)(o.b,{rqbVersion:7,options:{editorHeight:444},children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { defaultOperators, Field, QueryBuilder, RuleGroupType } from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.css';\n\nconst fields: Field[] = [\n  { name: 'name', label: 'Name', datatype: 'text' },\n  { name: 'birthday', label: 'Birthday', datatype: 'date', inputType: 'date' },\n  { name: 'guitars', label: 'Guitars', datatype: 'number', inputType: 'number' },\n  {\n    name: 'favoriteMovie',\n    label: 'Favorite Movie',\n    datatype: 'text',\n    operators: [{ name: '=', label: 'is' }],\n  },\n];\n\nconst getOperators = (fieldName: string, { fieldData }: { fieldData: Field }) => {\n  switch (fieldData.datatype) {\n    case 'text':\n      return [\n        { name: '=', label: 'is' },\n        { name: '!=', label: 'is not' },\n        ...defaultOperators.filter(op =>\n          [\n            'contains',\n            'beginsWith',\n            'endsWith',\n            'doesNotContain',\n            'doesNotBeginWith',\n            'doesNotEndWith',\n            'null',\n            'notNull',\n            'in',\n            'notIn',\n          ].includes(op.name)\n        ),\n      ];\n    case 'number':\n      return [\n        ...defaultOperators.filter(op => ['=', '!='].includes(op.name)),\n        { name: '<', label: 'less than' },\n        { name: '<=', label: 'less than or equal to' },\n        { name: '>', label: 'greater than' },\n        { name: '>=', label: 'greater than or equal to' },\n        ...defaultOperators.filter(op => ['null', 'notNull'].includes(op.name)),\n      ];\n    case 'date':\n      return [\n        { name: '=', label: 'on' },\n        { name: '!=', label: 'not on' },\n        { name: '<', label: 'before' },\n        { name: '<=', label: 'on or before' },\n        { name: '>', label: 'after' },\n        { name: '>=', label: 'on or after' },\n        ...defaultOperators.filter(op => ['null', 'notNull'].includes(op.name)),\n      ];\n  }\n  return defaultOperators;\n};\n\nconst defaultQuery: RuleGroupType = {\n  combinator: 'and',\n  rules: [\n    { field: 'name', operator: 'beginsWith', value: 'Stev' },\n    { field: 'birthday', operator: '<', value: '1970-01-01' },\n    { field: 'guitars', operator: '>', value: 5 },\n    { field: 'favoriteMovie', operator: '=', value: 'Crossroads (1986)' },\n  ],\n};\n\nexport default () => (\n  <QueryBuilder fields={fields} defaultQuery={defaultQuery} getOperators={getOperators} />\n);\n"})})})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},67650:(e,t,r)=>{r.d(t,{b:()=>p});var n=r(62540),a=r(11871),o=r(64871),i=r(63696);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){l(e,t,r[t])}))}return e}function d(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}const p=({children:e,customSetup:t,options:r,rqbVersion:l=7})=>{var p,c;const u="dark"===(0,o.G)().colorMode,h=i.Children.toArray(e),f=u?"#343a46":"#ffffff";let b=!0;const m={};for(const n of h){const{props:e}=n.props.children;let t,r=!1,a=!1;if(e.metastring){const[n,...o]=e.metastring.split(" ");t="/"+n,r=o.includes("hidden"),a=o.includes("active")}else if("language-tsx"===e.className)t="/App.tsx";else if("language-js"===e.className)t="/App.js";else{if("language-css"!==e.className)throw new Error(`Code block is missing a filename: ${e.children}`);t="/styles.css"}if(m[t])throw new Error(`File ${t} was defined multiple times. Each file snippet should have a unique path name.`);"/styles.css"!==t||r||(b=!1),m[t]={code:e.children,hidden:r,active:a}}const y=RegExp("^import +'react-querybuilder/dist/query-builder\\.s?css';?$").test(null===(p=m["/App.tsx"])||void 0===p?void 0:p.code)?"":"@import 'react-querybuilder/dist/query-builder.css';",g=`\nbody {\n  background-color: ${f};\n}\npre {\n  padding: 1rem;\n  background-color: white;\n  border: 1px solid lightgray;\n  border-radius: 0.25rem;\n  white-space: pre-wrap;\n}\n${u?"\nh1, h2, h3, h4, h5, h6 {\n  color: white;\n}":""}`;var v;m["/styles.css"]={code:[y,g,null!==(v=null===(c=m["/styles.css"])||void 0===c?void 0:c.code)&&void 0!==v?v:""].join("\n\n"),hidden:b};const w=4===l?{"react-querybuilder":"^4"}:{"@react-querybuilder/dnd":`^${l||"7"}`,"react-querybuilder":`^${l||"7"}`,"react-dnd":">=14","react-dnd-html5-backend":">=14"},x=d(s({},t),{dependencies:s({},null==t?void 0:t.dependencies,w)});return(0,n.jsx)("div",{className:"sandpackrqb",children:(0,n.jsx)(a.OZ,{files:m,theme:u?"dark":void 0,template:"vite-react-ts",customSetup:x,options:r})},`v${l}`)}}}]);