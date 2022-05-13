const express = require('express')
const flightController = require('../controllers/flight')

const flightRouter = express.Router()

flightRouter.get('/', flightController.getAllFlights)
flightRouter.get('/:flightId', flightController.getFlightById)

module.exports = flightRouter