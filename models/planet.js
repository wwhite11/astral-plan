'use strict';
module.exports = (sequelize, DataTypes) => {
  const Planet = sequelize.define('Planet', {
    name: DataTypes.STRING,
    size: DataTypes.INTEGER,
    composition: DataTypes.STRING,
    baseColor: DataTypes.STRING,
    surface: DataTypes.STRING,
    rings: DataTypes.STRING,
    distance: DataTypes.INTEGER,
    year: DataTypes.INTEGER,
    starId: DataTypes.INTEGER
  }, {});
  Planet.associate = function(models) {
    Planet.belongsTo(models.Star, {
      foreignKey: 'starId',
      onDelete: 'CASCADE'
    });
    Planet.hasMany(models.Moon, {
      foreignKey: 'planetId'
    })
  };
  return Planet;
};