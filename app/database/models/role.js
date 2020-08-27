'use strict';
module.exports = (sequelize,DataTypes)=> {
  const role = sequelize.define('role',
  {
    roleName : DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  },{});
  return role;
};
