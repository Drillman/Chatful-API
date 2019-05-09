"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/', function (req, res) {
    res.send('coucou');
});
router.get('/test', function (req, res) {
    res.send('this is the test route');
});
exports.default = router;
