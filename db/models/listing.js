'use strict';
module.exports = (sequelize, DataTypes) => {
  const Listing = sequelize.define('Listing', {
    type: DataTypes.STRING,
    max_occupancy: DataTypes.INTEGER,
    location: DataTypes.STRING,
    booked: DataTypes.DATE
  }, {});
  Listing.associate = function(models) {
    Listing.belongsToMany(models.User, {
      foreignKey: 'ListingId',
      through: 'Bookings',
      otherKey: 'UserId',
    })
  };
  return Listing;
};