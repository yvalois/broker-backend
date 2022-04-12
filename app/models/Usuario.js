const mongoose = require('../../config/database')

const Schema = mongoose.Schema

const UsuarioSchema = new Schema({
    nombre: String,
    fechan: String,
    numeroid: Number,
    usuario: String,
    contraseña:String,
    email:String,
    genero:String,
    pais:String,
    telefono:Number,
    domicilio:String,
    codigop:String,
    edad: Number
})

const Usuario = mongoose.model('usuarios', UsuarioSchema)

module.exports = Usuario

/*
{
    "nombre":"david",
    "email":"david@gmail.com",
    "usuario":david21",
    "telefono":"3195855082",
    "fechan":"",
    "numeroid":"",
    "contraseña":"",
    "genero":"",
    "pais":"",
    "domicilio":"",
    "codigop":"",
    "edad":"",
}*/

/*
{   "fechan":"1998/07/21",
    "numeroid":1107061799,
    "contraseña":"D.avid12345",
    "genero":"hombre",
    "pais":"colombia",
    "domicilio":"micasa a la vuelta",
    "codigop":"1234567"
}
*/ 