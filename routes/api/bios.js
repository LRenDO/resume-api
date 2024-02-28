const express =  require('express');
const router = express.Router();
const biosController = require('../../controllers/biosController');

router.route('')
    .get(biosController.getBios);


module.exports = router;