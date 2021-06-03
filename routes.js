const express = require('express')
const hbs = require('express-handlebars')

const server = express()
const fs = require('fs')

const router = express.Router()

router.get('/:id', (req, res) => {
    const id = Number(req.params.id)
    fs.readFile('./data.json', 'utf-8', (err, data) => {
      if (err) return res.status(500).send(err.message)
      const parsedData = JSON.parse(data)
      const theOne = parsedData.seasons.find(s => s.id === id)
      res.render('details', theOne)
    })
  })
router.get('/gallery', (req, res) => {
    fs.readFile('./data-gallery.json', 'utf-8', (err, data) => {
        if (err) return res.status(500).send(err.message)
        const parseInfo = JSON.parse(data)
    
        res.render('home', parseInfo)
      })

})



















module.exports = router