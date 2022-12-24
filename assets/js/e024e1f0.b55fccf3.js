(self.webpackChunk=self.webpackChunk||[]).push([[7301],{38112:(e,t,n)=>{"use strict";n.d(t,{U:()=>m});var r=n(86010),o=n(67294);const i="browserWindow_my1Q",l="browserWindowHeader_jXSR",a="buttons_uHc7",s="browserWindowAddressBar_Pd8y",u="dot_giz1",d="browserWindowMenuIcon_Vhuh",p="bar_rrRL",c="browserWindowBody_Idgs",m=e=>{let{children:t,minHeight:n,url:m="https://example.com"}=e;return o.createElement("div",{className:i,style:{minHeight:n}},o.createElement("div",{className:l},o.createElement("div",{className:a},o.createElement("span",{className:u,style:{background:"#f25f58"}}),o.createElement("span",{className:u,style:{background:"#fbbe3c"}}),o.createElement("span",{className:u,style:{background:"#58cb42"}})),o.createElement("div",{className:(0,r.Z)(s,"text--truncate")},m),o.createElement("div",{className:d},o.createElement("div",null,o.createElement("span",{className:p}),o.createElement("span",{className:p}),o.createElement("span",{className:p})))),o.createElement("div",{className:c},t))}},26482:(e,t,n)=>{"use strict";n.d(t,{e:()=>l});var r=n(67294),o=n(61236),i=n(3612);const l=e=>{let{version:t,...n}=e;const l=4===t?i.zk:o.zk;return r.createElement("div",{key:"v"+(null!=t?t:5),className:"queryBuilderEmbed"},r.createElement(l,n))}},33630:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var r=n(83117),o=(n(67294),n(3905)),i=n(38112),l=n(26482),a=n(61236);const s={title:"Limit rule groups",description:"Methods to prevent new groups",hide_table_of_contents:!0},u=void 0,d={unversionedId:"tips/limit-groups",id:"version-4/tips/limit-groups",title:"Limit rule groups",description:"Methods to prevent new groups",source:"@site/versioned_docs/version-4/tips/limit-groups.mdx",sourceDirName:"tips",slug:"/tips/limit-groups",permalink:"/docs/4/tips/limit-groups",draft:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/versioned_docs/version-4/tips/limit-groups.mdx",tags:[],version:"4",frontMatter:{title:"Limit rule groups",description:"Methods to prevent new groups",hide_table_of_contents:!0},sidebar:"mySidebar",previous:{title:"Managing operators",permalink:"/docs/4/tips/managing-operators"},next:{title:"Custom components with fallbacks",permalink:"/docs/4/tips/custom-with-fallback"}},p={},c=[{value:"Prevent creation of new groups",id:"prevent-creation-of-new-groups",level:2},{value:"Conditionally allow new groups",id:"conditionally-allow-new-groups",level:2},{value:"Other methods",id:"other-methods",level:2}],m={toc:c};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Some query builder implementations are required to maintain a flat, rule-only hierarchy, or perhaps allow group creation only under certain conditions like one level deep. There are several ways to meet these requirements."),(0,o.kt)("h2",{id:"prevent-creation-of-new-groups"},"Prevent creation of new groups"),(0,o.kt)("p",null,'The simplest way to prevent creation of new groups is to unconditionally hide the "+Group" button. Returning ',(0,o.kt)("inlineCode",{parentName:"p"},"null")," from a custom ",(0,o.kt)("inlineCode",{parentName:"p"},"addGroupAction")," function component is one way to accomplish this."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"<QueryBuilder\n  fields={fields}\n  query={query}\n  onQueryChange={q => setQuery(q)}\n  controlElements={{\n    // highlight-start\n    addGroupAction: () => null,\n    // highlight-end\n  }}\n/>\n")),(0,o.kt)("p",null,'To hide the "+Group" button with CSS, use the ',(0,o.kt)("inlineCode",{parentName:"p"},"ruleGroup-addGroup")," class which is assigned to the button by default:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},".ruleGroup-addGroup {\n  display: none;\n}\n")),(0,o.kt)("p",null,"Either of those methods will generate a query builder like this:"),(0,o.kt)(i.U,{mdxType:"BrowserWindow"},(0,o.kt)(l.e,{version:4,controlElements:{addGroupAction:()=>null},mdxType:"QueryBuilderEmbed"})),(0,o.kt)("h2",{id:"conditionally-allow-new-groups"},"Conditionally allow new groups"),(0,o.kt)("p",null,'To show the "+Group" button at the top level, but hide it in sub-groups, spread the ',(0,o.kt)("inlineCode",{parentName:"p"},"props")," object into the standard ",(0,o.kt)("inlineCode",{parentName:"p"},"ActionElement")," component and return that if the ",(0,o.kt)("inlineCode",{parentName:"p"},"level")," prop is zero; otherwise return ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," as before:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"<QueryBuilder\n  fields={fields}\n  query={query}\n  onQueryChange={q => setQuery(q)}\n  controlElements={{\n    // highlight-start\n    addGroupAction: props => (props.level === 0 ? <ActionElement {...props} /> : null),\n    // highlight-end\n  }}\n/>\n")),(0,o.kt)("p",null,"And the CSS method for the same effect:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},".ruleGroup .ruleGroup .ruleGroup-addGroup {\n  display: none;\n}\n")),(0,o.kt)("p",null,"Either of those methods will generate a query builder like this:"),(0,o.kt)(i.U,{mdxType:"BrowserWindow"},(0,o.kt)(l.e,{version:4,defaultQuery:{combinator:"and",rules:[{combinator:"and",rules:[]},{combinator:"and",rules:[]}]},controlElements:{addGroupAction:e=>0===e.level?(0,o.kt)(a.C1,(0,r.Z)({},e,{mdxType:"ActionElement"})):null},mdxType:"QueryBuilderEmbed"})),(0,o.kt)("h2",{id:"other-methods"},"Other methods"),(0,o.kt)("p",null,"Another option for preventing the addition of new groups is to return ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," from the ",(0,o.kt)("inlineCode",{parentName:"p"},"onAddGroup")," callback."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},'On its own, this configuration may be a little confusing to the user since they would be able to click a "+Group" button but nothing would happen. Probably best to combine this method with other information and behaviors that would help the user understand what\'s going on.')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"<QueryBuilder\n  fields={fields}\n  query={query}\n  onQueryChange={q => setQuery(q)}\n  // highlight-start\n  onAddGroup={() => false}\n  // highlight-end\n/>\n")))}h.isMDXComponent=!0},46601:()=>{},89214:()=>{},71922:()=>{},2363:()=>{},52361:()=>{},94616:()=>{}}]);