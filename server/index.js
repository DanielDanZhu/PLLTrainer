const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const timeRouter = require('./routes/time-router')

const app = express()
const apiPort = 5000

const Time = require('./models/times-model')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/addTime', (req, res) => {
  const time = new Time({
    time: 509,
    pll: "Ab",
    date: 100
  });

  time.save()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log(err);
    })
})

app.use('/api', timeRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
