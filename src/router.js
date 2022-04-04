const express = require('express')
const PageController = require('./controllers/PageController')
const DataController = require('./controllers/DataController')

const router = express.Router()

// Controllers
const pageController = new PageController()
const dataController = new DataController()

// Routes
router.get('/', dataController.renderData)
router.post('/', dataController.renderDataInterest)

router.get('*', pageController.renderNotFound)

module.exports = router
