"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[43415],{18299:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>o});var t=i(62540),l=i(65404);const n={},d="filterFieldsByComparator()",s={id:"react-querybuilder/functions/filterFieldsByComparator",title:"filterFieldsByComparator()",description:"filterFieldsByComparator(field, fields, operator): FullField\\, Option\\\\>[] \\| object[]",source:"@site/api/react-querybuilder/functions/filterFieldsByComparator.md",sourceDirName:"react-querybuilder/functions",slug:"/react-querybuilder/functions/filterFieldsByComparator",permalink:"/api/react-querybuilder/functions/filterFieldsByComparator",draft:!1,unlisted:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/api/react-querybuilder/functions/filterFieldsByComparator.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"~~defaultValueProcessorSpELByRule()~~",permalink:"/api/react-querybuilder/functions/defaultValueProcessorSpELByRule"},next:{title:"findPath()",permalink:"/api/react-querybuilder/functions/findPath"}},c={},o=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Source",id:"source",level:2}];function a(e){const r={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"filterfieldsbycomparator",children:"filterFieldsByComparator()"}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"filterFieldsByComparator"}),"(",(0,t.jsx)(r.code,{children:"field"}),", ",(0,t.jsx)(r.code,{children:"fields"}),", ",(0,t.jsx)(r.code,{children:"operator"}),"): ",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/interfaces/FullField",children:(0,t.jsx)(r.code,{children:"FullField"})}),"<",(0,t.jsx)(r.code,{children:"string"}),", ",(0,t.jsx)(r.code,{children:"string"}),", ",(0,t.jsx)(r.code,{children:"string"}),", ",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/interfaces/Option",children:(0,t.jsx)(r.code,{children:"Option"})}),"<",(0,t.jsx)(r.code,{children:"string"}),">, ",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/interfaces/Option",children:(0,t.jsx)(r.code,{children:"Option"})}),"<",(0,t.jsx)(r.code,{children:"string"}),">>[] | ",(0,t.jsx)(r.code,{children:"object"}),"[]"]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["For a given ",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/interfaces/FullField",children:"FullField"}),", returns the ",(0,t.jsx)(r.code,{children:"fields"})," list filtered for\nother fields that match by ",(0,t.jsx)(r.code,{children:"comparator"}),". Only fields ",(0,t.jsx)(r.em,{children:"other than the\none in question"})," will ever be included, even if ",(0,t.jsx)(r.code,{children:"comparator"})," is ",(0,t.jsx)(r.code,{children:"null"}),"\nor ",(0,t.jsx)(r.code,{children:"undefined"}),". If ",(0,t.jsx)(r.code,{children:"comparator"})," is a string, fields with the same value\nfor that property will be included. If ",(0,t.jsx)(r.code,{children:"comparator"})," is a function, each\nfield will be passed to the function along with the ",(0,t.jsx)(r.code,{children:"operator"})," and fields\nfor which the function returns ",(0,t.jsx)(r.code,{children:"true"})," will be included."]}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Parameter"}),(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Type"}),(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"field"})}),(0,t.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,t.jsx)(r.a,{href:"/api/react-querybuilder/interfaces/FullField",children:(0,t.jsx)(r.code,{children:"FullField"})}),"<",(0,t.jsx)(r.code,{children:"string"}),", ",(0,t.jsx)(r.code,{children:"string"}),", ",(0,t.jsx)(r.code,{children:"string"}),", ",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/interfaces/Option",children:(0,t.jsx)(r.code,{children:"Option"})}),"<",(0,t.jsx)(r.code,{children:"string"}),">, ",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/interfaces/Option",children:(0,t.jsx)(r.code,{children:"Option"})}),"<",(0,t.jsx)(r.code,{children:"string"}),">>"]}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"The field in question."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"fields"})}),(0,t.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,t.jsx)(r.a,{href:"/api/react-querybuilder/type-aliases/OptionList",children:(0,t.jsx)(r.code,{children:"OptionList"})})," <",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/interfaces/FullField",children:(0,t.jsx)(r.code,{children:"FullField"})}),"<",(0,t.jsx)(r.code,{children:"string"}),", ",(0,t.jsx)(r.code,{children:"string"}),", ",(0,t.jsx)(r.code,{children:"string"}),", ",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/interfaces/Option",children:(0,t.jsx)(r.code,{children:"Option"})}),"<",(0,t.jsx)(r.code,{children:"string"}),">, ",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/interfaces/Option",children:(0,t.jsx)(r.code,{children:"Option"})}),"<",(0,t.jsx)(r.code,{children:"string"}),">>>"]}),(0,t.jsxs)(r.td,{style:{textAlign:"left"},children:["The full ",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/interfaces/FullField",children:"FullField"})," list to be filtered."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"operator"})}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"string"})}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"-"})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/api/react-querybuilder/interfaces/FullField",children:(0,t.jsx)(r.code,{children:"FullField"})}),"<",(0,t.jsx)(r.code,{children:"string"}),", ",(0,t.jsx)(r.code,{children:"string"}),", ",(0,t.jsx)(r.code,{children:"string"}),", ",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/interfaces/Option",children:(0,t.jsx)(r.code,{children:"Option"})}),"<",(0,t.jsx)(r.code,{children:"string"}),">, ",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/interfaces/Option",children:(0,t.jsx)(r.code,{children:"Option"})}),"<",(0,t.jsx)(r.code,{children:"string"}),">>[] | ",(0,t.jsx)(r.code,{children:"object"}),"[]"]}),"\n",(0,t.jsx)(r.h2,{id:"source",children:"Source"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/blob/1b121b81814ffe5cc10e36c10f1ead07a04def67/packages/react-querybuilder/src/utils/filterFieldsByComparator.ts#L26",children:"packages/react-querybuilder/src/utils/filterFieldsByComparator.ts:26"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.admonition,{type:"caution",children:(0,t.jsxs)(r.p,{children:["API documentation is generated from the latest commit on the ",(0,t.jsxs)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/tree/main",children:[(0,t.jsx)(r.code,{children:"main"})," branch"]}),". It may be somewhat inconsistent with official releases of React Query Builder."]})})]})}function h(e={}){const{wrapper:r}={...(0,l.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},65404:(e,r,i)=>{i.d(r,{R:()=>d,x:()=>s});var t=i(63696);const l={},n=t.createContext(l);function d(e){const r=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),t.createElement(n.Provider,{value:r},e.children)}}}]);