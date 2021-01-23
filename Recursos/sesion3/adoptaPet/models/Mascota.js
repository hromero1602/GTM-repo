class Mascota {
    constructor(id, nombre, categoria, fotos, descripcion, anunciante, ubicaciones){
        this.id = id;
        this.nombre = nombre;
        this.categoria = categoria;
        this.fotos = fotos;
        this.descripcion = descripcion;
        this.anunciante = anunciante;
        this.ubicaciones = ubicaciones;
    }
}

module.exports = Mascota;