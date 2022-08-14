const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    password: String,
    password2: String,
    // password_hash: String,
    dob: Date,
    user_name: String,
    user_avatar: String,
    preferred_theme: String,
    favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }],
    ratings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Rating' }],
    purchase_history: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' }],
    joined_date: {
        type: Date,
        default: Date.now
    }

});

module.exports = new mongoose.model('User', userSchema);