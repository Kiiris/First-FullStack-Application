const mognoose = require('mongoose');
const Schema = mognoose.Schema;

const Profile = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    passwordConfirm: { type: String, required: true },
    favoriteAnimal: { type: String, required: true },
    image: String,
    details: String
  },
  { timestamps: true }
);

module.exports = Profile;
