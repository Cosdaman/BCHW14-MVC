const User = require('./User');
const Blogpost = require('./Blogpost');
const Comments = require('./Comments');

Blogpost.belongsTo(User, {
    foreignKey: 'user_id'
})

User.hasMany(Blogpost)

Comments.belongsTo(Blogpost, {
    foreignKey: 'blog_post_id'
})

Comments.belongsTo(User, {
    foreignKey: 'user_id'
})

Blogpost.hasMany(Comments);

User.hasMany(Comments);


module.exports = { User, Blogpost, Comments };
