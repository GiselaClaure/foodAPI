const Dish= require("../models/dish.model");
const HTTPSTATUSCODE = require("../../../utils/httpStatusCode");

const createDish= async (req, res, next) => {
    try {
        const newDish = new Dish ();
        newDish.name= req.body.name;
        newDish.type= req.body.type;
        newDish.description= req.body.description;
        newDish.photo= req.body.photo;
        const DishDb= await newDish.save();
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[201],
            data: { dish: DishDb.name }
        })

    } catch (error) {
        return next(error);  
    }
}

const getAllDishes = async (req, res, next) => {
    try {
            const dish = await Dish.find();
            return res.json({
                status: 200,
                message: HTTPSTATUSCODE[200],
                data: { dish: dish }
            });
        }catch (error) {
        return next(error)
    }
}

const getDishById = async (req, res, next) => {
    try {
        const { dishId } = req.params;
        const dishById = await Dish.findById(dishId);
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { dish: dishById }
        })
    } catch (error) {
        return next(error)
    }
}

module.exports = { createDish, getAllDishes, getDishById };
