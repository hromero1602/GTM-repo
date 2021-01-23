var fecha = new Date();
console.log(`Fecha actual: ${fecha}`)

class Mascota{
	constructor(nombre, categoria, fotos, descripcion, anunciante, ubicacion){
		this.nombre = nombre; // nombre de la mascota (o titulo del anuncio)
    this.categoria = categoria; // perro | gato | otro
    this.fotos = fotos; // links a las fotografías
    this.descripcion = descripcion; // descripción del anuncio
    this.anunciante = anunciante; // contacto con la persona que anuncia al animalito
    this.ubicacion = ubicacion; // muy importante
	}
	
	guardar(){
		// función para guardar un nuevo registro en la base de datos.
	}
	
}

let perro = new Mascota("Firulais", "Perro", "firu.jpg", "Le gusta mover la cola", "Andrés", "GDL");
let gato = new Mascota("Michi", "Gato", "michi.jpg", "Odia los perros", "Andrés", "GDL");
console.log(gato.nombre);