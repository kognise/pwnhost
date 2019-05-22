const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

app.get('/setup', (req, res) => {
  console.log('Setup')
  res.send('Setup here')
})

app.post('/hook', (req, res) => {
  console.log('Hook')
  console.log(req.body)
  res.send('Hook here')
})

app.listen(8080, () => console.log('> Listening on port 8080'))