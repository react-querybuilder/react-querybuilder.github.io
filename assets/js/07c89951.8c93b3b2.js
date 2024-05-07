"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1921],{24742:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>o});var i=n(62540),d=n(65404);const s={id:"react_querybuilder.ParseMongoDbOptions",title:"Interface: ParseMongoDbOptions",sidebar_label:"ParseMongoDbOptions",custom_edit_url:null},l=void 0,t={id:"interfaces/react_querybuilder.ParseMongoDbOptions",title:"Interface: ParseMongoDbOptions",description:"react-querybuilder.ParseMongoDbOptions",source:"@site/api/interfaces/react_querybuilder.ParseMongoDbOptions.md",sourceDirName:"interfaces",slug:"/interfaces/react_querybuilder.ParseMongoDbOptions",permalink:"/api/interfaces/react_querybuilder.ParseMongoDbOptions",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"react_querybuilder.ParseMongoDbOptions",title:"Interface: ParseMongoDbOptions",sidebar_label:"ParseMongoDbOptions",custom_edit_url:null},sidebar:"sidebar",previous:{title:"ParseJsonLogicOptions",permalink:"/api/interfaces/react_querybuilder.ParseJsonLogicOptions"},next:{title:"ParseNumberOptions",permalink:"/api/interfaces/react_querybuilder.ParseNumberOptions"}},c={},o=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"additionalOperators",id:"additionaloperators",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"fields",id:"fields",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"getValueSources",id:"getvaluesources",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"independentCombinators",id:"independentcombinators",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"listsAsArrays",id:"listsasarrays",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"preventOperatorNegation",id:"preventoperatornegation",level:3},{value:"Defined in",id:"defined-in-5",level:4}];function a(e){const r={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"../modules/react_querybuilder",children:"react-querybuilder"}),".ParseMongoDbOptions"]}),"\n",(0,i.jsx)(r.p,{children:"Options object for parseMongoDB."}),"\n",(0,i.jsx)(r.h2,{id:"hierarchy",children:"Hierarchy"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"ParserCommonOptions"})}),"\n",(0,i.jsxs)(r.p,{children:["\u21b3 ",(0,i.jsx)(r.strong,{children:(0,i.jsx)(r.code,{children:"ParseMongoDbOptions"})})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(r.h3,{id:"additionaloperators",children:"additionalOperators"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"Optional"})," ",(0,i.jsx)(r.strong,{children:"additionalOperators"}),": ",(0,i.jsx)(r.code,{children:"Record"}),"<`$${string}`, (",(0,i.jsx)(r.code,{children:"field"}),": ",(0,i.jsx)(r.code,{children:"string"}),", ",(0,i.jsx)(r.code,{children:"operator"}),": ",(0,i.jsx)(r.code,{children:"string"}),", ",(0,i.jsx)(r.code,{children:"value"}),": ",(0,i.jsx)(r.code,{children:"any"}),", ",(0,i.jsx)(r.code,{children:"options"}),": ",(0,i.jsx)(r.code,{children:"ParserCommonOptions"}),") => ",(0,i.jsx)(r.a,{href:"react_querybuilder.RuleType",children:(0,i.jsx)(r.code,{children:"RuleType"})}),"<",(0,i.jsx)(r.code,{children:"string"}),", ",(0,i.jsx)(r.code,{children:"string"}),", ",(0,i.jsx)(r.code,{children:"any"}),", ",(0,i.jsx)(r.code,{children:"string"}),"> | ",(0,i.jsx)(r.a,{href:"react_querybuilder.RuleGroupType",children:(0,i.jsx)(r.code,{children:"RuleGroupType"})}),"<",(0,i.jsx)(r.a,{href:"react_querybuilder.RuleType",children:(0,i.jsx)(r.code,{children:"RuleType"})}),"<",(0,i.jsx)(r.code,{children:"string"}),", ",(0,i.jsx)(r.code,{children:"string"}),", ",(0,i.jsx)(r.code,{children:"any"}),", ",(0,i.jsx)(r.code,{children:"string"}),">, ",(0,i.jsx)(r.code,{children:"string"}),">>"]}),"\n",(0,i.jsxs)(r.p,{children:["Map of additional operators to their respective processing functions. Operators\nmust begin with ",(0,i.jsx)(r.code,{children:'"$"'}),". Processing functions should return either a ",(0,i.jsx)(r.a,{href:"react_querybuilder.RuleType",children:"RuleType"}),"\nor ",(0,i.jsx)(r.a,{href:"react_querybuilder.RuleGroupType",children:"RuleGroupType"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:["(The functions should ",(0,i.jsx)(r.em,{children:"not"})," return ",(0,i.jsx)(r.a,{href:"react_querybuilder.RuleGroupTypeIC",children:"RuleGroupTypeIC"}),", even if using independent\ncombinators. If the ",(0,i.jsx)(r.code,{children:"independentCombinators"})," option is ",(0,i.jsx)(r.code,{children:"true"}),", ",(0,i.jsx)(r.code,{children:"parseMongoDB"}),"\nwill convert the final query to ",(0,i.jsx)(r.a,{href:"react_querybuilder.RuleGroupTypeIC",children:"RuleGroupTypeIC"})," before returning it.)"]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:(0,i.jsx)(r.code,{children:"Default"})})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"{}\n"})}),"\n",(0,i.jsx)(r.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/blob/fd42b449884242b9f5c5859d66f1c11cb5467e3b/packages/react-querybuilder/src/types/importExport.ts#L337",children:"packages/react-querybuilder/src/types/importExport.ts:337"})}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"fields",children:"fields"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"Optional"})," ",(0,i.jsx)(r.strong,{children:"fields"}),": ",(0,i.jsx)(r.a,{href:"../modules/react_querybuilder#optionlist",children:(0,i.jsx)(r.code,{children:"OptionList"})}),"<",(0,i.jsx)(r.a,{href:"react_querybuilder.FullField",children:(0,i.jsx)(r.code,{children:"FullField"})}),"<",(0,i.jsx)(r.code,{children:"string"}),", ",(0,i.jsx)(r.code,{children:"string"}),", ",(0,i.jsx)(r.code,{children:"string"}),", ",(0,i.jsx)(r.a,{href:"react_querybuilder.Option",children:(0,i.jsx)(r.code,{children:"Option"})}),"<",(0,i.jsx)(r.code,{children:"string"}),">, ",(0,i.jsx)(r.a,{href:"react_querybuilder.Option",children:(0,i.jsx)(r.code,{children:"Option"})}),"<",(0,i.jsx)(r.code,{children:"string"}),">>> | ",(0,i.jsx)(r.code,{children:"Record"}),"<",(0,i.jsx)(r.code,{children:"string"}),", ",(0,i.jsx)(r.a,{href:"react_querybuilder.FullField",children:(0,i.jsx)(r.code,{children:"FullField"})}),"<",(0,i.jsx)(r.code,{children:"string"}),", ",(0,i.jsx)(r.code,{children:"string"}),", ",(0,i.jsx)(r.code,{children:"string"}),", ",(0,i.jsx)(r.a,{href:"react_querybuilder.Option",children:(0,i.jsx)(r.code,{children:"Option"})}),"<",(0,i.jsx)(r.code,{children:"string"}),">, ",(0,i.jsx)(r.a,{href:"react_querybuilder.Option",children:(0,i.jsx)(r.code,{children:"Option"})}),"<",(0,i.jsx)(r.code,{children:"string"}),">>>"]}),"\n",(0,i.jsx)(r.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,i.jsx)(r.p,{children:"ParserCommonOptions.fields"}),"\n",(0,i.jsx)(r.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/blob/fd42b449884242b9f5c5859d66f1c11cb5467e3b/packages/react-querybuilder/src/types/importExport.ts#L255",children:"packages/react-querybuilder/src/types/importExport.ts:255"})}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"getvaluesources",children:"getValueSources"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"Optional"})," ",(0,i.jsx)(r.strong,{children:"getValueSources"}),": (",(0,i.jsx)(r.code,{children:"field"}),": ",(0,i.jsx)(r.code,{children:"string"}),", ",(0,i.jsx)(r.code,{children:"operator"}),": ",(0,i.jsx)(r.code,{children:"string"}),") => ",(0,i.jsx)(r.a,{href:"../modules/react_querybuilder#valuesources",children:(0,i.jsx)(r.code,{children:"ValueSources"})})]}),"\n",(0,i.jsx)(r.h4,{id:"type-declaration",children:"Type declaration"}),"\n",(0,i.jsxs)(r.p,{children:["(",(0,i.jsx)(r.code,{children:"field"}),", ",(0,i.jsx)(r.code,{children:"operator"}),"): ",(0,i.jsx)(r.a,{href:"../modules/react_querybuilder#valuesources",children:(0,i.jsx)(r.code,{children:"ValueSources"})})]}),"\n",(0,i.jsx)(r.h5,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(r.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{style:{textAlign:"left"},children:(0,i.jsx)(r.code,{children:"field"})}),(0,i.jsx)(r.td,{style:{textAlign:"left"},children:(0,i.jsx)(r.code,{children:"string"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{style:{textAlign:"left"},children:(0,i.jsx)(r.code,{children:"operator"})}),(0,i.jsx)(r.td,{style:{textAlign:"left"},children:(0,i.jsx)(r.code,{children:"string"})})]})]})]}),"\n",(0,i.jsx)(r.h5,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"../modules/react_querybuilder#valuesources",children:(0,i.jsx)(r.code,{children:"ValueSources"})})}),"\n",(0,i.jsx)(r.h4,{id:"inherited-from-1",children:"Inherited from"}),"\n",(0,i.jsx)(r.p,{children:"ParserCommonOptions.getValueSources"}),"\n",(0,i.jsx)(r.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/blob/fd42b449884242b9f5c5859d66f1c11cb5467e3b/packages/react-querybuilder/src/types/importExport.ts#L256",children:"packages/react-querybuilder/src/types/importExport.ts:256"})}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"independentcombinators",children:"independentCombinators"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"Optional"})," ",(0,i.jsx)(r.strong,{children:"independentCombinators"}),": ",(0,i.jsx)(r.code,{children:"boolean"})]}),"\n",(0,i.jsx)(r.h4,{id:"inherited-from-2",children:"Inherited from"}),"\n",(0,i.jsx)(r.p,{children:"ParserCommonOptions.independentCombinators"}),"\n",(0,i.jsx)(r.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/blob/fd42b449884242b9f5c5859d66f1c11cb5467e3b/packages/react-querybuilder/src/types/importExport.ts#L258",children:"packages/react-querybuilder/src/types/importExport.ts:258"})}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"listsasarrays",children:"listsAsArrays"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"Optional"})," ",(0,i.jsx)(r.strong,{children:"listsAsArrays"}),": ",(0,i.jsx)(r.code,{children:"boolean"})]}),"\n",(0,i.jsx)(r.h4,{id:"inherited-from-3",children:"Inherited from"}),"\n",(0,i.jsx)(r.p,{children:"ParserCommonOptions.listsAsArrays"}),"\n",(0,i.jsx)(r.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/blob/fd42b449884242b9f5c5859d66f1c11cb5467e3b/packages/react-querybuilder/src/types/importExport.ts#L257",children:"packages/react-querybuilder/src/types/importExport.ts:257"})}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"preventoperatornegation",children:"preventOperatorNegation"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"Optional"})," ",(0,i.jsx)(r.strong,{children:"preventOperatorNegation"}),": ",(0,i.jsx)(r.code,{children:"boolean"})]}),"\n",(0,i.jsxs)(r.p,{children:["When ",(0,i.jsx)(r.code,{children:"true"}),", MongoDB rules in the form of ",(0,i.jsx)(r.code,{children:"{ fieldName: { $not: { <...rule> } } }"}),"\nwill be parsed into a rule group with the ",(0,i.jsx)(r.code,{children:"not"})," attribute set to ",(0,i.jsx)(r.code,{children:"true"}),". By default\n(i.e., when this attribute is ",(0,i.jsx)(r.code,{children:"false"}),'), such "',(0,i.jsx)(r.code,{children:"$not"}),'" rules will be parsed into a\nrule with a negated operator.']}),"\n",(0,i.jsxs)(r.p,{children:["For example, with ",(0,i.jsx)(r.code,{children:"preventOperatorNegation"})," set to ",(0,i.jsx)(r.code,{children:"true"}),", a MongoDB rule like this..."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"{ fieldName: { $not: { $eq: 1 } } }\n"})}),"\n",(0,i.jsx)(r.p,{children:"...would yield a rule group like this:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"{\n  combinator: 'and',\n  not: true,\n  rules: [{ field: 'fieldName', operator: '=', value: 1 }]\n}\n"})}),"\n",(0,i.jsx)(r.p,{children:"By default, the same MongoDB rule would yield a rule like this:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"{ field: 'fieldName', operator: '!=', value: 1 }\n//              negated operator ^\n"})}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:(0,i.jsx)(r.code,{children:"Default"})})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"false\n"})}),"\n",(0,i.jsx)(r.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/blob/fd42b449884242b9f5c5859d66f1c11cb5467e3b/packages/react-querybuilder/src/types/importExport.ts#L325",children:"packages/react-querybuilder/src/types/importExport.ts:325"})})]})}function h(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},65404:(e,r,n)=>{n.d(r,{R:()=>l,x:()=>t});var i=n(63696);const d={},s=i.createContext(d);function l(e){const r=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);