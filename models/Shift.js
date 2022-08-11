const mongoose = require('mongoose');

const shiftSchema = new mongoose.Schema({
    event_name: String,
    destination: { type: mongoose.Schema.Types.ObjectId, ref: 'Address' },
    time_frame: {
        start: Date,
        end: Date
    },
    team: {
        driver: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        sales: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        maintenence: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        canna_girls: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],

    },
    vehicle: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' }

});

module.exports = new mongoose.model('Shift', shiftSchema);