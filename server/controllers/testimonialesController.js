// const Testimonial = require('../models/Testimoniales');

// exports.mostrarTestimoniales = async (req, res) => {
//     const testimoniales = await Testimonial.findAll()
//     res.render('testimoniales', {
//         pagina: 'Opiniones',
//         testimoniales
//         })
//     }
// exports.añadirTestimonial = async (req, res) => {
//     //Validar que todos los campos esten llenos
//     let {nombre, correo, mensaje} = req.body;
//     let errores = [];
//     if(!nombre) {
//         errores.push({'mensaje' : 'Agrega tu Nombre'})            
//     }
//     if(!correo) {
//         errores.push({'mensaje' : 'Agrega tu Correo'})            
//     }
//     if(!mensaje) {
//         errores.push({'mensaje' : 'Agrega tu Mensaje'})            
//     }

//     // Revisar por errores
//     if(errores.length > 0 ) {
//         // Muestra la vista con errores
//         const testimoniales = await Testimonial.findAll()
//         res.render('testimoniales', {
//             errores,
//             nombre,
//             correo,
//             mensaje,
//             pagina:'Opiniones',
//             testimoniales
//         })
//     }else {
//         // Almacena en la DB
//         await Testimonial.create({
//             nombre,
//             correo,
//             mensaje
//         })
//         res.redirect('testimoniales')
//     }
// }



var Testimonial = require('../models/Testimoniales');

exports.mostrarTestimoniales = async function (req, res) {
  var testimoniales = await Testimonial.findAll();
  res.render('testimoniales', {
    pagina: 'Opiniones',
    testimoniales: testimoniales
  });
};

exports.añadirTestimonial = async function (req, res) {
  //Validar que todos los campos esten llenos
  var _req$body = req.body,
      nombre = _req$body.nombre,
      correo = _req$body.correo,
      mensaje = _req$body.mensaje;
  var errores = [];

  if (!nombre) {
    errores.push({
      'mensaje': 'Agrega tu Nombre'
    });
  }

  if (!correo) {
    errores.push({
      'mensaje': 'Agrega tu Correo'
    });
  }

  if (!mensaje) {
    errores.push({
      'mensaje': 'Agrega tu Mensaje'
    });
  } // Revisar por errores


  if (errores.length > 0) {
    // Muestra la vista con errores
    var testimoniales = await Testimonial.findAll();
    res.render('testimoniales', {
      errores: errores,
      nombre: nombre,
      correo: correo,
      mensaje: mensaje,
      pagina: 'Opiniones',
      testimoniales: testimoniales
    });
  } else {
    // Almacena en la DB
    await Testimonial.create({
      nombre: nombre,
      correo: correo,
      mensaje: mensaje
    });
    res.redirect('testimoniales');
  }
};