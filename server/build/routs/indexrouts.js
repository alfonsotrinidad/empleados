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
        this.router.get('/', indexcontroller_1.indexController.list);
        this.router.get('/:id', indexcontroller_1.indexController.getone);
        this.router.post('/', indexcontroller_1.indexController.create);
        this.router.delete('/:id', indexcontroller_1.indexController.delete);
        this.router.put('/:id', indexcontroller_1.indexController.update);
    }
}
const indexroutes = new Indexrouts();
exports.default = indexroutes.router;
