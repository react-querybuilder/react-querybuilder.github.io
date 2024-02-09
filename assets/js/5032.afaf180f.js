"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5032],{45032:(e,t,r)=>{r.r(t),r.d(t,{HTML5Backend:()=>C,NativeTypes:()=>n,getEmptyImage:()=>O});var n={};function s(e){let t=null;return()=>(null==t&&(t=e()),t)}r.r(n),r.d(n,{FILE:()=>a,HTML:()=>c,TEXT:()=>h,URL:()=>d});class i{enter(e){const t=this.entered.length;return this.entered=function(e,t){const r=new Set,n=e=>r.add(e);e.forEach(n),t.forEach(n);const s=[];return r.forEach((e=>s.push(e))),s}(this.entered.filter((t=>this.isNodeInDocument(t)&&(!t.contains||t.contains(e)))),[e]),0===t&&this.entered.length>0}leave(e){const t=this.entered.length;var r,n;return this.entered=(r=this.entered.filter(this.isNodeInDocument),n=e,r.filter((e=>e!==n))),t>0&&0===this.entered.length}reset(){this.entered=[]}constructor(e){this.entered=[],this.isNodeInDocument=e}}class o{initializeExposedProperties(){Object.keys(this.config.exposeProperties).forEach((e=>{Object.defineProperty(this.item,e,{configurable:!0,enumerable:!0,get:()=>(console.warn(`Browser doesn't allow reading "${e}" until the drop event.`),null)})}))}loadDataTransfer(e){if(e){const t={};Object.keys(this.config.exposeProperties).forEach((r=>{const n=this.config.exposeProperties[r];null!=n&&(t[r]={value:n(e,this.config.matchesTypes),configurable:!0,enumerable:!0})})),Object.defineProperties(this.item,t)}}canDrag(){return!0}beginDrag(){return this.item}isDragging(e,t){return t===e.getSourceId()}endDrag(){}constructor(e){this.config=e,this.item={},this.initializeExposedProperties()}}const a="__NATIVE_FILE__",d="__NATIVE_URL__",h="__NATIVE_TEXT__",c="__NATIVE_HTML__";function u(e,t,r){const n=t.reduce(((t,r)=>t||e.getData(r)),"");return null!=n?n:r}const g={[a]:{exposeProperties:{files:e=>Array.prototype.slice.call(e.files),items:e=>e.items,dataTransfer:e=>e},matchesTypes:["Files"]},[c]:{exposeProperties:{html:(e,t)=>u(e,t,""),dataTransfer:e=>e},matchesTypes:["Html","text/html"]},[d]:{exposeProperties:{urls:(e,t)=>u(e,t,"").split("\n"),dataTransfer:e=>e},matchesTypes:["Url","text/uri-list"]},[h]:{exposeProperties:{text:(e,t)=>u(e,t,""),dataTransfer:e=>e},matchesTypes:["Text","text/plain"]}};function l(e){if(!e)return null;const t=Array.prototype.slice.call(e.types||[]);return Object.keys(g).filter((e=>{const r=g[e];return!!(null==r?void 0:r.matchesTypes)&&r.matchesTypes.some((e=>t.indexOf(e)>-1))}))[0]||null}const v=s((()=>/firefox/i.test(navigator.userAgent))),p=s((()=>Boolean(window.safari)));class f{interpolate(e){const{xs:t,ys:r,c1s:n,c2s:s,c3s:i}=this;let o=t.length-1;if(e===t[o])return r[o];let a,d=0,h=i.length-1;for(;d<=h;){a=Math.floor(.5*(d+h));const n=t[a];if(n<e)d=a+1;else{if(!(n>e))return r[a];h=a-1}}o=Math.max(0,h);const c=e-t[o],u=c*c;return r[o]+n[o]*c+s[o]*u+i[o]*c*u}constructor(e,t){const{length:r}=e,n=[];for(let l=0;l<r;l++)n.push(l);n.sort(((t,r)=>e[t]<e[r]?-1:1));const s=[],i=[],o=[];let a,d;for(let l=0;l<r-1;l++)a=e[l+1]-e[l],d=t[l+1]-t[l],i.push(a),s.push(d),o.push(d/a);const h=[o[0]];for(let l=0;l<i.length-1;l++){const e=o[l],t=o[l+1];if(e*t<=0)h.push(0);else{a=i[l];const r=i[l+1],n=a+r;h.push(3*n/((n+r)/e+(n+a)/t))}}h.push(o[o.length-1]);const c=[],u=[];let g;for(let l=0;l<h.length-1;l++){g=o[l];const e=h[l],t=1/i[l],r=e+h[l+1]-g-g;c.push((g-e-r)*t),u.push(r*t*t)}this.xs=e,this.ys=t,this.c1s=h,this.c2s=c,this.c3s=u}}const m=1;function D(e){const t=e.nodeType===m?e:e.parentElement;if(!t)return null;const{top:r,left:n}=t.getBoundingClientRect();return{x:n,y:r}}function T(e){return{x:e.clientX,y:e.clientY}}function E(e,t,r,n,s){const i="IMG"===(o=t).nodeName&&(v()||!(null===(a=document.documentElement)||void 0===a?void 0:a.contains(o)));var o,a;const d=D(i?e:t),h={x:r.x-d.x,y:r.y-d.y},{offsetWidth:c,offsetHeight:u}=e,{anchorX:g,anchorY:l}=n,{dragPreviewWidth:m,dragPreviewHeight:T}=function(e,t,r,n){let s=e?t.width:r,i=e?t.height:n;return p()&&e&&(i/=window.devicePixelRatio,s/=window.devicePixelRatio),{dragPreviewWidth:s,dragPreviewHeight:i}}(i,t,c,u),{offsetX:E,offsetY:N}=s,I=0===N||N;return{x:0===E||E?E:new f([0,.5,1],[h.x,h.x/c*m,h.x+m-c]).interpolate(g),y:I?N:(()=>{let e=new f([0,.5,1],[h.y,h.y/u*T,h.y+T-u]).interpolate(l);return p()&&i&&(e+=(window.devicePixelRatio-1)*T),e})()}}class N{get window(){return this.globalContext?this.globalContext:"undefined"!=typeof window?window:void 0}get document(){var e;return(null===(e=this.globalContext)||void 0===e?void 0:e.document)?this.globalContext.document:this.window?this.window.document:void 0}get rootElement(){var e;return(null===(e=this.optionsArgs)||void 0===e?void 0:e.rootElement)||this.window}constructor(e,t){this.ownerDocument=null,this.globalContext=e,this.optionsArgs=t}}function I(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){I(e,t,r[t])}))}return e}class w{profile(){var e,t;return{sourcePreviewNodes:this.sourcePreviewNodes.size,sourcePreviewNodeOptions:this.sourcePreviewNodeOptions.size,sourceNodeOptions:this.sourceNodeOptions.size,sourceNodes:this.sourceNodes.size,dragStartSourceIds:(null===(e=this.dragStartSourceIds)||void 0===e?void 0:e.length)||0,dropTargetIds:this.dropTargetIds.length,dragEnterTargetIds:this.dragEnterTargetIds.length,dragOverTargetIds:(null===(t=this.dragOverTargetIds)||void 0===t?void 0:t.length)||0}}get window(){return this.options.window}get document(){return this.options.document}get rootElement(){return this.options.rootElement}setup(){const e=this.rootElement;if(void 0!==e){if(e.__isReactDndBackendSetUp)throw new Error("Cannot have two HTML5 backends at the same time.");e.__isReactDndBackendSetUp=!0,this.addEventListeners(e)}}teardown(){const e=this.rootElement;var t;void 0!==e&&(e.__isReactDndBackendSetUp=!1,this.removeEventListeners(this.rootElement),this.clearCurrentDragSourceNode(),this.asyncEndDragFrameId&&(null===(t=this.window)||void 0===t||t.cancelAnimationFrame(this.asyncEndDragFrameId)))}connectDragPreview(e,t,r){return this.sourcePreviewNodeOptions.set(e,r),this.sourcePreviewNodes.set(e,t),()=>{this.sourcePreviewNodes.delete(e),this.sourcePreviewNodeOptions.delete(e)}}connectDragSource(e,t,r){this.sourceNodes.set(e,t),this.sourceNodeOptions.set(e,r);const n=t=>this.handleDragStart(t,e),s=e=>this.handleSelectStart(e);return t.setAttribute("draggable","true"),t.addEventListener("dragstart",n),t.addEventListener("selectstart",s),()=>{this.sourceNodes.delete(e),this.sourceNodeOptions.delete(e),t.removeEventListener("dragstart",n),t.removeEventListener("selectstart",s),t.setAttribute("draggable","false")}}connectDropTarget(e,t){const r=t=>this.handleDragEnter(t,e),n=t=>this.handleDragOver(t,e),s=t=>this.handleDrop(t,e);return t.addEventListener("dragenter",r),t.addEventListener("dragover",n),t.addEventListener("drop",s),()=>{t.removeEventListener("dragenter",r),t.removeEventListener("dragover",n),t.removeEventListener("drop",s)}}addEventListeners(e){e.addEventListener&&(e.addEventListener("dragstart",this.handleTopDragStart),e.addEventListener("dragstart",this.handleTopDragStartCapture,!0),e.addEventListener("dragend",this.handleTopDragEndCapture,!0),e.addEventListener("dragenter",this.handleTopDragEnter),e.addEventListener("dragenter",this.handleTopDragEnterCapture,!0),e.addEventListener("dragleave",this.handleTopDragLeaveCapture,!0),e.addEventListener("dragover",this.handleTopDragOver),e.addEventListener("dragover",this.handleTopDragOverCapture,!0),e.addEventListener("drop",this.handleTopDrop),e.addEventListener("drop",this.handleTopDropCapture,!0))}removeEventListeners(e){e.removeEventListener&&(e.removeEventListener("dragstart",this.handleTopDragStart),e.removeEventListener("dragstart",this.handleTopDragStartCapture,!0),e.removeEventListener("dragend",this.handleTopDragEndCapture,!0),e.removeEventListener("dragenter",this.handleTopDragEnter),e.removeEventListener("dragenter",this.handleTopDragEnterCapture,!0),e.removeEventListener("dragleave",this.handleTopDragLeaveCapture,!0),e.removeEventListener("dragover",this.handleTopDragOver),e.removeEventListener("dragover",this.handleTopDragOverCapture,!0),e.removeEventListener("drop",this.handleTopDrop),e.removeEventListener("drop",this.handleTopDropCapture,!0))}getCurrentSourceNodeOptions(){const e=this.monitor.getSourceId(),t=this.sourceNodeOptions.get(e);return S({dropEffect:this.altKeyPressed?"copy":"move"},t||{})}getCurrentDropEffect(){return this.isDraggingNativeItem()?"copy":this.getCurrentSourceNodeOptions().dropEffect}getCurrentSourcePreviewNodeOptions(){const e=this.monitor.getSourceId();return S({anchorX:.5,anchorY:.5,captureDraggingState:!1},this.sourcePreviewNodeOptions.get(e)||{})}isDraggingNativeItem(){const e=this.monitor.getItemType();return Object.keys(n).some((t=>n[t]===e))}beginDragNativeItem(e,t){this.clearCurrentDragSourceNode(),this.currentNativeSource=function(e,t){const r=g[e];if(!r)throw new Error(`native type ${e} has no configuration`);const n=new o(r);return n.loadDataTransfer(t),n}(e,t),this.currentNativeHandle=this.registry.addSource(e,this.currentNativeSource),this.actions.beginDrag([this.currentNativeHandle])}setCurrentDragSourceNode(e){this.clearCurrentDragSourceNode(),this.currentDragSourceNode=e;this.mouseMoveTimeoutTimer=setTimeout((()=>{var e;return null===(e=this.rootElement)||void 0===e?void 0:e.addEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)}),1e3)}clearCurrentDragSourceNode(){if(this.currentDragSourceNode){var e;if(this.currentDragSourceNode=null,this.rootElement)null===(e=this.window)||void 0===e||e.clearTimeout(this.mouseMoveTimeoutTimer||void 0),this.rootElement.removeEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0);return this.mouseMoveTimeoutTimer=null,!0}return!1}handleDragStart(e,t){e.defaultPrevented||(this.dragStartSourceIds||(this.dragStartSourceIds=[]),this.dragStartSourceIds.unshift(t))}handleDragEnter(e,t){this.dragEnterTargetIds.unshift(t)}handleDragOver(e,t){null===this.dragOverTargetIds&&(this.dragOverTargetIds=[]),this.dragOverTargetIds.unshift(t)}handleDrop(e,t){this.dropTargetIds.unshift(t)}constructor(e,t,r){this.sourcePreviewNodes=new Map,this.sourcePreviewNodeOptions=new Map,this.sourceNodes=new Map,this.sourceNodeOptions=new Map,this.dragStartSourceIds=null,this.dropTargetIds=[],this.dragEnterTargetIds=[],this.currentNativeSource=null,this.currentNativeHandle=null,this.currentDragSourceNode=null,this.altKeyPressed=!1,this.mouseMoveTimeoutTimer=null,this.asyncEndDragFrameId=null,this.dragOverTargetIds=null,this.lastClientOffset=null,this.hoverRafId=null,this.getSourceClientOffset=e=>{const t=this.sourceNodes.get(e);return t&&D(t)||null},this.endDragNativeItem=()=>{this.isDraggingNativeItem()&&(this.actions.endDrag(),this.currentNativeHandle&&this.registry.removeSource(this.currentNativeHandle),this.currentNativeHandle=null,this.currentNativeSource=null)},this.isNodeInDocument=e=>Boolean(e&&this.document&&this.document.body&&this.document.body.contains(e)),this.endDragIfSourceWasRemovedFromDOM=()=>{const e=this.currentDragSourceNode;null==e||this.isNodeInDocument(e)||(this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover())},this.scheduleHover=e=>{null===this.hoverRafId&&"undefined"!=typeof requestAnimationFrame&&(this.hoverRafId=requestAnimationFrame((()=>{this.monitor.isDragging()&&this.actions.hover(e||[],{clientOffset:this.lastClientOffset}),this.hoverRafId=null})))},this.cancelHover=()=>{null!==this.hoverRafId&&"undefined"!=typeof cancelAnimationFrame&&(cancelAnimationFrame(this.hoverRafId),this.hoverRafId=null)},this.handleTopDragStartCapture=()=>{this.clearCurrentDragSourceNode(),this.dragStartSourceIds=[]},this.handleTopDragStart=e=>{if(e.defaultPrevented)return;const{dragStartSourceIds:t}=this;this.dragStartSourceIds=null;const r=T(e);this.monitor.isDragging()&&(this.actions.endDrag(),this.cancelHover()),this.actions.beginDrag(t||[],{publishSource:!1,getSourceClientOffset:this.getSourceClientOffset,clientOffset:r});const{dataTransfer:n}=e,s=l(n);if(this.monitor.isDragging()){if(n&&"function"==typeof n.setDragImage){const e=this.monitor.getSourceId(),t=this.sourceNodes.get(e),s=this.sourcePreviewNodes.get(e)||t;if(s){const{anchorX:e,anchorY:i,offsetX:o,offsetY:a}=this.getCurrentSourcePreviewNodeOptions(),d=E(t,s,r,{anchorX:e,anchorY:i},{offsetX:o,offsetY:a});n.setDragImage(s,d.x,d.y)}}try{null==n||n.setData("application/json",{})}catch(i){}this.setCurrentDragSourceNode(e.target);const{captureDraggingState:t}=this.getCurrentSourcePreviewNodeOptions();t?this.actions.publishDragSource():setTimeout((()=>this.actions.publishDragSource()),0)}else if(s)this.beginDragNativeItem(s);else{if(n&&!n.types&&(e.target&&!e.target.hasAttribute||!e.target.hasAttribute("draggable")))return;e.preventDefault()}},this.handleTopDragEndCapture=()=>{this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleTopDragEnterCapture=e=>{var t;(this.dragEnterTargetIds=[],this.isDraggingNativeItem())&&(null===(t=this.currentNativeSource)||void 0===t||t.loadDataTransfer(e.dataTransfer));if(!this.enterLeaveCounter.enter(e.target)||this.monitor.isDragging())return;const{dataTransfer:r}=e,n=l(r);n&&this.beginDragNativeItem(n,r)},this.handleTopDragEnter=e=>{const{dragEnterTargetIds:t}=this;if(this.dragEnterTargetIds=[],!this.monitor.isDragging())return;this.altKeyPressed=e.altKey,t.length>0&&this.actions.hover(t,{clientOffset:T(e)});t.some((e=>this.monitor.canDropOnTarget(e)))&&(e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect=this.getCurrentDropEffect()))},this.handleTopDragOverCapture=e=>{var t;(this.dragOverTargetIds=[],this.isDraggingNativeItem())&&(null===(t=this.currentNativeSource)||void 0===t||t.loadDataTransfer(e.dataTransfer))},this.handleTopDragOver=e=>{const{dragOverTargetIds:t}=this;if(this.dragOverTargetIds=[],!this.monitor.isDragging())return e.preventDefault(),void(e.dataTransfer&&(e.dataTransfer.dropEffect="none"));this.altKeyPressed=e.altKey,this.lastClientOffset=T(e),this.scheduleHover(t);(t||[]).some((e=>this.monitor.canDropOnTarget(e)))?(e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect=this.getCurrentDropEffect())):this.isDraggingNativeItem()?e.preventDefault():(e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="none"))},this.handleTopDragLeaveCapture=e=>{this.isDraggingNativeItem()&&e.preventDefault();this.enterLeaveCounter.leave(e.target)&&(this.isDraggingNativeItem()&&setTimeout((()=>this.endDragNativeItem()),0),this.cancelHover())},this.handleTopDropCapture=e=>{var t;(this.dropTargetIds=[],this.isDraggingNativeItem())?(e.preventDefault(),null===(t=this.currentNativeSource)||void 0===t||t.loadDataTransfer(e.dataTransfer)):l(e.dataTransfer)&&e.preventDefault();this.enterLeaveCounter.reset()},this.handleTopDrop=e=>{const{dropTargetIds:t}=this;this.dropTargetIds=[],this.actions.hover(t,{clientOffset:T(e)}),this.actions.drop({dropEffect:this.getCurrentDropEffect()}),this.isDraggingNativeItem()?this.endDragNativeItem():this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleSelectStart=e=>{const t=e.target;"function"==typeof t.dragDrop&&("INPUT"===t.tagName||"SELECT"===t.tagName||"TEXTAREA"===t.tagName||t.isContentEditable||(e.preventDefault(),t.dragDrop()))},this.options=new N(t,r),this.actions=e.getActions(),this.monitor=e.getMonitor(),this.registry=e.getRegistry(),this.enterLeaveCounter=new i(this.isNodeInDocument)}}let y;function O(){return y||(y=new Image,y.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),y}const C=function(e,t,r){return new w(e,t,r)}}}]);