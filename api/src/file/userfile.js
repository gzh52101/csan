const express = require('express');
const multer = require('multer')
const fs = require('fs')
const path = require('path');
const router = express.Router();
const {update} =require('../db/mongo.js')

// const app = express();
// app.use(express.urlencoded({ extended: false }));
let fname=''
let storage = multer.diskStorage({
    // 上传文件保存目录，无则自动创建
    destination: './public/userImg',
    // 格式化文件名
    filename:async function (req, file, cb) {
        console.log(req.query, '---------2');
        
        // fname= req.query
        // fname =fname[0]
        // await update({
        //     dbteb:'user'
        // },{
        //     id:req.query.id,
        //     set:{userimg}
        // })
            let ext = path.extname(file.originalname);

            cb(null, req.query.username + ext);
        // 获取文件后缀名
    }
})

// 设置文件保存目录
let upload = multer({ storage })

router.post('/',(req,res,n)=>{
    console.log(req.query,'00---')

    if('username' in req.query){
        
        n()
    }else{
        res.send({msg:'参数错误'})
    }
    
},upload.single('fl'),async (req,res)=>{
    await 
    console.log(fname)
    res.send({code:200,msg:'修改成功',res:true})
})

module.exports = router