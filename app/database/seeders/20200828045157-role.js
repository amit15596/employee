'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('roles', 
        [ 
          {
            roleName: "Admin",
          },
          {
            roleName: "Staff",
          },
          {
            roleName: "employee",
          }
        ],{}
      );
  },
  
  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('roles', null, {});
  }
};
