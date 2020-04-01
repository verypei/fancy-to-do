'use strict';
const bcrypt = require("bcrypt")
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class User extends Model{}
  
  User.init({
    email: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          msg:"Email can't be empty"
        }
      }
    },
    username: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          msg:"username can't be empty"
        }
      }
    },
    password: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          msg:"Password can't be empty"
        }
      }
    }
  }, {hooks: {
    beforeCreate: (instance, options) => {
      let salt = bcrypt.genSaltSync(8)
      let hash = bcrypt.hashSync(instance.password,salt)
      instance.password=hash
    }
  },sequelize});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Todo,{foreignKey:"UserId"})
  };
  return User;
};