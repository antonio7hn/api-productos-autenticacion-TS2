"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_contoller_1 = __importDefault(require("../controllers/usuarios.contoller"));
const router = express_1.Router();
router.post('/logup', usuarios_contoller_1.default.registrarUsuario);
router.post('/login', usuarios_contoller_1.default.iniciarSesion);
exports.default = router;
