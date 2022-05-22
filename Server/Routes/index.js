const router = require('express').Router();

router.use('/tests', require('./test'));
router.use('/carousel', require('./carousel-items'));
router.use('/blog', require('./blog-posts'));

module.exports = router;