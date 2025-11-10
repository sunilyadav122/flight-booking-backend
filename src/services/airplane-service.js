const { AirplaneRepository } = require("../repositories");

class AirplaneService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
  }

  async createAirplane(data) {
    try {
      const response = await this.airplaneRepository.create(data);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AirplaneService;
