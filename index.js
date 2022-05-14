const express = require('express')
const flightRouter = require('./routes/flight')
const passengerRouter = require('./routes/passenger')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/passenger', passengerRouter)
app.use('/flight', flightRouter)

app.listen(port, () => {
  console.log('app running')
})