"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9265],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),g=r,m=p["".concat(c,".").concat(g)]||p[g]||f[g]||o;return n?i.createElement(m,a(a({ref:t},u),{},{components:n})):i.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7171:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=n(7462),r=(n(7294),n(3905));const o={},a=void 0,l={unversionedId:"Glific Documentation/Integrations/Setting up GCS in Glific",id:"Glific Documentation/Integrations/Setting up GCS in Glific",title:"Setting up GCS in Glific",description:"Currently, Glific is using Google Cloud Storage (GCS) for various purposes including as a place to store data for reporting  via BigQuery   as well as to store media files.",source:"@site/docs/Glific Documentation/4. Integrations/01. Setting up GCS in Glific.md",sourceDirName:"Glific Documentation/4. Integrations",slug:"/Glific Documentation/Integrations/Setting up GCS in Glific",permalink:"/my-website/docs/Glific Documentation/Integrations/Setting up GCS in Glific",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Glific Documentation/4. Integrations/01. Setting up GCS in Glific.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Flows not working - Troubleshoot checklist",permalink:"/my-website/docs/Glific Documentation/Flows/Flow Troubleshooting/Flows not working - Troubleshoot checklist"},next:{title:"BigQuery Setup and link with Glific",permalink:"/my-website/docs/Glific Documentation/Integrations/BigQuery Setup and link with Glific"}},c={},s=[],u={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Currently, Glific is using Google Cloud Storage (GCS) for various purposes including as a place to store data for reporting  via BigQuery   as well as to store media files."),(0,r.kt)("p",null,"You can use media file storage for both:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To save the files received from contacts in the user responses."),(0,r.kt)("li",{parentName:"ul"},"To send the saved files to contacts in a chat flow.")),(0,r.kt)("p",null,"Below is the step by step flow to setup GCS in Glific."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://glific.slab.com/public/posts/hqdfwqos"},"Create an account in Google Cloud Storage (GCS)."),"  "),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://glific.slab.com/public/5n2rzdv6"},"Uploading files in GCS and using them within flows in Glific."))),(0,r.kt)("p",null,"or"),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://glific.slab.com/public/ol6876gq"},"Integrate GCS in Glific to store media files received in chat flow."))),(0,r.kt)("p",null,"Refer this ",(0,r.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/1kzwulj1kscMTFqqsj41jrgQpUu5FcPj-/view?usp=sharing"},"video")," for more details."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"GCS pricing details")," - ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/pricing"},"https://cloud.google.com/storage/pricing")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/quickstart-console"},"Google help docs")))}p.isMDXComponent=!0}}]);