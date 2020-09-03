'use strict';

module.exports = (sequelize,DataTypes)=> {
  const registers = sequelize.define('registers',
  {
      frist_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      phone: DataTypes.STRING
  },{});
  return registers;
};