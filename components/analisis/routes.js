const express = require('express');
const router = express.Router();
const controller = require('./controller');
const validateToken = require('../../middleware/auth');
router.post('/create',validateToken,controller.createAnalisis);
router.put('/update',validateToken,controller.updateAnalisis);
router.get('/findAll',validateToken,controller.findAllAnalisis);
module.exports = router;