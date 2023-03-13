const express = require('express')
const router = express.Router()
const Material = require('../models/Material')



//!-- Get all materials ---
router.get('/', (req, res) => {
    Material.find({})
      .then((materials) => res.json(materials))
      .catch((err) => {
        console.log(err)
        res.status(500).json(err)
      })
  })

// !--- Post each Material ----
router.post('/', async (req, res) => {

  const name = req.fields.name
  const id = req.fields.id
  const place = req.fields.place
  const hasMaterial = req.fields.hasMaterial

  const material = new Material({
    name: name,
    id: id,
    place: place,
    hasMaterial: hasMaterial
  })
  
   await material.save() 
    .then(material => {
        res.json(material)
        res.status(200)})
      .catch((err) => {
        console.log(err)
        res.status(201).end()
      })
})

module.exports = router