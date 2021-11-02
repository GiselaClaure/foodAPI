const mongoose= require("mongoose");
const Schema= mongoose.Schema;

const DishSchema = new Schema(
    {
        name: { type: String, require: true },
        type: { type: String, require: true },
        description: { type: String, require: true },
        photo: { type: String, require: true },
    },
    { timestamps: true }
);

const Dish= mongoose.model("dish", DishSchema);
module.exports = Dish;