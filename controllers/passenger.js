const fs = require('fs')

const getAllPassengers = async (req, res) => {
  const passengersFile = await fs.promises.readFile(__dirname + '/../data/passengers.json', 'utf-8')
  const passengers = JSON.parse(passengersFile)
  res.json(passengers)
}

const getPassengerById = async (req, res) => {
  const passengerId = Number(req.params.passengerId)
  const passengersFile = await fs.promises.readFile(__dirname + '/../data/passengers.json', 'utf-8')
  const passengers = JSON.parse(passengersFile)

  const passenger = passengers.find((passenger) => {
    return passenger.id === passengerId
  })

  if (passenger) {
    return res.json(passenger)
  }
  res.status(404).json({
    error: 'passenger not found'
  })
}

module.exports = {
  getAllPassengers,
  getPassengerById
}