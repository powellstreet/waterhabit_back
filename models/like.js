module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    userId: {
      type: DataTypes.INTEGER,
    },
    likee: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  Like.associate = function (models) {
    // associations can be defined here
    Like.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };
  return Like;
};
