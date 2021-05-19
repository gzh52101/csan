const express = require('express');
const router = express.Router();
const { filt } = require('../db/mongo.js')

router.get('/', async (req, res) => {
    console.log('-----web')
    res.send({ data: await filt({
        dbteb:'dataWeb'
    }, req.query), code: 200 })
})



module.exports=router