const express = require('express');
const dataRuote=require('./src/ruoterdata')
const app = express();
const file =require('./src/file/userfile.js')
const multer=require('multer')
const fs =require('fs')
const rootuser =require('./src/ruoterdata/rootuser')
const Fabu =require('./src/file/fabu')
const path =require('path')
app.use(express.urlencoded({extended: true}));
app.use('/file',file)

app.use('*',(req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    next()
})

app.use('/root',rootuser)

app.use(express.static('./public'));

app.use('/data',dataRuote)

app.use('/fabu',Fabu)


app.use((req,res)=>{

    res.send('<h1>你访问的页面不存在 404</h1>')
})

app.listen(8841, () => {
    console.log('服务启动成功----8841  ' + new Date())
})
