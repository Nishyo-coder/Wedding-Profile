const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Gallery extends Model {}

Gallery.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    theme: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    wedding_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'gallery',
  }
);

module.exports = Gallery;
