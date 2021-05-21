const { filt,inse,froda } = require('../db/mongo.js')
const express = require('express');
const router = express.Router();

let data={dbteb:'rootuser'}

router.post('/', async (req, res) => {
    let us=froda(req.body)
    console.log('管理员登录页面  '+new Date())
    if(us.username&&us.password){
        // console.log(us)
        // console.log(await filt(data, us))
        let da =await filt(data, us)
        res.send({ data:da , code: 200 })
    }else{
       res.send({code:401,msg:'格式错误',res:false})
    }
    // res.send({ data: da, code: 200 })
})

module.exports=router