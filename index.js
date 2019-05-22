const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

app.get('/callback', (req, res) => {
  console.log('Callback')
  console.log(req.body)
  res.send('Callback here')
})

app.get('/hook', (req, res) => {
  console.log('Hook')
  console.log(req.body)
  res.send('Hook here')
})

app.listen(8080, () => console.log('> Listening on port 8080'))