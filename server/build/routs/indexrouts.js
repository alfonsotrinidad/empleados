"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexcontroller_1 = require("../controllers/indexcontroller");
class Indexrouts {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', indexcontroller_1.indexController.index);
    }
}
const indexroutes = new Indexrouts();
exports.default = indexroutes.router;