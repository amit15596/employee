'use strict';

module.exports = (sequelize,DataTypes)=> {
  const users = sequelize.define('users',
  {
    firstName : DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password:  DataTypes.STRING,
    phone: DataTypes.STRING,
    is_active: DataTypes.INTEGER,
    createdAt:  DataTypes.DATE,
    updatedAt:  DataTypes.DATE
  },{});
  users.associate = function(models) {
    users.belongsTo(models.roles, { foreignKey: 'r_id'})
  }
  return users;
};
