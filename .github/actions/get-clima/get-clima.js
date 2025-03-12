// Archivo Javascript que consulta una API y obtiene el clima de una ciudad
// La ciudad se pasa como parámetro a la acción de GitHub

const core = require('@actions/core');
// const github = require('@actions/github');

// Utilizamos axios para hacer la petición a la API de WheaterAPI
const axios = require('axios');

async function getWeather(city) {
    // Obtenemos la API Key del input del action
    const apiKey = core.getInput('api-key');
    // URL de la API de WeatherAPI
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
    // Hacemos la petición a la API
    const response = await axios.get(url);
    // Retornamos los datos de la respuesta
    return response.data;
}

// Obtenemos la ciudad del input del action
const city = core.getInput('ciudad');
// Llamamos a la función getWeather con la ciudad como parámetro
getWeather(city)
    .then(data => {
        // Guardamos los resultados en archivos de entorno
        core.exportVariable('ciudad', data.location.name);
        core.exportVariable('clima', data.current.temp_c);
        core.exportVariable('fecha', data.location.localtime);
    })
    .catch(error => {
        // Imprimimos el error en la consola
        console.error(error);
    });

