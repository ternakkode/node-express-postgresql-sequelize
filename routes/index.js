const express = require('express')
const route = express.Router();

const noteController = require('../controllers/note')

route.get('/', (req, res) => {
    res.json({
        success: true,
        message: "welcome to notes api"
    })
});

route.get('/notes', noteController.all);
route.get('/notes/:id', noteController.detail);
route.post('/notes', noteController.create);
route.put('/notes', noteController.update);
route.delete('/notes', noteController.remove);

module.exports = route;