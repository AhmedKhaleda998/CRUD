const mongoose = require('mongoose');
const personSchema = require('../schema/person');
const PersonModel = mongoose.model('person', personSchema);

module.exports = PersonModel;