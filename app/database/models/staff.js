'use strict';

module.exports = (sequelize,DataTypes)=> {
  const staff= sequelize.define('staffs',
  {
    name: DataTypes.STRING,
    salary: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    designation: DataTypes.STRING,
    age: DataTypes.INTEGER,
    dob: DataTypes.DATE,
    doj: DataTypes.DATE
  },{});
  return staff;
};