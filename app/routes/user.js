const express = require('express');

const controller = require('../controllers/user');

const router = express.Router();

const path = 'user';

//Ruta: /user GET
router.get(`/${path}`, controller.getData);
// router.get(`/`, controller.getData);

// Ruta: /:id GET
router.get(`/:id`, controller.getSingle);

// Ruta: / POST
router.post(`/${path}`, controller.insertData);

// Ruta: /user PUT
router.put(`/:id`, controller.updateSingle);

// Ruta /user DELETE
router.delete(`/:id`, controller.deleteSingle);

module.exports = router;
