const {check} = require('express-validator')
const {validateResult}= require('../helpers/validateHelpers')
const modelusuario =require('../models/Usuario')
const validateCreate=[
        check('nombre')
            .exists()
            .not()
            .isEmpty()
            .withMessage('Por favor complete este campo')
            .isLength( { min:8 } )
            .withMessage('El nombre debe contener minimo 8 caracteres')
            .custom((value, {req})=>{
                const onlilet=/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g.test(value)
                if(!onlilet){
                throw new Error('solo se permiten letras')}
                return true
            }),
        check('email')
            .exists()
            .not()
            .isEmpty()
            .withMessage('Por favor complete este campo')   
            .isEmail()
            .withMessage('Por favor introduzca un email valido')
            .custom((value, {req})=>{
                const validar =async()=>{
                let email_bd=await modelusuario.findOne({email: value})
            return email_bd}
                if(validar){
                    throw new Error('email ya existe')}
                    return true
                
            }),
        check('usuario')
            .exists()
            .not()
            .isEmpty()
            .withMessage('Por favor complete este campo')
            .isLength( { min: 3 } )
            .withMessage('minimo 3 caracteres')
            .custom((value, {req})=>{
                const validaru =async()=>{
                let usuario_bd=await modelusuario.findOne({usuario: value})
            return usuario_bd}
                if(validaru){
                    throw new Error('usuario ya existe')}
                    return true
                
            }),
        check('telefono')
            .exists()
            .not()
            .isEmpty()
            .withMessage('Por favor complete este campo')   
            .isNumeric()
            .withMessage('No se permiten letras')
            .isLength( { min:10 } )
            .withMessage('El telefono debe contener minimo 10 caracteres')
            .custom((value, {req})=>{
                const validart =async()=>{
                let telefono_bd=await modelusuario.findOne({telefono: value})
            return telefono_bd}
                if(validart){
                    throw new Error('telefono ya existe')}
                    return true
                
            })

            /*.custom((value, {req}) =>{
                if (value < 18){
                    throw new Error('debes ser mayor de edad')
                }
                return true
            })*/,
            (req, res, next)=>{
                validateResult(req, res, next)
            }
]



const Updateusuario=[
check('fechan')
.exists()
.not()
.isEmpty()
.withMessage('Este campo no puede estar vacio')
.isDate()
.withMessage('Fecha invalidad')
.custom((value, {req})=>{
    const fecha_actual=new Date();
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
    if(edadf<18){
    throw new Error('No se aceptan menores de edad')
}
    return true
}),


check('numeroid')
.exists()
.not()
.isEmpty()
.withMessage('Este campo no puede estar vacio')
.isNumeric()
.withMessage('Solo se permiten letras')
.isLength({min:8})
.withMessage('Minimo 8 caracteres')
.custom((value, {req})=>{
    const validarid =async()=>{
    let numeroid_bd=await modelusuario.findOne({numeroid: value})
return numeroid_bd}
    if(validarid){
        throw new Error('esta identificacion ya esta registrada')}
        return true
    
}),


check('contraseña')
.exists()
.not()
.isEmpty()
.isStrongPassword({minLength: 8})
.withMessage('La contraseña debe tener minimo 8 caracteres')
.isStrongPassword({minUppercase: 1})
.withMessage('La contraseña debe tener minimo 1 Mayuscula')
.isStrongPassword({minSymbols: 1})
.withMessage('La contraseña debe tener minimo 1 simbolo')
.isStrongPassword({minLowercase: 1})
.withMessage('La contraseña debe tener minimo 1 minuscula')
.isStrongPassword({minNumbers: 1})
.withMessage('La contraseña debe tener minimo 1 numero'),


check('genero')
.exists()
.not()
.isEmpty()
.withMessage('Este campo no puede estar vacio')
.custom((value, {req})=>{
    const genero = value.toUpperCase();
    if(genero!="HOMBRE" && genero!="MUJER"){
    throw new Error('Dato invalido')}
    return true
}),

check('pais')
.exists()
.not()
.isEmpty()
.withMessage('Este campo no puede estar vacio')
//custom
,
check('domicilio')
.exists()
.not()
.isEmpty()
.withMessage('Este campo no puede estar vacio'),


check('codigop')
.exists()
.not()
.isEmpty()
.withMessage('Este campo no puede estar vacio'),





(req, res, next)=>{
    validateResult(req, res, next)
}

]

module.exports = {validateCreate, Updateusuario}