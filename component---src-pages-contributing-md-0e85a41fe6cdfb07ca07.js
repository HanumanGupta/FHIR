(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{374:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",function(){return s}),a.d(t,"default",function(){return u});a(10),a(5),a(6),a(3),a(8),a(2),a(1);var n=a(104),o=a(393);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var r,s={},c=(r="PageDescription",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)}),b={_frontmatter:s},l=o.a;function u(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)(l,i({},b,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(c,{mdxType:"PageDescription"},Object(n.b)("p",null,"Use this guide to contribute to the theme. We’ll show you how to get the development environment set up as quickly as possible so you can start contributing.")),Object(n.b)("h2",{id:"contributing-in-general"},"Contributing In General"),Object(n.b)("p",null,"Our project welcomes external contributions. If you have an itch, please feel\nfree to scratch it."),Object(n.b)("p",null,"To contribute code or documentation, please submit a ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/ibm/fhir/pulls"}),"pull request"),"."),Object(n.b)("p",null,"A good way to familiarize yourself with the codebase and contribution process is\nto look for and tackle low-hanging fruit in the ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/ibm/fhir/issues"}),"issue tracker"),".\nBefore embarking on a more ambitious contribution, please quickly ",Object(n.b)("a",i({parentName:"p"},{href:"#communication"}),"get in touch")," with us."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Note: We appreciate your effort, and want to avoid a situation where a contribution\nrequires extensive rework (by you or by us), sits in backlog for a long time, or\ncannot be accepted at all!")),Object(n.b)("h3",{id:"proposing-new-features"},"Proposing new features"),Object(n.b)("p",null,"If you would like to implement a new feature, please ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/ibm/fhir/issues"}),"raise an issue"),"\nbefore sending a pull request so the feature can be discussed. This is to avoid\nyou wasting your valuable time working on a feature that the project developers\nare not interested in accepting into the code base."),Object(n.b)("h3",{id:"fixing-bugs"},"Fixing bugs"),Object(n.b)("p",null,"If you would like to fix a bug, please ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/ibm/fhir/issues"}),"raise an issue")," before sending a\npull request so it can be tracked."),Object(n.b)("h3",{id:"merge-approval"},"Merge approval"),Object(n.b)("p",null,"The project maintainers use LGTM (Looks Good To Me) in comments on the code\nreview to indicate acceptance. A change requires LGTMs from two of the\nmaintainers of each component affected."),Object(n.b)("p",null,"For a list of the maintainers, see the ",Object(n.b)("a",i({parentName:"p"},{href:"/FHIR/MAINTAINERS-45708c1d0a5758a6ed97820ef2ff434e.md"}),"MAINTAINERS.md")," page."),Object(n.b)("h2",{id:"legal"},"Legal"),Object(n.b)("p",null,"Each source file must include a license header for the Apache\nSoftware License 2.0. Using the SPDX format is the simplest approach.\ne.g."),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),"/*\n * (C) Copyright <holder> <year of first update>[, <year of last update>]\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n")),Object(n.b)("p",null,"We have tried to make it as easy as possible to make contributions. This\napplies to how we handle the legal aspects of contribution. We use the\nsame approach - the ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/hyperledger/fabric/blob/master/docs/source/DCO1.1.txt"}),"Developer’s Certificate of Origin 1.1 (DCO)")," - that the Linux® Kernel ",Object(n.b)("a",i({parentName:"p"},{href:"https://elinux.org/Developer_Certificate_Of_Origin"}),"community"),"\nuses to manage code contributions."),Object(n.b)("p",null,"We simply ask that when submitting a patch for review, the developer\nmust include a sign-off statement in the commit message."),Object(n.b)("p",null,"Here is an example Signed-off-by line, which indicates that the\nsubmitter accepts the DCO:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),"Signed-off-by: John Doe <john.doe@example.com>\n")),Object(n.b)("p",null,"You can include this automatically when you commit a change to your\nlocal git repository using the following command:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),"git commit -s\n")),Object(n.b)("h2",{id:"communication"},"Communication"),Object(n.b)("p",null,"Until we are able to set up a dedicated channel, please connect with us through ",Object(n.b)("a",i({parentName:"p"},{href:"https://chat.fhir.org/"}),"https://chat.fhir.org/")," or by opening an issue in our tracker."),Object(n.b)("h2",{id:"setup"},"Setup"),Object(n.b)("p",null,"The IBM FHIR Server is built with Maven and requires Java 8 or higher.  To build the project from the root directory, please execute:"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"mvn clean install -f fhir-parent/pom.xml")),Object(n.b)("h2",{id:"testing"},"Testing"),Object(n.b)("p",null,"To ensure a working build, please run the full build from the root of the project before submitting your pull request."),Object(n.b)("h2",{id:"coding-style-guidelines"},"Coding style guidelines"),Object(n.b)("p",null,"The IBM FHIR Server has been written by many individuals over many years. Formatting has not been strictly enforced, but we’d like to improve it over time, so please consider the following points as you change the code:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Write tests. Pull Requests should include necessary updates to unit tests (src/test/java of the corresponding project) and integration tests (in the fhir-server-test project)")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Use comments. Preferably javadoc.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Keep the documentation up-to-date. Project documentation exists under the docs directory. We have a CHANGELOG for tracking user-visible changes, a Conformance page for documenting conformance to the specification, and a User Guide for FHIR Server administrators.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Use spaces (not tabs) in java source. For this we have a checkstyle rule which will fail the build if you’re using tabs. We also prefer spaces over tabs in JSON and XML, but its not strictly enforced.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Use spaces after control flow keywords (they’re not function calls!); if/for/while blocks should always have { }"))),Object(n.b)("p",null,"Leave the code better than you found it."),Object(n.b)("h3",{id:"branch-naming-convention"},"Branch naming convention"),Object(n.b)("p",null,"issue-","£","NUMBER"),Object(n.b)("h3",{id:"commit-message-convention"},"Commit message convention"),Object(n.b)("p",null,"issue ","£","NUMBER - short description"),Object(n.b)("p",null,"long description"),Object(n.b)("p",null,"FHIR® is the registered trademark of HL7 and is used with the permission of HL7."))}u.isMDXComponent=!0},391:function(e){e.exports={data:{site:{pathPrefix:"/FHIR"}}}},392:function(e){e.exports={data:{site:{siteMetadata:{repository:{baseUrl:"https://github.com/IBM/FHIR",subDirectory:"/docs"}}}}}},393:function(e,t,a){"use strict";a(34),a(23);var n=a(2),o=a(391),i=a(1),r=a.n(i),s=a(192),c=a(90),b=a.n(c),l=a(91),u=a(123),p=a(4),h=a.n(p),d=a(366),m=function(e){var t,a=e.children,o=e.title,i=e.tabs,r=void 0===i?[]:i,s=e.shouldHideHeader;return Object(n.b)("div",{className:h()((t={},t[d.pageHeader]=d.pageHeader,t[d.pageHeaderSticky]=r.length,t[d.pageHeaderShifted]=s,t))},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12"},Object(n.b)("h1",{id:"page-title",className:d.text},o)))),a)},f=a(392),g=a(367),j=function(e){var t=e.relativePagePath,a=e.repository,o=f.data.site.siteMetadata.repository,i=a||o,r=i.baseUrl,s=r+"/tree/master"+i.subDirectory+"/src/pages"+t;return r?Object(n.b)("div",{className:"bx--row "+g.row},Object(n.b)("div",{className:"bx--col"},Object(n.b)("a",{className:g.link,href:s},"Edit this page on GitHub"))):null},O=a(193),v=a(28),y=a(368);var w=function(e){var t,a;function o(){return e.apply(this,arguments)||this}return a=e,(t=o).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,o.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,o=a.split("/").filter(Boolean).slice(-1)[0],i=t.map(function(e){var t,i=b()(e,{lower:!0}),r=i===o,s=a.replace(o,i);return Object(n.b)("li",{key:e,className:h()((t={},t[y.selectedItem]=r,t),y.listItem)},Object(n.b)(v.Link,{className:y.link,to:""+s},e))});return Object(n.b)("div",{className:y.tabsContainer},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(n.b)("nav",null,Object(n.b)("ul",{className:y.list},i))))))},o}(r.a.Component),N=a(194);t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,r=t.frontmatter,c=void 0===r?{}:r,p=t.relativePagePath,h=c.tabs,d=c.title,f=Object(l.c)(),g=!!h&&"down"===f,v=o.data.site.pathPrefix,y=v?i.pathname.replace(v,""):i.pathname,k=h?y.split("/").slice(-1)[0]||b()(h[0],{lower:!0}):"";return Object(n.b)(u.a,{shouldHideHeader:g,homepage:!1},Object(n.b)(m,{shouldHideHeader:g,title:d,label:"label",tabs:h},h&&Object(n.b)(w,{slug:y,tabs:h,currentTab:k})),Object(n.b)(N.a,{padded:!0},a,Object(n.b)(j,{relativePagePath:p})),Object(n.b)(O.a,{pageContext:t,location:i,slug:y,tabs:h,currentTab:k}),Object(n.b)(s.a,null))}}}]);
//# sourceMappingURL=component---src-pages-contributing-md-0e85a41fe6cdfb07ca07.js.map