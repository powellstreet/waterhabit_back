module.exports = (sequelize, DataTypes) => {
  const Records = sequelize.define('Records', {
    userId: DataTypes.INTEGER,
    day: DataTypes.STRING,
  }, {});
  Records.associate = function (models) {
    // associations can be defined here
    Records.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };
  return Records;
};
