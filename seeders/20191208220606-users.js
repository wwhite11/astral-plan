'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'kronos',
        password_digest: '$2b$11$dpHKKAiNcpQo2X21PI7yXuJH/M8.QRDnRiUGXsivX7xq32SD6WXDm',
        firstName: 'Kronos',
        lastName: 'Hellas',
        email: 'kronos@kronos.kronos',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'nammu',
        password_digest: '$2b$11$q8Ruj3A3H7mDvT/EEmBIdOJawDrKrOFkr41DCvTNzBjWwjJzXrv6y',
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
