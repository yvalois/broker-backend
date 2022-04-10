const httpError = (res, err)=>{
    console.log(err)
    res.status(500)
    res.send({error:'algo esta mal'})
}

module.exports= {httpError}