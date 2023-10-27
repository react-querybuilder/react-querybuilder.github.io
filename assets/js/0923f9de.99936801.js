"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3496],{22986:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var t=r(24246),o=r(71670);const s={title:"Rule",description:"Layout and config component for rules"},c=void 0,l={id:"components/rule",title:"Rule",description:"Layout and config component for rules",source:"@site/docs/components/rule.mdx",sourceDirName:"components",slug:"/components/rule",permalink:"/docs/next/components/rule",draft:!1,unlisted:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/docs/components/rule.mdx",tags:[],version:"current",frontMatter:{title:"Rule",description:"Layout and config component for rules"},sidebar:"mySidebar",previous:{title:"RuleGroup",permalink:"/docs/next/components/rulegroup"},next:{title:"ActionElement",permalink:"/docs/next/components/actionelement"}},d={},a=[{value:"Subcomponents",id:"subcomponents",level:2}];function i(e){const n=Object.assign({p:"p",code:"code",a:"a",h2:"h2",ul:"ul",li:"li",sup:"sup",section:"section",ol:"ol",em:"em"},(0,o.a)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Rule"})," component represents query conditions. ",(0,t.jsx)(n.code,{children:"Rule"})," calls the ",(0,t.jsx)(n.a,{href:"../utils/hooks#userule",children:(0,t.jsx)(n.code,{children:"useRule"})})," hook to prepare the subcomponent props."]}),"\n",(0,t.jsx)(n.h2,{id:"subcomponents",children:"Subcomponents"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Rule"})," renders elements in this order:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Shift actions",(0,t.jsx)(n.sup,{children:(0,t.jsx)(n.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})]}),"\n",(0,t.jsxs)(n.li,{children:["Drag handle",(0,t.jsx)(n.sup,{children:(0,t.jsx)(n.a,{href:"#user-content-fn-2",id:"user-content-fnref-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})})]}),"\n",(0,t.jsx)(n.li,{children:"Field selector"}),"\n",(0,t.jsxs)(n.li,{children:["Operator selector",(0,t.jsx)(n.sup,{children:(0,t.jsx)(n.a,{href:"#user-content-fn-3",id:"user-content-fnref-3","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"3"})})]}),"\n",(0,t.jsxs)(n.li,{children:["Value source selector",(0,t.jsx)(n.sup,{children:(0,t.jsx)(n.a,{href:"#user-content-fn-4",id:"user-content-fnref-4","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"4"})})," ",(0,t.jsx)(n.sup,{children:(0,t.jsx)(n.a,{href:"#user-content-fn-5",id:"user-content-fnref-5","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"5"})})]}),"\n",(0,t.jsxs)(n.li,{children:["Value editor",(0,t.jsx)(n.sup,{children:(0,t.jsx)(n.a,{href:"#user-content-fn-5",id:"user-content-fnref-5-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"5"})})]}),"\n",(0,t.jsxs)(n.li,{children:["Clone rule button",(0,t.jsx)(n.sup,{children:(0,t.jsx)(n.a,{href:"#user-content-fn-6",id:"user-content-fnref-6","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"6"})})]}),"\n",(0,t.jsxs)(n.li,{children:["Lock rule button",(0,t.jsx)(n.sup,{children:(0,t.jsx)(n.a,{href:"#user-content-fn-7",id:"user-content-fnref-7","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"7"})})]}),"\n",(0,t.jsx)(n.li,{children:"Remove rule button"}),"\n"]}),"\n",(0,t.jsxs)(n.section,{"data-footnotes":!0,className:"footnotes",children:[(0,t.jsx)(n.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{id:"user-content-fn-1",children:["\n",(0,t.jsxs)(n.p,{children:["Only rendered if ",(0,t.jsx)(n.a,{href:"./querybuilder#showshiftactions",children:(0,t.jsx)(n.code,{children:"showShiftActions"})})," is ",(0,t.jsx)(n.code,{children:"true"}),". ",(0,t.jsx)(n.a,{href:"#user-content-fnref-1","data-footnote-backref":!0,className:"data-footnote-backref","aria-label":"Back to content",children:"\u21a9"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{id:"user-content-fn-2",children:["\n",(0,t.jsxs)(n.p,{children:["Only rendered if ",(0,t.jsx)(n.a,{href:"./querybuilder#enabledraganddrop",children:(0,t.jsx)(n.code,{children:"enableDragAndDrop"})})," is ",(0,t.jsx)(n.code,{children:"true"}),". ",(0,t.jsx)(n.a,{href:"#user-content-fnref-2","data-footnote-backref":!0,className:"data-footnote-backref","aria-label":"Back to content",children:"\u21a9"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{id:"user-content-fn-3",children:["\n",(0,t.jsxs)(n.p,{children:["Only rendered if ",(0,t.jsx)(n.a,{href:"./querybuilder#autoselectfield",children:(0,t.jsx)(n.code,{children:"autoSelectField"})})," is ",(0,t.jsx)(n.code,{children:"true"})," or the rule's ",(0,t.jsx)(n.code,{children:"field"})," doesn't match ",(0,t.jsx)(n.code,{children:"translations.fields.placeholderName"}),". ",(0,t.jsx)(n.a,{href:"#user-content-fnref-3","data-footnote-backref":!0,className:"data-footnote-backref","aria-label":"Back to content",children:"\u21a9"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{id:"user-content-fn-4",children:["\n",(0,t.jsxs)(n.p,{children:["Only rendered if the rule's ",(0,t.jsx)(n.code,{children:"operator"})," is neither ",(0,t.jsx)(n.code,{children:'"null"'})," nor ",(0,t.jsx)(n.code,{children:'"notNull"'})," and the derived ",(0,t.jsx)(n.code,{children:"valueSources"})," array has more than one element. ",(0,t.jsx)(n.a,{href:"#user-content-fnref-4","data-footnote-backref":!0,className:"data-footnote-backref","aria-label":"Back to content",children:"\u21a9"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{id:"user-content-fn-5",children:["\n",(0,t.jsxs)(n.p,{children:["Only rendered when (1) the ",(0,t.jsx)(n.code,{children:"arity"})," property of the rule's ",(0,t.jsx)(n.code,{children:"operator"})," is not ",(0,t.jsx)(n.code,{children:'"unary"'})," or ",(0,t.jsx)(n.code,{children:"< 2"}),", and (2) ",(0,t.jsx)(n.a,{href:"./querybuilder#autoselectoperator",children:(0,t.jsx)(n.code,{children:"autoSelectOperator"})})," is ",(0,t.jsx)(n.code,{children:"true"})," ",(0,t.jsx)(n.em,{children:"or"})," the rule's ",(0,t.jsx)(n.code,{children:"operator"})," doesn't match ",(0,t.jsx)(n.code,{children:"translations.operators.placeholderName"}),". ",(0,t.jsx)(n.a,{href:"#user-content-fnref-5","data-footnote-backref":!0,className:"data-footnote-backref","aria-label":"Back to content",children:"\u21a9"})," ",(0,t.jsxs)(n.a,{href:"#user-content-fnref-5-2","data-footnote-backref":!0,className:"data-footnote-backref","aria-label":"Back to content",children:["\u21a9",(0,t.jsx)(n.sup,{children:"2"})]})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{id:"user-content-fn-6",children:["\n",(0,t.jsxs)(n.p,{children:["Only rendered if ",(0,t.jsx)(n.a,{href:"./querybuilder#showclonebuttons",children:(0,t.jsx)(n.code,{children:"showCloneButtons"})})," is ",(0,t.jsx)(n.code,{children:"true"}),". ",(0,t.jsx)(n.a,{href:"#user-content-fnref-6","data-footnote-backref":!0,className:"data-footnote-backref","aria-label":"Back to content",children:"\u21a9"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{id:"user-content-fn-7",children:["\n",(0,t.jsxs)(n.p,{children:["Only rendered if ",(0,t.jsx)(n.a,{href:"./querybuilder#showlockbuttons",children:(0,t.jsx)(n.code,{children:"showLockButtons"})})," is ",(0,t.jsx)(n.code,{children:"true"}),". ",(0,t.jsx)(n.a,{href:"#user-content-fnref-7","data-footnote-backref":!0,className:"data-footnote-backref","aria-label":"Back to content",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}const f=function(e={}){const{wrapper:n}=Object.assign({},(0,o.a)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)}},71670:(e,n,r)=>{r.d(n,{a:()=>c});var t=r(27378);const o={},s=t.createContext(o);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}}}]);