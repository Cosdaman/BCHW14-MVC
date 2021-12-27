const router = require('express').Router();
const withAuth = require('../../utils/auth');
const Blogpost = require('../../models/Blogpost')

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