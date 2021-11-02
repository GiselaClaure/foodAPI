const express = require("express");
const router = express.Router();

const { createCountry, getAllCountries } = require("../controllers/country.controller");

router.post("/create", createCountry);
router.get("/", getAllCountries);

module.exports = router;