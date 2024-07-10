"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[11489],{10297:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>o,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var n=t(62540),i=t(65404);const s={},a="joinWith()",c={id:"react-querybuilder/functions/joinWith",title:"joinWith()",description:"joinWith(strArr, joinChar): string",source:"@site/api/react-querybuilder/functions/joinWith.md",sourceDirName:"react-querybuilder/functions",slug:"/react-querybuilder/functions/joinWith",permalink:"/api/react-querybuilder/functions/joinWith",draft:!1,unlisted:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/api/react-querybuilder/functions/joinWith.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"isValidationResult()",permalink:"/api/react-querybuilder/functions/isValidationResult"},next:{title:"mergeClassnames()",permalink:"/api/react-querybuilder/functions/mergeClassnames"}},d={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2},{value:"Defined in",id:"defined-in",level:2}];function h(e){const r={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"joinwith",children:"joinWith()"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"joinWith"}),"(",(0,n.jsx)(r.code,{children:"strArr"}),", ",(0,n.jsx)(r.code,{children:"joinChar"}),"): ",(0,n.jsx)(r.code,{children:"string"})]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["Joins an array of strings using the given character (see ",(0,n.jsx)(r.a,{href:"/api/react-querybuilder/variables/defaultJoinChar",children:"defaultJoinChar"}),". When\nthe given character appears in an array element, a backslash will be added just before it\nto distinguish it from the join character. Effectively the inverse of ",(0,n.jsx)(r.a,{href:"/api/react-querybuilder/functions/splitBy",children:"splitBy"}),"."]}),"\n",(0,n.jsx)(r.p,{children:"TIP: The join character can actually be a string of any length. Only the first character\nwill be searched for in the array elements and preceded by a backslash."}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Default value"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"strArr"})}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:"any"}),"[]"]}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"undefined"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"joinChar"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"string"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"defaultJoinChar"})})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"string"})}),"\n",(0,n.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"joinWith(['this,,that', '', 'the other', '', '', ','], ', ')\n// would return\n'this\\\\,\\\\,that,,the other,,,\\\\,'\n"})}),"\n",(0,n.jsx)(r.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/blob/a39601d47aa96340eb849c64ccf2bd664cc4e27e/packages/react-querybuilder/src/utils/arrayUtils.ts#L46",children:"packages/react-querybuilder/src/utils/arrayUtils.ts:46"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.admonition,{type:"caution",children:(0,n.jsxs)(r.p,{children:["API documentation is generated from the latest commit on the ",(0,n.jsxs)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/tree/main",children:[(0,n.jsx)(r.code,{children:"main"})," branch"]}),". It may be somewhat inconsistent with official releases of React Query Builder."]})})]})}function o(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},65404:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>c});var n=t(63696);const i={},s=n.createContext(i);function a(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);