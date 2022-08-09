const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        first: String,
        last: String
    },
    email: String,
    password_1: String,
    password_2: String,
    // password_hash: String,
    user_name: String,
    user_avatar: String,
    preferred_theme: String,
    favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }],
    ratings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Rating' }],
    purchase_history: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' }],

});

module.exports = new mongoose.model('User', userSchema);