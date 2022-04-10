const {check} = require('express-validator')
const {validateResult}=require('../helpers/validateHelpers')

const validateCreate=[
check('nombre')
    .exists()
    .not()
    .isEmpty()
    .not()
    .isNumeric,
check('email')
    .exists()
    .not()
    .isEmpty()
    .isEmail,
check('usuario')
    .exists()
    .not()
    .isEmpty(),
check('telefono')
    .exists()
    .not()
    .isEmpty()
    .isNumeric,
    (req, res, next)=>{
        validateResult(req, res, next)
    }
]

module.exports = {validateCreate}