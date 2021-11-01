const express = require('express');
//
const cors = require('cors');

const elementList = ['fire', 'ice', 'wind', 'lightning', 'water', 'earth'];

//Used to create API endpoints
const router = express.Router();

//Get Request for all elements from elementList array
router.get('/', cors(), (req, res) => {
    res.send(elementList);
});

//POST Request to add element to elementList array
router.post('/', cors(), (req, res) => {
    console.log('req.body', req.body);
    elementList.push(req.body.element);
    res.sendStatus(200);
});

module.exports = router;