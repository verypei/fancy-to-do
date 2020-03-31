'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.addColumn('toDos', "userId",Sequelize.INTEGER);
    
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.removeColumn('toDos',"userId");
    
  }
};
