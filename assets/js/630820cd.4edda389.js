"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["43618"],{6982(e,t,r){r.r(t),r.d(t,{metadata:()=>n,default:()=>u,frontMatter:()=>s,contentTitle:()=>l,toc:()=>d,assets:()=>c});var n=JSON.parse('{"id":"tips/path","title":"Path concepts","description":"Explanation of the \\"path\\" property of rules and groups","source":"@site/versioned_docs/version-6/tips/path.mdx","sourceDirName":"tips","slug":"/tips/path","permalink":"/docs/6/tips/path","draft":false,"unlisted":false,"editUrl":"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/versioned_docs/version-6/tips/path.mdx","tags":[],"version":"6","frontMatter":{"title":"Path concepts","description":"Explanation of the \\"path\\" property of rules and groups","hide_table_of_contents":true},"sidebar":"mySidebar","previous":{"title":"Managing operators","permalink":"/docs/6/tips/managing-operators"},"next":{"title":"Limit rule groups","permalink":"/docs/6/tips/limit-groups"}}'),o=r(62540),a=r(43023),i=r(52162);let s={title:"Path concepts",description:'Explanation of the "path" property of rules and groups',hide_table_of_contents:!0},l,c={},d=[{value:"Finding a <code>path</code>",id:"finding-a-path",level:2},{value:"Example",id:"example",level:2}];function p(e){let t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["While the ",(0,o.jsx)(t.code,{children:"id"})," property can uniquely identify a rule or group, an ",(0,o.jsx)(t.code,{children:"id"})," won't naturally indicate anything about the ",(0,o.jsx)(t.em,{children:"position"}),' of the object within the query hierarchy. For that reason, React Query Builder uses the concept of a "path" to locate and update query objects.']}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"path"})," property is an array of integers unique to each rule and group within a query. The query object itself, aka the root group, has a ",(0,o.jsx)(t.code,{children:"path"})," of ",(0,o.jsx)(t.code,{children:"[]"}),". All other rules and groups within the query have a ",(0,o.jsx)(t.code,{children:"path"})," that corresponds to their position within the ",(0,o.jsx)(t.code,{children:"rules"})," array(s) of their ancestor group(s)."]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"path"})," of any object (rule or group) is equivalent to the ",(0,o.jsx)(t.code,{children:"path"})," of its parent group plus another array element which is the index of the object within its parent's ",(0,o.jsx)(t.code,{children:"rules"})," array. You can think of it like this: ",(0,o.jsx)(t.code,{children:"path = [...parentPath, index]"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Consider the following query. The respective ",(0,o.jsx)(t.code,{children:"path"})," for each rule and group is commented above it, along with a short explanation."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"// [] (the root group)\nconst query: RuleGroupType = {\n  combinator: 'and',\n  rules: [\n    // [0] (the first, aka zeroth, element in the root rules array)\n    { field: 'f1', operator: '=', value: 'v1' },\n    // [1] (the second element in the root rules array is a sub-group)\n    {\n      combinator: 'or',\n      rules: [\n        // [1, 0] (the first element within the rules array\n        //         of the group occupying the second position\n        //         in the root rules array)\n        { field: 'f2', operator: '=', value: 'v2' },\n        // [1, 1] (the second element within the rules array\n        //         of the group occupying the second position\n        //         in the root rules array)\n        { field: 'f3', operator: '=', value: 'v3' },\n      ],\n    },\n  ],\n};\n"})}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"path"})," of the top-most rule in the query is ",(0,o.jsx)(t.code,{children:"[0]"}),", ",(0,o.jsx)(t.code,{children:"0"})," being the index of that rule within the root group's ",(0,o.jsx)(t.code,{children:"rules"})," array. The ",(0,o.jsx)(t.code,{children:"path"})," of the first sub-group in the query is ",(0,o.jsx)(t.code,{children:"[1]"}),", again according to its index within the outermost ",(0,o.jsx)(t.code,{children:"rules"})," array. Each child rule of ",(0,o.jsx)(t.em,{children:"that"})," group has a path that begins with ",(0,o.jsx)(t.code,{children:"1"})," (the ",(0,o.jsx)(t.code,{children:"path"})," of its parent), followed by its own index."]}),"\n",(0,o.jsxs)(t.h2,{id:"finding-a-path",children:["Finding a ",(0,o.jsx)(t.code,{children:"path"})]}),"\n",(0,o.jsxs)(t.p,{children:["Use the ",(0,o.jsx)(t.a,{href:"../utils/misc#findpath",children:(0,o.jsx)(t.code,{children:"findPath"})})," function to locate a specific rule or group for examination or update. Given the query above:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"findPath([1, 0], query);\n"})}),"\n",(0,o.jsx)(t.p,{children:"would return this object:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{ "field": "f2", "operator": "=", "value": "v2" }\n'})}),"\n",(0,o.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,o.jsxs)(t.p,{children:["In most scenarios you won't need to interact with the ",(0,o.jsx)(t.code,{children:"path"})," attribute, but it can come in handy in certain situations. One such situation is if you need to access other parts of the query from within a custom component."]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:["By default, custom components only receive props relevant to the rule or group they act on, but you can augment these default props with other data or information by using the ",(0,o.jsxs)(t.a,{href:"../components/querybuilder#context",children:[(0,o.jsx)(t.code,{children:"context"})," prop"]}),"."]})}),"\n",(0,o.jsxs)(t.p,{children:["Say you have a custom value editor that needs to know the ",(0,o.jsx)(t.code,{children:"value"})," of each of its sibling rules. We would recommend passing the entire query down through the ",(0,o.jsx)(t.code,{children:"context"})," prop and retrieving the sibling rules with a combination of ",(0,o.jsx)(t.code,{children:"getParentPath"})," and ",(0,o.jsx)(t.code,{children:"findPath"}),"."]}),"\n",(0,o.jsxs)(i.b,{rqbVersion:6,options:{editorHeight:444,activeFile:"/CustomValueEditor.tsx"},children:[(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",metastring:"CustomValueEditor.tsx",children:"import {\n  findPath,\n  getParentPath,\n  RuleGroupType,\n  RuleType,\n  ValueEditor,\n  ValueEditorProps,\n} from 'react-querybuilder';\n\nexport const CustomValueEditor = (props: ValueEditorProps) => {\n  // Get the path of this rule's parent group\n  const parentPath = getParentPath(props.path);\n  // Find the parent group object in the query\n  const parentGroup = findPath(parentPath, props.context.query) as RuleGroupType;\n  const id = findPath(props.path, props.context.query)!.id;\n  // Get a comma-separated list of all sibling rule values\n  const siblingValues = (\n    parentGroup.rules.filter(\n      r =>\n        // filter out groups\n        !('rules' in r) &&\n        // filter out self\n        r.id !== id\n    ) as RuleType[]\n  )\n    // map the `value` property\n    .map(r => r.value)\n    // join with comma\n    .join(', ');\n\n  return (\n    <div style={{ display: 'flex', flexDirection: 'column' }}>\n      <ValueEditor {...props} />\n      <span>Others: {siblingValues}</span>\n    </div>\n  );\n};\n"})}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { QueryBuilder } from 'react-querybuilder';\nimport { CustomValueEditor } from './CustomValueEditor';\nimport { defaultQuery, fields, operators } from './constants';\n\nexport default function App() {\n  const [query, setQuery] = useState(defaultQuery);\n\n  return (\n    <QueryBuilder\n      fields={fields}\n      operators={operators}\n      query={query}\n      onQueryChange={q => setQuery(q)}\n      controlElements={{ valueEditor: CustomValueEditor }}\n      context={{ query }}\n    />\n  );\n}\n"})}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",metastring:"constants.ts",children:"import { defaultOperators, Field, RuleGroupType } from 'react-querybuilder';\n\nexport const operators = defaultOperators.filter(op => op.name === '=');\n\nexport const fields: Field[] = [\n  { name: 'field1', label: 'Field 1' },\n  { name: 'field2', label: 'Field 2' },\n  { name: 'field3', label: 'Field 3' },\n  { name: 'field4', label: 'Field 4' },\n];\n\nexport const defaultQuery: RuleGroupType = {\n  combinator: 'and',\n  rules: [\n    { field: 'field1', operator: '=', value: '1' },\n    { field: 'field2', operator: '=', value: '2' },\n    { field: 'field3', operator: '=', value: '3' },\n    { field: 'field4', operator: '=', value: '4' },\n  ],\n};\n"})}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-css",children:".queryBuilder .rule {\n  align-items: flex-start;\n}\n\nspan {\n  color: gray;\n}\n"})})]})]})}function u(e={}){let{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},23392(e,t,r){r.d(t,{A:()=>a});var n=r(62540);r(63696);var o=r(83029);function a({children:e,fallback:t}){return(0,o.A)()?(0,n.jsx)(n.Fragment,{children:e?.()}):t??null}},94813(e,t,r){r.d(t,{mQ:()=>d,vY:()=>f,ye:()=>a});let n=String.raw`
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
`,o="https://esm.sh",a=["/App.tsx","/App.js","/App.jsx","/App.ts"],i=["",".tsx",".ts",".jsx",".js"],s=e=>/\.[jt]sx?$/.test(e),l=/(\bfrom\s*|\bimport\s*|\bimport\(\s*)(['"])(\.[^'"]*)\2/g,c=/^[^\S\n]*import\s+(['"])([^'"]+\.s?css)\1;?[^\S\n]*$/gm;class d extends Error{file;constructor(e,t){super(e),this.file=t,this.name="CompileError"}}let p=(e,t,r="")=>{let n=t[e];return`${o}/${e}${n?`@${encodeURIComponent(n)}`:""}${r}`},u=(e,t,r)=>{let n=t.slice(0,t.lastIndexOf("/")+1),o=new URL(e,`file://${n}`).pathname;for(let e of i)if(r[o+e])return o+e;throw new d(`Cannot resolve '${e}' from '${t}'`,t)},h=String.raw`
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
`,m=e=>e.replaceAll("</",String.raw`<\/`),f=(e,t,r)=>{let i=a.find(t=>e[t]);if(!i)throw new d("No entry module. Expected /App.tsx or /App.js.");let f=((e,t)=>{let r={};for(let n of Object.values(e)){let o;if(!s(n.path))continue;let a=n.code.replaceAll(c,"");try{o=t(a,{transforms:["typescript","jsx"],jsxRuntime:"automatic",filePath:n.path}).code}catch(t){let{message:e}=t;throw new d(`${n.path}: ${e}`,n.path)}let i=[],p=o.replaceAll(l,(t,r,o,a)=>{let s=u(a,n.path,e);return i.push(s),`${r}${o}__RQBMOD:${s}__${o}`});r[n.path]={code:p,deps:i}}return r})(e,t),g=(e=>{let t=e.react??"18",r=e["react-dom"]??t,n={react:`${o}/react@${encodeURIComponent(t)}`,"react/":`${o}/react@${encodeURIComponent(t)}/`,"react-dom":`${o}/react-dom@${encodeURIComponent(r)}?external=react`,"react-dom/":`${o}/react-dom@${encodeURIComponent(r)}&external=react/`};for(let t of Object.keys(e))"react"!==t&&"react-dom"!==t&&(n[t]=p(t,e,"?external=react,react-dom"));return{imports:n}})(r.dependencies),y=((e,t)=>{let r=new Set(t.extraCSSImports);for(let t of Object.values(e))if(s(t.path))for(let[,,e]of t.code.matchAll(c))e.startsWith(".")||r.add(e);return[...r].map(e=>((e,t)=>{let r,n,[o,a]=(r=e.split("/"),[n=e.startsWith("@")?r.slice(0,2).join("/"):r[0],e.slice(n.length+1)]);return p(o,t,`/${a}`).replace(/\.scss$/,".css")})(e,t.dependencies))})(e,r),x=[n,...Object.values(e).filter(e=>{let t;return t=e.path,/\.s?css$/.test(t)}).map(e=>e.code)].filter(Boolean).join("\n\n");return`<!doctype html>
<html>
<head>
<meta charset="utf-8">
<script type="importmap">${m(JSON.stringify(g))}</script>
${y.map(e=>`<link rel="stylesheet" href="${e}">`).join("\n")}
<style>${x}</style>
</head>
<body>
<div id="root"></div>
<script type="module">
const ID = ${m(JSON.stringify(r.id))};
const ENTRY = ${JSON.stringify(i)};
const DEPENDENCY_LIST = ${m(JSON.stringify(Object.entries(g.imports).map(([e,t])=>`  ${e} -> ${t}`).join("\n")))};
const MODULES = ${m(JSON.stringify(f))};
${h}
</script>
</body>
</html>`}},52162(e,t,r){r.d(t,{b:()=>p});var n=r(62540),o=r(23392),a=r(34471),i=r(63696),s=r(94813);let l=/^\s*import\s+(['"])react-querybuilder\/dist\/query-builder\.s?css\1;?\s*$/m,c={"language-tsx":"/App.tsx","language-js":"/App.js","language-css":"/styles.css"},d=i.lazy(()=>Promise.all([r.e("24014"),r.e("36400"),r.e("79715")]).then(r.bind(r,63726)).then(e=>({default:e.LiveExample}))),p=({children:e,customSetup:t,rqbVersion:r=8})=>{let p="dark"===(0,a.G)().colorMode,{files:u,error:h}=i.useMemo(()=>(e=>{let t=i.Children.toArray(e),r=[];for(let e of t){let t,n=e?.props?.children?.props;if(!n||"string"!=typeof n.children)return{files:r,error:"Every child of SandpackRQB must be a code fence."};let o=!1,a=!1;if(n.metastring){let[e,...r]=n.metastring.split(" ");t="/"+e,o=r.includes("hidden"),a=r.includes("active")}else if(!(t=c[n.className??""]))return{files:r,error:`Code block is missing a filename: ${n.children}`};if(r.some(e=>e.path===t))return{files:r,error:`File ${t} was defined multiple times. Each file snippet should have a unique path name.`};r.push({path:t,code:n.children,lang:n.className?.replace("language-","")??"tsx",hidden:o,active:a})}return{files:r}})(e),[e]),m=i.useMemo(()=>({...t?.dependencies,"react-querybuilder":`^${r}`}),[t?.dependencies,r]),f=i.useMemo(()=>{let e=u.find(e=>s.ye.includes(e.path));return e&&l.test(e.code)?[]:["react-querybuilder/dist/query-builder.css"]},[u]);return(0,n.jsx)("div",{className:"sandpackrqb",children:(0,n.jsx)(o.A,{children:()=>(0,n.jsx)(i.Suspense,{fallback:null,children:(0,n.jsx)(d,{files:u,dependencies:m,extraCSSImports:f,parseError:h,dark:p})})})},`v${r}`)}},43023(e,t,r){r.d(t,{R:()=>i,x:()=>s});var n=r(63696);let o={},a=n.createContext(o);function i(e){let t=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);