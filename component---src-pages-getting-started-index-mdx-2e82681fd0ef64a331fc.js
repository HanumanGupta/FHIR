(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{371:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",function(){return i}),a.d(t,"default",function(){return p});a(10),a(5),a(6),a(3),a(8),a(2),a(1);var r=a(104),n=a(393);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var c,i={},s=(c="PageDescription",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),b={_frontmatter:i},l=n.a;function p(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return Object(r.b)(l,o({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(s,{mdxType:"PageDescription"},"Gettting Started"))}p.isMDXComponent=!0},391:function(e){e.exports={data:{site:{pathPrefix:"/FHIR"}}}},392:function(e){e.exports={data:{site:{siteMetadata:{repository:{baseUrl:"https://github.com/IBM/FHIR",subDirectory:"/docs"}}}}}},393:function(e,t,a){"use strict";a(34),a(23);var r=a(2),n=a(391),o=a(1),c=a.n(o),i=a(192),s=a(90),b=a.n(s),l=a(91),p=a(123),d=a(4),u=a.n(d),m=a(366),v=function(e){var t,a=e.children,n=e.title,o=e.tabs,c=void 0===o?[]:o,i=e.shouldHideHeader;return Object(r.b)("div",{className:u()((t={},t[m.pageHeader]=m.pageHeader,t[m.pageHeaderSticky]=c.length,t[m.pageHeaderShifted]=i,t))},Object(r.b)("div",{className:"bx--grid"},Object(r.b)("div",{className:"bx--row"},Object(r.b)("div",{className:"bx--col-lg-12"},Object(r.b)("h1",{id:"page-title",className:m.text},n)))),a)},O=a(392),f=a(367),j=function(e){var t=e.relativePagePath,a=e.repository,n=O.data.site.siteMetadata.repository,o=a||n,c=o.baseUrl,i=c+"/tree/master"+o.subDirectory+"/src/pages"+t;return c?Object(r.b)("div",{className:"bx--row "+f.row},Object(r.b)("div",{className:"bx--col"},Object(r.b)("a",{className:f.link,href:i},"Edit this page on GitHub"))):null},g=a(193),h=a(28),x=a(368);var y=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],o=t.map(function(e){var t,o=b()(e,{lower:!0}),c=o===n,i=a.replace(n,o);return Object(r.b)("li",{key:e,className:u()((t={},t[x.selectedItem]=c,t),x.listItem)},Object(r.b)(h.Link,{className:x.link,to:""+i},e))});return Object(r.b)("div",{className:x.tabsContainer},Object(r.b)("div",{className:"bx--grid"},Object(r.b)("div",{className:"bx--row"},Object(r.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(r.b)("nav",null,Object(r.b)("ul",{className:x.list},o))))))},n}(c.a.Component),w=a(194);t.a=function(e){var t=e.pageContext,a=e.children,o=e.location,c=t.frontmatter,s=void 0===c?{}:c,d=t.relativePagePath,u=s.tabs,m=s.title,O=Object(l.c)(),f=!!u&&"down"===O,h=n.data.site.pathPrefix,x=h?o.pathname.replace(h,""):o.pathname,N=u?x.split("/").slice(-1)[0]||b()(u[0],{lower:!0}):"";return Object(r.b)(p.a,{shouldHideHeader:f,homepage:!1},Object(r.b)(v,{shouldHideHeader:f,title:m,label:"label",tabs:u},u&&Object(r.b)(y,{slug:x,tabs:u,currentTab:N})),Object(r.b)(w.a,{padded:!0},a,Object(r.b)(j,{relativePagePath:d})),Object(r.b)(g.a,{pageContext:t,location:o,slug:x,tabs:u,currentTab:N}),Object(r.b)(i.a,null))}}}]);
//# sourceMappingURL=component---src-pages-getting-started-index-mdx-2e82681fd0ef64a331fc.js.map