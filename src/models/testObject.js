const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TestObjectSchema = new Schema({
    id: { type: Number, min: 1, max: 999, required: true },
    name: String,
    status: {
        type: String,
        enum: ['Available', 'Occupied']
    }
});

module.exports = mongoose.model('TestCollection', TestObjectSchema );