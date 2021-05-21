const express = require('express');
const router = express.Router();
const { filt } = require('../db/mongo.js')
let dataAll=['data5g','dataJava','dataJoachern','dataPython','dataWeb']
router.get('/',async (req,res)=>{

    console.log('所有数据 _' +new Date())
    let data=[]
   
    // let aa= await filt({
    //     dbteb:"data5g"
    // })
    let aa
    for(let i=0;i<dataAll.length;i++){
        aa= await filt({
            dbteb:dataAll[i]
        },)
        data.push(aa)
        // data['d'+i]=dataAll[i]
    }

    res.send({ data: data, code: 200, msg: 'ok', res: true })

})

module.exports=router