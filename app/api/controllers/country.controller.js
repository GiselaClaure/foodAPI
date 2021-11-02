const Country = require("../models/country.model");
const HTTPSTATUSCODE = require("../../../utils/httpStatusCode");

const createCountry = async (req, res, next) => {
    try {
        const newCountry = new Country();
        newCountry.name = req.body.name;
        newCountry.flag = req.body.flag;
        newCountry.dishes = req.body.dishes;
        const CountryDb = await newCountry.save();
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[201],
            data: { country: CountryDb }
        })
    } catch (error) {
        return next(error);
    }
}

const getAllCountries = async (req, res, next) => {
    try {
        const countries = await Country.find().populate("dishes");
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { countires: countries }
        })
    } catch (error) {
        return next(error);
    }
}

module.exports = { createCountry, getAllCountries }