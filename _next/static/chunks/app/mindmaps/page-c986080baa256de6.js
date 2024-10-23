(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[230],{55531:function(e,t,s){Promise.resolve().then(s.bind(s,61591)),Promise.resolve().then(s.bind(s,67325))},61591:function(e,t,s){"use strict";s.d(t,{default:function(){return h}});var a,l=s(57437),r=s(2265),i=s(6033),n=s(79631),o=s(33145);let{useState:d,useEffect:c}=a||(a=s.t(r,2));function h(){let[e,t]=d(null),[s,a]=d(""),r="https://infolinked.github.io";if(console.log(r),!r)throw Error("Environment variable NEXT_PUBLIC_END_POINT is not set");let h=async()=>{try{fetch("".concat(r,"/api/mindmaps")).then(e=>e.json()).then(e=>t(e.data)).catch(e=>console.error("Error fetching the JSON data:",e))}catch(e){console.log(e)}};if(c(()=>{h()},[]),!e)return(0,l.jsxs)("div",{className:"flex items-center justify-center h-screen",children:[(0,l.jsx)(o.default,{src:"/static/images/logos/softwarezay.gif",alt:"no-data",width:40,height:40,className:"w-10 h-10 rounded-full max-w-none"}),(0,l.jsx)("p",{className:"pl-2 text-xl font-bold",children:"Loading..."})]});let x=e.filter(e=>e.title.toLowerCase().includes(s.toLowerCase()));return(0,l.jsxs)("div",{className:"px-2 mx-auto my-8 max-w-7xl",children:[(0,l.jsx)(n.Z,{caption:"Mindmaps"}),(0,l.jsxs)("div",{className:"relative mb-6 py-6",children:[(0,l.jsx)("input",{type:"text",value:s,onChange:e=>a(e.target.value),placeholder:"Search mindmaps...",className:"w-full p-4 pl-12 text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ease-in-out duration-200"}),(0,l.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none",children:(0,l.jsx)("svg",{className:"w-5 h-5 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-4.35-4.35M11 17a6 6 0 100-12 6 6 0 000 12z"})})})]}),(0,l.jsx)("ul",{className:"grid gap-8 p-2 sm:grid-cols-2 lg:grid-cols-3 xl:p-5",children:x.map((e,t)=>(0,l.jsx)(i.Z,{mindmap:e},t))})]})}},6033:function(e,t,s){"use strict";var a=s(57437);s(2265);var l=s(33145),r=s(27648);t.Z=e=>{let{mindmap:t}=e;return(0,a.jsx)("div",{className:" mx-auto max-w-md p-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-t-lg rounded-b-lg animate-border z-50",children:(0,a.jsx)("div",{className:"bg-white py-2 px-4 rounded-t-lg rounded-b-lg",children:(0,a.jsx)("div",{className:"flex justify-between items-center",children:(0,a.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,a.jsx)(r.default,{href:t.author.link,children:(0,a.jsx)(l.default,{src:"/static/images/profile/ato.jpeg",alt:"",width:50,height:50,className:"max-w-full h-auto rounded-full  bg-gray-100"})}),(0,a.jsxs)("div",{className:"flex-1",children:[(0,a.jsx)("p",{className:"text-sm font-bold text-gray-700 pb-2",children:(0,a.jsx)(r.default,{href:"/mindmap?of=".concat(null==t?void 0:t.slug),children:null==t?void 0:t.title})}),(0,a.jsx)("p",{className:"text-xs text-gray-500",children:(0,a.jsx)(r.default,{href:t.author.link,children:(null==t?void 0:t.description.slice(0,60))+"..."})}),(0,a.jsx)(r.default,{href:"/mindmap?of=".concat(null==t?void 0:t.slug),className:"text-xs text-indigo-500 hover:underline",children:"View more"})]})]})})})})}},67325:function(e,t,s){"use strict";var a=s(57437),l=s(27648),r=s(2265),i=s(33145);t.default=()=>{let[e,t]=(0,r.useState)(!1);return(0,a.jsxs)("nav",{className:"p-4 text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-md ",children:[(0,a.jsxs)("div",{className:"container flex items-center justify-between mx-auto",children:[(0,a.jsxs)(l.default,{href:"/",className:"flex items-center text-lg font-bold text-white",children:[(0,a.jsx)(i.default,{src:"/static/images/logos/softwarezay.png",alt:"no-data",width:40,height:40,className:"h-auto max-w-full p-1 mx-3 bg-gray-100 rounded-full"}),(0,a.jsx)("span",{className:"hidden md:block",children:"InfoLinked"})]}),(0,a.jsxs)("div",{className:"hidden space-x-4 md:flex",children:[(0,a.jsx)(l.default,{href:"/",className:"text-gray-300 hover:text-white",children:"Home"}),(0,a.jsx)(l.default,{href:"/mindmaps",className:"text-gray-300 hover:text-white",children:"Mindmaps"}),(0,a.jsx)(l.default,{href:"/products",className:"text-gray-300 hover:text-white",children:"Products"}),(0,a.jsx)(l.default,{href:"/blogs",className:"text-gray-300 hover:text-white",children:"Blogs"}),(0,a.jsx)(l.default,{href:"/services",className:"text-gray-300 hover:text-white",children:"Services"}),(0,a.jsx)(l.default,{href:"/contact",className:"text-gray-300 hover:text-white",children:"Contact"})]}),(0,a.jsx)("div",{className:"md:hidden",children:(0,a.jsx)("button",{onClick:()=>{t(!e)},className:"text-white focus:outline-none","aria-label":"Toggle Menu",children:(0,a.jsx)("svg",{className:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16m-7 6h7"})})})})]}),e&&(0,a.jsx)("div",{className:"md:hidden",children:(0,a.jsxs)("div",{className:"flex flex-col mt-2 space-y-2",children:[(0,a.jsx)(l.default,{href:"/",className:"block text-gray-300 hover:text-white",children:"Home"}),(0,a.jsx)(l.default,{href:"/mindmaps",className:"text-gray-300 hover:text-white",children:"Mindmaps"}),(0,a.jsx)(l.default,{href:"/products",className:"text-gray-300 hover:text-white",children:"Products"}),(0,a.jsx)(l.default,{href:"/blogs",className:"text-gray-300 hover:text-white",children:"Blogs"}),(0,a.jsx)(l.default,{href:"/about",className:"block text-gray-300 hover:text-white",children:"About"}),(0,a.jsx)(l.default,{href:"/services",className:"block text-gray-300 hover:text-white",children:"Services"}),(0,a.jsx)(l.default,{href:"/contact",className:"block text-gray-300 hover:text-white",children:"Contact"})]})})]})}},79631:function(e,t,s){"use strict";s.d(t,{Z:function(){return r}});var a=s(57437),l=s(2265);function r(e){let{caption:t}=e;return(0,a.jsx)(l.Suspense,{fallback:(0,a.jsx)("div",{children:"Loading..."}),children:(0,a.jsx)("div",{className:"flex justify-center text-2xl font-bold md:text-3xl",children:(0,a.jsx)("div",{className:"text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-500",children:(0,a.jsx)("h3",{className:"pt-3",children:t})})})})}}},function(e){e.O(0,[648,145,971,117,744],function(){return e(e.s=55531)}),_N_E=e.O()}]);