const router = require('express').Router();
const { Blogpost, User, Comments } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const dbBlogData = await Blogpost.findAll({
      raw: true,
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
      order: [
        ['date_created', 'desc']
      ]
    });
    res.render('home', {
      dbBlogData,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/login', async (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
    res.render('login');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//get single blog page
router.get('/blog/:id', withAuth, async (req, res) => {
  let author;
  try {
    const dbBlogData = await Blogpost.findByPk(
      req.params.id,
      {
        include: [
          {
            model: User,
            attributes: ['username'],
          },
        ]
      }
    );
    const dbCommentData = await Comments.findAll({
      raw: true,
      where: {
        Blog_post_id: req.params.id
      },
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ]
    }
    );
    const BlogData = dbBlogData.get({ plain: true });
    const CommData = dbCommentData;
    if (BlogData.user_id == req.session.user_id) {
      author = true;
    } else {
      author = false;
    }
    req.session.save(() => {
      req.session.blogId = BlogData.id;
    });
    res.render('blog', { BlogData, CommData, logged_in: req.session.logged_in, author });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
