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

const createPassenger = async (req, res) => {
  const passengerData = req.body

  const passengersFile = await fs.promises.readFile(__dirname + '/../data/passengers.json', 'utf-8')
  const passengers = JSON.parse(passengersFile)
  const lastPassenger = passengers[passengers.length -1]

  const passenger = {
    id: lastPassenger.id + 1,
    name: passengerData.name,
    surname: passengerData.surname
  }

  passengers.push(passenger)

  await fs.promises.writeFile(__dirname + '/../data/passengers.json', JSON.stringify(passengers, null, 2))

  res.status(201).json(passenger)
}

const deletePassenger = async (req, res) => {
  const passengerId = Number(req.params.passengerId)
  const passengersFile = await fs.promises.readFile(__dirname + '/../data/passengers.json', 'utf-8')
  const passengers = JSON.parse(passengersFile)

  const passengerI = passengers.findIndex((passenger) => {
    return passenger.id === passengerId
  })

  if (passengerI === -1) {
    return res.status(404).json({
      error: 'passenger not found'
    })
  }
  
  const passengerDeleted = passengers.splice(passengerI, 1)
  await fs.promises.writeFile(__dirname + '/../data/passengers.json', JSON.stringify(passengers, null, 2))

  res.status(200).json(passengerDeleted)
}

module.exports = {
  getAllPassengers,
  getPassengerById,
  createPassenger,
  deletePassenger
}