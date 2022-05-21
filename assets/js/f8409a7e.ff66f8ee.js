"use strict";(self.webpackChunkreact_querybuilder_github_io=self.webpackChunkreact_querybuilder_github_io||[]).push([[206],{3475:function(e,t,r){r.d(t,{c:function(){return o}});var a=r(7219),n=r(2949),i=r(7294),o=function(e){var t,r,o=e.children,l=e.customSetup,s=e.options,u=(0,n.I)().isDarkTheme,d=i.Children.toArray(o),p=u?"#343a46":"#ffffff",c=!0,m=d.reduce((function(e,t){if("pre"!==t.props.mdxType)return e;var r,a=t.props.children.props,n=!1,i=!1;if(a.metastring){var o=a.metastring.split(" "),l=o[0],s=o.slice(1);r="/"+l,s.includes("hidden")&&(n=!0),s.includes("active")&&(i=!0)}else if("language-tsx"===a.className)r="/App.tsx";else if("language-js"===a.className)r="/App.js";else{if("language-css"!==a.className)throw new Error("Code block is missing a filename: "+a.children);r="/styles.css"}if(e[r])throw new Error("File "+r+" was defined multiple times. Each file snippet should have a unique path name.");return"/styles.css"!==r||n||(c=!1),e[r]={code:a.children,hidden:n,active:i},e}),{}),h=RegExp("^import +'react-querybuilder/dist/query-builder\\.s?css';?$").test(m["/App.tsx"].code)?"":"@import 'react-querybuilder/dist/query-builder.css';",f="body { background-color: "+p+"; } pre { padding: 1rem; background-color: white; border: 1px solid lightgray; border-radius: 4px; white-space: pre-wrap; }";m["/styles.css"]={code:[h,f,null!=(t=null==(r=m["/styles.css"])?void 0:r.code)?t:""].join("\n\n"),hidden:c};var y=Object.assign({},l,{dependencies:Object.assign({},null==l?void 0:l.dependencies,{"react-querybuilder":"latest"})});return i.createElement("div",{className:"sandpackrqb"},i.createElement(a.xR,{files:m,theme:u?"monokai-pro":void 0,template:"react-ts",customSetup:y,options:s}))}},9568:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o=r(3475),l=["components"],s={title:"Getting Started",hide_table_of_contents:!0},u=void 0,d={unversionedId:"intro",id:"intro",title:"Getting Started",description:"TL;DR",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder.github.io/edit/main/docs/intro.mdx",tags:[],version:"current",frontMatter:{title:"Getting Started",hide_table_of_contents:!0},sidebar:"mySidebar",next:{title:"API",permalink:"/docs/category/api"}},p={},c=[{value:"TL;DR",id:"tldr",level:2},{value:"Installation",id:"installation",level:2},{value:"Basics",id:"basics",level:2},{value:"Exporting queries",id:"exporting-queries",level:2},{value:"Onward and upward!",id:"onward-and-upward",level:2},{value:"Training",id:"training",level:2}],m={toc:c};function h(e){var t=e.components,r=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"tldr"},"TL;DR"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/github/react-querybuilder/react-querybuilder/tree/main/examples/basic-ts"},"Basic example")," (",(0,i.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/github/react-querybuilder/react-querybuilder/tree/main/examples/basic"},"non-TypeScript version"),"). ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-querybuilder/react-querybuilder/tree/main/examples/"},"More examples"),"."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"To install ",(0,i.kt)("inlineCode",{parentName:"p"},"react-querybuilder"),", use ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/react-querybuilder"},"npm")," or ",(0,i.kt)("a",{parentName:"p",href:"https://yarnpkg.com/package/react-querybuilder"},"Yarn"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i react-querybuilder\n# OR\nyarn add react-querybuilder\n")),(0,i.kt)("h2",{id:"basics"},"Basics"),(0,i.kt)("p",null,"The simplest way to create a query builder is to render the ",(0,i.kt)("inlineCode",{parentName:"p"},"QueryBuilder")," component with no props. (Be sure to import the official stylesheet, which is available in ",(0,i.kt)("inlineCode",{parentName:"p"},".css")," and ",(0,i.kt)("inlineCode",{parentName:"p"},".scss")," flavors.)"),(0,i.kt)(o.c,{options:{editorHeight:160},mdxType:"SandpackRQB"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { QueryBuilder } from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.scss';\n\nexport default () => <QueryBuilder />;\n"))),(0,i.kt)("p",null,"Functional, but not very useful. To really get value out of the query builder, we'll first need to define a set of fields for the user to choose from. We can pass the ",(0,i.kt)("inlineCode",{parentName:"p"},"fields")," array into the query builder through the ",(0,i.kt)("inlineCode",{parentName:"p"},"fields")," prop."),(0,i.kt)("p",null,'In the query builder below, click the "+Rule" button and then the field selector to see the field choices.'),(0,i.kt)(o.c,{options:{editorHeight:240},mdxType:"SandpackRQB"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { QueryBuilder } from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.scss';\n\nconst fields: Field[] = [\n  { name: 'firstName', label: 'First Name' },\n  { name: 'lastName', label: 'Last Name' },\n];\n\nexport default () => <QueryBuilder fields={fields} />;\n"))),(0,i.kt)("p",null,"Much more useful, but you probably want to monitor and control what users do with the query builder. Let's set up a state variable using the React Hook ",(0,i.kt)("inlineCode",{parentName:"p"},"useState"),". This will store our query object and allow us to pass it on to other components, event handlers, etc."),(0,i.kt)("p",null,"The state variable ",(0,i.kt)("inlineCode",{parentName:"p"},"query")," will be passed to the ",(0,i.kt)("inlineCode",{parentName:"p"},"query")," prop, and the setter method ",(0,i.kt)("inlineCode",{parentName:"p"},"setQuery")," will be used in the ",(0,i.kt)("inlineCode",{parentName:"p"},"onQueryChange")," callback. Let's also seed the query object with a couple of rules, making sure that the ",(0,i.kt)("inlineCode",{parentName:"p"},"field")," property of each rule matches the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," property of one of our fields."),(0,i.kt)(o.c,{options:{editorHeight:480},mdxType:"SandpackRQB"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useState } from 'react';\nimport { QueryBuilder, Field, RuleGroupType } from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.scss';\n\nconst fields: Field[] = [\n  { name: 'firstName', label: 'First Name' },\n  { name: 'lastName', label: 'Last Name' },\n];\n\nexport default () => {\n  const [query, setQuery] = useState<RuleGroupType>({\n    combinator: 'and',\n    rules: [\n      { field: 'firstName', operator: '=', value: 'Steve' },\n      { field: 'lastName', operator: '=', value: 'Vai' },\n    ],\n  });\n\n  return <QueryBuilder fields={fields} query={query} onQueryChange={q => setQuery(q)} />;\n};\n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Non-TypeScript version"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useState } from 'react';\nimport { QueryBuilder } from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.scss';\n\nconst fields = [\n  { name: 'firstName', label: 'First Name' },\n  { name: 'lastName', label: 'Last Name' },\n];\n\nexport default () => {\n  const [query, setQuery] = useState({\n    combinator: 'and',\n    rules: [\n      { field: 'firstName', operator: '=', value: 'Steve' },\n      { field: 'lastName', operator: '=', value: 'Vai' },\n    ],\n  });\n\n  return <QueryBuilder fields={fields} query={query} onQueryChange={q => setQuery(q)} />;\n};\n"))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This documentation primarily demonstrates use of the ESM and CommonJS builds of ",(0,i.kt)("inlineCode",{parentName:"p"},"react-querybuilder"),", but a ",(0,i.kt)("a",{parentName:"p",href:"./umd"},"UMD build is also available"),"."))),(0,i.kt)("h2",{id:"exporting-queries"},"Exporting queries"),(0,i.kt)("p",null,"To convert a query object into other formats like ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/SQL"},"SQL"),", ",(0,i.kt)("a",{parentName:"p",href:"https://www.mongodb.com/"},"MongoDB"),", and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/google/cel-spec"},"CEL"),", you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"formatQuery")," function (",(0,i.kt)("a",{parentName:"p",href:"./api/export"},"full documentation here"),"). The example below demonstrates the conversion of a query to its equivalent SQL form. Modify the query by manipulating the form elements and the SQL will update accordingly."),(0,i.kt)(o.c,{options:{editorHeight:480},mdxType:"SandpackRQB"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useState } from 'react';\nimport { QueryBuilder, Field, formatQuery, RuleGroupType } from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.scss';\n\nconst fields: Field[] = [\n  { name: 'firstName', label: 'First Name' },\n  { name: 'lastName', label: 'Last Name' },\n];\n\nexport default () => {\n  const [query, setQuery] = useState<RuleGroupType>({\n    combinator: 'and',\n    rules: [\n      { field: 'firstName', operator: 'beginsWith', value: 'Stev' },\n      { field: 'lastName', operator: 'in', value: 'Vai,Vaughan' },\n    ],\n  });\n\n  return (\n    <>\n      <QueryBuilder fields={fields} query={query} onQueryChange={q => setQuery(q)} />\n      <h4>\n        SQL as result of <code>formatQuery(query, 'sql')</code>:\n      </h4>\n      <pre>{formatQuery(query, 'sql')}</pre>\n    </>\n  );\n};\n"))),(0,i.kt)("h2",{id:"onward-and-upward"},"Onward and upward!"),(0,i.kt)("p",null,"To discover all the options of React Query Builder, check out the ",(0,i.kt)("a",{parentName:"p",href:"./api/querybuilder"},"API documentation"),". To play around with various configurations, including other export formats and ",(0,i.kt)("a",{parentName:"p",href:"./api/import"},"importing from SQL"),", check out the ",(0,i.kt)("a",{parentName:"p",href:"https://react-querybuilder.js.org/react-querybuilder/"},'"kitchen sink" demo'),"."),(0,i.kt)("h2",{id:"training"},"Training"),(0,i.kt)("p",null,"For an extended tutorial on configuration and customization of ",(0,i.kt)("inlineCode",{parentName:"p"},"react-querybuilder"),", including information about integrating it with a backend API and advanced reporting components (grids, maps, charts, etc.), check out the course ",(0,i.kt)("a",{parentName:"p",href:"https://www.newline.co/courses/building-advanced-admin-reporting-in-react"},"Building Advanced Admin Reporting in React"),", which is taught by one of this library's maintainers, over at ",(0,i.kt)("a",{parentName:"p",href:"https://www.newline.co/"},"newline"),"."))}h.isMDXComponent=!0}}]);