import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
import config from '../config'

 const validarToken = async(req:Request,res:Response,next:NextFunction)=>{
    const token = req.header('token')  
    if(!token)
        return res.json("No se ha proveido un token")

    try {
        const decoded=  jwt.verify(token,config.SECRET_JWT)
        console.log(decoded)
    } catch (error) {
        return res.json("Token invalido")
    }

    next()
}



export default validarToken