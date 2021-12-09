"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[327],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98722:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],c={title:"Syncing to Metastore",keywords:["hudi","hive","sync"]},s=void 0,u={unversionedId:"syncing_metastore",id:"syncing_metastore",isDocsHomePage:!1,title:"Syncing to Metastore",description:"Syncing to Hive",source:"@site/docs/syncing_metastore.md",sourceDirName:".",slug:"/syncing_metastore",permalink:"/cn/docs/next/syncing_metastore",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/docs/docs/syncing_metastore.md",version:"current",frontMatter:{title:"Syncing to Metastore",keywords:["hudi","hive","sync"]},sidebar:"docs",previous:{title:"\u67e5\u8be2 Hudi \u6570\u636e\u96c6",permalink:"/cn/docs/next/querying_data"},next:{title:"Migration Guide",permalink:"/cn/docs/next/migration_guide"}},l=[{value:"Syncing to Hive",id:"syncing-to-hive",children:[]}],p={toc:l};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"syncing-to-hive"},"Syncing to Hive"),(0,o.kt)("p",null,"Writing data with ",(0,o.kt)("a",{parentName:"p",href:"/docs/writing_data"},"DataSource")," writer or ",(0,o.kt)("a",{parentName:"p",href:"/docs/hoodie_deltastreamer"},"HoodieDeltaStreamer")," supports syncing of the table's latest schema to Hive metastore, such that queries can pick up new columns and partitions.\nIn case, it's preferable to run this from commandline or in an independent jvm, Hudi provides a ",(0,o.kt)("inlineCode",{parentName:"p"},"HiveSyncTool"),", which can be invoked as below,\nonce you have built the hudi-hive module. Following is how we sync the above Datasource Writer written table to Hive metastore."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"cd hudi-hive\n./run_sync_tool.sh  --jdbc-url jdbc:hive2:\\/\\/hiveserver:10000 --user hive --pass hive --partitioned-by partition --base-path <basePath> --database default --table <tableName>\n")),(0,o.kt)("p",null,"Starting with Hudi 0.5.1 version read optimized version of merge-on-read tables are suffixed '_ro' by default. For backwards compatibility with older Hudi versions, an optional HiveSyncConfig - ",(0,o.kt)("inlineCode",{parentName:"p"},"--skip-ro-suffix"),", has been provided to turn off '_ro' suffixing if desired. Explore other hive sync options using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"cd hudi-hive\n./run_sync_tool.sh\n [hudi-hive]$ ./run_sync_tool.sh --help\n")))}d.isMDXComponent=!0}}]);