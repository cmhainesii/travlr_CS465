const express = require('express'); // Express app
const router = express.Router();    // Router logic

// Import controllers
const tripsController = require('../controllers/trips');

// Define routes
router.route('/trips').get(
    tripsController.tripsList
);  // GET Method routes tripList

router.route('/trips/:tripCode').get(
    tripsController.tripsFindByCode
);

module.exports = router;