const {Router} = require('express');
const axios = require('axios');
const Dev = require('./models/Dev');

const routes = Router();

routes.post('/devs', async(req, res) =>{
  const {githubUsername, techs} = req.body;

  const response = await axios.get(`https://api.github.com/users/${githubUsername}`);

  const {name = login, avatar_url, bio} = response.data;

  const techsArray = techs.split(',').map(tech => tech.trim());

  const dev = await Dev.create({ 
    githubUsername,
    name,
    avatarUrl :avatar_url,
    bio,
    techs: techsArray
  })

  return res.json(dev);
});

module.exports = routes;