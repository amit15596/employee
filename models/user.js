'use strict';
module.exports = (sequelize,DataTypes)=> {
  const user = sequelize.define("user",{
    id:DataTypes.INTEGER,
    firstName : DataTypes.STRING,
    lastName:DataTypes.STRING,
    email: DataTypes.STRING,
    password:  DataTypes.STRING,
    active: DataTypes.INTEGER,
    createdAt:  DataTypes.DATE,
    updatedAt:  DataTypes.DATE
  },{});
  return user;
};
