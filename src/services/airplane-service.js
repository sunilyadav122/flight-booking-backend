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
}

module.exports = AirplaneService;
