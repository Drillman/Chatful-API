"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router_test_1 = require("./routers/router-test");
const user_routes_1 = require("./routers/user.routes");
const users_middleware_1 = require("./middlewares/users-middleware");
class Server {
    constructor(port) {
        this.port = port;
    }
    start() {
        const app = express();
        app.use('/:userId', users_middleware_1.default);
        app.use('/', router_test_1.default);
        app.use('/', user_routes_1.default);
        app.listen(this.port, () => {
            console.log(`Server is live on port -> ${this.port}`);
        });
    }
}
exports.default = Server;
