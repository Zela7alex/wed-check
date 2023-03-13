const mongoose = require('mongoose')

// Helper Schema

const HelperSchema = mongoose.Schema({
    name: {
        type: String,
    },
    id: {
        type: String,
    },
    isEditing: {
        type: Boolean,
    },
    showTasks: { 
        type: Boolean,
    },
})

const Helper = (module.exports = mongoose.model('Helper', HelperSchema))
