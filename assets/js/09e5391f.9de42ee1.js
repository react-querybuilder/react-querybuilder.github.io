"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9239],{26482:(e,t,a)=>{a.d(t,{e:()=>r});var n=a(67294),l=a(61785),o=a(3612),i=a(43256);const r=e=>{let{version:t,...a}=e;const r=4===t?o.zk:5===t?i.zk:l.zk;return n.createElement("div",{key:`v${t??5}`,className:"queryBuilderEmbed"},n.createElement(r,a))}},39973:(e,t,a)=>{a.d(t,{ZP:()=>i});var n=a(83117),l=(a(67294),a(3905));const o={toc:[]};function i(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},"Refer to the ",(0,l.kt)("a",{parentName:"em",href:"../typescript"},"TypeScript reference")," page for information about the types and interfaces referenced below."))))}i.isMDXComponent=!0},95696:(e,t,a)=>{a.r(t),a.d(t,{NullComponent:()=>g,Showcase:()=>C,assets:()=>m,contentTitle:()=>d,default:()=>x,defaultQuery:()=>N,fieldSelector:()=>h,fields:()=>y,frontMatter:()=>s,metadata:()=>u,operatorSelector:()=>f,operators:()=>b,toc:()=>c,valueEditor:()=>k,values:()=>v});var n=a(83117),l=a(67294),o=a(3905),i=a(61785),r=a(39973),p=a(26482);const s={title:"ValueEditor",description:"Dynamic editor component"},d=void 0,u={unversionedId:"components/valueeditor",id:"version-6/components/valueeditor",title:"ValueEditor",description:"Dynamic editor component",source:"@site/versioned_docs/version-6/components/valueeditor.mdx",sourceDirName:"components",slug:"/components/valueeditor",permalink:"/docs/components/valueeditor",draft:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/versioned_docs/version-6/components/valueeditor.mdx",tags:[],version:"6",frontMatter:{title:"ValueEditor",description:"Dynamic editor component"},sidebar:"mySidebar",previous:{title:"ValueSelector",permalink:"/docs/components/valueselector"},next:{title:"NotToggle",permalink:"/docs/components/nottoggle"}},m={},c=[{value:"Showcase",id:"showcase",level:2},{value:"Value sources",id:"value-sources",level:2},{value:"Example",id:"example",level:3},{value:"Filtering the field list",id:"filtering-the-field-list",level:3}],h=e=>{let{value:t,options:a,path:n}=e;return(0,o.kt)("span",null,`${n[0]+1}. `,(0,o.kt)("select",{value:t,disabled:!0},a.map((e=>{var t;return(0,o.kt)("option",{key:e.name,value:e.name},null!=(t=e.valueSources)&&t.includes("field")?'valueSource: "field"':"inputType"in e?`inputType: "${e.label}"`:`valueEditorType: "${e.label}"`)}))))},f=e=>{let{value:t,options:a}=e;return(0,o.kt)("select",{value:t,disabled:!0},a.map((e=>(0,o.kt)("option",{key:e.name,value:e.name},e.label))))},k=e=>(0,o.kt)("div",{style:{display:"flex"}},(0,o.kt)(i.S$,(0,n.Z)({},e,{mdxType:"ValueEditor"})),"\xa0",(0,o.kt)("span",{style:{fontSize:"small",opacity:.5}},`(stored value: ${"boolean"==typeof e.value?e.value:JSON.stringify(e.value)})`)),v=[{name:"option1",label:"Option 1"},{name:"option2",label:"Option 2"},{name:"option3",label:"Option 3"},{name:"option4",label:"Option 4"}],y=[{name:"text",label:"text",inputType:"text"},{name:"select",label:"select",valueEditorType:"select",values:v},{name:"checkbox",label:"checkbox",valueEditorType:"checkbox"},{name:"radio",label:"radio",valueEditorType:"radio",values:v},{name:"textarea",label:"textarea",valueEditorType:"textarea"},{name:"multiselect",label:"multiselect",valueEditorType:"multiselect",values:v},{name:"date",label:"date",inputType:"date"},{name:"datetime-local",label:"datetime-local",inputType:"datetime-local"},{name:"time",label:"time",inputType:"time"},{name:"field",label:"field",valueSources:["field","value"]}],b=[{name:"=",label:"="},{name:"between",label:"between"}],N={combinator:"and",rules:[{field:"text",operator:"=",value:""},{field:"select",operator:"=",value:"option2"},{field:"checkbox",operator:"=",value:!0},{field:"radio",operator:"=",value:"option2"},{field:"textarea",operator:"=",value:""},{field:"multiselect",operator:"=",value:"option1,option2"},{field:"date",operator:"=",value:""},{field:"datetime-local",operator:"=",value:""},{field:"time",operator:"=",value:""},{field:"text",operator:"between",value:"A,Z"},{field:"select",operator:"between",value:"option2,option4"},{field:"field",operator:"=",value:"text",valueSource:"field"}]},g=()=>null,C=()=>{const[e,t]=(0,l.useState)(N),[a,n]=(0,l.useState)(!1);return(0,o.kt)(l.Fragment,null,(0,o.kt)("p",null,(0,o.kt)("label",null,(0,o.kt)("input",{type:"checkbox",checked:a,onChange:a=>{if(a.target.checked){const a=(0,i.Vx)(e,"value",(0,i.qo)(e.rules[5].value),[5]),n=(0,i.Vx)(a,"value",(0,i.qo)(a.rules[10].value),[10]);t((0,i.Vx)(n,"value",(0,i.qo)(n.rules[11].value),[11]))}else{const a=(0,i.Vx)(e,"value",(0,i.vX)(e.rules[5].value,","),[5]),n=(0,i.Vx)(a,"value",(0,i.vX)(a.rules[10].value,","),[10]);t((0,i.Vx)(n,"value",(0,i.vX)(n.rules[11].value),[11]))}n(a.target.checked)}}),(0,o.kt)("code",null,"listsAsArrays"))),(0,o.kt)(p.e,{fields:y,query:e,onQueryChange:e=>t(e),listsAsArrays:a,operators:b,controlElements:{fieldSelector:h,operatorSelector:f,combinatorSelector:g,addRuleAction:g,addGroupAction:g,removeRuleAction:g,removeGroupAction:g,valueEditor:k},mdxType:"QueryBuilderEmbed"}))},w={toc:c,fieldSelector:h,Showcase:C};function x(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},w,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.ZP,{mdxType:"TypeScriptAdmonition"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ValueEditor")," renders an ",(0,o.kt)("inlineCode",{parentName:"p"},"<input>")," by default, or a ",(0,o.kt)("inlineCode",{parentName:"p"},"<select>")," (by way of ",(0,o.kt)("a",{parentName:"p",href:"./valueselector"},(0,o.kt)("inlineCode",{parentName:"a"},"ValueSelector")),") if the value should be selected from a list. The ",(0,o.kt)("a",{parentName:"p",href:"../utils/hooks#usevalueeditor"},(0,o.kt)("inlineCode",{parentName:"a"},"useValueEditor"))," Hook is called to massage the ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," if necessary and retrieve utilities for managing list values."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"While React Query Builder does not restrict the rule ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," property to JavaScript primitives, every effort is made to keep the query object serializable. This means that editors that generate non-serializable values (like some date pickers) will store the value as a string, parsing it back into the required non-primitive type during the render process. Editors that allow or require multiple values (when ",(0,o.kt)("inlineCode",{parentName:"p"},"operator"),' is "between" or "in", for example) will typically store values as comma-separated strings.')),(0,o.kt)("h2",{id:"showcase"},"Showcase"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ValueEditor")," may be the default component most commonly ",(0,o.kt)("a",{parentName:"p",href:"./querybuilder#valueeditor"},"overridden")," with a custom component, but it is capable of handling many common scenarios without customization. The query builder below demonstrates each of the supported options for the ",(0,o.kt)("a",{parentName:"p",href:"../typescript#fields"},(0,o.kt)("inlineCode",{parentName:"a"},"Field#valueEditorType")," and ",(0,o.kt)("inlineCode",{parentName:"a"},"Field#inputType")," properties"),"."),(0,o.kt)("p",null,"Rules 10 and 11 demonstrate the behavior when the ",(0,o.kt)("inlineCode",{parentName:"p"},"operator"),' is "between". Rule 12 demonstrates the behavior when a field\'s ',(0,o.kt)("inlineCode",{parentName:"p"},"valueSources")," property is set to ",(0,o.kt)("inlineCode",{parentName:"p"},'["field", "value"]'),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This query builder has been specially configured in the following ways:"),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"The index (plus one) of the rule in the ",(0,o.kt)("inlineCode",{parentName:"li"},"rules")," array is displayed to the left of the field selector."),(0,o.kt)("li",{parentName:"ol"},"The value actually stored in the rule object within the query is displayed to the right of each value editor."),(0,o.kt)("li",{parentName:"ol"},"To focus attention on the value editor components, all other components have been disabled or hidden."))),(0,o.kt)(C,{mdxType:"Showcase"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("a",{parentName:"p",href:"../compat"},"compatibility packages")," also implement these options using appropriate components from their respective style libraries (",(0,o.kt)("a",{parentName:"p",href:"/demo"},"see the demo"),").")),(0,o.kt)("h2",{id:"value-sources"},"Value sources"),(0,o.kt)("p",null,"By default, React Query Builder facilitates the comparison of fields (typically corresponding to database column names) to ",(0,o.kt)("em",{parentName:"p"},"values")," (strings, numbers, etc.). But some situations call for comparisons between two fields. Consider this SQL statement:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\n  FROM users\n WHERE lastName LIKE firstName || '%';\n")),(0,o.kt)("p",null,'That would return records where the user\'s last name began with the same letters as their first name and ended with any number of other characters (including zero). "Kris Kristofferson" would meet this criteria.'),(0,o.kt)("p",null,"To represent that ",(0,o.kt)("inlineCode",{parentName:"p"},"WHERE")," clause in React Query Builder, we can use the ",(0,o.kt)("a",{parentName:"p",href:"./querybuilder#getvaluesources"},(0,o.kt)("inlineCode",{parentName:"a"},"getValueSources")," prop")," or the ",(0,o.kt)("inlineCode",{parentName:"p"},"valueSources")," property of the ",(0,o.kt)("inlineCode",{parentName:"p"},"lastName")," field in the ",(0,o.kt)("inlineCode",{parentName:"p"},"fields"),' prop. When either of those evaluates to an array containing "field", and the ',(0,o.kt)("inlineCode",{parentName:"p"},"valueSource"),' property of the rule is set to "field", the ',(0,o.kt)("inlineCode",{parentName:"p"},"<ValueEditor />")," component will display a drop-down list of fields instead of values."),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"In the query builder above, the definition for the field used in the last rule is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "field",\n  "label": "field",\n  "valueSources": ["field", "value"]\n}\n')),(0,o.kt)("p",null,"And the ",(0,o.kt)("inlineCode",{parentName:"p"},"defaultQuery")," prop looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "combinator": "and",\n  "rules": [\n    // ...other rules...\n    { "field": "field", "operator": "=", "value": "text", "valueSource": "field" }\n  ]\n}\n')),(0,o.kt)("p",null,"Since the field's ",(0,o.kt)("inlineCode",{parentName:"p"},"valueSources")," property is an array with length > 1, a ",(0,o.kt)("a",{parentName:"p",href:"./querybuilder#valuesourceselector"},'"value source selector" component')," is displayed to the left of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<ValueEditor />"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To reorder the rule components, for example to move the value source selector to the right of the value editor, you can use the CSS Flexbox ",(0,o.kt)("inlineCode",{parentName:"p"},"order")," property).")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Field#valueSources")," property can also be a function that takes an operator name as its only parameter and returns the required array.")),(0,o.kt)("h3",{id:"filtering-the-field-list"},"Filtering the field list"),(0,o.kt)("p",null,"Not all fields will be compatible with each other, so each field may provide a ",(0,o.kt)("inlineCode",{parentName:"p"},"comparator")," property specifying which fields show up in the value editor list. If ",(0,o.kt)("inlineCode",{parentName:"p"},"comparator")," is a string, then only fields which have the same value as the current field in the property matching the ",(0,o.kt)("inlineCode",{parentName:"p"},"comparator")," string will be listed."),(0,o.kt)("p",null,"That's a mouthful, so let's look at an example. In the following field list, fields ",(0,o.kt)("inlineCode",{parentName:"p"},"f1"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"f2"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"f3")," share a common property ",(0,o.kt)("inlineCode",{parentName:"p"},'datatype: "number"'),". ",(0,o.kt)("inlineCode",{parentName:"p"},"f1")," identifies the ",(0,o.kt)("inlineCode",{parentName:"p"},"datatype")," property as its ",(0,o.kt)("inlineCode",{parentName:"p"},"comparator"),". Therefore, when a rule specifies the field ",(0,o.kt)("inlineCode",{parentName:"p"},"f1"),", only ",(0,o.kt)("inlineCode",{parentName:"p"},"f2")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"f3")," will be in the drop-down list because their ",(0,o.kt)("inlineCode",{parentName:"p"},"datatype")," property matches ",(0,o.kt)("inlineCode",{parentName:"p"},"f1"),"'s. ",(0,o.kt)("inlineCode",{parentName:"p"},"f4")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"f5")," will be excluded because their ",(0,o.kt)("inlineCode",{parentName:"p"},"datatype")," property does not match ",(0,o.kt)("inlineCode",{parentName:"p"},"f1"),"'s, and ",(0,o.kt)("inlineCode",{parentName:"p"},"f1")," will be excluded because a rule's selected field cannot be compared with itself."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const fields: Field[] = {\n  {\n    name: 'f1',\n    label: 'f1',\n    // highlight-start\n    valueSources: [\"field\"],\n    comparator: 'datatype',\n    datatype: 'number'\n    // highlight-end\n  },\n  { name: 'f2', label: 'f2', datatype: 'number' },\n  { name: 'f3', label: 'f3', datatype: 'number' },\n  { name: 'f4', label: 'f4', datatype: 'string' },\n  { name: 'f5', label: 'f5', datatype: 'string' },\n}\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"comparator")," property can also be a function that takes a ",(0,o.kt)("inlineCode",{parentName:"p"},"Field")," object as its only parameter. Each field in the ",(0,o.kt)("inlineCode",{parentName:"p"},"fields")," prop will be evaluated by this function. It should return ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if the field should be included in the list, and ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," otherwise. The equivalent configuration of the field list above, using a function for ",(0,o.kt)("inlineCode",{parentName:"p"},"comparator"),", would be this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const fields: Field[] = {\n  { name: 'f1',\n    label: 'f1',\n    // highlight-start\n    valueSources: [\"field\"],\n    comparator: f => f.datatype === 'number'\n    // highlight-end\n  },\n  { name: 'f2', label: 'f2', datatype: 'number' },\n  { name: 'f3', label: 'f3', datatype: 'number' },\n  { name: 'f4', label: 'f4', datatype: 'string' },\n  { name: 'f5', label: 'f5', datatype: 'string' },\n}\n")))}x.isMDXComponent=!0}}]);