(self.webpackChunk=self.webpackChunk||[]).push([[265],{26482:(e,t,a)=>{"use strict";a.d(t,{e:()=>o});var l=a(67294),n=a(61236),i=a(3612);const o=e=>{let{version:t,...a}=e;const o=4===t?i.zk:n.zk;return l.createElement("div",{key:"v"+(null!=t?t:5),className:"queryBuilderEmbed"},l.createElement(o,a))}},90069:(e,t,a)=>{"use strict";a.d(t,{ZP:()=>o});var l=a(83117),n=(a(67294),a(3905));const i={toc:[]};function o(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Please refer to the ",(0,n.kt)("a",{parentName:"p",href:"../typescript"},"TypeScript")," page for information about the types and interfaces referenced below.")))}o.isMDXComponent=!0},61584:(e,t,a)=>{"use strict";a.r(t),a.d(t,{NullComponent:()=>v,assets:()=>u,contentTitle:()=>d,default:()=>N,defaultQuery:()=>y,fieldSelector:()=>c,fields:()=>k,frontMatter:()=>p,metadata:()=>s,operatorSelector:()=>f,toc:()=>m,valueEditor:()=>h});var l=a(83117),n=(a(67294),a(3905)),i=a(90069),o=a(26482),r=a(61236);const p={title:"<ValueEditor />",description:"ValueEditor types"},d=void 0,s={unversionedId:"api/valueeditor",id:"api/valueeditor",title:"<ValueEditor />",description:"ValueEditor types",source:"@site/docs/api/valueeditor.mdx",sourceDirName:"api",slug:"/api/valueeditor",permalink:"/docs/next/api/valueeditor",draft:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/docs/api/valueeditor.mdx",tags:[],version:"current",frontMatter:{title:"<ValueEditor />",description:"ValueEditor types"},sidebar:"mySidebar",previous:{title:"<QueryBuilder />",permalink:"/docs/next/api/querybuilder"},next:{title:"CSS classes",permalink:"/docs/next/api/classnames"}},u={},m=[{value:"Showcase",id:"showcase",level:2},{value:"Value sources",id:"value-sources",level:2},{value:"Example",id:"example",level:3},{value:"Filtering the field list",id:"filtering-the-field-list",level:3}],c=e=>{let{value:t,options:a}=e;return(0,n.kt)("select",{value:t,disabled:!0},a.map((e=>{var t;return(0,n.kt)("option",{key:e.name,value:e.name},null!=(t=e.valueSources)&&t.includes("field")?'valueSource: "field"':"inputType"in e?'inputType: "'+e.label+'"':'valueEditorType: "'+e.label+'"')})))},f=e=>{let{value:t,options:a}=e;return(0,n.kt)("select",{value:t,disabled:!0},a.map((e=>(0,n.kt)("option",{key:e.name,value:e.name},e.label))))},h=e=>(0,n.kt)("div",{style:{display:"flex"}},(0,n.kt)(r.S$,(0,l.Z)({},e,{mdxType:"ValueEditor"})),"\xa0",(0,n.kt)("span",{style:{fontSize:"x-small",opacity:.5}},"(stored value: "+("boolean"==typeof e.value?e.value:JSON.stringify(e.value))+")")),k=[{name:"text",label:"text",inputType:"text"},{name:"select",label:"select",valueEditorType:"select",values:[{name:"option1",label:"Option 1"},{name:"option2",label:"Option 2"}]},{name:"checkbox",label:"checkbox",valueEditorType:"checkbox"},{name:"radio",label:"radio",valueEditorType:"radio",values:[{name:"option1",label:"Option 1"},{name:"option2",label:"Option 2"}]},{name:"textarea",label:"textarea",valueEditorType:"textarea"},{name:"multiselect",label:"multiselect",valueEditorType:"multiselect",values:[{name:"option1",label:"Option 1"},{name:"option2",label:"Option 2"}]},{name:"date",label:"date",inputType:"date"},{name:"datetime-local",label:"datetime-local",inputType:"datetime-local"},{name:"time",label:"time",inputType:"time"},{name:"field",label:"field",valueSources:["field","value"]}],y={combinator:"and",rules:[{field:"text",operator:"=",value:""},{field:"select",operator:"=",value:"option2"},{field:"checkbox",operator:"=",value:!0},{field:"radio",operator:"=",value:"option2"},{field:"textarea",operator:"=",value:""},{field:"multiselect",operator:"=",value:"option1,option2"},{field:"date",operator:"=",value:""},{field:"datetime-local",operator:"=",value:""},{field:"time",operator:"=",value:""},{field:"field",operator:"=",value:"text",valueSource:"field"}]},v=()=>null,b={toc:m,fieldSelector:c};function N(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(i.ZP,{mdxType:"TypeScriptAdmonition"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"<ValueEditor />")," may be the default component most commonly ",(0,n.kt)("a",{parentName:"p",href:"./querybuilder#valueeditor"},"overridden")," with a custom component, but it's quite capable of handling many common scenarios without customization. The query builder below demonstrates each of the supported options for the ",(0,n.kt)("a",{parentName:"p",href:"../typescript#fields"},(0,n.kt)("inlineCode",{parentName:"a"},"Field#valueEditorType")," and ",(0,n.kt)("inlineCode",{parentName:"a"},"Field#inputType")," properties"),". The last rule demonstrates the ",(0,n.kt)("inlineCode",{parentName:"p"},"ValueEditor"),"'s default behavior when a field's ",(0,n.kt)("inlineCode",{parentName:"p"},"valueSources")," property is set to ",(0,n.kt)("inlineCode",{parentName:"p"},'["field", "value"]'),"."),(0,n.kt)("p",null,"This query builder has been specially configured in two ways:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The value actually stored in the rule object within the query is displayed to the right of each value editor."),(0,n.kt)("li",{parentName:"ol"},"To focus attention on the value editor components, all other components have been disabled or hidden.")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("a",{parentName:"p",href:"../compat"},"compatibility packages")," also implement these options using appropriate components from the associated style library (",(0,n.kt)("a",{parentName:"p",href:"/demo"},"see the demo"),").")),(0,n.kt)("h2",{id:"showcase"},"Showcase"),(0,n.kt)(o.e,{getOperators:()=>[{name:"=",label:"="}],controlElements:{fieldSelector:c,operatorSelector:f,combinatorSelector:v,addRuleAction:v,addGroupAction:v,removeRuleAction:v,removeGroupAction:v,valueEditor:h},fields:k,defaultQuery:y,mdxType:"QueryBuilderEmbed"}),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"While React Query Builder does not restrict the rule ",(0,n.kt)("inlineCode",{parentName:"p"},"value")," property to JavaScript primitives, every effort is made to keep the query object serializable. This means that editors that generate non-serializable values (like some date pickers) will store the value as a string, parsing it back into the required non-primitive type during the render process. Editors that allow or require multiple values (when ",(0,n.kt)("inlineCode",{parentName:"p"},"operator"),' is "between" or "in", for example) will typically store values as comma-separated strings.')),(0,n.kt)("h2",{id:"value-sources"},"Value sources"),(0,n.kt)("p",null,"By default, React Query Builder facilitates the comparison of fields (typically corresponding to database column names) to ",(0,n.kt)("em",{parentName:"p"},"values")," (strings, numbers, etc.). But some situations call for comparisons between two fields. Consider this SQL statement:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\n  FROM users\n WHERE lastName LIKE firstName || '%';\n")),(0,n.kt)("p",null,'That would return records where the user\'s last name began with the same letters as their first name and ended with any number of other characters (including zero). "Kris Kristofferson" would meet this criteria.'),(0,n.kt)("p",null,"To represent that ",(0,n.kt)("inlineCode",{parentName:"p"},"WHERE")," clause in React Query Builder, we can use the ",(0,n.kt)("a",{parentName:"p",href:"./querybuilder#getvaluesources"},(0,n.kt)("inlineCode",{parentName:"a"},"getValueSources")," prop")," or the ",(0,n.kt)("inlineCode",{parentName:"p"},"valueSources")," property of the ",(0,n.kt)("inlineCode",{parentName:"p"},"lastName")," field in the ",(0,n.kt)("inlineCode",{parentName:"p"},"fields"),' prop. When either of those evaluates to an array containing "field", and the ',(0,n.kt)("inlineCode",{parentName:"p"},"valueSource"),' property of the rule is set to "field", the ',(0,n.kt)("inlineCode",{parentName:"p"},"<ValueEditor />")," component will display a drop-down list of fields instead of values."),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("p",null,"In the query builder above, the definition for the field used in the last rule is:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "field",\n  "label": "field",\n  "valueSources": ["field", "value"]\n}\n')),(0,n.kt)("p",null,"And the ",(0,n.kt)("inlineCode",{parentName:"p"},"defaultQuery")," prop looks like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "combinator": "and",\n  "rules": [\n    // ...other rules...\n    { "field": "field", "operator": "=", "value": "text", "valueSource": "field" }\n  ]\n}\n')),(0,n.kt)("p",null,"Since the field's ",(0,n.kt)("inlineCode",{parentName:"p"},"valueSources")," property is an array with length > 1, a ",(0,n.kt)("a",{parentName:"p",href:"./querybuilder#valuesourceselector"},'"value source selector" component')," is displayed to the left of the ",(0,n.kt)("inlineCode",{parentName:"p"},"<ValueEditor />"),"."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"To reorder the rule components, for example to move the value source selector to the right of the value editor, you can use the CSS Flexbox ",(0,n.kt)("inlineCode",{parentName:"p"},"order")," property).")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"Field#valueSources")," property can also be a function that takes an operator name as its only parameter and returns the required array.")),(0,n.kt)("h3",{id:"filtering-the-field-list"},"Filtering the field list"),(0,n.kt)("p",null,"Not all fields will be compatible with each other, so each field may provide a ",(0,n.kt)("inlineCode",{parentName:"p"},"comparator")," property specifying which fields show up in the value editor list. If ",(0,n.kt)("inlineCode",{parentName:"p"},"comparator")," is a string, then only fields which have the same value as the current field in the property matching the ",(0,n.kt)("inlineCode",{parentName:"p"},"comparator")," string will be listed."),(0,n.kt)("p",null,"That's a mouthful, so let's look at an example. In the following field list, fields ",(0,n.kt)("inlineCode",{parentName:"p"},"f1"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"f2"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"f3")," share a common property ",(0,n.kt)("inlineCode",{parentName:"p"},'datatype: "number"'),". ",(0,n.kt)("inlineCode",{parentName:"p"},"f1")," identifies the ",(0,n.kt)("inlineCode",{parentName:"p"},"datatype")," property as its ",(0,n.kt)("inlineCode",{parentName:"p"},"comparator"),". Therefore, when a rule specifies the field ",(0,n.kt)("inlineCode",{parentName:"p"},"f1"),", only ",(0,n.kt)("inlineCode",{parentName:"p"},"f2")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"f3")," will be in the drop-down list because their ",(0,n.kt)("inlineCode",{parentName:"p"},"datatype")," property matches ",(0,n.kt)("inlineCode",{parentName:"p"},"f1"),"'s. ",(0,n.kt)("inlineCode",{parentName:"p"},"f4")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"f5")," will be excluded because their ",(0,n.kt)("inlineCode",{parentName:"p"},"datatype")," property does not match ",(0,n.kt)("inlineCode",{parentName:"p"},"f1"),"'s, and ",(0,n.kt)("inlineCode",{parentName:"p"},"f1")," will be excluded because a rule's selected field cannot be compared with itself."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"const fields: Field[] = {\n  {\n    name: 'f1',\n    label: 'f1',\n    // highlight-start\n    valueSources: [\"field\"],\n    comparator: 'datatype',\n    datatype: 'number'\n    // highlight-end\n  },\n  { name: 'f2', label: 'f2', datatype: 'number' },\n  { name: 'f3', label: 'f3', datatype: 'number' },\n  { name: 'f4', label: 'f4', datatype: 'string' },\n  { name: 'f5', label: 'f5', datatype: 'string' },\n}\n")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"comparator")," property can also be a function that takes a ",(0,n.kt)("inlineCode",{parentName:"p"},"Field")," object as its only parameter. Each field in the ",(0,n.kt)("inlineCode",{parentName:"p"},"fields")," prop will be evaluated by this function. It should return ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," if the field should be included in the list, and ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," otherwise. The equivalent configuration of the field list above, using a function for ",(0,n.kt)("inlineCode",{parentName:"p"},"comparator"),", would be this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"const fields: Field[] = {\n  { name: 'f1',\n    label: 'f1',\n    // highlight-start\n    valueSources: [\"field\"],\n    comparator: f => f.datatype === 'number'\n    // highlight-end\n  },\n  { name: 'f2', label: 'f2', datatype: 'number' },\n  { name: 'f3', label: 'f3', datatype: 'number' },\n  { name: 'f4', label: 'f4', datatype: 'string' },\n  { name: 'f5', label: 'f5', datatype: 'string' },\n}\n")))}N.isMDXComponent=!0},46601:()=>{},89214:()=>{},71922:()=>{},2363:()=>{},52361:()=>{},94616:()=>{}}]);