const rate = require('../models').rate;

module.exports = {
    create(req, res) {
        return rate
            .create({
                rate: req.body.rate,
                description: req.body.description,
                productId: req.params.productId,
                clientId: req.params.clientId
            })
            .then(rate => res.status(201).send(rate))
            .catch(error => res.status(400).send(error));
    },

    update(req, res) {
        return rate
            .find({
                where: {
                    id: req.params.rateId
                },
            })
            .then(rate => {
                if (!rate) {
                    return res.status(404).send({
                        message: 'rate Not Found',
                    });
                }

                return rate
                    .update({
                        rate: req.body.rate || rate.name,
                        description: req.body.description || rate.description
                    })
                    .then(updatedRate => res.status(200).send(updatedRate))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    destroy(req, res) {
        return rate
            .find({
                where: {
                    id: req.params.rateId
                },
            })
            .then(rate => {
                if (!rate) {
                    return res.status(404).send({
                        message: 'rate Not Found',
                    });
                }

                return rate
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
};