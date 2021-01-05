"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const productos_routes_1 = __importDefault(require("./routes/productos.routes"));
const usuarios_routes_1 = __importDefault(require("./routes/usuarios.routes"));
const app = express_1.default();
//middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(morgan_1.default("dev"));
app.use(cors_1.default());
//rutas
app.get('/', (req, res) => {
    res.json({ mensaje: 'api de prueba' });
});
app.use("/api/productos", productos_routes_1.default);
app.use('/api/usuarios', usuarios_routes_1.default);
exports.default = app;
