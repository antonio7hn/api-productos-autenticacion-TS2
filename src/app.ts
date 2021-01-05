import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import productosRoutes from './routes/productos.routes';
import usuariosRoutes from './routes/usuarios.routes'

const app = express();

//configuraciones
app.set('port',process.env.PORT || '3000')

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(morgan("dev"))
app.use(cors())

//rutas
app.get('/',(req,res)=>{
    res.json({mensaje:'api de prueba'})
})

app.use("/api/productos",productosRoutes)
app.use('/api/usuarios',usuariosRoutes)

export default app