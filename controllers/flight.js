const fs = require('fs')

const getAllFlights = async (req, res) => {
  const flightsFile = await fs.promises.readFile(__dirname + '/../data/flights.json', 'utf-8')
  const flights = JSON.parse(flightsFile)
  res.json(flights)
}

const getFlightById = async (req, res) => {
  const flightId = Number(req.params.flightId)
  const flightsFile = await fs.promises.readFile(__dirname + '/../data/flights.json', 'utf-8')
  const flights = JSON.parse(flightsFile)

  const flight = flights.find((flight) => {
    return flight.id === flightId
  })

  if (flight) {
    return res.json(flight)
  }
  res.status(404).json({
    error: 'flight not found'
  })
}

module.exports = {
  getAllFlights,
  getFlightById
}