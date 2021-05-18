const express = require('express');
const dataRuote=require('./src/ruoterdata')
const app = express();

app.use(express.static('./public'));

app.use('/data',dataRuote)

app.listen(8841, () => {
    console.log('服务启动成功----8841')
})
