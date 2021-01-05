"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarProducto = exports.actualizarProducto = exports.insertarProducto = exports.obtenerUnProducto = exports.obtenerProductos = void 0;
const obtenerProductos = (req, res) => {
    res.json({ mensaje: "Obteniendo productos" });
};
exports.obtenerProductos = obtenerProductos;
const obtenerUnProducto = (req, res) => {
    res.json({ mensaje: "Obteniendo producto " + req.params.id_producto });
};
exports.obtenerUnProducto = obtenerUnProducto;
const insertarProducto = (req, res) => {
    res.json({ mensaje: "Insertando producto" });
};
exports.insertarProducto = insertarProducto;
const actualizarProducto = (req, res) => {
    res.json({ mensaje: "Actualizando producto " + req.params.id_producto });
};
exports.actualizarProducto = actualizarProducto;
const eliminarProducto = (req, res) => {
    res.json({ mensaje: "Eliminando producto " + req.params.id_producto });
};
exports.eliminarProducto = eliminarProducto;
