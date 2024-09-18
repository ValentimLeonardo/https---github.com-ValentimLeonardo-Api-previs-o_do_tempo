/* eslint-disable react/prop-types */

import "./WeatherInformations.css"


function WeatherInformations({weather}){

    console.log(weather)

    return(
        <div className='weather-container'>
            <h2>{weather.name}</h2>
            <div className="weather-info">
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="icone-de-tempo" />
                <p className="temp">{Math.round(weather.main.temp)}ºC</p>
            </div>
            <div>
                <p className="description">{weather.weather[0].description}</p>
            </div>
            <div className="detalhes">
                <p>Sensação Termica: {Math.round(weather.main.feels_like)}ºC</p>
                <p>Umidade: {Math.round(weather.main.humidity)}%</p>
                <p>Pressão: {weather.main.pressure} hPa</p>
            </div>
        </div>
    )
}

export default WeatherInformations