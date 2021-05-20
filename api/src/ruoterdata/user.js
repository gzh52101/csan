const express = require('express');
const router = express.Router();
// const login =require('./login')
// const reg =require('./reg')
const { filt,inse,froda } = require('../db/mongo.js')

let data={dbteb:'user'}

//登录
router.post('/login', async (req, res) => {
    let us=froda(req.body)
    console.log('登录页面'+new Date())
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
//注册
router.post('/reg', async (req, res) => {
    console.log('注册页面'+new Date())
    // let data= { data: await filt(data, req.query), code: 200 }
    let us=froda(req.body)
         if(us.username&&us.password){
             await inse(data,us)
             res.send({code:200,msg:'注册成功',res:true})
         }else{
            res.send({code:401,msg:'格式错误',res:false})
         }
        
})
//查询用户是否存在
router.post('/check', async (req, res) => {
    console.log('查找用户'+new Date())
    let us=froda(req.body)
    let user=await filt(data, froda(req.body))
    if(us.username){
        if(user.length>0){
            res.send({code:200,msg:'用户已经存在',res:true})
        }else{
            res.send({code:200,msg:'用户不存在',res:false})
        }
        
    }else{
       res.send({code:401,msg:'格式错误'})
    }
})


module.exports =router