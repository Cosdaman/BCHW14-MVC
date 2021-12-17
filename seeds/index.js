const sequelize = require('../config/connection');
const { Blogpost } = require('../models');
const { User } = require('../models')
const blogData = require('./blogData.json');
const userData = require('./userData.json')

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Blogpost.bulkCreate(blogData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedAll();
