const express = require("express");
const router = express.Router();

const { createDish, getAllDishes, getDishById } = require("../controllers/dish.controller");

router.post("/create", createDish );
router.get("/", getAllDishes);
router.get("/:characterId", getDishById);

module.exports = router;