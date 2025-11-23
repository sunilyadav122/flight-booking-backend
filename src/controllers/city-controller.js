const { StatusCodes } = require("http-status-codes");
const { CityService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

const cityService = new CityService();

const createCity = async (req, res) => {
  try {
    const cityCreatedResponse = await cityService.createCity({
      name: req.body.name,
    });

    SuccessResponse.data = cityCreatedResponse;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.err = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
};

const updateCity = async (req, res) => {
  try {
    const id = req.params.id;
    const cityUpdatedResponse = await cityService.updateCity(id, {
      name: req.body.name,
    });

    SuccessResponse.data = cityUpdatedResponse;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.err = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
};

const getAllCities = async (req, res) => {
  try {
    const cities = await cityService.getAllCities();

    SuccessResponse.data = cities;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.err = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
};

const getCity = async (req, res) => {
  try {
    const id = req.params.id;
    const city = await cityService.getCity(id);

    SuccessResponse.data = city;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.err = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
};

const destroyCity = async (req, res) => {
  try {
    const id = req.params.id;
    await cityService.destroyCity(id);
    return res.status(StatusCodes.NO_CONTENT).json({});
  } catch (error) {
    ErrorResponse.err = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
};

module.exports = {
  createCity,
  updateCity,
  getAllCities,
  getCity,
  destroyCity,
};
