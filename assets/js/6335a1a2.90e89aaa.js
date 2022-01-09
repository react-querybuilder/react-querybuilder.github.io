"use strict";(self.webpackChunkreact_querybuilder_github_io=self.webpackChunkreact_querybuilder_github_io||[]).push([[923],{3475:function(e,t,a){a.d(t,{c:function(){return o}});var n=a(7219),r=a(5350),i=a(7294),o=function(e){var t,a,o=e.children,s=e.customSetup,l=e.options,d=(0,r.Z)().isDarkTheme,p=i.Children.toArray(o),u=d?"#343a46":"#ffffff",m=!0,c=p.reduce((function(e,t){if("pre"!==t.props.mdxType)return e;var a,n=t.props.children.props,r=!1,i=!1;if(n.metastring){var o=n.metastring.split(" "),s=o[0],l=o.slice(1);a="/"+s,l.includes("hidden")&&(r=!0),l.includes("active")&&(i=!0)}else if("language-tsx"===n.className)a="/App.tsx";else if("language-js"===n.className)a="/App.js";else{if("language-css"!==n.className)throw new Error("Code block is missing a filename: "+n.children);a="/styles.css"}if(e[a])throw new Error("File "+a+" was defined multiple times. Each file snippet should have a unique path name.");return"/styles.css"!==a||r||(m=!1),e[a]={code:n.children,hidden:r,active:i},e}),{}),f=RegExp("^import +'react-querybuilder/dist/query-builder\\.s?css';?$").test(c["/App.tsx"].code)?"":"@import 'react-querybuilder/dist/query-builder.css';",h="body { background-color: "+u+"; }";c["/styles.css"]={code:[f,h,null!=(t=null==(a=c["/styles.css"])?void 0:a.code)?t:""].join("\n\n"),hidden:m};var k=Object.assign({},s,{dependencies:Object.assign({},null==s?void 0:s.dependencies,{"react-querybuilder":"latest"})});return i.createElement("div",{className:"sandpackrqb"},i.createElement(n.xR,{files:c,theme:d?"monokai-pro":void 0,template:"react-ts",customSetup:k,options:l}))}},5895:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=a(3475),s=["components"],l={title:"Custom components with fallbacks",description:"Augmenting the default components",hide_table_of_contents:!0},d=void 0,p={unversionedId:"tips/custom-with-fallback",id:"tips/custom-with-fallback",title:"Custom components with fallbacks",description:"Augmenting the default components",source:"@site/docs/tips/custom-with-fallback.mdx",sourceDirName:"tips",slug:"/tips/custom-with-fallback",permalink:"/docs/tips/custom-with-fallback",editUrl:"https://github.com/react-querybuilder/react-querybuilder.github.io/edit/main/docs/tips/custom-with-fallback.mdx",tags:[],version:"current",frontMatter:{title:"Custom components with fallbacks",description:"Augmenting the default components",hide_table_of_contents:!0},sidebar:"mySidebar",previous:{title:"Limit rule groups",permalink:"/docs/tips/limit-groups"},next:{title:"Custom bind variables",permalink:"/docs/tips/custom-bind-variables"}},u=[],m={toc:u};function c(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You may run into a situation where one of the default components ",(0,i.kt)("em",{parentName:"p"},"almost")," meets your requirements, but you don't want to recreate the entire component just to slightly modify the behavior. Falling back to the default component after implementing your custom behavior is a good way to keep your implementation up to date with the current version's standard features while retaining the flexibility of a fully custom solution."),(0,i.kt)("p",null,"For example, let's say you need a value editor that presents the user with a date picker (not the browser's default date picker), but only for certain fields. The default ",(0,i.kt)("inlineCode",{parentName:"p"},"ValueEditor")," does not implement a date picker, so you'll need to use a custom component."),(0,i.kt)("p",null,"However, you don't need to copy/paste the default ",(0,i.kt)("inlineCode",{parentName:"p"},"ValueEditor")," code to take advantage of its functionality. Simply spread the same props that were passed in to your custom component (",(0,i.kt)("inlineCode",{parentName:"p"},"<ValueEditor {...props} />"),") and return that if your custom behavior is not applicable."),(0,i.kt)("p",null,"Let's create a custom value editor that uses the ",(0,i.kt)("a",{parentName:"p",href:"https://reactdatepicker.com/"},(0,i.kt)("inlineCode",{parentName:"a"},"react-datepicker"))," library. First we'll set up the ",(0,i.kt)("inlineCode",{parentName:"p"},"fields")," array. Each element is a standard ",(0,i.kt)("inlineCode",{parentName:"p"},"Field")," object, but the two date-type fields have a special attribute called ",(0,i.kt)("inlineCode",{parentName:"p"},"datatype")," that will let our custom value editor know when and how to display the date picker."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// fields.ts\nimport { Field } from 'react-querybuilder';\n\nexport const fields: Field[] = [\n  {\n    name: 'name',\n    label: 'Name',\n    operators: [\n      { name: '=', label: 'is' },\n      { name: 'beginsWith', label: 'begins with' },\n    ],\n  },\n  {\n    name: 'dateOfBirth',\n    label: 'Date of Birth',\n    operators: [{ name: '=', label: 'is' }],\n    datatype: 'date',\n  },\n  {\n    name: 'dateRange',\n    label: 'Date Range',\n    operators: [{ name: 'between', label: 'is between' }],\n    datatype: 'dateRange',\n  },\n];\n")),(0,i.kt)("p",null,"Next, we'll define the custom value editor. The component will display a standard date picker if the ",(0,i.kt)("inlineCode",{parentName:"p"},"datatype")," for the field is ",(0,i.kt)("inlineCode",{parentName:"p"},'"date"'),", and a date ",(0,i.kt)("em",{parentName:"p"},"range")," picker if the ",(0,i.kt)("inlineCode",{parentName:"p"},"datatype")," is ",(0,i.kt)("inlineCode",{parentName:"p"},'"dateRange"'),". If the ",(0,i.kt)("inlineCode",{parentName:"p"},"datatype")," is something else or ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),", then the component will simply forward its props to the default ",(0,i.kt)("inlineCode",{parentName:"p"},"ValueEditor"),"."),(0,i.kt)("p",null,"We're also using the ",(0,i.kt)("a",{parentName:"p",href:"https://date-fns.org/"},(0,i.kt)("inlineCode",{parentName:"a"},"date-fns"))," library to help parse and format dates. Storing the date values as strings instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"Date")," objects helps ensure that the ",(0,i.kt)("inlineCode",{parentName:"p"},"query")," object remains serializable in case we want to safely use ",(0,i.kt)("inlineCode",{parentName:"p"},"JSON.stringify"),". (Date ranges are stored as a comma-separated pair of strings.)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"// CustomValueEditor.tsx\nimport { format, parse } from 'date-fns';\nimport DatePicker from 'react-datepicker';\nimport { ValueEditor, ValueEditorProps } from 'react-querybuilder';\nimport 'react-datepicker/dist/react-datepicker.css';\n\nconst dateFormat = 'yyyy-MM-dd';\n\nexport const CustomValueEditor = (props: ValueEditorProps) => {\n  if (props.fieldData.datatype === 'date') {\n    return (\n      <div>\n        <DatePicker\n          dateFormat={dateFormat}\n          selected={!props.value ? null : parse(props.value, dateFormat, new Date())}\n          onChange={(d: Date) => props.handleOnChange(d ? format(d, dateFormat) : null)}\n        />\n      </div>\n    );\n  } else if (props.fieldData.datatype === 'dateRange') {\n    const [startDate, endDate] = props.value.split(',');\n    return (\n      <div>\n        <DatePicker\n          selectsRange\n          dateFormat={dateFormat}\n          startDate={!startDate ? null : parse(startDate, dateFormat, new Date())}\n          endDate={!endDate ? null : parse(endDate, dateFormat, new Date())}\n          onChange={(update: [Date, Date]) => {\n            const [s, e] = update;\n            props.handleOnChange(\n              [!s ? '' : format(s, dateFormat), !e ? '' : format(e, dateFormat)].join(',')\n            );\n          }}\n        />\n      </div>\n    );\n  }\n  return <ValueEditor {...props} />;\n};\n")),(0,i.kt)("p",null,"Finally, we can configure the main ",(0,i.kt)("inlineCode",{parentName:"p"},"QueryBuilder")," component to use our custom value editor with the ",(0,i.kt)("inlineCode",{parentName:"p"},"controlElements")," prop."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"// App.tsx\nimport { useState } from 'react';\nimport { CustomValueEditor } from './CustomValueEditor';\nimport { fields } from './fields';\nimport 'react-querybuilder/dist/query-builder.scss';\n\nexport default function App() {\n  const [query, setQuery] = useState({ combinator: 'and', rules: [] });\n  return (\n    <QueryBuilder\n      fields={fields}\n      query={query}\n      onQueryChange={q => setQuery(q)}\n      // highlight-start\n      controlElements={{ valueEditor: CustomValueEditor }}\n      // highlight-end\n    />\n  );\n}\n")),(0,i.kt)("p",null,'An interactive demo is below. Note how the "Name" field uses a text input, the "Date of Birth" field uses a standard date picker, and the "Date Range" field uses the date range picker.'),(0,i.kt)(o.c,{customSetup:{dependencies:{"date-fns":"latest","react-datepicker":"latest"}},options:{editorHeight:690},mdxType:"SandpackRQB"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useState } from 'react';\nimport QueryBuilder from 'react-querybuilder';\nimport { CustomValueEditor } from './CustomValueEditor';\nimport { fields } from './fields';\nimport { initialQuery } from './initialQuery';\n\nexport default function App() {\n  const [query, setQuery] = useState(initialQuery);\n  return (\n    <QueryBuilder\n      fields={fields}\n      query={query}\n      onQueryChange={q => setQuery(q)}\n      controlElements={{ valueEditor: CustomValueEditor }}\n    />\n  );\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"CustomValueEditor.tsx active","CustomValueEditor.tsx":!0,active:!0},"import { format, parse } from 'date-fns';\nimport DatePicker from 'react-datepicker';\nimport { ValueEditor, ValueEditorProps } from 'react-querybuilder';\nimport 'react-datepicker/dist/react-datepicker.css';\n\nconst dateFormat = 'yyyy-MM-dd';\n\nexport const CustomValueEditor = (props: ValueEditorProps) => {\n  if (props.fieldData.datatype === 'date') {\n    return (\n      <div>\n        <DatePicker\n          dateFormat={dateFormat}\n          selected={!props.value ? null : parse(props.value, dateFormat, new Date())}\n          onChange={(d: Date) => props.handleOnChange(d ? format(d, dateFormat) : null)}\n        />\n      </div>\n    );\n  } else if (props.fieldData.datatype === 'dateRange') {\n    const [startDate, endDate] = props.value.split(',');\n    return (\n      <div>\n        <DatePicker\n          selectsRange\n          dateFormat={dateFormat}\n          startDate={!startDate ? null : parse(startDate, dateFormat, new Date())}\n          endDate={!endDate ? null : parse(endDate, dateFormat, new Date())}\n          onChange={(range: [Date, Date]) => {\n            const [s, e] = range;\n            props.handleOnChange(\n              [!s ? '' : format(s, dateFormat), !e ? '' : format(e, dateFormat)].join(',')\n            );\n          }}\n        />\n      </div>\n    );\n  }\n  return <ValueEditor {...props} />;\n};\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"fields.ts","fields.ts":!0},"import { Field } from 'react-querybuilder';\n\nexport const fields: Field[] = [\n  {\n    name: 'name',\n    label: 'Name',\n    operators: [\n      { name: '=', label: 'is' },\n      { name: 'beginsWith', label: 'begins with' },\n    ],\n  },\n  {\n    name: 'dateOfBirth',\n    label: 'Date of Birth',\n    operators: [{ name: '=', label: 'is' }],\n    datatype: 'date',\n  },\n  {\n    name: 'dateRange',\n    label: 'Date Range',\n    operators: [{ name: 'between', label: 'is between' }],\n    datatype: 'dateRange',\n  },\n];\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"initialQuery.ts","initialQuery.ts":!0},"import { format, subDays } from 'date-fns';\nimport { RuleGroupType } from 'react-querybuilder';\n\nconst initialRange = [subDays(new Date(), 14), new Date()]\n  .map(d => format(d, 'yyyy-MM-dd'))\n  .join(',');\n\nexport const initialQuery: RuleGroupType = {\n  rules: [\n    {\n      field: 'name',\n      operator: '=',\n      value: 'Steve Vai',\n    },\n    {\n      field: 'dateOfBirth',\n      operator: '=',\n      value: '1960-06-06',\n    },\n    {\n      field: 'dateRange',\n      value: initialRange,\n      operator: 'between',\n    },\n  ],\n  combinator: 'and',\n  not: false,\n};\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".react-datepicker-wrapper input {\n  /* Widen the input to show both dates */\n  width: 180px;\n}\n"))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'Other examples of the "fallback" technique can be seen in the ',(0,i.kt)("a",{parentName:"p",href:"./limit-groups#conditionally-allow-new-groups"},"Limit rule groups")," page and ",(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/68447510/react-query-builder-question-is-there-a-way-to-disable-a-field-option-when-addi/69443288#69443288"},"these")," ",(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/61768845/progamatically-show-hide-operator-rule-and-group-button-in-react-querybuilder/69443467#69443467"},"two")," StackOverflow answers."))))}c.isMDXComponent=!0}}]);