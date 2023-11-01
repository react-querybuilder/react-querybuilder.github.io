"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[630],{70876:(e,r,n)=>{n.d(r,{Z:()=>f});var t=n(27378),i=n(37140),s=n(33441),a=n(90362),l=n(74229);const o={details:"details_IpIu",isBrowser:"isBrowser_QD4r",collapsibleContent:"collapsibleContent_Fd2D"};var d=n(24246);function c(e){return!!e&&("SUMMARY"===e.tagName||c(e.parentElement))}function u(e,r){return!!e&&(e===r||u(e.parentElement,r))}function h(e){let{summary:r,children:n,...i}=e;const h=(0,a.Z)(),p=(0,t.useRef)(null),{collapsed:m,setCollapsed:f}=(0,l.u)({initialState:!i.open}),[y,b]=(0,t.useState)(i.open),x=t.isValidElement(r)?r:(0,d.jsx)("summary",{children:r??"Details"});return(0,d.jsxs)("details",{...i,ref:p,open:y,"data-collapsed":m,className:(0,s.Z)(o.details,h&&o.isBrowser,i.className),onMouseDown:e=>{c(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const r=e.target;c(r)&&u(r,p.current)&&(e.preventDefault(),m?(f(!1),b(!0)):f(!0))},children:[x,(0,d.jsx)(l.z,{lazy:!1,collapsed:m,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{f(e),b(!e)},children:(0,d.jsx)("div",{className:o.collapsibleContent,children:n})})]})}const p={details:"details_jERq"},m="alert alert--info";function f(e){let{...r}=e;return(0,d.jsx)(h,{...r,className:(0,i.Z)(m,p.details,r.className)})}},70992:(e,r,n)=>{n.d(r,{c:()=>l});var t=n(42349),i=n(44561),s=n(27378),a=n(24246);const l=e=>{let{children:r,customSetup:n,options:l,rqbVersion:o=6}=e;const d="dark"===(0,i.I)().colorMode,c=s.Children.toArray(r),u=d?"#343a46":"#ffffff";let h=!0;const p={};for(const t of c){const{props:e}=t.props.children;let r,n=!1,i=!1;if(e.metastring){const[t,...s]=e.metastring.split(" ");r="/"+t,n=s.includes("hidden"),i=s.includes("active")}else if("language-tsx"===e.className)r="/App.tsx";else if("language-js"===e.className)r="/App.js";else{if("language-css"!==e.className)throw new Error(`Code block is missing a filename: ${e.children}`);r="/styles.css"}if(p[r])throw new Error(`File ${r} was defined multiple times. Each file snippet should have a unique path name.`);"/styles.css"!==r||n||(h=!1),p[r]={code:e.children,hidden:n,active:i}}const m=RegExp("^import +'react-querybuilder/dist/query-builder\\.s?css';?$").test(p["/App.tsx"]?.code)?"":"@import 'react-querybuilder/dist/query-builder.css';",f=`\nbody {\n  background-color: ${u};\n}\npre {\n  padding: 1rem;\n  background-color: white;\n  border: 1px solid lightgray;\n  border-radius: 0.25rem;\n  white-space: pre-wrap;\n}\n${d?"\nh1, h2, h3, h4, h5, h6 {\n  color: white;\n}":""}`;p["/styles.css"]={code:[m,f,p["/styles.css"]?.code??""].join("\n\n"),hidden:h};const y=4===o?{"react-querybuilder":"^4.5.3"}:5===o?{"@react-querybuilder/dnd":"^5.4.1","react-querybuilder":"^5.4.1"}:{"@react-querybuilder/dnd":"^6.0.7","react-querybuilder":"^6.0.7"},b={...n,dependencies:{...n?.dependencies,...y}};return(0,a.jsx)("div",{className:"sandpackrqb",children:(0,a.jsx)(t.xR,{files:p,theme:d?"dark":void 0,template:"vite-react-ts",customSetup:b,options:l})},`v${o}`)}},49819:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var t=n(24246),i=n(71670),s=n(70992),a=n(70876);const l={title:"Getting started",hide_table_of_contents:!0},o=void 0,d={id:"intro",title:"Getting started",description:"TL;DR",source:"@site/versioned_docs/version-6/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/versioned_docs/version-6/intro.mdx",tags:[],version:"6",frontMatter:{title:"Getting started",hide_table_of_contents:!0},sidebar:"mySidebar",next:{title:"Components",permalink:"/docs/category/components"}},c={},u=[{value:"TL;DR",id:"tldr",level:2},{value:"Installation",id:"installation",level:2},{value:"Basics",id:"basics",level:2},{value:"Exporting queries",id:"exporting-queries",level:2},{value:"Onward and upward!",id:"onward-and-upward",level:2},{value:"Training",id:"training",level:2}];function h(e){const r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"tldr",children:"TL;DR"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://codesandbox.io/s/github/react-querybuilder/react-querybuilder/tree/main/examples/basic-ts",children:"Basic example (TypeScript)"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://codesandbox.io/s/github/react-querybuilder/react-querybuilder/tree/main/examples/basic",children:"Basic example (JavaScript)"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/tree/main/examples/",children:"More examples"})}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(r.p,{children:["To install ",(0,t.jsx)(r.code,{children:"react-querybuilder"}),", use a package manager like ",(0,t.jsx)(r.a,{href:"https://www.npmjs.com/",children:"npm"}),", ",(0,t.jsx)(r.a,{href:"https://yarnpkg.com/",children:"Yarn"}),", ",(0,t.jsx)(r.a,{href:"https://pnpm.io/",children:"pnpm"}),", or ",(0,t.jsx)(r.a,{href:"https://bun.sh/",children:"Bun"}),", or follow ",(0,t.jsx)(r.a,{href:"./buildless",children:"these instructions for a buildless environment"}),"."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"npm i react-querybuilder\n# OR yarn add / pnpm add / bun add\n"})}),"\n",(0,t.jsx)(r.h2,{id:"basics",children:"Basics"}),"\n",(0,t.jsxs)(r.p,{children:["The simplest way to create a query builder is to render the ",(0,t.jsx)(r.code,{children:"QueryBuilder"})," component with no props. (Be sure to import the official stylesheet, which is available in ",(0,t.jsx)(r.code,{children:".css"})," and ",(0,t.jsx)(r.code,{children:".scss"})," flavors.)"]}),"\n",(0,t.jsx)(s.c,{rqbVersion:6,options:{editorHeight:160},children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:"import { QueryBuilder } from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.css';\n\nexport default () => <QueryBuilder />;\n"})})}),"\n",(0,t.jsxs)(r.p,{children:["Functional, but not very useful. To really get value out of the query builder, we'll first need to define a set of fields for the user to choose from. We can pass the ",(0,t.jsx)(r.code,{children:"fields"})," array into the query builder through the ",(0,t.jsx)(r.code,{children:"fields"})," prop."]}),"\n",(0,t.jsx)(r.p,{children:'In the query builder below, click the "+Rule" button and then the field selector to see the field choices.'}),"\n",(0,t.jsx)(s.c,{rqbVersion:6,options:{editorHeight:240},children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:"import { QueryBuilder } from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.css';\n\nconst fields: Field[] = [\n  { name: 'firstName', label: 'First Name' },\n  { name: 'lastName', label: 'Last Name' },\n];\n\nexport default () => <QueryBuilder fields={fields} />;\n"})})}),"\n",(0,t.jsxs)(r.p,{children:["Much more useful, but you probably want to monitor and control what users do with the query builder. Let's set up a state variable using the React Hook ",(0,t.jsx)(r.code,{children:"useState"}),". This will store our query object and allow us to pass it on to other components, event handlers, etc."]}),"\n",(0,t.jsxs)(r.p,{children:["The state variable ",(0,t.jsx)(r.code,{children:"query"})," will be passed to the ",(0,t.jsx)(r.code,{children:"query"})," prop, and the setter method ",(0,t.jsx)(r.code,{children:"setQuery"})," will be used in the ",(0,t.jsx)(r.code,{children:"onQueryChange"})," callback. Let's also seed the query object with a couple of rules, making sure that the ",(0,t.jsx)(r.code,{children:"field"})," property of each rule matches the ",(0,t.jsx)(r.code,{children:"name"})," property of one of our fields."]}),"\n",(0,t.jsx)(s.c,{rqbVersion:6,options:{editorHeight:480},children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Field, QueryBuilder, RuleGroupType } from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.css';\n\nconst fields: Field[] = [\n  { name: 'firstName', label: 'First Name' },\n  { name: 'lastName', label: 'Last Name' },\n];\n\nexport default () => {\n  const [query, setQuery] = useState<RuleGroupType>({\n    combinator: 'and',\n    rules: [\n      { field: 'firstName', operator: '=', value: 'Steve' },\n      { field: 'lastName', operator: '=', value: 'Vai' },\n    ],\n  });\n\n  return <QueryBuilder fields={fields} query={query} onQueryChange={q => setQuery(q)} />;\n};\n"})})}),"\n",(0,t.jsx)(a.Z,{summary:"Non-TypeScript version",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-jsx",children:"import { useState } from 'react';\nimport { QueryBuilder } from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.css';\n\nconst fields = [\n  { name: 'firstName', label: 'First Name' },\n  { name: 'lastName', label: 'Last Name' },\n];\n\nexport default () => {\n  const [query, setQuery] = useState({\n    combinator: 'and',\n    rules: [\n      { field: 'firstName', operator: '=', value: 'Steve' },\n      { field: 'lastName', operator: '=', value: 'Vai' },\n    ],\n  });\n\n  return <QueryBuilder fields={fields} query={query} onQueryChange={q => setQuery(q)} />;\n};\n"})})}),"\n",(0,t.jsx)(r.h2,{id:"exporting-queries",children:"Exporting queries"}),"\n",(0,t.jsxs)(r.p,{children:["To convert a query object into other formats like ",(0,t.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/SQL",children:"SQL"}),", ",(0,t.jsx)(r.a,{href:"https://www.mongodb.com/",children:"MongoDB"}),", and ",(0,t.jsx)(r.a,{href:"https://github.com/google/cel-spec",children:"CEL"}),", you can use the ",(0,t.jsx)(r.code,{children:"formatQuery"})," function (",(0,t.jsx)(r.a,{href:"./utils/export",children:"full documentation"}),"). The example below demonstrates the conversion of a query to its equivalent SQL form. Modify the query by manipulating the form elements and the SQL will update accordingly."]}),"\n",(0,t.jsx)(s.c,{rqbVersion:6,options:{editorHeight:480},children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Field, formatQuery, QueryBuilder, RuleGroupType } from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.css';\n\nconst fields: Field[] = [\n  { name: 'firstName', label: 'First Name' },\n  { name: 'lastName', label: 'Last Name' },\n];\n\nexport default () => {\n  const [query, setQuery] = useState<RuleGroupType>({\n    combinator: 'and',\n    rules: [\n      { field: 'firstName', operator: 'beginsWith', value: 'Stev' },\n      { field: 'lastName', operator: 'in', value: 'Vai,Vaughan' },\n    ],\n  });\n\n  return (\n    <>\n      <QueryBuilder fields={fields} query={query} onQueryChange={q => setQuery(q)} />\n      <h4>\n        SQL as result of <code>formatQuery(query, 'sql')</code>:\n      </h4>\n      <pre>{formatQuery(query, 'sql')}</pre>\n    </>\n  );\n};\n"})})}),"\n",(0,t.jsx)(r.h2,{id:"onward-and-upward",children:"Onward and upward!"}),"\n",(0,t.jsxs)(r.p,{children:["To discover all the options of React Query Builder, start with the ",(0,t.jsx)(r.a,{href:"./components/querybuilder",children:"main component documentation"}),". To play around with various configurations, including other ",(0,t.jsx)(r.a,{href:"./utils/export",children:"export"}),"/",(0,t.jsx)(r.a,{href:"./utils/import",children:"import"})," formats, check out the ",(0,t.jsx)(r.a,{href:"/demo",children:"demo"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"training",children:"Training"}),"\n",(0,t.jsxs)(r.p,{children:["For an extended tutorial on configuration and customization of ",(0,t.jsx)(r.code,{children:"react-querybuilder"}),", including information about integrating it with a backend API and advanced reporting components (grids, maps, charts, etc.), check out the course ",(0,t.jsx)(r.a,{href:"https://www.newline.co/courses/building-advanced-admin-reporting-in-react",children:"Building Advanced Admin Reporting in React"}),", taught by this library's maintainer, over at ",(0,t.jsx)(r.a,{href:"https://www.newline.co/",children:"newline"}),"."]})]})}function p(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}}}]);