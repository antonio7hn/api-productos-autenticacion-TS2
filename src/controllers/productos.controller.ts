import {Request,Response} from 'express'
import pool from '../database'

export const obtenerProductos = (req:Request, res:Response)=>{
    res.json({mensaje: "Obteniendo productos"})
}

export const obtenerUnProducto = (req:Request, res:Response)=>{
    res.json({mensaje: "Obteniendo producto " + req.params.id_producto})
}

export const insertarProducto = (req:Request, res:Response)=>{
    res.json({mensaje: "Insertando producto"})
}

export const actualizarProducto = (req:Request, res:Response)=>{
    res.json({mensaje: "Actualizando producto "+ req.params.id_producto})
}

export const eliminarProducto = (req:Request, res:Response)=>{
    res.json({mensaje: "Eliminando producto "+ req.params.id_producto})
}


