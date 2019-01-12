'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {username: 'demouser1', password: 'password1', firstname: 'Demo', lastname: 'User1', createdAt: 'NOW()', updatedAt: 'NOW()'},
      {username: 'demouser2', password: 'password2', firstname: 'Demo', lastname: 'User2', createdAt: 'NOW()', updatedAt: 'NOW()'},
      {username: 'demouser3', password: 'password3', firstname: 'Demo', lastname: 'User3', createdAt: 'NOW()', updatedAt: 'NOW()'}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
