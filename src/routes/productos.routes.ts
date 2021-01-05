import {Router} from 'express'
import {actualizarProducto, eliminarProducto, insertarProducto, obtenerProductos,obtenerUnProducto} from '../controllers/productos.controller'
import validarToken from '../middlewares/validarToken.middleware'

const router =Router()

router.get("/",validarToken,obtenerProductos)
router.get("/:id_producto",obtenerUnProducto)
router.post('/',insertarProducto)
router.put('/:id_producto',actualizarProducto)
router.delete('/:id_producto',eliminarProducto)

export default router