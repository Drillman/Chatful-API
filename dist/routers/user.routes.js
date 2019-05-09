"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/user/register', function (req, res) {
    const result = {
        "messages": [
            { "text": "You are registered, to complete the process please check your inbox to define your password. :)" },
        ]
    };
    res.send(result);
});
exports.default = router;
