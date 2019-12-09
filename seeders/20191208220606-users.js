'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'kronos',
        password_digest: '1234',
        firstName: 'Kronos',
        lastName: 'Hellas',
        email: 'kronos@kronos.kronos',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'nammu',
        password_digest: '1234',
        firstName: 'Nammu',
        lastName: 'Sumer',
        email: 'nammu@nammu.nammu',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
