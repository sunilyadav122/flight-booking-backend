const { StatusCodes } = require("http-status-codes");
const { CityRepository } = require("../repositories");
const ErrorHandler = require("../utils/error");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }

  async createCity(data) {
    try {
      const isCityAlreadyPresent = await this.cityRepository.findOne({
        name: data.name,
      });
      if (isCityAlreadyPresent) {
        throw new ErrorHandler("City already exists", StatusCodes.BAD_REQUEST);
      }
      const response = await this.cityRepository.create(data);
      return response;
    } catch (error) {
      throw new ErrorHandler(
        error.message || "Failed to create a new city.",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  async updateCity(id, data) {
    try {
      const response = await this.cityRepository.update(id, {
        name: data.name,
      });
      return response;
    } catch (error) {
      if (error.statusCode === StatusCodes.NOT_FOUND) {
        throw new ErrorHandler("City not found.", StatusCodes.NOT_FOUND);
      }
      throw new ErrorHandler(
        error.message || "Failed to update the city.",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  async getAllCities() {
    try {
      const cities = await this.cityRepository.getAll();
      return cities;
    } catch (error) {
      throw new ErrorHandler(
        error.message || "Failed to fetch cities.",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  async getCity(id) {
    try {
      const city = await this.cityRepository.get(id);
      return city;
    } catch (error) {
      if (error.statusCode === StatusCodes.NOT_FOUND) {
        throw new ErrorHandler("City not found.", StatusCodes.NOT_FOUND);
      }
      throw new ErrorHandler(
        error.message || "Failed to fetch the city.",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  async destroyCity(id) {
    try {
      const response = await this.cityRepository.destroy(id);
      return response;
    } catch (error) {
      if (error.statusCode === StatusCodes.NOT_FOUND) {
        throw new ErrorHandler("City not found.", StatusCodes.NOT_FOUND);
      }
      throw new ErrorHandler(
        error.message || "Failed to delete the city.",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }
}

module.exports = CityService;
