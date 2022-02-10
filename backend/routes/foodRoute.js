const express = require("express");
const { getAllFoods, createFoodItems, updateFoods, deleteFoods, getFoodDetails } = require("../controllers/foodController");
const router = express.Router();

router.route("/foods").get(getAllFoods);

router.route("/foods/createFoodItems").post(createFoodItems);
router.route("/foods/:id").put(updateFoods).delete(deleteFoods).get(getFoodDetails);

module.exports = router;
