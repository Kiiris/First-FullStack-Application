const mongoose = require('mongoose');
const ProfileSchema = require('./profile');
const RecipeSchema = require('./recipes');

const Profile = mongoose.model('profiles', ProfileSchema);
const Recipe = mongoose.model('recipes', RecipeSchema);

module.exports = {
  Recipe,
  Profile
};
