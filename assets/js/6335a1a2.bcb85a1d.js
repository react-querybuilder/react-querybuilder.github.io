"use strict";(self.webpackChunkreact_querybuilder_github_io=self.webpackChunkreact_querybuilder_github_io||[]).push([[923],{5895:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return c},default:function(){return h}});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),l=n(2474),r=n.n(l),u=["components"],s={title:"Custom components with fallbacks"},p=void 0,d={unversionedId:"tips/custom-with-fallback",id:"tips/custom-with-fallback",isDocsHomePage:!1,title:"Custom components with fallbacks",description:"You may run into a situation where the default components almost meet your requirements, but you don't want to recreate the entire component just to slightly modify the behavior. Falling back to the default component after implementing your custom behavior is a good way to keep your code up to date with the current version's standard features while retaining the flexibility of a fully custom solution.",source:"@site/docs/tips/custom-with-fallback.mdx",sourceDirName:"tips",slug:"/tips/custom-with-fallback",permalink:"/docs/tips/custom-with-fallback",editUrl:"https://github.com/react-querybuilder/react-querybuilder.github.io/edit/main/docs/tips/custom-with-fallback.mdx",tags:[],version:"current",frontMatter:{title:"Custom components with fallbacks"},sidebar:"mySidebar",previous:{title:"Limit rule groups",permalink:"/docs/tips/limit-groups"},next:{title:"Custom bind variables",permalink:"/docs/tips/custom-bind-variables"}},c=[],m={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You may run into a situation where the default components ",(0,i.kt)("em",{parentName:"p"},"almost")," meet your requirements, but you don't want to recreate the entire component just to slightly modify the behavior. Falling back to the default component after implementing your custom behavior is a good way to keep your code up to date with the current version's standard features while retaining the flexibility of a fully custom solution."),(0,i.kt)("p",null,"For example, let's say you need a value editor that uses a ",(0,i.kt)("inlineCode",{parentName:"p"},"<select>")," element with ",(0,i.kt)("inlineCode",{parentName:"p"},"<optgroup>"),"s to organize the options -- but only for certain fields. The default ",(0,i.kt)("inlineCode",{parentName:"p"},"ValueEditor")," does not support option groups, so you'll need to use a custom component."),(0,i.kt)("p",null,"However, you don't need to copy/paste the default ",(0,i.kt)("inlineCode",{parentName:"p"},"ValueEditor")," code to take advantage of its functionality. Simply spread the same props that were passed in to your custom component (",(0,i.kt)("inlineCode",{parentName:"p"},"<ValueEditor {...props} />"),") and return that if your custom behavior is not applicable."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useState } from "react";\nimport QueryBuilder, {\n  Field,\n  RuleGroupType,\n  ValueEditor,\n  ValueEditorProps,\n} from "react-querybuilder";\nimport "react-querybuilder/dist/query-builder.css";\n\nconst CustomValueEditor = (props: ValueEditorProps) => {\n  if (props.type === "select") {\n    // For all \'select\' types, use custom logic:\n    return (\n      <select\n        value={props.value}\n        onChange={(e) => props.handleOnChange(e.target.value)}\n      >\n        {props.context.optionGroups[props.field].map(\n          (og: {\n            label: string;\n            options: { value: string; label: string }[];\n          }) => (\n            <optgroup key={og.label} label={og.label}>\n              {og.options.map((opt) => (\n                <option key={opt.value} value={opt.value}>\n                  {opt.label}\n                </option>\n              ))}\n            </optgroup>\n          )\n        )}\n      </select>\n    );\n  }\n\n  // If props.type is not "select", then let the default component handle everything.\n  return <ValueEditor {...props} />;\n};\n\n// Field 1 will be handled by our custom <select>, and\n// Field 2 will be handled by the default component.\nconst fields: Field[] = [\n  { name: "field1", label: "Field 1", valueEditorType: "select" },\n  { name: "field2", label: "Field 2" },\n];\n\n// There are other ways to pass custom data to your components, but `context` is the most flexible.\nconst context = {\n  optionGroups: {\n    field1: [\n      {\n        label: "First Group",\n        options: [\n          { value: "item1", label: "First Item" },\n          { value: "item2", label: "Second Item" },\n        ],\n      },\n      {\n        label: "Second Group",\n        options: [\n          { value: "item3", label: "Third Item" },\n          { value: "item4", label: "Fourth Item" },\n        ],\n      },\n    ],\n  },\n};\n\nexport const App = () => {\n  const [query, setQuery] = useState<RuleGroupType>({\n    id: "root",\n    combinator: "and",\n    rules: [\n      {\n        field: "field1",\n        operator: "=",\n        value: "item2",\n      },\n      {\n        field: "field2",\n        operator: "=",\n        value: "",\n      },\n    ],\n  });\n\n  return (\n    <QueryBuilder\n      fields={fields}\n      query={query}\n      onQueryChange={setQuery}\n      context={context}\n      controlElements={{\n        valueEditor: CustomValueEditor,\n      }}\n    />\n  );\n};\n')),(0,i.kt)("p",null,"The code above generates the following query builder:"),(0,i.kt)(r(),{fields:[{name:"field1",label:"Field 1",valueEditorType:"select"},{name:"field2",label:"Field 2"}],query:{combinator:"and",rules:[{field:"field1",operator:"=",value:"item2"},{field:"field2",operator:"=",value:""}]},controlElements:{valueEditor:function(e){return"select"===e.type?(0,i.kt)("select",{value:e.value,onChange:function(t){return e.handleOnChange(t.target.value)}},e.context.optionGroups[e.field].map((function(e){return(0,i.kt)("optgroup",{key:e.label,label:e.label},e.options.map((function(e){return(0,i.kt)("option",{key:e.value,value:e.value},e.label)})))}))):(0,i.kt)(l.ValueEditor,(0,o.Z)({},e,{mdxType:"ValueEditor"}))}},context:{optionGroups:{field1:[{label:"First Group",options:[{value:"item1",label:"First Item"},{value:"item2",label:"Second Item"}]},{label:"Second Group",options:[{value:"item3",label:"Third Item"},{value:"item4",label:"Fourth Item"}]}]}},mdxType:"QueryBuilder"}),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/react-querybuilder-optgroups-fnd13"},"This CodeSandbox")," is another interactive demo of the code above."),(0,i.kt)("p",{parentName:"div"},"Other examples of this technique can be seen in the ",(0,i.kt)("a",{parentName:"p",href:"./limit-groups#conditionally-allow-new-groups"},"Limit rule groups")," page and ",(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/68447510/react-query-builder-question-is-there-a-way-to-disable-a-field-option-when-addi/69443288#69443288"},"these")," ",(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/61768845/progamatically-show-hide-operator-rule-and-group-button-in-react-querybuilder/69443467#69443467"},"two")," StackOverflow answers."))))}h.isMDXComponent=!0}}]);