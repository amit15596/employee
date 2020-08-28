'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', 
        [ 
          {
            firstName: "Admin",
            lastName: "Admin",
            email:"admin@gmail.com",
            password: "Admin@123",
            phone: "079362514",
            is_active: 1
          },
          {
            firstName: "Admin+1",
            lastName: "Admin+1",
            email:"admin@gmail+1.com",
            password: "Admin@1234",
            phone: "079362533",
            is_active: 1
          },
          {
            firstName: "Admin+2",
            lastName: "Admin+2",
            email:"admin@gmail+2.com",
            password: "Admin@12345",
            phone: "079362566",
            is_active: 1      
          }
        ],{}
      );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});

  }
};
