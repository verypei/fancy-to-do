'use strict';
module.exports = (sequelize, DataTypes) => {
  
  const Model = sequelize.Sequelize.Model
  
  class toDo extends Model{}
  
  toDo.init(
  {
    title:{
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          msg:"title should be filled!!!"
        }
      }
    },
    description:{
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          msg:"description shoud be filled"
        }
      }
    },
    status: {
      type:DataTypes.BOOLEAN,
      validate:{
        notEmpty:{
          msg:"status should be filled"
        }
      }
  },
  due_date:{
    type:DataTypes.DATEONLY,
    validate:{
      notEmpty:{
        msg:"date can't empty and the format should yyyy/mm/dd"
      }
    }
  },
  userId:DataTypes.INTEGER
},

{sequelize});
  toDo.associate = function(models) {
    // associations can be defined here
    toDo.belongsTo(models.User,{foreignkey:"userId"})
  };
  return toDo;
};