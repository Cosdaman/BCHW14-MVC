const User = require('./User');
const Blogpost = require('./Blogpost')

Blogpost.belongsTo(User, {
    foreignKey: 'user_id'
})

User.hasMany(Blogpost)


module.exports = { User, Blogpost };
