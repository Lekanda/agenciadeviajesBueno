// const Viaje = require('../models/Viajes');
// const Testimonial = require('../models/Testimoniales');

// exports.consultasHomepage = async (req, res) => {
//     const promises = [];
//     const viajes = await Viaje.findAll({ limit: 3 });
//     const testimoniales = await Testimonial.findAll({ limit: 3});

//     res.render('index', {
//             pagina: 'Proximos Viajes',
//             clase: 'home',
//             viajes,
//             testimoniales
//     }) 
// }



var Viaje = require('../models/Viajes');

var Testimonial = require('../models/Testimoniales');

exports.consultasHomepage = async function (req, res) {
  var promises = [];
  var viajes = await Viaje.findAll({
    limit: 3
  });
  var testimoniales = await Testimonial.findAll({
    limit: 3
  });
  res.render('index', {
    pagina: 'Proximos Viajes',
    clase: 'home',
    viajes: viajes,
    testimoniales: testimoniales
  });
};