// Archivo Javascript que consulta una API y obtiene el clima de una ciudad
// La ciudad se pasa como parámetro a la acción de GitHub

// Utilizamos axios para hacer la petición a la API de WheaterAPI
const axios = require('axios');

async function getWeather(city) {
    // Obtenemos la API Key de la variable de entorno
    const apiKey = process.env.WEATHER_API_KEY;
    // URL de la API de WeatherAPI
    const url = 'http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}';
    // Hacemos la petición a la API
    const response = await axios.get(url);
    // Retornamos los datos de la respuesta
    return response.data;
}

// Obtenemos la ciudad del input del action
const city = process.env.INPUT_CITY;
// Llamamos a la función getWeather con la ciudad como parámetro
getWeather(city)
    .then(data => {
        // Imprimimos el nombre de la ciudad y la temperatura en la consola
        console.log('::set-output name=ciudad::${data.location.name]');
        console.log('::set-output name=clima::${data.current.temp_c}');
        console.log('::set-output name=fecha::${data.location.localtime}');
    })
    .catch(error => {
        // Imprimimos el error en la consola
        console.error(error);
    });

