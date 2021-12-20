const mognoose = require('mongoose');
const Schema = mognoose.Schema;

const Recipe = new Schema(
  {
    food: { type: String, required: true },
    made_by: { type: String, required: true },
    image: { type: String, required: true },
    cooktime: { type: Number, required: true },
    ingredients: { type: String, required: true },
    instructions: { type: String, required: true },
    details: String,
    review: String,
    healthy: Boolean
  },
  { timestamps: true }
);

module.exports = Recipe;
