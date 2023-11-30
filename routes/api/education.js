const express =  require('express');
const router = express.Router();
const educationController = require('../../controllers/educationController');

router.route('')
    .get(educationController.getEducation);


module.exports = router;