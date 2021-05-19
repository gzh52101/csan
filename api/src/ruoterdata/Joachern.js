const express = require('express');
const router = express.Router();
const { filt } = require('../db/mongo.js')

router.get('/', async (req, res) => {


    res.send({ data: await filt({
        dbteb:'dataJoachern'
    }, req.query), code: 200 })
})


module.exports=router