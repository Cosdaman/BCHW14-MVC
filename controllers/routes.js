const router = require('express').Router();
const { Blogpost, User } = require('../models');
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

//get single blog
router.get('/blog/:id', withAuth, async (req, res) => {
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
    const BlogData = dbBlogData.get({ plain: true });
    console.log(BlogData)
    res.render('blog', { BlogData, logged_in: req.session.logged_in });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
