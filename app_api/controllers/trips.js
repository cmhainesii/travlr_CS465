const mongoose = require('mongoose');
const Trip = require('../models/travlr');
const Model = mongoose.model('trips');

// GET: /trips - lists all the trips regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsList = async(req, res) => {
    // Refactor: updated undescriptive variable name 'q'
    const query = await Model
        .find({}) // No filter, return all records
        .exec();

        // Uncomment the following line to show results of querey on the console
        //console.log(query);

    if(!query)
    {
        // Database returned no data
        return res.status(404).json(err);
    } else {
        return res.status(200).json(query);
    }
};

// GET: /trips/:tripCode - lists a single trip
// Returns HTML status code and JSON message regardless of query outcome
const tripsFindByCode = async(req, res) => {
    const query = await Model
        .find({'code' : req.params.tripCode })
        .exec();

        // Uncomment the following line to show query results on the console
        //console.log(query);

    if (!query) {
        // Database returned no data
        return res.status(404).json(err);
    } else {
        // Return resulting trip
        return res.status(200).json(query);
    }
};

module.exports = {
    tripsList,
    tripsFindByCode
};