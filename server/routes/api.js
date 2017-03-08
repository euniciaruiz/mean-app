const express = require('express');
const router = express.Router();

const axios = require('axios');
const API = 'http://localhost:8888/travelApp_API/getDestinations.php';

router.get('/', (req, res) => {
        res.send('api works');
});

router.get('/destinations', (req, res) => {
        axios.get(`${API}`).then(destinations => {
                res.status(200).json(destinations.data);
        })
        .catch(error => {
                res.status(500).send(error);
        });
});

module.exports = router;