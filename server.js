const express = require('express')
const hbs = require('express-handlebars')
// var fileUpload = require('express-fileupload')

const server = express()
const fs = require('fs')

const routes = require('./routes')

// Server configuration
server.use(express.static('public'))
// server.use(express.urlencoded({ extended: false }))
// server.use(fileUpload())

// Handlebars configuration
server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.get('/add', (req, res) => {
    res.render('add', )
  })


// Your routes/router(s) should go here
server.use('/seasons', routes)

server.get('/', (req, res) => {
    fs.readFile('./data.json', 'utf-8', (err, data) => {
      if (err) return res.status(500).send(err.message)
      const parseInfo = JSON.parse(data)
  
      res.render('home', parseInfo)
    })
  })


module.exports = server
