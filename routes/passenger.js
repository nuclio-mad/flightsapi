const express = require('express')
const fs = require('fs')

const passengerRouter = express.Router()

passengerRouter.route('/')
  .get(async (req, res) => {
    const passengers = await fs.promises.readFile(__dirname + '/../data/passengers.json', 'utf-8')
    res.json(JSON.parse(passengers))
  })
  .post(async (req, res) => {
    const { name, surname } = req.body
    const passengersData = await fs.promises.readFile(__dirname + '/../data/passengers.json', 'utf-8')
    const passengers = JSON.parse(passengersData)
    const lastPassenger = passengers[passengers.length - 1]
    
    const newPassenger = {
      id: lastPassenger.id + 1,
      name,
      surname
    }

    passengers.push(newPassenger)
    await fs.promises.writeFile(__dirname + '/../data/passengers.json', JSON.stringify(passengers, null, 2))
    
    res.json(newPassenger)
  })

passengerRouter.route('/:passengerId')
  .get((req, res) => {
    const { passengerId } = req.params
    res.json({
      passengerId
    })
  })
  .put((req, res) => {
    console.log('>>>put')
    const { passengerId } = req.params
    res.json({
      passengerId
    })
  })
  .patch((req, res) => {
    console.log('>>>patch')
    const { passengerId } = req.params
    res.json({
      passengerId
    })
  })
  .delete((req, res) => {
    const { passengerId } = req.params
    res.json({
      passengerId
    })
  })

module.exports = passengerRouter