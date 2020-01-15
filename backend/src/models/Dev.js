const mongoose = require('mongoose');

const DevSchema = new mongoose.Schema({
  name: String,
  githubUsername: String,
  bio: String,
  avatarUrl: String,
  techs: [String],
}); 

module.exports = mongoose.model('Dev', DevSchema);