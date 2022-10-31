module.exports = (sequelize, Sequelize) => {
    const blog = sequelize.define('blog', {
        title: Sequelize.STRING,
        description: Sequelize.TEXT,
        image: Sequelize.STRING,
        status: Sequelize.ENUM('draft', 'published'),
        likes_count: Sequelize.INTEGER,
    });

    return blog;
};