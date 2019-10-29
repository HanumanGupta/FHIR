(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{370:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",function(){return o}),a.d(t,"default",function(){return c});a(10),a(5),a(6),a(3),a(8),a(2),a(1);var n=a(104),r=a(393);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o={},l={_frontmatter:o},s=r.a;function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(s,i({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Welcome to the IBM implementation of the HL7 FHIR R4 specification. This project builds on our experience developing, operating, and maintaining a commercial-grade DSTU2 server implementation. Our goal is to provide a robust and performant R4 implementation that is suitable for production with minimal configuration; yet customizable for a wide range of use cases. In this article, we give you insight into the work that went into upgrading our server implementation for FHIR R4: "),Object(n.b)("blockquote",null,Object(n.b)("ul",{parentName:"blockquote"},Object(n.b)("li",{parentName:"ul"},"Regenerating the model for R4 and refactoring the remaining code"),Object(n.b)("li",{parentName:"ul"},"Validating and improving the conformance with the specification"),Object(n.b)("li",{parentName:"ul"},"Evaluating the performance characteristics of the key components"))),Object(n.b)("h2",{id:"model"},"Model"),Object(n.b)("p",null,"The FHIR model component is the core of the server implementation. It provides Java APIs for parsing, building, generating, and validating FHIR resources.  The Java model classes that represent FHIR resources and data types are generated directly from the structure definitions distributed with the specification. The IBM FHIR Server model objects differ from the Java reference implementation in that each model class implements the Java builder pattern (Effective Java, Joshua Bloch) for thread-safety and performance and the visitor pattern (GoF) to enable simple traversal logic (used internally for serialization, data copying, and more). All date/time processing is done using the Java 8 time library and the model classes implement Java equals, hashCode, and toString methods."),Object(n.b)("p",null,"The model includes generated JavaDoc comments with key excerpts from the specification and many of the data type classes include additional factory methods to facilitate simple object construction. Model classes also include Java annotations for specification defined: constraints (@Constraint), required elements (@Required), choice element types (@Choice), and value set bindings (@Binding). Code elements with required ValueSet bindings are implemented as subclasses of Code with constant fields and nested enumerations. Backbone elements are implemented as Java nested classes to keep them organized."),Object(n.b)("h2",{id:"conformance"},"Conformance"),Object(n.b)("p",null,"All schema-level (structure, cardinality, value domain) and global (empty resource, empty element) constraint validation is performed during object construction, making it virtually impossible to build a schema-invalid FHIR resource. Additional constraint validation (invariants, profile, terminology) is performed using the FHIRValidator class. The FHIRParser and FHIRGenerator classes are used to parse and generate FHIR in either JSON or XML and FHIRPathEvaluator builds on an ANTLR4-generated parser to provide a performant FHIRPath evaluation engine that is used for validation and search parameter value extraction. Once the model, parser and core projects were stable, the remaining projects were refactored to work with the newly generated model."),Object(n.b)("p",null,"Once we had a basic implementation, we used the AEGIS Touchstone Basic and Advanced test suites to test our compliance to the specification. In early testing we easily managed to get 100% conformance with the Basic test suite but the Advanced test suite result showed a 55% conformance. After adding support for JSON patch, the HTTP Prefer header, and performing a number of HTTP response code fixes, we obtained an overall conformance score of 98% ",Object(n.b)("a",i({parentName:"p"},{href:"https://touchstone.aegis.net/touchstone/analytics/published?month=201909&spec=FHIR%204.0.0&pa=HL7_FHIR_SERVER&testSystem=5d5e96a10a120e7f08942098&supportedOnly=true&cb=/HL7_FHIR_4_0_0"}),"(100% on Basic and 89% on Advanced)"),". We are working towards full compliance on the Advanced test suite."),Object(n.b)("h2",{id:"performance"},"Performance"),Object(n.b)("p",null,"Performance has been a primary focus and has driven many of the decisions in the core server implementation and the database design. In the FHIR DSTU2 version that was developed internally and used in multiple offerings, we relied on JAXB (EclipseLink MOXy) for parsing/serialization and a combination of XML, XPath, XSLT, and Schematron for search parameter extraction and constraint validation. For FHIR R4, we took a new approach, opting to use specification driven code generation for both the model and the parsers and a custom FHIRPath implementation that operates over the model."),Object(n.b)("p",null,"The FHIR Persistence component implements a pluggable persistence interface; the default JDBC implementation is tested with Apache Derby and IBM DB2. When DB2 is used, the JDBC implementation takes advantage of table partitioning and row-based access control in order to provide multi-tenancy with strong isolation, fast provisioning, and improved density over a schema-per-tenant design. Additionally, when paired with DB2, the JDBC persistence layer makes use of stored procedures to reduce the number of database round-trips during ingestion and makes careful use of literals and parameter-markers in queries to improve database cardinality estimates and ensure query plan stability."),Object(n.b)("p",null,"The IBM FHIR Server combines examples from the FHIR specification with samples from the Team’s experience in order to drive a broad range of unit and integration tests. These tests can also be run standalone in order to probe the performance characteristics of the server and its components. The class com.ibm.fhir.server.test.app.Main in the fhir-server-test project runs through several thousand examples, performing a CREATE (POST) and a two READ (GET) operations for each resource. "),Object(n.b)("p",null,"Response time metrics are collected and collated into a simple report at the end of the run:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",i({parentName:"tr"},{align:null}),"         "),Object(n.b)("th",i({parentName:"tr"},{align:null}),"  REQS  "),Object(n.b)("th",i({parentName:"tr"},{align:null}),"MAX(ms)"),Object(n.b)("th",i({parentName:"tr"},{align:null}),"AVG(ms)"),Object(n.b)("th",i({parentName:"tr"},{align:null}),"95TH(ms)"),Object(n.b)("th",i({parentName:"tr"},{align:null}),"CALLS/s"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"PARSE"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"3848  "),Object(n.b)("td",i({parentName:"tr"},{align:null}),"1782      "),Object(n.b)("td",i({parentName:"tr"},{align:null}),"5      "),Object(n.b)("td",i({parentName:"tr"},{align:null}),"11      "),Object(n.b)("td",i({parentName:"tr"},{align:null}),"36.2")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"VALIDATE"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"3636  "),Object(n.b)("td",i({parentName:"tr"},{align:null})," 505       "),Object(n.b)("td",i({parentName:"tr"},{align:null}),"3       "),Object(n.b)("td",i({parentName:"tr"},{align:null}),"12       "),Object(n.b)("td",i({parentName:"tr"},{align:null}),"34.2")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"CREATE"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"3601  "),Object(n.b)("td",i({parentName:"tr"},{align:null}),"1219    "),Object(n.b)("td",i({parentName:"tr"},{align:null}),"56      "),Object(n.b)("td",i({parentName:"tr"},{align:null}),"164     "),Object(n.b)("td",i({parentName:"tr"},{align:null}),"33.9")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"READ"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"7202  "),Object(n.b)("td",i({parentName:"tr"},{align:null})," 423     "),Object(n.b)("td",i({parentName:"tr"},{align:null}),"24      "),Object(n.b)("td",i({parentName:"tr"},{align:null}),"60       "),Object(n.b)("td",i({parentName:"tr"},{align:null}),"67.8")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"PROCESS"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"3601  "),Object(n.b)("td",i({parentName:"tr"},{align:null}),"1504   "),Object(n.b)("td",i({parentName:"tr"},{align:null}),"109     "),Object(n.b)("td",i({parentName:"tr"},{align:null}),"291     "),Object(n.b)("td",i({parentName:"tr"},{align:null}),"33.9    ")))),Object(n.b)("p",null,"In the above run, all components (test driver, IBM FHIR Server and Derby database) were run locally on a mid-2015 MacBook Pro (2.5 GHz Intel Core i7, 16GB). Note that the client is also parsing and validating every resource it processes before submitting the request to the FHIR server."),Object(n.b)("p",null,"We invite developers across health IT to leverage this server implementation to turbo-charge their adoption of FHIR R4, enhance data interoperability, and to collaborate with us on shaping the future of this project at ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/ibm/fhir"}),"https://github.com/ibm/fhir"),"."),Object(n.b)("p",null,"Edited: 25-OCT-2019"))}c.isMDXComponent=!0},391:function(e){e.exports={data:{site:{pathPrefix:"/FHIR"}}}},392:function(e){e.exports={data:{site:{siteMetadata:{repository:{baseUrl:"https://github.com/IBM/FHIR",subDirectory:"/docs"}}}}}},393:function(e,t,a){"use strict";a(34),a(23);var n=a(2),r=a(391),i=a(1),o=a.n(i),l=a(192),s=a(90),c=a.n(s),d=a(91),b=a(123),p=a(4),m=a.n(p),u=a(366),h=function(e){var t,a=e.children,r=e.title,i=e.tabs,o=void 0===i?[]:i,l=e.shouldHideHeader;return Object(n.b)("div",{className:m()((t={},t[u.pageHeader]=u.pageHeader,t[u.pageHeaderSticky]=o.length,t[u.pageHeaderShifted]=l,t))},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12"},Object(n.b)("h1",{id:"page-title",className:u.text},r)))),a)},g=a(392),f=a(367),O=function(e){var t=e.relativePagePath,a=e.repository,r=g.data.site.siteMetadata.repository,i=a||r,o=i.baseUrl,l=o+"/tree/master"+i.subDirectory+"/src/pages"+t;return o?Object(n.b)("div",{className:"bx--row "+f.row},Object(n.b)("div",{className:"bx--col"},Object(n.b)("a",{className:f.link,href:l},"Edit this page on GitHub"))):null},j=a(193),v=a(28),N=a(368);var y=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],i=t.map(function(e){var t,i=c()(e,{lower:!0}),o=i===r,l=a.replace(r,i);return Object(n.b)("li",{key:e,className:m()((t={},t[N.selectedItem]=o,t),N.listItem)},Object(n.b)(v.Link,{className:N.link,to:""+l},e))});return Object(n.b)("div",{className:N.tabsContainer},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(n.b)("nav",null,Object(n.b)("ul",{className:N.list},i))))))},r}(o.a.Component),w=a(194);t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,o=t.frontmatter,s=void 0===o?{}:o,p=t.relativePagePath,m=s.tabs,u=s.title,g=Object(d.c)(),f=!!m&&"down"===g,v=r.data.site.pathPrefix,N=v?i.pathname.replace(v,""):i.pathname,R=m?N.split("/").slice(-1)[0]||c()(m[0],{lower:!0}):"";return Object(n.b)(b.a,{shouldHideHeader:f,homepage:!1},Object(n.b)(h,{shouldHideHeader:f,title:u,label:"label",tabs:m},m&&Object(n.b)(y,{slug:N,tabs:m,currentTab:R})),Object(n.b)(w.a,{padded:!0},a,Object(n.b)(O,{relativePagePath:p})),Object(n.b)(j.a,{pageContext:t,location:i,slug:N,tabs:m,currentTab:R}),Object(n.b)(l.a,null))}}}]);
//# sourceMappingURL=component---src-pages-announcement-mdx-5134bec218b3686d67d0.js.map