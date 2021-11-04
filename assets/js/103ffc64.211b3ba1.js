"use strict";(self.webpackChunkreact_querybuilder_github_io=self.webpackChunkreact_querybuilder_github_io||[]).push([[69],{6186:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return m},default:function(){return d}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=n(9769),p=["components"],s={title:"Import",sidebar_position:6},l=void 0,u={unversionedId:"api/import",id:"api/import",isDocsHomePage:!1,title:"Import",description:"Use the parseSQL function to convert SQL SELECT statements into a format suitable for the ` component's query` prop.",source:"@site/docs/api/import.md",sourceDirName:"api",slug:"/api/import",permalink:"/docs/api/import",editUrl:"https://github.com/react-querybuilder/react-querybuilder.github.io/blob/main/docs/docs/api/import.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Import",sidebar_position:6},sidebar:"mySidebar",previous:{title:"Export",permalink:"/docs/api/export"},next:{title:"Validation",permalink:"/docs/api/validation"}},m=[{value:"Basic usage",id:"basic-usage",children:[],level:2},{value:"Inline combinators",id:"inline-combinators",children:[],level:2}],c={toc:m};function d(e){var t=e.components,n=(0,i.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.ZP,{mdxType:"TypeScriptAdmonition"}),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"parseSQL")," function to convert SQL ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," statements into a format suitable for the ",(0,r.kt)("inlineCode",{parentName:"p"},"<QueryBuilder />")," component's ",(0,r.kt)("inlineCode",{parentName:"p"},"query")," prop."),(0,r.kt)("p",null,"The function signature is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function parseSQL(sql: string, options?: ParseSQLOptions): RuleGroupTypeAny;\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"parseSQL")," takes a SQL ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," statement (either the full statement or the ",(0,r.kt)("inlineCode",{parentName:"p"},"WHERE")," clause by itself). Try it out in the ",(0,r.kt)("a",{parentName:"p",href:"https://react-querybuilder.github.io/react-querybuilder/"},"demo"),' by clicking the "Load from SQL" button.'),(0,r.kt)("p",null,"The optional second parameter to ",(0,r.kt)("inlineCode",{parentName:"p"},"parseSQL")," is an options object that configures how the function handles named or anonymous bind variables within the SQL string."),(0,r.kt)("h2",{id:"basic-usage"},"Basic usage"),(0,r.kt)("p",null,"Running any of the following statements will produce the same result (see below):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"parseSQL(`SELECT * FROM t WHERE firstName = 'Steve' AND lastName = 'Vai'`);\n\nparseSQL(`SELECT * FROM t WHERE firstName = ? AND lastName = ?`, {\n  params: ['Steve', 'Vai']\n});\n\nparseSQL(`SELECT * FROM t WHERE firstName = :p1 AND lastName = :p2`, {\n  params: { p1: 'Steve', p2: 'Vai' }\n});\n\nparseSQL(`SELECT * FROM t WHERE firstName = $p1 AND lastName = $p2`, {\n  params: { p1: 'Steve', p2: 'Vai' },\n  paramPrefix: '$'\n});\n")),(0,r.kt)("p",null,"Output (",(0,r.kt)("inlineCode",{parentName:"p"},"RuleGroupType"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'{\n  combinator: "and",\n  rules: [\n    {\n      field: "firstName",\n      operator: "=",\n      value: "Steve"\n    },\n    {\n      field: "lastName",\n      operator: "=",\n      value: "Vai"\n    }\n  ]\n}\n')),(0,r.kt)("h2",{id:"inline-combinators"},"Inline combinators"),(0,r.kt)("p",null,"When the ",(0,r.kt)("inlineCode",{parentName:"p"},"inlineCombinators")," option is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"parseSQL")," will output a query with combinator identifiers between sibling rules/groups."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"parseSQL(\n  `SELECT * FROM t WHERE firstName = 'Steve' AND lastName = 'Vai'`,\n  { inlineCombinators: true }\n);\n")),(0,r.kt)("p",null,"Output (",(0,r.kt)("inlineCode",{parentName:"p"},"RuleGroupTypeIC"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'{\n  rules: [\n    {\n      field: "firstName",\n      operator: "=",\n      value: "Steve"\n    },\n    "and",\n    {\n      field: "lastName",\n      operator: "=",\n      value: "Vai"\n    }\n  ]\n}\n')))}d.isMDXComponent=!0}}]);