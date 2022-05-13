const express = require('express')

const passengerRouter = express.Router()

passengerRouter.route('/')
  .get((req, res) => {
    console.log('return passengers')
    res.json([])
  })
  .post((req, res) => {
    console.log('create passenger')
    res.json({})
  })

passengerRouter.route('/:passengerId')
  .get((req, res) => {
    console.log('return one passenger')
    res.json({})
  })
  .put((req, res) => {
    console.log('update one passenger')
    res.json({})
  })
  .patch((req, res) => {
    console.log('update one passenger')
    res.json({})
  })
  .delete((req, res) => {
    console.log('delete one passenger')
    res.json({})
  })

module.exports = passengerRouter