const CrudRepository = require("./crud-repository");
const { City } = require("../models");

class CityRepository extends CrudRepository {
  constructor() {
    super(City);
    this.cityModel = City;
  }

  async findOne(whereClause) {
    const response = await this.cityModel.findOne({ where: whereClause });
    return response;
  }
}

module.exports = CityRepository;
