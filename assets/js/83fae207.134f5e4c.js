"use strict";(self.webpackChunkreact_querybuilder_github_io=self.webpackChunkreact_querybuilder_github_io||[]).push([[854],{8335:function(e,t,n){n.d(t,{e:function(){return i}});var o=n(7294),r=n(6624),i=function(e){return o.createElement("div",{className:"queryBuilderEmbed"},o.createElement(r.ZP,e))}},2612:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),l=n(6624),a=n(8335),u=["components"],s={title:"Limit rule groups",hide_table_of_contents:!0},d=void 0,p={unversionedId:"tips/limit-groups",id:"tips/limit-groups",title:"Limit rule groups",description:"Some query builder implementations are required to maintain a flat, rule-only hierarchy, or perhaps allow group creation only under certain conditions like one level deep. There are several ways to meet these requirements.",source:"@site/docs/tips/limit-groups.mdx",sourceDirName:"tips",slug:"/tips/limit-groups",permalink:"/docs/tips/limit-groups",editUrl:"https://github.com/react-querybuilder/react-querybuilder.github.io/edit/main/docs/tips/limit-groups.mdx",tags:[],version:"current",frontMatter:{title:"Limit rule groups",hide_table_of_contents:!0},sidebar:"mySidebar",previous:{title:"Miscellaneous",permalink:"/docs/api/misc"},next:{title:"Custom components with fallbacks",permalink:"/docs/tips/custom-with-fallback"}},c=[{value:"Prevent creation of new groups",id:"prevent-creation-of-new-groups",children:[],level:2},{value:"Conditionally allow new groups",id:"conditionally-allow-new-groups",children:[],level:2},{value:"Other methods",id:"other-methods",children:[],level:2}],h={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Some query builder implementations are required to maintain a flat, rule-only hierarchy, or perhaps allow group creation only under certain conditions like one level deep. There are several ways to meet these requirements."),(0,i.kt)("h2",{id:"prevent-creation-of-new-groups"},"Prevent creation of new groups"),(0,i.kt)("p",null,'The simplest way to prevent creation of new groups is to unconditionally hide the "+Group" button. Returning ',(0,i.kt)("inlineCode",{parentName:"p"},"null")," from a custom ",(0,i.kt)("inlineCode",{parentName:"p"},"addGroupAction")," function component is one way to accomplish this."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"<QueryBuilder\n  fields={fields}\n  query={query}\n  onQueryChange={(q) => setQuery(q)}\n  controlElements={{\n    // highlight-start\n    addGroupAction: () => null,\n    // highlight-end\n  }}\n/>\n")),(0,i.kt)("p",null,'To hide the "+Group" button with CSS, use the ',(0,i.kt)("inlineCode",{parentName:"p"},"ruleGroup-addGroup")," class which is assigned to the button by default:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".ruleGroup-addGroup {\n  display: none;\n}\n")),(0,i.kt)("p",null,"Either of those methods will generate a query builder like this:"),(0,i.kt)(a.e,{controlElements:{addGroupAction:function(){return null}},mdxType:"QueryBuilderEmbed"}),(0,i.kt)("h2",{id:"conditionally-allow-new-groups"},"Conditionally allow new groups"),(0,i.kt)("p",null,'To show the "+Group" button at the top level, but hide it in sub-groups, spread the ',(0,i.kt)("inlineCode",{parentName:"p"},"props")," object into the standard ",(0,i.kt)("inlineCode",{parentName:"p"},"ActionElement")," component and return that if the ",(0,i.kt)("inlineCode",{parentName:"p"},"level")," prop is zero; otherwise return ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," as before:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"<QueryBuilder\n  fields={fields}\n  query={query}\n  onQueryChange={(q) => setQuery(q)}\n  controlElements={{\n    // highlight-start\n    addGroupAction: (props) =>\n      props.level === 0 ? <ActionElement {...props} /> : null,\n    // highlight-end\n  }}\n/>\n")),(0,i.kt)("p",null,"And the CSS method for the same effect:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".ruleGroup .ruleGroup .ruleGroup-addGroup {\n  display: none;\n}\n")),(0,i.kt)("p",null,"Either of those methods will generate a query builder like this:"),(0,i.kt)(a.e,{query:{combinator:"and",rules:[{combinator:"and",rules:[]},{combinator:"and",rules:[]}]},controlElements:{addGroupAction:function(e){return 0===e.level?(0,i.kt)(l.C1,(0,o.Z)({},e,{mdxType:"ActionElement"})):null}},mdxType:"QueryBuilderEmbed"}),(0,i.kt)("h2",{id:"other-methods"},"Other methods"),(0,i.kt)("p",null,"Another option for preventing the addition of new groups is to return ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," from the ",(0,i.kt)("inlineCode",{parentName:"p"},"onAddGroup")," callback."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'On its own, this configuration may be a little confusing to the user since they would be able to click a "+Group" button but nothing would happen. Probably best to combine this method with other information and behaviors that would help the user understand what\'s going on.'))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"<QueryBuilder\n  fields={fields}\n  query={query}\n  onQueryChange={(q) => setQuery(q)}\n  // highlight-start\n  onAddGroup={() => false}\n  // highlight-end\n/>\n")))}m.isMDXComponent=!0}}]);