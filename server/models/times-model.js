const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Time = new Schema(
    {
        time: { type: Number, required: true },
        pll: { type: String, required: true },
        date: { type: Number, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('times', Time)
