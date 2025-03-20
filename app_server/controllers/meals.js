const fs = require('fs')
const meal_data = JSON.parse(fs.readFileSync(`./data/meals.json`, `utf8`));

/* Get Rooms view */

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
const meals = (req, res) => {
    res.render('meals', { title: 'Meals', meal_data})
};

module.exports = {
    meals
}