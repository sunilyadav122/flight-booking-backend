const express = require("express");
const { CityController } = require("../../controllers");
const router = express.Router();

router.post("/", CityController.createCity);

router.get("/", CityController.getAllCities);

router.patch("/:id", CityController.updateCity);

router.delete("/:id", CityController.destroyCity);

router.get("/:id", CityController.getCity);

module.exports = router;
