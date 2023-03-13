const express = require('express')
const router = express.Router()
const Helper = require('../models/Helper')


//!-- Get all helpers ---
router.get('/', (req, res) => {
    Helper.find({})
      .then((helpers) => res.json(helpers))
      .catch((err) => {
        console.log(err)
        res.status(500).json(err)
      })
  })

// !--- Post each Helper ----
router.post('/', async (req, res) => {

    const name = req.fields.name
    const id = req.fields.id
    const isEditing = req.fields.isEditing
    const showTasks = req.fields.showTasks

    const helper = new Helper({
      name: name,
      id: id,
      isEditing: isEditing,
      showTasks: showTasks
    })
    
     await helper.save()
      .then(helper => { 
          res.json(helper)
          res.status(200)})
        .catch((err) => {
          console.log(err)
          res.status(201).end()
        })
})


module.exports = router