const express = require('express'); // Express app
const router = express.Router();    // Router logic

// Import controllers
const tripsController = require('../controllers/trips');

// Define routes
router
    .route('/trips')
    .get(tripsController.tripsList) // Get method routes tripList
    .post(tripsController.tripsAddTrip); // Post method adds a trip

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);

module.exports = router;