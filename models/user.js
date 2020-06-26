module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salt: {
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
    point: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
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
