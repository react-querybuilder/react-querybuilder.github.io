"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["29570"],{6270(e,t,r){r.r(t),r.d(t,{metadata:()=>n,default:()=>p,frontMatter:()=>i,contentTitle:()=>l,toc:()=>c,assets:()=>d});var n=JSON.parse('{"id":"tips/external-controls","title":"External controls","description":"Managing queries outside the main component","source":"@site/versioned_docs/version-6/tips/external-controls.mdx","sourceDirName":"tips","slug":"/tips/external-controls","permalink":"/docs/6/tips/external-controls","draft":false,"unlisted":false,"editUrl":"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/versioned_docs/version-6/tips/external-controls.mdx","tags":[],"version":"6","frontMatter":{"title":"External controls","description":"Managing queries outside the main component","hide_table_of_contents":true},"sidebar":"mySidebar","previous":{"title":"Custom components with fallbacks","permalink":"/docs/6/tips/custom-with-fallback"},"next":{"title":"Custom bind variables","permalink":"/docs/6/tips/custom-bind-variables"}}'),o=r(62540),s=r(43023),a=r(52162);let i={title:"External controls",description:"Managing queries outside the main component",hide_table_of_contents:!0},l,d={},c=[];function u(e){let t={a:"a",code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["React Query Builder exports the same ",(0,o.jsx)(t.a,{href:"../utils/misc#query-tools",children:"query tools"})," it uses internally to manage query updates. These functions can be used outside the context of the ",(0,o.jsx)(t.code,{children:"<QueryBuilder />"})," component, giving developers greater flexibility in UI design while enabling the same query management features."]}),"\n",(0,o.jsxs)(t.p,{children:["In the example below, the default add/remove buttons have been hidden. The internal query methods (",(0,o.jsx)(t.code,{children:"add"}),", ",(0,o.jsx)(t.code,{children:"remove"}),", ",(0,o.jsx)(t.code,{children:"update"}),", and ",(0,o.jsx)(t.code,{children:"move"}),") are used within the event handlers assigned to the controls above the query builder. The function return values are assigned to the same state variable that the query builder uses, so the updates are synchronized."]}),"\n",(0,o.jsx)(a.b,{rqbVersion:6,options:{editorHeight:480},children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport {\n  add,\n  defaultCombinators,\n  Field,\n  move,\n  QueryBuilder,\n  remove,\n  RuleGroupType,\n  update,\n} from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.css';\n\nconst fields: Field[] = [\n  { name: 'firstName', label: 'First Name' },\n  { name: 'lastName', label: 'Last Name' },\n];\n\nconst initialQuery: RuleGroupType = {\n  combinator: 'and',\n  rules: [\n    { field: 'firstName', operator: '=', value: 'Steve' },\n    { field: 'lastName', operator: '=', value: 'Vai' },\n  ],\n};\n\nconst NullComponent = () => null;\n\nexport default () => {\n  const [query, setQuery] = useState(initialQuery);\n\n  // add\n  const addRule = () =>\n    setQuery(add(query, { field: 'firstName', operator: '=', value: 'Steve' }, []));\n\n  // remove\n  const removeFirstRule = () => setQuery(remove(query, [0]));\n\n  // update\n  const updateCombinator = (e: ChangeEvent<HTMLSelectElement>) =>\n    setQuery(update(query, 'combinator', e.target.value, []));\n\n  // move\n  const moveBottomRuleToTop = () => setQuery(move(query, [query.rules.length - 1], [0]));\n\n  return (\n    <div>\n      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>\n        <button onClick={addRule} title=\"Add a rule at the bottom of the group\">\n          Add rule\n        </button>\n        <button onClick={removeFirstRule} title=\"Remove the top-most rule\">\n          Remove first rule\n        </button>\n        <button onClick={moveBottomRuleToTop} title=\"Move the bottom-most rule to the top\">\n          Move bottom rule to top\n        </button>\n        <select value={query.combinator} onChange={updateCombinator} title=\"Update the combinator\">\n          {defaultCombinators.map(c => (\n            <option key={c.name} value={c.name}>\n              Update combinator to {c.label}\n            </option>\n          ))}\n        </select>\n      </div>\n      <QueryBuilder\n        fields={fields}\n        query={query}\n        onQueryChange={q => setQuery(q)}\n        controlElements={{\n          // These declarations prevent the \"+Rule\", \"+Group\",\n          // and \"x\" (rule removal) buttons from rendering:\n          addGroupAction: NullComponent,\n          addRuleAction: NullComponent,\n          removeRuleAction: NullComponent,\n        }}\n      />\n    </div>\n  );\n};\n"})})})]})}function p(e={}){let{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},23392(e,t,r){r.d(t,{A:()=>s});var n=r(62540);r(63696);var o=r(83029);function s({children:e,fallback:t}){return(0,o.A)()?(0,n.jsx)(n.Fragment,{children:e?.()}):t??null}},94813(e,t,r){r.d(t,{mQ:()=>c,vY:()=>f,ye:()=>s});let n=String.raw`
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
`,o="https://esm.sh",s=["/App.tsx","/App.js","/App.jsx","/App.ts"],a=["",".tsx",".ts",".jsx",".js"],i=e=>/\.[jt]sx?$/.test(e),l=/(\bfrom\s*|\bimport\s*|\bimport\(\s*)(['"])(\.[^'"]*)\2/g,d=/^[^\S\n]*import\s+(['"])([^'"]+\.s?css)\1;?[^\S\n]*$/gm;class c extends Error{file;constructor(e,t){super(e),this.file=t,this.name="CompileError"}}let u=(e,t,r="")=>{let n=t[e];return`${o}/${e}${n?`@${encodeURIComponent(n)}`:""}${r}`},p=(e,t,r)=>{let n=t.slice(0,t.lastIndexOf("/")+1),o=new URL(e,`file://${n}`).pathname;for(let e of a)if(r[o+e])return o+e;throw new c(`Cannot resolve '${e}' from '${t}'`,t)},m=String.raw`
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
`,h=e=>e.replaceAll("</",String.raw`<\/`),f=(e,t,r)=>{let a=s.find(t=>e[t]);if(!a)throw new c("No entry module. Expected /App.tsx or /App.js.");let f=((e,t)=>{let r={};for(let n of Object.values(e)){let o;if(!i(n.path))continue;let s=n.code.replaceAll(d,"");try{o=t(s,{transforms:["typescript","jsx"],jsxRuntime:"automatic",filePath:n.path}).code}catch(t){let{message:e}=t;throw new c(`${n.path}: ${e}`,n.path)}let a=[],u=o.replaceAll(l,(t,r,o,s)=>{let i=p(s,n.path,e);return a.push(i),`${r}${o}__RQBMOD:${i}__${o}`});r[n.path]={code:u,deps:a}}return r})(e,t),g=(e=>{let t=e.react??"18",r=e["react-dom"]??t,n={react:`${o}/react@${encodeURIComponent(t)}`,"react/":`${o}/react@${encodeURIComponent(t)}/`,"react-dom":`${o}/react-dom@${encodeURIComponent(r)}?external=react`,"react-dom/":`${o}/react-dom@${encodeURIComponent(r)}&external=react/`};for(let t of Object.keys(e))"react"!==t&&"react-dom"!==t&&(n[t]=u(t,e,"?external=react,react-dom"));return{imports:n}})(r.dependencies),y=((e,t)=>{let r=new Set(t.extraCSSImports);for(let t of Object.values(e))if(i(t.path))for(let[,,e]of t.code.matchAll(d))e.startsWith(".")||r.add(e);return[...r].map(e=>((e,t)=>{let r,n,[o,s]=(r=e.split("/"),[n=e.startsWith("@")?r.slice(0,2).join("/"):r[0],e.slice(n.length+1)]);return u(o,t,`/${s}`).replace(/\.scss$/,".css")})(e,t.dependencies))})(e,r),b=[n,...Object.values(e).filter(e=>{let t;return t=e.path,/\.s?css$/.test(t)}).map(e=>e.code)].filter(Boolean).join("\n\n");return`<!doctype html>
<html>
<head>
<meta charset="utf-8">
<script type="importmap">${h(JSON.stringify(g))}</script>
${y.map(e=>`<link rel="stylesheet" href="${e}">`).join("\n")}
<style>${b}</style>
</head>
<body>
<div id="root"></div>
<script type="module">
const ID = ${h(JSON.stringify(r.id))};
const ENTRY = ${JSON.stringify(a)};
const DEPENDENCY_LIST = ${h(JSON.stringify(Object.entries(g.imports).map(([e,t])=>`  ${e} -> ${t}`).join("\n")))};
const MODULES = ${h(JSON.stringify(f))};
${m}
</script>
</body>
</html>`}},52162(e,t,r){r.d(t,{b:()=>u});var n=r(62540),o=r(23392),s=r(34471),a=r(63696),i=r(94813);let l=/^\s*import\s+(['"])react-querybuilder\/dist\/query-builder\.s?css\1;?\s*$/m,d={"language-tsx":"/App.tsx","language-js":"/App.js","language-css":"/styles.css"},c=a.lazy(()=>Promise.all([r.e("24014"),r.e("36400"),r.e("79715")]).then(r.bind(r,63726)).then(e=>({default:e.LiveExample}))),u=({children:e,customSetup:t,rqbVersion:r=8})=>{let u="dark"===(0,s.G)().colorMode,{files:p,error:m}=a.useMemo(()=>(e=>{let t=a.Children.toArray(e),r=[];for(let e of t){let t,n=e?.props?.children?.props;if(!n||"string"!=typeof n.children)return{files:r,error:"Every child of SandpackRQB must be a code fence."};let o=!1,s=!1;if(n.metastring){let[e,...r]=n.metastring.split(" ");t="/"+e,o=r.includes("hidden"),s=r.includes("active")}else if(!(t=d[n.className??""]))return{files:r,error:`Code block is missing a filename: ${n.children}`};if(r.some(e=>e.path===t))return{files:r,error:`File ${t} was defined multiple times. Each file snippet should have a unique path name.`};r.push({path:t,code:n.children,lang:n.className?.replace("language-","")??"tsx",hidden:o,active:s})}return{files:r}})(e),[e]),h=a.useMemo(()=>({...t?.dependencies,"react-querybuilder":`^${r}`}),[t?.dependencies,r]),f=a.useMemo(()=>{let e=p.find(e=>i.ye.includes(e.path));return e&&l.test(e.code)?[]:["react-querybuilder/dist/query-builder.css"]},[p]);return(0,n.jsx)("div",{className:"sandpackrqb",children:(0,n.jsx)(o.A,{children:()=>(0,n.jsx)(a.Suspense,{fallback:null,children:(0,n.jsx)(c,{files:p,dependencies:h,extraCSSImports:f,parseError:m,dark:u})})})},`v${r}`)}},43023(e,t,r){r.d(t,{R:()=>a,x:()=>i});var n=r(63696);let o={},s=n.createContext(o);function a(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);