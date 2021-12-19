"use strict";(self.webpackChunkreact_querybuilder_github_io=self.webpackChunkreact_querybuilder_github_io||[]).push([[757],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1514:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return m}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),s=["components"],a={title:"Common mistakes",description:"How to resolve some frequently-reported issues",hide_table_of_contents:!0},u=void 0,c={unversionedId:"tips/common-mistakes",id:"tips/common-mistakes",title:"Common mistakes",description:"How to resolve some frequently-reported issues",source:"@site/docs/tips/common-mistakes.mdx",sourceDirName:"tips",slug:"/tips/common-mistakes",permalink:"/docs/tips/common-mistakes",editUrl:"https://github.com/react-querybuilder/react-querybuilder.github.io/edit/main/docs/tips/common-mistakes.mdx",tags:[],version:"current",frontMatter:{title:"Common mistakes",description:"How to resolve some frequently-reported issues",hide_table_of_contents:!0},sidebar:"mySidebar",previous:{title:"Adding and removing query properties",permalink:"/docs/tips/adding-removing-query-properties"},next:{title:"Compatibility packages",permalink:"/docs/compat"}},l=[{value:"Custom component as closure",id:"custom-component-as-closure",children:[],level:2}],p={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"custom-component-as-closure"},"Custom component as closure"),(0,i.kt)("p",null,"A common mistake when defining custom components for React Query Builder is to define them within the body of another function component, like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},"const App = () => {\n  // Other stuff ...\n\n  // highlight-start\n  const CustomValueEditor = (props) => {\n    // Custom logic here ...\n    return <input />;\n  };\n  // highlight-end\n\n  return (\n    <QueryBuilder\n      fields={fields}\n      query={query}\n      handleOnChange={(q) => setQuery(q)}\n      controlElements={{\n        valueEditor: CustomValueEditor,\n      }}\n    />\n  );\n};\n")),(0,i.kt)("p",null,"This is wrong and can lead to undesirable behavior, such as the value editor losing focus after each keystroke. This happens because the ",(0,i.kt)("inlineCode",{parentName:"p"},"CustomValueEditor")," component is being redefined each time the ",(0,i.kt)("inlineCode",{parentName:"p"},"App")," component renders. Fortunately, the fix is very simple: move the custom component declaration outside of the other function component (it can still be in the same file, just not within the function body):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},"// highlight-start\nconst CustomValueEditor = (props) => {\n  // Custom logic here ...\n  return <input />;\n};\n// highlight-end\n\nconst App = () => {\n  // Other stuff ...\n\n  return (\n    <QueryBuilder\n      fields={fields}\n      query={query}\n      handleOnChange={(q) => setQuery(q)}\n      controlElements={{\n        valueEditor: CustomValueEditor,\n      }}\n    />\n  );\n};\n")))}m.isMDXComponent=!0}}]);