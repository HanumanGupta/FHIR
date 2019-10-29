(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{381:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return l}),n.d(t,"default",function(){return c});n(10),n(5),n(6),n(3),n(8),n(2),n(1);var a=n(104),r=n(393);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l={},s={_frontmatter:l},o=r.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(o,i({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("img",{src:"https://ibm.github.io/FHIR/images/piOnFhir30.jpg",alt:"IBM FHIR Server on Raspberry Pi 4"}),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("p",null,"This installation is for curiosity only and should not be used with PHI, only synthetic test data. Production instances require additional hardening which is outside the scope of this guide. "),Object(a.b)("p",null,"The default password used throughout is ",Object(a.b)("inlineCode",{parentName:"p"},"change-password")," and this is configured as clear-text in the configuration files to make it even more obvious that it should be changed as part of any hardening. Refer to the ",Object(a.b)("a",i({parentName:"p"},{href:"https://ibm.github.io/FHIR/guides/FHIRSearchConfiguration"}),"FHIRServerUsersGuide")," for more details."),Object(a.b)("h2",{id:"introduction"},"Introduction"),Object(a.b)("p",null,"The IBM FHIR Server runs as a web application in the Open Liberty application server. By default persistence is provided with a Derby database, but it can also be configured to use IBM Db2 on Cloud. This example shall use the default Derby instance."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",i({parentName:"tr"},{align:null}),"Component"),Object(a.b)("th",i({parentName:"tr"},{align:null}),"Details"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"Hardware"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Raspberry Pi 4")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"Memory"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"4GB")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"OS"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Raspbian (Buster)")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"Storage"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"64GB microSD")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"Java"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"openjdk11")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"Apache Maven"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"3.6.1")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"Application Server"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Open Liberty 19.0.0.8")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"HTTPS Port"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"9443")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"Default user"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"fhiruser")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"Default password"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"change-password")))),Object(a.b)("p",null,"Set up your Raspberry Pi 4 (4GB model) using Raspbian (",Object(a.b)("a",i({parentName:"p"},{href:"https://www.raspberrypi.org/downloads/"}),"https://www.raspberrypi.org/downloads/"),")."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"TIP: Under load, the Raspberry Pi 4 CPU throttles when it reaches a critical temperature, so a case with cooling is recommended. Without naming products, an aluminum case which acts as a heat sink could be a good choice. The CPU definitely throttles during the build using the official (plastic) Raspberry Pi 4 case.")),Object(a.b)("h2",{id:"development-environment-and-prerequisites"},"Development Environment and Prerequisites"),Object(a.b)("p",null,"To build we need three things:\n1. openjdk11 (already available)\n2. Apache Maven\n3. Access to the internet (for Maven dependencies)"),Object(a.b)("h3",{id:"install-maven"},"Install Maven"),Object(a.b)("p",null,"You can use apt-get to install Apache Maven but if you want to avoid all the dependencies which come along with it, just grab the binary release and unpack it"),Object(a.b)("p",null,"OPTION A:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"sudo apt-get install maven\n")),Object(a.b)("p",null,"OPTION B:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"wget https://www-us.apache.org/dist/maven/maven-3/3.6.1/binaries/apache-maven-3.6.1-bin.tar.gz -P /tmp\nsudo mkdir -p /opt/tools && cd /opt/tools && tar xzvf /tmp/apache-maven-3.6.1-bin.tar.gz\n")),Object(a.b)("p",null,"If installing Maven manually, add it to your PATH:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),'# Add Maven to PATH\nexport PATH="/opt/tools/apache-maven-3.6.1/bin:${PATH}"\n')),Object(a.b)("h3",{id:"check"},"Check"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),'pi@raspberrypi:~/git/FHIR $ mvn -version\nApache Maven 3.6.1 (d66c9c0b3152b2e69ee9bac180bb8fcc8e6af555; 2019-04-04T15:00:29-04:00)\nMaven home: /opt/tools/apache-maven-3.6.1\nJava version: 11.0.3, vendor: Raspbian, runtime: /usr/lib/jvm/java-11-openjdk-armhf\nDefault locale: en_US, platform encoding: UTF-8\nOS name: "linux", version: "4.19.66-v7l+", arch: "arm", family: "unix"\n')),Object(a.b)("h2",{id:"environment"},"Environment"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",i({parentName:"tr"},{align:null}),"Component"),Object(a.b)("th",i({parentName:"tr"},{align:null}),"Details"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"Liberty Home"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"/opt/ibm/fhir-server/wlp")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"JAVA_HOME"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"/usr/lib/jvm/java-11-openjdk-armhf")))),Object(a.b)("h2",{id:"building"},"Building"),Object(a.b)("p",null,"Set up your development environment and clone the repository: "),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"mkdir -p ~/git && cd ~/git && git clone https://github.com/IBM/FHIR.git\n")),Object(a.b)("p",null,"Now you should be ready to build:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"cd ~/git/FHIR\nmvn clean install -f fhir-parent/pom.xml\n")),Object(a.b)("p",null,"Be patient. A lot of unit tests are executed, including processing a number of the FHIR specification examples in various contexts which is fairly CPU intensive. Unit tests in the fhir-persistence-jdbc project use a functional schema deployed in a Derby database, exercising the bulk of the persistence code except for the REST layer."),Object(a.b)("p",null,"Some exceptions from negative tests may appear in the build log. As long as the build completes, these shouldn’t be a concern. Success should look like this:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"[INFO] Reactor Summary for IBM FHIR Server FHIR 4.0.0-SNAPSHOT:\n[INFO] \n[INFO] IBM FHIR Server ...................... SUCCESS [  8.537 s]\n[INFO] fhir-core .......................................... SUCCESS [  7.478 s]\n[INFO] fhir-task-api ...................................... SUCCESS [  0.583 s]\n[INFO] fhir-task-core ..................................... SUCCESS [  9.217 s]\n[INFO] fhir-database-utils ................................ SUCCESS [ 16.877 s]\n[INFO] fhir-config ........................................ SUCCESS [ 12.278 s]\n[INFO] fhir-audit ......................................... SUCCESS [ 13.421 s]\n[INFO] fhir-model ......................................... SUCCESS [03:32 min]\n[INFO] fhir-conformance ................................... SUCCESS [ 39.934 s]\n[INFO] fhir-ig-us-core .................................... SUCCESS [ 23.337 s]\n[INFO] fhir-search ........................................ SUCCESS [01:16 min]\n[INFO] fhir-persistence ................................... SUCCESS [ 38.613 s]\n[INFO] fhir-replication-api ............................... SUCCESS [ 11.191 s]\n[INFO] fhir-persistence-proxy ............................. SUCCESS [ 28.315 s]\n[INFO] fhir-persistence-schema ............................ SUCCESS [04:44 min]\n[INFO] fhir-persistence-jdbc .............................. SUCCESS [16:34 min]\n[INFO] fhir-provider ...................................... SUCCESS [  9.223 s]\n[INFO] fhir-operation ..................................... SUCCESS [ 26.337 s]\n[INFO] fhir-operation-validate ............................ SUCCESS [  1.065 s]\n[INFO] fhir-operation-document ............................ SUCCESS [  1.074 s]\n[INFO] fhir-operation-healthcheck ......................... SUCCESS [  0.547 s]\n[INFO] fhir-client ........................................ SUCCESS [ 12.460 s]\n[INFO] fhir-cli ........................................... SUCCESS [ 12.682 s]\n[INFO] fhir-notification .................................. SUCCESS [  0.971 s]\n[INFO] fhir-notification-kafka ............................ SUCCESS [  0.769 s]\n[INFO] fhir-notification-websocket ........................ SUCCESS [  0.931 s]\n[INFO] FHIR Server REST API Implementation ................ SUCCESS [ 36.295 s]\n[INFO] FHIR Server REST API WebApp ........................ SUCCESS [ 11.151 s]\n[INFO] fhir-server-test ................................... SUCCESS [  6.484 s]\n[INFO] fhir-swagger-generator ............................. SUCCESS [  5.121 s]\n[INFO] fhir-openapi ....................................... SUCCESS [  0.739 s]\n[INFO] fhir-install ....................................... SUCCESS [ 59.261 s]\n[INFO] fhir-coverage-reports .............................. SUCCESS [ 43.491 s]\n[INFO] ------------------------------------------------------------------------\n[INFO] BUILD SUCCESS\n[INFO] ------------------------------------------------------------------------\n[INFO] Total time:  33:28 min\n[INFO] Finished at: 2019-09-11T19:23:06-04:00\n[INFO] ------------------------------------------------------------------------\n")),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)("p",null,"The above build creates an installable artifact:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"~/git/FHIR/fhir-install/target/fhir-server-distribution.zip\n")),Object(a.b)("p",null,"Unpack the archive into a working directory:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"mkdir -p ~/unpack && cd ~/unpack && unzip ~/git/FHIR/fhir-install/target/fhir-server-distribution.zip\n")),Object(a.b)("p",null,"Decide where you want to install. As this isn’t a production server, installing it under the pi user is convenient."),Object(a.b)("p",null,"mkdir -p ~/runtime/fhir-server && sh ~/unpack/fhir-server-dist/install.sh ~/runtime/fhir-server "),Object(a.b)("p",null,"Check that the Liberty runtime was installed correctly:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"~/runtime/fhir-server/wlp/bin/server status fhir-server\n\nServer fhir-server is not running.\n")),Object(a.b)("p",null,"The default configuration uses a 4GB heap size which is too large for the Pi. Edit the jvm.options file and reduce the memory footprint using -Xmx1024M and -Xms1024M:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"pi@raspberrypi:~ $ vi ~/runtime/fhir-server/wlp/usr/servers/fhir-server/jvm.options \n...\ngrep -- -Xm ~/runtime/fhir-server/wlp/usr/servers/fhir-server/jvm.options\n-Xms1024M\n-Xmx1024M\n")),Object(a.b)("p",null,"Start the server (the first startup takes some time):"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"~/runtime/fhir-server/wlp/bin/server start fhir-server\n\nStarting server fhir-server.\nServer fhir-server started with process ID 1234.\n")),Object(a.b)("h2",{id:"smoke-test"},"Smoke Test"),Object(a.b)("p",null,"Run a basic connectivity check. This is a primitive check to ensure that the application server is accessible and that the FHIR web application is running:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"sh ~/unpack/fhir-server-dist/fhirSmokeTest.sh localhost 9443\n\nChecking if server localhost is accessible on port 9443 ... OK!\nChecking FHIR server signature... OK!\nChecking FHIR API version... OK!\n\nSuccess! All checks passed.\n")),Object(a.b)("h2",{id:"clean-up"},"Clean up"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"rm -fr ~/unpack/fhir-server-dist\nrm -f /tmp/apache-maven-3.6.1-bin.tar.gz\n")),Object(a.b)("h2",{id:"create-a-patient-resource"},"Create a Patient Resource"),Object(a.b)("p",null,"Create a new patient resource using the following POST. The FHIR server will allocate a unique logical identifier (UUID):"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),'curl -k \\\n-H \'Content-Type: application/json\' \\\n-u \'fhiruser:change-password\' \'https://localhost:9443/fhir-server/api/v4/Patient\' -d \'\n{\n    "resourceType" : "Patient",\n    "active" : true,\n    "name" : [ {\n        "family" : "Ortiz",\n        "given" : [ "David" ]\n    } ],\n    "gender" : "male"\n}\n\'\n')),Object(a.b)("p",null,"The FHIR server should respond with a 201 Created status:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),'HTTP/2 201 \nlocation: https://localhost:9443/fhir-server/api/v4/Patient/041786ad-d6a1-42ea-bf47-4dd8eb08a5fc/_history/1\netag: W/"1"\nlast-modified: 2019-09-12T19:22:02.159503Z\ndate: Thu, 12 Sep 2019 19:22:05 GMT\ncontent-length: 0\ncontent-language: en-US\n')),Object(a.b)("p",null,"Use the ",Object(a.b)("inlineCode",{parentName:"p"},"location:")," value returned from ",Object(a.b)("strong",{parentName:"p"},"your")," POST to read back the resource:"),Object(a.b)("p",null,"Command (example):"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"curl --silent -k -H 'Accept: application/json' -u 'fhiruser:change-password' 'https://localhost:9443/fhir-server/api/v4/Patient/041786ad-d6a1-42ea-bf47-4dd8eb08a5fc' | python -m json.tool\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Remember to use the patient logical id returned as the location: header in your POST - if you try to use ",Object(a.b)("inlineCode",{parentName:"p"},"041786ad-d6a1-42ea-bf47-4dd8eb08a5fc")," the response status will be Not Found.")),Object(a.b)("p",null,"Output:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),'{\n    "active": true,\n    "gender": "male",\n    "id": "041786ad-d6a1-42ea-bf47-4dd8eb08a5fc",\n    "meta": {\n        "lastUpdated": "2019-09-12T19:22:02.159503Z",\n        "versionId": "1"\n    },\n    "name": [\n        {\n            "family": "Ortiz",\n            "given": [\n                "David"\n            ]\n        }\n    ],\n    "resourceType": "Patient"\n}\n')),Object(a.b)("p",null,"Now we can update the resource using a PUT (David => Dave). Again, it is important to use the logical ids from your example, not the values shown here. This includes the “id” field in the body, which should match the logical id of the URL:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),'curl -k -i \\\n-X PUT \\\n-H \'Content-Type: application/json\' \\\n-u \'fhiruser:change-password\' \'https://localhost:9443/fhir-server/api/v4/Patient/041786ad-d6a1-42ea-bf47-4dd8eb08a5fc\' -d \'\n{\n    "active": true,\n    "gender": "male",\n    "id": "041786ad-d6a1-42ea-bf47-4dd8eb08a5fc",\n    "meta": {\n        "lastUpdated": "2019-09-12T19:22:02.159503Z",\n        "versionId": "1"\n    },\n    "name": [\n        {\n            "family": "Ortiz",\n            "given": [\n                "Dave"\n            ]\n        }\n    ],\n    "resourceType": "Patient"\n}\n\'\n')),Object(a.b)("p",null,"Response:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),'HTTP/2 200 \nlocation: https://localhost:9443/fhir-server/api/v4/Patient/041786ad-d6a1-42ea-bf47-4dd8eb08a5fc/_history/2\netag: W/"2"\nlast-modified: 2019-09-12T19:46:24.656131Z\ndate: Thu, 12 Sep 2019 19:46:26 GMT\ncontent-length: 0\ncontent-language: en-US\n')),Object(a.b)("p",null,"Note the location: has now changed to indicate the new version is 2."),Object(a.b)("p",null,"Retrieve the latest version:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"curl --silent -k -H 'Accept: application/json' -u 'fhiruser:change-password' 'https://localhost:9443/fhir-server/api/v4/Patient/041786ad-d6a1-42ea-bf47-4dd8eb08a5fc' | python -m json.tool\n")),Object(a.b)("p",null,"Response:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),'curl --silent -k -H \'Accept: application/json\' -u \'fhiruser:change-password\' \'https://localhost:9443/fhir-server/api/v4/Patient/041786ad-d6a1-42ea-bf47-4dd8eb08a5fc\' | python -m json.tool\n{\n    "active": true,\n    "gender": "male",\n    "id": "041786ad-d6a1-42ea-bf47-4dd8eb08a5fc",\n    "meta": {\n        "lastUpdated": "2019-09-12T19:46:24.656131Z",\n        "versionId": "2"\n    },\n    "name": [\n        {\n            "family": "Ortiz",\n            "given": [\n                "Dave"\n            ]\n        }\n    ],\n    "resourceType": "Patient"\n}\n')),Object(a.b)("p",null,"Note that the given name is “Dave”."),Object(a.b)("p",null,"To see a previous version, perform a vread:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"curl --silent -k -H 'Accept: application/json' -u 'fhiruser:change-password' 'https://localhost:9443/fhir-server/api/v4/Patient/041786ad-d6a1-42ea-bf47-4dd8eb08a5fc/_history/1' | python -m json.tool\n")),Object(a.b)("p",null,"Response:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),'{\n    "active": true,\n    "gender": "male",\n    "id": "041786ad-d6a1-42ea-bf47-4dd8eb08a5fc",\n    "meta": {\n        "lastUpdated": "2019-09-12T19:22:02.159503Z",\n        "versionId": "1"\n    },\n    "name": [\n        {\n            "family": "Ortiz",\n            "given": [\n                "David"\n            ]\n        }\n    ],\n    "resourceType": "Patient"\n}\n')),Object(a.b)("p",null,"In version 1, we see that the given name is the original value of “David”."),Object(a.b)("p",null,"All the versions of the resource can be read using a history read operation:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"curl --silent -k -H 'Accept: application/json' -u 'fhiruser:change-password' 'https://localhost:9443/fhir-server/api/v4/Patient/041786ad-d6a1-42ea-bf47-4dd8eb08a5fc/_history' | python -m json.tool\n")),Object(a.b)("p",null,"The response is a FHIR bundle resource containing both versions of the Patient. Note the name change from David (version 1) to Dave (version 2):"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),'{\n    "entry": [\n        {\n            "fullUrl": "https://localhost:9443/fhir-server/api/v4/Patient/041786ad-d6a1-42ea-bf47-4dd8eb08a5fc",\n            "request": {\n                "method": "PUT",\n                "url": "Patient/041786ad-d6a1-42ea-bf47-4dd8eb08a5fc"\n            },\n            "resource": {\n                "active": true,\n                "gender": "male",\n                "id": "041786ad-d6a1-42ea-bf47-4dd8eb08a5fc",\n                "meta": {\n                    "lastUpdated": "2019-09-12T19:46:24.656131Z",\n                    "versionId": "2"\n                },\n                "name": [\n                    {\n                        "family": "Ortiz",\n                        "given": [\n                            "Dave"\n                        ]\n                    }\n                ],\n                "resourceType": "Patient"\n            },\n            "response": {\n                "status": "200"\n            }\n        },\n        {\n            "fullUrl": "https://localhost:9443/fhir-server/api/v4/Patient/041786ad-d6a1-42ea-bf47-4dd8eb08a5fc",\n            "request": {\n                "method": "POST",\n                "url": "Patient"\n            },\n            "resource": {\n                "active": true,\n                "gender": "male",\n                "id": "041786ad-d6a1-42ea-bf47-4dd8eb08a5fc",\n                "meta": {\n                    "lastUpdated": "2019-09-12T19:22:02.159503Z",\n                    "versionId": "1"\n                },\n                "name": [\n                    {\n                        "family": "Ortiz",\n                        "given": [\n                            "David"\n                        ]\n                    }\n                ],\n                "resourceType": "Patient"\n            },\n            "response": {\n                "status": "200"\n            }\n        }\n    ],\n    "id": "cecfa920-ead0-402a-9431-35b7e6c2a768",\n    "link": [\n        {\n            "relation": "self",\n            "url": "https://localhost:9443/fhir-server/api/v4/Patient/041786ad-d6a1-42ea-bf47-4dd8eb08a5fc/_history"\n        }\n    ],\n    "resourceType": "Bundle",\n    "total": 2,\n    "type": "history"\n}\n')),Object(a.b)("h3",{id:"end-of-document"},"END-OF-DOCUMENT"))}c.isMDXComponent=!0},391:function(e){e.exports={data:{site:{pathPrefix:"/FHIR"}}}},392:function(e){e.exports={data:{site:{siteMetadata:{repository:{baseUrl:"https://github.com/IBM/FHIR",subDirectory:"/docs"}}}}}},393:function(e,t,n){"use strict";n(34),n(23);var a=n(2),r=n(391),i=n(1),l=n.n(i),s=n(192),o=n(90),c=n.n(o),b=n(91),p=n(123),d=n(4),u=n.n(d),h=n(366),m=function(e){var t,n=e.children,r=e.title,i=e.tabs,l=void 0===i?[]:i,s=e.shouldHideHeader;return Object(a.b)("div",{className:u()((t={},t[h.pageHeader]=h.pageHeader,t[h.pageHeaderSticky]=l.length,t[h.pageHeaderShifted]=s,t))},Object(a.b)("div",{className:"bx--grid"},Object(a.b)("div",{className:"bx--row"},Object(a.b)("div",{className:"bx--col-lg-12"},Object(a.b)("h1",{id:"page-title",className:h.text},r)))),n)},O=n(392),f=n(367),j=function(e){var t=e.relativePagePath,n=e.repository,r=O.data.site.siteMetadata.repository,i=n||r,l=i.baseUrl,s=l+"/tree/master"+i.subDirectory+"/src/pages"+t;return l?Object(a.b)("div",{className:"bx--row "+f.row},Object(a.b)("div",{className:"bx--col"},Object(a.b)("a",{className:f.link,href:s},"Edit this page on GitHub"))):null},v=n(193),g=n(28),N=n(368);var S=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props,t=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],i=t.map(function(e){var t,i=c()(e,{lower:!0}),l=i===r,s=n.replace(r,i);return Object(a.b)("li",{key:e,className:u()((t={},t[N.selectedItem]=l,t),N.listItem)},Object(a.b)(g.Link,{className:N.link,to:""+s},e))});return Object(a.b)("div",{className:N.tabsContainer},Object(a.b)("div",{className:"bx--grid"},Object(a.b)("div",{className:"bx--row"},Object(a.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(a.b)("nav",null,Object(a.b)("ul",{className:N.list},i))))))},r}(l.a.Component),y=n(194);t.a=function(e){var t=e.pageContext,n=e.children,i=e.location,l=t.frontmatter,o=void 0===l?{}:l,d=t.relativePagePath,u=o.tabs,h=o.title,O=Object(b.c)(),f=!!u&&"down"===O,g=r.data.site.pathPrefix,N=g?i.pathname.replace(g,""):i.pathname,I=u?N.split("/").slice(-1)[0]||c()(u[0],{lower:!0}):"";return Object(a.b)(p.a,{shouldHideHeader:f,homepage:!1},Object(a.b)(m,{shouldHideHeader:f,title:h,label:"label",tabs:u},u&&Object(a.b)(S,{slug:N,tabs:u,currentTab:I})),Object(a.b)(y.a,{padded:!0},n,Object(a.b)(j,{relativePagePath:d})),Object(a.b)(v.a,{pageContext:t,location:i,slug:N,tabs:u,currentTab:I}),Object(a.b)(s.a,null))}}}]);
//# sourceMappingURL=component---src-pages-blog-raspberrypi-4-howto-mdx-ee5c3374881c3d57c9cf.js.map