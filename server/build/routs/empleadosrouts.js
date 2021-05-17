"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const empleadosController_1 = require("../controllers/empleadosController");
class empleadosRouts {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', empleadosController_1.empleadoController.index);
    }
}
const empleadosrouts = new empleadosRouts();
exports.default = empleadosrouts.router;
