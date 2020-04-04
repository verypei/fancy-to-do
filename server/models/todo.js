'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Todo extends Model{}
  
  Todo.init({
    title: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          msg:"Title can't be empty"
        }
      }
    },
    description: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          msg:"Description can't be empty"
        }
      }
    },
    status: {
      type:DataTypes.BOOLEAN,
      validate:{
        notEmpty:{
          msg:"Status can't be empty"
        }
      }
    },
    due_date: {
      type:DataTypes.DATEONLY,
      validate:{
        notEmpty:{
          msg:"Due_date can't be empty"
        }
      }
    }
  },{sequelize}) 
  Todo.associate = function(models) {
    // associations can be defined here
    Todo.belongsTo(models.User,{foreignKey:"UserId"})
  };
  return Todo;
};