import v,{useState as u}from"react";import k from"react-dom";import{Link as S,BrowserRouter as R,Routes as P,Route as d}from"react-router-dom";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function l(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=l(s);fetch(s.href,n)}})();var b={exports:{}},g={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C=v,L=Symbol.for("react.element"),E=Symbol.for("react.fragment"),D=Object.prototype.hasOwnProperty,W=C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,A={key:!0,ref:!0,__self:!0,__source:!0};function y(a,t,l){var o,s={},n=null,i=null;l!==void 0&&(n=""+l),t.key!==void 0&&(n=""+t.key),t.ref!==void 0&&(i=t.ref);for(o in t)D.call(t,o)&&!A.hasOwnProperty(o)&&(s[o]=t[o]);if(a&&a.defaultProps)for(o in t=a.defaultProps,t)s[o]===void 0&&(s[o]=t[o]);return{$$typeof:L,type:a,key:n,ref:i,props:s,_owner:W.current}}g.Fragment=E;g.jsx=y;g.jsxs=y;b.exports=g;var e=b.exports,j={},f=k;j.createRoot=f.createRoot,j.hydrateRoot=f.hydrateRoot;const c="/assets/zacklogo-BVREQZm0.png",w="/assets/profile_image1-CYeB8Kn1.jpg",h="/assets/item-1-C-OFUFKs.jpg",x="/assets/item-2-BDBoOlLn.jpg",p="/assets/item-3-kuouXvRc.jpg";function m(){return e.jsxs("footer",{children:[e.jsxs("div",{className:"top",children:[e.jsxs("div",{className:"logo",children:[e.jsx("img",{src:c}),e.jsx("a",{href:"/",children:"ZackProg"})]}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("a",{href:"/",children:"Home"})}),e.jsx("li",{children:e.jsx("a",{href:"blog",children:"Blog"})}),e.jsx("li",{children:e.jsx("a",{href:"contact",children:"Contact"})}),e.jsx("li",{children:e.jsx("a",{href:"https://github.com/zack97",children:"Github"})})]}),e.jsxs("div",{className:"social-links",children:[e.jsx("a",{href:"#",children:e.jsx("i",{className:"bx bxl-facebook"})}),e.jsx("a",{href:"#",children:e.jsx("i",{className:"bx bxl-instagram"})}),e.jsx("a",{href:"#",children:e.jsx("i",{className:"bx bxl-twitter"})}),e.jsx("a",{href:"https://www.linkedin.com/in/zacharie3/",children:e.jsx("i",{className:"bx bxl-linkedin-square"})})]})]}),e.jsx("div",{className:"separator1"}),e.jsx("div",{className:"bottom",children:e.jsx("h5",{children:"© ZackProg 2024 All rights reserved "})})]})}const B=()=>{const[a,t]=u(!1),[l,o]=u(!1),s=()=>{t(!a)},n=[{img:h,title:"Ecommerce Website with PHP Laravel",year:"2024",tech:"PHP, Laravel",description:"An ecommerce platform developed using PHP and Laravel, featuring product management, shopping cart, and secure payment integration."},{img:x,title:"Dashboard Website with React",year:"2024",tech:"React",description:"A dynamic dashboard application built with React, offering real-time data visualization and interactive user interfaces."},{img:p,title:"Job Work Searching with React",year:"2024",tech:"React",description:"A job search application using React that allows users to find and apply for job listings with filters and user authentication."}],i=l?n:n.slice(0,5);return e.jsxs(e.Fragment,{children:[e.jsxs("nav",{children:[e.jsxs("div",{className:"logo",children:[e.jsx("img",{src:c,alt:"Logo"}),e.jsx("a",{href:"/",children:"ZackProg"})]}),e.jsxs("div",{className:"nav-links",children:[e.jsx("a",{className:"selected",href:"/",children:"Home"}),e.jsx("a",{href:"/works",children:"Works"}),e.jsx("a",{href:"/single-work",children:"Single Work"}),e.jsx("a",{href:"/blog",children:"Blog"}),e.jsx("a",{href:"/contact",children:"Contact"})]})]}),e.jsxs("div",{className:"main",children:[e.jsxs("div",{className:"info",children:[e.jsxs("h2",{children:["Hello, I'm Zacharie, ",e.jsx("br",{}),"Full-Stack Developer | Problem Solver"]}),e.jsx("div",{className:`profile-text ${a?"expanded":""}`,children:e.jsx("p",{children:"I am a passionate Full-Stack Developer currently preparing for my final year in Bachelor of Computer Management at EPHEC Belgium, starting September 2024. I recently completed intensive training at BeCode Bootcamp, gaining expertise in JavaScript, React, and Node.js. This experience enhanced my ability to deliver high-quality, dynamic applications. I excel in both front-end and back-end development, creating user-centric solutions. Committed to continuous learning, I stay updated with industry trends and enjoy contributing to open-source projects."})}),e.jsx("button",{className:"button",onClick:s,children:a?"Show Less":"Read More"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("a",{href:"/MY_WEBDEVELOPER_CV_ZACHARIE.pdf",download:"MY_WEBDEVELOPER_CV_ZACHARIE.pdf",children:e.jsx("button",{children:"Download Resume"})})]}),e.jsx("img",{src:w,alt:"Profile"})]}),e.jsxs("div",{className:"skills",id:"skills",children:[e.jsx("h5",{children:"My Skills"}),e.jsx("h3",{children:"My Expertise"}),e.jsxs("div",{className:"skill-items",children:[e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"icon",children:e.jsx("i",{className:"bx bx-directions"})}),e.jsx("h4",{children:"Full-Stack Development"}),e.jsx("p",{children:"Proficient in both front-end and back-end technologies, including JavaScript, React, Node.js, Java, PHP, Laravel, and databases, enabling the creation of complete web applications from start to finish."})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"icon",children:e.jsx("i",{className:"bx bx-bookmark-heart"})}),e.jsx("h4",{children:"API Development & Integration"}),e.jsx("p",{children:"Skilled in designing and implementing RESTful APIs, as well as integrating third-party services to enhance application functionality and connectivity."})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"icon",children:e.jsx("i",{className:"bx bxl-figma"})}),e.jsx("h4",{children:"Responsive Web Design"}),e.jsx("p",{children:"Expert in crafting responsive and adaptive web designs using HTML, CSS, and frameworks like Bootstrap, ensuring a seamless experience across devices and screen sizes."})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"icon",children:e.jsx("i",{className:"bx bx-code-alt"})}),e.jsx("h4",{children:"Database Management"}),e.jsx("p",{children:"Experienced in managing and optimizing databases, including SQL (MySQL, PostgreSQL) and NoSQL (MongoDB), to ensure efficient data storage, retrieval, and manipulation."})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"icon",children:e.jsx("i",{className:"bx bx-code-alt"})}),e.jsx("h4",{children:"Version Control & Collaboration"}),e.jsx("p",{children:"Proficient in using Git and GitHub for version control and collaboration, facilitating smooth team workflows and maintaining code integrity across projects."})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"icon",children:e.jsx("i",{className:"bx bx-code-alt"})}),e.jsx("h4",{children:"Performance Optimization"}),e.jsx("p",{children:"Skilled in performance optimization techniques, including code splitting, lazy loading, and efficient querying to enhance application speed and responsiveness."})]})]})]}),e.jsxs("div",{className:"recent",children:[e.jsxs("div",{className:"header",children:[e.jsx("h4",{children:"Recent Posts"}),e.jsx("a",{href:"/blog",children:"View all"})]}),e.jsxs("div",{className:"posts",children:[e.jsxs("div",{className:"post-item",children:[e.jsx("h3",{children:"Making a layout system from scratch"}),e.jsxs("div",{className:"info",children:[e.jsx("h5",{children:"12 Jan 2024"}),e.jsx("h5",{children:"|"}),e.jsx("h5",{children:"Design, Layout"})]}),e.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet pariatur porro quaerat provident corporis facere ex voluptatibus laudantium voluptates qidbwuwuos."})]}),e.jsxs("div",{className:"post-item",children:[e.jsx("h3",{children:"Making a design system from scratch"}),e.jsxs("div",{className:"info",children:[e.jsx("h5",{children:"5 Jan 2024"}),e.jsx("h5",{children:"|"}),e.jsx("h5",{children:"Design,UI, UX"})]}),e.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet pariatur porro quaerat provident corporis facere ex voluptatibus laudantium voluptates quos."})]})]})]}),e.jsx("div",{className:"separator",children:e.jsx("h4",{children:"Featured Works"})}),e.jsx("div",{className:"featured",children:i.map((r,N)=>e.jsxs("div",{className:"item",children:[e.jsx("img",{src:r.img,alt:r.title}),e.jsxs("div",{className:"details",children:[e.jsx("h3",{children:r.title}),e.jsxs("div",{className:"item-info",children:[e.jsx("div",{className:"year-badge",children:r.year}),e.jsx("h4",{children:r.tech})]}),e.jsx("p",{children:r.description})]})]},N))}),!l&&e.jsx("button",{className:"load-more-button",children:e.jsx(S,{to:"/works",children:"More Works"})}),e.jsx(m,{})]})},F=[{img:h,title:"Ecommerce Website with PHP Laravel",year:"2024",tech:"PHP, Laravel",description:"An ecommerce platform developed using PHP and Laravel, featuring product management, shopping cart, and secure payment integration."},{img:x,title:"Dashboard Website with React",year:"2024",tech:"React",description:"A dynamic dashboard application built with React, offering real-time data visualization and interactive user interfaces."},{img:p,title:"Job Work Searching with React",year:"2024",tech:"React",description:"A job search application using React that allows users to find and apply for job listings with filters and user authentication."},{img:h,title:"Password Generator with Java",year:"2024",tech:"Java",description:"A secure password generator built in Java, featuring customizable options for length and complexity."},{img:x,title:"QR Generator with Java",year:"2024",tech:"Java",description:"A Java application that generates QR codes for various types of data, including URLs and text."},{img:p,title:"Detect Device Battery with JavaScript",year:"2024",tech:"JavaScript",description:"A JavaScript utility to detect and display the device's battery status in real-time."},{img:h,title:"Translator App with React",year:"2024",tech:"React",description:"A translation application built with React, allowing users to translate text between multiple languages."},{img:x,title:"Budget App with React",year:"2024",tech:"React",description:"A budgeting application built with React, featuring expense tracking and financial insights."},{img:p,title:"Chat GPT Bot with JavaScript",year:"2024",tech:"JavaScript",description:"A chatbot application utilizing GPT technology, developed using JavaScript for interactive conversations."},{img:h,title:"Chess Game with React",year:"2024",tech:"React",description:"A chess game built with React, featuring real-time gameplay and chessboard interactions."}],I=()=>e.jsxs(e.Fragment,{children:[e.jsxs("nav",{children:[e.jsxs("div",{className:"logo",children:[e.jsx("img",{src:c,alt:"Logo"}),e.jsx("a",{href:"/",children:"ZackProg"})]}),e.jsxs("div",{className:"nav-links",children:[e.jsx("a",{href:"/",children:"Home"}),e.jsx("a",{className:"selected",href:"/works",children:"Works"}),e.jsx("a",{href:"/single-work",children:"Single Work"}),e.jsx("a",{href:"/blog",children:"Blog"}),e.jsx("a",{href:"/contact",children:"Contact"})]})]}),e.jsx("h1",{className:"page-title",children:"Works"}),e.jsx("div",{className:"content",children:e.jsx("div",{className:"works-list",children:F.map((a,t)=>e.jsxs("div",{className:"item",children:[e.jsx("img",{src:a.img,alt:a.title}),e.jsxs("div",{className:"details",children:[e.jsx("h3",{children:a.title}),e.jsxs("div",{className:"item-info",children:[e.jsx("div",{className:"year-badge",children:a.year}),e.jsx("h4",{children:a.tech})]}),e.jsx("p",{children:a.description})]})]},t))})}),e.jsx(m,{})]}),M="/assets/single-post-1-DRJs1C1M.png",_="/assets/single-post-2-D3TITvK9.png",J=()=>e.jsxs(e.Fragment,{children:[e.jsxs("nav",{children:[e.jsxs("div",{className:"logo",children:[e.jsx("img",{src:c,alt:"Logo"}),e.jsx("a",{href:"/",children:"ZackProg"})]}),e.jsxs("div",{className:"nav-links",children:[e.jsx("a",{href:"/",children:"Home"}),e.jsx("a",{href:"/works",children:"Works"}),e.jsx("a",{className:"selected",href:"/single-work",children:"Single Work"}),e.jsx("a",{href:"/blog",children:"Blog"}),e.jsx("a",{href:"/contact",children:"Contact"})]})]}),e.jsx("h1",{className:"page-title",children:"Designing Dashboards with usability in mind"}),e.jsxs("div",{className:"content",children:[e.jsxs("div",{className:"work-info",children:[e.jsx("div",{className:"year-badge",children:"2024"}),e.jsx("div",{className:"category",children:e.jsx("p",{children:"Dashboard, User Experience Design"})})]}),e.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Non beatae qui et dolores minima illo facilis modi? Porro alias."}),e.jsx("img",{src:M,alt:"Designing Dashboards"}),e.jsx("h1",{children:"Heading 1"}),e.jsx("h2",{children:"Heading 2"}),e.jsx("h3",{children:"Heading 3"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, ad, modi soluta consectetur ipsam in molestias saepe totam unde incidunt adipisci laboriosam cum quis impedit vel eaque, harum ratione minus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quae incidunt accusamus dolorem voluptate obcaecati enim maiores, minus magnam illum facilis, quibusdam qui. Quaerat modi magni sed. Eius, ea magni!"}),e.jsx("img",{src:_,alt:"Dashboard Usability"})]}),e.jsx(m,{})]}),q=()=>{const[a,t]=u(null),l=i=>{t(a===i?null:i)},o=i=>{navigator.share?navigator.share({title:i.title,text:i.preview,url:window.location.href}).then(()=>console.log("Successful share")).catch(r=>console.log("Error sharing",r)):(navigator.clipboard.writeText(window.location.href),alert("URL copied to clipboard"))},s=i=>{const r=`${window.location.origin}/blog#post-${i}`;navigator.clipboard.writeText(r),alert("Post URL copied to clipboard")},n=[{title:"Making a layout system from scratch",date:"12 July 2024",tags:"Design, Layout",preview:"Creating a layout system from scratch involves several key steps and tools. Start by defining your project’s needs and designing a flexible grid system using tools like Figma or Sketch for mockups...",fullText:"Creating a layout system from scratch involves several key steps and tools. Start by defining your project’s needs and designing a flexible grid system using tools like Figma or Sketch for mockups. Implement responsive layouts with CSS Grid or Flexbox for adaptable columns and rows. Use Sass or LESS to manage your stylesheets efficiently. PostCSS can help with automating CSS properties and optimizing your code. Test across various devices using tools like BrowserStack or Responsive Design Mode in browsers. Ensure performance optimization with Lighthouse. Document your system with tools like Storybook or Zeroheight to maintain consistency and ease future updates."},{title:"Understanding CSS Grid",date:"15 July 2024",tags:"CSS, Grid",preview:"CSS Grid Layout is a two-dimensional layout system for the web. It allows you to design complex web layouts with simple code...",fullText:"CSS Grid Layout is a two-dimensional layout system for the web. It allows you to design complex web layouts with simple code. Grid enables you to create rows and columns with ease, making responsive designs more manageable. With CSS Grid, you can define areas within your layout and place elements accordingly. It's particularly useful for creating complex layouts that need precise alignment and spacing. Tools like Chrome DevTools make debugging CSS Grid layouts straightforward, while online resources such as MDN Web Docs provide extensive guides and examples."},{title:"Mastering Flexbox for Responsive Design",date:"20 July 2024",tags:"CSS, Flexbox",preview:"Flexbox is a one-dimensional layout model in CSS that helps in aligning items along a row or column. It’s ideal for creating responsive layouts...",fullText:"Flexbox is a one-dimensional layout model in CSS that helps in aligning items along a row or column. It’s ideal for creating responsive layouts that adapt to different screen sizes. Flexbox allows for easy distribution of space and alignment of items within a container. With properties like flex-direction, flex-wrap, and justify-content, you can build flexible and responsive designs quickly. Using Flexbox together with media queries can help you create layouts that adjust gracefully across various devices. Tools like CSS Tricks and Flexbox Froggy are great for learning and practicing Flexbox techniques."}];return e.jsxs(e.Fragment,{children:[e.jsxs("nav",{children:[e.jsxs("div",{className:"logo",children:[e.jsx("img",{src:c,alt:"Logo"}),e.jsx("a",{href:"/",children:"ZackProg"})]}),e.jsxs("div",{className:"nav-links",children:[e.jsx("a",{href:"/",children:"Home"}),e.jsx("a",{href:"works",children:"Works"}),e.jsx("a",{href:"single-work",children:"Single Work"}),e.jsx("a",{className:"selected",href:"blog",children:"Blog"}),e.jsx("a",{href:"contact",children:"Contact"})]})]}),e.jsx("h1",{className:"page-title",children:"Blog"}),e.jsx("div",{className:"content",children:e.jsx("div",{className:"post-list",children:n.map((i,r)=>e.jsxs("div",{className:"post-item",id:`post-${r}`,children:[e.jsx("h3",{children:i.title}),e.jsxs("div",{className:"info",children:[e.jsx("h5",{children:i.date}),e.jsx("h5",{children:"|"}),e.jsx("h5",{children:i.tags})]}),e.jsx("p",{children:a===r?i.fullText:i.preview}),e.jsxs("div",{className:"buttons",children:[e.jsx("i",{className:"bx bx-share",onClick:()=>o(i)}),e.jsx("i",{className:"bx bx-link-alt",onClick:()=>s(r)}),e.jsx("i",{className:"bx bx-copy",onClick:()=>s(r)}),e.jsx("i",{className:"bx bx-bookmark-plus"}),e.jsx("button",{onClick:()=>l(r),children:a===r?"Read Less":"Read More"})]})]},r))})}),e.jsx(m,{})]})},T=()=>e.jsxs(e.Fragment,{children:[e.jsxs("nav",{children:[e.jsxs("div",{className:"logo",children:[e.jsx("img",{src:c,alt:"Logo"}),e.jsx("a",{href:"/",children:"ZackProg"})]}),e.jsxs("div",{className:"nav-links",children:[e.jsx("a",{href:"/",children:"Home"}),e.jsx("a",{href:"/works",children:"Works"}),e.jsx("a",{href:"/single-work",children:"Single Work"}),e.jsx("a",{href:"/blog",children:"Blog"}),e.jsx("a",{className:"selected",href:"/contact",children:"Contact"})]})]}),e.jsx("h1",{className:"page-title",children:"About"}),e.jsx("div",{className:"content",children:e.jsxs("div",{className:"container",children:[e.jsx("img",{src:w,alt:"Profile"}),e.jsxs("div",{className:"about",children:[e.jsx("h2",{children:"I'm Zacharie Tshilomba"}),e.jsx("p",{children:"I am a passionate software developer with experience in building dynamic and responsive web applications. My expertise lies in using modern frameworks and technologies to create efficient and scalable solutions. I enjoy tackling complex problems and continuously strive to learn and improve my skills. My projects reflect my dedication to quality and innovation."}),e.jsx("p",{className:"email",children:"Contact Me : tshibzack@gmail.com"})]})]})}),e.jsx(m,{})]}),H=()=>e.jsx(R,{children:e.jsxs(P,{children:[e.jsx(d,{path:"/",element:e.jsx(B,{})}),e.jsx(d,{path:"/works",element:e.jsx(I,{})}),e.jsx(d,{path:"/single-work",element:e.jsx(J,{})}),e.jsx(d,{path:"/blog",element:e.jsx(q,{})}),e.jsx(d,{path:"/contact",element:e.jsx(T,{})})]})});j.createRoot(document.getElementById("root")).render(e.jsx(v.StrictMode,{children:e.jsx(H,{})}));
