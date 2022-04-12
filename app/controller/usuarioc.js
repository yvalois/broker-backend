const express=require('express');
const rutas =express.Router();
const {httpError}= require('../helpers/handleError')
const bcrypt = require('bcrypt')
const modelusuario =require('../models/Usuario')
const transporter =require('../../config/mailer')


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
    try{
      await transporter.sendMail({
      from: '"update user 👻" <yeison.david.valois@gmail.com>', // sender address
      to: req.body.email, // list of receivers
      subject: "crear usuario", // Subject line
      text: "usuario creado correctamente", // plain text body
    })
  
  }
  catch(error){
  emailStatus = error;
  return res.status(400).json({mesage:'algo anda mal'})
  }}

    catch(e){
            httpError(res, e)
    }
  }

const updateusuario = async(req, res)=> {
  try{
    let id = req.params.id


    let salt = await bcrypt.genSalt(10)
    let password = await bcrypt.hash(req.body.contraseña, salt)




    const fecha_actual=new Date();
    let value= req.body.fechan
    const año=parseInt(fecha_actual.getFullYear());
    const mes=parseInt(fecha_actual.getMonth);
    const dia=parseInt(fecha_actual.getDay());

    const añon=parseInt(String(value).substring(0,4));
    const mesn=parseInt(String(value).substring(5,7));
    const dian=parseInt(String(value).substring(8,10));

  let edadf = año-añon

    if(mes<mesn){
      edadf--;
      }
    else if(mes==mesn){
      if(dia<dian){
        edadf--;
      }
    }



  const usuario = await modelusuario.findOne({_id:id})
    usuario.fechan=req.body.fechan
    usuario.numeroid=req.body.numeroid
    usuario.contraseña=password
    usuario.genero=req.body.genero
    usuario.pais=req.body.pais
    usuario.edad=edadf
    usuario.domicilio=req.body.domicilio
    usuario.codigop=req.body.codigop


  await usuario.save()

  res.json({mensaje: "Usuario actualizado correctamente correctamente"})


  }
  catch(e){
          httpError(res, e)
  }
}


const deleteusuario = (req, res)=> {
    
}

module.exports={getusuarios,getusuario, createusuario, updateusuario, deleteusuario}