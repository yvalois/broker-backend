const express=require('express');
const rutas =express.Router();
const {httpError}= require('../helpers/handleError')
const modelusuario =require('../models/Usuario')

const getusuarios = (req, res)=> {
    res.send({ list:[1,2,33] })
}

const getusuario = (req, res)=> {
    
}

const createusuario = async (req, res)=> {
   
    try{
      let datos_usuario = req.body


    const usuario = new modelusuario(datos_usuario)
      usuario.nombre=req.body.nombre
      usuario.email=req.body.email
      usuario.telefono=req.body.telefono
      usuario.usuario=req.body.usuario

    await usuario.save()

    res.json({mensaje: "Usuario creado correctamente"})
    }
    catch(e){
            httpError(res, e)
    }}

const updateusuario = (req, res)=> {
    
}

const deleteusuario = (req, res)=> {
    
}

module.exports={getusuarios,getusuario, createusuario, updateusuario, deleteusuario}