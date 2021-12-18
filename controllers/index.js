const router = require('express').Router();
const apiroute = require('./api')
const routes = require('./routes.js');

router.use('/api', apiroute);
router.use('/', routes);

module.exports = router;
