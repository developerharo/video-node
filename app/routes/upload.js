const express = require('express');

const controller = require('../controllers/upload');

const router = express.Router();

const path = 'upload';

// router.post(`/`, controller.upload, controller.uploadFile);
router.post(`/upload`, controller.uploadFile);

module.exports = router;
