const Dev = require('../models/Dev');
module.exports = {
  //busca todos os devs em um raio de 10km
  //filtra por tecnologias
  async index(req, res){
    const {latitude, longitude, techs} = req.query;

    const devs = await Dev.find({
      techs: {
        $in: techs
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: 10000,
        },
      }
    });

    return res.json(devs);
  }
}