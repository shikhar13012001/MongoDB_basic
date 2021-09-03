const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a Schema and a Model

const MarioCharSchema = new Schema({
    name: String,
    weight: Number
}, {
    usePushEach: true
  });

const MarioChar = mongoose.model('mariochar', MarioCharSchema);

module.exports = MarioChar;
