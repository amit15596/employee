'use strict';
module.exports = (sequelize,DataTypes)=> {
  const user = sequelize.define('user',
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
  user.associate = function(models) {
    user.belongsTo(models.role,
      {
        foreignKey: 'r_id', as: 'role'
      }
    )
  }
  return user;
};
