module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    salt: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    nickname: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
    weight: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    goal: {
      type: Sequelize.INTEGER,
      defaultValue: 2000,
    },
    intake: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    point: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    likes: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Users'),
};
