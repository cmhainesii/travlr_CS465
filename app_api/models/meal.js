const mongoose = require('mongoose');

// Define the meal schema
const mealSchema = new mongoose.Schema({
    heading: { type: String, required: true },
    image: { type: String, required: true },
    meal_name: { type: String, required: true, index: true },
    description: { type: String, required: true }
});

const Meal = mongoose.model('meals', mealSchema);
module.exports = Meal;