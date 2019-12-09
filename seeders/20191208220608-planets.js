'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Planets', [
      {
        name: 'Zeus',
        size: 110,
        composition: 'gas',
        baseColor: 'red',
        surface: 'cloud',
        rings: 'faint',
        distance: 50,
        year: 120,
        starId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cronus',
        size: 90,
        composition: 'gas',
        baseColor: 'yellow',
        surface: 'cloud',
        rings: 'bold',
        distance: 90,
        year: 290,
        starId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kittu',
        size: 110,
        composition: 'gas',
        baseColor: 'red',
        surface: 'cloud',
        rings: 'faint',
        distance: 50,
        year: 120,
        starId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Misharu',
        size: 90,
        composition: 'gas',
        baseColor: 'yellow',
        surface: 'cloud',
        rings: 'bold',
        distance: 90,
        year: 290,
        starId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Planets', null, {});
  }
};
