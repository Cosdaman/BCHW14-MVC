const router = require('express').Router();
const { Blogpost } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', withAuth, async (req, res) => {
    try {
        const dbBlogData = await Blogpost.findAll(
            {
                raw: true,
                where: {
                    user_id: req.session.user_id
                }
            }
        );
        console.log(dbBlogData)
        res.render('dashboard', { dbBlogData, logged_in: req.session.logged_in });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/new', withAuth, async (req, res) => {
    try {
        res.render('createBlogPost')
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/new', withAuth, async (req, res) => {
    try {
        const dbBlogData = await Blogpost.create({
            title: req.body.blogTitle,
            content: req.body.blogContent,
            user_id: req.session.user_id,
            date_created: Date.now()
        });
        res.status(200).json(dbBlogData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
