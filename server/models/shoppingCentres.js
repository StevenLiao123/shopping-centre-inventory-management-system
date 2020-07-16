const mongoose = require('mongoose');

const shoppingCentresSchema = mongoose.Schema({
    name: {
        type: String
    },
    address: {
        streetName: String,
        suburb: String,
        state: String,
        postCode: Number
    }
});

module.exports = mongoose.model('shopping-centres', shoppingCentresSchema, 'shopping-centres');