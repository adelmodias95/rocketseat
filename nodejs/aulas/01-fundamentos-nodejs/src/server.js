// CommonJS => require .... const http = require("http");
// ESModules => import/export .... import http from "http";

import http from "node:http";

const server = http.createServer((request, response) => {
    return response.end("Hello Ignite!");
});

server.listen(3333, () => {
    console.log("Server is running on port 3000");
});
