const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CountrySchema = new Schema({
    name: { type: String, required: true },
    flag: { type: String, required: true },
    dishes: [{ type: Schema.Types.ObjectId, ref: "dish", required: true }]
});

const Country = mongoose.model("country", CountrySchema);
module.exports = Country;
