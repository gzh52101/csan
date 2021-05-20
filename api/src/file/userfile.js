const express = require('express');
const multer = require('multer')
const fs = require('fs')
const path = require('path');
const router = express.Router();

// const app = express();
// app.use(express.urlencoded({ extended: false }));
let fname=''
let storage = multer.diskStorage({
    // 上传文件保存目录，无则自动创建
    destination: './public/userImg',
    // 格式化文件名
    filename: function (req, file, cb) {
        console.log(req.query, '---------2');
    
        fname= req.query[Object.keys(req.query)] 
        // 获取文件后缀名
        let ext = path.extname(file.originalname);
        cb(null, Object.keys(req.query) + ext);
    }
})

// 设置文件保存目录
let upload = multer({ storage })

router.post('/',upload.single('fl'),(req,res)=>{

    console.log(fname)
    res.send('0')
})

module.exports = router