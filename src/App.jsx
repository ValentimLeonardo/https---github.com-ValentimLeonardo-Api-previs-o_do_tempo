import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import WeatherInformations from './components/WeatherInformations/WeatherInformations'
import WeatherInformations5days from './components/WeatherInformations5days/WeatherInformations5days'

function App() {
  const [weather, setWeather] = useState()
  const [weather5days, setWeather5days] = useState()
  const inputRef = useRef()

  async function searchCity(){
    const city = inputRef.current.value
    const key = "297d44e1f0b0e020df54386c9c2512e9"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
  	const url5day = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`
    
    const apiInfo = await axios.get(url)
    const apiInfo5day = await axios.get(url5day)

    setWeather(apiInfo.data)
    setWeather5days(apiInfo5day.data)
  }

  return (
    <div className='container'>
        <h1>Previsão do Tempo</h1>
        <input ref={inputRef} type='text' placeholder='Digite o nome da cidade '/>
        <button onClick={searchCity}>Buscar</button>
        {weather&&<WeatherInformations weather={weather}/>}
        {weather && <WeatherInformations5days weather5days = {weather5days}/>}
    </div>
  )
}

export default App
