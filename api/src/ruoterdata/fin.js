const express = require('express');
const router = express.Router();
const {fisor,froda}=require('../db/mongo.js')
router.post('/', async (req,res)=>{
    
    let da=froda(req.body)
    console.log(req)
    let data= await fisor({
        dbteb:da.dbteb
    })
    if('init' in da){
        da.init=0
    }
    if('den' in da){
        da.end=10
    }
    let fis=data.splice(da.init,da.end)
    res.send(fis)
})

module.exports=router