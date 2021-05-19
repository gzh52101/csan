const express = require('express');
const multer=require('multer')
const fs = require('fs')
const path = require('path');
const app = express();
const router = express.Router();
let storage = multer.diskStorage({

    // 上传文件保存目录，无则自动创建
    destination:'../../public/userimg/',
    // 格式化文件名
    filename: function (req, file, cb) {
        // 获取文件后缀名
        let ext = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + Date.now() + ext);
    }
})

// 设置文件保存目录
let upload = multer({storage});

router.post('/file',upload.single('fl'),(req,res)=>{

})