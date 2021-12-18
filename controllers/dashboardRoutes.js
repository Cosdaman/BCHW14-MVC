const router = require('express').Router();
const withAuth = require('../utils/auth');


router.get('/', withAuth, async (req, res) => {
    try {
        res.render('dashboard',{logged_in: req.session.logged_in});
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
