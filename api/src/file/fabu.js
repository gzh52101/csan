const express = require('express');
const multer = require('multer')
const fs = require('fs')
const path = require('path');
const router = express.Router();
const {update,inse} =require('../db/mongo.js')

let imgUrl='http://112.74.35.224:8841/img/'
let fname=false
let format=[]
let storage = multer.diskStorage({
    // 上传文件保存目录，无则自动创建
    destination: './public/img',
    // 格式化文件名
    filename:async function (req, file, cb) {
        // console.log(req.query, '---------2');
        // console.log(file,'-----');
        // fname= req.query
        // fname =fname[0]
        // await update({
        //     dbteb:'user'
        // },{
        //     id:req.query.id,
        //     set:{userimg}
        // })
        let ext = path.extname(file.originalname);
        let imgname=req.query.username +'_'+Date.now() + ext
        format.push(imgname)
        cb(null, imgname);
        // format=''
        // 获取文件后缀名
    }
})
let upload = multer({ storage })

router.post('/',(req,res,n)=>{
   if('username' in req.query){
       n()
}else{
    res.send({msg:'参数错误上传失败'})
   }
},upload.array('img'),async (req,res)=>{

    console.log(req.body,'0---')
    let fabdata=req.body
    fabdata.username=req.query.username
    fabdata.img_all=format
    fabdata.img_url='http://112.74.35.224:8841/img/'
    let data= await inse({
        dbteb:req.body.banKuai
    },fabdata)
    res.send({data:data.ops,code:200,res:true})
})

router.get('/issue',(req,res)=>{

    let html= fs.readFileSync('./src/file/issue.html')
    res.end(html)
})
module.exports=router