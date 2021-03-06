const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log('router loaded');

router.get('/addData', homeController.addData);             //routes to add data from database

router.get('/findData', homeController.findData);           //routes to get data from database

module.exports = router;