const express = require('express');
const dataRuote=require('./src/ruoterdata')
const app = express();
const file =require('./src/file/userfile.js')
const multer=require('multer')


app.use(express.urlencoded({extended: true}));

app.use('/file',file)

app.use('*',(req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    next()
})


app.use(express.static('./public'));

app.use('/data',dataRuote)

app.listen(8841, () => {
    console.log('服务启动成功----8841  ' + new Date())
})
