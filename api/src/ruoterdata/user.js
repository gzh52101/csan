const express = require('express');
const router = express.Router();
// const login =require('./login')
// const reg =require('./reg')
const { filt,inse } = require('../db/mongo.js')

let data={dbteb:'user'}

//登录
router.post('/login', async (req, res) => {
    let d=Object.keys(req.body);
        d=JSON.parse(d[0]);
    res.send({ data: await filt(data, d), code: 200 })
})
//注册
router.post('/reg', async (req, res) => {
    let data= { data: await filt(data, req.query), code: 200 }
        await inse(data,req.body)
    res.send('0')
})
router.post('/check', async (req, res) => {

    let user=await filt(data, req.body)
    if(user.length>0){
        res.send({code: 200 ,msg:true})
    }else{
        res.send({code:200,msg:false})
    }
})
//查询用户是否存在

module.exports =router