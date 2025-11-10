const { StatusCodes } = require("http-status-codes");
const { AirplaneService } = require("../services");

const airplaneService = new AirplaneService();

const createAirplane = async (req, res) => {
  try {
    const response = await airplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Airplane created successfully",
      data: response,
      err: {},
    });
  } catch (error) {
    return res
      .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
      .json({
        success: false,
        message: error.message,
        data: {},
        err: error,
      });
  }
};

module.exports = {
  createAirplane,
};
