const express =  require('express');
const router = express.Router();
const experiencesController = require('../../controllers/experiencesController');

router.route('')
    .get(experiencesController.getExperiences);


module.exports = router;