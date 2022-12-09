"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7301],{38112:(e,t,n)=>{n.d(t,{U:()=>m});var o=n(86010),r=n(67294);const l="browserWindow_my1Q",i="browserWindowHeader_jXSR",a="buttons_uHc7",s="browserWindowAddressBar_Pd8y",u="dot_giz1",d="browserWindowMenuIcon_Vhuh",p="bar_rrRL",c="browserWindowBody_Idgs",m=e=>{let{children:t,minHeight:n,url:m="https://example.com"}=e;return r.createElement("div",{className:l,style:{minHeight:n}},r.createElement("div",{className:i},r.createElement("div",{className:a},r.createElement("span",{className:u,style:{background:"#f25f58"}}),r.createElement("span",{className:u,style:{background:"#fbbe3c"}}),r.createElement("span",{className:u,style:{background:"#58cb42"}})),r.createElement("div",{className:(0,o.Z)(s,"text--truncate")},m),r.createElement("div",{className:d},r.createElement("div",null,r.createElement("span",{className:p}),r.createElement("span",{className:p}),r.createElement("span",{className:p})))),r.createElement("div",{className:c},t))}},26482:(e,t,n)=>{n.d(t,{e:()=>i});var o=n(67294),r=n(61236),l=n(3612);const i=e=>{let{version:t,...n}=e;const i=4===t?l.zk:r.zk;return o.createElement("div",{key:"v"+(null!=t?t:5),className:"queryBuilderEmbed"},o.createElement(i,n))}},33630:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var o=n(83117),r=(n(67294),n(3905)),l=n(38112),i=n(26482),a=n(61236);const s={title:"Limit rule groups",description:"Methods to prevent new groups",hide_table_of_contents:!0},u=void 0,d={unversionedId:"tips/limit-groups",id:"version-4/tips/limit-groups",title:"Limit rule groups",description:"Methods to prevent new groups",source:"@site/versioned_docs/version-4/tips/limit-groups.mdx",sourceDirName:"tips",slug:"/tips/limit-groups",permalink:"/docs/4/tips/limit-groups",draft:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/versioned_docs/version-4/tips/limit-groups.mdx",tags:[],version:"4",frontMatter:{title:"Limit rule groups",description:"Methods to prevent new groups",hide_table_of_contents:!0},sidebar:"mySidebar",previous:{title:"Managing operators",permalink:"/docs/4/tips/managing-operators"},next:{title:"Custom components with fallbacks",permalink:"/docs/4/tips/custom-with-fallback"}},p={},c=[{value:"Prevent creation of new groups",id:"prevent-creation-of-new-groups",level:2},{value:"Conditionally allow new groups",id:"conditionally-allow-new-groups",level:2},{value:"Other methods",id:"other-methods",level:2}],m={toc:c};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Some query builder implementations are required to maintain a flat, rule-only hierarchy, or perhaps allow group creation only under certain conditions like one level deep. There are several ways to meet these requirements."),(0,r.kt)("h2",{id:"prevent-creation-of-new-groups"},"Prevent creation of new groups"),(0,r.kt)("p",null,'The simplest way to prevent creation of new groups is to unconditionally hide the "+Group" button. Returning ',(0,r.kt)("inlineCode",{parentName:"p"},"null")," from a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"addGroupAction")," function component is one way to accomplish this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<QueryBuilder\n  fields={fields}\n  query={query}\n  onQueryChange={q => setQuery(q)}\n  controlElements={{\n    // highlight-start\n    addGroupAction: () => null,\n    // highlight-end\n  }}\n/>\n")),(0,r.kt)("p",null,'To hide the "+Group" button with CSS, use the ',(0,r.kt)("inlineCode",{parentName:"p"},"ruleGroup-addGroup")," class which is assigned to the button by default:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".ruleGroup-addGroup {\n  display: none;\n}\n")),(0,r.kt)("p",null,"Either of those methods will generate a query builder like this:"),(0,r.kt)(l.U,{mdxType:"BrowserWindow"},(0,r.kt)(i.e,{version:4,controlElements:{addGroupAction:()=>null},mdxType:"QueryBuilderEmbed"})),(0,r.kt)("h2",{id:"conditionally-allow-new-groups"},"Conditionally allow new groups"),(0,r.kt)("p",null,'To show the "+Group" button at the top level, but hide it in sub-groups, spread the ',(0,r.kt)("inlineCode",{parentName:"p"},"props")," object into the standard ",(0,r.kt)("inlineCode",{parentName:"p"},"ActionElement")," component and return that if the ",(0,r.kt)("inlineCode",{parentName:"p"},"level")," prop is zero; otherwise return ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," as before:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<QueryBuilder\n  fields={fields}\n  query={query}\n  onQueryChange={q => setQuery(q)}\n  controlElements={{\n    // highlight-start\n    addGroupAction: props => (props.level === 0 ? <ActionElement {...props} /> : null),\n    // highlight-end\n  }}\n/>\n")),(0,r.kt)("p",null,"And the CSS method for the same effect:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".ruleGroup .ruleGroup .ruleGroup-addGroup {\n  display: none;\n}\n")),(0,r.kt)("p",null,"Either of those methods will generate a query builder like this:"),(0,r.kt)(l.U,{mdxType:"BrowserWindow"},(0,r.kt)(i.e,{version:4,defaultQuery:{combinator:"and",rules:[{combinator:"and",rules:[]},{combinator:"and",rules:[]}]},controlElements:{addGroupAction:e=>0===e.level?(0,r.kt)(a.C1,(0,o.Z)({},e,{mdxType:"ActionElement"})):null},mdxType:"QueryBuilderEmbed"})),(0,r.kt)("h2",{id:"other-methods"},"Other methods"),(0,r.kt)("p",null,"Another option for preventing the addition of new groups is to return ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," from the ",(0,r.kt)("inlineCode",{parentName:"p"},"onAddGroup")," callback."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'On its own, this configuration may be a little confusing to the user since they would be able to click a "+Group" button but nothing would happen. Probably best to combine this method with other information and behaviors that would help the user understand what\'s going on.')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<QueryBuilder\n  fields={fields}\n  query={query}\n  onQueryChange={q => setQuery(q)}\n  // highlight-start\n  onAddGroup={() => false}\n  // highlight-end\n/>\n")))}h.isMDXComponent=!0}}]);