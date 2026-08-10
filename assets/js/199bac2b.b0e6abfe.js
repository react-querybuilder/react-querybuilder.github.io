"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["88965"],{22076(e,t,r){r.r(t),r.d(t,{metadata:()=>n,default:()=>p,frontMatter:()=>a,contentTitle:()=>l,toc:()=>d,assets:()=>c});var n=JSON.parse('{"id":"tips/arbitrary-updates","title":"Arbitrary updates","description":"Non-standard query management from custom components","source":"@site/docs/tips/arbitrary-updates.mdx","sourceDirName":"tips","slug":"/tips/arbitrary-updates","permalink":"/docs/next/tips/arbitrary-updates","draft":false,"unlisted":false,"editUrl":"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/docs/tips/arbitrary-updates.mdx","tags":[],"version":"current","frontMatter":{"title":"Arbitrary updates","description":"Non-standard query management from custom components","hide_table_of_contents":true},"sidebar":"mySidebar","previous":{"title":"Undo / redo","permalink":"/docs/next/tips/undo-redo"},"next":{"title":"External controls","permalink":"/docs/next/tips/external-controls"}}'),s=r(62540),o=r(43023),i=r(52162);let a={title:"Arbitrary updates",description:"Non-standard query management from custom components",hide_table_of_contents:!0},l,c={},d=[{value:"Multiple action elements",id:"multiple-action-elements",level:2},{value:"Custom query properties",id:"custom-query-properties",level:2}];function u(e){let t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Sometimes standard component actions don't meet specific requirements. React Query Builder provides tools to extend or replace the default behavior with custom implementations."}),"\n",(0,s.jsx)(t.h2,{id:"multiple-action-elements",children:"Multiple action elements"}),"\n",(0,s.jsxs)(t.p,{children:["The default ",(0,s.jsx)(t.code,{children:"addRuleAction"})," component always creates rules using the default configuration. However, you might need to provide multiple buttons that add rules with different pre-selected fields based on which button is clicked."]}),"\n",(0,s.jsxs)(t.p,{children:["This example demonstrates a custom component that renders two buttons in place of the standard ",(0,s.jsx)(t.code,{children:"addRuleAction"}),". Each button corresponds to a specific field. The click handler uses ",(0,s.jsx)(t.code,{children:"props.schema.getQuery()"})," to retrieve the current query and ",(0,s.jsx)(t.code,{children:"props.schema.dispatchQuery()"})," to update the query with the appropriate field selection."]}),"\n",(0,s.jsx)(i.b,{rqbVersion:8,options:{editorHeight:480},children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport {\n  ActionElement,\n  ActionProps,\n  add,\n  Field,\n  QueryBuilder,\n  RuleGroupType,\n} from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.css';\n\nconst AddRulesAction = (props: ActionProps) => {\n  const onClick = (field: string) => {\n    props.schema.dispatchQuery(\n      add(props.schema.getQuery(), { field, operator: '=', value: '' }, props.path)\n    );\n  };\n  return (\n    <>\n      <ActionElement\n        {...props}\n        label=\"+ First Name Rule\"\n        handleOnClick={() => onClick('firstName')}\n      />\n      <ActionElement\n        {...props}\n        label=\"+ Last Name Rule\"\n        handleOnClick={() => onClick('lastName')}\n      />\n    </>\n  );\n};\n\nconst fields: Field[] = [\n  { name: 'firstName', label: 'First Name' },\n  { name: 'lastName', label: 'Last Name' },\n];\n\nconst initialQuery: RuleGroupType = {\n  combinator: 'and',\n  rules: [],\n};\n\nexport default () => {\n  const [query, setQuery] = useState(initialQuery);\n\n  return (\n    <div>\n      <QueryBuilder\n        fields={fields}\n        query={query}\n        onQueryChange={setQuery}\n        controlElements={{ addRuleAction: AddRulesAction }}\n      />\n    </div>\n  );\n};\n"})})}),"\n",(0,s.jsx)(t.h2,{id:"custom-query-properties",children:"Custom query properties"}),"\n",(0,s.jsxs)(t.p,{children:["While the standard query structure works well, it may not contain all the information you need. You might require additional properties in the query hierarchy and want to manage these properties through custom controls within the query builder. This example adds a ",(0,s.jsx)(t.code,{children:"caseSensitive"})," property to each rule, using a checkbox alongside the default value editor to toggle this setting."]}),"\n",(0,s.jsxs)(t.p,{children:["This example also demonstrates how the ",(0,s.jsx)(t.code,{children:"caseSensitive"})," property integrates with a custom ",(0,s.jsx)(t.a,{href:"../utils/export#rule-processor",children:"rule processor"})," for ",(0,s.jsx)(t.code,{children:"formatQuery"}),". When ",(0,s.jsx)(t.code,{children:"caseSensitive"})," is false, the processor wraps the field with SQL's ",(0,s.jsx)(t.code,{children:"LOWER"})," function and converts the value to lowercase before passing it to the default rule processor."]}),"\n",(0,s.jsx)(t.p,{children:"The example displays both the generated SQL query and the raw query object below the query builder interface."}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.em,{children:["Related: ",(0,s.jsx)(t.a,{href:"./adding-removing-query-properties",children:"Adding and removing query properties"})]})}),"\n"]}),"\n",(0,s.jsx)(i.b,{rqbVersion:8,options:{editorHeight:480},children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport {\n  defaultRuleProcessorSQL,\n  Field,\n  formatQuery,\n  QueryBuilder,\n  RuleGroupType,\n  RuleProcessor,\n  update,\n  ValueEditor,\n  ValueEditorProps,\n} from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.css';\n\nconst CaseSensitivityValueEditor = (props: ValueEditorProps) => {\n  const onChange = () => {\n    props.schema.dispatchQuery(\n      update(props.schema.getQuery(), 'caseSensitive', !props.rule.caseSensitive, props.path)\n    );\n  };\n  return (\n    <>\n      <ValueEditor {...props} />\n      <label>\n        <input type=\"checkbox\" checked={!!props.rule.caseSensitive} onChange={onChange} />\n        {' Case sensitive'}\n      </label>\n    </>\n  );\n};\n\nconst ruleProcessor: RuleProcessor = (rule, opts) => {\n  if (!rule.caseSensitive) {\n    return defaultRuleProcessorSQL(\n      { ...rule, field: `LOWER(${rule.field})`, value: rule.value.toLocaleLowerCase() },\n      opts\n    );\n  }\n  return defaultRuleProcessorSQL(rule, opts);\n};\n\nconst fields: Field[] = [\n  { name: 'firstName', label: 'First Name' },\n  { name: 'lastName', label: 'Last Name' },\n];\n\nconst initialQuery: RuleGroupType = {\n  combinator: 'or',\n  rules: [\n    { field: 'firstName', operator: '=', value: 'Adam', caseSensitive: true },\n    { field: 'firstName', operator: '=', value: 'Eve', caseSensitive: false },\n  ],\n};\n\nexport default () => {\n  const [query, setQuery] = useState(initialQuery);\n\n  return (\n    <div>\n      <QueryBuilder\n        fields={fields}\n        query={query}\n        onQueryChange={setQuery}\n        controlElements={{ valueEditor: CaseSensitivityValueEditor }}\n      />\n      <pre>\n        <code>{formatQuery(query, { format: 'sql', ruleProcessor })}</code>\n      </pre>\n      <pre>\n        <code>{JSON.stringify(query, null, 2)}</code>\n      </pre>\n    </div>\n  );\n};\n"})})})]})}function p(e={}){let{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},23392(e,t,r){r.d(t,{A:()=>o});var n=r(62540);r(63696);var s=r(83029);function o({children:e,fallback:t}){return(0,s.A)()?(0,n.jsx)(n.Fragment,{children:e?.()}):t??null}},94813(e,t,r){r.d(t,{mQ:()=>d,vY:()=>f,ye:()=>o});let n=String.raw`
:root { color-scheme: light; background-color: #ffffff; }
body { margin: 8px; background-color: #ffffff; }
pre {
  padding: 1rem;
  color: #1c1e21;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 0.25rem;
  white-space: pre-wrap;
}
html.dark { background-color: #343a46; }
html.dark body { background-color: #343a46; }
html.dark :is(h1, h2, h3, h4, h5, h6) { color: white; }
`,s="https://esm.sh",o=["/App.tsx","/App.js","/App.jsx","/App.ts"],i=["",".tsx",".ts",".jsx",".js"],a=e=>/\.[jt]sx?$/.test(e),l=/(\bfrom\s*|\bimport\s*|\bimport\(\s*)(['"])(\.[^'"]*)\2/g,c=/^[^\S\n]*import\s+(['"])([^'"]+\.s?css)\1;?[^\S\n]*$/gm;class d extends Error{file;constructor(e,t){super(e),this.file=t,this.name="CompileError"}}let u=(e,t,r="")=>{let n=t[e];return`${s}/${e}${n?`@${encodeURIComponent(n)}`:""}${r}`},p=(e,t,r)=>{let n=t.slice(0,t.lastIndexOf("/")+1),s=new URL(e,`file://${n}`).pathname;for(let e of i)if(r[s+e])return s+e;throw new d(`Cannot resolve '${e}' from '${t}'`,t)},m=String.raw`
const post = (type, extra) => { try { parent.postMessage({ source: 'rqb-live', type, id: ID, ...extra }, '*'); } catch {} };
// Errors are surfaced by the host's overlay, not in here, so a failed example never renders a
// mystery blank box.
const fail = (kind, message, stack) => post('error', { kind, message, stack });
addEventListener('error', e => {
  if (e.target !== window && e.target?.tagName === 'LINK') {
    return fail('network', 'Failed to load stylesheet: ' + e.target.href);
  }
  fail('runtime', e.message, e.error?.stack);
}, true);
addEventListener('unhandledrejection', e => {
  const r = e.reason;
  fail(/Failed to fetch|Importing a module script failed|error loading dynamically imported module/i.test(String(r?.message ?? r)) ? 'network' : 'runtime', String(r?.message ?? r), r?.stack);
});

const urls = {};
const visiting = new Set();
const mint = path => {
  if (urls[path]) return urls[path];
  if (visiting.has(path)) throw new Error('Circular dependency involving ' + path);
  visiting.add(path);
  const mod = MODULES[path];
  for (const dep of mod.deps) mint(dep);
  const code = mod.code.replaceAll(/__RQBMOD:(.*?)__/g, (_m, p) => urls[p]);
  urls[path] = URL.createObjectURL(new Blob([code], { type: 'text/javascript' }));
  visiting.delete(path);
  return urls[path];
};

(async () => {
  let entryURL;
  try {
    entryURL = mint(ENTRY);
  } catch (err) {
    return fail('compile', String(err?.message ?? err), err?.stack);
  }
  try {
    const [mod, React, { createRoot }] = await Promise.all([
      import(entryURL),
      import('react'),
      import('react-dom/client'),
    ]);
    if (typeof mod.default !== 'function') {
      return fail('compile', ENTRY + ' has no default-exported component.');
    }
    createRoot(document.getElementById('root')).render(React.createElement(mod.default));
    post('ready');
  } catch (err) {
    const message = String(err?.message ?? err);
    if (/Failed to fetch|module script failed|dynamically imported module|Importing a module script/i.test(message)) {
      return fail('network', message + '\n\nA dependency could not be loaded from esm.sh. Expected:\n' + DEPENDENCY_LIST);
    }
    fail('runtime', message, err?.stack);
  }
})();

// Height reporting. #root gives the in-flow content height (independent of the iframe's own
// height, unlike documentElement.scrollHeight). Absolutely positioned overflow -- e.g. an open
// date picker popup -- only shows up in body.scrollHeight, and only once it exceeds the viewport.
//
// "slack" is extra room reserved below the content while an input is focused. Without it, a popup
// anchored to an input near the bottom of the example (react-datepicker's calendar, positioned by
// floating-ui) sees no space below inside the iframe viewport and flips upward, where it is clipped
// by the iframe's top edge and appears to hide behind the code block above.
const POPUP_SLACK = 320;
let slack = 0;
const measure = () => {
  const base =
    Math.ceil(document.getElementById('root').getBoundingClientRect().bottom) + 8 + slack;
  const overflow = document.body.scrollHeight > innerHeight ? document.body.scrollHeight : 0;
  return Math.max(base, overflow, 40);
};
let lastHeight = 0;
const report = () => {
  const height = measure();
  if (height !== lastHeight) {
    lastHeight = height;
    post('height', { height });
  }
};
new ResizeObserver(report).observe(document.getElementById('root'));
addEventListener('load', report);
setInterval(report, 250);

let releaseSlack;
addEventListener('focusin', e => {
  if (!e.target.matches('input, textarea')) return;
  clearTimeout(releaseSlack);
  slack = POPUP_SLACK;
  report();
});
addEventListener('focusout', () => {
  // Deferred: clicking a day in an open calendar blurs the input first, and shrinking immediately
  // would move the popup out from under the pointer.
  clearTimeout(releaseSlack);
  releaseSlack = setTimeout(() => {
    slack = 0;
    report();
  }, 300);
});

addEventListener('message', e => {
  if (e.source !== parent) return;
  if (e.data?.source === 'rqb-live-host' && e.data.type === 'theme') {
    document.documentElement.classList.toggle('dark', e.data.dark);
  }
});
post('mounted');
`,h=e=>e.replaceAll("</",String.raw`<\/`),f=(e,t,r)=>{let i=o.find(t=>e[t]);if(!i)throw new d("No entry module. Expected /App.tsx or /App.js.");let f=((e,t)=>{let r={};for(let n of Object.values(e)){let s;if(!a(n.path))continue;let o=n.code.replaceAll(c,"");try{s=t(o,{transforms:["typescript","jsx"],jsxRuntime:"automatic",filePath:n.path}).code}catch(t){let{message:e}=t;throw new d(`${n.path}: ${e}`,n.path)}let i=[],u=s.replaceAll(l,(t,r,s,o)=>{let a=p(o,n.path,e);return i.push(a),`${r}${s}__RQBMOD:${a}__${s}`});r[n.path]={code:u,deps:i}}return r})(e,t),y=(e=>{let t=e.react??"18",r=e["react-dom"]??t,n={react:`${s}/react@${encodeURIComponent(t)}`,"react/":`${s}/react@${encodeURIComponent(t)}/`,"react-dom":`${s}/react-dom@${encodeURIComponent(r)}?external=react`,"react-dom/":`${s}/react-dom@${encodeURIComponent(r)}&external=react/`};for(let t of Object.keys(e))"react"!==t&&"react-dom"!==t&&(n[t]=u(t,e,"?external=react,react-dom"));return{imports:n}})(r.dependencies),g=((e,t)=>{let r=new Set(t.extraCSSImports);for(let t of Object.values(e))if(a(t.path))for(let[,,e]of t.code.matchAll(c))e.startsWith(".")||r.add(e);return[...r].map(e=>((e,t)=>{let r,n,[s,o]=(r=e.split("/"),[n=e.startsWith("@")?r.slice(0,2).join("/"):r[0],e.slice(n.length+1)]);return u(s,t,`/${o}`).replace(/\.scss$/,".css")})(e,t.dependencies))})(e,r),b=[n,...Object.values(e).filter(e=>{let t;return t=e.path,/\.s?css$/.test(t)}).map(e=>e.code)].filter(Boolean).join("\n\n");return`<!doctype html>
<html>
<head>
<meta charset="utf-8">
<script type="importmap">${h(JSON.stringify(y))}</script>
${g.map(e=>`<link rel="stylesheet" href="${e}">`).join("\n")}
<style>${b}</style>
</head>
<body>
<div id="root"></div>
<script type="module">
const ID = ${h(JSON.stringify(r.id))};
const ENTRY = ${JSON.stringify(i)};
const DEPENDENCY_LIST = ${h(JSON.stringify(Object.entries(y.imports).map(([e,t])=>`  ${e} -> ${t}`).join("\n")))};
const MODULES = ${h(JSON.stringify(f))};
${m}
</script>
</body>
</html>`}},52162(e,t,r){r.d(t,{b:()=>u});var n=r(62540),s=r(23392),o=r(34471),i=r(63696),a=r(94813);let l=/^\s*import\s+(['"])react-querybuilder\/dist\/query-builder\.s?css\1;?\s*$/m,c={"language-tsx":"/App.tsx","language-js":"/App.js","language-css":"/styles.css"},d=i.lazy(()=>Promise.all([r.e("24014"),r.e("36400"),r.e("79715")]).then(r.bind(r,63726)).then(e=>({default:e.LiveExample}))),u=({children:e,customSetup:t,rqbVersion:r=8})=>{let u="dark"===(0,o.G)().colorMode,{files:p,error:m}=i.useMemo(()=>(e=>{let t=i.Children.toArray(e),r=[];for(let e of t){let t,n=e?.props?.children?.props;if(!n||"string"!=typeof n.children)return{files:r,error:"Every child of SandpackRQB must be a code fence."};let s=!1,o=!1;if(n.metastring){let[e,...r]=n.metastring.split(" ");t="/"+e,s=r.includes("hidden"),o=r.includes("active")}else if(!(t=c[n.className??""]))return{files:r,error:`Code block is missing a filename: ${n.children}`};if(r.some(e=>e.path===t))return{files:r,error:`File ${t} was defined multiple times. Each file snippet should have a unique path name.`};r.push({path:t,code:n.children,lang:n.className?.replace("language-","")??"tsx",hidden:s,active:o})}return{files:r}})(e),[e]),h=i.useMemo(()=>({...t?.dependencies,"react-querybuilder":`^${r}`}),[t?.dependencies,r]),f=i.useMemo(()=>{let e=p.find(e=>a.ye.includes(e.path));return e&&l.test(e.code)?[]:["react-querybuilder/dist/query-builder.css"]},[p]);return(0,n.jsx)("div",{className:"sandpackrqb",children:(0,n.jsx)(s.A,{children:()=>(0,n.jsx)(i.Suspense,{fallback:null,children:(0,n.jsx)(d,{files:p,dependencies:h,extraCSSImports:f,parseError:m,dark:u})})})},`v${r}`)}},43023(e,t,r){r.d(t,{R:()=>i,x:()=>a});var n=r(63696);let s={},o=n.createContext(s);function i(e){let t=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);