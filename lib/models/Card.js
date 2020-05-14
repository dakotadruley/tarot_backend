const mongoose = require('mongoose');

const schema = new mongoose.Schema({
name: {
    type: String,
    required: true
},
number: {
    type: Number,
    required: true
},
image: {
    type: String, 
    required: true
},
description: {
    type: String,
    required: true
}
});

module.exports = mongoose.model('Card', schema);