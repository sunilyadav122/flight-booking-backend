const { StatusCodes } = require("http-status-codes");
const { AirportRepository } = require("../repositories");
const ErrorHandler = require("../utils/error");
const { City } = require("../models");

class AirportService {
  constructor() {
    this.airportRepository = new AirportRepository();
  }

  async createAirport(data) {
    try {
      const airport = await this.airportRepository.create(data);
      return airport;
    } catch (error) {
      throw new ErrorHandler(error.message, StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }

  async getAirport(id) {
    try {
      if (!id) {
        throw new ErrorHandler(
          "Airport id is required",
          StatusCodes.BAD_REQUEST
        );
      }
      const airport = await this.airportRepository.get(id, {
        include: [City],
      });
      return airport;
    } catch (error) {
      throw new ErrorHandler(error.message, StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }

  async getAirports() {
    try {
      const airports = await this.airportRepository.getAll();
      return airports;
    } catch (error) {
      throw new ErrorHandler(error.message, StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }

  async updateAirport(id, data) {
    try {
      if (!id) {
        throw new ErrorHandler(
          "Airport id is required",
          StatusCodes.BAD_REQUEST
        );
      }

      const airport = await this.airportRepository.update(id, data);
      return airport;
    } catch (error) {
      throw new ErrorHandler(error.message, StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }

  async deleteAirport(id) {
    try {
      const response = await this.airportRepository.destroy(id);
      return response;
    } catch (error) {
      throw new ErrorHandler(error.message, StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }
}

module.exports = AirportService;
