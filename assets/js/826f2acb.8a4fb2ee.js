"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[18561],{81413:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=n(62540),t=n(65404);const s={},c="InsertOptions",o={id:"react-querybuilder/interfaces/InsertOptions",title:"InsertOptions",description:"Options for insert.",source:"@site/api/react-querybuilder/interfaces/InsertOptions.md",sourceDirName:"react-querybuilder/interfaces",slug:"/react-querybuilder/interfaces/InsertOptions",permalink:"/api/react-querybuilder/interfaces/InsertOptions",draft:!1,unlisted:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/api/react-querybuilder/interfaces/InsertOptions.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"InlineCombinatorProps",permalink:"/api/react-querybuilder/interfaces/InlineCombinatorProps"},next:{title:"MoveOptions",permalink:"/api/react-querybuilder/interfaces/MoveOptions"}},l={},d=[{value:"Properties",id:"properties",level:2},{value:"combinatorPreceding?",id:"combinatorpreceding",level:3},{value:"Source",id:"source",level:4},{value:"combinatorSucceeding?",id:"combinatorsucceeding",level:3},{value:"Source",id:"source-1",level:4},{value:"combinators?",id:"combinators",level:3},{value:"Source",id:"source-2",level:4},{value:"idGenerator()?",id:"idgenerator",level:3},{value:"Default",id:"default",level:4},{value:"Returns",id:"returns",level:4},{value:"Source",id:"source-3",level:4},{value:"replace?",id:"replace",level:3},{value:"Source",id:"source-4",level:4}];function u(e){const r={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"insertoptions",children:"InsertOptions"}),"\n",(0,i.jsxs)(r.p,{children:["Options for ",(0,i.jsx)(r.a,{href:"/api/react-querybuilder/functions/insert",children:"insert"}),"."]}),"\n",(0,i.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(r.h3,{id:"combinatorpreceding",children:"combinatorPreceding?"}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"optional"})," ",(0,i.jsx)(r.strong,{children:"combinatorPreceding"}),": ",(0,i.jsx)(r.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["If the query extends ",(0,i.jsx)(r.code,{children:"RuleGroupTypeIC"})," (i.e. the query has independent\ncombinators), then this combinator will be inserted before the new rule/group\nif the parent group is not empty and the new rule/group is not the first in the\ngroup (",(0,i.jsx)(r.code,{children:"path.at(-1) > 0"}),"). This option will supersede ",(0,i.jsx)(r.code,{children:"combinators"}),"."]}),"\n",(0,i.jsx)(r.h4,{id:"source",children:"Source"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/blob/43d8d358f00307635ed579e3ee4266e8245ab43d/packages/react-querybuilder/src/utils/queryTools.ts#L431",children:"packages/react-querybuilder/src/utils/queryTools.ts:431"})}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"combinatorsucceeding",children:"combinatorSucceeding?"}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"optional"})," ",(0,i.jsx)(r.strong,{children:"combinatorSucceeding"}),": ",(0,i.jsx)(r.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["If the query extends ",(0,i.jsx)(r.code,{children:"RuleGroupTypeIC"})," (i.e. the query has independent\ncombinators), then this combinator will be inserted after the new rule/group\nif the parent group is not empty and the new rule/group is the first in the\ngroup (",(0,i.jsx)(r.code,{children:"path.at(-1) === 0"}),"). This option will supersede ",(0,i.jsx)(r.code,{children:"combinators"}),"."]}),"\n",(0,i.jsx)(r.h4,{id:"source-1",children:"Source"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/blob/43d8d358f00307635ed579e3ee4266e8245ab43d/packages/react-querybuilder/src/utils/queryTools.ts#L438",children:"packages/react-querybuilder/src/utils/queryTools.ts:438"})}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"combinators",children:"combinators?"}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"optional"})," ",(0,i.jsx)(r.strong,{children:"combinators"}),": ",(0,i.jsx)(r.a,{href:"/api/react-querybuilder/type-aliases/OptionList",children:(0,i.jsx)(r.code,{children:"OptionList"})})]}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["If the query extends ",(0,i.jsx)(r.code,{children:"RuleGroupTypeIC"})," (i.e. the query has independent\ncombinators), then the first combinator in this list will be inserted\nbefore the new rule/group if the parent group is not empty. This option\nis overridden by ",(0,i.jsx)(r.code,{children:"combinatorPreceding"}),"."]}),"\n",(0,i.jsx)(r.h4,{id:"source-2",children:"Source"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/blob/43d8d358f00307635ed579e3ee4266e8245ab43d/packages/react-querybuilder/src/utils/queryTools.ts#L424",children:"packages/react-querybuilder/src/utils/queryTools.ts:424"})}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"idgenerator",children:"idGenerator()?"}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"optional"})," ",(0,i.jsx)(r.strong,{children:"idGenerator"}),": () => ",(0,i.jsx)(r.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"ID generator."}),"\n",(0,i.jsx)(r.h4,{id:"default",children:"Default"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"generateID\n"})}),"\n",(0,i.jsx)(r.h4,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"string"})}),"\n",(0,i.jsx)(r.h4,{id:"source-3",children:"Source"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/blob/43d8d358f00307635ed579e3ee4266e8245ab43d/packages/react-querybuilder/src/utils/queryTools.ts#L444",children:"packages/react-querybuilder/src/utils/queryTools.ts:444"})}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"replace",children:"replace?"}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"optional"})," ",(0,i.jsx)(r.strong,{children:"replace"}),": ",(0,i.jsx)(r.code,{children:"boolean"})]}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["When ",(0,i.jsx)(r.code,{children:"true"}),", the new rule/group will replace the rule/group at ",(0,i.jsx)(r.code,{children:"path"}),"."]}),"\n",(0,i.jsx)(r.h4,{id:"source-4",children:"Source"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/blob/43d8d358f00307635ed579e3ee4266e8245ab43d/packages/react-querybuilder/src/utils/queryTools.ts#L448",children:"packages/react-querybuilder/src/utils/queryTools.ts:448"})}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.admonition,{type:"caution",children:(0,i.jsxs)(r.p,{children:["API documentation is generated from the latest commit on the ",(0,i.jsxs)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/tree/main",children:[(0,i.jsx)(r.code,{children:"main"})," branch"]}),". It may be somewhat inconsistent with official releases of React Query Builder."]})})]})}function a(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},65404:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>o});var i=n(63696);const t={},s=i.createContext(t);function c(e){const r=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);