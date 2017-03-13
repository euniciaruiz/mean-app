const express = require('express');
const router = express.Router();

const axios = require('axios');
const API = 'http://localhost:8888/travelApp_API';

router.get('/', (req, res) => {
        res.send('api works');
});

router.get('/destinations', (req, res) => {
        axios.get(`${API}/getDestinations.php`).then(destinations => {
                res.status(200).json(destinations.data);
        })
        .catch(error => {
                res.status(500).send(error);
        });
});

router.get('/trips', (req, res) => {
        axios.get(`${API}/getTrips.php`).then(trips => {
                res.status(200).json(trips.data);
        })
        .catch(error => {
                res.status(500).send(error);
        });
});

router.get('/trip/:id', (req, res) => {
        var id = req.params.id;
        axios.get(`${API}/getTrip.php?id=`+id).then(trip => {
                res.status(200).json(trip.data);
        })
        .catch(error => {
                res.status(500).send(error);
        });
});

router.get('/destinations/:loc', (req, res) => {
        var loc = req.params.loc;
        axios.get(`${API}/getDestination.php?loc=`+loc).then(destination => {
                res.status(200).json(destination.data);
        })
        .catch(error => {
                res.status(500).send(error);
        });
});


module.exports = router;