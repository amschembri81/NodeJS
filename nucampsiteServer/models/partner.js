const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Partner Schema
const partnerSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        default: false
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true  
});

// Create and export the Partner model
const Partner = mongoose.model('Partner', partnerSchema);
module.exports = Partner;