const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create shoe Schema & model
const ShoeSchema = new Schema({
  color: {
    type: String,
    required: [true, 'Color field is required']
  },
  brand: {
    type: String,
    required: [true, 'Brand field is required']
  },
  price: {
    type: Number,
    required: [true, 'Price field is required']
  },
  size: {
    type: Number,
    required: [true, 'Size field is required']
  },
  in_stock: {
    type: Number,
    // required: [true, ' field is required']
  },
});

const shoeCatalogue = mongoose.model('shoe', ShoeSchema);

module.exports = shoeCatalogue;
