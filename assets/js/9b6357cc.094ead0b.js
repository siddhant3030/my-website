"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9143],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>f});var n=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=s(o),d=i,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||l;return o?n.createElement(f,a(a({ref:t},p),{},{components:o})):n.createElement(f,a({ref:t},p))}));function f(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=o.length,a=new Array(l);a[0]=d;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[u]="string"==typeof e?e:i,a[1]=r;for(var s=2;s<l;s++)a[s]=o[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},5526:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>s});var n=o(7462),i=(o(7294),o(3905));const l={},a=void 0,r={unversionedId:"Glific Documentation/Flows/Flow Actions/How to integrate GCS in Glific to store media files received in chat flow",id:"Glific Documentation/Flows/Flow Actions/How to integrate GCS in Glific to store media files received in chat flow",title:"How to integrate GCS in Glific to store media files received in chat flow",description:"Go to your Google Cloud storage GCS account (https://console.cloud.google.com/apis/credentials/serviceaccountkey) to generate project API keys.",source:"@site/docs/Glific Documentation/3. Flows/1. Flow Actions/04. How to integrate GCS in Glific to store media files received in chat flow.md",sourceDirName:"Glific Documentation/3. Flows/1. Flow Actions",slug:"/Glific Documentation/Flows/Flow Actions/How to integrate GCS in Glific to store media files received in chat flow",permalink:"/my-website/docs/Glific Documentation/Flows/Flow Actions/How to integrate GCS in Glific to store media files received in chat flow",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Glific Documentation/3. Flows/1. Flow Actions/04. How to integrate GCS in Glific to store media files received in chat flow.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Send media files in messages",permalink:"/my-website/docs/Glific Documentation/Flows/Flow Actions/Send media files in messages"},next:{title:"How to use the Split by flow result question type",permalink:"/my-website/docs/Glific Documentation/Flows/Flow Actions/How to use the Split by flow result question type"}},c={},s=[{value:"Save the JSON in Glific to integrate",id:"save-the-json-in-glific-to-integrate",level:2}],p={toc:s};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Go to your Google Cloud storage GCS account (",(0,i.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/apis/credentials/serviceaccountkey"},"https://console.cloud.google.com/apis/credentials/serviceaccountkey"),") to generate project API keys."),(0,i.kt)("p",null,"If you don","'","t have an account in GCS please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/quickstart-console"},"Create an account in Google Cloud Storage (GCS)")," to set up a new account in Google Cloud storage GCS?."),(0,i.kt)("p",null,"Below screens may get change by Google. Refer below article from google for more details. ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/creating-managing-service-account-keys"},"https://cloud.google.com/iam/docs/creating-managing-service-account-keys")),(0,i.kt)("p",null,"1 . At top Bar enter Service account. Select ",(0,i.kt)("inlineCode",{parentName:"p"},"Service account")," from the drop down."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/L31976empv2lC3DmiY8TYZtt.png",alt:null})),(0,i.kt)("p",null,"2 .  Click on ",(0,i.kt)("inlineCode",{parentName:"p"},"+Create Service account")," link from top bar."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/ZJlHGYApGSEhRYbRHjxys6wB.png",alt:null})),(0,i.kt)("p",null,"3 . Enter the details."),(0,i.kt)("p",null,"a) Serive account name"),(0,i.kt)("p",null,"b)Service account id auto filled."),(0,i.kt)("p",null,"c) Description."),(0,i.kt)("p",null,"4 . Click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Done"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/1dX5IUz1CvtFuvOLjawxOSSa.png",alt:null})),(0,i.kt)("p",null,"5 . Click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Add Key")," button."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/nT0jtqdOXJ2w1mOnQIURmHjx.png",alt:null})),(0,i.kt)("p",null,"6 . Select ",(0,i.kt)("inlineCode",{parentName:"p"},"json")," and click on ",(0,i.kt)("inlineCode",{parentName:"p"},"create")," button."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/MHU9lLLzjKEDjAUn8DzkeR7j.png",alt:null})),(0,i.kt)("h2",{id:"save-the-json-in-glific-to-integrate"},"Save the JSON in Glific to integrate"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Save the JSON file downloaded and copy its content."),(0,i.kt)("li",{parentName:"ol"},"Login to your Glific account. Go to the ",(0,i.kt)("inlineCode",{parentName:"li"},"setting")," option in Glific and click on ",(0,i.kt)("strong",{parentName:"li"},"Google Cloud Storage"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/9EbxpqrkAndb4Y1FNrX4mTPP.png",alt:null})),(0,i.kt)("p",null,"7 . Click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"is_active")," check."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/9tYZQreHMqpZAMZLhJZSu4Yt.png",alt:null})),(0,i.kt)("p",null,"8 . Fill in the details from the downloaded JSON file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"1. Paste the copied JSON content inside Goth Credentials input.\n1. Project Email as `client_email` in the JSON file.\n1. **_&quot;client_email&quot;: &quot;xxx@xxx.iam.gserviceaccount.com&quot;,_**  \n1. Bucket as the **bucket name** of the newly created bucket in the GCS dashboard\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/e1k39164CQpI_tfxPmVY4UVT.png",alt:null})),(0,i.kt)("p",null,"9 . Click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Save")," button"),(0,i.kt)("p",null,"10 . Once Credentials are set up, all media files will be synced in a bucket inside the uploads directory."),(0,i.kt)("p",null,"11 . Now all the media files you will receive from the beneficiary contact (Via whats APP), will save in the Google cloud bucket in ",(0,i.kt)("strong",{parentName:"p"},"uploads")," folder."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/VeRoZIxWXfpod7xOJkcGFfXi.png",alt:null})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/my7VMmg44qbcHU6KIENU-LWz.png",alt:null})))}u.isMDXComponent=!0}}]);