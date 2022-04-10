require("dotenv").config();
const express = require("express");
const cors= require("cors");

const { body, validationResult } = require('express-validator');
const Usuario = require('./app/models/Usuario');

const app = express();
app.use(cors())
const puerto = process.env.PORT || 8000 ;

const rutas = require("./app/routes");


app.use(express.json())
app.use("/api", rutas);
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))







app.listen(puerto, () => {
  console.log(`Servidor listo para su uso. puerto:${puerto}`);
});