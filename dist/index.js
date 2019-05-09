"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
let port = parseInt(process.env.PORT) || 3000;
console.log("The port fetch is -> ${port}");
const server = new server_1.default(port);
server.start();
