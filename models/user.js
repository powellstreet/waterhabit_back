module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nickname: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    goal: {
      type: DataTypes.INTEGER,
      defaultValue: 2000,
    },
    intake: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    point: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    stamp: {
      type: DataTypes.STRING,
      defaultValue: JSON.stringify([]),
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  }, {});
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Like);
  };
  return User;
};
