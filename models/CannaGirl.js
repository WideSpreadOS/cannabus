const mongoose = require('mongoose');

const cannaGirlSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    favorite_photo: String,
    background_photo: String,
    photos: [String],
    bio: {
        introduction: String,
        summary: String,
        favorite_quote: {
            quote: String,
            by: String,
        },
        hobbies: [String],
    },
    uniform: {
        headwear: {
            size: Number,            
            current_inventory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }],

        },
        glasses: {
            size: Number,     
            perscription: String,       
            current_inventory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }],

        },
        tops: {
            size: {
                cup: Number,
                chest: Number,
                bust: Number
            },            
            current_inventory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }],

        },
        bottoms: {
            size: {
                waist: Number,
                hip: Number,
                total_rise: Number
            },
            current_inventory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }],

        },
        footwear: {
            size: Number, 
            width: {
                type: String,
                default: '',
            },        
            current_inventory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }],

        },
        sets: {
            current_inventory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }],

        },
        accessories: {
            current_inventory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }],

        },
        other: {
            size: Number,
            current_inventory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }],

        },

    },
    likes: [Number],


    // THIS IS END

});

module.exports = new mongoose.model('CannaGirl', cannaGirlSchema);