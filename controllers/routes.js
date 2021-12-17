const router = require('express').Router();
const { Blogpost, User } = require('../models')

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
    console.log(dbBlogData)
    res.render('home', { dbBlogData });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/login', async (req, res) => {
  try {
    res.render('login');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;
