'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
    */
      await queryInterface.bulkInsert('roles', [{
        roleName: 'Admin'
      }], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     *
     * Example:
     */
     await queryInterface.bulkDelete('roles', null, {});
  }
};
