const express = require('express');

const router = express.Router();
const test_service = require('../service/testService');

router.get('/test', test_service.test_get);

router.post('/test', test_service.test_post);

module.exports = router;