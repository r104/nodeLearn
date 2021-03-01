const express = require('express');
const router = express.Router();

const test_controller = require('../controllers/testController');

router.get('/test', test_controller.test_get);

router.post('/test', test_controller.test_post);

module.exports = router;