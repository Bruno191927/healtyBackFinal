const express = require('express');
const router = express.Router();
const controller = require('./controller');
const validateToken = require('../../middleware/auth');
router.post('/create',validateToken,controller.createDoctor);
router.put('/update',validateToken,controller.updateDoctor);
router.get('/findAll',validateToken,controller.findDoctor);
module.exports = router;