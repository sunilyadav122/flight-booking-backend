const { AirportController } = require("../../controllers");

const express = require("express");
const router = express.Router();

router.post("/", AirportController.createAirport);

router.get("/", AirportController.getAirports);

router.get("/:id", AirportController.getAirport);

router.delete("/:id", AirportController.deleteAirport);

router.put("/:id", AirportController.updateAirport);

module.exports = router;
