"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5261],{19557:(e,t,a)=>{a.d(t,{c:()=>i});var r=a(39423),n=a(70524),o=a(67294);const i=e=>{var t;let{children:a,customSetup:i,options:l,rqbVersion:s=5}=e;const d="dark"===(0,n.I)().colorMode,p=o.Children.toArray(a),u=d?"#343a46":"#ffffff";let c=!0;const m=p.reduce(((e,t)=>{if("pre"!==t.props.mdxType)return e;const{props:a}=t.props.children;let r,n=!1,o=!1;if(a.metastring){const[e,...t]=a.metastring.split(" ");r="/"+e,t.includes("hidden")&&(n=!0),t.includes("active")&&(o=!0)}else if("language-tsx"===a.className)r="/App.tsx";else if("language-js"===a.className)r="/App.js";else{if("language-css"!==a.className)throw new Error(`Code block is missing a filename: ${a.children}`);r="/styles.css"}if(e[r])throw new Error(`File ${r} was defined multiple times. Each file snippet should have a unique path name.`);return"/styles.css"!==r||n||(c=!1),e[r]={code:a.children,hidden:n,active:o},e}),{}),h=RegExp("^import +'react-querybuilder/dist/query-builder\\.s?css';?$").test(m["/App.tsx"].code)?"":"@import 'react-querybuilder/dist/query-builder.css';",f=`\nbody {\n  background-color: ${u};\n}\npre {\n  padding: 1rem;\n  background-color: white;\n  border: 1px solid lightgray;\n  border-radius: 4px;\n  white-space: pre-wrap;\n}\n${d?"\nh1, h2, h3, h4, h5, h6 {\n  color: white;\n}":""}`;m["/styles.css"]={code:[h,f,(null==(t=m["/styles.css"])?void 0:t.code)??""].join("\n\n"),hidden:c};const b=4===s?{"react-querybuilder":"^4.5.3"}:5===s?{"@react-querybuilder/dnd":"^5.3.3","react-querybuilder":"^5.3.3"}:{"@react-querybuilder/dnd":"6.0.0-rc.0","react-querybuilder":"6.0.0-rc.0"},y={...i,dependencies:{...null==i?void 0:i.dependencies,...b}};return o.createElement("div",{key:`v${s}`,className:"sandpackrqb"},o.createElement(r.xR,{files:m,theme:d?"dark":void 0,template:"react-ts",customSetup:y,options:l}))}},38567:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=a(83117),n=(a(67294),a(3905)),o=a(19557);const i={title:"Managing operators",description:"Which operators are allowed for which fields, and how they are labeled",hide_table_of_contents:!0},l=void 0,s={unversionedId:"tips/managing-operators",id:"version-4/tips/managing-operators",title:"Managing operators",description:"Which operators are allowed for which fields, and how they are labeled",source:"@site/versioned_docs/version-4/tips/managing-operators.mdx",sourceDirName:"tips",slug:"/tips/managing-operators",permalink:"/docs/4/tips/managing-operators",draft:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/versioned_docs/version-4/tips/managing-operators.mdx",tags:[],version:"4",frontMatter:{title:"Managing operators",description:"Which operators are allowed for which fields, and how they are labeled",hide_table_of_contents:!0},sidebar:"mySidebar",previous:{title:"Tips & tricks",permalink:"/docs/4/category/tips--tricks"},next:{title:"Limit rule groups",permalink:"/docs/4/tips/limit-groups"}},d={},p=[{value:"Field <code>operators</code> property",id:"field-operators-property",level:2},{value:"<code>getOperators</code> prop",id:"getoperators-prop",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'A common requirement of React Query Builder implementations is to limit or alter the operators based on the selected field. For example, when a field represents a date value, a label of "before" might be more appropriate for the ',(0,n.kt)("inlineCode",{parentName:"p"},"<"),' operator than the default "<". A number-type field might use a label of "less than" for the ',(0,n.kt)("inlineCode",{parentName:"p"},"<")," operator, while a text field probably wouldn't use the ",(0,n.kt)("inlineCode",{parentName:"p"},"<")," operator at all."),(0,n.kt)("h2",{id:"field-operators-property"},"Field ",(0,n.kt)("inlineCode",{parentName:"h2"},"operators")," property"),(0,n.kt)("p",null,"The first way to address this requirement is with the field ",(0,n.kt)("inlineCode",{parentName:"p"},"operators")," property. The ",(0,n.kt)("inlineCode",{parentName:"p"},"operators")," property of a field determines which operators are displayed once the user selects that field in the field selector. The downside of this method is that the operators list must be fully defined for each field, potentially duplicating lists across fields with equivalent data types."),(0,n.kt)(o.c,{rqbVersion:5,options:{editorHeight:444},mdxType:"SandpackRQB"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import { defaultOperators, Field, QueryBuilder, RuleGroupType } from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.scss';\n\nconst fields: Field[] = [\n  {\n    name: 'name',\n    label: 'Name',\n    operators: [\n      { name: '=', label: 'is' },\n      ...defaultOperators.filter(op => ['contains', 'beginsWith', 'endsWith'].includes(op.name)),\n    ],\n  },\n  {\n    name: 'birthday',\n    label: 'Birthday',\n    inputType: 'date',\n    operators: [\n      { name: '=', label: 'on' },\n      { name: '<', label: 'before' },\n      { name: '>', label: 'after' },\n    ],\n  },\n  {\n    name: 'guitars',\n    label: 'Guitars',\n    inputType: 'number',\n    operators: [\n      { name: '=', label: 'equals' },\n      { name: '<', label: 'less than' },\n      { name: '>', label: 'greater than' },\n    ],\n  },\n  {\n    name: 'favoriteMovie',\n    label: 'Favorite Movie',\n    operators: [{ name: '=', label: 'is' }],\n  },\n];\n\nconst defaultQuery: RuleGroupType = {\n  combinator: 'and',\n  rules: [\n    { field: 'name', operator: 'beginsWith', value: 'Stev' },\n    { field: 'birthday', operator: '<', value: '1970-01-01' },\n    { field: 'guitars', operator: '>', value: 5 },\n    { field: 'favoriteMovie', operator: '=', value: 'Crossroads (1986)' },\n  ],\n};\n\nexport default () => <QueryBuilder fields={fields} defaultQuery={defaultQuery} />;\n"))),(0,n.kt)("h2",{id:"getoperators-prop"},(0,n.kt)("inlineCode",{parentName:"h2"},"getOperators")," prop"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"operators")," field property is useful when individual fields deviate from the default operator list, but the ",(0,n.kt)("inlineCode",{parentName:"p"},"getOperators")," function prop allows you to put all operator lists and logic in one place."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"getOperators")," is passed a single argument, the ",(0,n.kt)("inlineCode",{parentName:"p"},"field")," name. Based on that, you can gather information from the same array provided to the ",(0,n.kt)("inlineCode",{parentName:"p"},"fields")," prop (or any other data source) and return a list of operator names and labels."),(0,n.kt)("p",null,"The example below takes advantage of the ability to add arbitrary properties to field definitions. A non-standard ",(0,n.kt)("inlineCode",{parentName:"p"},"datatype")," property on each field is used to determine which operators are displayed and how they are labeled. The ",(0,n.kt)("inlineCode",{parentName:"p"},"defaultOperators")," export is utilized where appropriate. It also shows how, if present, a field's ",(0,n.kt)("inlineCode",{parentName:"p"},"operators")," property will take precedence over the result of the ",(0,n.kt)("inlineCode",{parentName:"p"},"getOperators"),' function (see the fourth rule, where the field selection of "Favorite Movie" limits the operator list to "is" even though its ',(0,n.kt)("inlineCode",{parentName:"p"},"datatype"),' is "text").'),(0,n.kt)(o.c,{rqbVersion:5,options:{editorHeight:444},mdxType:"SandpackRQB"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import {\n  defaultOperators,\n  Field,\n  NameLabelPair,\n  QueryBuilder,\n  RuleGroupType,\n} from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.scss';\n\nconst fields: Field[] = [\n  { name: 'name', label: 'Name', datatype: 'text' },\n  { name: 'birthday', label: 'Birthday', datatype: 'date', inputType: 'date' },\n  { name: 'guitars', label: 'Guitars', datatype: 'number', inputType: 'number' },\n  {\n    name: 'favoriteMovie',\n    label: 'Favorite Movie',\n    datatype: 'text',\n    operators: [{ name: '=', label: 'is' }],\n  },\n];\n\nconst getOperators = (fieldName: string): NameLabelPair[] => {\n  const field = fields.find(fld => fld.name === fieldName);\n\n  switch (field.datatype) {\n    case 'text':\n      return [\n        { name: '=', label: 'is' },\n        { name: '!=', label: 'is not' },\n        ...defaultOperators.filter(op =>\n          [\n            'contains',\n            'beginsWith',\n            'endsWith',\n            'doesNotContain',\n            'doesNotBeginWith',\n            'doesNotEndWith',\n            'null',\n            'notNull',\n            'in',\n            'notIn',\n          ].includes(op.name)\n        ),\n      ];\n    case 'number':\n      return [\n        ...defaultOperators.filter(op => ['=', '!='].includes(op.name)),\n        { name: '<', label: 'less than' },\n        { name: '<=', label: 'less than or equal to' },\n        { name: '>', label: 'greater than' },\n        { name: '>=', label: 'greater than or equal to' },\n        ...defaultOperators.filter(op => ['null', 'notNull'].includes(op.name)),\n      ];\n    case 'date':\n      return [\n        { name: '=', label: 'on' },\n        { name: '!=', label: 'not on' },\n        { name: '<', label: 'before' },\n        { name: '<=', label: 'on or before' },\n        { name: '>', label: 'after' },\n        { name: '>=', label: 'on or after' },\n        ...defaultOperators.filter(op => ['null', 'notNull'].includes(op.name)),\n      ];\n  }\n  return defaultOperators;\n};\n\nconst defaultQuery: RuleGroupType = {\n  combinator: 'and',\n  rules: [\n    { field: 'name', operator: 'beginsWith', value: 'Stev' },\n    { field: 'birthday', operator: '<', value: '1970-01-01' },\n    { field: 'guitars', operator: '>', value: 5 },\n    { field: 'favoriteMovie', operator: '=', value: 'Crossroads (1986)' },\n  ],\n};\n\nexport default () => (\n  <QueryBuilder fields={fields} defaultQuery={defaultQuery} getOperators={getOperators} />\n);\n"))))}c.isMDXComponent=!0}}]);