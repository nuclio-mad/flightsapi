const express = require('express')

const flightRouter = express.Router()

flightRouter.get('/', (req, res) => {
  res.json({
    flights: []
  })
})

flightRouter.route('/:flightId')
  .get((req, res) => {
    res.json({})
  })


module.exports = flightRouter