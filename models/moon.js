'use strict';
module.exports = (sequelize, DataTypes) => {
  const Moon = sequelize.define('Moon', {
    name: DataTypes.STRING,
    size: DataTypes.INTEGER,
    baseColor: DataTypes.STRING,
    surface: DataTypes.STRING,
    distance: DataTypes.INTEGER,
    planetId: DataTypes.INTEGER
  }, {});
  Moon.associate = function(models) {
    Moon.belongsTo(models.Planet, {
      foreignKey: 'planetId',
      onDelete: 'CASCADE'
    })
  };
  return Moon;
};