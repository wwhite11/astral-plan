'use strict';
module.exports = (sequelize, DataTypes) => {
  const Star = sequelize.define('Star', {
    name: DataTypes.STRING,
    size: DataTypes.INTEGER,
    color: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Star.associate = function(models) {
    Star.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
    Star.hasMany(models.Planet, {
      foreignKey: 'starId'
    })
  };
  return Star;
};