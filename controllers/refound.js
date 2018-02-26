const refound = require('../models').refound;

module.exports = {
    create(req, res) {
        return refound
            .create({
                refoundDate: req.body.refoundDate,
                cause: req.body.cause,
                replacement: req.body.replacement,
                pqrId: req.params.pqrId
            })
            .then(refound => res.status(201).send(refound))
            .catch(error => res.status(400).send(error));
    },

    update(req, res) {
        return refound
            .find({
                where: {
                    id: req.params.refoundId
                },
            })
            .then(refound => {
                if (!refound) {
                    return res.status(404).send({
                        message: 'refound Not Found',
                    });
                }

                return refound
                    .update({
                        refoundDate: req.body.refoundDate || refound.refoundDate,
                        cause: req.body.cause || refound.cause,
                        replacement: req.body.replacement || refound.replacement,
                    })
                    .then(updatedRefound => res.status(200).send(updatedRefound))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    destroy(req, res) {
        return refound
            .find({
                where: {
                    id: req.params.refoundId
                },
            })
            .then(refound => {
                if (!refound) {
                    return res.status(404).send({
                        message: 'refound Not Found',
                    });
                }

                return refound
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
};