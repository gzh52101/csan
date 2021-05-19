const express = require('express');
const dataRuote=require('./src/ruoterdata')
const app = express();
app.use(express.urlencoded({extended: true}));
app.use('*',(req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    next()
})
app.use(express.static('./public'));

app.use('/data',dataRuote)

app.listen(8841, () => {
    console.log('服务启动成功----8841')
})
