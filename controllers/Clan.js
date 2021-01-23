


const mongoose = require('mongoose')
const Clan = mongoose.model('Clan')




function crearClan(req, res, next) {
  // Instanciaremos un nuevo usuario utilizando la clase usuario
  const body = req.body;
console.log(body);
  var clan = new Clan(body)
  clan.save().then(clan => {                                         //Guardando nuevo usuario en MongoDB.
    res.status(201).json(clan)
  }).catch(next)
}



function obtenerClan(req, res, next) {                              //Obteniendo usuario desde MongoDB.
    if(req.params.id){
      Clan.findById(req.params.id).then(clan => { //Busca la mascota que se recibe como parámetro.

        if (!clan) { return res.sendStatus(401); }
        res.json(clan.publicData());
      }).catch(next);
    } else {
      Clan.find().then(Clan=>{
        Clan = Clan.map(u => u.publicData())
        res.send(Clan)
      }).catch(next)
    }
  }
/*function modificarMascota(req, res) {
  // simulando un mascota previamente existente que el mascota utili
  var mascota1 = new Mascota(req.params.id, 'Nochipa', 'Perro', 'https://www.perrosrazapequeña.com/wp-content/uploads/2018/06/chihuahua-pelo-largo.jpg','bien bonita','1','CDMX');
  var modificaciones = req.body
  mascota1 = { ...mascota1, ...modificaciones }
  res.send(mascota1)
}*/

function modificarClan(req, res, next) {
    console.log(req.Clan)
    Clan.findById(req.Clan.id).then(Clan => {
      if (!Clan) { return res.sendStatus(401); }
      let nuevaInfo = req.body
      if (typeof nuevaInfo.nombre !== 'undefined')
        Clan.nombre = nuevaInfo.nombre
        if (typeof nuevaInfo.categoria !== 'undefined')
        Clan.categoria = nuevaInfo.categoria
      if (typeof nuevaInfo.logo !== 'undefined')
        Clan.logo = nuevaInfo.logo
      if (typeof nuevaInfo.descripcion !== 'undefined')
        Clan.descripcion = nuevaInfo.descripcion
        if (typeof nuevaInfo.integrantes !== 'undefined')
        Clan.integrantes = nuevaInfo.integrantes
      if (typeof nuevaInfo.ubicacion !== 'undefined')
        Clan.ubicacion = nuevaInfo.ubicacion
        if (typeof nuevaInfo.password !== 'undefined')
        Clan.crearPassword(nuevaInfo.password)
      Clan.save().then(updatedUser => {                                   //Guardando usuario modificado en MongoDB.
        res.status(201).json(updatedUser.publicData())
      }).catch(next)
    }).catch(next)
  }
        
/*function eliminarMascota(req, res) {
    // Líneas que buscan un usaurio en la bd, una vez que lo encuenra lo elimina.
  res.status(200).send(`Mascota ${req.params.id} eliminado`);
}*/

function eliminarClan(req, res) {
    // únicamente borra a su propio usuario obteniendo el id del token
    Clan.findOneAndDelete({ _id: req.params.id }).then(r => {         //Buscando y eliminando usuario en MongoDB.
      res.status(200).send(`Clan ${req.params.id} eliminado: ${r}`);
    })
  }




module.exports = {
  crearClan,
  obtenerClan,
  modificarClan,
  eliminarClan,
  
}