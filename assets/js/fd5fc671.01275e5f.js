(self.webpackChunk=self.webpackChunk||[]).push([[4842],{42541:(e,t,a)=>{"use strict";a.d(t,{Z:()=>X});var n=a(83117),r=a(88746),o=a(76775),l=a(9320),i=a(73275),s=a(19260),u=a(30433),m=a(65559),d=a(86010),c=a(54887),p=a(67294),b=a(61236),h=a(55265),g=a(16430),y=a(6873);const f={demoLayout:"demoLayout_QhYR",demoSidebarHeader:"demoSidebarHeader_WVGK",demoOption:"demoOption_DiUA",demoOptionCommands:"demoOptionCommands_K7rK",demoImportCommands:"demoImportCommands_fM9N",exportOptions:"exportOptions_WUCH",wsPreWrap:"wsPreWrap_DXzD"};var v=a(70524),E=a(83253),C=a.n(E);const k=document.body,w=p.createElement("div",null,g.X.map(((e,t)=>p.createElement(p.Fragment,{key:t},t>0?", ":"",p.createElement("code",{key:e.name},e.name)))));function S(e){let{heading:t,isOpen:a,setIsOpen:n,code:r,setCode:o,error:l,loadQueryFromCode:i,notes:s}=e;const{colorMode:u}=(0,v.I)();return p.createElement(C(),{appElement:k,contentLabel:t,isOpen:a,onRequestClose:()=>n(!1),style:(m="dark"===u,{overlay:{backgroundColor:m?"rgba(0 0 0 / 75%)":"rgba(255 255 255 / 75%)",display:"flex",alignContent:"flex-start",justifyContent:"center",alignItems:"flex-start",paddingTop:"calc(var(--ifm-navbar-height) + var(--ifm-global-spacing))"},content:{inset:"unset",padding:"var(--ifm-global-spacing)",maxWidth:"800px",display:"flex",flexDirection:"column",gap:"var(--ifm-global-spacing)",boxShadow:"4px 4px 12px 4px rgb(0 0 0 / 26%)",backgroundColor:m?"var(--ifm-background-color)":"#ffffff"}})},p.createElement("h3",{style:{margin:"unset"}},t,p.createElement("span",{style:{cursor:"pointer",float:"right"},onClick:()=>n(!1)},"\u2715")),p.createElement("textarea",{style:{height:160,minWidth:690,width:"100%"},spellCheck:!1,value:r,onChange:e=>o(e.target.value)}),s&&p.createElement("p",{style:{fontSize:"smaller",margin:"unset"}},s),p.createElement("div",{style:{display:"flex",justifyContent:"flex-end",gap:"var(--ifm-global-spacing)"}},p.createElement("button",{type:"button",onClick:()=>i()},t),p.createElement("button",{type:"button",onClick:()=>n(!1)},"Cancel")),!!l&&p.createElement("pre",null,l),p.createElement("details",null,p.createElement("summary",{style:{cursor:"pointer"}},"Available fields"),w));var m}function B(){return p.createElement("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},p.createElement("title",null,"Open a live example in CodeSandbox"),p.createElement("path",{d:"M1.5 6l10.455-6L22.41 6l.09 11.95L11.955 24 1.5 18zm2.088 2.481v4.757l3.345 1.86v3.516l3.972 2.296v-8.272zm16.739 0l-7.317 4.157v8.272l3.972-2.296V15.1l3.345-1.861V8.48zM4.634 6.601l7.303 4.144 7.32-4.18-3.871-2.197-3.41 1.945-3.43-1.968L4.633 6.6z"}))}function O(){return p.createElement("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},p.createElement("title",null,"Open a live example in StackBlitz"),p.createElement("path",{d:"M10.797 14.182H3.635L16.728 0l-3.525 9.818h7.162L7.272 24l3.524-9.818Z"}))}const D="demoNav_zlnx",T="demoNavPackageLinks_wCVv",M="demoNavStyleLinks_fSsZ";function N(e){let{variant:t,compressedState:a}=e;const n=(0,o.TH)();return p.createElement("div",{className:D},p.createElement("div",{className:T},p.createElement("a",{href:"https://codesandbox.io/s/github/react-querybuilder/react-querybuilder/tree/main/examples/"+("default"===t?"basic-ts":t)+"?file=/src/App.tsx",className:"svg-font-color",target:"_blank",rel:"noreferrer",style:{minWidth:"1rem"}},p.createElement(B,null)),p.createElement("a",{href:"https://stackblitz.com/github/react-querybuilder/react-querybuilder/tree/main/examples/"+("default"===t?"basic-ts":t)+"?file=src/App.tsx",className:"svg-font-color",target:"_blank",rel:"noreferrer",style:{minWidth:"1rem"}},p.createElement(O,null))),p.createElement("div",{className:M},h.Rh.map((e=>{if(t===e)return p.createElement("span",{key:e},h.hR[e]);const r=n.pathname.replace(RegExp("\\/"+t+"$"),"")+("default"===e?"":"/"+e)+(a?"#s="+a:"");return p.createElement("a",{key:e,href:r},h.hR[e])}))))}var q,x;const L="\u24d8",F=(0,y.C$)(c.Z.parse(location.hash)),Q=F.options,I=null!=(q=F.query)?q:h.hb,Z=null!=(x=F.queryIC)?x:h.W6,j="SELECT *\n  FROM my_table\n WHERE "+(0,b.x9)(I,"sql")+";",A=JSON.stringify({firstName:{$regex:"^Stev"},age:{$gt:28}},null,2),R=JSON.stringify((0,b.x9)(I,"jsonlogic"),null,2),_="Copy link",z=p.createElement("em",null,"SQL can either be the full ",p.createElement("code",null,"SELECT")," statement or the ",p.createElement("code",null,"WHERE")," clause by itself. Trailing semicolon is optional."),P=p.createElement("em",null,"Input must conform to the ",p.createElement("a",{href:"https://www.json.org/"},"JSON specification"),". MongoDB queries support an extended JSON format, so you may need to pre-parse query strings with a library like"," ",p.createElement("a",{href:"https://www.npmjs.com/package/mongodb-query-parser"},p.createElement("code",null,"mongodb-query-parser")),"before submitting them here or passing them to ",p.createElement("code",null,"parseMongoDB"),"."),G=p.createElement("em",null,"Only strings that evaluate to JavaScript objects when processed with ",p.createElement("code",null,"JSON.parse")," ","will translate into queries."),W=e=>p.createElement(p.Fragment,null,e.children),J=e=>{let{format:t}=e;const a=h.d6.find((e=>{let[a]=e;return a===t}));return p.createElement(p.Fragment,null,p.createElement(r.Z,{href:"/docs/api/export#"+a[3]},"Documentation"),p.createElement(r.Z,{href:a[2]},"Format info"))},{label:H,link:V,title:U}=h.Qc.parseNumbers,K=e=>{let{checked:t,setter:a}=e;return p.createElement(p.Fragment,null,p.createElement("span",null,"\xa0"),p.createElement("div",{className:f.demoOption},p.createElement("label",{title:U},p.createElement("input",{type:"checkbox",checked:t,onChange:e=>a(e.target.checked)})," "+H+" ",p.createElement(r.Z,{href:""+V,title:"Click for documentation",style:{textDecoration:"none"}},L))))};function X(e){let{variant:t="default",queryWrapper:a=W}=e;const v=(0,o.TH)(),[E,C]=(0,p.useState)(I),[k,w]=(0,p.useState)(Z),[B,O]=(0,p.useState)("json_without_ids"),[D,T]=(0,p.useReducer)(y.wB,{...h.vC,...Q}),[M,q]=(0,p.useState)(!1),[x,F]=(0,p.useState)(j),[H,V]=(0,p.useState)(""),[U,X]=(0,p.useState)(!1),[$,Y]=(0,p.useState)(A),[ee,te]=(0,p.useState)(""),[ae,ne]=(0,p.useState)(!1),[re,oe]=(0,p.useState)('firstName.startsWith("Stev") && age > 28'),[le,ie]=(0,p.useState)(""),[se,ue]=(0,p.useState)(!1),[me,de]=(0,p.useState)(R),[ce,pe]=(0,p.useState)(""),[be,he]=(0,p.useState)(_),ge=(0,p.useMemo)((()=>"#"+c.Z.stringify(D)),[D]),ye=(0,p.useCallback)((e=>{var t;const a=(0,y.C$)(c.Z.parse(null!=(t=c.Z.parseUrl(e.newURL,{parseFragmentIdentifier:!0}).fragmentIdentifier)?t:"")),n={...h.vC,...a.options};T({type:"replace",payload:n}),a.query&&C(a.query),a.queryIC&&w(a.queryIC)}),[]);(0,p.useEffect)((()=>(history.pushState(null,"",ge),window.addEventListener("hashchange",ye),()=>window.removeEventListener("hashchange",ye))),[ge,ye]);const fe=(0,p.useMemo)((()=>h.N_.map((e=>({...h.Qc[e],name:e,default:h.vC[e],checked:D[e],setter:t=>T({type:"update",payload:{optionName:e,value:t}})})))),[D]),ve=(0,p.useMemo)((()=>({format:B,fields:D.validateQuery?g.X:void 0,parseNumbers:D.parseNumbers})),[B,D.parseNumbers,D.validateQuery]),Ee=D.independentCombinators?k:E,Ce=(0,p.useMemo)((()=>(0,y.rc)(Ee,ve)),[ve,Ee]),ke=(0,p.useMemo)((()=>(0,y.UF)(D,t)),[D,t]),we=(0,p.useMemo)((()=>(0,y.l)(D.justifiedLayout)),[D.justifiedLayout]),Se=(0,p.useCallback)((function(e,t){void 0===t&&(t=[]);let a=()=>O(e);return t.length>0&&(a=()=>{B===e||t.includes(B)||O(e)}),{onMouseUp:a,onKeyUp:e=>{"Enter"===e.key&&a()}}}),[B]),Be=(0,p.useMemo)((()=>p.createElement(p.Fragment,null,p.createElement("h4",null,"Call"),p.createElement(i.Z,null,"formatQuery(query, "+(D.parseNumbers?"{ format: '"+B+"', parseNumbers: true }":"'"+B+"'")+")"),p.createElement("h4",null,"Return"),p.createElement(i.Z,{language:(0,y.Z6)(B),className:f.wsPreWrap},Ce))),[B,Ce,D.parseNumbers]),{setter:Oe}=(0,p.useMemo)((()=>fe.find((e=>"parseNumbers"===e.name))),[fe]),De=(0,p.useMemo)((()=>["react-querybuilder",...D.enableDragAndDrop?["@react-querybuilder/dnd",...(0,b.Yd)(h.Cj.dnd).filter((e=>"react"!==e))]:[],..."default"===t?[]:["@react-querybuilder/"+t,...(0,b.Yd)(h.Cj[t]).filter((e=>"react"!==e))]]),[D.enableDragAndDrop,t]),Te=()=>encodeURIComponent((0,y.Zv)({query:E,queryIC:k,options:D,style:t})),Me=(0,p.useMemo)((()=>({fields:g.X,...D,validator:D.validateQuery?b.Nd:void 0})),[D]),Ne="rqb-"+t,qe=(0,p.useMemo)((()=>(0,d.W)({validateQuery:D.validateQuery,justifiedLayout:D.justifiedLayout},"default"===t?"":"rqb-"+t,D.showBranches?"queryBuilder-branches":"")),[D.justifiedLayout,D.showBranches,D.validateQuery,t]);return p.createElement("div",{className:f.demoLayout},p.createElement("div",null,p.createElement("h3",null,p.createElement(r.Z,{href:"/docs/api/querybuilder",title:"Boolean props on the QueryBuilder component (click for documentation)",className:f.demoSidebarHeader},p.createElement("span",null,"Options"),p.createElement("span",null,L))),p.createElement("div",null,fe.filter((e=>"parseNumbers"!==e.name)).map((e=>{let{checked:t,label:a,link:n,setter:o,title:l}=e;return p.createElement("div",{key:a,className:f.demoOption},p.createElement("label",null,p.createElement("input",{type:"checkbox",checked:t,onChange:e=>o(e.target.checked)})," "+a),n?p.createElement(r.Z,{href:""+n,title:l+" (click for documentation)",style:{textDecoration:"none"}},L):p.createElement("span",{title:l,style:{cursor:"pointer"}},L))}))),p.createElement("div",{className:f.demoOptionCommands},p.createElement("div",{title:"Reset the options above to their default values"},p.createElement("button",{type:"button",onClick:()=>T({type:"reset"})},"Reset")),p.createElement("div",{title:'Enable all features except "'+h.Qc.disabled.label+'" and "'+h.Qc.independentCombinators.label+'"'},p.createElement("button",{type:"button",onClick:()=>T({type:"all"})},"Select all")),p.createElement("div",{title:"Copy a URL that will load this demo with the options set as they are currently"},p.createElement("button",{type:"button",onClick:async()=>{try{await navigator.clipboard.writeText(""+location.origin+v.pathname+"#s="+Te()),he("Copied!")}catch(e){console.error("Clipboard error",e)}setTimeout((()=>he(_)),1214)}},be))),p.createElement("h3",null,p.createElement(r.Z,{href:"/docs/api/import",title:"Use the parse* methods to set the query from SQL/JsonLogic/etc. (click for documentation)",className:f.demoSidebarHeader},p.createElement("span",null,"Import"),p.createElement("span",null,L))),p.createElement("div",{className:f.demoImportCommands},p.createElement("button",{type:"button",onClick:()=>q(!0)},"Import SQL"),p.createElement("button",{type:"button",onClick:()=>X(!0)},"Import MongoDB"),p.createElement("button",{type:"button",onClick:()=>ne(!0)},"Import CEL"),p.createElement("button",{type:"button",onClick:()=>ue(!0)},"Import JsonLogic"),p.createElement("div",null,p.createElement("code",{style:{fontSize:"8pt",marginBottom:"var(--ifm-global-spacing)"}},"react-querybuilder@",b.i8)))),p.createElement("div",{style:{display:"flex",flexDirection:"column",rowGap:"var(--ifm-global-spacing)"}},p.createElement(N,{variant:t,compressedState:Te()}),p.createElement("div",{id:Ne,className:qe},p.createElement(a,null,p.createElement(l.yC,null,D.independentCombinators?p.createElement(b.zk,(0,n.Z)({},Me,{independentCombinators:!0,key:"queryIC",query:k,onQueryChange:e=>w(e)})):p.createElement(b.zk,(0,n.Z)({},Me,{independentCombinators:!1,key:"query",query:E,onQueryChange:e=>C(e)}))))),p.createElement(m.Z,{defaultValue:"code",values:[{value:"code",label:"Code"},{value:"sql",label:"SQL",attributes:Se("sql",["parameterized","parameterized_named"])},{value:"json",label:"JSON",attributes:Se("json_without_ids",["json"])},{value:"mongodb",label:"MongoDB",attributes:Se("mongodb")},{value:"cel",label:"CEL",attributes:Se("cel")},{value:"spel",label:"SpEL",attributes:Se("spel")},{value:"jsonlogic",label:"JsonLogic",attributes:Se("jsonlogic")}]},p.createElement(u.Z,{value:"code",label:"Code"},p.createElement(s.Z,{summary:p.createElement("summary",null,"Dependencies")},p.createElement("p",null,"The selected options require the following package",De.length>1&&"s",":"),p.createElement(i.Z,{language:"shell"},De.join(" ")),p.createElement("p",null,"Registry link",De.length>1&&"s",":"," ",De.map((e=>p.createElement("span",{key:e}," ",p.createElement("a",{href:"https://www.npmjs.com/package/"+e,target:"_blank",rel:"noreferrer",className:f.demoNavPackageLink},e)))))),p.createElement(i.Z,{language:"tsx",title:"App.tsx"},ke),we&&p.createElement(i.Z,{language:"scss",title:"styles.scss"},we),p.createElement(s.Z,{summary:p.createElement("summary",null,"Other files")},p.createElement(i.Z,{language:"ts",title:"fields.ts"},y.IA),p.createElement(i.Z,{language:"ts",title:"musicalInstruments.ts"},y.kT))),p.createElement(u.Z,{value:"json"},p.createElement("div",{className:f.exportOptions},p.createElement(J,{format:"json"}),p.createElement("span",null,"\xa0"),p.createElement("label",{key:"json_without_ids"},p.createElement("input",{type:"radio",checked:"json_without_ids"===B,onChange:()=>O("json_without_ids")})," ","Essential properties only"),p.createElement("label",{key:"json"},p.createElement("input",{type:"radio",checked:"json"===B,onChange:()=>O("json")})," ","Full query object"),p.createElement(K,{checked:D.parseNumbers,setter:Oe})),Be),p.createElement(u.Z,{value:"sql"},p.createElement("div",{className:f.exportOptions},p.createElement(J,{format:"sql"}),p.createElement("span",null,"\xa0"),p.createElement("label",{key:"sql"},p.createElement("input",{type:"radio",checked:"sql"===B,onChange:()=>O("sql")})," ","Inline"),p.createElement("label",{key:"parameterized"},p.createElement("input",{type:"radio",checked:"parameterized"===B,onChange:()=>O("parameterized")})," ","Parameterized"),p.createElement("label",{key:"parameterized_named"},p.createElement("input",{type:"radio",checked:"parameterized_named"===B,onChange:()=>O("parameterized_named")})," ","Named parameters"),p.createElement(K,{checked:D.parseNumbers,setter:Oe})),Be),p.createElement(u.Z,{value:"mongodb"},p.createElement("div",{className:f.exportOptions},p.createElement(J,{format:"mongodb"}),p.createElement(K,{checked:D.parseNumbers,setter:Oe})),Be),p.createElement(u.Z,{value:"cel"},p.createElement("div",{className:f.exportOptions},p.createElement(J,{format:"cel"}),p.createElement(K,{checked:D.parseNumbers,setter:Oe})),Be),p.createElement(u.Z,{value:"spel"},p.createElement("div",{className:f.exportOptions},p.createElement(J,{format:"spel"}),p.createElement(K,{checked:D.parseNumbers,setter:Oe})),Be),p.createElement(u.Z,{value:"jsonlogic"},p.createElement("div",{className:f.exportOptions},p.createElement(J,{format:"jsonlogic"}),p.createElement(K,{checked:D.parseNumbers,setter:Oe})),Be))),p.createElement(S,{heading:"Import SQL",isOpen:M,setIsOpen:q,code:x,setCode:F,error:H,loadQueryFromCode:()=>{try{const e=(0,b.wl)(x),t=(0,b.wl)(x,{independentCombinators:!0});C(e),w(t),q(!1),V(""),window.scrollTo({top:0,behavior:"smooth"})}catch(e){V(e.message)}},notes:z}),p.createElement(S,{heading:"Import MongoDB",isOpen:U,setIsOpen:X,code:$,setCode:Y,error:ee,loadQueryFromCode:()=>{try{const e=(0,b.uB)($),t=(0,b.uP)(e);C(e),w(t),X(!1),te(""),window.scrollTo({top:0,behavior:"smooth"})}catch(e){te(e.message)}},notes:P}),p.createElement(S,{heading:"Import CEL",isOpen:ae,setIsOpen:ne,code:re,setCode:oe,error:le,loadQueryFromCode:()=>{try{const e=(0,b.AE)(re),t=(0,b.AE)(re,{independentCombinators:!0});C(e),w(t),ne(!1),ie(""),window.scrollTo({top:0,behavior:"smooth"})}catch(e){ie(e.message)}},notes:""}),p.createElement(S,{heading:"Import JsonLogic",isOpen:se,setIsOpen:ue,code:me,setCode:de,error:ce,loadQueryFromCode:()=>{try{const e=(0,b.Ae)(me),t=(0,b.uP)(e);C(e),w(t),ue(!1),pe(""),window.scrollTo({top:0,behavior:"smooth"})}catch(e){pe(e.message)}},notes:G}))}},16430:(e,t,a)=>{"use strict";a.d(t,{X:()=>l});var n=a(61236),r=a(88215);const o=e=>!!e.value,l=[{name:"firstName",label:"First Name",placeholder:"Enter first name",validator:o},{name:"lastName",label:"Last Name",placeholder:"Enter last name",defaultOperator:"beginsWith",validator:o},{name:"age",label:"Age",inputType:"number",validator:o},{name:"isMusician",label:"Is a musician",valueEditorType:"checkbox",operators:n._z.filter((e=>"="===e.name)),defaultValue:!1},{name:"instrument",label:"Primary instrument",valueEditorType:"select",values:r.y,defaultValue:"Cowbell",operators:n._z.filter((e=>"="===e.name))},{name:"alsoPlays",label:"Also plays",valueEditorType:"multiselect",values:r.y,defaultValue:"More cowbell",operators:n._z.filter((e=>"in"===e.name))},{name:"gender",label:"Gender",operators:n._z.filter((e=>"="===e.name)),valueEditorType:"radio",values:[{name:"M",label:"Male"},{name:"F",label:"Female"},{name:"O",label:"Other"}]},{name:"height",label:"Height",validator:o},{name:"job",label:"Job",validator:o},{name:"description",label:"Description",valueEditorType:"textarea"},{name:"birthdate",label:"Birth Date",inputType:"date"},{name:"datetime",label:"Show Time",inputType:"datetime-local"},{name:"alarm",label:"Daily Alarm",inputType:"time"},{name:"groupedField1",label:"Grouped Field 1",comparator:"group",group:"group1",valueSources:["field","value"]},{name:"groupedField2",label:"Grouped Field 2",comparator:"group",group:"group1",valueSources:["field","value"]},{name:"groupedField3",label:"Grouped Field 3",comparator:"group",group:"group1",valueSources:["field","value"]},{name:"groupedField4",label:"Grouped Field 4",comparator:"group",group:"group1",valueSources:["field","value"]}]},55265:(e,t,a)=>{"use strict";a.d(t,{Cj:()=>k,N_:()=>b,Qc:()=>p,Rh:()=>C,W6:()=>g,d6:()=>y,hR:()=>f,hb:()=>h,vC:()=>d,wG:()=>c});var n=a(28481),r=a(20793),o=a(79910),l=a(37583),i=a(11378),s=a(9401),u=a(61236);const m=()=>"00-0-4-1-000".replace(/[^-]/g,(e=>(65536*(Math.random()+~~e)>>e).toString(16).padStart(4,"0"))),d={showCombinatorsBetweenRules:!1,showNotToggle:!1,showCloneButtons:!1,showLockButtons:!1,resetOnFieldChange:!0,resetOnOperatorChange:!1,autoSelectField:!0,autoSelectOperator:!0,addRuleToNewGroups:!1,validateQuery:!1,independentCombinators:!1,listsAsArrays:!1,enableDragAndDrop:!1,disabled:!1,debugMode:!1,parseNumbers:!1,justifiedLayout:!1,showBranches:!1},c=["showCombinatorsBetweenRules","showNotToggle","showCloneButtons","showLockButtons","resetOnFieldChange","resetOnOperatorChange","autoSelectField","autoSelectOperator","addRuleToNewGroups","validateQuery","independentCombinators","listsAsArrays","enableDragAndDrop","disabled","debugMode","parseNumbers","justifiedLayout","showBranches"],p={showCombinatorsBetweenRules:{link:"/docs/api/querybuilder#showcombinatorsbetweenrules",label:"Combinators between rules",title:"Display combinator (and/or) selectors between rules instead of in the group header"},showNotToggle:{link:"/docs/api/querybuilder#shownottoggle",label:'Show "not" toggle',title:'Display a checkbox to invert a group\'s rules (labelled "Not" by default)'},showCloneButtons:{link:"/docs/api/querybuilder#showclonebuttons",label:"Show clone buttons",title:"Display buttons to clone rules and groups"},resetOnFieldChange:{link:"/docs/api/querybuilder#resetonfieldchange",label:"Reset on field change",title:"Operator and value will be reset when a rule's field selection changes"},resetOnOperatorChange:{link:"/docs/api/querybuilder#resetonoperatorchange",label:"Reset on operator change",title:"The value will reset when the operator changes"},autoSelectField:{link:"/docs/api/querybuilder#autoselectfield",label:"Auto-select field",title:"The default field will be automatically selected for new rules"},autoSelectOperator:{link:"/docs/api/querybuilder#autoselectoperator",label:"Auto-select operator",title:"The default operator will be automatically selected for new rules"},addRuleToNewGroups:{link:"/docs/api/querybuilder#addruletonewgroups",label:"Add rule to new groups",title:"A rule will be automatically added to new groups"},validateQuery:{link:"/docs/api/validation",label:"Use validation",title:'The validator function(s) will be used to bold the "+Rule" button for empty groups and put a purple background on empty text fields and emtpy groups'},independentCombinators:{link:"/docs/api/querybuilder#independentcombinators",label:"Independent combinators",title:"Combinators between rules can be independently updated"},listsAsArrays:{link:"/docs/api/querybuilder#listsasarrays",label:"Lists as arrays",title:"Lists will be stored as arrays instead of comma-separated strings"},enableDragAndDrop:{link:"/docs/api/querybuilder#enabledraganddrop",label:"Drag-and-drop enabled",title:"Rules and groups can be reordered and dragged to different groups"},disabled:{link:"/docs/api/querybuilder#disabled",label:"Disabled",title:"Disable all components within the query builder"},showLockButtons:{link:"/docs/api/querybuilder#showlockbuttons",label:"Show lock buttons",title:"Display buttons to lock/disable rules and groups"},debugMode:{link:"/docs/api/querybuilder#debugmode",label:"Debug mode",title:"Enable debug logging for QueryBuilder and React DnD (see console)"},parseNumbers:{link:"/docs/api/export#parse-numbers",label:"Parse numbers",title:"Parse real numbers from strings in rule values"},justifiedLayout:{link:"",label:"Justified layout",title:'Add custom CSS to push the "clone", "lock", and "remove" buttons to the right edge'},showBranches:{link:"/docs/api/classnames",label:"Show branches",title:'Add the `.queryBuilder-branches` class to display "tree view" branches'}},b=c.sort(((e,t)=>p[e].label.localeCompare(p[t].label))),h=((0,u.uP)({combinator:"and",rules:[]}),{id:m(),combinator:"and",not:!1,rules:[{id:m(),field:"firstName",value:"Stev",operator:"beginsWith"},{id:m(),field:"lastName",value:"Vai, Vaughan",operator:"in"},{id:m(),field:"age",operator:">",value:"28"},{id:m(),combinator:"or",rules:[{id:m(),field:"isMusician",operator:"=",value:!0},{id:m(),field:"instrument",operator:"=",value:"Guitar"}]},{id:m(),field:"groupedField1",operator:"=",value:"groupedField4",valueSource:"field"},{id:m(),field:"birthdate",value:"1969-06-01",operator:"<"}]}),g=(0,u.uP)(h),y=[["sql","SQL","https://en.wikipedia.org/wiki/SQL","sql"],["parameterized","SQL (parameterized)","https://en.wikipedia.org/wiki/SQL","parameterized-sql"],["parameterized_named","SQL (named parameters)","https://en.wikipedia.org/wiki/SQL","named-parameters"],["json_without_ids","JSON (no identifiers)","https://en.wikipedia.org/wiki/JSON","json-without-identifiers"],["json","JSON","https://en.wikipedia.org/wiki/JSON","json"],["mongodb","MongoDB","https://www.mongodb.com/","mongodb"],["cel","CEL","https://github.com/google/cel-spec","common-expression-language"],["spel","SpEL","https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#expressions-language-ref","spring-expression-language"],["jsonlogic","JsonLogic","https://jsonlogic.com/","jsonlogic"]],f={default:"Default",bootstrap:"Bootstrap",material:"MUI/Material",antd:"Ant Design",chakra:"Chakra UI",bulma:"Bulma"},{default:v,...E}=f,C=["default",...(0,u.Yd)(E).sort()],k={default:{},dnd:i.Cj,antd:n.Cj,bootstrap:r.Cj,bulma:o.Cj,chakra:l.Cj,material:s.Cj}},88215:(e,t,a)=>{"use strict";a.d(t,{y:()=>n});const n=[{label:"Percussion instruments",instruments:["Clapstick","Cowbell","Cymbal","Gong","Maraca","Marimba","More cowbell","Spoon","Steelpan","Tambourine","Triangle","Vibraphone","Washboard","Wood block","Wooden fish","Xylophone"]},{label:"Membranophones",instruments:["Barrel drum","Bass drum","Bongo drums","Conga","Drum","Drum kit","Jew's harp","Octaban","Samphor","Snare drum","Timpani","Tom-tom"]},{label:"Wind instruments",instruments:["Accordion","Air horn","Bagpipe","Baritone horn","Bassoon","Bazooka","Beatboxing","Blown bottle","Bugle","Clarinet","Conch","Cornet","Didgeridoo","Double bell euphonium","Doulophone","English horn","Euphonium","Flugelhorn","Flute","French horn","Harmonica","Irish flute","Jug","Kazoo","Melodeon","Mezzo-soprano","Oboe","Ocarina","Pan flute","Piccolo","Pipe organ","Recorder","Saxophone","Slide whistle","Sousaphone","Trombone","Trumpet","Tuba","Whistle"]},{label:"Stringed instruments",instruments:["Aeolian harp","Bandolin","Banjo ukulele","Cello","Chapman stick","Clavichord","Clavinet","Double bass","Dulcimer","Fiddle","Guitar","Hammered dulcimer","Harp","Harpsichord","Lute","Lyre","Maguhu","Mandola","Mandolin","Octobass","Piano","Sitar","Ukulele","Viol","Violin","Washtub bass"]},{label:"Electronic instruments",instruments:["AlphaSphere","Audiocubes","Bass pedals","Continuum Fingerboard","Croix Sonore","Denis d'or","Dubreq stylophone","Drum machine","Eigenharp","Electric guitar","Electronic keyboard","Electronic organ","EWI","Fingerboard synthesizer","Hammond organ","Keyboard","Keytar","Kraakdoos","Laser harp","Mellotron","MIDI keyboard","Omnichord","Ondes Martenot","Otamatone","Sampler","Seaboard music instrument","Skoog","Synclavier","Synthesizer","Teleharmonium","Tenori-on","Theremin","trautonium","Turntablism","Turntable"]}].map((e=>{let{label:t,instruments:a}=e;return{label:t,options:a.map((e=>({name:e,label:e})))}}))},6873:(e,t,a)=>{"use strict";a.d(t,{IA:()=>y,UF:()=>h,Z6:()=>b,l:()=>g,rc:()=>p,Zv:()=>m,C$:()=>d,kT:()=>f,wB:()=>c});var n=a(48764),r=a(27885),o=a(96336),l=a(43005),i=a(84034),s=a(61236),u=a(55265);const m=e=>n.Buffer.from(r.ZP.deflate(JSON.stringify(e))).toString("base64"),d=e=>{var t;let{s:a,...o}=e,l=null;a&&(l=(e=>{const t=n.Buffer.from(e,"base64"),a=r.ZP.inflate(t,{to:"string"});return JSON.parse(a)})(a));const i=Object.fromEntries(Object.entries(o).map((e=>{let[t,a]=e;return[t,"true"===a]})));return{...l,options:{...null==(t=l)?void 0:t.options,...i}}},c=(e,t)=>{if("reset"===t.type)return u.vC;if("all"===t.type){const e={...u.vC};for(const t of u.wG)e[t]="disabled"!==t&&"independentCombinators"!==t;return e}if("replace"===t.type)return t.payload;const{optionName:a,value:n}=t.payload;return{...e,[a]:n}},p=(e,t)=>{const a=(0,s.x9)(e,t);return"json_without_ids"===t.format||"mongodb"===t.format?JSON.stringify(JSON.parse(a),null,2):"parameterized"===t.format||"parameterized_named"===t.format||"jsonlogic"===t.format?JSON.stringify(a,null,2):a},b=e=>"sql"===e||"cel"===e||"spel"===e?e:"json",h=(e,t)=>{const a="RuleGroupType"+(e.independentCombinators?"IC":""),n=e.enableDragAndDrop?"  ":"",r=t&&"default"!==t?"  ":"",[o,s,u]=(e=>{switch(e){case"antd":return["import { QueryBuilderAntD } from '@react-querybuilder/antd';","<QueryBuilderAntD>","</QueryBuilderAntD>"];case"bootstrap":return["import { QueryBuilderBootstrap } from '@react-querybuilder/bootstrap';\nimport 'bootstrap-icons/font/bootstrap-icons.scss';\nimport 'bootstrap/scss/bootstrap.scss';","<QueryBuilderBootstrap>","</QueryBuilderBootstrap>"];case"bulma":return["import { QueryBuilderBulma } from '@react-querybuilder/bulma';\nimport 'bulma/bulma.sass';","<QueryBuilderBulma>","</QueryBuilderBulma>"];case"chakra":return["import { QueryBuilderChakra } from '@react-querybuilder/chakra';\nimport { ChakraProvider, extendTheme } from '@chakra-ui/react';\n\nconst chakraTheme = extendTheme();","<ChakraProvider theme={chakraTheme}>\n<QueryBuilderChakra>","</QueryBuilderChakra>\n</ChakraProvider>"];case"material":return["import { createTheme, ThemeProvider } from '@mui/material/styles';\nimport { QueryBuilderMaterial } from '@react-querybuilder/material';\nimport Checkbox from '@mui/material/Checkbox';\nimport DragIndicator from '@mui/material/DragIndicator';\nimport FormControl from '@mui/material/FormControl';\nimport FormControlLabel from '@mui/material/FormControlLabel';\nimport Input from '@mui/material/Input';\nimport ListSubheader from '@mui/material/ListSubheader';\nimport MenuItem from '@mui/material/MenuItem';\nimport Radio from '@mui/material/Radio';\nimport RadioGroup from '@mui/material/RadioGroup';\nimport Select from '@mui/material/Select';\nimport Switch from '@mui/material/Switch';\nimport TextareaAutosize from '@mui/material/TextareaAutosize';\n\nconst muiTheme = createTheme();\n\nconst muiComponents = {\n  Checkbox,\n  DragIndicator,\n  FormControl,\n  FormControlLabel,\n  Input,\n  ListSubheader,\n  MenuItem,\n  Radio,\n  RadioGroup,\n  Select,\n  Switch,\n  TextareaAutosize,\n};","<ThemeProvider theme={muiTheme}>\n<QueryBuilderMaterial muiComponents={muiComponents}>","</QueryBuilderMaterial>\n</ThemeProvider>"]}return["","",""]})(t),m=t=>"autoSelectField"===t||"autoSelectOperator"===t||"resetOnFieldChange"===t?e[t]?"":t+"={false}":e[t]?t:"",d=["fields={fields}","query={query}","onQueryChange={q => setQuery(q)}",m("addRuleToNewGroups"),m("autoSelectField"),m("autoSelectOperator"),m("debugMode"),m("disabled"),m("independentCombinators"),m("listsAsArrays"),m("resetOnFieldChange"),m("resetOnOperatorChange"),m("showCloneButtons"),m("showCombinatorsBetweenRules"),m("showLockButtons"),m("showNotToggle"),e.validateQuery?"validator={defaultValidator}":""].filter(Boolean).map((e=>"\n      "+n+r+e)).join(""),c="import { useState } from 'react';\n"+(e.enableDragAndDrop?"import { QueryBuilderDnD } from '@react-querybuilder/dnd';\nimport * as ReactDnD from 'react-dnd';\nimport * as ReactDndHtml5Backend from 'react-dnd-html5-backend';\n":"")+"import type { "+a+" } from 'react-querybuilder';\nimport {"+(e.validateQuery?"defaultValidator, ":"")+" QueryBuilder } from 'react-querybuilder';\nimport { fields } from './fields';\nimport 'react-querybuilder/dist/query-builder.scss';"+(e.justifiedLayout?"\nimport './styles.scss';":"")+(o?"\n"+o:"")+"\n\nconst initialQuery: "+a+" = {"+(e.independentCombinators?"":" combinator: 'and',")+" rules: [] };\n\nexport const App = () => {\n  const [query, setQuery] = useState(initialQuery);\n\n  return ("+(e.enableDragAndDrop?"<QueryBuilderDnD dnd={{ ...ReactDnD, ...ReactDndHtml5Backend }}>":"")+s+"<QueryBuilder "+d+" />"+u+(e.enableDragAndDrop?"</QueryBuilderDnD>":"")+"\n  );\n}";return i.Z.format(c,{filepath:"App.tsx",plugins:[l.Z],singleQuote:!0})},g=e=>e?i.Z.format(".queryBuilder {\n  // Push the clone, lock, and remove buttons to the right edge\n  .ruleGroup-addGroup + button.ruleGroup-cloneGroup,\n  .ruleGroup-addGroup + button.ruleGroup-lock,\n  .ruleGroup-addGroup + button.ruleGroup-remove,\n  .rule-operators + button.rule-cloneRule,\n  .rule-operators + button.rule-lock,\n  .rule-operators + button.rule-remove,\n  .rule-value + button.rule-cloneRule,\n  .rule-value + button.rule-lock,\n  .rule-value + button.rule-remove,\n  .control + button.rule-cloneRule,\n  .control + button.rule-lock,\n  .control + button.rule-remove,\n  .chakra-select__wrapper + button.rule-cloneRule,\n  .chakra-select__wrapper + button.rule-lock,\n  .chakra-select__wrapper + button.rule-remove {\n    margin-left: auto;\n  }\n}\n",{filepath:"styles.scss",plugins:[o.Z]}):"",y=i.Z.format("import type { Field, RuleType } from 'react-querybuilder';\nimport { defaultOperators } from 'react-querybuilder';\nimport { musicalInstruments } from './musicalInstruments';\n\nexport const validator = (r: RuleType) => !!r.value;\n\nexport const fields: Field[] = [\n  {\n    name: 'firstName',\n    label: 'First Name',\n    placeholder: 'Enter first name',\n    validator,\n  },\n  {\n    name: 'lastName',\n    label: 'Last Name',\n    placeholder: 'Enter last name',\n    defaultOperator: 'beginsWith',\n    validator,\n  },\n  { name: 'age', label: 'Age', inputType: 'number', validator },\n  {\n    name: 'isMusician',\n    label: 'Is a musician',\n    valueEditorType: 'checkbox',\n    operators: defaultOperators.filter(op => op.name === '='),\n    defaultValue: false,\n  },\n  {\n    name: 'instrument',\n    label: 'Primary instrument',\n    valueEditorType: 'select',\n    values: musicalInstruments,\n    defaultValue: 'Cowbell',\n    operators: defaultOperators.filter(op => op.name === '='),\n  },\n  {\n    name: 'alsoPlays',\n    label: 'Also plays',\n    valueEditorType: 'multiselect',\n    values: musicalInstruments,\n    defaultValue: 'More cowbell',\n    operators: defaultOperators.filter(op => op.name === 'in'),\n  },\n  {\n    name: 'gender',\n    label: 'Gender',\n    operators: defaultOperators.filter(op => op.name === '='),\n    valueEditorType: 'radio',\n    values: [\n      { name: 'M', label: 'Male' },\n      { name: 'F', label: 'Female' },\n      { name: 'O', label: 'Other' },\n    ],\n  },\n  { name: 'height', label: 'Height', validator },\n  { name: 'job', label: 'Job', validator },\n  { name: 'description', label: 'Description', valueEditorType: 'textarea' },\n  { name: 'birthdate', label: 'Birth Date', inputType: 'date' },\n  { name: 'datetime', label: 'Show Time', inputType: 'datetime-local' },\n  { name: 'alarm', label: 'Daily Alarm', inputType: 'time' },\n  {\n    name: 'groupedField1',\n    label: 'Grouped Field 1',\n    comparator: 'group',\n    group: 'group1',\n    valueSources: ['field', 'value'],\n  },\n  {\n    name: 'groupedField2',\n    label: 'Grouped Field 2',\n    comparator: 'group',\n    group: 'group1',\n    valueSources: ['field', 'value'],\n  },\n  {\n    name: 'groupedField3',\n    label: 'Grouped Field 3',\n    comparator: 'group',\n    group: 'group1',\n    valueSources: ['field', 'value'],\n  },\n  {\n    name: 'groupedField4',\n    label: 'Grouped Field 4',\n    comparator: 'group',\n    group: 'group1',\n    valueSources: ['field', 'value'],\n  },\n];\n",{filepath:"fields.ts",plugins:[l.Z],singleQuote:!0}),f=i.Z.format("// Adapted from https://en.wikipedia.org/wiki/List_of_musical_instruments\nimport type { OptionGroup } from 'react-querybuilder';\n\nexport const musicalInstruments: OptionGroup[] = [\n  {\n    label: 'Percussion instruments',\n    instruments: [\n      'Clapstick',\n      'Cowbell',\n      'Cymbal',\n      'Gong',\n      'Maraca',\n      'Marimba',\n      'More cowbell',\n      'Spoon',\n      'Steelpan',\n      'Tambourine',\n      'Triangle',\n      'Vibraphone',\n      'Washboard',\n      'Wood block',\n      'Wooden fish',\n      'Xylophone',\n    ],\n  },\n  {\n    label: 'Membranophones',\n    instruments: [\n      'Barrel drum',\n      'Bass drum',\n      'Bongo drums',\n      'Conga',\n      'Drum',\n      'Drum kit',\n      \"Jew's harp\",\n      'Octaban',\n      'Samphor',\n      'Snare drum',\n      'Timpani',\n      'Tom-tom',\n    ],\n  },\n  {\n    label: 'Wind instruments',\n    instruments: [\n      'Accordion',\n      'Air horn',\n      'Bagpipe',\n      'Baritone horn',\n      'Bassoon',\n      'Bazooka',\n      'Beatboxing',\n      'Blown bottle',\n      'Bugle',\n      'Clarinet',\n      'Conch',\n      'Cornet',\n      'Didgeridoo',\n      'Double bell euphonium',\n      'Doulophone',\n      'English horn',\n      'Euphonium',\n      'Flugelhorn',\n      'Flute',\n      'French horn',\n      'Harmonica',\n      'Irish flute',\n      'Jug',\n      'Kazoo',\n      'Melodeon',\n      'Mezzo-soprano',\n      'Oboe',\n      'Ocarina',\n      'Pan flute',\n      'Piccolo',\n      'Pipe organ',\n      'Recorder',\n      'Saxophone',\n      'Slide whistle',\n      'Sousaphone',\n      'Trombone',\n      'Trumpet',\n      'Tuba',\n      'Whistle',\n    ],\n  },\n  {\n    label: 'Stringed instruments',\n    instruments: [\n      'Aeolian harp',\n      'Bandolin',\n      'Banjo ukulele',\n      'Cello',\n      'Chapman stick',\n      'Clavichord',\n      'Clavinet',\n      'Double bass',\n      'Dulcimer',\n      'Fiddle',\n      'Guitar',\n      'Hammered dulcimer',\n      'Harp',\n      'Harpsichord',\n      'Lute',\n      'Lyre',\n      'Maguhu',\n      'Mandola',\n      'Mandolin',\n      'Octobass',\n      'Piano',\n      'Sitar',\n      'Ukulele',\n      'Viol',\n      'Violin',\n      'Washtub bass',\n    ],\n  },\n  {\n    label: 'Electronic instruments',\n    instruments: [\n      'AlphaSphere',\n      'Audiocubes',\n      'Bass pedals',\n      'Continuum Fingerboard',\n      'Croix Sonore',\n      \"Denis d'or\",\n      'Dubreq stylophone',\n      'Drum machine',\n      'Eigenharp',\n      'Electric guitar',\n      'Electronic keyboard',\n      'Electronic organ',\n      'EWI',\n      'Fingerboard synthesizer',\n      'Hammond organ',\n      'Keyboard',\n      'Keytar',\n      'Kraakdoos',\n      'Laser harp',\n      'Mellotron',\n      'MIDI keyboard',\n      'Omnichord',\n      'Ondes Martenot',\n      'Otamatone',\n      'Sampler',\n      'Seaboard music instrument',\n      'Skoog',\n      'Synclavier',\n      'Synthesizer',\n      'Teleharmonium',\n      'Tenori-on',\n      'Theremin',\n      'trautonium',\n      'Turntablism',\n      'Turntable',\n    ],\n  },\n].map(({ label, instruments }) => ({\n  label,\n  options: instruments.map(s => ({ name: s, label: s })),\n}));\n",{filepath:"musicalInstrumentsCode.ts",plugins:[l.Z],singleQuote:!0})},3805:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});var n=a(19666),r=a(70524),o=a(91022),l=a(67294);function i(){const{colorMode:e}=(0,r.I)(),t=(0,l.useMemo)((()=>a(32610).Z),[]),n={Button:(0,l.useMemo)((()=>a(94718).ZP),[]),Checkbox:(0,l.useMemo)((()=>a(15352).ZP),[]),DragIndicator:t,FormControl:(0,l.useMemo)((()=>a(42154).ZP),[]),FormControlLabel:(0,l.useMemo)((()=>a(92037).ZP),[]),Input:(0,l.useMemo)((()=>a(76171).ZP),[]),ListSubheader:(0,l.useMemo)((()=>a(12840).ZP),[]),MenuItem:(0,l.useMemo)((()=>a(61261).ZP),[]),Radio:(0,l.useMemo)((()=>a(30297).ZP),[]),RadioGroup:(0,l.useMemo)((()=>a(94757).Z),[]),Select:(0,l.useMemo)((()=>a(44025).ZP),[]),Switch:(0,l.useMemo)((()=>a(60023).ZP),[]),TextareaAutosize:(0,l.useMemo)((()=>a(83977).Z),[])},{ThemeProvider:o,createTheme:i}=(0,l.useMemo)((()=>a(63599)),[]),{QueryBuilderMaterial:s}=(0,l.useMemo)((()=>a(29299)),[]),u=(0,l.useMemo)((()=>a(42541).Z),[]),m=(0,l.useMemo)((()=>{const t=i({palette:{mode:e}});return console.log(t),t}),[e,i]);return l.createElement(o,{theme:m},l.createElement(s,{muiComponents:n},l.createElement(u,{variant:"material"})))}function s(){return l.createElement(o.Z,{description:"React Query Builder Demo"},l.createElement(n.Z,{fallback:l.createElement("div",null,"Loading...")},(()=>l.createElement(i,null))))}},46601:()=>{},89214:()=>{},71922:()=>{},2363:()=>{},52361:()=>{},94616:()=>{}}]);