const mongoose = require('mongoose')

// Helper Schema

const MaterialSchema = mongoose.Schema({
    name: {
        type: String,
    },
    id: {
        type: String,
    },
    place: {
        type: String,
    },
    hasMaterial: {
        type: Boolean,
    },
})

const Material = (module.exports = mongoose.model('Material', MaterialSchema))
