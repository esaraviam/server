const { Schema, model } = require('mongoose');

const discountsSchema = Schema({
  brand: {
    type: String,
  },
  threshold: {
    type: Number,
  },
  discount: {
    type: Number,
  },
});

module.exports = model('Discounts', discountsSchema);
