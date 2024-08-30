"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[71368],{34927:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var n=t(62540),i=t(65404);const s={},d="jsonLogicAdditionalOperators",a={id:"react-querybuilder/variables/jsonLogicAdditionalOperators",title:"jsonLogicAdditionalOperators",description:"const jsonLogicAdditionalOperators: object",source:"@site/api/react-querybuilder/variables/jsonLogicAdditionalOperators.md",sourceDirName:"react-querybuilder/variables",slug:"/react-querybuilder/variables/jsonLogicAdditionalOperators",permalink:"/api/react-querybuilder/variables/jsonLogicAdditionalOperators",draft:!1,unlisted:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/api/react-querybuilder/variables/jsonLogicAdditionalOperators.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"groupInvalidReasons",permalink:"/api/react-querybuilder/variables/groupInvalidReasons"},next:{title:"messages",permalink:"/api/react-querybuilder/variables/messages"}},c={},l=[{value:"Type declaration",id:"type-declaration",level:2},{value:"endsWith()",id:"endswith",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"startsWith()",id:"startswith",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Example",id:"example",level:2},{value:"Defined in",id:"defined-in",level:2}];function o(e){const r={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"jsonlogicadditionaloperators",children:"jsonLogicAdditionalOperators"})}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"const"})," ",(0,n.jsx)(r.strong,{children:"jsonLogicAdditionalOperators"}),": ",(0,n.jsx)(r.code,{children:"object"})]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["Register these operators with ",(0,n.jsx)(r.code,{children:"jsonLogic"})," before applying the result\nof ",(0,n.jsx)(r.code,{children:"formatQuery(query, 'jsonlogic')"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"type-declaration",children:"Type declaration"}),"\n",(0,n.jsx)(r.h3,{id:"endswith",children:"endsWith()"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"endsWith"}),": (",(0,n.jsx)(r.code,{children:"a"}),", ",(0,n.jsx)(r.code,{children:"b"}),") => ",(0,n.jsx)(r.code,{children:"boolean"})]}),"\n"]}),"\n",(0,n.jsx)(r.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"a"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"string"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"b"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"string"})})]})]})]}),"\n",(0,n.jsx)(r.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"boolean"})}),"\n",(0,n.jsx)(r.h3,{id:"startswith",children:"startsWith()"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"startsWith"}),": (",(0,n.jsx)(r.code,{children:"a"}),", ",(0,n.jsx)(r.code,{children:"b"}),") => ",(0,n.jsx)(r.code,{children:"boolean"})]}),"\n"]}),"\n",(0,n.jsx)(r.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"a"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"string"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"b"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"string"})})]})]})]}),"\n",(0,n.jsx)(r.h4,{id:"returns-1",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"boolean"})}),"\n",(0,n.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:'for (const [op, func] of Object.entries(jsonLogicAdditionalOperators)) {\n  jsonLogic.add_operation(op, func);\n}\njsonLogic.apply({ "startsWith": [{ "var": "firstName" }, "Stev"] }, data);\n'})}),"\n",(0,n.jsx)(r.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/blob/064d3297daed853d9842102c6c030d0b7a1f8f1b/packages/react-querybuilder/src/utils/formatQuery/utils.ts#L64",children:"packages/react-querybuilder/src/utils/formatQuery/utils.ts:64"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.admonition,{type:"caution",children:(0,n.jsxs)(r.p,{children:["API documentation is generated from the latest commit on the ",(0,n.jsxs)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/tree/main",children:[(0,n.jsx)(r.code,{children:"main"})," branch"]}),". It may be somewhat inconsistent with official releases of React Query Builder."]})})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},65404:(e,r,t)=>{t.d(r,{R:()=>d,x:()=>a});var n=t(63696);const i={},s=n.createContext(i);function d(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);