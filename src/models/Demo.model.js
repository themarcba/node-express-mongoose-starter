const mongoose = require('mongoose')

const demoSchema = new mongoose.Schema({
    random: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})

const Demo = mongoose.model('Demo', demoSchema)

module.exports = Demo