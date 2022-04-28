## 🤖 Modern Module 🌠

🤖 Modern Module is a zero-config starter template that allows you to create modern npm packages with support for both CommonJS modules (Node) and ES modules (browser + Node) out of the box providing no-hassle modern creating of modules. 🌠

<br>

By using it you are creating a hybrid-module and a cross-over until ES modules become a standard in Node too and CommonJS modules become obsolete. 🤸‍♂️

<br>

## Features

🌷&nbsp;&nbsp;Node support,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<sub>CommonJS modules and ES modules compatible</sub>

💫&nbsp;&nbsp;browser support¹ - ES modules compatible,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<sub>other module systems are available too</sub>

⚡&nbsp;&nbsp;zero-config,  

🔥&nbsp;&nbsp;JavaScript supported,  

☄️&nbsp;&nbsp;TypeScript supported,  

🌟&nbsp;&nbsp;modules interoperability,  

🌴&nbsp;&nbsp;tree-shaking supported,

🌊&nbsp;&nbsp;single codebase for you to mantain,  

🐦&nbsp;&nbsp;codebase written in ES modules style,  

🦜&nbsp;&nbsp;type-checked codebase,  

🐳&nbsp;&nbsp;TypeScript declarations (`*.d.ts`) exported by default,  

🦘&nbsp;&nbsp;transpilation supported.

<br>

¹ - if you don't use Node-specific code, of course.

<br>
<br>

🙋‍♂️ For compatibility reasons this starter uses .js file extension for the ES modules code and .cjs for CommonJS module code which in turn allows ES modules to be consumed by both Node and compatible browsers while also fixing a Node module lookup issue which currently occurs in Visual Studio Code and probably other Node-compatible editors/IDEs causing them to show an error when importing .mjs modules. CommonJS modules .cjs behave as expected. Also, TypeScript compiler doesn't support non-.js files when generating d.ts declaration files.

Another thing to consider, when consuming ES modules, (most) servers are not configured to serve `.mjs` files with a mime type of `application/javascript` which is necessary for JavaScript files (including modules) to work properly while the same does not happen when ES modules have the "regular" `.js` extension.
