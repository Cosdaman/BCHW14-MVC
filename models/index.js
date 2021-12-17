const User = require('./User');
const Blogpost = require('./Blogpost')

Blogpost.belongsTo(User, {
    foreignKey: 'creator'
})

User.hasMany(Blogpost)


module.exports = { User, Blogpost };
