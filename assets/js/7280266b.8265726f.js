"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4974],{28335:(e,t,n)=>{n.d(t,{e:()=>l});var o=n(67294),r=n(87504),i=n(27910);const l=e=>{let{version:t,...n}=e;const l=4===t?i.zk:r.zk;return o.createElement("div",{key:"v"+(null!=t?t:5),className:"queryBuilderEmbed"},o.createElement(l,n))}},89122:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>u,toc:()=>d});var o=n(83117),r=(n(67294),n(3905)),i=n(87504),l=n(28335);const a={title:"Limit rule groups",description:"Methods to prevent new groups",hide_table_of_contents:!0},s=void 0,u={unversionedId:"tips/limit-groups",id:"version-5/tips/limit-groups",title:"Limit rule groups",description:"Methods to prevent new groups",source:"@site/versioned_docs/version-5/tips/limit-groups.mdx",sourceDirName:"tips",slug:"/tips/limit-groups",permalink:"/docs/tips/limit-groups",draft:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/versioned_docs/version-5/tips/limit-groups.mdx",tags:[],version:"5",frontMatter:{title:"Limit rule groups",description:"Methods to prevent new groups",hide_table_of_contents:!0},sidebar:"mySidebar",previous:{title:"Tips & Tricks",permalink:"/docs/category/tips--tricks"},next:{title:"Custom components with fallbacks",permalink:"/docs/tips/custom-with-fallback"}},p={},d=[{value:"Prevent creation of new groups",id:"prevent-creation-of-new-groups",level:2},{value:"Conditionally allow new groups",id:"conditionally-allow-new-groups",level:2},{value:"Other methods",id:"other-methods",level:2}],h={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Some query builder implementations are required to maintain a flat, rule-only hierarchy, or perhaps allow group creation only under certain conditions like one level deep. There are several ways to meet these requirements."),(0,r.kt)("h2",{id:"prevent-creation-of-new-groups"},"Prevent creation of new groups"),(0,r.kt)("p",null,'The simplest way to prevent creation of new groups is to unconditionally hide the "+Group" button. Returning ',(0,r.kt)("inlineCode",{parentName:"p"},"null")," from a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"addGroupAction")," function component is one way to accomplish this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<QueryBuilder\n  fields={fields}\n  query={query}\n  onQueryChange={q => setQuery(q)}\n  controlElements={{\n    // highlight-start\n    addGroupAction: () => null,\n    // highlight-end\n  }}\n/>\n")),(0,r.kt)("p",null,'To hide the "+Group" button with CSS, use the ',(0,r.kt)("inlineCode",{parentName:"p"},"ruleGroup-addGroup")," class which is assigned to the button by default:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".ruleGroup-addGroup {\n  display: none;\n}\n")),(0,r.kt)("p",null,"Either of those methods will generate a query builder like this:"),(0,r.kt)(l.e,{controlElements:{addGroupAction:()=>null},mdxType:"QueryBuilderEmbed"}),(0,r.kt)("h2",{id:"conditionally-allow-new-groups"},"Conditionally allow new groups"),(0,r.kt)("p",null,'To show the "+Group" button at the top level, but hide it in sub-groups, spread the ',(0,r.kt)("inlineCode",{parentName:"p"},"props")," object into the standard ",(0,r.kt)("inlineCode",{parentName:"p"},"ActionElement")," component and return that if the ",(0,r.kt)("inlineCode",{parentName:"p"},"level")," prop is zero; otherwise return ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," as before:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<QueryBuilder\n  fields={fields}\n  query={query}\n  onQueryChange={q => setQuery(q)}\n  controlElements={{\n    // highlight-start\n    addGroupAction: props => (props.level === 0 ? <ActionElement {...props} /> : null),\n    // highlight-end\n  }}\n/>\n")),(0,r.kt)("p",null,"And the CSS method for the same effect:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".ruleGroup .ruleGroup .ruleGroup-addGroup {\n  display: none;\n}\n")),(0,r.kt)("p",null,"Either of those methods will generate a query builder like this:"),(0,r.kt)(l.e,{defaultQuery:{combinator:"and",rules:[{combinator:"and",rules:[]},{combinator:"and",rules:[]}]},controlElements:{addGroupAction:e=>0===e.level?(0,r.kt)(i.C1,(0,o.Z)({},e,{mdxType:"ActionElement"})):null},mdxType:"QueryBuilderEmbed"}),(0,r.kt)("h2",{id:"other-methods"},"Other methods"),(0,r.kt)("p",null,"Another option for preventing the addition of new groups is to return ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," from the ",(0,r.kt)("inlineCode",{parentName:"p"},"onAddGroup")," callback."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'On its own, this configuration may be a little confusing to the user since they would be able to click a "+Group" button but nothing would happen. Probably best to combine this method with other information and behaviors that would help the user understand what\'s going on.')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<QueryBuilder\n  fields={fields}\n  query={query}\n  onQueryChange={q => setQuery(q)}\n  // highlight-start\n  onAddGroup={() => false}\n  // highlight-end\n/>\n")))}c.isMDXComponent=!0}}]);