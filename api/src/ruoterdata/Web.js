const express = require('express');
const router = express.Router();
const { filt,remove,froda,update} = require('../db/mongo.js')

router.get('/', async (req, res) => {
    console.log('-----web')
    res.send({ data: await filt({
        dbteb:'dataWeb'
    }, req.query), code: 200 })
})


router.post('/set', async (req, res) => {
    console.log('修改 web类数据')
    // froda(req.body)
    let dt=froda(req.body)
    if(dt.id){
        let data = await update({
            dbteb:'dataWeb'
        },dt)
        if(data.result.ok*1){
            res.send({code:200,msg:'修改成功',res:true})
        }else{
            res.send({code:200,msg:'修改失败',res:false})
        }
    }else{
        res.send({code:401,msg:'格式错误'})
    }
    console.log(data.result)

})

router.post('/remove',async (req,res)=>{
console.log('删除 web类数据')
let dt=froda(req.body)
let data = await remove({
    dbteb:'dataWeb'
},dt)
if(data.result.ok*1){
    res.send({code:200,msg:'删除成功',res:true})
}else{
    res.send({code:200,msg:'删除失败',res:false})
}
// console.log(data)

})

module.exports=router