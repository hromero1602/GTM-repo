// 1. VARIABLES

const areaPaises = document.getElementById("mostrarpaises")

// 2. FUNCIONES

const buscarPaises = (filter) => {
    /*const resultado = */fetch('https://restcountries.eu/rest/v2/' + filter)
    .then(response => response.json())
    .then(datos => {
        console.log(datos)
        areaPaises.innerHTML = ""
        datos.map(pais => {
            areaPaises.innerHTML += `
            <div>
                <img class="bandera" src="${pais.flag}">
                <h1>${pais.name}</h1>
                <p><b>Región: </b>${pais.region}</p>
                <p>${pais.capital}</p>
                <p>${pais.subregion}</p>
                <ul>
                    <li>Español: ${pais.translations.es}</li>
                    <li>Alemán: ${pais.translations.de} </li>
                    <li>Japonés: ${pais.translations.ja}</li>
                </ul>
                <p>Border: ${
                    pais.borders.map((border) => {
                        return `<p>${border}</p>`
                    }
            ) }</p>
                <p>

                </p>
            </div>
            ` 
        })
    })
}

/*const btnAll = document.getElementById("btnAll").addEventListener('click', buscarPaises("all"))
/*const btnAme = document.getElementById("btnAme").addEventListener('click', buscarPaises("americas"))
/*const btnAfr = document.getElementById("btnAfr").addEventListener('click', buscarPaises("africa"))
/*const btnAsi = document.getElementById("btnAsi").addEventListener('click', buscarPaises("asia"))
/*const btnEur = document.getElementById("btnEur").addEventListener('click', buscarPaises("europe"))
/*const btnOce = document.getElementById("btnOce").addEventListener('click', buscarPaises("oceania"))*/

// 3. EVENTOS
// buscarPaises()
