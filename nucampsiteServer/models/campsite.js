const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Load the mongoose-currency type to handle currency values
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

// Comment Schema remains the same as defined earlier
const commentSchema = new Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

// Campsite Schema updated to include additional fields
const campsiteSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    elevation: {
        type: Number,
        required: true
    },
    cost: {
        type: Currency,  // Currency type to handle cost
        required: true,
        min: 0
    },
    featured: {
        type: Boolean,
        default: false
    },
    comments: [commentSchema]
}, {
    timestamps: true
});

// Export the Campsite model
const Campsite = mongoose.model('Campsite', campsiteSchema);

module.exports = Campsite;