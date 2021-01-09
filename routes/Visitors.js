const express = require('express')
const visitors = express.Router()
const cors = require('cors')
const { Op } = require("sequelize")
const moment = require('moment')


const Visitor = require('../models/Visitor')
visitors.use(cors())

process.env.SECRET_KEY = 'secret'

visitors.post('/new_visitor', (req, res, next) => {
    if (!req.body.name) {
        res.status(400)
        res.json({
          error: 'Bad Data'
        })
    }
    else {
        const today = new Date()
        const visitorData = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            purpose: req.body.purpose,
            created: today
        }
        Visitor.create(visitorData)
          .then(data => {
            res.send(data)
          })
          .catch(err => {
            res.json('error: ' + err)
          })
    }
})

visitors.get('/all_visitors', function(req, res, next) {
    Visitor.findAll()
      .then(visitors => {
        res.json(visitors)
      })
      .catch(err => {
        res.send('error: ' + err)
      })
})


visitors.post('/all_visitors/date/:created', function(req, res, next) {
  const date = req.params.created

  Visitor.findAll({
    attributes: ["name", "phone", "address", "purpose", "created"]
  })
    .then(result => {
      let selectedVisitor = []
      for (let i = 0; i< result.length; i++){
        if(moment(result[i].dataValues.created.split(" ")[0].trim()).format("YYYY-MM-DD") === moment(date).format("YYYY-MM-DD")){
            selectedVisitor.push(result[i])
        }
      }
      res
                .status(200)
                .json({
                    data: selectedVisitor
                }) 
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

visitors.get('/all_visitors/:id', function(req, res, next) {
    Visitor.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(visitor => {
        if (visitor) {
          res.json(visitor)
        } else {
          res.send('Visitor does not exist')
        }
      })
      .catch(err => {
        res.send('error: ' + err)
      })
  })

visitors.route('/all_visitors/edit/:id')
    .put(function(req,res,next){
      Visitor.findOne({
        where: {
          id: req.params.id
        }
      })
        .then(visitor => {
          if (visitor) {
            visitor.name = req.body.name
            visitor.email = req.body.email
            visitor.phone = req.body.phone
            visitor.address = req.body.address
            visitor.purpose = req.body.purpose

            visitor.save(
              res.json({ message: 'Visitor Data updated!' })
            )
            
          } else {
            res.send('Visitor data not updated')
          }
        })
        .catch(err => {
          res.send('error: ' + err)
        })
  })

visitors.delete('/all_visitors/:id', function(req, res, next) {
    Visitor.destroy({
        where: {
        id: req.params.id
        }
    })
        .then(() => {
        res.json({ status: 'Visitor Deleted!' })
        })
        .catch(err => {
        res.send('error: ' + err)
        })
})
  

module.exports = visitors