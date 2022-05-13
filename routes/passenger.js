const express = require('express')
const fs = require('fs')
const path = require('path')

const passengerRouter = express.Router()

passengerRouter.route('/')
  .get(async (req, res) => {
    console.log('return passengers')
    const passengersFile = await fs.promises.readFile(__dirname + '/../data/passengers.json', 'utf-8')
    const passengers = JSON.parse(passengersFile)
    res.json(passengers)
  })
  .post((req, res) => {
    console.log('create passenger')
    res.json({})
  })

passengerRouter.route('/:passengerId')
  .get(async (req, res) => {
    const passengerId = Number(req.params.passengerId)
    const passengersFile = await fs.promises.readFile(__dirname + '/../data/passengers.json', 'utf-8')
    const passengers = JSON.parse(passengersFile)

    const flight = passengers.find((flight) => {
      return flight.id === passengerId
    })

    if (flight) {
      return res.json(flight)
    }
    res.status(404).json({
      error: 'passenger not found'
    })
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