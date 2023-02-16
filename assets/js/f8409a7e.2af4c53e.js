"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3206],{19557:(e,t,r)=>{r.d(t,{c:()=>l});var n=r(39423),a=r(70524),i=r(67294);const l=e=>{var t;let{children:r,customSetup:l,options:o,rqbVersion:s=5}=e;const u="dark"===(0,a.I)().colorMode,d=i.Children.toArray(r),p=u?"#343a46":"#ffffff";let c=!0;const m=d.reduce(((e,t)=>{if("pre"!==t.props.mdxType)return e;const{props:r}=t.props.children;let n,a=!1,i=!1;if(r.metastring){const[e,...t]=r.metastring.split(" ");n="/"+e,t.includes("hidden")&&(a=!0),t.includes("active")&&(i=!0)}else if("language-tsx"===r.className)n="/App.tsx";else if("language-js"===r.className)n="/App.js";else{if("language-css"!==r.className)throw new Error(`Code block is missing a filename: ${r.children}`);n="/styles.css"}if(e[n])throw new Error(`File ${n} was defined multiple times. Each file snippet should have a unique path name.`);return"/styles.css"!==n||a||(c=!1),e[n]={code:r.children,hidden:a,active:i},e}),{}),h=RegExp("^import +'react-querybuilder/dist/query-builder\\.s?css';?$").test(m["/App.tsx"].code)?"":"@import 'react-querybuilder/dist/query-builder.css';",y=`\nbody {\n  background-color: ${p};\n}\npre {\n  padding: 1rem;\n  background-color: white;\n  border: 1px solid lightgray;\n  border-radius: 4px;\n  white-space: pre-wrap;\n}\n${u?"\nh1, h2, h3, h4, h5, h6 {\n  color: white;\n}":""}`;m["/styles.css"]={code:[h,y,(null==(t=m["/styles.css"])?void 0:t.code)??""].join("\n\n"),hidden:c};const f=4===s?{"react-querybuilder":"^4.5.3"}:5===s?{"@react-querybuilder/dnd":"^5.3.3","react-querybuilder":"^5.3.3"}:{"@react-querybuilder/dnd":"6.0.0-rc.0","react-querybuilder":"6.0.0-rc.0"},b={...l,dependencies:{...null==l?void 0:l.dependencies,...f}};return i.createElement("div",{key:`v${s}`,className:"sandpackrqb"},i.createElement(n.xR,{files:m,theme:u?"dark":void 0,template:"react-ts",customSetup:b,options:o}))}},58809:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var n=r(83117),a=(r(67294),r(3905)),i=r(19557);const l={title:"Getting started",hide_table_of_contents:!0},o=void 0,s={unversionedId:"intro",id:"intro",title:"Getting started",description:"TL;DR",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/docs/next/intro",draft:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/docs/intro.mdx",tags:[],version:"current",frontMatter:{title:"Getting started",hide_table_of_contents:!0},sidebar:"mySidebar",next:{title:"Components",permalink:"/docs/next/category/components"}},u={},d=[{value:"TL;DR",id:"tldr",level:2},{value:"Installation",id:"installation",level:2},{value:"Basics",id:"basics",level:2},{value:"Exporting queries",id:"exporting-queries",level:2},{value:"Onward and upward!",id:"onward-and-upward",level:2},{value:"Training",id:"training",level:2}],p={toc:d};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"tldr"},"TL;DR"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://codesandbox.io/s/github/react-querybuilder/react-querybuilder/tree/main/examples/basic-ts"},"Basic example (TypeScript)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://codesandbox.io/s/github/react-querybuilder/react-querybuilder/tree/main/examples/basic"},"Basic example (JavaScript)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/react-querybuilder/react-querybuilder/tree/main/examples/"},"More examples"))),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"To install ",(0,a.kt)("inlineCode",{parentName:"p"},"react-querybuilder"),", use ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/react-querybuilder"},"npm")," or ",(0,a.kt)("a",{parentName:"p",href:"https://yarnpkg.com/package/react-querybuilder"},"Yarn"),", or follow ",(0,a.kt)("a",{parentName:"p",href:"./buildless"},"these instructions for a buildless environment"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i react-querybuilder\n# OR\nyarn add react-querybuilder\n")),(0,a.kt)("h2",{id:"basics"},"Basics"),(0,a.kt)("p",null,"The simplest way to create a query builder is to render the ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryBuilder")," component with no props. (Be sure to import the official stylesheet, which is available in ",(0,a.kt)("inlineCode",{parentName:"p"},".css")," and ",(0,a.kt)("inlineCode",{parentName:"p"},".scss")," flavors.)"),(0,a.kt)(i.c,{rqbVersion:5,options:{editorHeight:160},mdxType:"SandpackRQB"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { QueryBuilder } from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.scss';\n\nexport default () => <QueryBuilder />;\n"))),(0,a.kt)("p",null,"Functional, but not very useful. To really get value out of the query builder, we'll first need to define a set of fields for the user to choose from. We can pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"fields")," array into the query builder through the ",(0,a.kt)("inlineCode",{parentName:"p"},"fields")," prop."),(0,a.kt)("p",null,'In the query builder below, click the "+Rule" button and then the field selector to see the field choices.'),(0,a.kt)(i.c,{rqbVersion:5,options:{editorHeight:240},mdxType:"SandpackRQB"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { QueryBuilder } from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.scss';\n\nconst fields: Field[] = [\n  { name: 'firstName', label: 'First Name' },\n  { name: 'lastName', label: 'Last Name' },\n];\n\nexport default () => <QueryBuilder fields={fields} />;\n"))),(0,a.kt)("p",null,"Much more useful, but you probably want to monitor and control what users do with the query builder. Let's set up a state variable using the React Hook ",(0,a.kt)("inlineCode",{parentName:"p"},"useState"),". This will store our query object and allow us to pass it on to other components, event handlers, etc."),(0,a.kt)("p",null,"The state variable ",(0,a.kt)("inlineCode",{parentName:"p"},"query")," will be passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"query")," prop, and the setter method ",(0,a.kt)("inlineCode",{parentName:"p"},"setQuery")," will be used in the ",(0,a.kt)("inlineCode",{parentName:"p"},"onQueryChange")," callback. Let's also seed the query object with a couple of rules, making sure that the ",(0,a.kt)("inlineCode",{parentName:"p"},"field")," property of each rule matches the ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," property of one of our fields."),(0,a.kt)(i.c,{rqbVersion:5,options:{editorHeight:480},mdxType:"SandpackRQB"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useState } from 'react';\nimport { Field, QueryBuilder, RuleGroupType } from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.scss';\n\nconst fields: Field[] = [\n  { name: 'firstName', label: 'First Name' },\n  { name: 'lastName', label: 'Last Name' },\n];\n\nexport default () => {\n  const [query, setQuery] = useState<RuleGroupType>({\n    combinator: 'and',\n    rules: [\n      { field: 'firstName', operator: '=', value: 'Steve' },\n      { field: 'lastName', operator: '=', value: 'Vai' },\n    ],\n  });\n\n  return <QueryBuilder fields={fields} query={query} onQueryChange={q => setQuery(q)} />;\n};\n"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Non-TypeScript version"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useState } from 'react';\nimport { QueryBuilder } from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.scss';\n\nconst fields = [\n  { name: 'firstName', label: 'First Name' },\n  { name: 'lastName', label: 'Last Name' },\n];\n\nexport default () => {\n  const [query, setQuery] = useState({\n    combinator: 'and',\n    rules: [\n      { field: 'firstName', operator: '=', value: 'Steve' },\n      { field: 'lastName', operator: '=', value: 'Vai' },\n    ],\n  });\n\n  return <QueryBuilder fields={fields} query={query} onQueryChange={q => setQuery(q)} />;\n};\n"))),(0,a.kt)("h2",{id:"exporting-queries"},"Exporting queries"),(0,a.kt)("p",null,"To convert a query object into other formats like ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/SQL"},"SQL"),", ",(0,a.kt)("a",{parentName:"p",href:"https://www.mongodb.com/"},"MongoDB"),", and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/google/cel-spec"},"CEL"),", you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"formatQuery")," function (",(0,a.kt)("a",{parentName:"p",href:"./utils/export"},"full documentation here"),"). The example below demonstrates the conversion of a query to its equivalent SQL form. Modify the query by manipulating the form elements and the SQL will update accordingly."),(0,a.kt)(i.c,{rqbVersion:5,options:{editorHeight:480},mdxType:"SandpackRQB"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useState } from 'react';\nimport { Field, formatQuery, QueryBuilder, RuleGroupType } from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.scss';\n\nconst fields: Field[] = [\n  { name: 'firstName', label: 'First Name' },\n  { name: 'lastName', label: 'Last Name' },\n];\n\nexport default () => {\n  const [query, setQuery] = useState<RuleGroupType>({\n    combinator: 'and',\n    rules: [\n      { field: 'firstName', operator: 'beginsWith', value: 'Stev' },\n      { field: 'lastName', operator: 'in', value: 'Vai,Vaughan' },\n    ],\n  });\n\n  return (\n    <>\n      <QueryBuilder fields={fields} query={query} onQueryChange={q => setQuery(q)} />\n      <h4>\n        SQL as result of <code>formatQuery(query, 'sql')</code>:\n      </h4>\n      <pre>{formatQuery(query, 'sql')}</pre>\n    </>\n  );\n};\n"))),(0,a.kt)("h2",{id:"onward-and-upward"},"Onward and upward!"),(0,a.kt)("p",null,"To discover all the options of React Query Builder, check out the ",(0,a.kt)("a",{parentName:"p",href:"./components/querybuilder"},"API documentation"),". To play around with various configurations, including other export formats and ",(0,a.kt)("a",{parentName:"p",href:"./utils/import"},"importing from SQL"),", check out the ",(0,a.kt)("a",{parentName:"p",href:"/demo"},"demo"),"."),(0,a.kt)("h2",{id:"training"},"Training"),(0,a.kt)("p",null,"For an extended tutorial on configuration and customization of ",(0,a.kt)("inlineCode",{parentName:"p"},"react-querybuilder"),", including information about integrating it with a backend API and advanced reporting components (grids, maps, charts, etc.), check out the course ",(0,a.kt)("a",{parentName:"p",href:"https://www.newline.co/courses/building-advanced-admin-reporting-in-react"},"Building Advanced Admin Reporting in React"),", which is taught by one of this library's maintainers, over at ",(0,a.kt)("a",{parentName:"p",href:"https://www.newline.co/"},"newline"),"."))}c.isMDXComponent=!0}}]);