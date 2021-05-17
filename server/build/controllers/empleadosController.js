"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.empleadoController = void 0;
//base de datos
const database_1 = __importDefault(require("../database"));
class EmpleadoController {
    index(req, res) {
        const x = database_1.default.query('DESCRIBE empleados');
        res.send(x);
    }
}
exports.empleadoController = new EmpleadoController();
