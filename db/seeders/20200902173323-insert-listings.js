'use strict';

function r(o) {
  o.createdAt = new Date();
  o.updatedAt = new Date();
  return o;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Listings', [
      r({ name: 'Awesome place!', type: 'house', max_occupancy: 5, location: 'Albuquerque'}),
      r({ name: 'expensive place!', type: 'apartment', max_occupancy: 3, location: 'San Diego' }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Listings');
  }
};
