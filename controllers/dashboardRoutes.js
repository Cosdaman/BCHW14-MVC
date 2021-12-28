const router = require('express').Router();
const { Blogpost, User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', withAuth, async (req, res) => {
    try {
        const dbBlogData = await Blogpost.findAll(
            {
                raw: true,
                where: {
                    user_id: req.session.user_id
                },
                order: [
                    ['date_created', 'desc']
                ]
            }
        );
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

router.get('/edit/:id', withAuth, async (req, res) => {
    try {
        let editing = true;
        const dbBlogData = await Blogpost.findByPk(
            req.params.id,
            {
                raw: true,
            }
        );
        console.log(dbBlogData)
        res.render('createBlogPost', { BlogTitle: dbBlogData.title, editing, BlogContent: dbBlogData.content, BlogId: dbBlogData.id })
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
