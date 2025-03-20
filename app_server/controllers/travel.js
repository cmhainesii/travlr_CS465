
const fs = require('fs')
const trips = JSON.parse(fs.readFileSync(`./data/trips.json`, `utf8`));

/* Get Travel view */

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
const travel = (req, res) => {
    res.render('travel', { title: 'Travlr Getaways', trips})
};

module.exports = {
    travel
}