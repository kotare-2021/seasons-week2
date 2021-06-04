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
router.get('/add', (req, res) => {
    res.render('add')
})

// router.post('/add', (req, res) => {
//     fs.readFile('./data-gallery.json', 'utf-8', (err, data) => {
//         if (err) return res.status(500).send(err.message)
//         const parsedData = JSON.parse(data)
//         const theOne = parsedData.gallery.includes(img => img.id === id)
//         if (theOne){
//             return new Error
//         } else {
           
//             const updatedData = req.body
//             console.log(updatedData)
//         updatedData.id = Number(updatedData.id)
//         parsedData.gallery.push(updatedData)
        
//         var newData = JSON.stringify(parsedData, null, 2)

    
//        fs.writeFile('./data-gallery.json', newData, (err) => {
        
//        })
//         }
//        res.redirect('/gallery')
//       })
      
// })
// router.post('/add', (req,res) => {
//     console.log("hi")
//     fs.readFile('./data-gallery.json', 'utf-8', (err, data) => {
//         if(err) console.log('noooope no edit for you') 
//         const parsedData = JSON.parse(data)
//         const newImg = {
//             id: parsedData.gallery.length + 1,
//             name: req.body.name,
//             image: req.body.image,
//             comments: req.body.comments,
//             description: req.body.description
            
//         }
//         parsedData.gallery.push(newImg)
//         const strData = JSON.stringify(parsedData, null, 2) 
//         fs.writeFile('./data.json', strData, (err) => {
//             if (err) console.log('ya done effed up again')
//             console.log('yay, we win!')
//             res.redirect('/gallery')
//         })
//     })
// })


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