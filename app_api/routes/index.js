const express = require('express'); // Express app
const router = express.Router();    // Router logic
const { expressjwt: jwt } = require('express-jwt');  // Updated import syntax

const auth = jwt({
    secret: process.env.JWT_SECRET,
    algorithms: ['HS256'],  // Required in newer versions
    userProperty: 'payload'
});

// Import controllers
const tripsController = require('../controllers/trips');
const authController = require('../controllers/authentication')

// Define routes

router
    .route('/login')
    .post(authController.login);

router
    .route('/register')
    .post(authController.register);

router
    .route('/trips')
    .get(tripsController.tripsList) // Get method routes tripList
    .post(auth, tripsController.tripsAddTrip); // Post method adds a trip

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(auth, tripsController.tripsUpdateTrip);

module.exports = router;