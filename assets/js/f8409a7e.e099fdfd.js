"use strict";(self.webpackChunkreact_querybuilder_github_io=self.webpackChunkreact_querybuilder_github_io||[]).push([[3206],{3475:(e,t,r)=>{r.d(t,{c:()=>l});var a=r(154),n=r(2949),i=r(7294);const l=e=>{var t,r;let{children:l,customSetup:o,options:s}=e;const{isDarkTheme:u}=(0,n.I)(),d=i.Children.toArray(l),p=u?"#343a46":"#ffffff";let c=!0;const m=d.reduce(((e,t)=>{if("pre"!==t.props.mdxType)return e;const{props:r}=t.props.children;let a,n=!1,i=!1;if(r.metastring){const[e,...t]=r.metastring.split(" ");a="/"+e,t.includes("hidden")&&(n=!0),t.includes("active")&&(i=!0)}else if("language-tsx"===r.className)a="/App.tsx";else if("language-js"===r.className)a="/App.js";else{if("language-css"!==r.className)throw new Error("Code block is missing a filename: "+r.children);a="/styles.css"}if(e[a])throw new Error("File "+a+" was defined multiple times. Each file snippet should have a unique path name.");return"/styles.css"!==a||n||(c=!1),e[a]={code:r.children,hidden:n,active:i},e}),{}),h=RegExp("^import +'react-querybuilder/dist/query-builder\\.s?css';?$").test(m["/App.tsx"].code)?"":"@import 'react-querybuilder/dist/query-builder.css';",y="body { background-color: "+p+"; } pre { padding: 1rem; background-color: white; border: 1px solid lightgray; border-radius: 4px; white-space: pre-wrap; }";m["/styles.css"]={code:[h,y,null!=(t=null==(r=m["/styles.css"])?void 0:r.code)?t:""].join("\n\n"),hidden:c};const f={...o,dependencies:{...null==o?void 0:o.dependencies,"react-querybuilder":"latest"}};return i.createElement("div",{className:"sandpackrqb"},i.createElement(a.xR,{files:m,theme:u?"dark":void 0,template:"react-ts",customSetup:f,options:s}))}},9568:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=r(7462),n=(r(7294),r(3905)),i=r(3475);const l={title:"Getting Started",hide_table_of_contents:!0},o=void 0,s={unversionedId:"intro",id:"intro",title:"Getting Started",description:"TL;DR",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/docs/next/intro",draft:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder.github.io/edit/main/docs/intro.mdx",tags:[],version:"current",frontMatter:{title:"Getting Started",hide_table_of_contents:!0},sidebar:"mySidebar",next:{title:"API",permalink:"/docs/next/category/api"}},u={},d=[{value:"TL;DR",id:"tldr",level:2},{value:"Installation",id:"installation",level:2},{value:"Basics",id:"basics",level:2},{value:"Exporting queries",id:"exporting-queries",level:2},{value:"Onward and upward!",id:"onward-and-upward",level:2},{value:"Training",id:"training",level:2}],p={toc:d};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"tldr"},"TL;DR"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/github/react-querybuilder/react-querybuilder/tree/main/examples/basic-ts"},"Basic example")," (",(0,n.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/github/react-querybuilder/react-querybuilder/tree/main/examples/basic"},"non-TypeScript version"),"). ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/react-querybuilder/react-querybuilder/tree/main/examples/"},"More examples"),"."),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("p",null,"To install ",(0,n.kt)("inlineCode",{parentName:"p"},"react-querybuilder"),", use ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/react-querybuilder"},"npm")," or ",(0,n.kt)("a",{parentName:"p",href:"https://yarnpkg.com/package/react-querybuilder"},"Yarn"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm i react-querybuilder\n# OR\nyarn add react-querybuilder\n")),(0,n.kt)("h2",{id:"basics"},"Basics"),(0,n.kt)("p",null,"The simplest way to create a query builder is to render the ",(0,n.kt)("inlineCode",{parentName:"p"},"QueryBuilder")," component with no props. (Be sure to import the official stylesheet, which is available in ",(0,n.kt)("inlineCode",{parentName:"p"},".css")," and ",(0,n.kt)("inlineCode",{parentName:"p"},".scss")," flavors.)"),(0,n.kt)(i.c,{options:{editorHeight:160},mdxType:"SandpackRQB"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import { QueryBuilder } from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.scss';\n\nexport default () => <QueryBuilder />;\n"))),(0,n.kt)("p",null,"Functional, but not very useful. To really get value out of the query builder, we'll first need to define a set of fields for the user to choose from. We can pass the ",(0,n.kt)("inlineCode",{parentName:"p"},"fields")," array into the query builder through the ",(0,n.kt)("inlineCode",{parentName:"p"},"fields")," prop."),(0,n.kt)("p",null,'In the query builder below, click the "+Rule" button and then the field selector to see the field choices.'),(0,n.kt)(i.c,{options:{editorHeight:240},mdxType:"SandpackRQB"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import { QueryBuilder } from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.scss';\n\nconst fields: Field[] = [\n  { name: 'firstName', label: 'First Name' },\n  { name: 'lastName', label: 'Last Name' },\n];\n\nexport default () => <QueryBuilder fields={fields} />;\n"))),(0,n.kt)("p",null,"Much more useful, but you probably want to monitor and control what users do with the query builder. Let's set up a state variable using the React Hook ",(0,n.kt)("inlineCode",{parentName:"p"},"useState"),". This will store our query object and allow us to pass it on to other components, event handlers, etc."),(0,n.kt)("p",null,"The state variable ",(0,n.kt)("inlineCode",{parentName:"p"},"query")," will be passed to the ",(0,n.kt)("inlineCode",{parentName:"p"},"query")," prop, and the setter method ",(0,n.kt)("inlineCode",{parentName:"p"},"setQuery")," will be used in the ",(0,n.kt)("inlineCode",{parentName:"p"},"onQueryChange")," callback. Let's also seed the query object with a couple of rules, making sure that the ",(0,n.kt)("inlineCode",{parentName:"p"},"field")," property of each rule matches the ",(0,n.kt)("inlineCode",{parentName:"p"},"name")," property of one of our fields."),(0,n.kt)(i.c,{options:{editorHeight:480},mdxType:"SandpackRQB"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useState } from 'react';\nimport { QueryBuilder, Field, RuleGroupType } from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.scss';\n\nconst fields: Field[] = [\n  { name: 'firstName', label: 'First Name' },\n  { name: 'lastName', label: 'Last Name' },\n];\n\nexport default () => {\n  const [query, setQuery] = useState<RuleGroupType>({\n    combinator: 'and',\n    rules: [\n      { field: 'firstName', operator: '=', value: 'Steve' },\n      { field: 'lastName', operator: '=', value: 'Vai' },\n    ],\n  });\n\n  return <QueryBuilder fields={fields} query={query} onQueryChange={q => setQuery(q)} />;\n};\n"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Non-TypeScript version"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useState } from 'react';\nimport { QueryBuilder } from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.scss';\n\nconst fields = [\n  { name: 'firstName', label: 'First Name' },\n  { name: 'lastName', label: 'Last Name' },\n];\n\nexport default () => {\n  const [query, setQuery] = useState({\n    combinator: 'and',\n    rules: [\n      { field: 'firstName', operator: '=', value: 'Steve' },\n      { field: 'lastName', operator: '=', value: 'Vai' },\n    ],\n  });\n\n  return <QueryBuilder fields={fields} query={query} onQueryChange={q => setQuery(q)} />;\n};\n"))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"This documentation primarily demonstrates use of the ESM and CommonJS builds of ",(0,n.kt)("inlineCode",{parentName:"p"},"react-querybuilder"),", but a ",(0,n.kt)("a",{parentName:"p",href:"./umd"},"UMD build is also available"),".")),(0,n.kt)("h2",{id:"exporting-queries"},"Exporting queries"),(0,n.kt)("p",null,"To convert a query object into other formats like ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/SQL"},"SQL"),", ",(0,n.kt)("a",{parentName:"p",href:"https://www.mongodb.com/"},"MongoDB"),", and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/google/cel-spec"},"CEL"),", you can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"formatQuery")," function (",(0,n.kt)("a",{parentName:"p",href:"./api/export"},"full documentation here"),"). The example below demonstrates the conversion of a query to its equivalent SQL form. Modify the query by manipulating the form elements and the SQL will update accordingly."),(0,n.kt)(i.c,{options:{editorHeight:480},mdxType:"SandpackRQB"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useState } from 'react';\nimport { QueryBuilder, Field, formatQuery, RuleGroupType } from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.scss';\n\nconst fields: Field[] = [\n  { name: 'firstName', label: 'First Name' },\n  { name: 'lastName', label: 'Last Name' },\n];\n\nexport default () => {\n  const [query, setQuery] = useState<RuleGroupType>({\n    combinator: 'and',\n    rules: [\n      { field: 'firstName', operator: 'beginsWith', value: 'Stev' },\n      { field: 'lastName', operator: 'in', value: 'Vai,Vaughan' },\n    ],\n  });\n\n  return (\n    <>\n      <QueryBuilder fields={fields} query={query} onQueryChange={q => setQuery(q)} />\n      <h4>\n        SQL as result of <code>formatQuery(query, 'sql')</code>:\n      </h4>\n      <pre>{formatQuery(query, 'sql')}</pre>\n    </>\n  );\n};\n"))),(0,n.kt)("h2",{id:"onward-and-upward"},"Onward and upward!"),(0,n.kt)("p",null,"To discover all the options of React Query Builder, check out the ",(0,n.kt)("a",{parentName:"p",href:"./api/querybuilder"},"API documentation"),". To play around with various configurations, including other export formats and ",(0,n.kt)("a",{parentName:"p",href:"./api/import"},"importing from SQL"),", check out the ",(0,n.kt)("a",{parentName:"p",href:"https://react-querybuilder.js.org/react-querybuilder/"},'"kitchen sink" demo'),"."),(0,n.kt)("h2",{id:"training"},"Training"),(0,n.kt)("p",null,"For an extended tutorial on configuration and customization of ",(0,n.kt)("inlineCode",{parentName:"p"},"react-querybuilder"),", including information about integrating it with a backend API and advanced reporting components (grids, maps, charts, etc.), check out the course ",(0,n.kt)("a",{parentName:"p",href:"https://www.newline.co/courses/building-advanced-admin-reporting-in-react"},"Building Advanced Admin Reporting in React"),", which is taught by one of this library's maintainers, over at ",(0,n.kt)("a",{parentName:"p",href:"https://www.newline.co/"},"newline"),"."))}c.isMDXComponent=!0}}]);