'use strict';
module.exports = (sequelize,DataTypes)=> {
  const user = sequelize.define('user',
  {
    firstName : DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password:  DataTypes.STRING,
    phone: DataTypes.INTEGER,
    is_active: DataTypes.INTEGER,
    createdAt:  DataTypes.DATE,
    updatedAt:  DataTypes.DATE
  },{});
  return user;
};
