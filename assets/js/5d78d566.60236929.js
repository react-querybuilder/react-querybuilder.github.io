"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[51916],{48640:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>o,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=r(62540),n=r(65404);const s={},c="splitBy()",l={id:"react-querybuilder/functions/splitBy",title:"splitBy()",description:"splitBy(str?, splitChar?): string[]",source:"@site/api/react-querybuilder/functions/splitBy.md",sourceDirName:"react-querybuilder/functions",slug:"/react-querybuilder/functions/splitBy",permalink:"/api/react-querybuilder/functions/splitBy",draft:!1,unlisted:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/api/react-querybuilder/functions/splitBy.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"remove()",permalink:"/api/react-querybuilder/functions/remove"},next:{title:"toArray()",permalink:"/api/react-querybuilder/functions/toArray"}},a={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2},{value:"Defined in",id:"defined-in",level:2}];function h(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"splitby",children:"splitBy()"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"splitBy"}),"(",(0,i.jsx)(t.code,{children:"str"}),"?, ",(0,i.jsx)(t.code,{children:"splitChar"}),"?): ",(0,i.jsx)(t.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Splits a string by a given character (see ",(0,i.jsx)(t.a,{href:"/api/react-querybuilder/variables/defaultJoinChar",children:"defaultJoinChar"}),". Escaped characters\n(characters preceded by a backslash) will not apply to the split, and the backslash will\nbe removed in the array element. Inverse of ",(0,i.jsx)(t.a,{href:"/api/react-querybuilder/functions/joinWith",children:"joinWith"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Default value"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"str"}),"?"]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"undefined"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"splitChar"}),"?"]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"defaultJoinChar"})})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"string"}),"[]"]}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"splitBy('this\\\\,\\\\,that,,the other,,,\\\\,')\n// or\nsplitBy('this\\\\,\\\\,that,,the other,,,\\\\,', ',')\n// would return\n['this,,that', '', 'the other', '', '', ',']\n"})}),"\n",(0,i.jsx)(t.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/react-querybuilder/react-querybuilder/blob/a39601d47aa96340eb849c64ccf2bd664cc4e27e/packages/react-querybuilder/src/utils/arrayUtils.ts#L15",children:"packages/react-querybuilder/src/utils/arrayUtils.ts:15"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsxs)(t.p,{children:["API documentation is generated from the latest commit on the ",(0,i.jsxs)(t.a,{href:"https://github.com/react-querybuilder/react-querybuilder/tree/main",children:[(0,i.jsx)(t.code,{children:"main"})," branch"]}),". It may be somewhat inconsistent with official releases of React Query Builder."]})})]})}function o(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},65404:(e,t,r)=>{r.d(t,{R:()=>c,x:()=>l});var i=r(63696);const n={},s=i.createContext(n);function c(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);