"use strict";(self.webpackChunkreact_querybuilder_github_io=self.webpackChunkreact_querybuilder_github_io||[]).push([[206],{8335:function(e,t,r){r.d(t,{e:function(){return i}});var n=r(7294),a=r(6624),i=function(e){return n.createElement("div",{className:"queryBuilderEmbed"},n.createElement(a.ZP,e))}},9568:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),l=r(8335),u=["components"],o={title:"Getting Started"},s=void 0,d={unversionedId:"intro",id:"intro",title:"Getting Started",description:"To install react-querybuilder, use npm or Yarn.",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",editUrl:"https://github.com/react-querybuilder/react-querybuilder.github.io/edit/main/docs/intro.mdx",tags:[],version:"current",frontMatter:{title:"Getting Started"},sidebar:"mySidebar",next:{title:"<QueryBuilder />",permalink:"/docs/api/querybuilder"}},p=[{value:"Basics",id:"basics",children:[],level:2},{value:"Onward and upward!",id:"onward-and-upward",children:[],level:2},{value:"Training",id:"training",children:[],level:2}],c={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To install ",(0,i.kt)("inlineCode",{parentName:"p"},"react-querybuilder"),", use ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/react-querybuilder"},"npm")," or ",(0,i.kt)("a",{parentName:"p",href:"https://yarnpkg.com/package/react-querybuilder"},"Yarn"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# npm\nnpm i react-querybuilder\n")),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Yarn\nyarn add react-querybuilder\n")),(0,i.kt)("h2",{id:"basics"},"Basics"),(0,i.kt)("p",null,"The simplest way to create a query builder is to render the QueryBuilder component with no props. (Be sure to import the official stylesheet, which is available in ",(0,i.kt)("inlineCode",{parentName:"p"},".css")," and ",(0,i.kt)("inlineCode",{parentName:"p"},".scss")," flavors.)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import QueryBuilder from "react-querybuilder";\nimport "react-querybuilder/dist/query-builder.css";\n\nexport const BasicExample = () => (\n  <QueryBuilder />\n);\n')),(0,i.kt)("p",null,"That component will render this query builder:"),(0,i.kt)(l.e,{mdxType:"QueryBuilderEmbed"}),(0,i.kt)("p",null,"Functional, but not really useful. To really get value out of the query builder, we'll first need to define a set of fields for the user to choose from. We can pass the ",(0,i.kt)("inlineCode",{parentName:"p"},"fields")," array into the query builder through the ",(0,i.kt)("inlineCode",{parentName:"p"},"fields")," prop."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import QueryBuilder, { Field } from "react-querybuilder";\nimport "react-querybuilder/dist/query-builder.css";\n\nconst fields: Field[] = [\n  { name: "firstName", label: "First Name" },\n  { name: "lastName", label: "Last Name" },\n];\n\nconst FieldsExample = () => (\n  <QueryBuilder fields={fields} />\n);\n')),(0,i.kt)("p",null,'That will render the query builder below. Click the "+Rule" button and then the fields selector to see the field choices.'),(0,i.kt)(l.e,{fields:[{name:"firstName",label:"First Name"},{name:"lastName",label:"Last Name"}],mdxType:"QueryBuilderEmbed"}),(0,i.kt)("p",null,"Much more useful, but you probably want to monitor and control what users do with the query builder. Let's set up a state variable using the React Hook ",(0,i.kt)("inlineCode",{parentName:"p"},"useState"),". This will store our query object and allow us to pass it on to other components, event handlers, etc."),(0,i.kt)("p",null,"The state variable ",(0,i.kt)("inlineCode",{parentName:"p"},"query")," will be passed to the ",(0,i.kt)("inlineCode",{parentName:"p"},"query")," prop, and the setter method ",(0,i.kt)("inlineCode",{parentName:"p"},"setQuery")," will be used in the ",(0,i.kt)("inlineCode",{parentName:"p"},"onQueryChange")," callback. Let's also seed the query object with a couple of rules, making sure that the ",(0,i.kt)("inlineCode",{parentName:"p"},"field")," property of each rule matches the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," property of one of our fields."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useState } from "react";\nimport QueryBuilder, { RuleGroupType } from "react-querybuilder";\nimport "react-querybuilder/dist/query-builder.css";\n\nconst FirstUsefulExample = () => {\n  const [query, setQuery] = useState<RuleGroupType>({\n    combinator: \'and\',\n    rules: [\n      { field: "firstName", operator: "=", value: "Steve" },\n      { field: "lastName", operator: "=", value: "Vai" }\n    ]\n  });\n\n  return (\n    <QueryBuilder\n      fields={fields}\n      query={query}\n      onQueryChange={(q) => setQuery(q)}\n    />\n  );\n};\n')),(0,i.kt)("p",null,"Which renders this:"),(0,i.kt)(l.e,{fields:[{name:"firstName",label:"First Name"},{name:"lastName",label:"Last Name"}],defaultQuery:{combinator:"and",rules:[{field:"firstName",operator:"=",value:"Steve"},{field:"lastName",operator:"=",value:"Vai"}]},mdxType:"QueryBuilderEmbed"}),(0,i.kt)("h2",{id:"onward-and-upward"},"Onward and upward!"),(0,i.kt)("p",null,"To discover all the options of React Query Builder, check out the ",(0,i.kt)("a",{parentName:"p",href:"./api/querybuilder"},"API documentation"),". To play around with various configurations, check out the ",(0,i.kt)("a",{parentName:"p",href:"https://react-querybuilder.github.io/react-querybuilder/"},'"kitchen sink" demo'),"."),(0,i.kt)("h2",{id:"training"},"Training"),(0,i.kt)("p",null,"For an extended tutorial on configuration and customization of ",(0,i.kt)("inlineCode",{parentName:"p"},"react-querybuilder"),", including information about integrating it with a backend API and advanced reporting components (grids, maps, charts, etc.), check out the course ",(0,i.kt)("a",{parentName:"p",href:"https://www.newline.co/courses/building-advanced-admin-reporting-in-react"},"Building Advanced Admin Reporting in React"),", which is taught by one of this library's maintainers, over at ",(0,i.kt)("a",{parentName:"p",href:"https://www.newline.co/"},"newline"),"."))}m.isMDXComponent=!0}}]);