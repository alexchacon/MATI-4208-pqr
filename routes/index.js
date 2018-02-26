const clientsController = require('../controllers').client;
const productsController = require('../controllers').product;
const pqrsController = require('../controllers').pqr;
const refoundController = require('../controllers').refound;
const rateController = require('../controllers').rate;

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the Service client API!',
    }));

    app.post('/api/clients', clientsController.create);
    app.get('/api/clients', clientsController.list);
    app.get('/api/clients/:clientId', clientsController.retrieve);
    app.put('/api/clients/:clientId', clientsController.update);
    app.delete('/api/clients/:clientId', clientsController.destroy);


    app.post('/api/products', productsController.create);
    app.get('/api/products', productsController.list);
    app.get('/api/products/:productId', productsController.retrieve);
    app.put('/api/products/:productId', productsController.update);
    app.delete('/api/products/:productId', productsController.destroy);

    app.post('/api/rates/:clientId/:productId', rateController.create);
    app.put('/api/rates/:rateId', rateController.update);
    app.delete('/api/rates/:rateId', rateController.destroy);

    app.post('/api/pqrs/:clientId/:productId', pqrsController.create);
    app.put('/api/pqrs/:pqrId', pqrsController.update);
    app.delete('/api/pqrs/:pqrId', pqrsController.destroy);

    app.post('/api/refounds/:pqrId', refoundController.create);
    app.put('/api/refounds/:refoundId', refoundController.update);
    app.delete('/api/refounds/:refoundId', refoundController.destroy);


    app.all('/api/', (req, res) =>
        res.status(405).send({
            message: 'Method Not Allowed',
        }));
};