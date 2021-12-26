const { Comments } = require('../../models');
const router = require('express').Router();
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const commentData = await Comments.create({
            content: req.body.commentContent,
            user_id: req.session.user_id,
            blog_post_id: req.session.blogId,
            date_created: Date.now()
        });
        res.status(200).json(commentData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;