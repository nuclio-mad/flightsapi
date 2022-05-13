const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/passenger', (req, res) => {
  console.log('return passengers')
  res.json([])
})

app.post('/passenger', (req, res) => {
  console.log('create passenger')
  res.json({})
})

app.get('/passenger/:passengerId', (req, res) => {
  console.log('return one passenger')
  res.json({})
})

app.put('/passenger/:passengerId', (req, res) => {
  console.log('update one passenger')
  res.json({})
})

app.patch('/passenger/:passengerId', (req, res) => {
  console.log('update one passenger')
  res.json({})
})

app.delete('/passenger/:passengerId', (req, res) => {
  console.log('delete one passenger')
  res.json({})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
