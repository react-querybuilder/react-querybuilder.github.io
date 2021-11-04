"use strict";(self.webpackChunkreact_querybuilder_github_io=self.webpackChunkreact_querybuilder_github_io||[]).push([[206],{9568:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return m},default:function(){return h}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=n(2474),o=n.n(i),u=["components"],s={title:"Getting Started"},d=void 0,p={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Getting Started",description:"Installation",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",editUrl:"https://github.com/react-querybuilder/react-querybuilder.github.io/edit/main/docs/intro.mdx",tags:[],version:"current",frontMatter:{title:"Getting Started"},sidebar:"mySidebar",next:{title:"<QueryBuilder />",permalink:"/docs/api/querybuilder"}},m=[{value:"Installation",id:"installation",children:[],level:2},{value:"Getting started",id:"getting-started",children:[],level:2}],c={toc:m};function h(e){var t=e.components,n=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"This page is under construction")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"})),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"To install ",(0,l.kt)("inlineCode",{parentName:"p"},"react-querybuilder"),", use npm or yarn."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# npm\nnpm i react-querybuilder\n")),(0,l.kt)("p",null,"or"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Yarn\nyarn add react-querybuilder\n")),(0,l.kt)("h2",{id:"getting-started"},"Getting started"),(0,l.kt)("p",null,"The simplest way to create a query builder is to render the QueryBuilder component with no props."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import QueryBuilder from "react-querybuilder";\n\nexport const BasicExample = () => (\n  <QueryBuilder />\n);\n')),(0,l.kt)("p",null,"That component will render this query builder:"),(0,l.kt)(o(),{mdxType:"QueryBuilder"}),(0,l.kt)("p",null,"Functional, but not really useful. To really get value out of the query builder, we'll first need to define a set of fields for the user to choose from."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import { Field } from "react-querybuilder";\n\nconst fields: Field[] = [\n  { name: "firstName", label: "First Name" },\n  { name: "lastName", label: "Last Name" },\n];\n')),(0,l.kt)("p",null,"We can pass the ",(0,l.kt)("inlineCode",{parentName:"p"},"fields")," array into the query builder through the ",(0,l.kt)("inlineCode",{parentName:"p"},"fields")," prop."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import QueryBuilder from "react-querybuilder";\n\nconst FieldsExample = () => (\n  <QueryBuilder fields={fields} />\n);\n')),(0,l.kt)("p",null,'That will render the query builder below. Click the "+Rule" button and then the fields selector to see the field choices.'),(0,l.kt)(o(),{fields:[{name:"firstName",label:"First Name"},{name:"lastName",label:"Last Name"}],mdxType:"QueryBuilder"}),(0,l.kt)("p",null,"Much more useful, but you probably want to monitor and control what users do with the query builder. Let's set up a state variable using the React Hook ",(0,l.kt)("inlineCode",{parentName:"p"},"useState"),". This will store our query object and allow us to pass it on to other components, event handlers, etc."),(0,l.kt)("p",null,"The state variable ",(0,l.kt)("inlineCode",{parentName:"p"},"query")," will be passed to the ",(0,l.kt)("inlineCode",{parentName:"p"},"query")," prop, and the setter method ",(0,l.kt)("inlineCode",{parentName:"p"},"setQuery")," will be used in the ",(0,l.kt)("inlineCode",{parentName:"p"},"onQueryChange")," callback. Let's also seed the query object with a couple of rules, making sure that the ",(0,l.kt)("inlineCode",{parentName:"p"},"field")," property of each rule matches the ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," property of one of our fields."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useState } from "react";\nimport QueryBuilder, { RuleGroupType } from "react-querybuilder";\n\nconst FirstUsefulExample = () => {\n  const [query, setQuery] = useState<RuleGroupType>({\n    combinator: \'and\',\n    rules: [\n      { field: "firstName", operator: "=", value: "Steve" },\n      { field: "lastName", operator: "=", value: "Vai" }\n    ]\n  });\n\n  return (\n    <QueryBuilder\n      fields={fields}\n      query={query}\n      onQueryChange={(q) => setQuery(q)}\n    />\n  );\n};\n')),(0,l.kt)("p",null,"Which renders this:"),(0,l.kt)(o(),{fields:[{name:"firstName",label:"First Name"},{name:"lastName",label:"Last Name"}],query:{combinator:"and",rules:[{field:"firstName",operator:"=",value:"Steve"},{field:"lastName",operator:"=",value:"Vai"}]},onQueryChange:console.log,mdxType:"QueryBuilder"}))}h.isMDXComponent=!0}}]);