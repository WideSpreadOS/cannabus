const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
    item: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' },
    comment: String,
    score: Number,
    emoji: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    created_date: {
        type: Date,
        default: Date.now
    }

});

module.exports = new mongoose.model('Rating', ratingSchema);