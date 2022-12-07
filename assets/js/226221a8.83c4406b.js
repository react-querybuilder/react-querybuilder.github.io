"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1989],{48935:(e,t,n)=>{n.d(t,{Z:()=>De});var a=n(83117),r=n(88746),l=n(76775),o=n(9320),i=n(73275),s=n(19260),u=n(30433),m=n(65559),d=n(86010),c=n(17563),p=n(67294),b=n(61236);const h={showCombinatorsBetweenRules:!1,showNotToggle:!1,showCloneButtons:!1,showLockButtons:!1,resetOnFieldChange:!0,resetOnOperatorChange:!1,autoSelectField:!0,autoSelectOperator:!0,addRuleToNewGroups:!1,validateQuery:!1,independentCombinators:!1,listsAsArrays:!1,enableDragAndDrop:!1,disabled:!1,debugMode:!1,parseNumbers:!1,justifiedLayout:!1},g=["showCombinatorsBetweenRules","showNotToggle","showCloneButtons","showLockButtons","resetOnFieldChange","resetOnOperatorChange","autoSelectField","autoSelectOperator","addRuleToNewGroups","validateQuery","independentCombinators","listsAsArrays","enableDragAndDrop","disabled","debugMode","parseNumbers","justifiedLayout"],y={showCombinatorsBetweenRules:{link:"/docs/api/querybuilder#showcombinatorsbetweenrules",label:"Combinators between rules",title:"Display combinator (and/or) selectors between rules instead of in the group header"},showNotToggle:{link:"/docs/api/querybuilder#shownottoggle",label:'Show "not" toggle',title:'Display a checkbox to invert a group\'s rules (labelled "Not" by default)'},showCloneButtons:{link:"/docs/api/querybuilder#showclonebuttons",label:"Show clone buttons",title:"Display buttons to clone rules and groups"},resetOnFieldChange:{link:"/docs/api/querybuilder#resetonfieldchange",label:"Reset on field change",title:"Operator and value will be reset when a rule's field selection changes"},resetOnOperatorChange:{link:"/docs/api/querybuilder#resetonoperatorchange",label:"Reset on operator change",title:"The value will reset when the operator changes"},autoSelectField:{link:"/docs/api/querybuilder#autoselectfield",label:"Auto-select field",title:"The default field will be automatically selected for new rules"},autoSelectOperator:{link:"/docs/api/querybuilder#autoselectoperator",label:"Auto-select operator",title:"The default operator will be automatically selected for new rules"},addRuleToNewGroups:{link:"/docs/api/querybuilder#addruletonewgroups",label:"Add rule to new groups",title:"A rule will be automatically added to new groups"},validateQuery:{link:"/docs/api/validation",label:"Use validation",title:'The validator function(s) will be used to bold the "+Rule" button for empty groups and put a purple background on empty text fields and emtpy groups'},independentCombinators:{link:"/docs/api/querybuilder#independentcombinators",label:"Independent combinators",title:"Combinators between rules can be independently updated"},listsAsArrays:{link:"/docs/api/querybuilder#listsasarrays",label:"Lists as arrays",title:"Lists will be stored as arrays instead of comma-separated strings"},enableDragAndDrop:{link:"/docs/api/querybuilder#enabledraganddrop",label:"Drag-and-drop enabled",title:"Rules and groups can be reordered and dragged to different groups"},disabled:{link:"/docs/api/querybuilder#disabled",label:"Disabled",title:"Disable all components within the query builder"},showLockButtons:{link:"/docs/api/querybuilder#showlockbuttons",label:"Show lock buttons",title:"Display buttons to lock/disable rules and groups"},debugMode:{link:"/docs/api/querybuilder#debugmode",label:"Debug mode",title:"Enable debug logging for QueryBuilder and React DnD (see console)"},parseNumbers:{link:"/docs/api/export#parse-numbers",label:"Parse numbers",title:"Parse real numbers from strings in rule values"},justifiedLayout:{link:"",label:"Justified layout",title:'Add custom CSS to push the "clone", "lock", and "remove" buttons to the right edge'}},f=g.sort(((e,t)=>y[e].label.localeCompare(y[t].label))),E=((0,b.uP)({combinator:"and",rules:[]}),{id:""+Math.random(),combinator:"and",not:!1,rules:[{id:""+Math.random(),field:"firstName",value:"Stev",operator:"beginsWith"},{id:""+Math.random(),field:"lastName",value:"Vai, Vaughan",operator:"in"},{id:""+Math.random(),field:"age",operator:">",value:"28"},{id:""+Math.random(),combinator:"or",rules:[{id:""+Math.random(),field:"isMusician",operator:"=",value:!0},{id:""+Math.random(),field:"instrument",operator:"=",value:"Guitar"}]},{field:"groupedField1",operator:"=",value:"groupedField4",valueSource:"field"},{field:"birthdate",value:"1969-06-01",operator:"<"}]}),v=(0,b.uP)(E),k=[["sql","SQL","https://en.wikipedia.org/wiki/SQL","sql"],["parameterized","SQL (parameterized)","https://en.wikipedia.org/wiki/SQL","parameterized-sql"],["parameterized_named","SQL (named parameters)","https://en.wikipedia.org/wiki/SQL","named-parameters"],["json_without_ids","JSON (no identifiers)","https://en.wikipedia.org/wiki/JSON","json-without-identifiers"],["json","JSON","https://en.wikipedia.org/wiki/JSON","json"],["mongodb","MongoDB","https://www.mongodb.com/","mongodb"],["cel","CEL","https://github.com/google/cel-spec","common-expression-language"],["spel","SpEL","https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#expressions-language-ref","spring-expression-language"],["jsonlogic","JsonLogic","https://jsonlogic.com/","jsonlogic"]],C={default:"Default",bootstrap:"Bootstrap",material:"MUI/Material",antd:"Ant Design",chakra:"Chakra UI",bulma:"Bulma"},{default:w,...S}=C,D=["default",...(0,b.Yd)(S).sort()],B=[{label:"Percussion instruments",instruments:["Clapstick","Cowbell","Cymbal","Gong","Maraca","Marimba","Spoon","Steelpan","Tambourine","Triangle","Vibraphone","Washboard","Wood block","Wooden fish","Xylophone"]},{label:"Membranophones",instruments:["Barrel drum","Bass drum","Bongo drums","Conga","Drum","Drum kit","Jew's harp","Octaban","Samphor","Snare drum","Timpani","Tom-tom"]},{label:"Wind instruments",instruments:["Accordion","Air horn","Bagpipe","Baritone horn","Bassoon","Bazooka","Beatboxing","Blown bottle","Bugle","Clarinet","Conch","Cornet","Didgeridoo","Double bell euphonium","Doulophone","English horn","Euphonium","Flugelhorn","Flute","French horn","Harmonica","Irish flute","Jug","Kazoo","Melodeon","Mezzo-soprano","Oboe","Ocarina","Pan flute","Piccolo","Pipe organ","Recorder","Saxophone","Slide whistle","Sousaphone","Trombone","Trumpet","Tuba","Whistle"]},{label:"Stringed instruments",instruments:["Aeolian harp","Bandolin","Banjo ukulele","Cello","Chapman stick","Clavichord","Clavinet","Double bass","Dulcimer","Fiddle","Guitar","Hammered dulcimer","Harp","Harpsichord","Lute","Lyre","Maguhu","Mandola","Mandolin","Octobass","Piano","Sitar","Ukulele","Viol","Violin","Washtub bass"]},{label:"Electronic instruments",instruments:["AlphaSphere","Audiocubes","Bass pedals","Continuum Fingerboard","Croix Sonore","Denis d'or","Dubreq stylophone","Drum machine","Eigenharp","Electric guitar","Electronic keyboard","Electronic organ","EWI","Fingerboard synthesizer","Hammond organ","Keyboard","Keytar","Kraakdoos","Laser harp","Mellotron","MIDI keyboard","Omnichord","Ondes Martenot","Otamatone","Sampler","Seaboard music instrument","Skoog","Synclavier","Synthesizer","Teleharmonium","Tenori-on","Theremin","trautonium","Turntablism","Turntable"]}].map((e=>{let{label:t,instruments:n}=e;return{label:t,options:n.map((e=>({name:e,label:e})))}})),T=e=>!!e.value,N=[{name:"firstName",label:"First Name",placeholder:"Enter first name",validator:T},{name:"lastName",label:"Last Name",placeholder:"Enter last name",defaultOperator:"beginsWith",validator:T},{name:"age",label:"Age",inputType:"number",validator:T},{name:"isMusician",label:"Is a musician",valueEditorType:"checkbox",operators:b._z.filter((e=>"="===e.name)),defaultValue:!1},{name:"instrument",label:"Primary instrument",valueEditorType:"select",values:B,defaultValue:"Piano",operators:b._z.filter((e=>"="===e.name||"in"===e.name))},{name:"alsoPlaysInstruments",label:"Also plays instruments",valueEditorType:"multiselect",values:B,defaultValue:"Guitar",operators:b._z.filter((e=>"in"===e.name))},{name:"gender",label:"Gender",operators:b._z.filter((e=>"="===e.name)),valueEditorType:"radio",values:[{name:"M",label:"Male"},{name:"F",label:"Female"},{name:"O",label:"Other"}]},{name:"height",label:"Height",validator:T},{name:"job",label:"Job",validator:T},{name:"description",label:"Description",valueEditorType:"textarea"},{name:"birthdate",label:"Birth Date",inputType:"date"},{name:"datetime",label:"Show Time",inputType:"datetime-local"},{name:"alarm",label:"Daily Alarm",inputType:"time"},{name:"groupedField1",label:"Grouped Field 1",comparator:"group",group:"group1",valueSources:["field","value"]},{name:"groupedField2",label:"Grouped Field 2",comparator:"group",group:"group1",valueSources:["field","value"]},{name:"groupedField3",label:"Grouped Field 3",comparator:"group",group:"group1",valueSources:["field","value"]},{name:"groupedField4",label:"Grouped Field 4",comparator:"group",group:"group1",valueSources:["field","value"]}];var O=n(48764),q=n(27885),x=n(96336),M=n(43005),F=n(84034);const L=e=>{var t;let{s:n,...a}=e,r=null;n&&(r=(e=>{const t=O.lW.from(e,"base64"),n=q.ZP.inflate(t,{to:"string"});return JSON.parse(n)})(n));const l=Object.fromEntries(Object.entries(a).map((e=>{let[t,n]=e;return[t,"true"===n]})));return{...r,options:{...null==(t=r)?void 0:t.options,...l}}},Q=(e,t)=>{if("reset"===t.type)return h;if("all"===t.type){const e={...h};for(const t of g)e[t]="disabled"!==t&&"independentCombinators"!==t;return e}if("replace"===t.type)return t.payload;const{optionName:n,value:a}=t.payload;return{...e,[n]:a}},I=e=>"sql"===e||"cel"===e||"spel"===e?e:"json",A=F.Z.format("import type { Field, RuleType } from 'react-querybuilder';\nimport { defaultOperators } from 'react-querybuilder';\nimport { musicalInstruments } from './musicalInstruments';\n\nexport const validator = (r: RuleType) => !!r.value;\n\nexport const fields: Field[] = [\n  {\n    name: 'firstName',\n    label: 'First Name',\n    placeholder: 'Enter first name',\n    validator,\n  },\n  {\n    name: 'lastName',\n    label: 'Last Name',\n    placeholder: 'Enter last name',\n    defaultOperator: 'beginsWith',\n    validator,\n  },\n  { name: 'age', label: 'Age', inputType: 'number', validator },\n  {\n    name: 'isMusician',\n    label: 'Is a musician',\n    valueEditorType: 'checkbox',\n    operators: defaultOperators.filter(op => op.name === '='),\n    defaultValue: false,\n  },\n  {\n    name: 'instrument',\n    label: 'Primary instrument',\n    valueEditorType: 'select',\n    values: musicalInstruments,\n    defaultValue: 'Piano',\n    operators: defaultOperators.filter(op => op.name === '=' || op.name === 'in'),\n  },\n  {\n    name: 'alsoPlaysInstruments',\n    label: 'Also plays instruments',\n    valueEditorType: 'multiselect',\n    values: musicalInstruments,\n    defaultValue: 'Guitar',\n    operators: defaultOperators.filter(op => op.name === 'in'),\n  },\n  {\n    name: 'gender',\n    label: 'Gender',\n    operators: defaultOperators.filter(op => op.name === '='),\n    valueEditorType: 'radio',\n    values: [\n      { name: 'M', label: 'Male' },\n      { name: 'F', label: 'Female' },\n      { name: 'O', label: 'Other' },\n    ],\n  },\n  { name: 'height', label: 'Height', validator },\n  { name: 'job', label: 'Job', validator },\n  { name: 'description', label: 'Description', valueEditorType: 'textarea' },\n  { name: 'birthdate', label: 'Birth Date', inputType: 'date' },\n  { name: 'datetime', label: 'Show Time', inputType: 'datetime-local' },\n  { name: 'alarm', label: 'Daily Alarm', inputType: 'time' },\n  {\n    name: 'groupedField1',\n    label: 'Grouped Field 1',\n    comparator: 'group',\n    group: 'group1',\n    valueSources: ['field', 'value'],\n  },\n  {\n    name: 'groupedField2',\n    label: 'Grouped Field 2',\n    comparator: 'group',\n    group: 'group1',\n    valueSources: ['field', 'value'],\n  },\n  {\n    name: 'groupedField3',\n    label: 'Grouped Field 3',\n    comparator: 'group',\n    group: 'group1',\n    valueSources: ['field', 'value'],\n  },\n  {\n    name: 'groupedField4',\n    label: 'Grouped Field 4',\n    comparator: 'group',\n    group: 'group1',\n    valueSources: ['field', 'value'],\n  },\n];\n",{filepath:"fields.ts",plugins:[M.Z],singleQuote:!0}),j=F.Z.format("// Adapted from https://en.wikipedia.org/wiki/List_of_musical_instruments\nimport type { OptionGroup } from 'react-querybuilder';\n\nexport const musicalInstruments: OptionGroup[] = [\n  {\n    label: 'Percussion instruments',\n    instruments: [\n      'Clapstick',\n      'Cowbell',\n      'Cymbal',\n      'Gong',\n      'Maraca',\n      'Marimba',\n      'Spoon',\n      'Steelpan',\n      'Tambourine',\n      'Triangle',\n      'Vibraphone',\n      'Washboard',\n      'Wood block',\n      'Wooden fish',\n      'Xylophone',\n    ],\n  },\n  {\n    label: 'Membranophones',\n    instruments: [\n      'Barrel drum',\n      'Bass drum',\n      'Bongo drums',\n      'Conga',\n      'Drum',\n      'Drum kit',\n      \"Jew's harp\",\n      'Octaban',\n      'Samphor',\n      'Snare drum',\n      'Timpani',\n      'Tom-tom',\n    ],\n  },\n  {\n    label: 'Wind instruments',\n    instruments: [\n      'Accordion',\n      'Air horn',\n      'Bagpipe',\n      'Baritone horn',\n      'Bassoon',\n      'Bazooka',\n      'Beatboxing',\n      'Blown bottle',\n      'Bugle',\n      'Clarinet',\n      'Conch',\n      'Cornet',\n      'Didgeridoo',\n      'Double bell euphonium',\n      'Doulophone',\n      'English horn',\n      'Euphonium',\n      'Flugelhorn',\n      'Flute',\n      'French horn',\n      'Harmonica',\n      'Irish flute',\n      'Jug',\n      'Kazoo',\n      'Melodeon',\n      'Mezzo-soprano',\n      'Oboe',\n      'Ocarina',\n      'Pan flute',\n      'Piccolo',\n      'Pipe organ',\n      'Recorder',\n      'Saxophone',\n      'Slide whistle',\n      'Sousaphone',\n      'Trombone',\n      'Trumpet',\n      'Tuba',\n      'Whistle',\n    ],\n  },\n  {\n    label: 'Stringed instruments',\n    instruments: [\n      'Aeolian harp',\n      'Bandolin',\n      'Banjo ukulele',\n      'Cello',\n      'Chapman stick',\n      'Clavichord',\n      'Clavinet',\n      'Double bass',\n      'Dulcimer',\n      'Fiddle',\n      'Guitar',\n      'Hammered dulcimer',\n      'Harp',\n      'Harpsichord',\n      'Lute',\n      'Lyre',\n      'Maguhu',\n      'Mandola',\n      'Mandolin',\n      'Octobass',\n      'Piano',\n      'Sitar',\n      'Ukulele',\n      'Viol',\n      'Violin',\n      'Washtub bass',\n    ],\n  },\n  {\n    label: 'Electronic instruments',\n    instruments: [\n      'AlphaSphere',\n      'Audiocubes',\n      'Bass pedals',\n      'Continuum Fingerboard',\n      'Croix Sonore',\n      \"Denis d'or\",\n      'Dubreq stylophone',\n      'Drum machine',\n      'Eigenharp',\n      'Electric guitar',\n      'Electronic keyboard',\n      'Electronic organ',\n      'EWI',\n      'Fingerboard synthesizer',\n      'Hammond organ',\n      'Keyboard',\n      'Keytar',\n      'Kraakdoos',\n      'Laser harp',\n      'Mellotron',\n      'MIDI keyboard',\n      'Omnichord',\n      'Ondes Martenot',\n      'Otamatone',\n      'Sampler',\n      'Seaboard music instrument',\n      'Skoog',\n      'Synclavier',\n      'Synthesizer',\n      'Teleharmonium',\n      'Tenori-on',\n      'Theremin',\n      'trautonium',\n      'Turntablism',\n      'Turntable',\n    ],\n  },\n].map(({ label, instruments }) => ({\n  label,\n  options: instruments.map(s => ({ name: s, label: s })),\n}));\n",{filepath:"musicalInstrumentsCode.ts",plugins:[M.Z],singleQuote:!0}),_="demoLayout_QhYR",z="demoSidebarHeader_WVGK",R="demoOption_DiUA",G="demoOptionCommands_K7rK",Z="demoImportCommands_fM9N",P="exportOptions_WUCH",W="wsPreWrap_DXzD";var J=n(70524),H=n(83253),V=n.n(H);const U=document.body,K=p.createElement("div",null,N.map(((e,t)=>p.createElement(p.Fragment,{key:t},t>0?", ":"",p.createElement("code",{key:e.name},e.name)))));function X(e){let{heading:t,isOpen:n,setIsOpen:a,code:r,setCode:l,error:o,loadQueryFromCode:i,notes:s}=e;const{colorMode:u}=(0,J.I)();return p.createElement(V(),{appElement:U,contentLabel:t,isOpen:n,onRequestClose:()=>a(!1),style:(m="dark"===u,{overlay:{backgroundColor:m?"rgba(0 0 0 / 75%)":"rgba(255 255 255 / 75%)",display:"flex",alignContent:"flex-start",justifyContent:"center",alignItems:"flex-start",paddingTop:"calc(var(--ifm-navbar-height) + var(--ifm-global-spacing))"},content:{inset:"unset",padding:"var(--ifm-global-spacing)",maxWidth:"800px",display:"flex",flexDirection:"column",gap:"var(--ifm-global-spacing)",boxShadow:"4px 4px 12px 4px rgb(0 0 0 / 26%)",backgroundColor:m?"var(--ifm-background-color)":"#ffffff"}})},p.createElement("h3",{style:{margin:"unset"}},t,p.createElement("span",{style:{cursor:"pointer",float:"right"},onClick:()=>a(!1)},"\u2715")),p.createElement("textarea",{style:{height:160,minWidth:690,width:"100%"},spellCheck:!1,value:r,onChange:e=>l(e.target.value)}),s&&p.createElement("p",{style:{fontSize:"smaller",margin:"unset"}},s),p.createElement("div",{style:{display:"flex",justifyContent:"flex-end",gap:"var(--ifm-global-spacing)"}},p.createElement("button",{type:"button",onClick:()=>i()},t),p.createElement("button",{type:"button",onClick:()=>a(!1)},"Cancel")),!!o&&p.createElement("pre",null,o),p.createElement("details",null,p.createElement("summary",{style:{cursor:"pointer"}},"Available fields"),K));var m}function $(){return p.createElement("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},p.createElement("title",null,"Open a live example in CodeSandbox"),p.createElement("path",{d:"M1.5 6l10.455-6L22.41 6l.09 11.95L11.955 24 1.5 18zm2.088 2.481v4.757l3.345 1.86v3.516l3.972 2.296v-8.272zm16.739 0l-7.317 4.157v8.272l3.972-2.296V15.1l3.345-1.861V8.48zM4.634 6.601l7.303 4.144 7.32-4.18-3.871-2.197-3.41 1.945-3.43-1.968L4.633 6.6z"}))}function Y(){return p.createElement("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},p.createElement("title",null,"Open a live example in StackBlitz"),p.createElement("path",{d:"M10.797 14.182H3.635L16.728 0l-3.525 9.818h7.162L7.272 24l3.524-9.818Z"}))}const ee="demoNav_zlnx",te="demoNavPackageLinks_wCVv",ne="demoNavStyleLinks_fSsZ",ae="demoNavPackageLink_vuDC";function re(e){let{variant:t,compressedState:n,dnd:a}=e;const r=(0,l.TH)(),o=(0,p.useMemo)((()=>["react-querybuilder",..."default"===t?[]:["@react-querybuilder/"+t],...a?["@react-querybuilder/dnd"]:[]]),[a,t]);return p.createElement("div",{className:ee},p.createElement("div",{className:te},p.createElement("a",{href:"https://codesandbox.io/s/github/react-querybuilder/react-querybuilder/tree/main/examples/"+("default"===t?"basic-ts":t)+"?file=/src/App.tsx",className:"svg-font-color",target:"_blank",rel:"noreferrer",style:{minWidth:"1rem"}},p.createElement($,null)),p.createElement("a",{href:"https://stackblitz.com/github/react-querybuilder/react-querybuilder/tree/main/examples/"+("default"===t?"basic-ts":t)+"?file=src/App.tsx",className:"svg-font-color",target:"_blank",rel:"noreferrer",style:{minWidth:"1rem"}},p.createElement(Y,null)),p.createElement("span",null,o.map(((e,t)=>p.createElement(p.Fragment,{key:e},t>0?", ":null,p.createElement("a",{href:"https://www.npmjs.com/package/"+e,target:"_blank",rel:"noreferrer",className:ae},e)))))),p.createElement("div",{className:ne},D.map((e=>{if(t===e)return p.createElement("span",{key:e},C[e]);const a=r.pathname.replace(RegExp("\\/"+t+"$"),"")+("default"===e?"":"/"+e)+(n?"#s="+n:"");return p.createElement("a",{key:e,href:a},C[e])}))))}var le,oe;const ie="\u24d8",se=L(c.parse(location.hash)),ue=se.options,me=null!=(le=se.query)?le:E,de=null!=(oe=se.queryIC)?oe:v,ce="SELECT *\n  FROM my_table\n WHERE "+(0,b.x9)(me,"sql")+";",pe=JSON.stringify({firstName:{$regex:"^Stev"},age:{$gt:28}},null,2),be=JSON.stringify((0,b.x9)(me,"jsonlogic"),null,2),he="Copy link",ge=p.createElement("em",null,"SQL can either be the full ",p.createElement("code",null,"SELECT")," statement or the ",p.createElement("code",null,"WHERE")," clause by itself. Trailing semicolon is optional."),ye=p.createElement("em",null,"Input must conform to the ",p.createElement("a",{href:"https://www.json.org/"},"JSON specification"),". MongoDB queries support an extended JSON format, so you may need to pre-parse query strings with a library like"," ",p.createElement("a",{href:"https://www.npmjs.com/package/mongodb-query-parser"},p.createElement("code",null,"mongodb-query-parser")),"before submitting them here or passing them to ",p.createElement("code",null,"parseMongoDB"),"."),fe=p.createElement("em",null,"Only strings that evaluate to JavaScript objects when processed with ",p.createElement("code",null,"JSON.parse")," ","will translate into queries."),Ee=e=>p.createElement(p.Fragment,null,e.children),ve=e=>{let{format:t}=e;const n=k.find((e=>{let[n]=e;return n===t}));return p.createElement(p.Fragment,null,p.createElement(r.Z,{href:"/docs/api/export#"+n[3]},"Documentation"),p.createElement(r.Z,{href:n[2]},"Format info"))},{label:ke,link:Ce,title:we}=y.parseNumbers,Se=e=>{let{checked:t,setter:n}=e;return p.createElement(p.Fragment,null,p.createElement("span",null,"\xa0"),p.createElement("div",{className:R},p.createElement("label",{title:we},p.createElement("input",{type:"checkbox",checked:t,onChange:e=>n(e.target.checked)})," "+ke+" ",p.createElement(r.Z,{href:""+Ce,title:"Click for documentation",style:{textDecoration:"none"}},ie))))};function De(e){let{variant:t="default",queryWrapper:n=Ee}=e;const g=(0,l.TH)(),[E,v]=(0,p.useState)(me),[k,C]=(0,p.useState)(de),[w,S]=(0,p.useState)("json_without_ids"),[D,B]=(0,p.useReducer)(Q,{...h,...ue}),[T,J]=(0,p.useState)(!1),[H,V]=(0,p.useState)(ce),[U,K]=(0,p.useState)(""),[$,Y]=(0,p.useState)(!1),[ee,te]=(0,p.useState)(pe),[ne,ae]=(0,p.useState)(""),[le,oe]=(0,p.useState)(!1),[se,ke]=(0,p.useState)('firstName.startsWith("Stev") && age > 28'),[Ce,we]=(0,p.useState)(""),[De,Be]=(0,p.useState)(!1),[Te,Ne]=(0,p.useState)(be),[Oe,qe]=(0,p.useState)(""),[xe,Me]=(0,p.useState)(he),Fe=(0,p.useMemo)((()=>"#"+c.stringify(D)),[D]),Le=(0,p.useCallback)((e=>{var t;const n=L(c.parse(null!=(t=c.parseUrl(e.newURL,{parseFragmentIdentifier:!0}).fragmentIdentifier)?t:"")),a={...h,...n.options};B({type:"replace",payload:a}),n.query&&v(n.query),n.queryIC&&C(n.queryIC)}),[]);(0,p.useEffect)((()=>(history.pushState(null,"",Fe),window.addEventListener("hashchange",Le),()=>window.removeEventListener("hashchange",Le))),[Fe,Le]);const Qe=(0,p.useMemo)((()=>f.map((e=>({...y[e],name:e,default:h[e],checked:D[e],setter:t=>B({type:"update",payload:{optionName:e,value:t}})})))),[D]),Ie=(0,p.useMemo)((()=>({format:w,fields:D.validateQuery?N:void 0,parseNumbers:D.parseNumbers})),[w,D.parseNumbers,D.validateQuery]),Ae=D.independentCombinators?k:E,je=(0,p.useMemo)((()=>((e,t)=>{const n=(0,b.x9)(e,t);return"json_without_ids"===t.format||"mongodb"===t.format?JSON.stringify(JSON.parse(n),null,2):"parameterized"===t.format||"parameterized_named"===t.format||"jsonlogic"===t.format?JSON.stringify(n,null,2):n})(Ae,Ie)),[Ie,Ae]),_e=(0,p.useMemo)((()=>((e,t)=>{const n="RuleGroupType"+(e.independentCombinators?"IC":""),a=e.enableDragAndDrop?"  ":"",r=t&&"default"!==t?"  ":"",[l,o,i]=(e=>{switch(e){case"antd":return["import { QueryBuilderAntD } from '@react-querybuilder/antd';","<QueryBuilderAntD>","</QueryBuilderAntD>"];case"bootstrap":return["import { QueryBuilderBootstrap } from '@react-querybuilder/bootstrap';\nimport 'bootstrap-icons/font/bootstrap-icons.scss';\nimport 'bootstrap/scss/bootstrap.scss';","<QueryBuilderBootstrap>","</QueryBuilderBootstrap>"];case"bulma":return["import { QueryBuilderBulma } from '@react-querybuilder/bulma';\nimport 'bulma/bulma.sass';","<QueryBuilderBulma>","</QueryBuilderBulma>"];case"chakra":return["import { QueryBuilderChakra } from '@react-querybuilder/chakra';\nimport { ChakraProvider, extendTheme } from '@chakra-ui/react';\n\nconst chakraTheme = extendTheme();","<ChakraProvider theme={chakraTheme}>\n<QueryBuilderChakra>","</QueryBuilderChakra>\n</ChakraProvider>"];case"material":return["import { createTheme, ThemeProvider } from '@mui/material/styles';\nimport { QueryBuilderMaterial } from '@react-querybuilder/material';\nimport Checkbox from '@mui/material/Checkbox';\nimport DragIndicator from '@mui/material/DragIndicator';\nimport FormControl from '@mui/material/FormControl';\nimport FormControlLabel from '@mui/material/FormControlLabel';\nimport Input from '@mui/material/Input';\nimport ListSubheader from '@mui/material/ListSubheader';\nimport MenuItem from '@mui/material/MenuItem';\nimport Radio from '@mui/material/Radio';\nimport RadioGroup from '@mui/material/RadioGroup';\nimport Select from '@mui/material/Select';\nimport Switch from '@mui/material/Switch';\nimport TextareaAutosize from '@mui/material/TextareaAutosize';\n\nconst muiTheme = createTheme();\n\nconst muiComponents = {\n  Checkbox,\n  DragIndicator,\n  FormControl,\n  FormControlLabel,\n  Input,\n  ListSubheader,\n  MenuItem,\n  Radio,\n  RadioGroup,\n  Select,\n  Switch,\n  TextareaAutosize,\n};","<ThemeProvider theme={muiTheme}>\n<QueryBuilderMaterial muiComponents={muiComponents}>","</QueryBuilderMaterial>\n</ThemeProvider>"]}return["","",""]})(t),s=t=>"autoSelectField"===t||"autoSelectOperator"===t||"resetOnFieldChange"===t?e[t]?"":t+"={false}":e[t]?t:"",u=["fields={fields}","query={query}","onQueryChange={q => setQuery(q)}",s("addRuleToNewGroups"),s("autoSelectField"),s("autoSelectOperator"),s("debugMode"),s("disabled"),s("independentCombinators"),s("listsAsArrays"),s("resetOnFieldChange"),s("resetOnOperatorChange"),s("showCloneButtons"),s("showCombinatorsBetweenRules"),s("showLockButtons"),s("showNotToggle"),e.validateQuery?"validator={defaultValidator}":""].filter(Boolean).map((e=>"\n      "+a+r+e)).join(""),m="import { useState } from 'react';\n"+(e.enableDragAndDrop?"import { QueryBuilderDnD } from '@react-querybuilder/dnd';\nimport * as ReactDnD from 'react-dnd';\nimport * as ReactDndHtml5Backend from 'react-dnd-html5-backend';\n":"")+"import type { "+n+" } from 'react-querybuilder';\nimport {"+(e.validateQuery?"defaultValidator, ":"")+" QueryBuilder } from 'react-querybuilder';\nimport { fields } from './fields';\nimport 'react-querybuilder/dist/query-builder.scss';"+(e.justifiedLayout?"\nimport './styles.scss';":"")+(l?"\n"+l:"")+"\n\nconst initialQuery: "+n+" = {"+(e.independentCombinators?"":" combinator: 'and',")+" rules: [] };\n\nexport const App = () => {\n  const [query, setQuery] = useState(initialQuery);\n\n  return ("+(e.enableDragAndDrop?"<QueryBuilderDnD dnd={{ ...ReactDnD, ...ReactDndHtml5Backend }}>":"")+o+"<QueryBuilder "+u+" />"+i+(e.enableDragAndDrop?"</QueryBuilderDnD>":"")+"\n  );\n}";return F.Z.format(m,{filepath:"App.tsx",plugins:[M.Z],singleQuote:!0})})(D,t)),[D,t]),ze=(0,p.useMemo)((()=>D.justifiedLayout?F.Z.format(".queryBuilder {\n  // Push the clone, lock, and remove buttons to the right edge\n  .ruleGroup-addGroup + button.ruleGroup-cloneGroup,\n  .ruleGroup-addGroup + button.ruleGroup-lock,\n  .ruleGroup-addGroup + button.ruleGroup-remove,\n  .rule-operators + button.rule-cloneRule,\n  .rule-operators + button.rule-lock,\n  .rule-operators + button.rule-remove,\n  .rule-value + button.rule-cloneRule,\n  .rule-value + button.rule-lock,\n  .rule-value + button.rule-remove,\n  .control + button.rule-cloneRule,\n  .control + button.rule-lock,\n  .control + button.rule-remove,\n  .chakra-select__wrapper + button.rule-cloneRule,\n  .chakra-select__wrapper + button.rule-lock,\n  .chakra-select__wrapper + button.rule-remove {\n    margin-left: auto;\n  }\n}\n",{filepath:"styles.scss",plugins:[x.Z]}):""),[D.justifiedLayout]),Re=(0,p.useCallback)((function(e,t){void 0===t&&(t=[]);let n=()=>S(e);return t.length>0&&(n=()=>{w===e||t.includes(w)||S(e)}),{onMouseUp:n,onKeyUp:e=>{"Enter"===e.key&&n()}}}),[w]),Ge=(0,p.useMemo)((()=>p.createElement(p.Fragment,null,p.createElement("h4",null,"Call"),p.createElement(i.Z,null,"formatQuery(query, "+(D.parseNumbers?"{ format: '"+w+"', parseNumbers: true }":"'"+w+"'")+")"),p.createElement("h4",null,"Return"),p.createElement(i.Z,{language:I(w),className:W},je))),[w,je,D.parseNumbers]),{setter:Ze}=(0,p.useMemo)((()=>Qe.find((e=>"parseNumbers"===e.name))),[Qe]),Pe=()=>{return encodeURIComponent((e={query:E,queryIC:k,options:D,style:t},O.lW.from(q.ZP.deflate(JSON.stringify(e))).toString("base64")));var e},We=(0,p.useMemo)((()=>({fields:N,...D,validator:D.validateQuery?b.Nd:void 0})),[D]),Je="rqb-"+t,He=(0,p.useMemo)((()=>(0,d.W)({validateQuery:D.validateQuery,justifiedLayout:D.justifiedLayout},"default"===t?"":"rqb-"+t)),[D.justifiedLayout,D.validateQuery,t]);return p.createElement("div",{className:_},p.createElement("div",null,p.createElement("h3",null,p.createElement(r.Z,{href:"/docs/api/querybuilder",title:"Boolean props on the QueryBuilder component (click for documentation)",className:z},p.createElement("span",null,"Options"),p.createElement("span",null,ie))),p.createElement("div",null,Qe.filter((e=>"parseNumbers"!==e.name)).map((e=>{let{checked:t,label:n,link:a,setter:l,title:o}=e;return p.createElement("div",{key:n,className:R},p.createElement("label",null,p.createElement("input",{type:"checkbox",checked:t,onChange:e=>l(e.target.checked)})," "+n),a?p.createElement(r.Z,{href:""+a,title:o+" (click for documentation)",style:{textDecoration:"none"}},ie):p.createElement("span",{title:o,style:{cursor:"pointer"}},ie))}))),p.createElement("div",{className:G},p.createElement("div",{title:"Reset the options above to their default values"},p.createElement("button",{type:"button",onClick:()=>B({type:"reset"})},"Reset")),p.createElement("div",{title:'Enable all features except "'+y.disabled.label+'" and "'+y.independentCombinators.label+'"'},p.createElement("button",{type:"button",onClick:()=>B({type:"all"})},"Select all")),p.createElement("div",{title:"Copy a URL that will load this demo with the options set as they are currently"},p.createElement("button",{type:"button",onClick:async()=>{try{await navigator.clipboard.writeText(""+location.origin+g.pathname+"#s="+Pe()),Me("Copied!")}catch(e){console.error("Clipboard error",e)}setTimeout((()=>Me(he)),1214)}},xe))),p.createElement("h3",null,p.createElement(r.Z,{href:"/docs/api/import",title:"Use the parse* methods to set the query from SQL/JsonLogic/etc. (click for documentation)",className:z},p.createElement("span",null,"Import"),p.createElement("span",null,ie))),p.createElement("div",{className:Z},p.createElement("button",{type:"button",onClick:()=>J(!0)},"Import SQL"),p.createElement("button",{type:"button",onClick:()=>Y(!0)},"Import MongoDB"),p.createElement("button",{type:"button",onClick:()=>oe(!0)},"Import CEL"),p.createElement("button",{type:"button",onClick:()=>Be(!0)},"Import JsonLogic"),p.createElement("div",null,p.createElement("code",{style:{fontSize:"8pt",marginBottom:"var(--ifm-global-spacing)"}},"react-querybuilder@",b.i8)))),p.createElement("div",{style:{display:"flex",flexDirection:"column",rowGap:"var(--ifm-global-spacing)"}},p.createElement(re,{variant:t,dnd:D.enableDragAndDrop,compressedState:Pe()}),p.createElement("div",{id:Je,className:He},p.createElement(n,null,p.createElement(o.yC,null,D.independentCombinators?p.createElement(b.zk,(0,a.Z)({},We,{independentCombinators:!0,key:"queryIC",query:k,onQueryChange:e=>C(e)})):p.createElement(b.zk,(0,a.Z)({},We,{independentCombinators:!1,key:"query",query:E,onQueryChange:e=>v(e)}))))),p.createElement(m.Z,{defaultValue:"code",values:[{value:"code",label:"Code"},{value:"sql",label:"SQL",attributes:Re("sql",["parameterized","parameterized_named"])},{value:"json",label:"JSON",attributes:Re("json_without_ids",["json"])},{value:"mongodb",label:"MongoDB",attributes:Re("mongodb")},{value:"cel",label:"CEL",attributes:Re("cel")},{value:"spel",label:"SpEL",attributes:Re("spel")},{value:"jsonlogic",label:"JsonLogic",attributes:Re("jsonlogic")}]},p.createElement(u.Z,{value:"code",label:"Code"},p.createElement(i.Z,{language:"tsx",title:"App.tsx"},_e),ze&&p.createElement(i.Z,{language:"scss",title:"styles.scss"},ze),p.createElement(s.Z,{summary:p.createElement("summary",null,"Other files")},p.createElement(i.Z,{language:"ts",title:"fields.ts"},A),p.createElement(i.Z,{language:"ts",title:"musicalInstruments.ts"},j))),p.createElement(u.Z,{value:"json"},p.createElement("div",{className:P},p.createElement(ve,{format:"json"}),p.createElement("span",null,"\xa0"),p.createElement("label",{key:"json_without_ids"},p.createElement("input",{type:"radio",checked:"json_without_ids"===w,onChange:()=>S("json_without_ids")})," ","Essential properties only"),p.createElement("label",{key:"json"},p.createElement("input",{type:"radio",checked:"json"===w,onChange:()=>S("json")})," ","Full query object"),p.createElement(Se,{checked:D.parseNumbers,setter:Ze})),Ge),p.createElement(u.Z,{value:"sql"},p.createElement("div",{className:P},p.createElement(ve,{format:"sql"}),p.createElement("span",null,"\xa0"),p.createElement("label",{key:"sql"},p.createElement("input",{type:"radio",checked:"sql"===w,onChange:()=>S("sql")})," ","Inline"),p.createElement("label",{key:"parameterized"},p.createElement("input",{type:"radio",checked:"parameterized"===w,onChange:()=>S("parameterized")})," ","Parameterized"),p.createElement("label",{key:"parameterized_named"},p.createElement("input",{type:"radio",checked:"parameterized_named"===w,onChange:()=>S("parameterized_named")})," ","Named parameters"),p.createElement(Se,{checked:D.parseNumbers,setter:Ze})),Ge),p.createElement(u.Z,{value:"mongodb"},p.createElement("div",{className:P},p.createElement(ve,{format:"mongodb"}),p.createElement(Se,{checked:D.parseNumbers,setter:Ze})),Ge),p.createElement(u.Z,{value:"cel"},p.createElement("div",{className:P},p.createElement(ve,{format:"cel"}),p.createElement(Se,{checked:D.parseNumbers,setter:Ze})),Ge),p.createElement(u.Z,{value:"spel"},p.createElement("div",{className:P},p.createElement(ve,{format:"spel"}),p.createElement(Se,{checked:D.parseNumbers,setter:Ze})),Ge),p.createElement(u.Z,{value:"jsonlogic"},p.createElement("div",{className:P},p.createElement(ve,{format:"jsonlogic"}),p.createElement(Se,{checked:D.parseNumbers,setter:Ze})),Ge))),p.createElement(X,{heading:"Import SQL",isOpen:T,setIsOpen:J,code:H,setCode:V,error:U,loadQueryFromCode:()=>{try{const e=(0,b.wl)(H),t=(0,b.wl)(H,{independentCombinators:!0});v(e),C(t),J(!1),K(""),window.scrollTo({top:0,behavior:"smooth"})}catch(e){K(e.message)}},notes:ge}),p.createElement(X,{heading:"Import MongoDB",isOpen:$,setIsOpen:Y,code:ee,setCode:te,error:ne,loadQueryFromCode:()=>{try{const e=(0,b.uB)(ee),t=(0,b.uP)(e);v(e),C(t),Y(!1),ae(""),window.scrollTo({top:0,behavior:"smooth"})}catch(e){ae(e.message)}},notes:ye}),p.createElement(X,{heading:"Import CEL",isOpen:le,setIsOpen:oe,code:se,setCode:ke,error:Ce,loadQueryFromCode:()=>{try{const e=(0,b.AE)(se),t=(0,b.AE)(se,{independentCombinators:!0});v(e),C(t),oe(!1),we(""),window.scrollTo({top:0,behavior:"smooth"})}catch(e){we(e.message)}},notes:""}),p.createElement(X,{heading:"Import JsonLogic",isOpen:De,setIsOpen:Be,code:Te,setCode:Ne,error:Oe,loadQueryFromCode:()=>{try{const e=(0,b.Ae)(Te),t=(0,b.uP)(e);v(e),C(t),Be(!1),qe(""),window.scrollTo({top:0,behavior:"smooth"})}catch(e){qe(e.message)}},notes:fe}))}},60375:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var a=n(19666),r=n(91022),l=n(67294);function o(){return l.createElement(r.Z,{description:"React Query Builder Demo"},l.createElement(a.Z,{fallback:l.createElement("div",null,"Loading...")},(()=>{const e=n(48935).Z;return l.createElement(e,null)})))}}}]);