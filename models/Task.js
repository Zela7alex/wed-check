const mongoose = require('mongoose')

// Helper Schema

const TaskSchema = mongoose.Schema({
    name: {
        type: String,
    },
    id: {
        type: String,
    },
    isCompleted: {
        type: Boolean,
    },
    selectedPerson: { 
        type: Object,
    },
    isEditing: { 
        type: Boolean,
    },
    showTasks: { 
        type: Boolean,
    },
})

const Task = (module.exports = mongoose.model('Task', TaskSchema))
