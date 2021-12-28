const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Comments, User, Blogpost } = require('../../models');

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

router.delete('/:id', function (req, res) {
    try {
        Blogpost.destroy({
            where: { id: req.params.id }
        });
        Comments.destroy({
            where: { blog_post_id: req.params.id }
        });
        res.status(200).json('deleted');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

router.put('/:id', function (req, res) {
    try {
        Blogpost.update({
            title: req.body.blogTitle,
            content: req.body.blogContent,

        }, {
            where:
                { id: req.params.id }
        })
        res.status(200).json('updated');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

})

module.exports = router;