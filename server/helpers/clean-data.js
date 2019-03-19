const express = require('express')

const port = 3000

const formatArtist = artist => {
  return {
    name: artist.name,
    mbid: artist.mbid,
    image: {
      small: artist.image[0]['#text'],
      big: artist.image.slice(-1).pop()['#text']
    },
    similar: artist.similar.artist.map(i => {
      return {
        name: i.name,
        image: {
          small: i.image[0]['#text'],
          big: i.image.slice(-1).pop()['#text']
        }
      }
    }),
    summary: artist.bio.summary
  }
}

exports.formatArtist = formatArtist
