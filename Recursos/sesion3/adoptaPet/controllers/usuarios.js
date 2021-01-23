/*  Archivo controllers/usuarios.js
 *  Simulando la respuesta de objetos Usuario
 *  en un futuro aquí se utilizarán los modelos
 */

const Usuario = require('../models/Usuario');
const { use } = require('../routes');

var users = []

var usuario1 = new Usuario(1, 'Juan', 'Vega', 'juan@vega.com');
var usuario2 = new Usuario(2, 'Monserrat', 'Vega', 'mon@vega.com');

users[0] = usuario1;
users[1] = usuario2;

function crearUsuario(req, res) {
  // Instanciaremos un nuevo usuario utilizando la clase usuario
  var usuario = new Usuario(req.body)
  users.push(usuario);
  res.status(201).send(usuario)
}

function obtenerUsuarios(req, res) {
  // Simulando dos usuarios y respondiendolos
  res.send(users)
}

function modificarUsuario(req, res) {
  // simulando un usuario previamente existente que el usuario utili
  var usuario = users[req.params.id]
  var modificaciones = req.body
  usuario1 = { ...usuario, ...modificaciones }
  res.send(usuario1)
}

function eliminarUsuario(req, res) {
    users.splice[req.params.id]
  res.status(200).send(`Usuario ${req.params.id} eliminado`);
}

module.exports = {
  crearUsuario,
  obtenerUsuarios,
  modificarUsuario,
  eliminarUsuario
}