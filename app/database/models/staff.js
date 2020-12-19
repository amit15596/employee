'use strict';

module.exports = (sequelize,DataTypes)=> {
  const staffs = sequelize.define('staffs',
  {
      frist_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      phone: DataTypes.STRING
  },{});
  return staffs;
};