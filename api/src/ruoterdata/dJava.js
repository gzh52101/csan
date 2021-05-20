const express = require('express');
const router = express.Router();
const { filt, remove, froda, update, inse } = require('../db/mongo.js')

router.get('/', async (req, res) => {
    console.log("/ Java " + new Date())
    res.send({
        data: await filt({
            dbteb: 'dataJava'
        }, req.query), code: 200
    })
})

router.post('/set', async (req, res) => {
    console.log('修改 Java类数据 ' + new Date())
    // froda(req.body)
    let dt = froda(req.body)
    if (dt.id) {
        let data = await update({
            dbteb: 'dataJava'
        }, dt)
        if (data.result.ok * 1) {
            res.send({ code: 200, msg: '修改成功', res: true })
        } else {
            res.send({ code: 200, msg: '修改失败', res: false })
        }
    } else {
        res.send({ code: 401, msg: '格式错误' })
    }
    // console.log(data.result)

})

router.post('/remove', async (req, res) => {
    console.log('删除 Java类数据' + new Date())
    let dt = froda(req.body)
    let data = await remove({
        dbteb: 'dataJava'
    }, dt)
    if (data.result.ok * 1) {
        res.send({ code: 200, msg: '删除成功', res: true })
    } else {
        res.send({ code: 200, msg: '删除失败', res: false })
    }
    // console.log(data)

})

router.post('/inse',async (req, res) => {
    console.log('增加 Java类数据' + new Date())
    let dt = froda(req.body)
    let data=await inse({
        dbteb: 'dataJava'
    }, dt)
    res.send({data:data.ops,code:200,res:true})
})

module.exports = router