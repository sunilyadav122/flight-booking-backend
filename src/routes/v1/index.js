const { InfoController } = require("../../controllers");
const AirplaneRoutes = require("./airplane-routes");
const CityRoutes = require("./city-routes");
const AirportRoutes = require("./airport-routes");
const express = require("express");
const router = express.Router();

router.use("/airplanes", AirplaneRoutes);
router.get("/info", InfoController.info);
router.use("/cities", CityRoutes);
router.use("/airports", AirportRoutes);

module.exports = router;
