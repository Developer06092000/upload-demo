module.exports = (sequelize, Sequelize) => {
    const Image = sequelize.define("images", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        image: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    });
    return Image;
};
