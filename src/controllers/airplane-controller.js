const { StatusCodes } = require("http-status-codes");
const { AirplaneService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

const airplaneService = new AirplaneService();

const createAirplane = async (req, res) => {
  try {
    const response = await airplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });

    SuccessResponse.data = response;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.err = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
};

const getAirplanes = async (req, res) => {
  try {
    const response = await airplaneService.getAirplanes();

    SuccessResponse.data = response;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.err = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
};

const getAirplane = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await airplaneService.getAirplane(id);

    SuccessResponse.data = response;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.err = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
};

const destroyAirplane = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await airplaneService.destroyAirplane(id);

    SuccessResponse.data = response;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.err = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
};

const updateAirplane = async (req, res) => {
  const payload = {};
  if (req.body.modelNumber) {
    payload.modelNumber = req.body.modelNumber;
  }
  if (req.body.capacity) {
    payload.capacity = req.body.capacity;
  }
  const id = req.params.id;
  try {
    const response = await airplaneService.updateAirplane(id, payload);

    SuccessResponse.data = response;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.err = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
};

module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane,
  destroyAirplane,
  updateAirplane,
};
