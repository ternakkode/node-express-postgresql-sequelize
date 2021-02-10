const express = require('express')
const route = express.Router();

const noteController = require('../controllers/note')
const noteValidationRules = require('../util/validation/note')
const validationMiddleware = require('../middleware/validation')

route.get('/', (req, res) => {
    res.json({
        success: true,
        message: "welcome to notes api"
    })
});

route.get('/notes', noteController.all);
route.get('/notes/:id', noteController.detail);
route.post('/notes', noteValidationRules.create, validationMiddleware, noteController.create);
route.put('/notes', noteValidationRules.update, validationMiddleware, noteController.update);
route.delete('/notes', noteValidationRules.remove, validationMiddleware, noteController.remove);

module.exports = route;