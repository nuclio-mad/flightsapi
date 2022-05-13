const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.route('/passenger')
  .get((req, res) => {
    console.log('return passengers')
    res.json([])
  })
  .post((req, res) => {
    console.log('create passenger')
    res.json({})
  })

app.route('/passenger/:passengerId')
  .get((req, res) => {
    console.log('return one passenger')
    res.json({})
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
