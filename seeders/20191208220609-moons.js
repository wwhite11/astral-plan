'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Moons', [
      {
        name: 'Io',
        size: 4,
        baseColor: 'orange',
        surface: 'volcanic',
        distance: 1,
        planetId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Europa',
        size: 2,
        baseColor: 'pink',
        surface: 'ice',
        distance: 5,
        planetId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Bunene',
        size: 4,
        baseColor: 'orange',
        surface: 'volcanic',
        distance: 1,
        planetId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Aya',
        size: 2,
        baseColor: 'pink',
        surface: 'ice',
        distance: 5,
        planetId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Moons', null, {});
  }
};
