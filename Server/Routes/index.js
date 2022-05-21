const router = require('express').Router();

router.use('/tests', require('./test'));
router.use('/carousel', require('./carousel-items'));

module.exports = router;