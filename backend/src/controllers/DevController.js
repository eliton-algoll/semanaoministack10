const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
  //cadastrando os devs
  async store(req, res){
    const {githubUsername, techs, latitude, longitude} = req.body;

    let dev = await Dev.findOne(githubUsername);
  
    if(!dev){
        const response = await axios.get(`https://api.github.com/users/${githubUsername}`);
      
        const {name = login, avatar_url, bio} = response.data;
      
        const location = {
          type: 'Point',
          coordinates: [longitude, latitude]
        }
      
        dev = await Dev.create({ 
          githubUsername,
          name,
          avatarUrl :avatar_url,
          bio,
          techs,
          location
        })
      }
      return res.json(dev);
  },

  //listando os devs
  async index(req, res){
    const devs = await Dev.find();

    return res.json(devs);
  },
}