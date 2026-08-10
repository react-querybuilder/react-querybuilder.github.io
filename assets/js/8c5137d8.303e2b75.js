"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["50885"],{45756(e,t,r){r.r(t),r.d(t,{metadata:()=>a,default:()=>m,frontMatter:()=>i,contentTitle:()=>l,toc:()=>p,assets:()=>d});var a=JSON.parse('{"id":"tips/parameter-manager","title":"External parameter manager","description":"Feed an external parameter component into a query builder","source":"@site/docs/tips/parameter-manager.mdx","sourceDirName":"tips","slug":"/tips/parameter-manager","permalink":"/docs/next/tips/parameter-manager","draft":false,"unlisted":false,"editUrl":"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/docs/tips/parameter-manager.mdx","tags":[],"version":"current","frontMatter":{"title":"External parameter manager","description":"Feed an external parameter component into a query builder"},"sidebar":"mySidebar","previous":{"title":"Custom bind variables","permalink":"/docs/next/tips/custom-bind-variables"},"next":{"title":"Path concepts","permalink":"/docs/next/tips/path"}}'),n=r(62540),s=r(43023),o=r(52162);let i={title:"External parameter manager",description:"Feed an external parameter component into a query builder"},l,d={},p=[];function c(e){let t={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:['This example wires an external "parameter manager" component to a query builder. The manager owns a user-supplied list of parameters\u2014each with a ',(0,n.jsx)(t.strong,{children:"name"})," (like ",(0,n.jsx)(t.code,{children:"p1"}),"), an optional ",(0,n.jsx)(t.strong,{children:"label"})," (like ",(0,n.jsx)(t.code,{children:"Param 1"}),"), and an optional ",(0,n.jsx)(t.strong,{children:"value"}),". Its state is passed as the ",(0,n.jsx)(t.a,{href:"../components/querybuilder#getparameters",children:(0,n.jsx)(t.code,{children:"getParameters"})})," prop, so rules whose ",(0,n.jsx)(t.a,{href:"../components/valueeditor#the-parameter-value-source",children:(0,n.jsx)(t.code,{children:"valueSource"})})," is ",(0,n.jsx)(t.code,{children:'"parameter"'})," present the managed names in their value editors."]}),"\n",(0,n.jsxs)(t.p,{children:["The rendered SQL comes from the ",(0,n.jsx)(t.a,{href:"../utils/export#named-parameters",children:(0,n.jsx)(t.code,{children:'"parameterized_named"'})})," ",(0,n.jsx)(t.code,{children:"formatQuery"})," export, which registers each referenced parameter as a ",(0,n.jsx)(t.code,{children:"params"})," key with a ",(0,n.jsx)(t.code,{children:"null"})," placeholder. The example merges the manager's values over those placeholders, leaving ",(0,n.jsx)(t.code,{children:"null"})," for parameters without a supplied value."]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["Parameter names are stored ",(0,n.jsx)(t.strong,{children:"without"})," a prefix (e.g. ",(0,n.jsx)(t.code,{children:"p1"}),", not ",(0,n.jsx)(t.code,{children:":p1"}),"); ",(0,n.jsx)(t.code,{children:"formatQuery"})," adds the dialect-appropriate prefix. The merge below strips any prefix from the ",(0,n.jsx)(t.code,{children:"params"})," keys before matching them to the manager's entries."]})}),"\n",(0,n.jsx)(o.b,{rqbVersion:8,options:{editorHeight:520},children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport type { Field, RuleGroupType } from 'react-querybuilder';\nimport { formatQuery, QueryBuilder } from 'react-querybuilder';\n\ninterface Parameter {\n  id: string;\n  name: string;\n  label?: string;\n  value?: string;\n}\n\nconst genId = () => crypto.randomUUID();\n\nconst fields: Field[] = [\n  { name: 'firstName', label: 'First Name', valueSources: ['value', 'parameter'] },\n  { name: 'lastName', label: 'Last Name', valueSources: ['value', 'parameter'] },\n];\n\nconst initialQuery: RuleGroupType = {\n  combinator: 'and',\n  rules: [\n    { field: 'firstName', operator: '=', value: 'p1', valueSource: 'parameter' },\n    { field: 'lastName', operator: 'beginsWith', value: 'V' },\n  ],\n};\n\nconst initialParameters: Parameter[] = [\n  { id: genId(), name: 'p1', label: 'Param 1', value: 'Steve' },\n  { id: genId(), name: 'p2', label: 'Param 2' },\n];\n\n// Strip a leading param prefix (\":\", \"@\", \"$\", etc.) from a params key.\nconst stripPrefix = (key: string) => key.replace(/^[^A-Za-z0-9_]+/, '');\n\n// The external \"parameter manager\" component. It owns the list of\n// parameters and reports changes up to the parent via `onChange`.\nconst ParameterManager = ({\n  parameters,\n  onChange,\n}: {\n  parameters: Parameter[];\n  onChange: (parameters: Parameter[]) => void;\n}) => {\n  const update = (index: number, key: keyof Parameter, value: string) => {\n    const next = parameters.map((p, i) => (i === index ? { ...p, [key]: value } : p));\n    onChange(next);\n  };\n  const remove = (index: number) => onChange(parameters.filter((_, i) => i !== index));\n  const add = () => onChange([...parameters, { id: genId(), name: `p${parameters.length + 1}` }]);\n\n  return (\n    <div style={{ marginBottom: '1rem' }}>\n      <h4>Parameter manager</h4>\n      <table>\n        <thead>\n          <tr>\n            <th>Name</th>\n            <th>Label</th>\n            <th>Value</th>\n            <th />\n          </tr>\n        </thead>\n        <tbody>\n          {parameters.map((p, i) => (\n            <tr key={p.id}>\n              <td>\n                <input\n                  value={p.name}\n                  placeholder=\"p1\"\n                  onChange={e => update(i, 'name', e.target.value)}\n                />\n              </td>\n              <td>\n                <input\n                  value={p.label ?? ''}\n                  placeholder=\"Param 1\"\n                  onChange={e => update(i, 'label', e.target.value)}\n                />\n              </td>\n              <td>\n                <input\n                  value={p.value ?? ''}\n                  placeholder=\"(no value)\"\n                  onChange={e => update(i, 'value', e.target.value)}\n                />\n              </td>\n              <td>\n                <button type=\"button\" onClick={() => remove(i)}>\n                  \xd7\n                </button>\n              </td>\n            </tr>\n          ))}\n        </tbody>\n      </table>\n      <button type=\"button\" onClick={add}>\n        Add parameter\n      </button>\n    </div>\n  );\n};\n\nexport default () => {\n  const [query, setQuery] = useState(initialQuery);\n  const [parameters, setParameters] = useState(initialParameters);\n\n  // Only expose named parameters (label falls back to the name).\n  const getParameters = () =>\n    parameters.filter(p => p.name).map(p => ({ name: p.name, label: p.label || p.name }));\n\n  // Look up a supplied value by (prefix-less) parameter name.\n  const valueByName = new Map(parameters.map(p => [p.name, p.value]));\n\n  const { sql, params } = formatQuery(query, 'parameterized_named');\n\n  // Merge the manager's values over the `null` placeholders.\n  const mergedParams = Object.fromEntries(\n    Object.keys(params).map(key => {\n      const value = valueByName.get(stripPrefix(key));\n      return [key, value ? value : null];\n    })\n  );\n\n  return (\n    <div>\n      <ParameterManager parameters={parameters} onChange={setParameters} />\n      <QueryBuilder\n        fields={fields}\n        query={query}\n        onQueryChange={setQuery}\n        getParameters={getParameters}\n      />\n      <h4>SQL</h4>\n      <pre>{sql}</pre>\n      <h4>Parameters</h4>\n      <pre>{JSON.stringify(mergedParams, null, 2)}</pre>\n    </div>\n  );\n};\n"})})})]})}function m(e={}){let{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},23392(e,t,r){r.d(t,{A:()=>s});var a=r(62540);r(63696);var n=r(83029);function s({children:e,fallback:t}){return(0,n.A)()?(0,a.jsx)(a.Fragment,{children:e?.()}):t??null}},94813(e,t,r){r.d(t,{mQ:()=>p,vY:()=>g,ye:()=>s});let a=String.raw`
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
`,n="https://esm.sh",s=["/App.tsx","/App.js","/App.jsx","/App.ts"],o=["",".tsx",".ts",".jsx",".js"],i=e=>/\.[jt]sx?$/.test(e),l=/(\bfrom\s*|\bimport\s*|\bimport\(\s*)(['"])(\.[^'"]*)\2/g,d=/^[^\S\n]*import\s+(['"])([^'"]+\.s?css)\1;?[^\S\n]*$/gm;class p extends Error{file;constructor(e,t){super(e),this.file=t,this.name="CompileError"}}let c=(e,t,r="")=>{let a=t[e];return`${n}/${e}${a?`@${encodeURIComponent(a)}`:""}${r}`},m=(e,t,r)=>{let a=t.slice(0,t.lastIndexOf("/")+1),n=new URL(e,`file://${a}`).pathname;for(let e of o)if(r[n+e])return n+e;throw new p(`Cannot resolve '${e}' from '${t}'`,t)},u=String.raw`
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
`,h=e=>e.replaceAll("</",String.raw`<\/`),g=(e,t,r)=>{let o=s.find(t=>e[t]);if(!o)throw new p("No entry module. Expected /App.tsx or /App.js.");let g=((e,t)=>{let r={};for(let a of Object.values(e)){let n;if(!i(a.path))continue;let s=a.code.replaceAll(d,"");try{n=t(s,{transforms:["typescript","jsx"],jsxRuntime:"automatic",filePath:a.path}).code}catch(t){let{message:e}=t;throw new p(`${a.path}: ${e}`,a.path)}let o=[],c=n.replaceAll(l,(t,r,n,s)=>{let i=m(s,a.path,e);return o.push(i),`${r}${n}__RQBMOD:${i}__${n}`});r[a.path]={code:c,deps:o}}return r})(e,t),f=(e=>{let t=e.react??"18",r=e["react-dom"]??t,a={react:`${n}/react@${encodeURIComponent(t)}`,"react/":`${n}/react@${encodeURIComponent(t)}/`,"react-dom":`${n}/react-dom@${encodeURIComponent(r)}?external=react`,"react-dom/":`${n}/react-dom@${encodeURIComponent(r)}&external=react/`};for(let t of Object.keys(e))"react"!==t&&"react-dom"!==t&&(a[t]=c(t,e,"?external=react,react-dom"));return{imports:a}})(r.dependencies),y=((e,t)=>{let r=new Set(t.extraCSSImports);for(let t of Object.values(e))if(i(t.path))for(let[,,e]of t.code.matchAll(d))e.startsWith(".")||r.add(e);return[...r].map(e=>((e,t)=>{let r,a,[n,s]=(r=e.split("/"),[a=e.startsWith("@")?r.slice(0,2).join("/"):r[0],e.slice(a.length+1)]);return c(n,t,`/${s}`).replace(/\.scss$/,".css")})(e,t.dependencies))})(e,r),b=[a,...Object.values(e).filter(e=>{let t;return t=e.path,/\.s?css$/.test(t)}).map(e=>e.code)].filter(Boolean).join("\n\n");return`<!doctype html>
<html>
<head>
<meta charset="utf-8">
<script type="importmap">${h(JSON.stringify(f))}</script>
${y.map(e=>`<link rel="stylesheet" href="${e}">`).join("\n")}
<style>${b}</style>
</head>
<body>
<div id="root"></div>
<script type="module">
const ID = ${h(JSON.stringify(r.id))};
const ENTRY = ${JSON.stringify(o)};
const DEPENDENCY_LIST = ${h(JSON.stringify(Object.entries(f.imports).map(([e,t])=>`  ${e} -> ${t}`).join("\n")))};
const MODULES = ${h(JSON.stringify(g))};
${u}
</script>
</body>
</html>`}},52162(e,t,r){r.d(t,{b:()=>c});var a=r(62540),n=r(23392),s=r(34471),o=r(63696),i=r(94813);let l=/^\s*import\s+(['"])react-querybuilder\/dist\/query-builder\.s?css\1;?\s*$/m,d={"language-tsx":"/App.tsx","language-js":"/App.js","language-css":"/styles.css"},p=o.lazy(()=>Promise.all([r.e("24014"),r.e("36400"),r.e("79715")]).then(r.bind(r,63726)).then(e=>({default:e.LiveExample}))),c=({children:e,customSetup:t,rqbVersion:r=8})=>{let c="dark"===(0,s.G)().colorMode,{files:m,error:u}=o.useMemo(()=>(e=>{let t=o.Children.toArray(e),r=[];for(let e of t){let t,a=e?.props?.children?.props;if(!a||"string"!=typeof a.children)return{files:r,error:"Every child of SandpackRQB must be a code fence."};let n=!1,s=!1;if(a.metastring){let[e,...r]=a.metastring.split(" ");t="/"+e,n=r.includes("hidden"),s=r.includes("active")}else if(!(t=d[a.className??""]))return{files:r,error:`Code block is missing a filename: ${a.children}`};if(r.some(e=>e.path===t))return{files:r,error:`File ${t} was defined multiple times. Each file snippet should have a unique path name.`};r.push({path:t,code:a.children,lang:a.className?.replace("language-","")??"tsx",hidden:n,active:s})}return{files:r}})(e),[e]),h=o.useMemo(()=>({...t?.dependencies,"react-querybuilder":`^${r}`}),[t?.dependencies,r]),g=o.useMemo(()=>{let e=m.find(e=>i.ye.includes(e.path));return e&&l.test(e.code)?[]:["react-querybuilder/dist/query-builder.css"]},[m]);return(0,a.jsx)("div",{className:"sandpackrqb",children:(0,a.jsx)(n.A,{children:()=>(0,a.jsx)(o.Suspense,{fallback:null,children:(0,a.jsx)(p,{files:m,dependencies:h,extraCSSImports:g,parseError:u,dark:c})})})},`v${r}`)}},43023(e,t,r){r.d(t,{R:()=>o,x:()=>i});var a=r(63696);let n={},s=a.createContext(n);function o(e){let t=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);