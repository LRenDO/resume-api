const express =  require('express');
const router = express.Router();

router.route('')
    .get((req, res) => {
        res.send('add view with documentation here')
    });

module.exports = router;