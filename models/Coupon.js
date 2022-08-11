const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema({
    name: String,
    discount: Number,
    redeemed: Boolean,
    expires_at: Date,
    created_date: {
        type: Date,
        default: Date.now
    }

});

module.exports = new mongoose.model('Coupon', couponSchema);