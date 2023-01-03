(self.webpackChunk=self.webpackChunk||[]).push([[3237],{16430:(e,r,n)=>{"use strict";n.d(r,{X:()=>l});var t=n(61236),a=n(88215);const o=e=>!!e.value,l=[{name:"firstName",label:"First Name",placeholder:"Enter first name",validator:o},{name:"lastName",label:"Last Name",placeholder:"Enter last name",defaultOperator:"beginsWith",validator:o},{name:"age",label:"Age",inputType:"number",validator:o},{name:"isMusician",label:"Is a musician",valueEditorType:"checkbox",operators:t._z.filter((e=>"="===e.name)),defaultValue:!1},{name:"instrument",label:"Primary instrument",valueEditorType:"select",values:a.y,defaultValue:"Piano",operators:t._z.filter((e=>"="===e.name))},{name:"alsoPlaysInstruments",label:"Also plays instruments",valueEditorType:"multiselect",values:a.y,defaultValue:"Guitar",operators:t._z.filter((e=>"in"===e.name))},{name:"gender",label:"Gender",operators:t._z.filter((e=>"="===e.name)),valueEditorType:"radio",values:[{name:"M",label:"Male"},{name:"F",label:"Female"},{name:"O",label:"Other"}]},{name:"height",label:"Height",validator:o},{name:"job",label:"Job",validator:o},{name:"description",label:"Description",valueEditorType:"textarea"},{name:"birthdate",label:"Birth Date",inputType:"date"},{name:"datetime",label:"Show Time",inputType:"datetime-local"},{name:"alarm",label:"Daily Alarm",inputType:"time"},{name:"groupedField1",label:"Grouped Field 1",comparator:"group",group:"group1",valueSources:["field","value"]},{name:"groupedField2",label:"Grouped Field 2",comparator:"group",group:"group1",valueSources:["field","value"]},{name:"groupedField3",label:"Grouped Field 3",comparator:"group",group:"group1",valueSources:["field","value"]},{name:"groupedField4",label:"Grouped Field 4",comparator:"group",group:"group1",valueSources:["field","value"]}]},55265:(e,r,n)=>{"use strict";n.d(r,{N_:()=>s,Qc:()=>i,Rh:()=>h,W6:()=>d,d6:()=>m,hR:()=>c,hb:()=>u,vC:()=>o,wG:()=>l});var t=n(61236);const a=()=>"00-0-4-1-000".replace(/[^-]/g,(e=>(65536*(Math.random()+~~e)>>e).toString(16).padStart(4,"0"))),o={showCombinatorsBetweenRules:!1,showNotToggle:!1,showCloneButtons:!1,showLockButtons:!1,resetOnFieldChange:!0,resetOnOperatorChange:!1,autoSelectField:!0,autoSelectOperator:!0,addRuleToNewGroups:!1,validateQuery:!1,independentCombinators:!1,listsAsArrays:!1,enableDragAndDrop:!1,disabled:!1,debugMode:!1,parseNumbers:!1,justifiedLayout:!1,showBranches:!1},l=["showCombinatorsBetweenRules","showNotToggle","showCloneButtons","showLockButtons","resetOnFieldChange","resetOnOperatorChange","autoSelectField","autoSelectOperator","addRuleToNewGroups","validateQuery","independentCombinators","listsAsArrays","enableDragAndDrop","disabled","debugMode","parseNumbers","justifiedLayout","showBranches"],i={showCombinatorsBetweenRules:{link:"/docs/api/querybuilder#showcombinatorsbetweenrules",label:"Combinators between rules",title:"Display combinator (and/or) selectors between rules instead of in the group header"},showNotToggle:{link:"/docs/api/querybuilder#shownottoggle",label:'Show "not" toggle',title:'Display a checkbox to invert a group\'s rules (labelled "Not" by default)'},showCloneButtons:{link:"/docs/api/querybuilder#showclonebuttons",label:"Show clone buttons",title:"Display buttons to clone rules and groups"},resetOnFieldChange:{link:"/docs/api/querybuilder#resetonfieldchange",label:"Reset on field change",title:"Operator and value will be reset when a rule's field selection changes"},resetOnOperatorChange:{link:"/docs/api/querybuilder#resetonoperatorchange",label:"Reset on operator change",title:"The value will reset when the operator changes"},autoSelectField:{link:"/docs/api/querybuilder#autoselectfield",label:"Auto-select field",title:"The default field will be automatically selected for new rules"},autoSelectOperator:{link:"/docs/api/querybuilder#autoselectoperator",label:"Auto-select operator",title:"The default operator will be automatically selected for new rules"},addRuleToNewGroups:{link:"/docs/api/querybuilder#addruletonewgroups",label:"Add rule to new groups",title:"A rule will be automatically added to new groups"},validateQuery:{link:"/docs/api/validation",label:"Use validation",title:'The validator function(s) will be used to bold the "+Rule" button for empty groups and put a purple background on empty text fields and emtpy groups'},independentCombinators:{link:"/docs/api/querybuilder#independentcombinators",label:"Independent combinators",title:"Combinators between rules can be independently updated"},listsAsArrays:{link:"/docs/api/querybuilder#listsasarrays",label:"Lists as arrays",title:"Lists will be stored as arrays instead of comma-separated strings"},enableDragAndDrop:{link:"/docs/api/querybuilder#enabledraganddrop",label:"Drag-and-drop enabled",title:"Rules and groups can be reordered and dragged to different groups"},disabled:{link:"/docs/api/querybuilder#disabled",label:"Disabled",title:"Disable all components within the query builder"},showLockButtons:{link:"/docs/api/querybuilder#showlockbuttons",label:"Show lock buttons",title:"Display buttons to lock/disable rules and groups"},debugMode:{link:"/docs/api/querybuilder#debugmode",label:"Debug mode",title:"Enable debug logging for QueryBuilder and React DnD (see console)"},parseNumbers:{link:"/docs/api/export#parse-numbers",label:"Parse numbers",title:"Parse real numbers from strings in rule values"},justifiedLayout:{link:"",label:"Justified layout",title:'Add custom CSS to push the "clone", "lock", and "remove" buttons to the right edge'},showBranches:{link:"/docs/api/classnames",label:"Show branches",title:'Add the `.queryBuilder-branches` class to display "tree view" branches'}},s=l.sort(((e,r)=>i[e].label.localeCompare(i[r].label))),u=((0,t.uP)({combinator:"and",rules:[]}),{id:a(),combinator:"and",not:!1,rules:[{id:a(),field:"firstName",value:"Stev",operator:"beginsWith"},{id:a(),field:"lastName",value:"Vai, Vaughan",operator:"in"},{id:a(),field:"age",operator:">",value:"28"},{id:a(),combinator:"or",rules:[{id:a(),field:"isMusician",operator:"=",value:!0},{id:a(),field:"instrument",operator:"=",value:"Guitar"}]},{id:a(),field:"groupedField1",operator:"=",value:"groupedField4",valueSource:"field"},{id:a(),field:"birthdate",value:"1969-06-01",operator:"<"}]}),d=(0,t.uP)(u),m=[["sql","SQL","https://en.wikipedia.org/wiki/SQL","sql"],["parameterized","SQL (parameterized)","https://en.wikipedia.org/wiki/SQL","parameterized-sql"],["parameterized_named","SQL (named parameters)","https://en.wikipedia.org/wiki/SQL","named-parameters"],["json_without_ids","JSON (no identifiers)","https://en.wikipedia.org/wiki/JSON","json-without-identifiers"],["json","JSON","https://en.wikipedia.org/wiki/JSON","json"],["mongodb","MongoDB","https://www.mongodb.com/","mongodb"],["cel","CEL","https://github.com/google/cel-spec","common-expression-language"],["spel","SpEL","https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#expressions-language-ref","spring-expression-language"],["jsonlogic","JsonLogic","https://jsonlogic.com/","jsonlogic"]],c={default:"Default",bootstrap:"Bootstrap",material:"MUI/Material",antd:"Ant Design",chakra:"Chakra UI",bulma:"Bulma"},{default:p,...b}=c,h=["default",...(0,t.Yd)(b).sort()]},88215:(e,r,n)=>{"use strict";n.d(r,{y:()=>t});const t=[{label:"Percussion instruments",instruments:["Clapstick","Cowbell","Cymbal","Gong","Maraca","Marimba","More cowbell","Spoon","Steelpan","Tambourine","Triangle","Vibraphone","Washboard","Wood block","Wooden fish","Xylophone"]},{label:"Membranophones",instruments:["Barrel drum","Bass drum","Bongo drums","Conga","Drum","Drum kit","Jew's harp","Octaban","Samphor","Snare drum","Timpani","Tom-tom"]},{label:"Wind instruments",instruments:["Accordion","Air horn","Bagpipe","Baritone horn","Bassoon","Bazooka","Beatboxing","Blown bottle","Bugle","Clarinet","Conch","Cornet","Didgeridoo","Double bell euphonium","Doulophone","English horn","Euphonium","Flugelhorn","Flute","French horn","Harmonica","Irish flute","Jug","Kazoo","Melodeon","Mezzo-soprano","Oboe","Ocarina","Pan flute","Piccolo","Pipe organ","Recorder","Saxophone","Slide whistle","Sousaphone","Trombone","Trumpet","Tuba","Whistle"]},{label:"Stringed instruments",instruments:["Aeolian harp","Bandolin","Banjo ukulele","Cello","Chapman stick","Clavichord","Clavinet","Double bass","Dulcimer","Fiddle","Guitar","Hammered dulcimer","Harp","Harpsichord","Lute","Lyre","Maguhu","Mandola","Mandolin","Octobass","Piano","Sitar","Ukulele","Viol","Violin","Washtub bass"]},{label:"Electronic instruments",instruments:["AlphaSphere","Audiocubes","Bass pedals","Continuum Fingerboard","Croix Sonore","Denis d'or","Dubreq stylophone","Drum machine","Eigenharp","Electric guitar","Electronic keyboard","Electronic organ","EWI","Fingerboard synthesizer","Hammond organ","Keyboard","Keytar","Kraakdoos","Laser harp","Mellotron","MIDI keyboard","Omnichord","Ondes Martenot","Otamatone","Sampler","Seaboard music instrument","Skoog","Synclavier","Synthesizer","Teleharmonium","Tenori-on","Theremin","trautonium","Turntablism","Turntable"]}].map((e=>{let{label:r,instruments:n}=e;return{label:r,options:n.map((e=>({name:e,label:e})))}}))},6873:(e,r,n)=>{"use strict";n.d(r,{IA:()=>f,UF:()=>h,Z6:()=>b,l:()=>g,rc:()=>p,Zv:()=>d,C$:()=>m,kT:()=>y,wB:()=>c});var t=n(48764),a=n(27885),o=n(96336),l=n(43005),i=n(84034),s=n(61236),u=n(55265);const d=e=>t.Buffer.from(a.ZP.deflate(JSON.stringify(e))).toString("base64"),m=e=>{var r;let{s:n,...o}=e,l=null;n&&(l=(e=>{const r=t.Buffer.from(e,"base64"),n=a.ZP.inflate(r,{to:"string"});return JSON.parse(n)})(n));const i=Object.fromEntries(Object.entries(o).map((e=>{let[r,n]=e;return[r,"true"===n]})));return{...l,options:{...null==(r=l)?void 0:r.options,...i}}},c=(e,r)=>{if("reset"===r.type)return u.vC;if("all"===r.type){const e={...u.vC};for(const r of u.wG)e[r]="disabled"!==r&&"independentCombinators"!==r;return e}if("replace"===r.type)return r.payload;const{optionName:n,value:t}=r.payload;return{...e,[n]:t}},p=(e,r)=>{const n=(0,s.x9)(e,r);return"json_without_ids"===r.format||"mongodb"===r.format?JSON.stringify(JSON.parse(n),null,2):"parameterized"===r.format||"parameterized_named"===r.format||"jsonlogic"===r.format?JSON.stringify(n,null,2):n},b=e=>"sql"===e||"cel"===e||"spel"===e?e:"json",h=(e,r)=>{const n="RuleGroupType"+(e.independentCombinators?"IC":""),t=e.enableDragAndDrop?"  ":"",a=r&&"default"!==r?"  ":"",[o,s,u]=(e=>{switch(e){case"antd":return["import { QueryBuilderAntD } from '@react-querybuilder/antd';","<QueryBuilderAntD>","</QueryBuilderAntD>"];case"bootstrap":return["import { QueryBuilderBootstrap } from '@react-querybuilder/bootstrap';\nimport 'bootstrap-icons/font/bootstrap-icons.scss';\nimport 'bootstrap/scss/bootstrap.scss';","<QueryBuilderBootstrap>","</QueryBuilderBootstrap>"];case"bulma":return["import { QueryBuilderBulma } from '@react-querybuilder/bulma';\nimport 'bulma/bulma.sass';","<QueryBuilderBulma>","</QueryBuilderBulma>"];case"chakra":return["import { QueryBuilderChakra } from '@react-querybuilder/chakra';\nimport { ChakraProvider, extendTheme } from '@chakra-ui/react';\n\nconst chakraTheme = extendTheme();","<ChakraProvider theme={chakraTheme}>\n<QueryBuilderChakra>","</QueryBuilderChakra>\n</ChakraProvider>"];case"material":return["import { createTheme, ThemeProvider } from '@mui/material/styles';\nimport { QueryBuilderMaterial } from '@react-querybuilder/material';\nimport Checkbox from '@mui/material/Checkbox';\nimport DragIndicator from '@mui/material/DragIndicator';\nimport FormControl from '@mui/material/FormControl';\nimport FormControlLabel from '@mui/material/FormControlLabel';\nimport Input from '@mui/material/Input';\nimport ListSubheader from '@mui/material/ListSubheader';\nimport MenuItem from '@mui/material/MenuItem';\nimport Radio from '@mui/material/Radio';\nimport RadioGroup from '@mui/material/RadioGroup';\nimport Select from '@mui/material/Select';\nimport Switch from '@mui/material/Switch';\nimport TextareaAutosize from '@mui/material/TextareaAutosize';\n\nconst muiTheme = createTheme();\n\nconst muiComponents = {\n  Checkbox,\n  DragIndicator,\n  FormControl,\n  FormControlLabel,\n  Input,\n  ListSubheader,\n  MenuItem,\n  Radio,\n  RadioGroup,\n  Select,\n  Switch,\n  TextareaAutosize,\n};","<ThemeProvider theme={muiTheme}>\n<QueryBuilderMaterial muiComponents={muiComponents}>","</QueryBuilderMaterial>\n</ThemeProvider>"]}return["","",""]})(r),d=r=>"autoSelectField"===r||"autoSelectOperator"===r||"resetOnFieldChange"===r?e[r]?"":r+"={false}":e[r]?r:"",m=["fields={fields}","query={query}","onQueryChange={q => setQuery(q)}",d("addRuleToNewGroups"),d("autoSelectField"),d("autoSelectOperator"),d("debugMode"),d("disabled"),d("independentCombinators"),d("listsAsArrays"),d("resetOnFieldChange"),d("resetOnOperatorChange"),d("showCloneButtons"),d("showCombinatorsBetweenRules"),d("showLockButtons"),d("showNotToggle"),e.validateQuery?"validator={defaultValidator}":""].filter(Boolean).map((e=>"\n      "+t+a+e)).join(""),c="import { useState } from 'react';\n"+(e.enableDragAndDrop?"import { QueryBuilderDnD } from '@react-querybuilder/dnd';\nimport * as ReactDnD from 'react-dnd';\nimport * as ReactDndHtml5Backend from 'react-dnd-html5-backend';\n":"")+"import type { "+n+" } from 'react-querybuilder';\nimport {"+(e.validateQuery?"defaultValidator, ":"")+" QueryBuilder } from 'react-querybuilder';\nimport { fields } from './fields';\nimport 'react-querybuilder/dist/query-builder.scss';"+(e.justifiedLayout?"\nimport './styles.scss';":"")+(o?"\n"+o:"")+"\n\nconst initialQuery: "+n+" = {"+(e.independentCombinators?"":" combinator: 'and',")+" rules: [] };\n\nexport const App = () => {\n  const [query, setQuery] = useState(initialQuery);\n\n  return ("+(e.enableDragAndDrop?"<QueryBuilderDnD dnd={{ ...ReactDnD, ...ReactDndHtml5Backend }}>":"")+s+"<QueryBuilder "+m+" />"+u+(e.enableDragAndDrop?"</QueryBuilderDnD>":"")+"\n  );\n}";return i.Z.format(c,{filepath:"App.tsx",plugins:[l.Z],singleQuote:!0})},g=e=>e?i.Z.format(".queryBuilder {\n  // Push the clone, lock, and remove buttons to the right edge\n  .ruleGroup-addGroup + button.ruleGroup-cloneGroup,\n  .ruleGroup-addGroup + button.ruleGroup-lock,\n  .ruleGroup-addGroup + button.ruleGroup-remove,\n  .rule-operators + button.rule-cloneRule,\n  .rule-operators + button.rule-lock,\n  .rule-operators + button.rule-remove,\n  .rule-value + button.rule-cloneRule,\n  .rule-value + button.rule-lock,\n  .rule-value + button.rule-remove,\n  .control + button.rule-cloneRule,\n  .control + button.rule-lock,\n  .control + button.rule-remove,\n  .chakra-select__wrapper + button.rule-cloneRule,\n  .chakra-select__wrapper + button.rule-lock,\n  .chakra-select__wrapper + button.rule-remove {\n    margin-left: auto;\n  }\n}\n",{filepath:"styles.scss",plugins:[o.Z]}):"",f=i.Z.format("import type { Field, RuleType } from 'react-querybuilder';\nimport { defaultOperators } from 'react-querybuilder';\nimport { musicalInstruments } from './musicalInstruments';\n\nexport const validator = (r: RuleType) => !!r.value;\n\nexport const fields: Field[] = [\n  {\n    name: 'firstName',\n    label: 'First Name',\n    placeholder: 'Enter first name',\n    validator,\n  },\n  {\n    name: 'lastName',\n    label: 'Last Name',\n    placeholder: 'Enter last name',\n    defaultOperator: 'beginsWith',\n    validator,\n  },\n  { name: 'age', label: 'Age', inputType: 'number', validator },\n  {\n    name: 'isMusician',\n    label: 'Is a musician',\n    valueEditorType: 'checkbox',\n    operators: defaultOperators.filter(op => op.name === '='),\n    defaultValue: false,\n  },\n  {\n    name: 'instrument',\n    label: 'Primary instrument',\n    valueEditorType: 'select',\n    values: musicalInstruments,\n    defaultValue: 'Piano',\n    operators: defaultOperators.filter(op => op.name === '='),\n  },\n  {\n    name: 'alsoPlaysInstruments',\n    label: 'Also plays instruments',\n    valueEditorType: 'multiselect',\n    values: musicalInstruments,\n    defaultValue: 'Guitar',\n    operators: defaultOperators.filter(op => op.name === 'in'),\n  },\n  {\n    name: 'gender',\n    label: 'Gender',\n    operators: defaultOperators.filter(op => op.name === '='),\n    valueEditorType: 'radio',\n    values: [\n      { name: 'M', label: 'Male' },\n      { name: 'F', label: 'Female' },\n      { name: 'O', label: 'Other' },\n    ],\n  },\n  { name: 'height', label: 'Height', validator },\n  { name: 'job', label: 'Job', validator },\n  { name: 'description', label: 'Description', valueEditorType: 'textarea' },\n  { name: 'birthdate', label: 'Birth Date', inputType: 'date' },\n  { name: 'datetime', label: 'Show Time', inputType: 'datetime-local' },\n  { name: 'alarm', label: 'Daily Alarm', inputType: 'time' },\n  {\n    name: 'groupedField1',\n    label: 'Grouped Field 1',\n    comparator: 'group',\n    group: 'group1',\n    valueSources: ['field', 'value'],\n  },\n  {\n    name: 'groupedField2',\n    label: 'Grouped Field 2',\n    comparator: 'group',\n    group: 'group1',\n    valueSources: ['field', 'value'],\n  },\n  {\n    name: 'groupedField3',\n    label: 'Grouped Field 3',\n    comparator: 'group',\n    group: 'group1',\n    valueSources: ['field', 'value'],\n  },\n  {\n    name: 'groupedField4',\n    label: 'Grouped Field 4',\n    comparator: 'group',\n    group: 'group1',\n    valueSources: ['field', 'value'],\n  },\n];\n",{filepath:"fields.ts",plugins:[l.Z],singleQuote:!0}),y=i.Z.format("// Adapted from https://en.wikipedia.org/wiki/List_of_musical_instruments\nimport type { OptionGroup } from 'react-querybuilder';\n\nexport const musicalInstruments: OptionGroup[] = [\n  {\n    label: 'Percussion instruments',\n    instruments: [\n      'Clapstick',\n      'Cowbell',\n      'Cymbal',\n      'Gong',\n      'Maraca',\n      'Marimba',\n      'More cowbell',\n      'Spoon',\n      'Steelpan',\n      'Tambourine',\n      'Triangle',\n      'Vibraphone',\n      'Washboard',\n      'Wood block',\n      'Wooden fish',\n      'Xylophone',\n    ],\n  },\n  {\n    label: 'Membranophones',\n    instruments: [\n      'Barrel drum',\n      'Bass drum',\n      'Bongo drums',\n      'Conga',\n      'Drum',\n      'Drum kit',\n      \"Jew's harp\",\n      'Octaban',\n      'Samphor',\n      'Snare drum',\n      'Timpani',\n      'Tom-tom',\n    ],\n  },\n  {\n    label: 'Wind instruments',\n    instruments: [\n      'Accordion',\n      'Air horn',\n      'Bagpipe',\n      'Baritone horn',\n      'Bassoon',\n      'Bazooka',\n      'Beatboxing',\n      'Blown bottle',\n      'Bugle',\n      'Clarinet',\n      'Conch',\n      'Cornet',\n      'Didgeridoo',\n      'Double bell euphonium',\n      'Doulophone',\n      'English horn',\n      'Euphonium',\n      'Flugelhorn',\n      'Flute',\n      'French horn',\n      'Harmonica',\n      'Irish flute',\n      'Jug',\n      'Kazoo',\n      'Melodeon',\n      'Mezzo-soprano',\n      'Oboe',\n      'Ocarina',\n      'Pan flute',\n      'Piccolo',\n      'Pipe organ',\n      'Recorder',\n      'Saxophone',\n      'Slide whistle',\n      'Sousaphone',\n      'Trombone',\n      'Trumpet',\n      'Tuba',\n      'Whistle',\n    ],\n  },\n  {\n    label: 'Stringed instruments',\n    instruments: [\n      'Aeolian harp',\n      'Bandolin',\n      'Banjo ukulele',\n      'Cello',\n      'Chapman stick',\n      'Clavichord',\n      'Clavinet',\n      'Double bass',\n      'Dulcimer',\n      'Fiddle',\n      'Guitar',\n      'Hammered dulcimer',\n      'Harp',\n      'Harpsichord',\n      'Lute',\n      'Lyre',\n      'Maguhu',\n      'Mandola',\n      'Mandolin',\n      'Octobass',\n      'Piano',\n      'Sitar',\n      'Ukulele',\n      'Viol',\n      'Violin',\n      'Washtub bass',\n    ],\n  },\n  {\n    label: 'Electronic instruments',\n    instruments: [\n      'AlphaSphere',\n      'Audiocubes',\n      'Bass pedals',\n      'Continuum Fingerboard',\n      'Croix Sonore',\n      \"Denis d'or\",\n      'Dubreq stylophone',\n      'Drum machine',\n      'Eigenharp',\n      'Electric guitar',\n      'Electronic keyboard',\n      'Electronic organ',\n      'EWI',\n      'Fingerboard synthesizer',\n      'Hammond organ',\n      'Keyboard',\n      'Keytar',\n      'Kraakdoos',\n      'Laser harp',\n      'Mellotron',\n      'MIDI keyboard',\n      'Omnichord',\n      'Ondes Martenot',\n      'Otamatone',\n      'Sampler',\n      'Seaboard music instrument',\n      'Skoog',\n      'Synclavier',\n      'Synthesizer',\n      'Teleharmonium',\n      'Tenori-on',\n      'Theremin',\n      'trautonium',\n      'Turntablism',\n      'Turntable',\n    ],\n  },\n].map(({ label, instruments }) => ({\n  label,\n  options: instruments.map(s => ({ name: s, label: s })),\n}));\n",{filepath:"musicalInstrumentsCode.ts",plugins:[l.Z],singleQuote:!0})},81211:(e,r,n)=>{"use strict";n.r(r),n.d(r,{default:()=>x});var t=n(88746),a=n(70524),o=n(6832),l=n(9320),i=n(73275),s=n(91022),u=n(86010),d=n(67294),m=n(9198),c=n.n(m),p=(n(61061),n(15413)),b=n(42250),h=n(61236),g=n(57191),f=n(63649),y=n(55265),v=n(16430),w=n(88215),k=n(6873);const E={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN",main:"main_iUjq",wsPreWrap:"wsPreWrap_TXlI",featureContainer:"featureContainer_rTui",linkList:"linkList_MXYm",leftOrBelow:"leftOrBelow_FJE5"},C=v.X.filter((e=>"birthdate"===e.name)),S={combinator:"and",rules:[{field:"birthdate",operator:"=",value:new Date}]},B=(0,d.forwardRef)(((e,r)=>{let{value:n,onClick:t}=e;return d.createElement("button",{onClick:t,ref:r},n," \ud83d\udcc5")})),T=e=>d.createElement(c(),{selected:e.value,onChange:r=>e.handleOnChange(r),customInput:d.createElement(B,null),dateFormat:"yyyy-MM-dd"}),D=v.X.filter((e=>"alsoPlaysInstruments"===e.name)),O=w.y.map((e=>({...e,options:e.options.map((e=>({...e,value:e.name})))}))),F={combinator:"and",rules:[{field:"alsoPlaysInstruments",operator:"in",value:[{value:"Piano",label:"Piano"},{value:"Drum",label:"Drum"}]}]},q=e=>{const r="dark"===(0,a.I)().colorMode,[n,t]=(0,d.useState)(!1),o=(0,d.useRef)(!0);return(0,d.useEffect)((()=>{o.current&&(setTimeout((()=>t(!0)),1e3),o.current=!1)}),[]),d.createElement(g.ZP,{key:r+"-"+n,value:e.value,isMulti:!0,onChange:r=>e.handleOnChange(r),options:O,styles:{container:e=>({...e,width:"100%"}),menu:e=>({...e,zIndex:99})},theme:e=>r?{...e,colors:{...e.colors,primary25:"#768cad",danger:e.colors.dangerLight,dangerLight:e.colors.danger,neutral0:"#222222",neutral10:"#525252",neutral80:"#ffffff"}}:e})},M=v.X.filter((e=>"age"===e.name)),N={combinator:"and",rules:[{field:"age",operator:"between",value:[20,60]}]},A=e=>d.createElement("div",{className:"slider-wrapper"},d.createElement(f.Z,{className:"slider",value:e.value,onChange:r=>e.handleOnChange(r),renderThumb:(e,r)=>d.createElement("div",e,r.valueNow),min:0,max:100,step:10})),Q=()=>{const{siteConfig:e}=(0,o.Z)(),[r,n]=(0,d.useState)(y.hb),[a,m]=(0,d.useState)("sql"),c=(0,d.useMemo)((()=>"sql"===a?e=>("date"===v.X.find((r=>r.name===e.field)).inputType?"DATE ":"")+(0,h.S2)(e):void 0),[a]);return d.createElement(s.Z,{description:"The Query Builder Component for React"},d.createElement("header",{className:(0,u.Z)("hero hero--primary",E.heroBanner)},d.createElement("div",{className:"container"},d.createElement("h1",{className:"hero__title"},e.title),d.createElement("p",{className:"hero__subtitle"},e.tagline),d.createElement("div",{className:E.buttons},d.createElement(t.Z,{className:"button button--secondary button--lg",to:"/docs/intro"},"Get started"),d.createElement(t.Z,{className:"button button--secondary button--lg",href:"/demo"},"Try it out")))),d.createElement("main",{className:E.main},d.createElement(h.TF.Provider,{value:{controlClassnames:{queryBuilder:E.queryBuilder}}},d.createElement("div",{className:E.featureContainer},d.createElement("div",null,d.createElement("h2",null,"Sensible defaults"),d.createElement("p",null,"Build complex queries with robust out-of-the-box features."),d.createElement("p",null,"Check out the ",d.createElement(t.Z,{href:"/demo"},"demo")," to see the code that generated this query builder.")),d.createElement("div",null,d.createElement(h.zk,{fields:v.X,query:r,onQueryChange:e=>n(e)})),d.createElement("div",{style:{gap:"1rem"}},d.createElement("div",null,d.createElement("span",{style:{fontStyle:"italic"}},"Convert to \u21d2 "),d.createElement("select",{value:a,onChange:e=>m(e.target.value)},y.d6.map((e=>d.createElement("option",{key:e[0],value:e[0]},e[1]))))),d.createElement(i.Z,{className:E.wsPreWrap},(0,k.rc)(r,{format:a,valueProcessor:c}))),d.createElement("div",null,d.createElement("h2",null,"Export/import"),d.createElement("p",null,"Convert to and from SQL, MongoDB, and several other query formats. The code block"," ",d.createElement("span",{className:E.leftOrBelow})," reflects the query above converted to the selected format."),d.createElement("div",{className:E.linkList},d.createElement(t.Z,{href:"/docs/api/export"},"Export documentation"),d.createElement(t.Z,{href:"/docs/api/import"},"Import documentation"))),d.createElement("div",null,d.createElement("h2",null,"Extensible"),d.createElement("p",null,"Provide ",d.createElement(t.Z,{href:"/docs/tips/custom-with-fallback"},"custom components")," for maximum flexibility, or use one of the official"," ",d.createElement(t.Z,{href:"/docs/compat"},"compatibility packages")," for libraries like MUI, Bootstrap, and others."),d.createElement("div",{className:E.linkList},d.createElement(t.Z,{href:"/docs/api/querybuilder#controlelements"},"Documentation"),d.createElement(t.Z,{href:"/docs/tips/custom-with-fallback"},"Tips"))),d.createElement("div",{className:"extended-queryBuilder"},d.createElement(t.Z,{href:"https://reactdatepicker.com/",style:{whiteSpace:"nowrap"}},d.createElement("code",null,"react-datepicker")),d.createElement(h.zk,{fields:C,defaultQuery:S,controlElements:{valueEditor:T},getOperators:()=>h._z.filter((e=>"="===e.name))}),d.createElement(t.Z,{href:"https://react-select.com/",style:{whiteSpace:"nowrap"}},d.createElement("code",null,"react-select")),d.createElement(h.zk,{fields:D,defaultQuery:F,controlElements:{valueEditor:q},getOperators:()=>h._z.filter((e=>"in"===e.name))}),d.createElement(t.Z,{href:"https://zillow.github.io/react-slider/",style:{whiteSpace:"nowrap"}},d.createElement("code",null,"react-slider")),d.createElement(h.zk,{fields:M,defaultQuery:N,controlElements:{valueEditor:A},getOperators:()=>h._z.filter((e=>"between"===e.name))})),d.createElement("div",{className:"custom-styling"},d.createElement(l.yC,{dnd:{...p,...b}},d.createElement(h.zk,{query:r,onQueryChange:e=>n(e),fields:v.X,translations:{dragHandle:{label:"\u21c5"}},controlClassnames:{queryBuilder:["queryBuilder-branches","green-branch-lines"]}}))),d.createElement("div",null,d.createElement("h2",null,"Flexible styling"),d.createElement("p",null,"Tweak the default styles or come up with your own. All deviations from the default styles in the query builder ",d.createElement("span",{className:E.leftOrBelow}),", including re-ordering the elements, have been achieved with pure CSS using the standard classes assigned by the component."),d.createElement("div",{className:E.linkList},d.createElement(t.Z,{href:"/docs/api/classnames"},"Documentation"),d.createElement(t.Z,{href:"/docs/tips/styling"},"Tips")))))))},x=()=>d.createElement(d.StrictMode,null,d.createElement(Q,null))},46601:()=>{},89214:()=>{},71922:()=>{},2363:()=>{},52361:()=>{},94616:()=>{}}]);