const express = require('express');
const router = express.Router();

const svg = require('svg-captcha');
const Java=require('./dJava');
const fg=require('./5g');
const Python =require('./Python')
const Web =require('./Web')
const Joachern =require('./Joachern')
const user =require('./user')
const paging =require('./fin')
const daAll=require('./dataall')

router.use('/paging',paging)

router.use('/Java', Java)

router.use('/5g', fg)

router.use('/Python',Python)

router.use('/Web', Web)

router.use('/Joachern',Joachern)

router.use('/user',user)

// router.use('/all',daAll)

module.exports = router