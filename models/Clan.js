const mongoose = require("mongoose");

const ClanSchema = new mongoose.Schema({
  nombre: {type: String, }, // nombre de la mascota (o titulo del anuncio)
  categoria: { type: String, }, // perro | gato | otro
  logo: [String], // links a las fotografías
  descripcion: {type:String, }, // descripción del anuncio
  integrantes: { type: String },
  ubicacion: { type: String }, // muy importante
  
}, { timestamps: true })

ClanSchema.methods.publicData = function(){
  return {
    id: this.id,
    nombre: this.nombre,
    categoria: this.categoria,
    logo: this.logo,
    descripcion: this.descripcion,
    integrantes: this.integrantes,
    ubicacion: this.ubicacion,
    
  };
};

mongoose.model('Clan', ClanSchema)