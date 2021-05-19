const express = require('express');
const router = express.Router();
const { filt } = require('../db/mongo.js')

router.get('/', async (req, res) => {
    console.log("/ 5g")

    res.send({ data: await filt({
        dbteb:'data5g'
    }, req.query), code: 200 })
})


module.exports=router