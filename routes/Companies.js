const express = require('express')
const companies = express.Router()
const cors = require('cors')

const Company = require('../models/Company')
companies.use(cors())

process.env.SECRET_KEY = 'secret'

companies.post('/new_company', (req, res, next) => {
    if (!req.body.name) {
        res.status(400)
        res.json({
          error: 'Bad Data'
        })
    }
    else {
        const today = new Date()
        const companyData = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            created: today
        }
        Company.create(companyData)
          .then(data => {
            res.send(data)
          })
          .catch(err => {
            res.json('error: ' + err)
          })
    }
})
// Get list of all companies
companies.get('/all_companies', function(req, res, next) {
    Company.findAll()
      .then(companies => {
        res.json(companies)
      })
      .catch(err => {
        res.send('error: ' + err)
      })
})
// Get a single company details
companies.get('/all_companies/:id', function(req, res, next) {
    Company.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(company => {
        if (company) {
          res.json(company)
        } else {
          res.send('Company does not exist')
        }
      })
      .catch(err => {
        res.send('error: ' + err)
      })
  })
companies.delete('/all_companies/:id', function(req, res, next) {
    Company.destroy({
        where: {
        id: req.params.id
        }
    })
        .then(() => {
        res.json({ status: 'Company Deleted!' })
        })
        .catch(err => {
        res.send('error: ' + err)
        })
})

module.exports = companies