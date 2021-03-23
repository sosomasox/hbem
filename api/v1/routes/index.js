var express = require('express');
var router = express.Router();

router.use('/todo', require('./todoRoute.js'));
router.use('/healthz', require('./healthzRoute.js'));

module.exports = router;
