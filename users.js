const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('Hellow World');
});

router.get('/about', (req, res) => {
    res.send('About page');
})

module.exports = router; 