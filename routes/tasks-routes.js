const express = require('express')
const router = express.Router()
const Task = require('../models/Task')


//!-- Get all Tasks ---
router.get('/', (req, res) => {
    Task.find({})
      .then((tasks) => res.json(tasks))
      .catch((err) => {
        console.log(err)
        res.status(500).json(err)
      })
  })

// !--- Post each Task ----
router.post('/', async (req, res) => {

  const name = req.fields.name
  const id = req.fields.id
  const isCompleted = req.fields.isCompleted
  const selectedPerson = req.fields.selectedPerson
  const isEditing = req.fields.isEditing
  const showTasks = req.fields.showTasks

  const task = new Task({
    name: name,
    id: id,
    isCompleted: isCompleted,
    selectedPerson: selectedPerson,
    isEditing: isEditing,
    showTasks: showTasks
  })
  
   await task.save()
    .then(task => {
        res.json(task)
        res.status(200)})
      .catch((err) => {
        console.log(err)
        res.status(201).end()
      })
})

module.exports = router