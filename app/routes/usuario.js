const express = require('express');
const Usuario = require('../models/Usuario');
const {getusuarios, getusuario, createusuario, updateusuario, deleteusuario} = require('../controller/usuarioc')
const checkOrigin = require('../middleware/origin')
const {validateCreate} =require ('../validators/usuario')

const rutas = express.Router()

rutas.get('/', getusuarios)

rutas.get('/:id', getusuario)

rutas.post('/',createusuario)

rutas.put('/:id', updateusuario)

rutas.delete('/:id', deleteusuario)


module.exports = rutas