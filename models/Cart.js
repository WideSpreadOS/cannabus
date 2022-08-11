const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    current_items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }],
    total_price: Number,
    tax: Number,
    created_date: {
        type: Date,
        default: Date.now
    }

});

module.exports = new mongoose.model('Cart', cartSchema);