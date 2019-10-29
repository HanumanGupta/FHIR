(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{384:function(e,t,r){"use strict";r.r(t),r.d(t,"_frontmatter",function(){return s}),r.d(t,"default",function(){return l});r(10),r(5),r(6),r(3),r(8),r(2),r(1);var a=r(104),n=r(392);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var s={},o={_frontmatter:s},c=n.a;function l(e){var t=e.components,r=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,["components"]);return Object(a.b)(c,i({},o,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"ibm-fhir-server---search-configuration-overview"},"IBM FHIR Server - Search Configuration Overview"),Object(a.b)("p",null,"The ",Object(a.b)("a",i({parentName:"p"},{href:"https://www.hl7.org/fhir/r4/search.html"}),"FHIR Specification")," defines a set of searchable fields for each resource type, and corresponding RESTful API.  The IBM FHIR Server supports searching using the specification defined search parameters and using tenant-specific search parameters (extensions). "),Object(a.b)("p",null,"Specifically, the IBM FHIR Server supports searching on additional fields, including:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"fields that are defined in the base specification, which are not configured for search;  "),Object(a.b)("li",{parentName:"ul"},"extension elements that a tenant may add to a standard FHIR resource type; and  "),Object(a.b)("li",{parentName:"ul"},"attributes that you define as part of a custom resource type  ")),Object(a.b)("p",null,"The IBM FHIR Server allows deployers to define search parameters on a tenant-specific basis. This allows each tenant to share an instance of the FHIR server while maintaining the ability to have their own set of search parameters."),Object(a.b)("p",null,"A tenant must provide a ",Object(a.b)("a",i({parentName:"p"},{href:"https://www.hl7.org/fhir/r4/bundle.html"}),"Bundle")," of ",Object(a.b)("a",i({parentName:"p"},{href:"https://www.hl7.org/fhir/r4/searchparameter.html"}),"SearchParameter")," resources that define the additional search parameters which describe the searchable field and define the FHIRPath expression for extraction.  For example, a tenant that extends the ",Object(a.b)("inlineCode",{parentName:"p"},"Patient")," resource type with the ",Object(a.b)("inlineCode",{parentName:"p"},"favorite-color")," extension, enables search on ",Object(a.b)("inlineCode",{parentName:"p"},"favorite-color")," by defining a SearchParameter as part of this bundle."),Object(a.b)("p",null,"Note, the ",Object(a.b)("a",i({parentName:"p"},{href:"https://www.hl7.org/fhir/r4/codesystem-search-param-type.html#search-param-type-composite"}),"composite")," and ",Object(a.b)("a",i({parentName:"p"},{href:"https://www.hl7.org/fhir/r4/codesystem-search-param-type.html#search-param-type-special"}),"special")," SearchParameter types are not supported."),Object(a.b)("h2",{id:"1-configuration"},"1 Configuration"),Object(a.b)("p",null,"There are three layers of search parameter configuration.  "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"specification defined "),Object(a.b)("li",{parentName:"ul"},"default "),Object(a.b)("li",{parentName:"ul"},"tenant-specific")),Object(a.b)("p",null,"The specification defined SearchParameters are embedded as ",Object(a.b)("a",i({parentName:"p"},{href:"https://github.com/IBM/FHIR/blob/master/fhir-search/src/main/resources/search-parameters.json"}),"a JSON file")," in the ",Object(a.b)("inlineCode",{parentName:"p"},"fhir-search")," module. This file has a twin ",Object(a.b)("a",i({parentName:"p"},{href:"https://github.com/IBM/FHIR/blob/master/fhir-search/src/main/resources/valuetypes-default.json"}),"JSON file")," which maps each SearchParameter attribute to one or more expected target data types. "),Object(a.b)("p",null,"Note, the search-parameters.json and search-parameters.xml in the ",Object(a.b)("inlineCode",{parentName:"p"},"fhir-search")," module match the latest definition resource from the ",Object(a.b)("a",i({parentName:"p"},{href:"http://hl7.org/fhir/r4/downloads.html"}),"FHIR download site"),". "),Object(a.b)("p",null,"The valuetypes JSON is an implementation-specific config file that enables the server to take datatype-specific actions when the extracted attributes are stored or searched."),Object(a.b)("p",null,"The default and tenant level configurations are put in the ",Object(a.b)("inlineCode",{parentName:"p"},"default")," and tenant-specific (e.g. ",Object(a.b)("inlineCode",{parentName:"p"},"tenant1"),") config folders respectively. These folders are populated with ",Object(a.b)("inlineCode",{parentName:"p"},"extension-search-parameters.json")," and ",Object(a.b)("inlineCode",{parentName:"p"},"extension-search-parameters-valuetypes.json"),".  "),Object(a.b)("p",null,"The IBM FHIR Server configuration prefers the JSON formatted configuration documents, and implements caching via ",Object(a.b)("a",i({parentName:"p"},{href:"https://github.com/IBM/FHIR/blob/master/fhir-search/src/main/java/com/ibm/fhir/search/parameters/cache/TenantSpecificSearchParameterCache.java"}),"TenantSpecificSearchParameterCache.java")," and ",Object(a.b)("a",i({parentName:"p"},{href:"https://github.com/IBM/FHIR/blob/master/fhir-search/src/main/java/com/ibm/fhir/search/valuetypes/cache/TenantSpecificValueTypesCache.java"}),"TenantSpecificValueTypesCache.java"),". "),Object(a.b)("p",null,"The IBM FHIR Server supports compartment searches based on the CompartmentDefinition resources found at ",Object(a.b)("a",i({parentName:"p"},{href:"https://github.com/IBM/FHIR/blob/master/fhir-search/src/main/resources/compartments.json"}),"fhir-search/src/main/resources/compartments.json"),".  These definitions come directly from the specification and the server provides no corresponding default or tenant-level configuration. "),Object(a.b)("h3",{id:"11-configuration-per-tenant"},"1.1 Configuration per Tenant"),Object(a.b)("p",null,"To configure tenant-specific search parameters, create a file called ",Object(a.b)("inlineCode",{parentName:"p"},"extension-search-parameters.json")," and ",Object(a.b)("inlineCode",{parentName:"p"},"extension-search-parameters-valuetypes.json"),", placing it in the ",Object(a.b)("inlineCode",{parentName:"p"},"${server.config.dir}/config/<tenant-id>")," directory. For example, the ",Object(a.b)("inlineCode",{parentName:"p"},"${server.config.dir}/config/acme/extension-search-parameters.json")," file would contain the search parameters for the ",Object(a.b)("inlineCode",{parentName:"p"},"acme")," tenant, while ",Object(a.b)("inlineCode",{parentName:"p"},"${server.config.dir}/config/qpharma/extension-search-parameters.json")," would contain search parameters used by the ",Object(a.b)("inlineCode",{parentName:"p"},"qpharma")," tenant."),Object(a.b)("p",null,"When the FHIR server processes a request associated with the ",Object(a.b)("inlineCode",{parentName:"p"},"acme")," tenant, the server is only aware of the set of built-in search parameters (defined by the HL7 FHIR specification) plus the user-defined search parameters defined in the ",Object(a.b)("inlineCode",{parentName:"p"},"acme")," tenant’s extension-search-parameters.json file. Likewise, when processing a request associated with the ",Object(a.b)("inlineCode",{parentName:"p"},"qpharma")," tenant, the server is only aware of the built-in search parameters plus the user-defined search parameters defined in the ",Object(a.b)("inlineCode",{parentName:"p"},"qpharma")," tenant’s ",Object(a.b)("inlineCode",{parentName:"p"},"extension-search-parameters.json")," file."),Object(a.b)("p",null,"If a tenant-specific extension-search-parameters.json file does not exist, the server falls back to the global ",Object(a.b)("inlineCode",{parentName:"p"},"extension-search-parameters.json")," file found at ",Object(a.b)("inlineCode",{parentName:"p"},"${server.config.dir}/config/default/extension-search-parameters.json"),"."),Object(a.b)("p",null,"The FHIR server caches search parameters in memory (organized first by tenant id, then by resource type and search parameter). Any updates to a tenant’s ",Object(a.b)("inlineCode",{parentName:"p"},"extension-search-parameters.json")," file causes the FHIR server to re-load the tenant’s search parameters and refresh the information stored in the cache, without requiring a server re-start. This allows the deployer to deploy a new tenant’s ",Object(a.b)("inlineCode",{parentName:"p"},"extension-search-parameters.json")," or update an existing file without re-starting the FHIR server and any subsequent requests processed by the FHIR server after the updates have been made use the updated search parameters. However, it is important to note that this process ",Object(a.b)("strong",{parentName:"p"},"does not")," re-index already-created resources that are stored on the FHIR Server. One technique for updating the indices for a given resource type is to ",Object(a.b)("inlineCode",{parentName:"p"},"read")," and ",Object(a.b)("inlineCode",{parentName:"p"},"update")," each resource instance with itself, triggering search parameter extraction (and creating a new version of each resource)."),Object(a.b)("h4",{id:"111-search-parameters-configuration-extension-search-parametersjson"},"1.1.1 Search Parameters Configuration: extension-search-parameters.json"),Object(a.b)("p",null,"To configure the FHIR server with one or more custom search parameters, one must create a file called ",Object(a.b)("inlineCode",{parentName:"p"},"extension-search-parameters.json")," and populate the contents with a Bundle of ",Object(a.b)("inlineCode",{parentName:"p"},"SearchParameter")," resources."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"fhir-search")," module requires that the ",Object(a.b)("a",i({parentName:"p"},{href:"https://www.hl7.org/fhir/r4/searchparameter-definitions.html#SearchParameter.expression"}),"expression"),", ",Object(a.b)("a",i({parentName:"p"},{href:"https://www.hl7.org/fhir/r4/searchparameter-definitions.html#SearchParameter.type"}),"type")," and ",Object(a.b)("a",i({parentName:"p"},{href:"https://www.hl7.org/fhir/r4/searchparameter-definitions.html#SearchParameter.code"}),"code")," be set, as in the following example:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),'{\n   "resourceType": "Bundle",\n   "id": "searchParams",\n   "meta": {\n      "lastUpdated": "2019-07-12T22:37:54.724+11:00"\n   },\n   "type": "collection",\n   "entry": [{\n      "fullUrl": "http://ibm.com/fhir/SearchParameter/Patient-favorite-color",\n      "resource": {\n         "resourceType": "SearchParameter",\n         "id": "Patient-favorite-color",\n         "url": "http://ibm.com/fhir/SearchParameter/Patient-favorite-color",\n         "version": "4.0.0",\n         "name": "favorite-color",\n         "status": "draft",\n         "experimental": false,\n         "date": "2018-12-27T22:37:54+11:00",\n         "publisher": "IBM FHIR Server Test",\n         "contact": [{\n            "telecom": [{\n               "system": "url",\n               "value": "http://ibm.com/fhir"\n            }]\n         },\n         {\n            "telecom": [{\n               "system": "url",\n               "value": "http://ibm.com/fhir"\n            }]\n         }],\n         "description": "the patient\'s favorite color",\n         "code": "favorite-color",\n         "base": ["Patient"],\n         "type": "string",\n         "xpathUsage": "normal",\n         "xpath": "f:Patient/f:extension[@url=\'http://ibm.com/fhir/extension/Patient/favorite-color\']/f:valueString",\n         "expression": "Patient.extension.where(url=\'http://ibm.com/fhir/extension/Patient/favorite-color\').value",\n         "multipleOr": true,\n         "multipleAnd": true,\n         "modifier": []\n      }\n   }\n}\n')),Object(a.b)("p",null,"A few things to note are: "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"This SearchParameter includes an xpath element for completeness, but the IBM FHIR Server does not use the XPath during extraction; it only uses the expression (FHIRPath)."),Object(a.b)("li",{parentName:"ul"},"The SearchParameter with a path including ",Object(a.b)("inlineCode",{parentName:"li"},"value")," use the Choice data types which are determined based on the SearchParameter type and the Resource’s data type (using the extension-search-parameters-valuetypes.json). "),Object(a.b)("li",{parentName:"ul"},"Each time a resource is created or updated, the FHIR server evaluates the FHIRPath expression applicable to the resource type and indexes the values of the matching elements, making these available via a search where the query parameter name matches the ",Object(a.b)("inlineCode",{parentName:"li"},"code")," element on the ",Object(a.b)("inlineCode",{parentName:"li"},"SearchParameter")," definition.")),Object(a.b)("p",null,"In the preceding example, extension elements (on a Patient resource) with a url of ",Object(a.b)("inlineCode",{parentName:"p"},"http://ibm.com/fhir/extension/Patient/favorite-color")," are indexed by the ",Object(a.b)("inlineCode",{parentName:"p"},"favorite-color")," search parameter. To search for Patients with a favorite color of “pink”, users could send an HTTP GET request to a URL like ",Object(a.b)("inlineCode",{parentName:"p"},"[base]/api/v1/Patient?favorite-color:exact=pink"),"."),Object(a.b)("p",null,"For more information on search parameters, see the HL7 FHIR specification."),Object(a.b)("h4",{id:"112-search-parameters-configuration-extension-search-parameters-valuetypesjson"},"1.1.2 Search Parameters Configuration: extension-search-parameters-valuetypes.json"),Object(a.b)("p",null,"The extension-search-parameters-valuetypes.json must be configured in concert with each search parameter to identify the expected data type(s) for the element(s) selected by that search parameter’s expression. "),Object(a.b)("p",null,"For each Search Parameter, there needs to be an entry with the following fields:\n- ",Object(a.b)("inlineCode",{parentName:"p"},"resourceType")," - the FHIR resource type.\n- ",Object(a.b)("inlineCode",{parentName:"p"},"name")," - the SearchParameter code that matches to this mapping.\n- ",Object(a.b)("inlineCode",{parentName:"p"},"targetClasses")," - an array of fhir-model simple Class names that correspond to the expected data types for this search parameter. "),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),'{\n    "value-types": "default-extensions",\n    "mappings": [{\n        "resourceType": "Patient",\n        "name": "favorite-color",\n        "targetClasses": ["String"]\n    }]\n}\n')),Object(a.b)("h4",{id:"113-test"},"1.1.3 Test"),Object(a.b)("p",null,"When creating a SearchParameter extension, it is recommended that the FHIRPath expression is checked for validity. Many examples exist in the module ",Object(a.b)("inlineCode",{parentName:"p"},"fhir-search"),". "),Object(a.b)("h3",{id:"12-configuration-filtering-of-search-parameters"},"1.2 Configuration: Filtering of search parameters"),Object(a.b)("p",null,"The FHIR server supports the filtering of built-in search parameters (that is, search parameters defined by the HL7 FHIR specification for each resource type). The default behavior of the FHIR server is to consider all built-in search parameters when storing resources or performing search results, but you can configure inclusion filters to restrict the FHIR server’s view to specific search parameters on a resource type basis. This filtering feature does not apply to user-defined search parameters in the extension-search-parameters.json file. User-defined search parameters are always included in the FHIR server’s view regardless of the configured inclusion filters."),Object(a.b)("p",null,"Why would you want to filter built-in search parameters? The answer lies in how search parameters are used by the FHIR server. When the FHIR server processes a ",Object(a.b)("em",{parentName:"p"},"create")," or ",Object(a.b)("em",{parentName:"p"},"update")," operation, it stores the resource contents in the datastore, along with search index information that is used by the FHIR server when performing search operations. The search index information stored for a particular resource instance is driven by the search parameters defined for that resource type. Therefore if you are storing a resource whose type has a lot of built-in search parameters defined for it (e.g. ",Object(a.b)("inlineCode",{parentName:"p"},"Patient"),"), then you could potentially be storing a lot of search index information for each resource."),Object(a.b)("p",null,"For performance and scalability reasons, it might be desirable to limit the number of search parameters considered during a ",Object(a.b)("em",{parentName:"p"},"create")," or ",Object(a.b)("em",{parentName:"p"},"update")," operation for particular resource types, if those search parameters will never be used in search operations. After all, if there will be no need to use the search index information, there’s no need to store it. For example, if you know that due to the way in which a particular tenant’s applications use the FHIR REST API that those applications will never need to search Patients by birthdate, then there would be no need to store search index information for the ",Object(a.b)("inlineCode",{parentName:"p"},"birthdate")," attribute in ",Object(a.b)("inlineCode",{parentName:"p"},"Patient")," resources. And consequently, you could filter out the ",Object(a.b)("inlineCode",{parentName:"p"},"birthdate")," search parameter for the ",Object(a.b)("inlineCode",{parentName:"p"},"Patient")," resource type and not lose any needed functionality, but yet save a little bit of storage capacity in your datastore."),Object(a.b)("p",null,"The search parameter filtering feature is supported through a set of inclusion rules specified via the ",Object(a.b)("inlineCode",{parentName:"p"},"fhirServer/searchParameterFilter")," configuration property. The search parameter inclusion rules allow you to define a set of search parameters per resource type that should be included in the FHIR server’s view of search parameters when storing resources and performing search operations. The rules also allow you to specify a wildcard for resource types and also for search parameter. The following example shows the general form for specifying inclusion rules:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),'{\n    "fhirServer": {\n        "searchParameterFilter": {\n            "&lt;resource type1&gt;": [\n                "sp-name1",\n                "sp-name2", \n                ...,\n                "sp-namen"\n            ],\n            "&lt;resource type2&gt;": [\n                "sp-name1",\n                "sp-name2", \n                ...,\n                "sp-namen"\n            ],\n            "&lt;resource type3&gt;": [ "*" ],\n            "*": [ "*" ]\n        }\n    }\n}\n')),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"fhirServer/searchParameterFilter")," property is a JSON map where the key represents the resource type, and the value is an array of strings representing search parameter code. The wildcard (",Object(a.b)("inlineCode",{parentName:"p"},'"*"'),") can be used either as a resource type or as a search parameter code."),Object(a.b)("p",null,"For the SearchParameters of type ",Object(a.b)("inlineCode",{parentName:"p"},"Resource"),", these ",Object(a.b)("strong",{parentName:"p"},"code")," is managed at the Resource level. The codes are:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",i({parentName:"tr"},{align:null}),"code"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"_id")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"_lastUpdated")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"_profile")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"_security")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"_source")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"_tag")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"_content")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"_query")))),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"_content")," and ",Object(a.b)("inlineCode",{parentName:"p"},"_query")," are not supported. "),Object(a.b)("p",null,"For these specific codes, filters do not implicitly include the ",Object(a.b)("inlineCode",{parentName:"p"},"Resource")," level defined SearchParameters. To filter on the codes in search, a filter must be applied on ",Object(a.b)("inlineCode",{parentName:"p"},"Resource"),": "),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),'"searchParameterFilter": {\n    "Resource": [ "_id" ],\n')),Object(a.b)("p",null,"The filter ",Object(a.b)("inlineCode",{parentName:"p"},'"*": ["*"]')," is not necessary to include Resource-level parameters. "),Object(a.b)("p",null,"The fhir-server does not support the following ",Object(a.b)("inlineCode",{parentName:"p"},"Resource")," SearchParameters."),Object(a.b)("p",null,"The following sections presents several examples."),Object(a.b)("h5",{id:"121-example-1"},"1.2.1 Example 1"),Object(a.b)("p",null,"In the following example a single inclusion rule uses wildcards to instruct the FHIR server to include any search parameter for any resource type. This example also describes the default behavior of the FHIR server when the ",Object(a.b)("inlineCode",{parentName:"p"},"fhirServer/searchParameterFilter")," configuration property is not set:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),'{\n    "fhirServer": {\n        "__comment": "include all search parameters for all resource types (default)",\n        "searchParameterFilter": {\n            "*": [ "*" ]\n        }\n    }\n}\n')),Object(a.b)("h5",{id:"122-example-2"},"1.2.2 Example 2"),Object(a.b)("p",null,"In the following example inclusion rules are specified for a few specific resource types, and then wildcards are used to include search parameters for the remaining resource types:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),'{\n    "__comment": "FHIR server configuration",\n    "fhirServer": {\n        "searchParameterFilter": {\n            "Device": [ patient", "organization" ],\n            "Observation": [ "code" ],\n            "Patient": [\n                    "active",\n                    "address",\n                    "birthdate",\n                    "name"\n            ],\n            "Resource": ["_id", "_lastUpdated"],\n            "*": [ "*" ]\n        }\n    }\n}\n')),Object(a.b)("p",null,"For Device resources, only the ",Object(a.b)("inlineCode",{parentName:"p"},"patient")," and ",Object(a.b)("inlineCode",{parentName:"p"},"organization")," search parameters are included, while for ",Object(a.b)("inlineCode",{parentName:"p"},"Observation")," resources, only the ",Object(a.b)("inlineCode",{parentName:"p"},"code")," search parameter is included. For ",Object(a.b)("inlineCode",{parentName:"p"},"Patient")," resources, you can see that the ",Object(a.b)("inlineCode",{parentName:"p"},"active"),", ",Object(a.b)("inlineCode",{parentName:"p"},"address"),", ",Object(a.b)("inlineCode",{parentName:"p"},"birthdate")," and ",Object(a.b)("inlineCode",{parentName:"p"},"name")," search parameters are included. And finally, for any other resource types, all of their built-in search parameters are included in the FHIR server’s view when storing resources or performing search operations."),Object(a.b)("p",null,"Note that if this example did not include the last inclusion rule, then no other resource type’s built-in search parameters would be included."),Object(a.b)("h5",{id:"123-summary-of-the-inclusion-rules-and-filtering-algorithm"},"1.2.3 Summary of the inclusion rules and filtering algorithm"),Object(a.b)("p",null,"Here are some rules about the rules:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Each rule specifies a resource type name and a JSON array of search parameter codes."),Object(a.b)("li",{parentName:"ol"},"A resource type should appear in at most one rule. In other words, you cannot specify two or more inclusion rules with the same resource types."),Object(a.b)("li",{parentName:"ol"},"At most one rule can specify the wildcard (",Object(a.b)("inlineCode",{parentName:"li"},"*"),") for the resource type, and it should appear as the last rule in the map.")),Object(a.b)("p",null,"This is how the filtering algorithm works:\n1.   When retrieving the built-in search parameters for a particular resource type, the FHIR server will retrieve the rule associated with that resource type, if one exists. If one doesn’t exist, then the rule for the wildcard resource type (",Object(a.b)("inlineCode",{parentName:"p"},'"*"'),") is retrieved if it exists.\n2.   If no inclusion rule was found in Step 1 (that is, the resource type in question has no rule and there’s no rule containing a wildcard for the resource type), then no built-in search parameters for this resource type will be included in the FHIR server’s view of search parameters while storing a resource of performing a search operation.\n3.   Using the search parameter codes associated with the rule retrieved in Step 1, the FHIR server will apply the rule to each built-in search parameter defined for that resource type.If the search parameter’s code is found within the inclusion rule’s list of search parameter codes or the inclusion rule’s list of codes includes the wildcard (",Object(a.b)("inlineCode",{parentName:"p"},'"*"'),"), then the search parameter will be included in the FHIR server’s view of search parameters for that resource type."),Object(a.b)("h4",{id:"124-fhir-server-configjson-properties"},"1.2.4 fhir-server-config.json properties"),Object(a.b)("p",null,"The following properties are available to configure searchParameterFilter: "),Object(a.b)("h5",{id:"1241-default-property-values"},"1.2.4.1 Default property values"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",i({parentName:"tr"},{align:null}),"Property Name"),Object(a.b)("th",i({parentName:"tr"},{align:null}),"Default value"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"fhirServer/searchParameterFilter")),Object(a.b)("td",i({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},'"*": ["*"]'))))),Object(a.b)("h5",{id:"1242-property-attributes"},"1.2.4.2 Property attributes"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",i({parentName:"tr"},{align:null}),"Property Name"),Object(a.b)("th",i({parentName:"tr"},{align:null}),"Tenant-specific?"),Object(a.b)("th",i({parentName:"tr"},{align:null}),"Dynamic?"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"fhirServer/searchParameterFilter")),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Y"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Y")))),Object(a.b)("p",null,"In general, the configuration properties for a particular tenant are stored in the ",Object(a.b)("inlineCode",{parentName:"p"},"<WLP_HOME>/wlp/usr/servers/fhir-server/config/<tenant-id>/fhir-server-config.json")," file, where ",Object(a.b)("inlineCode",{parentName:"p"},"<tenant-id>")," refers to the tenant’s “short name” or tenant id. The global configuration is considered to be associated with a tenant named ",Object(a.b)("inlineCode",{parentName:"p"},"default"),", so those properties are stored in the ",Object(a.b)("inlineCode",{parentName:"p"},"<WLP_HOME>/wlp/usr/servers/fhir-server/config/default/fhir-server-config.json")," file. Similarly, tenant-specific search parameters are found at ",Object(a.b)("inlineCode",{parentName:"p"},"<WLP_HOME>/wlp/usr/servers/fhir-server/config/<tenant-id>/extension-search-parameters.json")," whereas the global/default extension search parameters are at ",Object(a.b)("inlineCode",{parentName:"p"},"<WLP_HOME>/wlp/usr/servers/fhir-server/config/default/extension-search-parameters.json"),". Search parameters are handled like a single configuration property; providing a tenant-specific file will override the global/default extension search parameters."),Object(a.b)("p",null,"If you have any issues, open an issue with the IBM FHIR Server team. "),Object(a.b)("hr",null),"FHIR® is the registered trademark of HL7 and is used with the permission of HL7.")}l.isMDXComponent=!0},390:function(e){e.exports={data:{site:{pathPrefix:"/FHIR"}}}},391:function(e){e.exports={data:{site:{siteMetadata:{repository:{baseUrl:"https://github.com/IBM/FHIR",subDirectory:"/docs"}}}}}},392:function(e,t,r){"use strict";r(34),r(23);var a=r(2),n=r(390),i=r(1),s=r.n(i),o=r(192),c=r(90),l=r.n(c),p=r(91),h=r(123),b=r(4),d=r.n(b),m=r(366),u=function(e){var t,r=e.children,n=e.title,i=e.tabs,s=void 0===i?[]:i,o=e.shouldHideHeader;return Object(a.b)("div",{className:d()((t={},t[m.pageHeader]=m.pageHeader,t[m.pageHeaderSticky]=s.length,t[m.pageHeaderShifted]=o,t))},Object(a.b)("div",{className:"bx--grid"},Object(a.b)("div",{className:"bx--row"},Object(a.b)("div",{className:"bx--col-lg-12"},Object(a.b)("h1",{id:"page-title",className:m.text},n)))),r)},f=r(391),j=r(367),O=function(e){var t=e.relativePagePath,r=e.repository,n=f.data.site.siteMetadata.repository,i=r||n,s=i.baseUrl,o=s+"/tree/master"+i.subDirectory+"/src/pages"+t;return s?Object(a.b)("div",{className:"bx--row "+j.row},Object(a.b)("div",{className:"bx--col"},Object(a.b)("a",{className:j.link,href:o},"Edit this page on GitHub"))):null},g=r(193),y=r(28),v=r(368);var N=function(e){var t,r;function n(){return e.apply(this,arguments)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){var e=this.props,t=e.tabs,r=e.slug,n=r.split("/").filter(Boolean).slice(-1)[0],i=t.map(function(e){var t,i=l()(e,{lower:!0}),s=i===n,o=r.replace(n,i);return Object(a.b)("li",{key:e,className:d()((t={},t[v.selectedItem]=s,t),v.listItem)},Object(a.b)(y.Link,{className:v.link,to:""+o},e))});return Object(a.b)("div",{className:v.tabsContainer},Object(a.b)("div",{className:"bx--grid"},Object(a.b)("div",{className:"bx--row"},Object(a.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(a.b)("nav",null,Object(a.b)("ul",{className:v.list},i))))))},n}(s.a.Component),w=r(194);t.a=function(e){var t=e.pageContext,r=e.children,i=e.location,s=t.frontmatter,c=void 0===s?{}:s,b=t.relativePagePath,d=c.tabs,m=c.title,f=Object(p.c)(),j=!!d&&"down"===f,y=n.data.site.pathPrefix,v=y?i.pathname.replace(y,""):i.pathname,x=d?v.split("/").slice(-1)[0]||l()(d[0],{lower:!0}):"";return Object(a.b)(h.a,{shouldHideHeader:j,homepage:!1},Object(a.b)(u,{shouldHideHeader:j,title:m,label:"label",tabs:d},d&&Object(a.b)(N,{slug:v,tabs:d,currentTab:x})),Object(a.b)(w.a,{padded:!0},r,Object(a.b)(O,{relativePagePath:b})),Object(a.b)(g.a,{pageContext:t,location:i,slug:v,tabs:d,currentTab:x}),Object(a.b)(o.a,null))}}}]);
//# sourceMappingURL=component---src-pages-guides-fhir-search-configuration-md-d16b280f1087420b6cb7.js.map