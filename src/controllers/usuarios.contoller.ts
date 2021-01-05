import { Request, Response } from 'express'
import pool from '../database'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import config from '../config'

const registrarUsuario = async(req:Request, res:Response):Promise<any>=>{
    const {nombre_usuario,correo}=req.body
    const contrasenia = await encriptarContrasenia(req.body.contrasenia)
    const respuesta= await pool.query('select ft_mant_insert_usuario($1, $2, $3)',[nombre_usuario,correo,contrasenia])
    console.log(respuesta)
    return res.json({respuesta: respuesta.rows[0].ft_mant_insert_usuario})
}

const iniciarSesion = async(req:Request, res:Response)=>{
    const {correo,contrasenia}=req.body
    const respuesta=await pool.query('select * from ft_view_usuario($1)',[correo])
    if(!respuesta.rows[0]){
        return res.json({mensaje: "No se encontro el correo"})
    }
    console.log(respuesta.rows[0].contrasenia)
    const contraseniaValida= await validarContrasenia(contrasenia,respuesta.rows[0].contrasenia)
    console.log(contraseniaValida)
    if(!contraseniaValida){
        return res.json({mensaje: "contrasenia incorrecta"})
    }

    const token = await obtenerToken(respuesta.rows[0].correo)
    res.json({mensaje: "Sesion iniciada", token})
}


//ENCRIPTAR CONTRASENIA
const encriptarContrasenia = async(contresenia:string):Promise<string>=>{
    const salt= await bcrypt.genSalt(10)
    return await bcrypt.hash(contresenia,salt)
}

//VALIDAR CONTRASENIA ENVIADA POR EL USUARIO Y LA ENCRIPTADA QUE VIENE DE LA BASE DE DATOS
const validarContrasenia= async(contrasenia:string, contraseniaEncriptada:string):Promise<boolean>=>{
   return await bcrypt.compare(contrasenia,contraseniaEncriptada)
}

//OBTENER TOKEN
const obtenerToken = async(correo:string):Promise<string>=>{
    return await jwt.sign({correo},config.SECRET_JWT,{expiresIn:30} )
}

export default {
    registrarUsuario,
    iniciarSesion
}