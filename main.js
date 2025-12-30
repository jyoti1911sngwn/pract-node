import {a, b} from './mymodules.js'
import abc from './mymodules.js'


// const a = require('./mymodules.js')
// const b = require('./mymodules.js')

console.log(a,b, abc)



// ❌ In ES Modules, these do NOT exist:
// __dirname
// __filename
// They are CommonJS-only globals.

// console.log(__dirname, __filename)

import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log( __filename);
console.log(__dirname);


// ❌ Browser cannot run Node APIs
// const { createServer } = require('node:http');
// import createServer from 'connect';
// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
