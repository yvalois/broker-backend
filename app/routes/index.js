const express = require('express')
const rutas= express.Router()
const fs= require('fs')

const pathRouter=`${__dirname}`

const removeextension =(fileName)=>{
    return fileName.split('.').shift()
}

fs.readdirSync(pathRouter).filter((file)=>{
    const filewhitouextension = removeextension(file)
    const skip =['index'].includes(filewhitouextension)
    if(!skip){
        rutas.use(`/${filewhitouextension}`, require(`./${filewhitouextension}`))//localhost:8000/usuario/
        console.log('cargar ruta--->', removeextension(file))
    }
})

rutas.get('*', (req, res)=>{
    res.status(404)
    res.send({error: 'not found'})
})

module.exports= rutas