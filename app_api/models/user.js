const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const crypto = require('node:crypto');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    hash: String,
    salt: String
});

// Fix arrow functions - they don't bind 'this' correctly
userSchema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

userSchema.methods.validPassword = function(password) {
    const hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash === hash;
};

userSchema.methods.generateJwt = function() {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 7); // Fixed: was missing the '+'

    return jwt.sign({
        _id: this._id, // Fixed: was this.id
        email: this.email,
        name: this.name,
        exp: parseInt(expiry.getTime() / 1000, 10)
    }, process.env.JWT_SECRET);
};

// Create and export the model
const User = mongoose.model('users', userSchema);
module.exports = User;