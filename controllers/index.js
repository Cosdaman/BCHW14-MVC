const router = require('express').Router();
const apiroute = require('./api')
const routes = require('./routes.js');
const dashboard = require('./dashboardRoutes')

router.use('/api', apiroute);
router.use('/', routes);
router.use('/dashboard', dashboard)

module.exports = router;
