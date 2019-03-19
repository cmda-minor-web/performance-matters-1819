require('dotenv').config()

const axios = require('axios')
const chalk = require('chalk')

const clean = require('./clean-data.js')

function search(searchQuery) {
  let url = `http://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist=${searchQuery}&api_key=${
    process.env.KEY
  }&format=json`

  console.log(`Request to: ${chalk.blue(url)}`)

  return axios
    .get(url)
    .then(res => {
      return clean.formatArtist(res.data.artist)
    })
    .catch(err => {
      console.log(err)
    })
}

module.exports.search = search
