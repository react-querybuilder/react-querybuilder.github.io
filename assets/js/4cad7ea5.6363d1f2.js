"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9413],{80797:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var o=r(62540),t=r(65404);const s={title:"Rule",description:"Layout and config component for rules"},c=void 0,l={id:"components/rule",title:"Rule",description:"Layout and config component for rules",source:"@site/versioned_docs/version-6/components/rule.mdx",sourceDirName:"components",slug:"/components/rule",permalink:"/docs/6/components/rule",draft:!1,unlisted:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/versioned_docs/version-6/components/rule.mdx",tags:[],version:"6",frontMatter:{title:"Rule",description:"Layout and config component for rules"},sidebar:"mySidebar",previous:{title:"RuleGroup",permalink:"/docs/6/components/rulegroup"},next:{title:"ActionElement",permalink:"/docs/6/components/actionelement"}},d={},a=[{value:"Subcomponents",id:"subcomponents",level:2}];function i(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",section:"section",sup:"sup",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"Rule"})," component represents query conditions. ",(0,o.jsx)(n.code,{children:"Rule"})," calls the ",(0,o.jsx)(n.a,{href:"../utils/hooks#userule",children:(0,o.jsx)(n.code,{children:"useRule"})})," hook to prepare the subcomponent props."]}),"\n",(0,o.jsx)(n.h2,{id:"subcomponents",children:"Subcomponents"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Rule"})," renders elements in this order:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Drag handle",(0,o.jsx)(n.sup,{children:(0,o.jsx)(n.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})]}),"\n",(0,o.jsx)(n.li,{children:"Field selector"}),"\n",(0,o.jsxs)(n.li,{children:["Operator selector",(0,o.jsx)(n.sup,{children:(0,o.jsx)(n.a,{href:"#user-content-fn-2",id:"user-content-fnref-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})})]}),"\n",(0,o.jsxs)(n.li,{children:["Value source selector",(0,o.jsx)(n.sup,{children:(0,o.jsx)(n.a,{href:"#user-content-fn-3",id:"user-content-fnref-3","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"3"})})," ",(0,o.jsx)(n.sup,{children:(0,o.jsx)(n.a,{href:"#user-content-fn-4",id:"user-content-fnref-4","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"4"})})]}),"\n",(0,o.jsxs)(n.li,{children:["Value editor",(0,o.jsx)(n.sup,{children:(0,o.jsx)(n.a,{href:"#user-content-fn-4",id:"user-content-fnref-4-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"4"})})]}),"\n",(0,o.jsxs)(n.li,{children:["Clone rule button",(0,o.jsx)(n.sup,{children:(0,o.jsx)(n.a,{href:"#user-content-fn-5",id:"user-content-fnref-5","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"5"})})]}),"\n",(0,o.jsxs)(n.li,{children:["Lock rule button",(0,o.jsx)(n.sup,{children:(0,o.jsx)(n.a,{href:"#user-content-fn-6",id:"user-content-fnref-6","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"6"})})]}),"\n",(0,o.jsx)(n.li,{children:"Remove rule button"}),"\n"]}),"\n","\n",(0,o.jsxs)(n.section,{"data-footnotes":!0,className:"footnotes",children:[(0,o.jsx)(n.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{id:"user-content-fn-1",children:["\n",(0,o.jsxs)(n.p,{children:["Only rendered if ",(0,o.jsx)(n.a,{href:"./querybuilder#enabledraganddrop",children:(0,o.jsx)(n.code,{children:"enableDragAndDrop"})})," is ",(0,o.jsx)(n.code,{children:"true"}),". ",(0,o.jsx)(n.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{id:"user-content-fn-2",children:["\n",(0,o.jsxs)(n.p,{children:["Only rendered if ",(0,o.jsx)(n.a,{href:"./querybuilder#autoselectfield",children:(0,o.jsx)(n.code,{children:"autoSelectField"})})," is ",(0,o.jsx)(n.code,{children:"true"})," or the rule's ",(0,o.jsx)(n.code,{children:"field"})," doesn't match ",(0,o.jsx)(n.code,{children:"translations.fields.placeholderName"}),". ",(0,o.jsx)(n.a,{href:"#user-content-fnref-2","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{id:"user-content-fn-3",children:["\n",(0,o.jsxs)(n.p,{children:["Only rendered if the rule's ",(0,o.jsx)(n.code,{children:"operator"})," is neither ",(0,o.jsx)(n.code,{children:'"null"'})," nor ",(0,o.jsx)(n.code,{children:'"notNull"'})," and the derived ",(0,o.jsx)(n.code,{children:"valueSources"})," array has more than one element. ",(0,o.jsx)(n.a,{href:"#user-content-fnref-3","data-footnote-backref":"","aria-label":"Back to reference 3",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{id:"user-content-fn-4",children:["\n",(0,o.jsxs)(n.p,{children:["Only rendered when (1) the ",(0,o.jsx)(n.code,{children:"arity"})," property of the rule's ",(0,o.jsx)(n.code,{children:"operator"})," is not ",(0,o.jsx)(n.code,{children:'"unary"'})," or ",(0,o.jsx)(n.code,{children:"< 2"}),", and (2) ",(0,o.jsx)(n.a,{href:"./querybuilder#autoselectoperator",children:(0,o.jsx)(n.code,{children:"autoSelectOperator"})})," is ",(0,o.jsx)(n.code,{children:"true"})," ",(0,o.jsx)(n.em,{children:"or"})," the rule's ",(0,o.jsx)(n.code,{children:"operator"})," doesn't match ",(0,o.jsx)(n.code,{children:"translations.operators.placeholderName"}),". ",(0,o.jsx)(n.a,{href:"#user-content-fnref-4","data-footnote-backref":"","aria-label":"Back to reference 4",className:"data-footnote-backref",children:"\u21a9"})," ",(0,o.jsxs)(n.a,{href:"#user-content-fnref-4-2","data-footnote-backref":"","aria-label":"Back to reference 4-2",className:"data-footnote-backref",children:["\u21a9",(0,o.jsx)(n.sup,{children:"2"})]})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{id:"user-content-fn-5",children:["\n",(0,o.jsxs)(n.p,{children:["Only rendered if ",(0,o.jsx)(n.a,{href:"./querybuilder#showclonebuttons",children:(0,o.jsx)(n.code,{children:"showCloneButtons"})})," is ",(0,o.jsx)(n.code,{children:"true"}),". ",(0,o.jsx)(n.a,{href:"#user-content-fnref-5","data-footnote-backref":"","aria-label":"Back to reference 5",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{id:"user-content-fn-6",children:["\n",(0,o.jsxs)(n.p,{children:["Only rendered if ",(0,o.jsx)(n.a,{href:"./querybuilder#showlockbuttons",children:(0,o.jsx)(n.code,{children:"showLockButtons"})})," is ",(0,o.jsx)(n.code,{children:"true"}),". ",(0,o.jsx)(n.a,{href:"#user-content-fnref-6","data-footnote-backref":"","aria-label":"Back to reference 6",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function f(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}},65404:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>l});var o=r(63696);const t={},s=o.createContext(t);function c(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);