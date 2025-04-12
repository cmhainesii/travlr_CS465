const mongoose = require('mongoose');
const Trip = require('../models/meal');
const Model = mongoose.model('meals');

// GET: /meals - List all meals. Response includes HTML status code and JSON message.
const mealsList = async (req, res) => {
    const query = await Model.find({}).exec();

    if (!query) {
        return res.status(404).json(err);
    } else {
        return res.status(200).json(query);
    }
};

const mealsFindByName = async (req, res) => {
    const query = await Model.find({'meal_name': req.params.meal_name }).exec();

    if (!query) {
        return res.status(404).json(err);
    } else {
        return res.status(200).json(query);
    }
}


module.exports = {
    mealsList,
    mealsFindByName
};