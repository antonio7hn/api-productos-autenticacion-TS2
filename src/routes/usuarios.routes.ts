import {Router} from 'express'
import usuariosCtrl from '../controllers/usuarios.contoller'

const router = Router()

router.post('/logup', usuariosCtrl.registrarUsuario)
router.post('/login', usuariosCtrl.iniciarSesion)

export default router