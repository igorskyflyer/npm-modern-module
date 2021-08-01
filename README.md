# 🤖 Modern Module 🌠

🤖 Modern Module is a zero-config starter template that allows you to create modern npm packages with support for both CommonJS (Node) and ESM (browser + Node) out of the box providing no-hassle modern creating of modules. 🌠

<br>

## Features

✅ Node support (CommonJS and ESM compatible),  
✅ browser support (ESM compatible),  
✅ single codebase for you to mantain,  
✅ codebase written in ESM style,  
✅ zero-config,  
✅ JavaScript supported,  
✅ TypeScript supported (WIP),  
✅ TypeScript declarations (`*.d.ts`) exported by default,  
✅ transpilation supported.

<br>
<br>

> 🙋‍♂️ For compatibility reasons this starter uses `.js` file extension for the ESM code and `.cjs` for CommonJS code which in turn allows ESM to be consumed by both Node and compatible browsers while also fixing Node module lookup issue which currently doesn't support `.mjs` modules import and occurs in Visual Studio Code and probably other Node-compatible editors/IDEs. CommonJS modules `.cjs` behave as expected. Also, TypeScript compiler doesn't support non-`.js` files when generating `d.ts` declaration files.
>
> Another thing to consider, when consuming the ESM, servers are not configured to serve `.mjs` files with a mime type of `application/javascript` which is necessary for JavaScript files (including modules) to work properly while the same does not happen when ESM have the "regular" `.js` extension.
