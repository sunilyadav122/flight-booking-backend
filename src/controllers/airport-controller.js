const { StatusCodes } = require("http-status-codes");
const { AirportService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

const airportService = new AirportService();

const createAirport = async (req, res) => {
  try {
    const payload = {
      name: req.body.name,
      code: req.body.code,
      address: req.body.address,
      cityId: req.body.cityId,
    };
    const airport = await airportService.createAirport(payload);
    SuccessResponse.data = airport;
    SuccessResponse.message = "Airport created successfully";
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.message = error.message;
    return res.status(error.statusCode).json(ErrorResponse);
  }
};

const getAirport = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const airport = await airportService.getAirport(id);
    SuccessResponse.data = airport;
    SuccessResponse.message = "Airport fetched successfully";
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.message = error.message;
    return res.status(error.statusCode).json(ErrorResponse);
  }
};

const getAirports = async (req, res) => {
  try {
    const airports = await airportService.getAirports();
    SuccessResponse.data = airports;
    SuccessResponse.message = "Airports fetched successfully";
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.message = error.message;
    return res.status(error.statusCode).json(ErrorResponse);
  }
};

const updateAirport = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const payload = {};
    if (req.body.name) payload.name = req.body.name;
    if (req.body.code) payload.code = req.body.code;
    if (req.body.address) payload.address = req.body.address;
    if (req.body.cityId) payload.cityId = req.body.cityId;

    const airport = await airportService.updateAirport(id, payload);
    SuccessResponse.data = airport;
    SuccessResponse.message = "Airport updated successfully";
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.message = error.message;
    return res.status(error.statusCode).json(ErrorResponse);
  }
};

const deleteAirport = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const response = await airportService.deleteAirport(id);
    SuccessResponse.data = response;
    SuccessResponse.message = "Airport deleted successfully";
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.message = error.message;
    return res.status(error.statusCode).json(ErrorResponse);
  }
};

module.exports = {
  createAirport,
  getAirport,
  getAirports,
  updateAirport,
  deleteAirport,
};
