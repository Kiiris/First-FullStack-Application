const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Profile = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    optional: [{ image: String, details: String }]
  },
  { timestamps: true }
);

module.exports = mongoose.model('profiles', Profile);
