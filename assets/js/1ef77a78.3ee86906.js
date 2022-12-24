"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7757],{11067:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var r=n(83117),o=(n(67294),n(3905));const i={title:"Common mistakes",description:"How to resolve some frequently-reported issues",hide_table_of_contents:!0},s=void 0,a={unversionedId:"tips/common-mistakes",id:"tips/common-mistakes",title:"Common mistakes",description:"How to resolve some frequently-reported issues",source:"@site/docs/tips/common-mistakes.mdx",sourceDirName:"tips",slug:"/tips/common-mistakes",permalink:"/docs/next/tips/common-mistakes",draft:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/docs/tips/common-mistakes.mdx",tags:[],version:"current",frontMatter:{title:"Common mistakes",description:"How to resolve some frequently-reported issues",hide_table_of_contents:!0},sidebar:"mySidebar",previous:{title:"Adding and removing query properties",permalink:"/docs/next/tips/adding-removing-query-properties"},next:{title:"Compatibility packages",permalink:"/docs/next/compat"}},l={},p=[{value:"Custom component as closure",id:"custom-component-as-closure",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"custom-component-as-closure"},"Custom component as closure"),(0,o.kt)("p",null,"When defining custom components for React Query Builder, ",(0,o.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/learn/your-first-component#nesting-and-organizing-components"},"do not define them within the body of another function component")," like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.jsx"',title:'"App.jsx"'},"const App = () => {\n  // Other stuff ...\n\n  // highlight-start\n  const CustomValueEditor = props => {\n    // Custom logic here ...\n    return <input />;\n  };\n  // highlight-end\n\n  return (\n    <QueryBuilder\n      fields={fields}\n      query={query}\n      handleOnChange={q => setQuery(q)}\n      controlElements={{\n        valueEditor: CustomValueEditor,\n      }}\n    />\n  );\n};\n")),(0,o.kt)("p",null,"This will almost certainly lead to undesirable behavior such as the value editor losing focus after each keystroke. This happens because the ",(0,o.kt)("inlineCode",{parentName:"p"},"CustomValueEditor")," component is being redefined each time the ",(0,o.kt)("inlineCode",{parentName:"p"},"App")," component renders. To fix the problem, move the custom component declaration outside of the other function component (it can still be in the same file, just not within the function body):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.jsx"',title:'"App.jsx"'},"// highlight-start\nconst CustomValueEditor = props => {\n  // Custom logic here ...\n  return <input />;\n};\n// highlight-end\n\nconst App = () => {\n  // Other stuff ...\n\n  return (\n    <QueryBuilder\n      fields={fields}\n      query={query}\n      handleOnChange={q => setQuery(q)}\n      controlElements={{\n        valueEditor: CustomValueEditor,\n      }}\n    />\n  );\n};\n")),(0,o.kt)("p",null,"A similar mistake that leads to the same problems is declaring arrow functions that render components inside the JSX syntax. In the code below, ",(0,o.kt)("inlineCode",{parentName:"p"},"CustomValueEditor")," is correctly defined outside the body of ",(0,o.kt)("inlineCode",{parentName:"p"},"App"),", but an arrow function that ",(0,o.kt)("em",{parentName:"p"},"renders")," ",(0,o.kt)("inlineCode",{parentName:"p"},"CustomValueEditor")," is assigned to ",(0,o.kt)("inlineCode",{parentName:"p"},"valueEditor")," instead of the ",(0,o.kt)("inlineCode",{parentName:"p"},"CustomValueEditor")," component itself. This causes a new function component to be created on every render."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.jsx"',title:'"App.jsx"'},"const CustomValueEditor = props => {\n  // Custom logic here ...\n  return <input />;\n};\n\nconst App = () => {\n  // Other stuff ...\n\n  return (\n    <QueryBuilder\n      fields={fields}\n      query={query}\n      handleOnChange={q => setQuery(q)}\n      controlElements={{\n        // highlight-start\n        // Don't do this:\n        valueEditor: props => <CustomValueEditor {...props} />,\n        // Do this instead:\n        // valueEditor: CustomValueEditor,\n        // highlight-end\n      }}\n    />\n  );\n};\n")))}c.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);