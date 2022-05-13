const express = require('express')
const passengerController = require('../controllers/passenger')

const passengerRouter = express.Router()

passengerRouter.route('/')
  .get(async (req, res) => {
    passengerController.getAllPassengers(req, res)
  })
  .post((req, res) => {
    passengerController.createPassenger(req, res)
  })

passengerRouter.route('/:passengerId')
  .get(async (req, res) => {
    passengerController.getPassengerById(req, res)
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