const router = require('express').Router();

router.get('/', require('./01-settings'));

module.exports = router;