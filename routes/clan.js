const router = require('express').Router();
const {
  crearClan,
  obtenerClan,
  modificarClan,
  eliminarClan
} = require('../controllers/Clan')
var auth = require('./auth');

router.get('/', auth.opcional,obtenerClan)
router.get('/:id', auth.opcional, obtenerClan)// nuevo endpoint con todos los detalles de mascota
router.post('/', auth.requerido, crearClan)
router.put('/:id',auth.requerido, modificarClan)
router.delete('/:id',auth.requerido, eliminarClan)

module.exports = router;