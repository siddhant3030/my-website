"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8366],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>f});var n=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(o),d=i,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return o?n.createElement(f,a(a({ref:t},p),{},{components:o})):n.createElement(f,a({ref:t},p))}));function f(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,a=new Array(r);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<r;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},9599:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=o(7462),i=(o(7294),o(3905));const r={},a=void 0,l={unversionedId:"Glific Documentation/Flows/Flow Actions/How to use the Has Media category in Flow editor",id:"Glific Documentation/Flows/Flow Actions/How to use the Has Media category in Flow editor",title:"How to use the Has Media category in Flow editor",description:"You can use Has Media in your flow editor to receive and store media files in Glific. You can also receive the caption of the media file from the flow.",source:"@site/docs/Glific Documentation/3. Flows/1. Flow Actions/08. How to use the Has Media category in Flow editor.md",sourceDirName:"Glific Documentation/3. Flows/1. Flow Actions",slug:"/Glific Documentation/Flows/Flow Actions/How to use the Has Media category in Flow editor",permalink:"/my-website/docs/Glific Documentation/Flows/Flow Actions/How to use the Has Media category in Flow editor",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Glific Documentation/3. Flows/1. Flow Actions/08. How to use the Has Media category in Flow editor.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How to use the Has location Category in Flow editor",permalink:"/my-website/docs/Glific Documentation/Flows/Flow Actions/How to use the Has location Category in Flow editor"},next:{title:"Send message to a staff member",permalink:"/my-website/docs/Glific Documentation/Flows/Flow Actions/Send message to a staff member"}},s={},c=[],p={toc:c};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"Has Media")," in your flow editor to receive and store media files in Glific. You can also receive the caption of the media file from the flow."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/kv0wV7sHxtBYvtbhBViwJXzn.png",alt:null})),(0,i.kt)("p",null,"Create a variable to store the media file received from the contact. For example ",(0,i.kt)("inlineCode",{parentName:"p"},"picture")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/A9zKfu1Qb0fblo0WxWQV1cKo.png",alt:null})),(0,i.kt)("p",null,"Now you can save or use the media file URL received and its caption."),(0,i.kt)("p",null,"In this example, the syntax will be."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"for media file URL ",(0,i.kt)("inlineCode",{parentName:"li"},"@results.picture.url")),(0,i.kt)("li",{parentName:"ul"},"for media file caption ",(0,i.kt)("inlineCode",{parentName:"li"},"@results.picture.caption"))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/CxkMpXQOp7hSDHtGSMFBvHc9.png",alt:null})),(0,i.kt)("p",null,"It will be shown in the chat window like the below example."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/YDshQ8YD0yb6i5xmF1gMBiPK.png",alt:null})))}u.isMDXComponent=!0}}]);