"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[49552],{15260:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>c,contentTitle:()=>d,default:()=>x,frontMatter:()=>n,metadata:()=>s,toc:()=>a});var t=i(62540),l=i(65404);const n={},d="useQueryBuilderSetup()",s={id:"react-querybuilder/functions/useQueryBuilderSetup",title:"useQueryBuilderSetup()",description:"useQueryBuilderSetup\\(props): object",source:"@site/api/react-querybuilder/functions/useQueryBuilderSetup.md",sourceDirName:"react-querybuilder/functions",slug:"/react-querybuilder/functions/useQueryBuilderSetup",permalink:"/api/react-querybuilder/functions/useQueryBuilderSetup",draft:!1,unlisted:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/api/react-querybuilder/functions/useQueryBuilderSetup.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"useQueryBuilderSelector()",permalink:"/api/react-querybuilder/functions/useQueryBuilderSelector"},next:{title:"useReactDndWarning()",permalink:"/api/react-querybuilder/functions/useReactDndWarning"}},c={},a=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"combinators",id:"combinators",level:3},{value:"createRule()",id:"createrule",level:3},{value:"Returns",id:"returns-1",level:4},{value:"createRuleGroup()",id:"createrulegroup",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"fieldMap",id:"fieldmap",level:3},{value:"fields",id:"fields",level:3},{value:"getInputTypeMain()",id:"getinputtypemain",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"getOperatorsMain()",id:"getoperatorsmain",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"getRuleDefaultOperator()",id:"getruledefaultoperator",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-5",level:4},{value:"getRuleDefaultValue()",id:"getruledefaultvalue",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-6",level:4},{value:"getValueEditorTypeMain()",id:"getvalueeditortypemain",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-7",level:4},{value:"getValueSourcesMain()",id:"getvaluesourcesmain",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-8",level:4},{value:"getValuesMain()",id:"getvaluesmain",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-9",level:4},{value:"qbId",id:"qbid",level:3},{value:"rqbContext",id:"rqbcontext",level:3},{value:"Source",id:"source",level:2}];function h(e){const r={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"usequerybuildersetup",children:"useQueryBuilderSetup()"}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"useQueryBuilderSetup"}),"<",(0,t.jsx)(r.code,{children:"RG"}),", ",(0,t.jsx)(r.code,{children:"F"}),", ",(0,t.jsx)(r.code,{children:"O"}),", ",(0,t.jsx)(r.code,{children:"C"}),">(",(0,t.jsx)(r.code,{children:"props"}),"): ",(0,t.jsx)(r.code,{children:"object"})]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["Massages the props as necessary and prepares the basic update/generate methods\nfor use by the ",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/functions/QueryBuilder",children:"QueryBuilder"})," component."]}),"\n",(0,t.jsx)(r.h2,{id:"type-parameters",children:"Type parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsx)(r.tr,{children:(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Type parameter"})})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsx)(r.tr,{children:(0,t.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,t.jsx)(r.code,{children:"RG"})," ",(0,t.jsx)(r.em,{children:"extends"})," ",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/type-aliases/RuleGroupTypeAny",children:(0,t.jsx)(r.code,{children:"RuleGroupTypeAny"})})]})}),(0,t.jsx)(r.tr,{children:(0,t.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,t.jsx)(r.code,{children:"F"})," ",(0,t.jsx)(r.em,{children:"extends"})," ",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/interfaces/FullField",children:(0,t.jsx)(r.code,{children:"FullField"})}),"<",(0,t.jsx)(r.code,{children:"string"}),", ",(0,t.jsx)(r.code,{children:"string"}),", ",(0,t.jsx)(r.code,{children:"string"}),", ",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/interfaces/Option",children:(0,t.jsx)(r.code,{children:"Option"})}),"<",(0,t.jsx)(r.code,{children:"string"}),">, ",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/interfaces/Option",children:(0,t.jsx)(r.code,{children:"Option"})}),"<",(0,t.jsx)(r.code,{children:"string"}),">>"]})}),(0,t.jsx)(r.tr,{children:(0,t.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,t.jsx)(r.code,{children:"O"})," ",(0,t.jsx)(r.em,{children:"extends"})," ",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/interfaces/FullOperator",children:(0,t.jsx)(r.code,{children:"FullOperator"})}),"<",(0,t.jsx)(r.code,{children:"string"}),">"]})}),(0,t.jsx)(r.tr,{children:(0,t.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,t.jsx)(r.code,{children:"C"})," ",(0,t.jsx)(r.em,{children:"extends"})," ",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/interfaces/FullCombinator",children:(0,t.jsx)(r.code,{children:"FullCombinator"})}),"<",(0,t.jsx)(r.code,{children:"string"}),">"]})})]})]}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Parameter"}),(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"props"})}),(0,t.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,t.jsx)(r.a,{href:"/api/react-querybuilder/type-aliases/QueryBuilderProps",children:(0,t.jsx)(r.code,{children:"QueryBuilderProps"})}),"<",(0,t.jsx)(r.code,{children:"RG"}),", ",(0,t.jsx)(r.code,{children:"F"}),", ",(0,t.jsx)(r.code,{children:"O"}),", ",(0,t.jsx)(r.code,{children:"C"}),">"]})]})})]}),"\n",(0,t.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"object"})}),"\n",(0,t.jsx)(r.h3,{id:"combinators",children:"combinators"}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"combinators"}),": ",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/type-aliases/WithUnknownIndex",children:(0,t.jsx)(r.code,{children:"WithUnknownIndex"})})," <",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/interfaces/BaseOption",children:(0,t.jsx)(r.code,{children:"BaseOption"})}),"<",(0,t.jsx)(r.code,{children:"string"}),"> & ",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/interfaces/FullOption",children:(0,t.jsx)(r.code,{children:"FullOption"})}),"<",(0,t.jsx)(r.code,{children:"string"}),">>[] | ",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/interfaces/OptionGroup",children:(0,t.jsx)(r.code,{children:"OptionGroup"})})," <",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/type-aliases/WithUnknownIndex",children:(0,t.jsx)(r.code,{children:"WithUnknownIndex"})})," <",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/interfaces/BaseOption",children:(0,t.jsx)(r.code,{children:"BaseOption"})}),"<",(0,t.jsx)(r.code,{children:"string"}),"> & ",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/interfaces/FullOption",children:(0,t.jsx)(r.code,{children:"FullOption"})}),"<",(0,t.jsx)(r.code,{children:"string"}),">>>[]"]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"createrule",children:"createRule()"}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"createRule"}),": () => ",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/type-aliases/GetRuleTypeFromGroupWithFieldAndOperator",children:(0,t.jsx)(r.code,{children:"GetRuleTypeFromGroupWithFieldAndOperator"})}),"<",(0,t.jsx)(r.code,{children:"RG"}),", ",(0,t.jsx)(r.code,{children:"F"}),", ",(0,t.jsx)(r.code,{children:"O"}),">"]}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"returns-1",children:"Returns"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/api/react-querybuilder/type-aliases/GetRuleTypeFromGroupWithFieldAndOperator",children:(0,t.jsx)(r.code,{children:"GetRuleTypeFromGroupWithFieldAndOperator"})}),"<",(0,t.jsx)(r.code,{children:"RG"}),", ",(0,t.jsx)(r.code,{children:"F"}),", ",(0,t.jsx)(r.code,{children:"O"}),">"]}),"\n",(0,t.jsx)(r.h3,{id:"createrulegroup",children:"createRuleGroup()"}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"createRuleGroup"}),": (",(0,t.jsx)(r.code,{children:"independentCombinators"}),"?) => ",(0,t.jsx)(r.code,{children:"RG"})]}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Parameter"}),(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,t.jsx)(r.code,{children:"independentCombinators"}),"?"]}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"boolean"})})]})})]}),"\n",(0,t.jsx)(r.h4,{id:"returns-2",children:"Returns"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"RG"})}),"\n",(0,t.jsx)(r.h3,{id:"fieldmap",children:"fieldMap"}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"fieldMap"}),": ",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/type-aliases/FullOptionMap",children:(0,t.jsx)(r.code,{children:"FullOptionMap"})})," <",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/interfaces/FullField",children:(0,t.jsx)(r.code,{children:"FullField"})}),"<",(0,t.jsx)(r.code,{children:"string"}),", ",(0,t.jsx)(r.code,{children:"string"}),", ",(0,t.jsx)(r.code,{children:"string"}),", ",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/interfaces/Option",children:(0,t.jsx)(r.code,{children:"Option"})}),"<",(0,t.jsx)(r.code,{children:"string"}),">, ",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/interfaces/Option",children:(0,t.jsx)(r.code,{children:"Option"})}),"<",(0,t.jsx)(r.code,{children:"string"}),">>, ",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/type-aliases/GetOptionIdentifierType",children:(0,t.jsx)(r.code,{children:"GetOptionIdentifierType"})}),"<",(0,t.jsx)(r.code,{children:"F"}),">>"]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"fields",children:"fields"}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"fields"}),": ",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/type-aliases/FullOptionList",children:(0,t.jsx)(r.code,{children:"FullOptionList"})}),"<",(0,t.jsx)(r.code,{children:"F"}),">"]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"getinputtypemain",children:"getInputTypeMain()"}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"getInputTypeMain"}),": (",(0,t.jsx)(r.code,{children:"field"}),", ",(0,t.jsx)(r.code,{children:"operator"}),", ",(0,t.jsx)(r.code,{children:"__namedParameters"}),") => ",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/type-aliases/InputType",children:(0,t.jsx)(r.code,{children:"InputType"})})]}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Parameter"}),(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"field"})}),(0,t.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,t.jsx)(r.a,{href:"/api/react-querybuilder/type-aliases/GetOptionIdentifierType",children:(0,t.jsx)(r.code,{children:"GetOptionIdentifierType"})}),"<",(0,t.jsx)(r.code,{children:"F"}),">"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"operator"})}),(0,t.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,t.jsx)(r.a,{href:"/api/react-querybuilder/type-aliases/GetOptionIdentifierType",children:(0,t.jsx)(r.code,{children:"GetOptionIdentifierType"})}),"<",(0,t.jsx)(r.code,{children:"O"}),">"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"__namedParameters"})}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"object"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"__namedParameters.fieldData"})}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"F"})})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"returns-3",children:"Returns"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/api/react-querybuilder/type-aliases/InputType",children:(0,t.jsx)(r.code,{children:"InputType"})})}),"\n",(0,t.jsx)(r.h3,{id:"getoperatorsmain",children:"getOperatorsMain()"}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"getOperatorsMain"}),": (",(0,t.jsx)(r.code,{children:"field"}),", ",(0,t.jsx)(r.code,{children:"__namedParameters"}),") => ",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/type-aliases/FullOptionList",children:(0,t.jsx)(r.code,{children:"FullOptionList"})}),"<",(0,t.jsx)(r.code,{children:"O"}),">"]}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Parameter"}),(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"field"})}),(0,t.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,t.jsx)(r.a,{href:"/api/react-querybuilder/type-aliases/GetOptionIdentifierType",children:(0,t.jsx)(r.code,{children:"GetOptionIdentifierType"})}),"<",(0,t.jsx)(r.code,{children:"F"}),">"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"__namedParameters"})}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"object"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"__namedParameters.fieldData"})}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"F"})})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"returns-4",children:"Returns"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/api/react-querybuilder/type-aliases/FullOptionList",children:(0,t.jsx)(r.code,{children:"FullOptionList"})}),"<",(0,t.jsx)(r.code,{children:"O"}),">"]}),"\n",(0,t.jsx)(r.h3,{id:"getruledefaultoperator",children:"getRuleDefaultOperator()"}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"getRuleDefaultOperator"}),": (",(0,t.jsx)(r.code,{children:"field"}),") => ",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/type-aliases/GetOptionIdentifierType",children:(0,t.jsx)(r.code,{children:"GetOptionIdentifierType"})}),"<",(0,t.jsx)(r.code,{children:"O"}),">"]}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Parameter"}),(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"field"})}),(0,t.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,t.jsx)(r.a,{href:"/api/react-querybuilder/type-aliases/GetOptionIdentifierType",children:(0,t.jsx)(r.code,{children:"GetOptionIdentifierType"})}),"<",(0,t.jsx)(r.code,{children:"F"}),">"]})]})})]}),"\n",(0,t.jsx)(r.h4,{id:"returns-5",children:"Returns"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/api/react-querybuilder/type-aliases/GetOptionIdentifierType",children:(0,t.jsx)(r.code,{children:"GetOptionIdentifierType"})}),"<",(0,t.jsx)(r.code,{children:"O"}),">"]}),"\n",(0,t.jsx)(r.h3,{id:"getruledefaultvalue",children:"getRuleDefaultValue()"}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"getRuleDefaultValue"}),": <",(0,t.jsx)(r.code,{children:"RT"}),">(",(0,t.jsx)(r.code,{children:"r"}),") => ",(0,t.jsx)(r.code,{children:"any"})]}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"type-parameters-1",children:"Type parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Type parameter"}),(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Value"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,t.jsx)(r.code,{children:"RT"})," ",(0,t.jsx)(r.em,{children:"extends"})," ",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/interfaces/RuleType",children:(0,t.jsx)(r.code,{children:"RuleType"})}),"<",(0,t.jsx)(r.code,{children:"string"}),", ",(0,t.jsx)(r.code,{children:"string"}),", ",(0,t.jsx)(r.code,{children:"any"}),", ",(0,t.jsx)(r.code,{children:"string"}),">"]}),(0,t.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,t.jsx)(r.a,{href:"/api/react-querybuilder/type-aliases/GetRuleTypeFromGroupWithFieldAndOperator",children:(0,t.jsx)(r.code,{children:"GetRuleTypeFromGroupWithFieldAndOperator"})}),"<",(0,t.jsx)(r.code,{children:"RG"}),", ",(0,t.jsx)(r.code,{children:"F"}),", ",(0,t.jsx)(r.code,{children:"O"}),">"]})]})})]}),"\n",(0,t.jsx)(r.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Parameter"}),(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"r"})}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"RT"})})]})})]}),"\n",(0,t.jsx)(r.h4,{id:"returns-6",children:"Returns"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"any"})}),"\n",(0,t.jsx)(r.h3,{id:"getvalueeditortypemain",children:"getValueEditorTypeMain()"}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"getValueEditorTypeMain"}),": (",(0,t.jsx)(r.code,{children:"field"}),", ",(0,t.jsx)(r.code,{children:"operator"}),", ",(0,t.jsx)(r.code,{children:"__namedParameters"}),") => ",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/type-aliases/ValueEditorType",children:(0,t.jsx)(r.code,{children:"ValueEditorType"})})]}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"parameters-6",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Parameter"}),(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"field"})}),(0,t.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,t.jsx)(r.a,{href:"/api/react-querybuilder/type-aliases/GetOptionIdentifierType",children:(0,t.jsx)(r.code,{children:"GetOptionIdentifierType"})}),"<",(0,t.jsx)(r.code,{children:"F"}),">"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"operator"})}),(0,t.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,t.jsx)(r.a,{href:"/api/react-querybuilder/type-aliases/GetOptionIdentifierType",children:(0,t.jsx)(r.code,{children:"GetOptionIdentifierType"})}),"<",(0,t.jsx)(r.code,{children:"O"}),">"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"__namedParameters"})}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"object"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"__namedParameters.fieldData"})}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"F"})})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"returns-7",children:"Returns"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/api/react-querybuilder/type-aliases/ValueEditorType",children:(0,t.jsx)(r.code,{children:"ValueEditorType"})})}),"\n",(0,t.jsx)(r.h3,{id:"getvaluesourcesmain",children:"getValueSourcesMain()"}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"getValueSourcesMain"}),": (",(0,t.jsx)(r.code,{children:"field"}),", ",(0,t.jsx)(r.code,{children:"operator"}),") => ",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/type-aliases/ValueSources",children:(0,t.jsx)(r.code,{children:"ValueSources"})})]}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"parameters-7",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Parameter"}),(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"field"})}),(0,t.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,t.jsx)(r.a,{href:"/api/react-querybuilder/type-aliases/GetOptionIdentifierType",children:(0,t.jsx)(r.code,{children:"GetOptionIdentifierType"})}),"<",(0,t.jsx)(r.code,{children:"F"}),">"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"operator"})}),(0,t.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,t.jsx)(r.a,{href:"/api/react-querybuilder/type-aliases/GetOptionIdentifierType",children:(0,t.jsx)(r.code,{children:"GetOptionIdentifierType"})}),"<",(0,t.jsx)(r.code,{children:"O"}),">"]})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"returns-8",children:"Returns"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/api/react-querybuilder/type-aliases/ValueSources",children:(0,t.jsx)(r.code,{children:"ValueSources"})})}),"\n",(0,t.jsx)(r.h3,{id:"getvaluesmain",children:"getValuesMain()"}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"getValuesMain"}),": (",(0,t.jsx)(r.code,{children:"field"}),", ",(0,t.jsx)(r.code,{children:"operator"}),", ",(0,t.jsx)(r.code,{children:"__namedParameters"}),") => ",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/type-aliases/WithUnknownIndex",children:(0,t.jsx)(r.code,{children:"WithUnknownIndex"})})," <",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/interfaces/BaseOption",children:(0,t.jsx)(r.code,{children:"BaseOption"})}),"<",(0,t.jsx)(r.code,{children:"string"}),"> & ",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/interfaces/FullOption",children:(0,t.jsx)(r.code,{children:"FullOption"})}),"<",(0,t.jsx)(r.code,{children:"string"}),">>[] | ",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/interfaces/OptionGroup",children:(0,t.jsx)(r.code,{children:"OptionGroup"})})," <",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/type-aliases/WithUnknownIndex",children:(0,t.jsx)(r.code,{children:"WithUnknownIndex"})})," <",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/interfaces/BaseOption",children:(0,t.jsx)(r.code,{children:"BaseOption"})}),"<",(0,t.jsx)(r.code,{children:"string"}),"> & ",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/interfaces/FullOption",children:(0,t.jsx)(r.code,{children:"FullOption"})}),"<",(0,t.jsx)(r.code,{children:"string"}),">>>[]"]}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"parameters-8",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Parameter"}),(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"field"})}),(0,t.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,t.jsx)(r.a,{href:"/api/react-querybuilder/type-aliases/GetOptionIdentifierType",children:(0,t.jsx)(r.code,{children:"GetOptionIdentifierType"})}),"<",(0,t.jsx)(r.code,{children:"F"}),">"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"operator"})}),(0,t.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,t.jsx)(r.a,{href:"/api/react-querybuilder/type-aliases/GetOptionIdentifierType",children:(0,t.jsx)(r.code,{children:"GetOptionIdentifierType"})}),"<",(0,t.jsx)(r.code,{children:"O"}),">"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"__namedParameters"})}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"object"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"__namedParameters.fieldData"})}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"F"})})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"returns-9",children:"Returns"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/api/react-querybuilder/type-aliases/WithUnknownIndex",children:(0,t.jsx)(r.code,{children:"WithUnknownIndex"})})," <",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/interfaces/BaseOption",children:(0,t.jsx)(r.code,{children:"BaseOption"})}),"<",(0,t.jsx)(r.code,{children:"string"}),"> & ",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/interfaces/FullOption",children:(0,t.jsx)(r.code,{children:"FullOption"})}),"<",(0,t.jsx)(r.code,{children:"string"}),">>[] | ",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/interfaces/OptionGroup",children:(0,t.jsx)(r.code,{children:"OptionGroup"})})," <",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/type-aliases/WithUnknownIndex",children:(0,t.jsx)(r.code,{children:"WithUnknownIndex"})})," <",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/interfaces/BaseOption",children:(0,t.jsx)(r.code,{children:"BaseOption"})}),"<",(0,t.jsx)(r.code,{children:"string"}),"> & ",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/interfaces/FullOption",children:(0,t.jsx)(r.code,{children:"FullOption"})}),"<",(0,t.jsx)(r.code,{children:"string"}),">>>[]"]}),"\n",(0,t.jsx)(r.h3,{id:"qbid",children:"qbId"}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"qbId"}),": ",(0,t.jsx)(r.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"rqbcontext",children:"rqbContext"}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"rqbContext"}),": ",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/type-aliases/UseMergedContextReturn",children:(0,t.jsx)(r.code,{children:"UseMergedContextReturn"})}),"<",(0,t.jsx)(r.code,{children:"F"}),", ",(0,t.jsx)(r.a,{href:"/api/react-querybuilder/type-aliases/GetOptionIdentifierType",children:(0,t.jsx)(r.code,{children:"GetOptionIdentifierType"})}),"<",(0,t.jsx)(r.code,{children:"O"}),">>"]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"source",children:"Source"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/blob/3ef52242bc194b68f08340cd417e5e5332c2a800/packages/react-querybuilder/src/hooks/useQueryBuilderSetup.ts#L56",children:"packages/react-querybuilder/src/hooks/useQueryBuilderSetup.ts:56"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.admonition,{type:"caution",children:(0,t.jsxs)(r.p,{children:["API documentation is generated from the latest commit on the ",(0,t.jsxs)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/tree/main",children:[(0,t.jsx)(r.code,{children:"main"})," branch"]}),". It may be somewhat inconsistent with official releases of React Query Builder."]})})]})}function x(e={}){const{wrapper:r}={...(0,l.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},65404:(e,r,i)=>{i.d(r,{R:()=>d,x:()=>s});var t=i(63696);const l={},n=t.createContext(l);function d(e){const r=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),t.createElement(n.Provider,{value:r},e.children)}}}]);