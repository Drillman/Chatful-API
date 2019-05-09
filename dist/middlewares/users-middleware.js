"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userId = function (req, res, next) {
    console.log(req.params);
    next();
};
exports.default = userId;
