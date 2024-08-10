const mongoose = require('mongoose');

// shape data
const kittySchema = new mongoose.Schema({
    name: String
  });
  
const Kitten = mongoose.model('Kitten', kittySchema);

module.exports = Kitten;
// const cat = new Kitten({ name: 'Hi Khoa' });
// cat.save();