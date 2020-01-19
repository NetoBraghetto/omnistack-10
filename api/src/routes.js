const { Router } = require('express');
const DeController = require('./Controllers/DevController');

const routes = Router();

routes.get('/', (req, res) => {
    return res.json({now: new Date});
});

routes.get('/devs', DeController.index);
routes.post('/devs', DeController.store);

module.exports = routes;
