'use strict';

const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  
  const Model = sequelize.Sequelize.Model

  class User extends Model{}
  
  User.init({
    email: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          msg:"email should be filled"
        }
      }
    },
    username:{
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          msg:"username should be filled"
        }
      }
    },
    password:{
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          msg:"password can't be empty"
        }
      }
    }
  }, {
      hooks:{
        beforeCreate(instance, options){
          let salt = bcrypt.genSaltSync(8);//pin round sebanyak 10 kali
          let hash = bcrypt.hashSync(instance.password, salt);//hashing instance pasword berdasarkan salt
          instance.password = hash
        }
  },sequelize})
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.toDo,{foreignkey:"userId"})
  };
  return User;
};