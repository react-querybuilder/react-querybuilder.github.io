"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6461],{84451:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>c});var n=i(24246),s=i(71670);const d={id:"react_querybuilder.ParseMongoDbOptions",title:"Interface: ParseMongoDbOptions",sidebar_label:"ParseMongoDbOptions",custom_edit_url:null},t=void 0,l={id:"interfaces/react_querybuilder.ParseMongoDbOptions",title:"Interface: ParseMongoDbOptions",description:"react-querybuilder.ParseMongoDbOptions",source:"@site/api/interfaces/react_querybuilder.ParseMongoDbOptions.md",sourceDirName:"interfaces",slug:"/interfaces/react_querybuilder.ParseMongoDbOptions",permalink:"/api/interfaces/react_querybuilder.ParseMongoDbOptions",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"react_querybuilder.ParseMongoDbOptions",title:"Interface: ParseMongoDbOptions",sidebar_label:"ParseMongoDbOptions",custom_edit_url:null},sidebar:"sidebar",previous:{title:"ParseJsonLogicOptions",permalink:"/api/interfaces/react_querybuilder.ParseJsonLogicOptions"},next:{title:"ParseNumberOptions",permalink:"/api/interfaces/react_querybuilder.ParseNumberOptions"}},o={},c=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"additionalOperators",id:"additionaloperators",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"fields",id:"fields",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"getValueSources",id:"getvaluesources",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"independentCombinators",id:"independentcombinators",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"listsAsArrays",id:"listsasarrays",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-4",level:4}];function a(e){const r={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"../modules/react_querybuilder",children:"react-querybuilder"}),".ParseMongoDbOptions"]}),"\n",(0,n.jsx)(r.p,{children:"Options object for parseMongoDB."}),"\n",(0,n.jsx)(r.h2,{id:"hierarchy",children:"Hierarchy"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"ParserCommonOptions"})}),"\n",(0,n.jsxs)(r.p,{children:["\u21b3 ",(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"ParseMongoDbOptions"})})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(r.h3,{id:"additionaloperators",children:"additionalOperators"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Optional"})," ",(0,n.jsx)(r.strong,{children:"additionalOperators"}),": ",(0,n.jsx)(r.code,{children:"Record"}),"<`$${string}`, (",(0,n.jsx)(r.code,{children:"field"}),": ",(0,n.jsx)(r.code,{children:"string"}),", ",(0,n.jsx)(r.code,{children:"operator"}),": ",(0,n.jsx)(r.code,{children:"string"}),", ",(0,n.jsx)(r.code,{children:"value"}),": ",(0,n.jsx)(r.code,{children:"any"}),", ",(0,n.jsx)(r.code,{children:"options"}),": ",(0,n.jsx)(r.code,{children:"ParserCommonOptions"}),") => ",(0,n.jsx)(r.a,{href:"../modules/react_querybuilder#ruletype",children:(0,n.jsx)(r.code,{children:"RuleType"})})," | ",(0,n.jsx)(r.a,{href:"../modules/react_querybuilder#rulegrouptype",children:(0,n.jsx)(r.code,{children:"RuleGroupType"})}),">"]}),"\n",(0,n.jsxs)(r.p,{children:["Map of additional operators to their respective processing functions. Operators\nmust begin with ",(0,n.jsx)(r.code,{children:'"$"'}),". Processing functions should return either a ",(0,n.jsx)(r.a,{href:"../modules/react_querybuilder#ruletype",children:"RuleType"}),"\nor ",(0,n.jsx)(r.a,{href:"../modules/react_querybuilder#rulegrouptype",children:"RuleGroupType"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["(The functions should ",(0,n.jsx)(r.em,{children:"not"})," return ",(0,n.jsx)(r.a,{href:"../modules/react_querybuilder#rulegrouptypeic",children:"RuleGroupTypeIC"}),", even if using independent\ncombinators. If the ",(0,n.jsx)(r.code,{children:"independentCombinators"})," option is ",(0,n.jsx)(r.code,{children:"true"}),", ",(0,n.jsx)(r.code,{children:"parseMongoDB"}),"\nwill convert the final query to ",(0,n.jsx)(r.a,{href:"../modules/react_querybuilder#rulegrouptypeic",children:"RuleGroupTypeIC"})," before returning it.)"]}),"\n",(0,n.jsx)(r.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/blob/7ad830e/packages/react-querybuilder/src/types/importExport.ts#L249",children:"packages/react-querybuilder/src/types/importExport.ts:249"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"fields",children:"fields"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Optional"})," ",(0,n.jsx)(r.strong,{children:"fields"}),": ",(0,n.jsx)(r.a,{href:"../modules/react_querybuilder#optionlist",children:(0,n.jsx)(r.code,{children:"OptionList"})}),"<",(0,n.jsx)(r.a,{href:"react_querybuilder.Field",children:(0,n.jsx)(r.code,{children:"Field"})}),"<",(0,n.jsx)(r.code,{children:"string"}),", ",(0,n.jsx)(r.code,{children:"string"}),", ",(0,n.jsx)(r.code,{children:"string"}),", ",(0,n.jsx)(r.a,{href:"react_querybuilder.Option",children:(0,n.jsx)(r.code,{children:"Option"})}),"<",(0,n.jsx)(r.code,{children:"string"}),">, ",(0,n.jsx)(r.a,{href:"react_querybuilder.Option",children:(0,n.jsx)(r.code,{children:"Option"})}),"<",(0,n.jsx)(r.code,{children:"string"}),">>> | ",(0,n.jsx)(r.code,{children:"Record"}),"<",(0,n.jsx)(r.code,{children:"string"}),", ",(0,n.jsx)(r.a,{href:"react_querybuilder.Field",children:(0,n.jsx)(r.code,{children:"Field"})}),"<",(0,n.jsx)(r.code,{children:"string"}),", ",(0,n.jsx)(r.code,{children:"string"}),", ",(0,n.jsx)(r.code,{children:"string"}),", ",(0,n.jsx)(r.a,{href:"react_querybuilder.Option",children:(0,n.jsx)(r.code,{children:"Option"})}),"<",(0,n.jsx)(r.code,{children:"string"}),">, ",(0,n.jsx)(r.a,{href:"react_querybuilder.Option",children:(0,n.jsx)(r.code,{children:"Option"})}),"<",(0,n.jsx)(r.code,{children:"string"}),">>>"]}),"\n",(0,n.jsx)(r.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,n.jsx)(r.p,{children:"ParserCommonOptions.fields"}),"\n",(0,n.jsx)(r.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/blob/7ad830e/packages/react-querybuilder/src/types/importExport.ts#L209",children:"packages/react-querybuilder/src/types/importExport.ts:209"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"getvaluesources",children:"getValueSources"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Optional"})," ",(0,n.jsx)(r.strong,{children:"getValueSources"}),": (",(0,n.jsx)(r.code,{children:"field"}),": ",(0,n.jsx)(r.code,{children:"string"}),", ",(0,n.jsx)(r.code,{children:"operator"}),": ",(0,n.jsx)(r.code,{children:"string"}),") => ",(0,n.jsx)(r.a,{href:"../modules/react_querybuilder#valuesources",children:(0,n.jsx)(r.code,{children:"ValueSources"})})]}),"\n",(0,n.jsx)(r.h4,{id:"type-declaration",children:"Type declaration"}),"\n",(0,n.jsxs)(r.p,{children:["(",(0,n.jsx)(r.code,{children:"field"}),", ",(0,n.jsx)(r.code,{children:"operator"}),"): ",(0,n.jsx)(r.a,{href:"../modules/react_querybuilder#valuesources",children:(0,n.jsx)(r.code,{children:"ValueSources"})})]}),"\n",(0,n.jsx)(r.h5,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(r.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"field"})}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"string"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"operator"})}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"string"})})]})]})]}),"\n",(0,n.jsx)(r.h5,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"../modules/react_querybuilder#valuesources",children:(0,n.jsx)(r.code,{children:"ValueSources"})})}),"\n",(0,n.jsx)(r.h4,{id:"inherited-from-1",children:"Inherited from"}),"\n",(0,n.jsx)(r.p,{children:"ParserCommonOptions.getValueSources"}),"\n",(0,n.jsx)(r.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/blob/7ad830e/packages/react-querybuilder/src/types/importExport.ts#L210",children:"packages/react-querybuilder/src/types/importExport.ts:210"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"independentcombinators",children:"independentCombinators"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Optional"})," ",(0,n.jsx)(r.strong,{children:"independentCombinators"}),": ",(0,n.jsx)(r.code,{children:"boolean"})]}),"\n",(0,n.jsx)(r.h4,{id:"inherited-from-2",children:"Inherited from"}),"\n",(0,n.jsx)(r.p,{children:"ParserCommonOptions.independentCombinators"}),"\n",(0,n.jsx)(r.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/blob/7ad830e/packages/react-querybuilder/src/types/importExport.ts#L212",children:"packages/react-querybuilder/src/types/importExport.ts:212"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"listsasarrays",children:"listsAsArrays"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Optional"})," ",(0,n.jsx)(r.strong,{children:"listsAsArrays"}),": ",(0,n.jsx)(r.code,{children:"boolean"})]}),"\n",(0,n.jsx)(r.h4,{id:"inherited-from-3",children:"Inherited from"}),"\n",(0,n.jsx)(r.p,{children:"ParserCommonOptions.listsAsArrays"}),"\n",(0,n.jsx)(r.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/blob/7ad830e/packages/react-querybuilder/src/types/importExport.ts#L211",children:"packages/react-querybuilder/src/types/importExport.ts:211"})})]})}function h(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},71670:(e,r,i)=>{i.d(r,{Z:()=>l,a:()=>t});var n=i(27378);const s={},d=n.createContext(s);function t(e){const r=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),n.createElement(d.Provider,{value:r},e.children)}}}]);