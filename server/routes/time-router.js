const express = require('express')

const TimeCtrl = require('../controllers/time-ctrl')

const router = express.Router()

router.post('/time', TimeCtrl.createTime)
router.get('/times', TimeCtrl.getTimes)
router.delete('/times', TimeCtrl.deleteTimes)

module.exports = router
