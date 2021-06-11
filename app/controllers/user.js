const mongoose = require('mongoose');
const model = require('../models/user');

const options = {
    page: 1,
    limit: 10,
};

const parseId = (id) => {
    return mongoose.Types.ObjectId(id);
};

// Obtener DATA de USUARIOS
exports.getData = (req, res) => {
    model.paginate({}, options, (err, docs) => {
        res.send({
            items: docs,
        });
    });
};

exports.getSingle = (req, res) => {
    model.findOne({ _id: parseId(req.params.id) }, (err, docs) => {
        res.send({
            items: docs,
        });
    });
};

// Actualizar DATA de USUARIOS
exports.updateSingle = (req, res) => {
    const { id } = req.params;
    const body = req.body;
    model.updateOne({ _id: parseId(req.params.id) }, body, (err, docs) => {
        res.send({
            items: docs,
        });
    });
};

// Insertar DATA de USUARIOS
exports.insertData = (req, res) => {
    const data = req.body;
    // res.send({ data });
    model.create(data, (err, docs) => {
        if (err) {
            res.send({ error: 'Error' }, 422);
        } else {
            res.send({ data: docs });
        }
    });
};

// Eliminar DATA de USUARIOS
exports.deleteSingle = (req, res) => {
    const { id } = req.params;
    model.deleteOne({ _id: parseId(req.params.id) }, (err, docs) => {
        res.send({
            items: docs,
        });
    });
};
