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

const tripsAddTrip = async (req, res) => {
  getUser(req, res, async (req, res, location) => {
    try {
      const trip = await Model.create({
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
      });
      
      // Return resulting trip
      return res.status(201).json(trip);
    } catch (err) {
      // Database returned an error
      return res.status(400).json(err);
    }
  });
};

// PUT: /trips/:tripCode - Updates an existing Trip
const tripsUpdateTrip = async (req, res) => {
  getUser(req, res, async (req, res, location) => {
    try {
      const trip = await Model.findOneAndUpdate(
        {'code': req.params.tripCode},
        {
          code: req.body.code,
          name: req.body.name,
          length: req.body.length,
          start: req.body.start,
          resort: req.body.resort,
          perPerson: req.body.perPerson,
          image: req.body.image,
          description: req.body.description
        }
      );
      
      if (!trip) {
        // Database returned no data
        return res.status(400).json(err);
      } else {
        return res.status(201).json(trip);
      }
    } catch (err) {
      // Database returned an error
      return res.status(400).json(err);
    }
  });
};

const getUser = async (req, res, callback) => {
  // Get the authenticated user from the JWT token
  // In express-jwt v7+, the default property is req.auth instead of req.payload
  const payload = req.auth || req.payload;
  
  if (!payload || !payload._id) {
    return res.status(401).json({"message": "Unauthorized"});
  }
  
  try {
    // For this assignment, we just need to verify authentication
    // No need to actually look up the user - just proceed with the callback
    callback(req, res, null);
  } catch (err) {
    return res.status(400).json(err);
  }
}

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip
};