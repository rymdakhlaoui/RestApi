//require express
const express = require('express');

//require router
const router = express.Router();

//create test router
router.get('/test', (req, res) => {
    res.send('Test ok')
})

//export router
module.exports = router;

