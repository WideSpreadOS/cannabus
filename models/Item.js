const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: String,
    sku: String,
    description: String,
    product: Boolean,
    price: Number,
    stats: {
        thc: Number,
        cbd: Number,

    },
    main_image: String,
    image_gallery: [String],
    rating: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Rating' }],
    created_date: {
        type: Date,
        default: Date.now
    }

});

module.exports = new mongoose.model('Item', itemSchema);