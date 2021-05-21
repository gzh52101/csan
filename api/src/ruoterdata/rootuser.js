const { filt,remove,froda } = require('../db/mongo.js')
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

router.get('/inseuser',async (req,res)=>{
    console.log('查询所有用户  '+new Date())
    let da= await filt({
        dbteb:"user"
    })
    res.send({code:200,msg:'查询成功',res:true,data:da})
})

router.post('/removeuser',async (req,res)=>{
    console.log('删除用户  '+new Date())
    let us=froda(req.body)
    let da= await remove({
        dbteb:"user"
    },us)

    if (da.result.ok * 1) {
        res.send({ code: 200, msg: '删除成功', res: true })
    } else {
        res.send({ code: 200, msg: '删除失败', res: false })
    }

})
module.exports=router