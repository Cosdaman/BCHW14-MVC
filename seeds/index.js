const sequelize = require('../config/connection');
const { Blogpost } = require('../models');
const blogData = require('./blogData.json');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await Blogpost.bulkCreate(blogData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedAll();
