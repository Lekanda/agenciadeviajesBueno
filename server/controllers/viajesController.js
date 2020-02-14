// const Viaje = require('../models/Viajes');

// exports.mostrarViajes = async (req, res) => {
//     const viajes = await Viaje.findAll()
//         res.render('viajes', {
//             pagina: 'Proximos Viajes',
//             viajes
//         } );
// }

// exports.mostrarViaje = async (req, res) => {
//     const viaje = await Viaje.findByPk(req.params.id)
//     res.render('viaje',  {
//         viaje
//     })
// }


var Viaje = require('../models/Viajes');

exports.mostrarViajes = async function (req, res) {
  var viajes = await Viaje.findAll();
  res.render('viajes', {
    pagina: 'Proximos Viajes',
    viajes: viajes
  });
};

exports.mostrarViaje = async function (req, res) {
  var viaje = await Viaje.findByPk(req.params.id);
  res.render('viaje', {
    viaje: viaje
  });
};