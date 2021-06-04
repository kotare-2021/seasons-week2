const express = require('express')
const hbs = require('express-handlebars')

const server = express()
const fs = require('fs')

const router = express.Router()

router.get('/gallery', (req, res) => {
    fs.readFile('./data-gallery.json', 'utf-8', (err, data) => {
        if (err) return res.status(500).send(err.message)
        const parseInfo = JSON.parse(data)
        res.render('gallery', parseInfo)
      })

})

router.get('/add', (req,res)  => {
    const id = Number(req.params.id)
    fs.readFile('./data-gallery.json', 'utf-8', (err, data) => {
        if (err) return res.status(500).send(err.message)
        const parsedData = JSON.parse(data)
        const theOne = parsedData.gallery.find(season => season.id === id)
        res.render('add', theOne)
      })
})


router.get('/:id', (req, res) => {
    console.log("id router", req.params.id)
    const id = Number(req.params.id)
    fs.readFile('./data.json', 'utf-8', (err, data) => {
      if (err) return res.status(500).send(err.message)
      const parsedData = JSON.parse(data)
      const theOne = parsedData.seasons.find(s => s.id === id)
      res.render('details', theOne)
    })
  })


  








module.exports = router