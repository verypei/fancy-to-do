'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.addColumn("Todo","UserId",Sequelize.INTEGER);
  
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.removeColumn("Todo","UserId");
    
  }
};
