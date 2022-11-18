(self.webpackChunk=self.webpackChunk||[]).push([[184],{96742:(e,t,a)=>{"use strict";a.d(t,{Z:()=>oe});var r=a(83117),n=a(39960),l=a(76775),o=a(9320),s=a(86010),i=a(17563),u=a(67294),d=a(87504);const m=[{label:"Percussion instruments",instruments:["Clapstick","Cowbell","Cymbal","Gong","Maraca","Marimba","Spoon","Steelpan","Tambourine","Triangle","Vibraphone","Washboard","Wood block","Wooden fish","Xylophone"]},{label:"Membranophones",instruments:["Barrel drum","Bass drum","Bongo drums","Conga","Drum","Drum kit","Jew's harp","Octaban","Samphor","Snare drum","Timpani","Tom-tom"]},{label:"Wind instruments",instruments:["Accordion","Air horn","Bagpipe","Baritone horn","Bassoon","Bazooka","Beatboxing","Blown bottle","Bugle","Clarinet","Conch","Cornet","Didgeridoo","Double bell euphonium","Doulophone","English horn","Euphonium","Flugelhorn","Flute","French horn","Harmonica","Irish flute","Jug","Kazoo","Melodeon","Mezzo-soprano","Oboe","Ocarina","Pan flute","Piccolo","Pipe organ","Recorder","Saxophone","Slide whistle","Sousaphone","Trombone","Trumpet","Tuba","Whistle"]},{label:"Stringed instruments",instruments:["Aeolian harp","Bandolin","Banjo ukulele","Cello","Chapman stick","Clavichord","Clavinet","Double bass","Dulcimer","Fiddle","Guitar","Hammered dulcimer","Harp","Harpsichord","Lute","Lyre","Maguhu","Mandola","Mandolin","Octobass","Piano","Sitar","Ukulele","Viol","Violin","Washtub bass"]},{label:"Electronic instruments",instruments:["AlphaSphere","Audiocubes","Bass pedals","Continuum Fingerboard","Croix Sonore","Denis d'or","Dubreq stylophone","Drum machine","Eigenharp","Electric guitar","Electronic keyboard","Electronic organ","EWI","Fingerboard synthesizer","Hammond organ","Keyboard","Keytar","Kraakdoos","Laser harp","Mellotron","MIDI keyboard","Omnichord","Ondes Martenot","Otamatone","Sampler","Seaboard music instrument","Skoog","Synclavier","Synthesizer","Teleharmonium","Tenori-on","Theremin","trautonium","Turntablism","Turntable"]}].map((e=>{let{label:t,instruments:a}=e;return{label:t,options:a.map((e=>({name:e,label:e})))}})),c=e=>!!e.value,p={showCombinatorsBetweenRules:!1,showNotToggle:!1,showCloneButtons:!1,showLockButtons:!1,resetOnFieldChange:!0,resetOnOperatorChange:!1,autoSelectField:!0,autoSelectOperator:!0,addRuleToNewGroups:!1,validateQuery:!1,independentCombinators:!1,listsAsArrays:!1,enableDragAndDrop:!1,disabled:!1,debugMode:!1,parseNumbers:!1,justifiedLayout:!1},b=["showCombinatorsBetweenRules","showNotToggle","showCloneButtons","showLockButtons","resetOnFieldChange","resetOnOperatorChange","autoSelectField","autoSelectOperator","addRuleToNewGroups","validateQuery","independentCombinators","listsAsArrays","enableDragAndDrop","disabled","debugMode","parseNumbers","justifiedLayout"],h={showCombinatorsBetweenRules:{link:"/docs/api/querybuilder#showcombinatorsbetweenrules",label:"Combinators between rules",title:"Display combinator (and/or) selectors between rules instead of in the group header"},showNotToggle:{link:"/docs/api/querybuilder#shownottoggle",label:'Show "not" toggle',title:'Display a checkbox to invert a group\'s rules (labelled "Not" by default)'},showCloneButtons:{link:"/docs/api/querybuilder#showclonebuttons",label:"Show clone buttons",title:"Display buttons to clone rules and groups"},resetOnFieldChange:{link:"/docs/api/querybuilder#resetonfieldchange",label:"Reset on field change",title:"Operator and value will be reset when a rule's field selection changes"},resetOnOperatorChange:{link:"/docs/api/querybuilder#resetonoperatorchange",label:"Reset on operator change",title:"The value will reset when the operator changes"},autoSelectField:{link:"/docs/api/querybuilder#autoselectfield",label:"Auto-select field",title:"The default field will be automatically selected for new rules"},autoSelectOperator:{link:"/docs/api/querybuilder#autoselectoperator",label:"Auto-select operator",title:"The default operator will be automatically selected for new rules"},addRuleToNewGroups:{link:"/docs/api/querybuilder#addruletonewgroups",label:"Add rule to new groups",title:"A rule will be automatically added to new groups"},validateQuery:{link:"/docs/api/validation",label:"Use validation",title:'The validator function(s) will be used to bold the "+Rule" button for empty groups and put a purple background on empty text fields and emtpy groups'},independentCombinators:{link:"/docs/api/querybuilder#independentcombinators",label:"Independent combinators",title:"Combinators between rules can be independently updated"},listsAsArrays:{link:"/docs/api/querybuilder#listsasarrays",label:"Lists as arrays",title:"Lists will be stored as arrays instead of comma-separated strings"},enableDragAndDrop:{link:"/docs/api/querybuilder#enabledraganddrop",label:"Drag-and-drop enabled",title:"Rules and groups can be reordered and dragged to different groups"},disabled:{link:"/docs/api/querybuilder#disabled",label:"Disabled",title:"Disable all components within the query builder"},showLockButtons:{link:"/docs/api/querybuilder#showlockbuttons",label:"Show lock buttons",title:"Display buttons to lock/disable rules and groups"},debugMode:{link:"/docs/api/querybuilder#debugmode",label:"Debug mode",title:"Enable debug logging for QueryBuilder and React DnD (see console)"},parseNumbers:{link:"/docs/api/export#parsing-numbers",label:"Parse numbers",title:"Parse real numbers from strings in rule values"},justifiedLayout:{link:"",label:"Justified layout",title:'Add custom CSS to push the "clone", "lock", and "remove" buttons to the right edge'}},g=b.sort(((e,t)=>h[e].label.localeCompare(h[t].label))),y=[{name:"firstName",label:"First Name",placeholder:"Enter first name",validator:c},{name:"lastName",label:"Last Name",placeholder:"Enter last name",defaultOperator:"beginsWith",validator:c},{name:"age",label:"Age",inputType:"number",validator:c},{name:"isMusician",label:"Is a musician",valueEditorType:"checkbox",operators:d._z.filter((e=>"="===e.name)),defaultValue:!1},{name:"instrument",label:"Primary instrument",valueEditorType:"select",values:m,defaultValue:"Piano",operators:d._z.filter((e=>"="===e.name||"in"===e.name))},{name:"alsoPlaysInstruments",label:"Also plays instruments",valueEditorType:"multiselect",values:m,defaultValue:"Guitar",operators:d._z.filter((e=>"in"===e.name))},{name:"gender",label:"Gender",operators:d._z.filter((e=>"="===e.name)),valueEditorType:"radio",values:[{name:"M",label:"Male"},{name:"F",label:"Female"},{name:"O",label:"Other"}]},{name:"height",label:"Height",validator:c},{name:"job",label:"Job",validator:c},{name:"description",label:"Description",valueEditorType:"textarea"},{name:"birthdate",label:"Birth Date",inputType:"date"},{name:"datetime",label:"Show Time",inputType:"datetime-local"},{name:"alarm",label:"Daily Alarm",inputType:"time"},{name:"groupedField1",label:"Grouped Field 1",comparator:"group",group:"group1",valueSources:["field","value"]},{name:"groupedField2",label:"Grouped Field 2",comparator:"group",group:"group1",valueSources:["field","value"]},{name:"groupedField3",label:"Grouped Field 3",comparator:"group",group:"group1",valueSources:["field","value"]},{name:"groupedField4",label:"Grouped Field 4",comparator:"group",group:"group1",valueSources:["field","value"]}],f=((0,d.uP)({combinator:"and",rules:[]}),{id:""+Math.random(),combinator:"and",not:!1,rules:[{id:""+Math.random(),field:"firstName",value:"Stev",operator:"beginsWith"},{id:""+Math.random(),field:"lastName",value:"Vai, Vaughan",operator:"in"},{id:""+Math.random(),field:"age",operator:">",value:"28"},{id:""+Math.random(),combinator:"or",rules:[{id:""+Math.random(),field:"isMusician",operator:"=",value:!0},{id:""+Math.random(),field:"instrument",operator:"=",value:"Guitar"}]},{field:"groupedField1",operator:"=",value:"groupedField4",valueSource:"field"}]}),j=(0,d.uP)(f),v=[["sql","SQL","https://en.wikipedia.org/wiki/SQL"],["parameterized","SQL (parameterized)","https://en.wikipedia.org/wiki/SQL"],["parameterized_named","SQL (named parameters)","https://en.wikipedia.org/wiki/SQL"],["json_without_ids","JSON (no identifiers)","https://en.wikipedia.org/wiki/JSON"],["json","JSON","https://en.wikipedia.org/wiki/JSON"],["mongodb","MongoDB","https://www.mongodb.com/"],["cel","CEL","https://github.com/google/cel-spec"],["spel","SpEL","https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#expressions-language-ref"],["jsonlogic","JsonLogic","https://jsonlogic.com/"]],k={default:"Default",bootstrap:"Bootstrap",material:"MUI/Material",antd:"Ant Design",chakra:"Chakra UI",bulma:"Bulma"},{default:E,...w}=k,C=["default",...(0,d.Yd)(w).sort()];var S=a(48764),O=a(27885);const x=e=>{var t;let{s:a,...r}=e,n=null;a&&(n=(e=>{const t=S.lW.from(e,"base64"),a=O.ZP.inflate(t,{to:"string"});return JSON.parse(a)})(a));const l=Object.fromEntries(Object.entries(r).map((e=>{let[t,a]=e;return[t,"true"===a]})));return{...n,options:{...null==(t=n)?void 0:t.options,...l}}},N=(e,t)=>{if("reset"===t.type)return p;if("all"===t.type){const e={...p};for(const t of b)e[t]="disabled"!==t&&"independentCombinators"!==t;return e}if("replace"===t.type)return t.payload;const{optionName:a,value:r}=t.payload;return{...e,[a]:r}},q="demoLayout_QhYR",L="demoSidebarHeader_WVGK",z="demoOption_DiUA",D="demoOptionCommands_K7rK",M="demoImportCommands_fM9N";var T=a(92949),B=a(83253),I=a.n(B);function F(e){let{heading:t,isOpen:a,setIsOpen:r,code:n,setCode:l,error:o,loadQueryFromCode:s,notes:i}=e;const{colorMode:d}=(0,T.I)();return u.createElement(I(),{contentLabel:t,isOpen:a,onRequestClose:()=>r(!1),style:(m="dark"===d,{overlay:{backgroundColor:m?"rgba(0 0 0 / 75%)":"rgba(255 255 255 / 75%)",display:"flex",alignContent:"flex-start",justifyContent:"center",alignItems:"flex-start",paddingTop:"calc(var(--ifm-navbar-height) + var(--ifm-global-spacing))"},content:{inset:"unset",padding:"var(--ifm-global-spacing)",maxWidth:"800px",display:"flex",flexDirection:"column",gap:"var(--ifm-global-spacing)",boxShadow:"4px 4px 12px 4px rgb(0 0 0 / 26%)",backgroundColor:m?"var(--ifm-background-color)":"#ffffff"}})},u.createElement("h3",{style:{margin:"unset"}},t,u.createElement("span",{style:{cursor:"pointer",float:"right"},onClick:()=>r(!1)},"\u2715")),u.createElement("textarea",{style:{height:160,minWidth:690,width:"100%"},spellCheck:!1,onChange:e=>l(e.target.value)},n),i&&u.createElement("p",{style:{fontSize:"smaller",margin:"unset"}},i),u.createElement("div",{style:{display:"flex",justifyContent:"flex-end",gap:"var(--ifm-global-spacing)"}},u.createElement("button",{type:"button",onClick:()=>s()},t),u.createElement("button",{type:"button",onClick:()=>r(!1)},"Cancel")),!!o&&u.createElement("pre",null,o));var m}function Q(){return u.createElement("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},u.createElement("title",null,"Open a live example in CodeSandbox"),u.createElement("path",{d:"M1.5 6l10.455-6L22.41 6l.09 11.95L11.955 24 1.5 18zm2.088 2.481v4.757l3.345 1.86v3.516l3.972 2.296v-8.272zm16.739 0l-7.317 4.157v8.272l3.972-2.296V15.1l3.345-1.861V8.48zM4.634 6.601l7.303 4.144 7.32-4.18-3.871-2.197-3.41 1.945-3.43-1.968L4.633 6.6z"}))}function A(){return u.createElement("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},u.createElement("title",null,"Open a live example in StackBlitz"),u.createElement("path",{d:"M10.797 14.182H3.635L16.728 0l-3.525 9.818h7.162L7.272 24l3.524-9.818Z"}))}const _="demoNav_zlnx",R="demoNavPackageLinks_wCVv",J="demoNavStyleLinks_fSsZ",W="demoNavPackageLink_vuDC";function P(e){let{variant:t,compressedState:a,dnd:r}=e;const n=(0,l.TH)(),o=(0,u.useMemo)((()=>["react-querybuilder",..."default"===t?[]:["@react-querybuilder/"+t],...r?["@react-querybuilder/dnd"]:[]]),[r,t]);return u.createElement("div",{className:_},u.createElement("div",{className:R},u.createElement("a",{href:"https://codesandbox.io/s/github/react-querybuilder/react-querybuilder/tree/main/examples/"+("default"===t?"basic-ts":t)+"?file=/src/App.tsx",className:"svg-font-color",target:"_blank",rel:"noreferrer",style:{minWidth:"1rem"}},u.createElement(Q,null)),u.createElement("a",{href:"https://stackblitz.com/github/react-querybuilder/react-querybuilder/tree/main/examples/"+("default"===t?"basic-ts":t)+"?file=src/App.tsx",className:"svg-font-color",target:"_blank",rel:"noreferrer",style:{minWidth:"1rem"}},u.createElement(A,null)),u.createElement("span",null,o.map(((e,t)=>u.createElement(u.Fragment,null,t>0?", ":null,u.createElement("a",{key:e,href:"https://www.npmjs.com/package/"+e,target:"_blank",rel:"noreferrer",className:W},e)))))),u.createElement("div",{className:J},C.map((e=>{if(t===e)return u.createElement("span",{key:e},k[e]);const r=n.pathname.replace(RegExp("\\/"+t+"$"),"")+("default"===e?"":"/"+e)+(a?"#s="+a:"");return u.createElement("a",{key:e,href:r},k[e])}))))}var Z,G;const H="\u24d8",U=x(i.parse(location.hash)),V=U.options,K=null!=(Z=U.query)?Z:f,$=null!=(G=U.queryIC)?G:j,Y="SELECT *\n  FROM my_table\n WHERE "+(0,d.x9)(K,"sql")+";",X=JSON.stringify({firstName:{$regex:"^Stev"},age:{$gt:28}},null,2),ee=JSON.stringify((0,d.x9)(K,"jsonlogic"),null,2),te="Copy link",ae=u.createElement("em",null,"SQL can either be the full ",u.createElement("code",null,"SELECT")," statement or the ",u.createElement("code",null,"WHERE")," clause by itself. Trailing semicolon is optional."),re=u.createElement("em",null,"Input must conform to the ",u.createElement("a",{href:"https://www.json.org/"},"JSON specification"),". MongoDB queries support an extended JSON format, so you may need to pre-parse query strings with a library like"," ",u.createElement("a",{href:"https://www.npmjs.com/package/mongodb-query-parser"},u.createElement("code",null,"mongodb-query-parser")),"before submitting them here or passing them to ",u.createElement("code",null,"parseMongoDB"),"."),ne=u.createElement("em",null,"Only strings that evaluate to JavaScript objects when processed with ",u.createElement("code",null,"JSON.parse")," ","will translate into queries."),le=e=>u.createElement(u.Fragment,null,e.children);function oe(e){let{variant:t="default",queryWrapper:a=le}=e;const m=(0,l.TH)(),[c,b]=(0,u.useState)(K),[f,j]=(0,u.useState)($),[k,E]=(0,u.useState)("json_without_ids"),[w,C]=(0,u.useReducer)(N,{...p,...V}),[T,B]=(0,u.useState)(!1),[I,Q]=(0,u.useState)(Y),[A,_]=(0,u.useState)(""),[R,J]=(0,u.useState)(!1),[W,Z]=(0,u.useState)(X),[G,U]=(0,u.useState)(""),[oe,se]=(0,u.useState)(!1),[ie,ue]=(0,u.useState)('firstName.startsWith("Stev") && age > 28'),[de,me]=(0,u.useState)(""),[ce,pe]=(0,u.useState)(!1),[be,he]=(0,u.useState)(ee),[ge,ye]=(0,u.useState)(""),[fe,je]=(0,u.useState)(te),ve=(0,u.useMemo)((()=>"#"+i.stringify(w)),[w]),ke=(0,u.useCallback)((e=>{var t;const a=x(i.parse(null!=(t=i.parseUrl(e.newURL,{parseFragmentIdentifier:!0}).fragmentIdentifier)?t:"")),r={...p,...a.options};C({type:"replace",payload:r}),a.query&&b(a.query),a.queryIC&&j(a.queryIC)}),[]);(0,u.useEffect)((()=>(history.pushState(null,"",ve),window.addEventListener("hashchange",ke),()=>window.removeEventListener("hashchange",ke))),[ve,ke]);const Ee=(0,u.useMemo)((()=>g.map((e=>({...h[e],default:p[e],checked:w[e],setter:t=>C({type:"update",payload:{optionName:e,value:t}})})))),[w]),we=(0,u.useMemo)((()=>({format:k,fields:w.validateQuery?y:void 0,parseNumbers:w.parseNumbers})),[k,w.parseNumbers,w.validateQuery]),Ce=w.independentCombinators?f:c,Se=(0,u.useMemo)((()=>((e,t)=>{const a=(0,d.x9)(e,t);return"json_without_ids"===t.format||"mongodb"===t.format?JSON.stringify(JSON.parse(a),null,2):"parameterized"===t.format||"parameterized_named"===t.format||"jsonlogic"===t.format?JSON.stringify(a,null,2):a})(Ce,we)),[we,Ce]),Oe=()=>{return encodeURIComponent((e={query:c,queryIC:f,options:w,style:t},S.lW.from(O.ZP.deflate(JSON.stringify(e))).toString("base64")));var e},xe=(0,u.useMemo)((()=>({fields:y,...w,validator:w.validateQuery?d.Nd:void 0})),[w]),Ne="rqb-"+t,qe=(0,u.useMemo)((()=>(0,s.W)({validateQuery:w.validateQuery,justifiedLayout:w.justifiedLayout},"default"===t?"":"rqb-"+t)),[w.justifiedLayout,w.validateQuery,t]);return u.createElement("div",{className:q},u.createElement("div",null,u.createElement("h3",null,u.createElement(n.Z,{href:"/docs/api/querybuilder",title:"Boolean props on the QueryBuilder component (click for documentation)",className:L},u.createElement("span",null,"Options"),u.createElement("span",null,H))),u.createElement("div",null,Ee.map((e=>{let{checked:t,label:a,link:r,setter:l,title:o}=e;return u.createElement("div",{key:a,className:z},u.createElement("label",null,u.createElement("input",{type:"checkbox",checked:t,onChange:e=>l(e.target.checked)}),a),r?u.createElement(n.Z,{href:""+r,title:o+" (click for documentation)",style:{textDecoration:"none"}},H):u.createElement("span",{title:o,style:{cursor:"pointer"}},H))}))),u.createElement("div",{className:D},u.createElement("div",{title:"Reset the options above to their default values"},u.createElement("button",{type:"button",onClick:()=>C({type:"reset"})},"Reset")),u.createElement("div",{title:'Enable all features except "'+h.disabled.label+'" and "'+h.independentCombinators.label+'"'},u.createElement("button",{type:"button",onClick:()=>C({type:"all"})},"Select all")),u.createElement("div",{title:"Copy a URL that will load this demo with the options set as they are currently"},u.createElement("button",{type:"button",onClick:async()=>{try{await navigator.clipboard.writeText(""+location.origin+m.pathname+"#s="+Oe()),je("Copied!")}catch(e){console.error("Clipboard error",e)}setTimeout((()=>je(te)),1214)}},fe))),u.createElement("h3",null,u.createElement(n.Z,{href:"/docs/api/export",title:"The export format of the formatQuery function (click for documentation)",className:L},u.createElement("span",null,"Export"),u.createElement("span",null,H))),u.createElement("div",{style:{marginBottom:"var(--ifm-heading-margin-bottom)"}},v.map((e=>{let[t,a,r]=e;return u.createElement("div",{key:t,style:{display:"flex",justifyContent:"space-between",flexDirection:"row"}},u.createElement("label",null,u.createElement("input",{type:"radio",checked:k===t,onChange:()=>E(t)}),a),u.createElement(n.Z,{href:r,title:'formatQuery(query, "'+t+'") (click for information)',style:{textDecoration:"none"}},H))}))),u.createElement("h3",null,u.createElement(n.Z,{href:"/docs/api/import",title:"Use the parse* methods to set the query from SQL/JsonLogic/etc. (click for documentation)",className:L},u.createElement("span",null,"Import"),u.createElement("span",null,H))),u.createElement("div",{className:M},u.createElement("button",{type:"button",onClick:()=>B(!0)},"Import SQL"),u.createElement("button",{type:"button",onClick:()=>J(!0)},"Import MongoDB"),u.createElement("button",{type:"button",onClick:()=>se(!0)},"Import CEL"),u.createElement("button",{type:"button",onClick:()=>pe(!0)},"Import JsonLogic"),u.createElement("div",null,u.createElement("code",{style:{fontSize:"8pt",marginBottom:"var(--ifm-global-spacing)"}},"react-querybuilder@",d.i8)))),u.createElement("div",{style:{display:"flex",flexDirection:"column",rowGap:"var(--ifm-global-spacing)"}},u.createElement(P,{variant:t,dnd:w.enableDragAndDrop,compressedState:Oe()}),u.createElement("div",{id:Ne,className:qe},u.createElement(a,null,u.createElement(o.yC,null,w.independentCombinators?u.createElement(d.zk,(0,r.Z)({},xe,{independentCombinators:!0,key:"queryIC",query:f,onQueryChange:e=>j(e)})):u.createElement(d.zk,(0,r.Z)({},xe,{independentCombinators:!1,key:"query",query:c,onQueryChange:e=>b(e)}))))),u.createElement("pre",{style:{whiteSpace:"pre-wrap"}},Se)),u.createElement(F,{heading:"Import SQL",isOpen:T,setIsOpen:B,code:I,setCode:Q,error:A,loadQueryFromCode:()=>{try{const e=(0,d.wl)(I),t=(0,d.wl)(I,{independentCombinators:!0});b(e),j(t),B(!1),_(""),window.scrollTo({top:0,behavior:"smooth"})}catch(e){_(e.message)}},notes:ae}),u.createElement(F,{heading:"Import MongoDB",isOpen:R,setIsOpen:J,code:W,setCode:Z,error:G,loadQueryFromCode:()=>{try{const e=(0,d.uB)(W),t=(0,d.uP)(e);b(e),j(t),J(!1),U(""),window.scrollTo({top:0,behavior:"smooth"})}catch(e){U(e.message)}},notes:re}),u.createElement(F,{heading:"Import CEL",isOpen:oe,setIsOpen:se,code:ie,setCode:ue,error:de,loadQueryFromCode:()=>{try{const e=(0,d.AE)(ie),t=(0,d.AE)(ie,{independentCombinators:!0});b(e),j(t),se(!1),me(""),window.scrollTo({top:0,behavior:"smooth"})}catch(e){me(e.message)}},notes:""}),u.createElement(F,{heading:"Import JsonLogic",isOpen:ce,setIsOpen:pe,code:be,setCode:he,error:ge,loadQueryFromCode:()=>{try{const e=(0,d.Ae)(be),t=(0,d.uP)(e);b(e),j(t),pe(!1),ye(""),window.scrollTo({top:0,behavior:"smooth"})}catch(e){ye(e.message)}},notes:ne}))}},39639:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>d});var r=a(83117),n=a(91262),l=a(75455),o=a(67767),s=a(67294);const i=e=>s.createElement(l.uv,(0,r.Z)({},e,{getPopupContainer:()=>document.getElementById("rqb-antd")}));function u(){const e=(0,s.useMemo)((()=>a(96742).Z),[]);return s.createElement(l.iR,{controlElements:{fieldSelector:i,combinatorSelector:i,operatorSelector:i,valueSourceSelector:i}},s.createElement(e,{variant:"antd"}))}function d(){return s.createElement(o.Z,{description:"React Query Builder Ant Design Demo"},s.createElement(n.Z,{fallback:s.createElement("div",null,"Loading...")},(()=>s.createElement(u,null))))}},46700:(e,t,a)=>{var r={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":95606,"./ss.js":95606,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function n(e){var t=l(e);return a(t)}function l(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=l,e.exports=n,n.id=46700}}]);