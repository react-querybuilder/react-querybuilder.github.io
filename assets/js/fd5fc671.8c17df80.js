"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4842],{65363:(e,t,r)=>{r.d(t,{Z:()=>he});var a=r(83117),o=r(88746),n=r(76775),l=r(9320),i=r(73275),s=r(30433),u=r(65559),m=r(86010),d=r(17563),c=r(67294),p=r(61236);const b=[{label:"Percussion instruments",instruments:["Clapstick","Cowbell","Cymbal","Gong","Maraca","Marimba","Spoon","Steelpan","Tambourine","Triangle","Vibraphone","Washboard","Wood block","Wooden fish","Xylophone"]},{label:"Membranophones",instruments:["Barrel drum","Bass drum","Bongo drums","Conga","Drum","Drum kit","Jew's harp","Octaban","Samphor","Snare drum","Timpani","Tom-tom"]},{label:"Wind instruments",instruments:["Accordion","Air horn","Bagpipe","Baritone horn","Bassoon","Bazooka","Beatboxing","Blown bottle","Bugle","Clarinet","Conch","Cornet","Didgeridoo","Double bell euphonium","Doulophone","English horn","Euphonium","Flugelhorn","Flute","French horn","Harmonica","Irish flute","Jug","Kazoo","Melodeon","Mezzo-soprano","Oboe","Ocarina","Pan flute","Piccolo","Pipe organ","Recorder","Saxophone","Slide whistle","Sousaphone","Trombone","Trumpet","Tuba","Whistle"]},{label:"Stringed instruments",instruments:["Aeolian harp","Bandolin","Banjo ukulele","Cello","Chapman stick","Clavichord","Clavinet","Double bass","Dulcimer","Fiddle","Guitar","Hammered dulcimer","Harp","Harpsichord","Lute","Lyre","Maguhu","Mandola","Mandolin","Octobass","Piano","Sitar","Ukulele","Viol","Violin","Washtub bass"]},{label:"Electronic instruments",instruments:["AlphaSphere","Audiocubes","Bass pedals","Continuum Fingerboard","Croix Sonore","Denis d'or","Dubreq stylophone","Drum machine","Eigenharp","Electric guitar","Electronic keyboard","Electronic organ","EWI","Fingerboard synthesizer","Hammond organ","Keyboard","Keytar","Kraakdoos","Laser harp","Mellotron","MIDI keyboard","Omnichord","Ondes Martenot","Otamatone","Sampler","Seaboard music instrument","Skoog","Synclavier","Synthesizer","Teleharmonium","Tenori-on","Theremin","trautonium","Turntablism","Turntable"]}].map((e=>{let{label:t,instruments:r}=e;return{label:t,options:r.map((e=>({name:e,label:e})))}})),h=e=>!!e.value,g=[{name:"firstName",label:"First Name",placeholder:"Enter first name",validator:h},{name:"lastName",label:"Last Name",placeholder:"Enter last name",defaultOperator:"beginsWith",validator:h},{name:"age",label:"Age",inputType:"number",validator:h},{name:"isMusician",label:"Is a musician",valueEditorType:"checkbox",operators:p._z.filter((e=>"="===e.name)),defaultValue:!1},{name:"instrument",label:"Primary instrument",valueEditorType:"select",values:b,defaultValue:"Piano",operators:p._z.filter((e=>"="===e.name||"in"===e.name))},{name:"alsoPlaysInstruments",label:"Also plays instruments",valueEditorType:"multiselect",values:b,defaultValue:"Guitar",operators:p._z.filter((e=>"in"===e.name))},{name:"gender",label:"Gender",operators:p._z.filter((e=>"="===e.name)),valueEditorType:"radio",values:[{name:"M",label:"Male"},{name:"F",label:"Female"},{name:"O",label:"Other"}]},{name:"height",label:"Height",validator:h},{name:"job",label:"Job",validator:h},{name:"description",label:"Description",valueEditorType:"textarea"},{name:"birthdate",label:"Birth Date",inputType:"date"},{name:"datetime",label:"Show Time",inputType:"datetime-local"},{name:"alarm",label:"Daily Alarm",inputType:"time"},{name:"groupedField1",label:"Grouped Field 1",comparator:"group",group:"group1",valueSources:["field","value"]},{name:"groupedField2",label:"Grouped Field 2",comparator:"group",group:"group1",valueSources:["field","value"]},{name:"groupedField3",label:"Grouped Field 3",comparator:"group",group:"group1",valueSources:["field","value"]},{name:"groupedField4",label:"Grouped Field 4",comparator:"group",group:"group1",valueSources:["field","value"]}],y={showCombinatorsBetweenRules:!1,showNotToggle:!1,showCloneButtons:!1,showLockButtons:!1,resetOnFieldChange:!0,resetOnOperatorChange:!1,autoSelectField:!0,autoSelectOperator:!0,addRuleToNewGroups:!1,validateQuery:!1,independentCombinators:!1,listsAsArrays:!1,enableDragAndDrop:!1,disabled:!1,debugMode:!1,parseNumbers:!1,justifiedLayout:!1},f=["showCombinatorsBetweenRules","showNotToggle","showCloneButtons","showLockButtons","resetOnFieldChange","resetOnOperatorChange","autoSelectField","autoSelectOperator","addRuleToNewGroups","validateQuery","independentCombinators","listsAsArrays","enableDragAndDrop","disabled","debugMode","parseNumbers","justifiedLayout"],v={showCombinatorsBetweenRules:{link:"/docs/api/querybuilder#showcombinatorsbetweenrules",label:"Combinators between rules",title:"Display combinator (and/or) selectors between rules instead of in the group header"},showNotToggle:{link:"/docs/api/querybuilder#shownottoggle",label:'Show "not" toggle',title:'Display a checkbox to invert a group\'s rules (labelled "Not" by default)'},showCloneButtons:{link:"/docs/api/querybuilder#showclonebuttons",label:"Show clone buttons",title:"Display buttons to clone rules and groups"},resetOnFieldChange:{link:"/docs/api/querybuilder#resetonfieldchange",label:"Reset on field change",title:"Operator and value will be reset when a rule's field selection changes"},resetOnOperatorChange:{link:"/docs/api/querybuilder#resetonoperatorchange",label:"Reset on operator change",title:"The value will reset when the operator changes"},autoSelectField:{link:"/docs/api/querybuilder#autoselectfield",label:"Auto-select field",title:"The default field will be automatically selected for new rules"},autoSelectOperator:{link:"/docs/api/querybuilder#autoselectoperator",label:"Auto-select operator",title:"The default operator will be automatically selected for new rules"},addRuleToNewGroups:{link:"/docs/api/querybuilder#addruletonewgroups",label:"Add rule to new groups",title:"A rule will be automatically added to new groups"},validateQuery:{link:"/docs/api/validation",label:"Use validation",title:'The validator function(s) will be used to bold the "+Rule" button for empty groups and put a purple background on empty text fields and emtpy groups'},independentCombinators:{link:"/docs/api/querybuilder#independentcombinators",label:"Independent combinators",title:"Combinators between rules can be independently updated"},listsAsArrays:{link:"/docs/api/querybuilder#listsasarrays",label:"Lists as arrays",title:"Lists will be stored as arrays instead of comma-separated strings"},enableDragAndDrop:{link:"/docs/api/querybuilder#enabledraganddrop",label:"Drag-and-drop enabled",title:"Rules and groups can be reordered and dragged to different groups"},disabled:{link:"/docs/api/querybuilder#disabled",label:"Disabled",title:"Disable all components within the query builder"},showLockButtons:{link:"/docs/api/querybuilder#showlockbuttons",label:"Show lock buttons",title:"Display buttons to lock/disable rules and groups"},debugMode:{link:"/docs/api/querybuilder#debugmode",label:"Debug mode",title:"Enable debug logging for QueryBuilder and React DnD (see console)"},parseNumbers:{link:"/docs/api/export#parsing-numbers",label:"Parse numbers",title:"Parse real numbers from strings in rule values"},justifiedLayout:{link:"",label:"Justified layout",title:'Add custom CSS to push the "clone", "lock", and "remove" buttons to the right edge'}},E=f.sort(((e,t)=>v[e].label.localeCompare(v[t].label))),k=((0,p.uP)({combinator:"and",rules:[]}),{id:""+Math.random(),combinator:"and",not:!1,rules:[{id:""+Math.random(),field:"firstName",value:"Stev",operator:"beginsWith"},{id:""+Math.random(),field:"lastName",value:"Vai, Vaughan",operator:"in"},{id:""+Math.random(),field:"age",operator:">",value:"28"},{id:""+Math.random(),combinator:"or",rules:[{id:""+Math.random(),field:"isMusician",operator:"=",value:!0},{id:""+Math.random(),field:"instrument",operator:"=",value:"Guitar"}]},{field:"groupedField1",operator:"=",value:"groupedField4",valueSource:"field"},{field:"birthdate",value:"1969-06-01",operator:"<"}]}),w=(0,p.uP)(k),C=[["sql","SQL","https://en.wikipedia.org/wiki/SQL"],["parameterized","SQL (parameterized)","https://en.wikipedia.org/wiki/SQL"],["parameterized_named","SQL (named parameters)","https://en.wikipedia.org/wiki/SQL"],["json_without_ids","JSON (no identifiers)","https://en.wikipedia.org/wiki/JSON"],["json","JSON","https://en.wikipedia.org/wiki/JSON"],["mongodb","MongoDB","https://www.mongodb.com/"],["cel","CEL","https://github.com/google/cel-spec"],["spel","SpEL","https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#expressions-language-ref"],["jsonlogic","JsonLogic","https://jsonlogic.com/"]],S={default:"Default",bootstrap:"Bootstrap",material:"MUI/Material",antd:"Ant Design",chakra:"Chakra UI",bulma:"Bulma"},{default:D,...B}=S,M=["default",...(0,p.Yd)(B).sort()];var T=r(48764),x=r(27885),O=r(96336),q=r(43005),N=r(84034);const L=e=>{var t;let{s:r,...a}=e,o=null;r&&(o=(e=>{const t=T.lW.from(e,"base64"),r=x.ZP.inflate(t,{to:"string"});return JSON.parse(r)})(r));const n=Object.fromEntries(Object.entries(a).map((e=>{let[t,r]=e;return[t,"true"===r]})));return{...o,options:{...null==(t=o)?void 0:t.options,...n}}},Q=(e,t)=>{if("reset"===t.type)return y;if("all"===t.type){const e={...y};for(const t of f)e[t]="disabled"!==t&&"independentCombinators"!==t;return e}if("replace"===t.type)return t.payload;const{optionName:r,value:a}=t.payload;return{...e,[r]:a}},F=e=>"sql"===e||"cel"===e||"spel"===e?e:"json",I="demoLayout_QhYR",A="demoSidebarHeader_WVGK",R="demoOption_DiUA",P="demoOptionCommands_K7rK",Z="demoImportCommands_fM9N",G="wsPreWrap_DXzD";var _=r(70524),j=r(83253),z=r.n(j);const J=document.body;function W(e){let{heading:t,isOpen:r,setIsOpen:a,code:o,setCode:n,error:l,loadQueryFromCode:i,notes:s}=e;const{colorMode:u}=(0,_.I)();return c.createElement(z(),{appElement:J,contentLabel:t,isOpen:r,onRequestClose:()=>a(!1),style:(m="dark"===u,{overlay:{backgroundColor:m?"rgba(0 0 0 / 75%)":"rgba(255 255 255 / 75%)",display:"flex",alignContent:"flex-start",justifyContent:"center",alignItems:"flex-start",paddingTop:"calc(var(--ifm-navbar-height) + var(--ifm-global-spacing))"},content:{inset:"unset",padding:"var(--ifm-global-spacing)",maxWidth:"800px",display:"flex",flexDirection:"column",gap:"var(--ifm-global-spacing)",boxShadow:"4px 4px 12px 4px rgb(0 0 0 / 26%)",backgroundColor:m?"var(--ifm-background-color)":"#ffffff"}})},c.createElement("h3",{style:{margin:"unset"}},t,c.createElement("span",{style:{cursor:"pointer",float:"right"},onClick:()=>a(!1)},"\u2715")),c.createElement("textarea",{style:{height:160,minWidth:690,width:"100%"},spellCheck:!1,value:o,onChange:e=>n(e.target.value)}),s&&c.createElement("p",{style:{fontSize:"smaller",margin:"unset"}},s),c.createElement("div",{style:{display:"flex",justifyContent:"flex-end",gap:"var(--ifm-global-spacing)"}},c.createElement("button",{type:"button",onClick:()=>i()},t),c.createElement("button",{type:"button",onClick:()=>a(!1)},"Cancel")),!!l&&c.createElement("pre",null,l));var m}function V(){return c.createElement("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},c.createElement("title",null,"Open a live example in CodeSandbox"),c.createElement("path",{d:"M1.5 6l10.455-6L22.41 6l.09 11.95L11.955 24 1.5 18zm2.088 2.481v4.757l3.345 1.86v3.516l3.972 2.296v-8.272zm16.739 0l-7.317 4.157v8.272l3.972-2.296V15.1l3.345-1.861V8.48zM4.634 6.601l7.303 4.144 7.32-4.18-3.871-2.197-3.41 1.945-3.43-1.968L4.633 6.6z"}))}function H(){return c.createElement("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},c.createElement("title",null,"Open a live example in StackBlitz"),c.createElement("path",{d:"M10.797 14.182H3.635L16.728 0l-3.525 9.818h7.162L7.272 24l3.524-9.818Z"}))}const U="demoNav_zlnx",K="demoNavPackageLinks_wCVv",$="demoNavStyleLinks_fSsZ",X="demoNavPackageLink_vuDC";function Y(e){let{variant:t,compressedState:r,dnd:a}=e;const o=(0,n.TH)(),l=(0,c.useMemo)((()=>["react-querybuilder",..."default"===t?[]:["@react-querybuilder/"+t],...a?["@react-querybuilder/dnd"]:[]]),[a,t]);return c.createElement("div",{className:U},c.createElement("div",{className:K},c.createElement("a",{href:"https://codesandbox.io/s/github/react-querybuilder/react-querybuilder/tree/main/examples/"+("default"===t?"basic-ts":t)+"?file=/src/App.tsx",className:"svg-font-color",target:"_blank",rel:"noreferrer",style:{minWidth:"1rem"}},c.createElement(V,null)),c.createElement("a",{href:"https://stackblitz.com/github/react-querybuilder/react-querybuilder/tree/main/examples/"+("default"===t?"basic-ts":t)+"?file=src/App.tsx",className:"svg-font-color",target:"_blank",rel:"noreferrer",style:{minWidth:"1rem"}},c.createElement(H,null)),c.createElement("span",null,l.map(((e,t)=>c.createElement(c.Fragment,{key:e},t>0?", ":null,c.createElement("a",{href:"https://www.npmjs.com/package/"+e,target:"_blank",rel:"noreferrer",className:X},e)))))),c.createElement("div",{className:$},M.map((e=>{if(t===e)return c.createElement("span",{key:e},S[e]);const a=o.pathname.replace(RegExp("\\/"+t+"$"),"")+("default"===e?"":"/"+e)+(r?"#s="+r:"");return c.createElement("a",{key:e,href:a},S[e])}))))}var ee,te;const re="\u24d8",ae=L(d.parse(location.hash)),oe=ae.options,ne=null!=(ee=ae.query)?ee:k,le=null!=(te=ae.queryIC)?te:w,ie="SELECT *\n  FROM my_table\n WHERE "+(0,p.x9)(ne,"sql")+";",se=JSON.stringify({firstName:{$regex:"^Stev"},age:{$gt:28}},null,2),ue=JSON.stringify((0,p.x9)(ne,"jsonlogic"),null,2),me="Copy link",de=c.createElement("em",null,"SQL can either be the full ",c.createElement("code",null,"SELECT")," statement or the ",c.createElement("code",null,"WHERE")," clause by itself. Trailing semicolon is optional."),ce=c.createElement("em",null,"Input must conform to the ",c.createElement("a",{href:"https://www.json.org/"},"JSON specification"),". MongoDB queries support an extended JSON format, so you may need to pre-parse query strings with a library like"," ",c.createElement("a",{href:"https://www.npmjs.com/package/mongodb-query-parser"},c.createElement("code",null,"mongodb-query-parser")),"before submitting them here or passing them to ",c.createElement("code",null,"parseMongoDB"),"."),pe=c.createElement("em",null,"Only strings that evaluate to JavaScript objects when processed with ",c.createElement("code",null,"JSON.parse")," ","will translate into queries."),be=e=>c.createElement(c.Fragment,null,e.children);function he(e){let{variant:t="default",queryWrapper:r=be}=e;const b=(0,n.TH)(),[h,f]=(0,c.useState)(ne),[k,w]=(0,c.useState)(le),[S,D]=(0,c.useState)("json_without_ids"),[B,M]=(0,c.useReducer)(Q,{...y,...oe}),[_,j]=(0,c.useState)(!1),[z,J]=(0,c.useState)(ie),[V,H]=(0,c.useState)(""),[U,K]=(0,c.useState)(!1),[$,X]=(0,c.useState)(se),[ee,te]=(0,c.useState)(""),[ae,he]=(0,c.useState)(!1),[ge,ye]=(0,c.useState)('firstName.startsWith("Stev") && age > 28'),[fe,ve]=(0,c.useState)(""),[Ee,ke]=(0,c.useState)(!1),[we,Ce]=(0,c.useState)(ue),[Se,De]=(0,c.useState)(""),[Be,Me]=(0,c.useState)(me),Te=(0,c.useMemo)((()=>"#"+d.stringify(B)),[B]),xe=(0,c.useCallback)((e=>{var t;const r=L(d.parse(null!=(t=d.parseUrl(e.newURL,{parseFragmentIdentifier:!0}).fragmentIdentifier)?t:"")),a={...y,...r.options};M({type:"replace",payload:a}),r.query&&f(r.query),r.queryIC&&w(r.queryIC)}),[]);(0,c.useEffect)((()=>(history.pushState(null,"",Te),window.addEventListener("hashchange",xe),()=>window.removeEventListener("hashchange",xe))),[Te,xe]);const Oe=(0,c.useMemo)((()=>E.map((e=>({...v[e],default:y[e],checked:B[e],setter:t=>M({type:"update",payload:{optionName:e,value:t}})})))),[B]),qe=(0,c.useMemo)((()=>({format:S,fields:B.validateQuery?g:void 0,parseNumbers:B.parseNumbers})),[S,B.parseNumbers,B.validateQuery]),Ne=B.independentCombinators?k:h,Le=(0,c.useMemo)((()=>((e,t)=>{const r=(0,p.x9)(e,t);return"json_without_ids"===t.format||"mongodb"===t.format?JSON.stringify(JSON.parse(r),null,2):"parameterized"===t.format||"parameterized_named"===t.format||"jsonlogic"===t.format?JSON.stringify(r,null,2):r})(Ne,qe)),[qe,Ne]),Qe=(0,c.useMemo)((()=>((e,t)=>{const r="RuleGroupType"+(e.independentCombinators?"IC":""),a=e.enableDragAndDrop?"  ":"",o=t&&"default"!==t?"  ":"",[n,l,i]=(e=>{switch(e){case"antd":return["import { QueryBuilderAntD } from '@react-querybuilder/antd';","<QueryBuilderAntD>","</QueryBuilderAntD>"];case"bootstrap":return["import { QueryBuilderBootstrap } from '@react-querybuilder/bootstrap';\nimport 'bootstrap-icons/font/bootstrap-icons.scss';\nimport 'bootstrap/scss/bootstrap.scss';","<QueryBuilderBootstrap>","</QueryBuilderBootstrap>"];case"bulma":return["import { QueryBuilderBulma } from '@react-querybuilder/bulma';\nimport 'bulma/bulma.sass';","<QueryBuilderBulma>","</QueryBuilderBulma>"];case"chakra":return["import { QueryBuilderChakra } from '@react-querybuilder/chakra';\nimport { ChakraProvider, extendTheme } from '@chakra-ui/react';\n\nconst chakraTheme = extendTheme();","<ChakraProvider theme={chakraTheme}>\n<QueryBuilderChakra>","</QueryBuilderChakra>\n</ChakraProvider>"];case"material":return["import { createTheme, ThemeProvider } from '@mui/material/styles';\nimport { QueryBuilderMaterial } from '@react-querybuilder/material';\nimport Checkbox from '@mui/material/Checkbox';\nimport DragIndicator from '@mui/material/DragIndicator';\nimport FormControl from '@mui/material/FormControl';\nimport FormControlLabel from '@mui/material/FormControlLabel';\nimport Input from '@mui/material/Input';\nimport ListSubheader from '@mui/material/ListSubheader';\nimport MenuItem from '@mui/material/MenuItem';\nimport Radio from '@mui/material/Radio';\nimport RadioGroup from '@mui/material/RadioGroup';\nimport Select from '@mui/material/Select';\nimport Switch from '@mui/material/Switch';\nimport TextareaAutosize from '@mui/material/TextareaAutosize';\n\nconst muiTheme = createTheme();\n\nconst muiComponents = {\n  Checkbox,\n  DragIndicator,\n  FormControl,\n  FormControlLabel,\n  Input,\n  ListSubheader,\n  MenuItem,\n  Radio,\n  RadioGroup,\n  Select,\n  Switch,\n  TextareaAutosize,\n};","<ThemeProvider theme={muiTheme}>\n<QueryBuilderMaterial muiComponents={muiComponents}>","</QueryBuilderMaterial>\n</ThemeProvider>"]}return["","",""]})(t),s=t=>"autoSelectField"===t||"autoSelectOperator"===t||"resetOnFieldChange"===t?e[t]?"":t+"={false}":e[t]?t:"",u=["fields={fields}","query={query}","onQueryChange={q => setQuery(q)}",s("addRuleToNewGroups"),s("autoSelectField"),s("autoSelectOperator"),s("debugMode"),s("disabled"),s("enableDragAndDrop"),s("independentCombinators"),s("listsAsArrays"),s("resetOnFieldChange"),s("resetOnOperatorChange"),s("showCloneButtons"),s("showCombinatorsBetweenRules"),s("showLockButtons"),s("showNotToggle"),e.validateQuery?"validator={defaultValidator}":""].filter(Boolean).map((e=>"\n      "+a+o+e)).join(""),m="import { useState } from 'react';\n"+(e.enableDragAndDrop?"import { QueryBuilderDnD } from '@react-querybuilder/dnd';\nimport * as ReactDnD from 'react-dnd';\nimport * as ReactDndHtml5Backend from 'react-dnd-html5-backend';\n":"")+"import type { "+r+" } from 'react-querybuilder';\nimport {"+(e.validateQuery?"defaultValidator, ":"")+" QueryBuilder } from 'react-querybuilder';\nimport { fields } from './fields';\nimport 'react-querybuilder/dist/query-builder.scss';"+(e.justifiedLayout?"\nimport './styles.scss';":"")+(n?"\n"+n:"")+"\n\nconst initialQuery: "+r+" = {"+(e.independentCombinators?"":" combinator: 'and',")+" rules: [] };\n\nexport const App = () => {\n  const [query, setQuery] = useState(initialQuery);\n\n  return ("+(e.enableDragAndDrop?"<QueryBuilderDnD dnd={{ ...ReactDnD, ...ReactDndHtml5Backend }}>":"")+l+"<QueryBuilder "+u+" />"+i+(e.enableDragAndDrop?"</QueryBuilderDnD>":"")+"\n  );\n}";return N.Z.format(m,{filepath:"App.tsx",plugins:[q.Z],singleQuote:!0})})(B,t)),[B,t]),Fe=(0,c.useMemo)((()=>B.justifiedLayout?N.Z.format(".queryBuilder {\n  // Push the clone, lock, and remove buttons to the right edge\n  .ruleGroup-addGroup + button.ruleGroup-cloneGroup,\n  .ruleGroup-addGroup + button.ruleGroup-lock,\n  .ruleGroup-addGroup + button.ruleGroup-remove,\n  .rule-operators + button.rule-cloneRule,\n  .rule-operators + button.rule-lock,\n  .rule-operators + button.rule-remove,\n  .rule-value + button.rule-cloneRule,\n  .rule-value + button.rule-lock,\n  .rule-value + button.rule-remove,\n  .control + button.rule-cloneRule,\n  .control + button.rule-lock,\n  .control + button.rule-remove,\n  .chakra-select__wrapper + button.rule-cloneRule,\n  .chakra-select__wrapper + button.rule-lock,\n  .chakra-select__wrapper + button.rule-remove {\n    margin-left: auto;\n  }\n}\n",{filepath:"styles.scss",plugins:[O.Z]}):""),[B.justifiedLayout]),Ie=()=>{return encodeURIComponent((e={query:h,queryIC:k,options:B,style:t},T.lW.from(x.ZP.deflate(JSON.stringify(e))).toString("base64")));var e},Ae=(0,c.useMemo)((()=>({fields:g,...B,validator:B.validateQuery?p.Nd:void 0})),[B]),Re="rqb-"+t,Pe=(0,c.useMemo)((()=>(0,m.W)({validateQuery:B.validateQuery,justifiedLayout:B.justifiedLayout},"default"===t?"":"rqb-"+t)),[B.justifiedLayout,B.validateQuery,t]);return c.createElement("div",{className:I},c.createElement("div",null,c.createElement("h3",null,c.createElement(o.Z,{href:"/docs/api/querybuilder",title:"Boolean props on the QueryBuilder component (click for documentation)",className:A},c.createElement("span",null,"Options"),c.createElement("span",null,re))),c.createElement("div",null,Oe.map((e=>{let{checked:t,label:r,link:a,setter:n,title:l}=e;return c.createElement("div",{key:r,className:R},c.createElement("label",null,c.createElement("input",{type:"checkbox",checked:t,onChange:e=>n(e.target.checked)}),r),a?c.createElement(o.Z,{href:""+a,title:l+" (click for documentation)",style:{textDecoration:"none"}},re):c.createElement("span",{title:l,style:{cursor:"pointer"}},re))}))),c.createElement("div",{className:P},c.createElement("div",{title:"Reset the options above to their default values"},c.createElement("button",{type:"button",onClick:()=>M({type:"reset"})},"Reset")),c.createElement("div",{title:'Enable all features except "'+v.disabled.label+'" and "'+v.independentCombinators.label+'"'},c.createElement("button",{type:"button",onClick:()=>M({type:"all"})},"Select all")),c.createElement("div",{title:"Copy a URL that will load this demo with the options set as they are currently"},c.createElement("button",{type:"button",onClick:async()=>{try{await navigator.clipboard.writeText(""+location.origin+b.pathname+"#s="+Ie()),Me("Copied!")}catch(e){console.error("Clipboard error",e)}setTimeout((()=>Me(me)),1214)}},Be))),c.createElement("h3",null,c.createElement(o.Z,{href:"/docs/api/export",title:"The export format of the formatQuery function (click for documentation)",className:A},c.createElement("span",null,"Export"),c.createElement("span",null,re))),c.createElement("div",{style:{marginBottom:"var(--ifm-heading-margin-bottom)"}},C.map((e=>{let[t,r,a]=e;return c.createElement("div",{key:t,style:{display:"flex",justifyContent:"space-between",flexDirection:"row"}},c.createElement("label",null,c.createElement("input",{type:"radio",checked:S===t,onChange:()=>D(t)}),r),c.createElement(o.Z,{href:a,title:'formatQuery(query, "'+t+'") (click for information)',style:{textDecoration:"none"}},re))}))),c.createElement("h3",null,c.createElement(o.Z,{href:"/docs/api/import",title:"Use the parse* methods to set the query from SQL/JsonLogic/etc. (click for documentation)",className:A},c.createElement("span",null,"Import"),c.createElement("span",null,re))),c.createElement("div",{className:Z},c.createElement("button",{type:"button",onClick:()=>j(!0)},"Import SQL"),c.createElement("button",{type:"button",onClick:()=>K(!0)},"Import MongoDB"),c.createElement("button",{type:"button",onClick:()=>he(!0)},"Import CEL"),c.createElement("button",{type:"button",onClick:()=>ke(!0)},"Import JsonLogic"),c.createElement("div",null,c.createElement("code",{style:{fontSize:"8pt",marginBottom:"var(--ifm-global-spacing)"}},"react-querybuilder@",p.i8)))),c.createElement("div",{style:{display:"flex",flexDirection:"column",rowGap:"var(--ifm-global-spacing)"}},c.createElement(Y,{variant:t,dnd:B.enableDragAndDrop,compressedState:Ie()}),c.createElement("div",{id:Re,className:Pe},c.createElement(r,null,c.createElement(l.yC,null,B.independentCombinators?c.createElement(p.zk,(0,a.Z)({},Ae,{independentCombinators:!0,key:"queryIC",query:k,onQueryChange:e=>w(e)})):c.createElement(p.zk,(0,a.Z)({},Ae,{independentCombinators:!1,key:"query",query:h,onQueryChange:e=>f(e)}))))),c.createElement(u.Z,{groupId:"export-or-code"},c.createElement(s.Z,{value:"export",label:"Export"},c.createElement("div",{style:{marginBottom:"var(--ifm-heading-margin-bottom)"}},c.createElement("code",null,"formatQuery(query, { format: '"+S+"'"+(B.parseNumbers?", parseNumbers: true":"")+" })")),c.createElement(i.Z,{language:F(S),className:G},Le)),c.createElement(s.Z,{value:"code",label:"Code"},c.createElement(i.Z,{language:"tsx",title:"App.tsx"},Qe),Fe&&c.createElement(i.Z,{language:"scss",title:"styles.scss"},Fe),c.createElement(i.Z,{language:"ts",title:"fields.ts"},"import type { Field, RuleType } from 'react-querybuilder';\nimport { defaultOperators } from 'react-querybuilder';\nimport { musicalInstruments } from './musicalInstruments';\n\nconst validator = (r: RuleType) => !!r.value;\n\nexport const fields: Field[] = [\n  {\n    name: 'firstName',\n    label: 'First Name',\n    placeholder: 'Enter first name',\n    validator,\n  },\n  {\n    name: 'lastName',\n    label: 'Last Name',\n    placeholder: 'Enter last name',\n    defaultOperator: 'beginsWith',\n    validator,\n  },\n  { name: 'age', label: 'Age', inputType: 'number', validator },\n  {\n    name: 'isMusician',\n    label: 'Is a musician',\n    valueEditorType: 'checkbox',\n    operators: defaultOperators.filter(op => op.name === '='),\n    defaultValue: false,\n  },\n  {\n    name: 'instrument',\n    label: 'Primary instrument',\n    valueEditorType: 'select',\n    values: musicalInstruments,\n    defaultValue: 'Piano',\n    operators: defaultOperators.filter(op => op.name === '=' || op.name === 'in'),\n  },\n  {\n    name: 'alsoPlaysInstruments',\n    label: 'Also plays instruments',\n    valueEditorType: 'multiselect',\n    values: musicalInstruments,\n    defaultValue: 'Guitar',\n    operators: defaultOperators.filter(op => op.name === 'in'),\n  },\n  {\n    name: 'gender',\n    label: 'Gender',\n    operators: defaultOperators.filter(op => op.name === '='),\n    valueEditorType: 'radio',\n    values: [\n      { name: 'M', label: 'Male' },\n      { name: 'F', label: 'Female' },\n      { name: 'O', label: 'Other' },\n    ],\n  },\n  { name: 'height', label: 'Height', validator },\n  { name: 'job', label: 'Job', validator },\n  { name: 'description', label: 'Description', valueEditorType: 'textarea' },\n  { name: 'birthdate', label: 'Birth Date', inputType: 'date' },\n  { name: 'datetime', label: 'Show Time', inputType: 'datetime-local' },\n  { name: 'alarm', label: 'Daily Alarm', inputType: 'time' },\n  {\n    name: 'groupedField1',\n    label: 'Grouped Field 1',\n    comparator: 'group',\n    group: 'group1',\n    valueSources: ['field', 'value'],\n  },\n  {\n    name: 'groupedField2',\n    label: 'Grouped Field 2',\n    comparator: 'group',\n    group: 'group1',\n    valueSources: ['field', 'value'],\n  },\n  {\n    name: 'groupedField3',\n    label: 'Grouped Field 3',\n    comparator: 'group',\n    group: 'group1',\n    valueSources: ['field', 'value'],\n  },\n  {\n    name: 'groupedField4',\n    label: 'Grouped Field 4',\n    comparator: 'group',\n    group: 'group1',\n    valueSources: ['field', 'value'],\n  },\n];\n")))),c.createElement(W,{heading:"Import SQL",isOpen:_,setIsOpen:j,code:z,setCode:J,error:V,loadQueryFromCode:()=>{try{const e=(0,p.wl)(z),t=(0,p.wl)(z,{independentCombinators:!0});f(e),w(t),j(!1),H(""),window.scrollTo({top:0,behavior:"smooth"})}catch(e){H(e.message)}},notes:de}),c.createElement(W,{heading:"Import MongoDB",isOpen:U,setIsOpen:K,code:$,setCode:X,error:ee,loadQueryFromCode:()=>{try{const e=(0,p.uB)($),t=(0,p.uP)(e);f(e),w(t),K(!1),te(""),window.scrollTo({top:0,behavior:"smooth"})}catch(e){te(e.message)}},notes:ce}),c.createElement(W,{heading:"Import CEL",isOpen:ae,setIsOpen:he,code:ge,setCode:ye,error:fe,loadQueryFromCode:()=>{try{const e=(0,p.AE)(ge),t=(0,p.AE)(ge,{independentCombinators:!0});f(e),w(t),he(!1),ve(""),window.scrollTo({top:0,behavior:"smooth"})}catch(e){ve(e.message)}},notes:""}),c.createElement(W,{heading:"Import JsonLogic",isOpen:Ee,setIsOpen:ke,code:we,setCode:Ce,error:Se,loadQueryFromCode:()=>{try{const e=(0,p.Ae)(we),t=(0,p.uP)(e);f(e),w(t),ke(!1),De(""),window.scrollTo({top:0,behavior:"smooth"})}catch(e){De(e.message)}},notes:pe}))}},3805:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var a=r(19666),o=r(70524),n=r(91022),l=r(67294);function i(){const{colorMode:e}=(0,o.I)(),t=(0,l.useMemo)((()=>r(32610).Z),[]),a={Button:(0,l.useMemo)((()=>r(43035).ZP),[]),Checkbox:(0,l.useMemo)((()=>r(8010).ZP),[]),DragIndicator:t,FormControl:(0,l.useMemo)((()=>r(37094).ZP),[]),FormControlLabel:(0,l.useMemo)((()=>r(13719).ZP),[]),Input:(0,l.useMemo)((()=>r(88193).ZP),[]),ListSubheader:(0,l.useMemo)((()=>r(92543).ZP),[]),MenuItem:(0,l.useMemo)((()=>r(53133).ZP),[]),Radio:(0,l.useMemo)((()=>r(65828).ZP),[]),RadioGroup:(0,l.useMemo)((()=>r(68722).Z),[]),Select:(0,l.useMemo)((()=>r(25083).ZP),[]),Switch:(0,l.useMemo)((()=>r(39289).ZP),[]),TextareaAutosize:(0,l.useMemo)((()=>r(91894).Z),[])},{ThemeProvider:n,createTheme:i}=(0,l.useMemo)((()=>r(53117)),[]),{QueryBuilderMaterial:s}=(0,l.useMemo)((()=>r(29299)),[]),u=(0,l.useMemo)((()=>r(65363).Z),[]),m=(0,l.useMemo)((()=>{const t=i({palette:{mode:e}});return console.log(t),t}),[e,i]);return l.createElement(n,{theme:m},l.createElement(s,{muiComponents:a},l.createElement(u,{variant:"material"})))}function s(){return l.createElement(n.Z,{description:"React Query Builder Demo"},l.createElement(a.Z,{fallback:l.createElement("div",null,"Loading...")},(()=>l.createElement(i,null))))}}}]);