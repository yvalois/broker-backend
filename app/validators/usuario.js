const {check} = require('express-validator')
const {validateResult}= require('../helpers/validateHelpers')

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
            .withMessage('Por favor introduzca un email valido'),
        check('usuario')
            .exists()
            .not()
            .isEmpty()
            .withMessage('Por favor complete este campo')
            .isLength( { min: 3 } )
            .withMessage('minimo 3 caracteres'),
        check('telefono')
            .exists()
            .not()
            .isEmpty()
            .withMessage('Por favor complete este campo')   
            .isNumeric()
            .withMessage('No se permiten letras')
            .isLength( { min:10 } )
            .withMessage('El telefono debe contener minimo 10 caracteres')
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

module.exports = {validateCreate}