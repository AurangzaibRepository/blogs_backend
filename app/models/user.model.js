module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define('user', {
        first_name: Sequelize.STRING,
        last_name: Sequelize.STRING,
        email: Sequelize.STRING,
        phone_number: Sequelize.STRING,
        role: Sequelize.ENUM('admin', 'user'),
        createdAt: {
            type: Sequelize.DATEONLY,
            defaultValue: Sequelize.NOW,
        },
        updatedAt: {
            type: Sequelize.DATEONLY,
            defaultValue: Sequelize.NOW,
        },
    });

    return user;
};