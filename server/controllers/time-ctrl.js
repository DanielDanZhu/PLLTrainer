const Time = require('../models/times-model')

createTime = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a time',
        })
    }

    const time = new Time(body)

    if (!time) {
        return res.status(400).json({ success: false, error: err })
    }

    time
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: time._id,
                message: 'Time created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Time not created!',
            })
        })
}

getTimes = async (req, res) => {
    await Time.find({}, (err, times) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!times.length) {
            return res
                .status(404)
                .json({ success: false, error: `Time not found` })
        }
        return res.status(200).json({ success: true, data: times })
    }).catch(err => console.log(err))
}

deleteTimes = async (req, res) => {
    await Time.remove({}, (err, times) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        return res.status(200).json({ success: true, data: times })
    }).catch(err => console.log(err))
}

module.exports = {
    createTime,
    getTimes,
    deleteTimes
}
