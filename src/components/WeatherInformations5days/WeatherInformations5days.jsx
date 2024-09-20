/* eslint-disable react/prop-types */

import "./WeatherInformations5days.css"


function WeatherInformations5days({weather5days}){

    console.log(weather5days)

    let dailyForecast = {

    }

    for(let forecast of weather5days.list){
        const date = new Date(forecast.dt * 1000).toLocaleDateString()

        if(!dailyForecast[date]){
            dailyForecast[date] = forecast
        }
    }

    const next5daysForecast = Object.values(dailyForecast).slice(0,6)
    console.log(next5daysForecast)

    function convertData(date){
        const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', {weekday: 'long', day: "2-digit"})

        return newDate
    }

    return(
        <div className='weather-container'>
            <h3>Previsão dos 5 próximos dias</h3>
            <div className="weather-list">
                {next5daysForecast.map(forecast => (
                    <div key={forecast.dt} className="weather-item">
                        <p className="forecast-data">{convertData(forecast)}</p>
                        <img src = {`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} />
                        <p className="desc">{forecast.weather[0].description}</p>
                        <p>{Math.round(forecast.main.temp_min)}ºC Min / {Math.round(forecast.main.temp_max)}ºC Max</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WeatherInformations5days