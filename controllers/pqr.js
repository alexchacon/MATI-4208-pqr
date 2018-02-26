const pqr = require('../models').pqr;

module.exports = {
    create(req, res) {
        return pqr
            .create({
                description: req.body.description,
                state: req.body.state,
                response: req.body.response,
                priority: req.body.priority,
                productId: req.params.productId,
                clientId: req.params.clientId
            })
            .then(pqr => res.status(201).send(pqr))
            .catch(error => res.status(400).send(error));
    },

    update(req, res) {
        return pqr
            .find({
                where: {
                    id: req.params.pqrId
                },
            })
            .then(pqr => {
                if (!pqr) {
                    return res.status(404).send({
                        message: 'pqr Not Found',
                    });
                }

                return pqr
                    .update({
                        description: req.body.description || pqr.description,
                        state: req.body.state || pqr.state,
                        response: req.body.response || pqr.response,
                        priority: req.body.priority || pqr.priority,
                    })
                    .then(updatedPqr => res.status(200).send(updatedPqr))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    destroy(req, res) {
        return pqr
            .find({
                where: {
                    id: req.params.pqrId
                },
            })
            .then(pqr => {
                if (!pqr) {
                    return res.status(404).send({
                        message: 'pqr Not Found',
                    });
                }

                return pqr
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
};