"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const registrarUsuario = (req, res) => {
    res.json({ mensaje: "Registrando usuario" });
};
const iniciarSesion = (req, res) => {
    res.json({ mensaje: "Iniciando sesion" });
};
exports.default = {
    registrarUsuario,
    iniciarSesion
};
