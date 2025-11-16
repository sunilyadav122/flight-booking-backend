const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const ErrorHandler = require("../utils/error");

const validateCreateAirplane = (req, res, next) => {
  if (!req.body.modelNumber) {
    ErrorResponse.message = "Model Number is required";
    ErrorResponse.err = new ErrorHandler(
      ["Model Number missing in request body"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  next();
};

module.exports = {
  validateCreateAirplane,
};
