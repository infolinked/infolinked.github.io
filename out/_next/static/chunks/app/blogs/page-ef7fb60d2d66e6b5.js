(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[606],{74622:function(e,s,t){Promise.resolve().then(t.bind(t,52229)),Promise.resolve().then(t.bind(t,37198))},52229:function(e,s,t){"use strict";t.d(s,{default:function(){return h}});var a=t(57437),l=t(2265),c=t.t(l,2),r=t(27648),i=t(33145),n=e=>{let{blog:s}=e;return(0,a.jsxs)("article",{className:"bg-white dark:bg-gray-900 dark:text-white mb-4 break-inside break-inside-avoid p-6 rounded-xl bg-white flex flex-col bg-clip-border max-w-md",children:[(0,a.jsx)("div",{className:"flex items-center justify-between",children:(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)("a",{className:"inline-block mr-4",href:"topics/".concat(s.slug),children:(0,a.jsx)(i.default,{src:s.author.image,alt:"",width:60,height:60,className:"max-w-full h-auto rounded-full  bg-gray-100"})}),(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("a",{className:"inline-block text-lg font-bold mr-2",href:"#",children:s.author.name}),(0,a.jsx)("span",{className:"text-slate-500",children:s.author.position})]}),(0,a.jsx)("div",{className:"flex items-center",children:(0,a.jsx)("a",{className:"inline-block text-slate-500 text-xs mr-2",href:"#",children:s.date})})]})]})}),(0,a.jsx)("div",{className:"grid grid-cols-1 gap-1 content-stretch py-4",children:s.images.map((e,t)=>(0,a.jsx)("a",{className:"flex",href:"topics/".concat(s.slug),children:(0,a.jsx)(i.default,{src:"".concat(s.site).concat(s.slug,"/").concat(e),alt:"",width:250,height:250,className:"object-cover object-cover w-full"})},t))}),(0,a.jsx)("h2",{className:"text-3xl font-extrabold",children:(0,a.jsx)("a",{href:"topics/".concat(s.slug),className:"cursor-pointer",children:s.title})}),s.description&&(0,a.jsx)("div",{className:"py-4",children:(0,a.jsx)("p",{children:s.description})}),(0,a.jsx)("div",{className:"pt-6",children:(0,a.jsx)("div",{className:"w-full",children:(0,a.jsx)(r.default,{href:"/topics/${blog.slug}",target:"_blank",className:"dark:bg-gray-700 dark:text-white py-3 px-4 w-full block bg-slate-100 text-center rounded-lg font-medium hover:bg-slate-200 transition ease-in-out delay-75 cursor-pointer",children:"View more"})})})]})};let{useState:o,useEffect:d}=c;function h(){let[e,s]=o(null);return(d(()=>{fetch("https://raw.githubusercontent.com/aungthuoo/apis/main/blogs/index.json").then(e=>e.json()).then(e=>s(e)).catch(e=>console.error("Error fetching the JSON data:",e))},[]),e)?(0,a.jsxs)("div",{className:"px-2 mx-auto my-8 max-w-7xl",children:[(0,a.jsx)("div",{className:"flex justify-center text-2xl font-bold md:text-3xl",children:"Blogs"}),(0,a.jsx)("ul",{className:"grid gap-8 p-2 sm:grid-cols-2 lg:grid-cols-3 xl:p-5",children:e.slice(0,9).map((e,s)=>(0,a.jsx)(n,{blog:e},s))}),(0,a.jsx)("div",{className:"max-w-xl mx-auto overflow-hidden rounded-lg shadow-xs",children:(0,a.jsx)("div",{className:"flex justify-center max-w-xl ",children:(0,a.jsx)("a",{href:"/topics",className:"block w-full px-4 py-3 text-center transition ease-in-out delay-75 rounded-lg cursor-pointer bg-slate-100 hover:bg-slate-200",children:"Show more topics"})})})]}):(0,a.jsxs)("div",{className:"flex items-center justify-center h-screen",children:[(0,a.jsx)("img",{className:"w-10 h-10 rounded-full max-w-none",src:"/images/logos/softwarezay.gif"}),(0,a.jsx)("p",{className:"pl-2 text-xl font-bold",children:"Loading..."})]})}},37198:function(e,s,t){"use strict";var a=t(57437),l=t(27648),c=t(2265),r=t(53977),i=t(99376),n=t(33145);s.default=()=>{var e;let[s,t]=(0,c.useState)(!1),o=(0,i.useSearchParams)(),[d,h]=(0,c.useState)(null!==(e=o.get("of"))&&void 0!==e?e:""),x=(0,r.TE)();return(0,a.jsxs)("nav",{className:"bg-gray-800 p-4",children:[(0,a.jsxs)("div",{className:"container mx-auto flex justify-between items-center",children:[(0,a.jsxs)(l.default,{href:"/",className:"flex items-center text-white text-lg font-bold",children:[(0,a.jsx)(n.default,{src:"/static/images/logos/softwarezay.png",alt:"no-data",width:40,height:40,className:"mx-3 max-w-full h-auto rounded-full  bg-gray-100 p-1"}),(0,a.jsx)("span",{className:"hidden md:block",children:"InfoLinked"})]}),(0,a.jsxs)("div",{className:"flex flex-grow max-w-3xl space-x-1 px-3",children:[(0,a.jsx)("input",{value:d,type:"Search",placeholder:"Search Topics",onChange:e=>h(e.target.value),onKeyDown:e=>{"Enter"===e.key&&x.push("/topics?of=".concat(d))},className:"p-2"}),(0,a.jsx)("button",{onClick:()=>x.push("/topics?of=".concat(d)),className:"text-white px-2",children:"Search"})]}),(0,a.jsxs)("div",{className:"hidden md:flex space-x-4",children:[(0,a.jsx)(l.default,{href:"/products",className:"text-gray-300 hover:text-white",children:"Home"}),(0,a.jsx)(l.default,{href:"/blogs",className:"text-gray-300 hover:text-white",children:"About"}),(0,a.jsx)(l.default,{href:"/services",className:"text-gray-300 hover:text-white",children:"Services"}),(0,a.jsx)(l.default,{href:"/contact",className:"text-gray-300 hover:text-white",children:"Contact"})]}),(0,a.jsx)("div",{className:"md:hidden",children:(0,a.jsx)("button",{onClick:()=>{t(!s)},className:"text-white focus:outline-none","aria-label":"Toggle Menu",children:(0,a.jsx)("svg",{className:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16m-7 6h7"})})})})]}),s&&(0,a.jsx)("div",{className:"md:hidden",children:(0,a.jsxs)("div",{className:"flex flex-col space-y-2 mt-2",children:[(0,a.jsx)(l.default,{href:"/",className:"block text-gray-300 hover:text-white",children:"Home"}),(0,a.jsx)(l.default,{href:"/about",className:"block text-gray-300 hover:text-white",children:"About"}),(0,a.jsx)(l.default,{href:"/services",className:"block text-gray-300 hover:text-white",children:"Services"}),(0,a.jsx)(l.default,{href:"/contact",className:"block text-gray-300 hover:text-white",children:"Contact"})]})})]})}}},function(e){e.O(0,[359,971,117,744],function(){return e(e.s=74622)}),_N_E=e.O()}]);