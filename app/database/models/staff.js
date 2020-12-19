'use strict';

module.exports = (sequelize,DataTypes)=> {
  const staff = sequelize.define('staffs',
  {
    name: DataTypes.STRING,
    salary: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      phone: DataTypes.STRING,
      phone: DataTypes.STRING,
      phone: DataTypes.STRING
  },{});
  return staff;
};