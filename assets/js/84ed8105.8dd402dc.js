"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6525],{13475:(e,t,a)=>{a.d(t,{c:()=>i});var n=a(2488),r=a(92949),o=a(67294);const i=e=>{var t,a;let{children:i,customSetup:s,options:l,rqbVersion:d=5}=e;const p="dark"===(0,r.I)().colorMode,u=o.Children.toArray(i),m=p?"#343a46":"#ffffff";let c=!0;const f=u.reduce(((e,t)=>{if("pre"!==t.props.mdxType)return e;const{props:a}=t.props.children;let n,r=!1,o=!1;if(a.metastring){const[e,...t]=a.metastring.split(" ");n="/"+e,t.includes("hidden")&&(r=!0),t.includes("active")&&(o=!0)}else if("language-tsx"===a.className)n="/App.tsx";else if("language-js"===a.className)n="/App.js";else{if("language-css"!==a.className)throw new Error("Code block is missing a filename: "+a.children);n="/styles.css"}if(e[n])throw new Error("File "+n+" was defined multiple times. Each file snippet should have a unique path name.");return"/styles.css"!==n||r||(c=!1),e[n]={code:a.children,hidden:r,active:o},e}),{}),h=RegExp("^import +'react-querybuilder/dist/query-builder\\.s?css';?$").test(f["/App.tsx"].code)?"":"@import 'react-querybuilder/dist/query-builder.css';",y="\nbody {\n  background-color: "+m+";\n}\npre {\n  padding: 1rem;\n  background-color: white;\n  border: 1px solid lightgray;\n  border-radius: 4px;\n  white-space: pre-wrap;\n}\n"+(p?"\nh1, h2, h3, h4, h5, h6 {\n  color: white;\n}":"");f["/styles.css"]={code:[h,y,null!=(t=null==(a=f["/styles.css"])?void 0:a.code)?t:""].join("\n\n"),hidden:c};const k=4===d?{"react-querybuilder":"^4.5.3"}:{"@react-querybuilder/dnd":"^5.0.0","react-querybuilder":"^5.0.0"},g={...s,dependencies:{...null==s?void 0:s.dependencies,...k}};return o.createElement("div",{key:"v"+d,className:"sandpackrqb"},o.createElement(n.xR,{files:f,theme:p?"dark":void 0,template:"react-ts",customSetup:g,options:l}))}},39042:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(83117),r=(a(67294),a(3905)),o=a(13475);const i={title:"Custom components with fallbacks",description:"Augmenting the default components",hide_table_of_contents:!0},s=void 0,l={unversionedId:"tips/custom-with-fallback",id:"version-5/tips/custom-with-fallback",title:"Custom components with fallbacks",description:"Augmenting the default components",source:"@site/versioned_docs/version-5/tips/custom-with-fallback.mdx",sourceDirName:"tips",slug:"/tips/custom-with-fallback",permalink:"/docs/tips/custom-with-fallback",draft:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/versioned_docs/version-5/tips/custom-with-fallback.mdx",tags:[],version:"5",frontMatter:{title:"Custom components with fallbacks",description:"Augmenting the default components",hide_table_of_contents:!0},sidebar:"mySidebar",previous:{title:"Limit rule groups",permalink:"/docs/tips/limit-groups"},next:{title:"Custom bind variables",permalink:"/docs/tips/custom-bind-variables"}},d={},p=[],u={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You may run into a situation where one of the default components ",(0,r.kt)("em",{parentName:"p"},"almost")," meets your requirements, but you don't want to recreate the entire component just to slightly modify the behavior. Falling back to the default component after implementing your custom behavior is a good way to keep your implementation up to date with the current version's standard features while retaining the flexibility of a fully custom solution."),(0,r.kt)("p",null,"For example, let's say you need a value editor that presents the user with a date picker (not the browser's default date picker), but only for certain fields. The default ",(0,r.kt)("inlineCode",{parentName:"p"},"ValueEditor")," does not implement a date picker, so you'll need to use a custom component."),(0,r.kt)("p",null,"However, you don't need to copy/paste the default ",(0,r.kt)("inlineCode",{parentName:"p"},"ValueEditor")," code to take advantage of its functionality. Simply spread the same props that were passed in to your custom component (",(0,r.kt)("inlineCode",{parentName:"p"},"<ValueEditor {...props} />"),") and return that if your custom behavior is not applicable."),(0,r.kt)("p",null,"Let's create a custom value editor that uses the ",(0,r.kt)("a",{parentName:"p",href:"https://reactdatepicker.com/"},(0,r.kt)("inlineCode",{parentName:"a"},"react-datepicker"))," library. First we'll set up the ",(0,r.kt)("inlineCode",{parentName:"p"},"fields")," array. Each element is a standard ",(0,r.kt)("inlineCode",{parentName:"p"},"Field")," object, but the two date-type fields have a special attribute called ",(0,r.kt)("inlineCode",{parentName:"p"},"datatype")," that will let our custom value editor know when and how to display the date picker."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// fields.ts\nimport { Field } from 'react-querybuilder';\n\nexport const fields: Field[] = [\n  {\n    name: 'name',\n    label: 'Name',\n    operators: [\n      { name: '=', label: 'is' },\n      { name: 'beginsWith', label: 'begins with' },\n    ],\n  },\n  {\n    name: 'dateOfBirth',\n    label: 'Date of Birth',\n    operators: [{ name: '=', label: 'is' }],\n    datatype: 'date',\n  },\n  {\n    name: 'dateRange',\n    label: 'Date Range',\n    operators: [{ name: 'between', label: 'is between' }],\n    datatype: 'dateRange',\n  },\n];\n")),(0,r.kt)("p",null,"Next, we'll define the custom value editor. The component will display a standard date picker if the ",(0,r.kt)("inlineCode",{parentName:"p"},"datatype")," for the field is ",(0,r.kt)("inlineCode",{parentName:"p"},'"date"'),", and a date ",(0,r.kt)("em",{parentName:"p"},"range")," picker if the ",(0,r.kt)("inlineCode",{parentName:"p"},"datatype")," is ",(0,r.kt)("inlineCode",{parentName:"p"},'"dateRange"'),". If the ",(0,r.kt)("inlineCode",{parentName:"p"},"datatype")," is something else or ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),", then the component will simply forward its props to the default ",(0,r.kt)("inlineCode",{parentName:"p"},"ValueEditor"),"."),(0,r.kt)("p",null,"We're also using the ",(0,r.kt)("a",{parentName:"p",href:"https://date-fns.org/"},(0,r.kt)("inlineCode",{parentName:"a"},"date-fns"))," library to help parse and format dates. Storing the date values as strings instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"Date")," objects helps ensure that the ",(0,r.kt)("inlineCode",{parentName:"p"},"query")," object remains serializable in case we want to safely use ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON.stringify"),". (Date ranges are stored as a comma-separated pair of strings.)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"// CustomValueEditor.tsx\nimport { format, parse } from 'date-fns';\nimport DatePicker from 'react-datepicker';\nimport 'react-datepicker/dist/react-datepicker.css';\nimport { ValueEditor, ValueEditorProps } from 'react-querybuilder';\n\nconst dateFormat = 'yyyy-MM-dd';\n\nexport const CustomValueEditor = (props: ValueEditorProps) => {\n  if (props.fieldData.datatype === 'date') {\n    return (\n      <div>\n        <DatePicker\n          dateFormat={dateFormat}\n          selected={!props.value ? null : parse(props.value, dateFormat, new Date())}\n          onChange={(d: Date) => props.handleOnChange(d ? format(d, dateFormat) : null)}\n        />\n      </div>\n    );\n  } else if (props.fieldData.datatype === 'dateRange') {\n    const [startDate, endDate] = props.value.split(',');\n    return (\n      <div>\n        <DatePicker\n          selectsRange\n          dateFormat={dateFormat}\n          startDate={!startDate ? null : parse(startDate, dateFormat, new Date())}\n          endDate={!endDate ? null : parse(endDate, dateFormat, new Date())}\n          onChange={(update: [Date, Date]) => {\n            const [s, e] = update;\n            props.handleOnChange(\n              [!s ? '' : format(s, dateFormat), !e ? '' : format(e, dateFormat)].join(',')\n            );\n          }}\n        />\n      </div>\n    );\n  }\n  return <ValueEditor {...props} />;\n};\n")),(0,r.kt)("p",null,"Finally, we can configure the main ",(0,r.kt)("inlineCode",{parentName:"p"},"QueryBuilder")," component to use our custom value editor with the ",(0,r.kt)("inlineCode",{parentName:"p"},"controlElements")," prop."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"// App.tsx\nimport { useState } from 'react';\nimport 'react-querybuilder/dist/query-builder.scss';\nimport { CustomValueEditor } from './CustomValueEditor';\nimport { fields } from './fields';\n\nexport default function App() {\n  const [query, setQuery] = useState({ combinator: 'and', rules: [] });\n  return (\n    <QueryBuilder\n      fields={fields}\n      query={query}\n      onQueryChange={q => setQuery(q)}\n      // highlight-start\n      controlElements={{ valueEditor: CustomValueEditor }}\n      // highlight-end\n    />\n  );\n}\n")),(0,r.kt)("p",null,'An interactive demo is below. Note how the "Name" field uses a text input, the "Date of Birth" field uses a standard date picker, and the "Date Range" field uses the date range picker.'),(0,r.kt)(o.c,{rqbVersion:5,customSetup:{dependencies:{"date-fns":"latest","react-datepicker":"latest"}},options:{editorHeight:690},mdxType:"SandpackRQB"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useState } from 'react';\nimport { QueryBuilder } from 'react-querybuilder';\nimport { CustomValueEditor } from './CustomValueEditor';\nimport { fields } from './fields';\nimport { initialQuery } from './initialQuery';\n\nexport default function App() {\n  const [query, setQuery] = useState(initialQuery);\n  return (\n    <QueryBuilder\n      fields={fields}\n      query={query}\n      onQueryChange={q => setQuery(q)}\n      controlElements={{ valueEditor: CustomValueEditor }}\n    />\n  );\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"CustomValueEditor.tsx active","CustomValueEditor.tsx":!0,active:!0},"import { format, parse } from 'date-fns';\nimport DatePicker from 'react-datepicker';\nimport 'react-datepicker/dist/react-datepicker.css';\nimport { ValueEditor, ValueEditorProps } from 'react-querybuilder';\n\nconst dateFormat = 'yyyy-MM-dd';\n\nexport const CustomValueEditor = (props: ValueEditorProps) => {\n  if (props.fieldData.datatype === 'date') {\n    return (\n      <div>\n        <DatePicker\n          dateFormat={dateFormat}\n          selected={!props.value ? null : parse(props.value, dateFormat, new Date())}\n          onChange={(d: Date) => props.handleOnChange(d ? format(d, dateFormat) : null)}\n        />\n      </div>\n    );\n  } else if (props.fieldData.datatype === 'dateRange') {\n    const [startDate, endDate] = props.value.split(',');\n    return (\n      <div>\n        <DatePicker\n          selectsRange\n          dateFormat={dateFormat}\n          startDate={!startDate ? null : parse(startDate, dateFormat, new Date())}\n          endDate={!endDate ? null : parse(endDate, dateFormat, new Date())}\n          onChange={(range: [Date, Date]) => {\n            const [s, e] = range;\n            props.handleOnChange(\n              [!s ? '' : format(s, dateFormat), !e ? '' : format(e, dateFormat)].join(',')\n            );\n          }}\n        />\n      </div>\n    );\n  }\n  return <ValueEditor {...props} />;\n};\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"fields.ts","fields.ts":!0},"import { Field } from 'react-querybuilder';\n\nexport const fields: Field[] = [\n  {\n    name: 'name',\n    label: 'Name',\n    operators: [\n      { name: '=', label: 'is' },\n      { name: 'beginsWith', label: 'begins with' },\n    ],\n  },\n  {\n    name: 'dateOfBirth',\n    label: 'Date of Birth',\n    operators: [{ name: '=', label: 'is' }],\n    datatype: 'date',\n  },\n  {\n    name: 'dateRange',\n    label: 'Date Range',\n    operators: [{ name: 'between', label: 'is between' }],\n    datatype: 'dateRange',\n  },\n];\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"initialQuery.ts","initialQuery.ts":!0},"import { format, subDays } from 'date-fns';\nimport { RuleGroupType } from 'react-querybuilder';\n\nconst initialRange = [subDays(new Date(), 14), new Date()]\n  .map(d => format(d, 'yyyy-MM-dd'))\n  .join(',');\n\nexport const initialQuery: RuleGroupType = {\n  rules: [\n    {\n      field: 'name',\n      operator: '=',\n      value: 'Steve Vai',\n    },\n    {\n      field: 'dateOfBirth',\n      operator: '=',\n      value: '1960-06-06',\n    },\n    {\n      field: 'dateRange',\n      value: initialRange,\n      operator: 'between',\n    },\n  ],\n  combinator: 'and',\n  not: false,\n};\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".react-datepicker-wrapper input {\n  /* Widen the input to show both dates */\n  width: 180px;\n}\n"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},'Other examples of the "fallback" technique can be seen in the ',(0,r.kt)("a",{parentName:"p",href:"./limit-groups#conditionally-allow-new-groups"},"Limit rule groups")," page and ",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/68447510/react-query-builder-question-is-there-a-way-to-disable-a-field-option-when-addi/69443288#69443288"},"these")," ",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/61768845/progamatically-show-hide-operator-rule-and-group-button-in-react-querybuilder/69443467#69443467"},"two")," StackOverflow answers.")))}m.isMDXComponent=!0}}]);