const { StatusCodes } = require("http-status-codes");
const { AirplaneRepository } = require("../repositories");
const ErrorHandler = require("../utils/error");

class AirplaneService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
  }

  async createAirplane(data) {
    try {
      const response = await this.airplaneRepository.create(data);
      return response;
    } catch (error) {
      if (error.name === "SequelizeValidationError") {
        const explanation = error.errors.map((e) => e.message);
        throw new ErrorHandler(explanation, StatusCodes.BAD_REQUEST);
      }
      throw new ErrorHandler(error.message, StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }

  async getAirplanes() {
    try {
      const response = await this.airplaneRepository.getAll();
      return response;
    } catch (error) {
      throw new ErrorHandler(
        error.message || "Failed to fetch all the airplanes.",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  async getAirplane(id) {
    try {
      const response = await this.airplaneRepository.get(id);
      return response;
    } catch (error) {
      if (error.statusCode === StatusCodes.NOT_FOUND) {
        throw new ErrorHandler(
          "The airplane you requested is not available",
          StatusCodes.NOT_FOUND
        );
      }
      throw new ErrorHandler(
        error.message || "Failed to fetch the airplane.",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  async destroyAirplane(id) {
    try {
      const respone = await this.airplaneRepository.destroy(id);
      return respone;
    } catch (error) {
      if (error.statusCode === StatusCodes.NOT_FOUND) {
        throw new ErrorHandler(
          "The airplane you requested to delete is not available",
          StatusCodes.NOT_FOUND
        );
      }
      throw new ErrorHandler(
        error.message || "Failed to delete the airplane.",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  async updateAirplane(id, data) {
    try {
      const response = await this.airplaneRepository.update(id, data);
      return response;
    } catch (error) {
      if (error.statusCode === StatusCodes.NOT_FOUND) {
        throw new ErrorHandler(
          "The airplane you requested to update is not available",
          StatusCodes.NOT_FOUND
        );
      }
      throw new ErrorHandler(
        error.message || "Failed to update the airplane.",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }
}

module.exports = AirplaneService;
