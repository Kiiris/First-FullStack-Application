const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Recipe = new Schema(
  {
    Food: { type: String, required: true },
    made_by: { type: String, required: true },
    image: { type: String, required: true },
    cooktime: { type: Number, required: true },
    // stars: { type: Number, required: true },
    etc: [{ details: String, review: String, healthy: Boolean }]
  },
  { timestamps: true }
);

module.exports = mongoose.model('recipes', Recipe);
