'use strict';
module.exports = (sequelize,DataTypes)=> {
  const role = sequelize.define('roles',
  {
    roleName : DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  },{});
  return role;
};
