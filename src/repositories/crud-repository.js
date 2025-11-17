const { StatusCodes } = require("http-status-codes");
const ErrorHandler = require("../utils/error");

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(payload) {
    const response = await this.model.create(payload);
    return response;
  }

  async destroy(id) {
    const response = await this.model.destroy({
      where: {
        id: id,
      },
    });
    if (!response) {
      throw new ErrorHandler("Resource not found", StatusCodes.NOT_FOUND);
    }
    return response;
  }

  async get(id) {
    const response = await this.model.findByPk(id);
    if (!response) {
      throw new ErrorHandler("Resource not found", StatusCodes.NOT_FOUND);
    }
    return response;
  }

  async update(id, payload) {
    const response = await this.model.update(payload, {
      where: {
        id: id,
      },
    });
    return response;
  }

  async getAll() {
    const response = await this.model.findAll();
    return response;
  }
}

module.exports = CrudRepository;
