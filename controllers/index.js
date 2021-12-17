const router = require('express').Router();
const dashboardRoutes = require('./api');
const routes = require('./routes.js');

router.use('/', dashboardRoutes);
router.use('/', routes);

module.exports = router;
