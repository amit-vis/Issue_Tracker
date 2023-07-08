// get all require module
const express = require('express');
const homeController = require('../controllers/home_controller');
const router = express.Router();

// route the main functionality here
router.get('/', homeController.home);
router.use('/project',require('./project'));

module.exports = router;