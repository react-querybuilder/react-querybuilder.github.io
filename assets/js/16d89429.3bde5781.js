"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6974],{25001:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var o=r(62540),t=r(65404);const s={title:"RuleGroup",description:"Recursive layout and config component for groups"},i=void 0,c={id:"components/rulegroup",title:"RuleGroup",description:"Recursive layout and config component for groups",source:"@site/versioned_docs/version-7/components/rulegroup.md",sourceDirName:"components",slug:"/components/rulegroup",permalink:"/docs/components/rulegroup",draft:!1,unlisted:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/versioned_docs/version-7/components/rulegroup.md",tags:[],version:"7",frontMatter:{title:"RuleGroup",description:"Recursive layout and config component for groups"},sidebar:"mySidebar",previous:{title:"ShiftActions",permalink:"/docs/components/shiftactions"},next:{title:"Rule",permalink:"/docs/components/rule"}},d={},l=[{value:"Subcomponents",id:"subcomponents",level:2},{value:"<code>RuleGroupHeaderComponents</code>",id:"rulegroupheadercomponents",level:3},{value:"<code>RuleGroupBodyComponents</code>",id:"rulegroupbodycomponents",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",section:"section",sup:"sup",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"RuleGroup"})," component allows React Query Builder to visually represent its recursive, hierarchical query structure. ",(0,o.jsx)(n.code,{children:"RuleGroup"})," calls the ",(0,o.jsx)(n.a,{href:"../utils/hooks#userulegroup",children:(0,o.jsx)(n.code,{children:"useRuleGroup"})})," hook to prepare the subcomponent props."]}),"\n",(0,o.jsx)(n.h2,{id:"subcomponents",children:"Subcomponents"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"RuleGroup"})," renders an outer ",(0,o.jsx)(n.code,{children:"<div>"})," and two inner ",(0,o.jsx)(n.code,{children:"<div>"}),"s, the first containing ",(0,o.jsx)(n.a,{href:"#rulegroupheadercomponents",children:"header elements"})," (derived from the group properties) and the second containing ",(0,o.jsx)(n.a,{href:"#rulegroupbodycomponents",children:"body elements"})," (derived primarily from a map of the group's ",(0,o.jsx)(n.code,{children:"rules"})," array)."]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["The header and body layout components themselves don't rely on HTML elements like ",(0,o.jsx)(n.code,{children:"<div>"}),". This allows ",(0,o.jsx)(n.code,{children:"@react-querybuilder/native"}),", for example, to render the same layout components within React Native ",(0,o.jsx)(n.code,{children:"<View>"})," elements. Feel free to use them in the same way."]})}),"\n",(0,o.jsx)(n.h3,{id:"rulegroupheadercomponents",children:(0,o.jsx)(n.code,{children:"RuleGroupHeaderComponents"})}),"\n",(0,o.jsx)(n.p,{children:"This component renders the following elements in this order:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Shift actions",(0,o.jsx)(n.sup,{children:(0,o.jsx)(n.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})]}),"\n",(0,o.jsxs)(n.li,{children:["Drag handle",(0,o.jsx)(n.sup,{children:(0,o.jsx)(n.a,{href:"#user-content-fn-2",id:"user-content-fnref-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})})]}),"\n",(0,o.jsxs)(n.li,{children:["Combinator selector",(0,o.jsx)(n.sup,{children:(0,o.jsx)(n.a,{href:"#user-content-fn-3",id:"user-content-fnref-3","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"3"})})]}),"\n",(0,o.jsxs)(n.li,{children:['"Not" toggle',(0,o.jsx)(n.sup,{children:(0,o.jsx)(n.a,{href:"#user-content-fn-4",id:"user-content-fnref-4","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"4"})})]}),"\n",(0,o.jsx)(n.li,{children:"Add rule button"}),"\n",(0,o.jsx)(n.li,{children:"Add group button"}),"\n",(0,o.jsxs)(n.li,{children:["Clone group button",(0,o.jsx)(n.sup,{children:(0,o.jsx)(n.a,{href:"#user-content-fn-5",id:"user-content-fnref-5","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"5"})})]}),"\n",(0,o.jsxs)(n.li,{children:["Lock group button",(0,o.jsx)(n.sup,{children:(0,o.jsx)(n.a,{href:"#user-content-fn-6",id:"user-content-fnref-6","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"6"})})]}),"\n",(0,o.jsxs)(n.li,{children:["Remove group button",(0,o.jsx)(n.sup,{children:(0,o.jsx)(n.a,{href:"#user-content-fn-7",id:"user-content-fnref-7","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"7"})})]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"rulegroupbodycomponents",children:(0,o.jsx)(n.code,{children:"RuleGroupBodyComponents"})}),"\n",(0,o.jsxs)(n.p,{children:["This component loops through a group's ",(0,o.jsx)(n.code,{children:"rules"})," array and renders a child ",(0,o.jsx)(n.code,{children:"RuleGroup"})," element for each group and a ",(0,o.jsx)(n.a,{href:"./rule",children:(0,o.jsx)(n.code,{children:"Rule"})})," element for each rule."]}),"\n",(0,o.jsxs)(n.p,{children:["If ",(0,o.jsx)(n.a,{href:"./querybuilder#showcombinatorsbetweenrules",children:(0,o.jsx)(n.code,{children:"showCombinatorsBetweenRules"})})," is ",(0,o.jsx)(n.code,{children:"true"}),", an inline combinator",(0,o.jsx)(n.sup,{children:(0,o.jsx)(n.a,{href:"#user-content-fn-8",id:"user-content-fnref-8","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"8"})})," (whose ",(0,o.jsx)(n.code,{children:"value"})," is the group's ",(0,o.jsx)(n.code,{children:"combinator"}),") is rendered ahead of each rule or group except the first."]}),"\n",(0,o.jsxs)(n.p,{children:["When the query is using ",(0,o.jsx)(n.a,{href:"./querybuilder#independent-combinators",children:"independent combinators"}),", each odd-numbered index in the ",(0,o.jsx)(n.code,{children:"rules"})," array is a ",(0,o.jsx)(n.code,{children:"string"})," representing a combinator value. For those elements, an independent, inline combinator is rendered."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"showCombinatorsBetweenRules"})," prop is ignored if the query is using independent combinators."]})}),"\n",(0,o.jsxs)(n.section,{"data-footnotes":!0,className:"footnotes",children:[(0,o.jsx)(n.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{id:"user-content-fn-1",children:["\n",(0,o.jsxs)(n.p,{children:["Only rendered if ",(0,o.jsx)(n.a,{href:"./querybuilder#showshiftactions",children:(0,o.jsx)(n.code,{children:"showShiftActions"})})," is ",(0,o.jsx)(n.code,{children:"true"}),". ",(0,o.jsx)(n.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{id:"user-content-fn-2",children:["\n",(0,o.jsxs)(n.p,{children:["Only rendered if ",(0,o.jsx)(n.a,{href:"./querybuilder#enabledraganddrop",children:(0,o.jsx)(n.code,{children:"enableDragAndDrop"})})," is ",(0,o.jsx)(n.code,{children:"true"}),". ",(0,o.jsx)(n.a,{href:"#user-content-fnref-2","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{id:"user-content-fn-3",children:["\n",(0,o.jsxs)(n.p,{children:["Only rendered if ",(0,o.jsx)(n.a,{href:"./querybuilder#showcombinatorsbetweenrules",children:(0,o.jsx)(n.code,{children:"showCombinatorsBetweenRules"})})," is disabled and the query is not using ",(0,o.jsx)(n.a,{href:"./querybuilder#independent-combinators",children:"independent combinators"}),". ",(0,o.jsx)(n.a,{href:"#user-content-fnref-3","data-footnote-backref":"","aria-label":"Back to reference 3",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{id:"user-content-fn-4",children:["\n",(0,o.jsxs)(n.p,{children:["Only rendered if ",(0,o.jsx)(n.a,{href:"./querybuilder#shownottoggle",children:(0,o.jsx)(n.code,{children:"showNotToggle"})})," is ",(0,o.jsx)(n.code,{children:"true"}),". ",(0,o.jsx)(n.a,{href:"#user-content-fnref-4","data-footnote-backref":"","aria-label":"Back to reference 4",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{id:"user-content-fn-5",children:["\n",(0,o.jsxs)(n.p,{children:["Only rendered if ",(0,o.jsx)(n.a,{href:"./querybuilder#showclonebuttons",children:(0,o.jsx)(n.code,{children:"showCloneButtons"})})," is ",(0,o.jsx)(n.code,{children:"true"}),". ",(0,o.jsx)(n.a,{href:"#user-content-fnref-5","data-footnote-backref":"","aria-label":"Back to reference 5",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{id:"user-content-fn-6",children:["\n",(0,o.jsxs)(n.p,{children:["Only rendered if ",(0,o.jsx)(n.a,{href:"./querybuilder#showlockbuttons",children:(0,o.jsx)(n.code,{children:"showLockButtons"})})," is ",(0,o.jsx)(n.code,{children:"true"}),". ",(0,o.jsx)(n.a,{href:"#user-content-fnref-6","data-footnote-backref":"","aria-label":"Back to reference 6",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{id:"user-content-fn-7",children:["\n",(0,o.jsxs)(n.p,{children:["Only rendered if the group is not the query root. ",(0,o.jsx)(n.a,{href:"#user-content-fnref-7","data-footnote-backref":"","aria-label":"Back to reference 7",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{id:"user-content-fn-8",children:["\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"./querybuilder#inlinecombinator",children:(0,o.jsx)(n.code,{children:"inlineCombinator"})})," component in turn renders the configured ",(0,o.jsx)(n.a,{href:"./querybuilder#combinatorselector",children:(0,o.jsx)(n.code,{children:"combinatorSelector"})}),". ",(0,o.jsx)(n.a,{href:"#user-content-fnref-8","data-footnote-backref":"","aria-label":"Back to reference 8",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},65404:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>c});var o=r(63696);const t={},s=o.createContext(t);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);