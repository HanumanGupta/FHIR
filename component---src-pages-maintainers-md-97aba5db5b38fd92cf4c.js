(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{378:function(t,e,a){"use strict";a.r(e),a.d(e,"_frontmatter",function(){return c}),a.d(e,"default",function(){return o});a(10),a(5),a(6),a(3),a(8),a(2),a(1);var r=a(104),n=a(393);function b(){return(b=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t}).apply(this,arguments)}var c={},i={_frontmatter:c},l=n.a;function o(t){var e=t.components,a=function(t,e){if(null==t)return{};var a,r,n={},b=Object.keys(t);for(r=0;r<b.length;r++)a=b[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,["components"]);return Object(r.b)(l,b({},i,a,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"maintainers"},"MAINTAINERS"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",b({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",b({parentName:"tr"},{align:"center"}),"Email"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:null}),"John Timm"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"johntimm","@","us.ibm.com")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:null}),"Lee Surprenant"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"lmsurpre","@","us.ibm.com")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:null}),"Robin Arnold"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"Robin.Arnold23","@","ibm.com")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:null}),"Albert (Xu) Wang"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"xuwang","@","us.ibm.com")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",b({parentName:"tr"},{align:null}),"Paul Bastide"),Object(r.b)("td",b({parentName:"tr"},{align:"center"}),"pbastide","@","us.ibm.com")))))}o.isMDXComponent=!0},391:function(t){t.exports={data:{site:{pathPrefix:"/FHIR"}}}},392:function(t){t.exports={data:{site:{siteMetadata:{repository:{baseUrl:"https://github.com/IBM/FHIR",subDirectory:"/docs"}}}}}},393:function(t,e,a){"use strict";a(34),a(23);var r=a(2),n=a(391),b=a(1),c=a.n(b),i=a(192),l=a(90),o=a.n(l),s=a(91),p=a(123),d=a(4),u=a.n(d),m=a(366),O=function(t){var e,a=t.children,n=t.title,b=t.tabs,c=void 0===b?[]:b,i=t.shouldHideHeader;return Object(r.b)("div",{className:u()((e={},e[m.pageHeader]=m.pageHeader,e[m.pageHeaderSticky]=c.length,e[m.pageHeaderShifted]=i,e))},Object(r.b)("div",{className:"bx--grid"},Object(r.b)("div",{className:"bx--row"},Object(r.b)("div",{className:"bx--col-lg-12"},Object(r.b)("h1",{id:"page-title",className:m.text},n)))),a)},j=a(392),g=a(367),N=function(t){var e=t.relativePagePath,a=t.repository,n=j.data.site.siteMetadata.repository,b=a||n,c=b.baseUrl,i=c+"/tree/master"+b.subDirectory+"/src/pages"+e;return c?Object(r.b)("div",{className:"bx--row "+g.row},Object(r.b)("div",{className:"bx--col"},Object(r.b)("a",{className:g.link,href:i},"Edit this page on GitHub"))):null},h=a(193),f=a(28),v=a(368);var y=function(t){var e,a;function n(){return t.apply(this,arguments)||this}return a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,n.prototype.render=function(){var t=this.props,e=t.tabs,a=t.slug,n=a.split("/").filter(Boolean).slice(-1)[0],b=e.map(function(t){var e,b=o()(t,{lower:!0}),c=b===n,i=a.replace(n,b);return Object(r.b)("li",{key:t,className:u()((e={},e[v.selectedItem]=c,e),v.listItem)},Object(r.b)(f.Link,{className:v.link,to:""+i},t))});return Object(r.b)("div",{className:v.tabsContainer},Object(r.b)("div",{className:"bx--grid"},Object(r.b)("div",{className:"bx--row"},Object(r.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(r.b)("nav",null,Object(r.b)("ul",{className:v.list},b))))))},n}(c.a.Component),x=a(194);e.a=function(t){var e=t.pageContext,a=t.children,b=t.location,c=e.frontmatter,l=void 0===c?{}:c,d=e.relativePagePath,u=l.tabs,m=l.title,j=Object(s.c)(),g=!!u&&"down"===j,f=n.data.site.pathPrefix,v=f?b.pathname.replace(f,""):b.pathname,w=u?v.split("/").slice(-1)[0]||o()(u[0],{lower:!0}):"";return Object(r.b)(p.a,{shouldHideHeader:g,homepage:!1},Object(r.b)(O,{shouldHideHeader:g,title:m,label:"label",tabs:u},u&&Object(r.b)(y,{slug:v,tabs:u,currentTab:w})),Object(r.b)(x.a,{padded:!0},a,Object(r.b)(N,{relativePagePath:d})),Object(r.b)(h.a,{pageContext:e,location:b,slug:v,tabs:u,currentTab:w}),Object(r.b)(i.a,null))}}}]);
//# sourceMappingURL=component---src-pages-maintainers-md-97aba5db5b38fd92cf4c.js.map