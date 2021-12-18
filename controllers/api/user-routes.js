const router = require('express').Router();
const { User } = require('../../models');

router.get('/', async (req, res) => {
    try {
        res.status(200).send('in /api/user/')
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;