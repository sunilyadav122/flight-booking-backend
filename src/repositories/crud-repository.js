const { Logger } = require("../config");

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(payload) {
    try {
      const response = await this.model.create(payload);
      return response;
    } catch (error) {
      Logger.error("Error creating document from crud repository: Create");
      throw error;
    }
  }

  async destroy(id) {
    try {
      const response = await this.model.destroy({
        where: {
          id: id,
        },
      });
      return response;
    } catch (error) {
      Logger.error("Error deleting document from crud repository: Destroy");
      throw error;
    }
  }

  async get(id) {
    try {
      const response = await this.model.findByPk(id);
      return response;
    } catch (error) {
      Logger.error("Error fetching document from crud repository: Get");
      throw error;
    }
  }

  async update(id, payload) {
    try {
      const response = await this.model.update(payload, {
        where: {
          id: id,
        },
      });
      return response;
    } catch (error) {
      Logger.error("Error updating document from crud repository: Update");
      throw error;
    }
  }

  async getAll() {
    try {
      const response = await this.model.findAll();
      return response;
    } catch (error) {
      Logger.error("Error fetching all documents from crud repository: GetAll");
      throw error;
    }
  }
}

module.exports = CrudRepository;
