const express = require('express');
const projectController = require('../controllers/project_contgroller');
const router = express.Router();

router.post('/create', projectController.createSession);
router.get('/delete', projectController.delete);
router.get('/details', projectController.projectDetails);

module.exports = router;