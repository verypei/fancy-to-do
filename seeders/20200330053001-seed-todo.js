'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('toDos', [
      {
        title: 'created web scheme',
        description:'important level 1',
        status:"true",
        due_date:"2020-6-13",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        title: 'Fixing bugs controller',
        description:'important level 2',
        status:"true",
        due_date:"2020-6-25",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        title: 'created vue js',
        description:'important level 3',
        status:"true",
        due_date:"2020-6-30",
        createdAt:new Date(),
        updatedAt:new Date()
      }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
