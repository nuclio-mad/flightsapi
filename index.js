const express = require('express')
const passengerRouter = require('./routes/passenger')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/passenger', passengerRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
