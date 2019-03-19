const express = require('express')
const clean = require('./helpers/clean-data.js')
const api = require('./helpers/api.js')

const app = express()
const port = 3000

app.get('/', async (req, res) => {
  const data = await api.search('Drake')

  res.send(data)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
