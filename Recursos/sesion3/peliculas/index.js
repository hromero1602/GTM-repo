const button = document.getElementById("busqueda")
const peliculaABuscar = document.getElementById("pelicula-a-buscar")
const listaPeliculas = document.getElementById("lista-peliculas")

button.addEventListener("click", () => {
    const pelicula = peliculaABuscar.value

    fetch(`http://www.omdbapi.com/?s=${pelicula}&apikey=7d2a2a83`)
    .then(response => response.json())
    .then(data => {
        listaPeliculas.innerHTML = `
        <div id="prueba">
        <hr>
            ${
                data.Search.map((pelicula) => {
                    return `
                        <img src="${pelicula.Poster}" />
                            <h1>${pelicula.Title}</h1>
                            <p>Year: ${pelicula.Year} </p>
                    `
                }).join('')
            }
        </div>
        `
    })
})
