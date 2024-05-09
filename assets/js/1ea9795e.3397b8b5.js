"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[32997],{57717:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>a,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var t=s(62540),n=s(65404);const d={},l="RuleDndProps",c={id:"@react-querybuilder/dnd/interfaces/RuleDndProps",title:"RuleDndProps",description:"RuleDnD props.",source:"@site/api/@react-querybuilder/dnd/interfaces/RuleDndProps.md",sourceDirName:"@react-querybuilder/dnd/interfaces",slug:"/@react-querybuilder/dnd/interfaces/RuleDndProps",permalink:"/api/@react-querybuilder/dnd/interfaces/RuleDndProps",draft:!1,unlisted:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/api/@react-querybuilder/dnd/interfaces/RuleDndProps.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"QueryBuilderDndContextProps",permalink:"/api/@react-querybuilder/dnd/interfaces/QueryBuilderDndContextProps"},next:{title:"RuleGroupDndProps",permalink:"/api/@react-querybuilder/dnd/interfaces/RuleGroupDndProps"}},i={},h=[{value:"Properties",id:"properties",level:2},{value:"children",id:"children",level:3},{value:"Source",id:"source",level:4},{value:"disabled",id:"disabled",level:3},{value:"Source",id:"source-1",level:4},{value:"independentCombinators",id:"independentcombinators",level:3},{value:"Source",id:"source-2",level:4},{value:"moveRule()",id:"moverule",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Source",id:"source-3",level:4},{value:"parentDisabled",id:"parentdisabled",level:3},{value:"Source",id:"source-4",level:4},{value:"path",id:"path",level:3},{value:"Source",id:"source-5",level:4},{value:"useDrag()",id:"usedrag",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Source",id:"source-6",level:4},{value:"useDrop()",id:"usedrop",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Source",id:"source-7",level:4}];function o(e){const r={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"ruledndprops",children:"RuleDndProps"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/api/@react-querybuilder/dnd/functions/RuleDnD",children:"RuleDnD"})," props."]}),"\n",(0,t.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(r.h3,{id:"children",children:"children"}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"children"}),": ",(0,t.jsx)(r.code,{children:"ReactElement"}),"<",(0,t.jsx)(r.code,{children:"RuleProps"}),"<",(0,t.jsx)(r.code,{children:"string"}),", ",(0,t.jsx)(r.code,{children:"string"}),">, ",(0,t.jsx)(r.code,{children:"string"})," | ",(0,t.jsx)(r.code,{children:"JSXElementConstructor"}),"<",(0,t.jsx)(r.code,{children:"any"}),">>"]}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"source",children:"Source"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/blob/1b121b81814ffe5cc10e36c10f1ead07a04def67/packages/dnd/src/types.ts#L42",children:"packages/dnd/src/types.ts:42"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"disabled",children:"disabled"}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"disabled"}),": ",(0,t.jsx)(r.code,{children:"boolean"})]}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"source-1",children:"Source"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/blob/1b121b81814ffe5cc10e36c10f1ead07a04def67/packages/dnd/src/types.ts#L34",children:"packages/dnd/src/types.ts:34"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"independentcombinators",children:"independentCombinators"}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"independentCombinators"}),": ",(0,t.jsx)(r.code,{children:"boolean"})]}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"source-2",children:"Source"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/blob/1b121b81814ffe5cc10e36c10f1ead07a04def67/packages/dnd/src/types.ts#L37",children:"packages/dnd/src/types.ts:37"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"moverule",children:"moveRule()"}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"moveRule"}),": (",(0,t.jsx)(r.code,{children:"oldPath"}),", ",(0,t.jsx)(r.code,{children:"newPath"}),", ",(0,t.jsx)(r.code,{children:"clone"}),"?) => ",(0,t.jsx)(r.code,{children:"void"})]}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Parameter"}),(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"oldPath"})}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"Path"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"newPath"})}),(0,t.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,t.jsx)(r.code,{children:"Path"})," | ",(0,t.jsx)(r.code,{children:'"up"'})," | ",(0,t.jsx)(r.code,{children:'"down"'})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,t.jsx)(r.code,{children:"clone"}),"?"]}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"boolean"})})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"void"})}),"\n",(0,t.jsx)(r.h4,{id:"source-3",children:"Source"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/blob/1b121b81814ffe5cc10e36c10f1ead07a04def67/packages/dnd/src/types.ts#L33",children:"packages/dnd/src/types.ts:33"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"parentdisabled",children:"parentDisabled"}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"parentDisabled"}),": ",(0,t.jsx)(r.code,{children:"boolean"})]}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"source-4",children:"Source"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/blob/1b121b81814ffe5cc10e36c10f1ead07a04def67/packages/dnd/src/types.ts#L35",children:"packages/dnd/src/types.ts:35"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"path",children:"path"}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"path"}),": ",(0,t.jsx)(r.code,{children:"Path"})]}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"source-5",children:"Source"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/blob/1b121b81814ffe5cc10e36c10f1ead07a04def67/packages/dnd/src/types.ts#L36",children:"packages/dnd/src/types.ts:36"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"usedrag",children:"useDrag()"}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"useDrag"}),": <",(0,t.jsx)(r.code,{children:"DragObject"}),", ",(0,t.jsx)(r.code,{children:"DropResult"}),", ",(0,t.jsx)(r.code,{children:"CollectedProps"}),">(",(0,t.jsx)(r.code,{children:"specArg"}),", ",(0,t.jsx)(r.code,{children:"deps"}),"?) => [",(0,t.jsx)(r.code,{children:"CollectedProps"}),", ",(0,t.jsx)(r.code,{children:"ConnectDragSource"}),", ",(0,t.jsx)(r.code,{children:"ConnectDragPreview"}),"]"]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"useDragSource hook"}),"\n",(0,t.jsx)(r.h4,{id:"type-parameters",children:"Type parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Type parameter"}),(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Value"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"DragObject"})}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"unknown"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"DropResult"})}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"unknown"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"CollectedProps"})}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"unknown"})})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Parameter"}),(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Type"}),(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"specArg"})}),(0,t.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,t.jsx)(r.code,{children:"FactoryOrInstance"}),"<",(0,t.jsx)(r.code,{children:"DragSourceHookSpec"}),"<",(0,t.jsx)(r.code,{children:"DragObject"}),", ",(0,t.jsx)(r.code,{children:"DropResult"}),", ",(0,t.jsx)(r.code,{children:"CollectedProps"}),">>"]}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"-"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,t.jsx)(r.code,{children:"deps"}),"?"]}),(0,t.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,t.jsx)(r.code,{children:"unknown"}),"[]"]}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"The memoization deps array to use when evaluating spec changes"})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"returns-1",children:"Returns"}),"\n",(0,t.jsxs)(r.p,{children:["[",(0,t.jsx)(r.code,{children:"CollectedProps"}),", ",(0,t.jsx)(r.code,{children:"ConnectDragSource"}),", ",(0,t.jsx)(r.code,{children:"ConnectDragPreview"}),"]"]}),"\n",(0,t.jsx)(r.h4,{id:"source-6",children:"Source"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/blob/1b121b81814ffe5cc10e36c10f1ead07a04def67/packages/dnd/src/types.ts#L39",children:"packages/dnd/src/types.ts:39"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"usedrop",children:"useDrop()"}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"useDrop"}),": <",(0,t.jsx)(r.code,{children:"DragObject"}),", ",(0,t.jsx)(r.code,{children:"DropResult"}),", ",(0,t.jsx)(r.code,{children:"CollectedProps"}),">(",(0,t.jsx)(r.code,{children:"specArg"}),", ",(0,t.jsx)(r.code,{children:"deps"}),"?) => [",(0,t.jsx)(r.code,{children:"CollectedProps"}),", ",(0,t.jsx)(r.code,{children:"ConnectDropTarget"}),"]"]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"useDropTarget Hook"}),"\n",(0,t.jsx)(r.h4,{id:"type-parameters-1",children:"Type parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Type parameter"}),(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Value"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"DragObject"})}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"unknown"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"DropResult"})}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"unknown"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"CollectedProps"})}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"unknown"})})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Parameter"}),(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Type"}),(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"specArg"})}),(0,t.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,t.jsx)(r.code,{children:"FactoryOrInstance"}),"<",(0,t.jsx)(r.code,{children:"DropTargetHookSpec"}),"<",(0,t.jsx)(r.code,{children:"DragObject"}),", ",(0,t.jsx)(r.code,{children:"DropResult"}),", ",(0,t.jsx)(r.code,{children:"CollectedProps"}),">>"]}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"-"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,t.jsx)(r.code,{children:"deps"}),"?"]}),(0,t.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,t.jsx)(r.code,{children:"unknown"}),"[]"]}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"The memoization deps array to use when evaluating spec changes"})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"returns-2",children:"Returns"}),"\n",(0,t.jsxs)(r.p,{children:["[",(0,t.jsx)(r.code,{children:"CollectedProps"}),", ",(0,t.jsx)(r.code,{children:"ConnectDropTarget"}),"]"]}),"\n",(0,t.jsx)(r.h4,{id:"source-7",children:"Source"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/blob/1b121b81814ffe5cc10e36c10f1ead07a04def67/packages/dnd/src/types.ts#L41",children:"packages/dnd/src/types.ts:41"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.admonition,{type:"caution",children:(0,t.jsxs)(r.p,{children:["API documentation is generated from the latest commit on the ",(0,t.jsxs)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/tree/main",children:[(0,t.jsx)(r.code,{children:"main"})," branch"]}),". It may be somewhat inconsistent with official releases of React Query Builder."]})})]})}function a(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},65404:(e,r,s)=>{s.d(r,{R:()=>l,x:()=>c});var t=s(63696);const n={},d=t.createContext(n);function l(e){const r=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),t.createElement(d.Provider,{value:r},e.children)}}}]);