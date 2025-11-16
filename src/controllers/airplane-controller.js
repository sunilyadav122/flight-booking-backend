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

module.exports = {
  createAirplane,
  getAirplanes,
};
