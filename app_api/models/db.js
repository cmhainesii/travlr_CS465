const mongoose = require('mongoose');
require('dotenv').config();

const dbURI = process.env.MONGO_URI || 'mongodb://127.0.0.1/travlr';

// Build the connection string and set the connection timeout
const connect = () => {
    setTimeout(() => mongoose.connect(dbURI, {}), 1000);
};

// Monitor connection events
mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected MongoDB`);
});

mongoose.connection.on('error', err => {
    console.log('Mongoose connection error: ', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

// Configure for graceful shutdown
const gracefulShutdown = (msg) => {
    mongoose.connection.close(() => {
        console.log(`Mongoose disconnected through ${msg}`);
        process.exit(0);
    })
}

// Event Listeners to process graceful shutdowns
process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart');
    process.kill(process.pid, 'SIGUSR2');
});
process.on('SIGINT', () => gracefulShutdown('app terminiation'));
process.on('SIGTERM', () => gracefulShutdown('app shutdown'));

// Make initial connection to DB
connect();

// Import Mongoose schema
require('./travlr');
require('./user')

module.exports = mongoose;