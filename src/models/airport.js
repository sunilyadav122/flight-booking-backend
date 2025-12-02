"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    static associate(models) {
      this.belongsTo(models.City, {
        foreignKey: "cityId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });

      this.hasMany(models.Flight, {
        foreignKey: "departureAirportId",
        onDelete: "CASCADE",
      });

      this.hasMany(models.Flight, {
        foreignKey: "arrivalAirportId",
        onDelete: "CASCADE",
      });
    }
  }
  Airport.init(
    {
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      code: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      cityId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Airport",
    }
  );
  return Airport;
};
