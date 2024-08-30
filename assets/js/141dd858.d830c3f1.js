"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[91564],{63773:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>d,metadata:()=>l,toc:()=>c});var t=i(62540),n=i(65404);const d={},s="isRuleOrGroupValid()",l={id:"react-querybuilder/functions/isRuleOrGroupValid",title:"isRuleOrGroupValid()",description:"isRuleOrGroupValid(rg, validationResult?, validator?): boolean",source:"@site/api/react-querybuilder/functions/isRuleOrGroupValid.md",sourceDirName:"react-querybuilder/functions",slug:"/react-querybuilder/functions/isRuleOrGroupValid",permalink:"/api/react-querybuilder/functions/isRuleOrGroupValid",draft:!1,unlisted:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/api/react-querybuilder/functions/isRuleOrGroupValid.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"isRuleGroupTypeIC()",permalink:"/api/react-querybuilder/functions/isRuleGroupTypeIC"},next:{title:"isValidationResult()",permalink:"/api/react-querybuilder/functions/isValidationResult"}},a={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Defined in",id:"defined-in",level:2}];function o(e){const r={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"isruleorgroupvalid",children:"isRuleOrGroupValid()"})}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"isRuleOrGroupValid"}),"(",(0,t.jsx)(r.code,{children:"rg"}),", ",(0,t.jsx)(r.code,{children:"validationResult"}),"?, ",(0,t.jsx)(r.code,{children:"validator"}),"?): ",(0,t.jsx)(r.code,{children:"boolean"})]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["Determines if a rule or group is valid based on a validation result (if defined)\nor a validator function. Returns ",(0,t.jsx)(r.code,{children:"true"})," if neither are defined."]}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameter"}),(0,t.jsx)(r.th,{children:"Type"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"rg"})}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"/api/react-querybuilder/interfaces/RuleType",children:(0,t.jsx)(r.code,{children:"RuleType"})}),"<",(0,t.jsx)(r.code,{children:"string"}),", ",(0,t.jsx)(r.code,{children:"string"}),", ",(0,t.jsx)(r.code,{children:"any"}),", ",(0,t.jsx)(r.code,{children:"string"}),"> | ",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/type-aliases/RuleGroupTypeAny",children:(0,t.jsx)(r.code,{children:"RuleGroupTypeAny"})})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.code,{children:"validationResult"}),"?"]}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.code,{children:"boolean"})," | ",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/interfaces/ValidationResult",children:(0,t.jsx)(r.code,{children:"ValidationResult"})})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.code,{children:"validator"}),"?"]}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/api/react-querybuilder/type-aliases/RuleValidator",children:(0,t.jsx)(r.code,{children:"RuleValidator"})})})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"boolean"})}),"\n",(0,t.jsx)(r.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/blob/064d3297daed853d9842102c6c030d0b7a1f8f1b/packages/react-querybuilder/src/utils/isRuleOrGroupValid.ts#L20",children:"packages/react-querybuilder/src/utils/isRuleOrGroupValid.ts:20"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.admonition,{type:"caution",children:(0,t.jsxs)(r.p,{children:["API documentation is generated from the latest commit on the ",(0,t.jsxs)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/tree/main",children:[(0,t.jsx)(r.code,{children:"main"})," branch"]}),". It may be somewhat inconsistent with official releases of React Query Builder."]})})]})}function u(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},65404:(e,r,i)=>{i.d(r,{R:()=>s,x:()=>l});var t=i(63696);const n={},d=t.createContext(n);function s(e){const r=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),t.createElement(d.Provider,{value:r},e.children)}}}]);