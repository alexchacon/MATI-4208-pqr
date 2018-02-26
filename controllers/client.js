const client = require('../models').client;
const pqr = require('../models').pqr;
const rate = require('../models').rate;

module.exports = {
    create(req, res) {
        return client
            .create({
                name: req.body.name,
                identification: req.body.identification,
                email: req.body.email,
                city: req.body.city,
                address: req.body.address,
                mobile: req.body.mobile
            })
            .then(client => res.status(201).send(client))
            .catch(error => res.status(400).send(error));
    },
   /* list(req, res) {
        return category
            .all()
            .then(category => res.status(200).send(category))
            .catch(error => res.status(400).send(error));
    },*/

    list(req, res) {
        return client
            .findAll({
                include: [{
                    model: pqr,
                    as: 'pqrs',
                },
                    {
                        model: rate,
                        as: 'rates',
                    }
                ],

            })
            .then(client => res.status(200).send(client))
            .catch(error => res.status(400).send(error));
    },

    retrieve(req, res) {
        return client
            .findById(req.params.clientId, {
                include: [{
                    model: pqr,
                    as: 'pqrs',
                },{
                    model: rate,
                    as: 'rates',
                }],
            })
            .then(client => {
                if (!client) {
                    return res.status(404).send({
                        message: 'client Not Found',
                    });
                }
                return res.status(200).send(client);
            })
            .catch(error => res.status(400).send(error));
    },

    update(req, res) {
        return client
            .findById(req.params.clientId, {
                include: [{
                    model: pqr,
                    as: 'pqrs',
                }],
            })
            .then(client => {
                if (!client) {
                    return res.status(404).send({
                        message: 'client Not Found',
                    });
                }
                return client
                    .update({

                        name: req.body.name|| client.name,
                        identification: req.body.identification|| client.identification,
                        email: req.body.email|| client.email,
                        city: req.body.city|| client.city,
                        address: req.body.address|| client.address,
                        mobile: req.body.mobile|| client.mobile
                    })
                    .then(() => res.status(200).send(client))  // Send back the updated category.
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    destroy(req, res) {
        return client
            .findById(req.params.clientId)
            .then(client => {
                if (!client) {
                    return res.status(400).send({
                        message: 'client Not Found',
                    });
                }
                return client
                    .destroy()
                    //.then(() => res.status(204).send())
                    .then(() => res.status(200).send({ message: 'client deleted successfully.' }))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
};