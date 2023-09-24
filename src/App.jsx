import React, { useEffect, useState } from 'react'
import "./App.css"
import image from './assets/image/back.jpg'
import axios  from 'axios'
const App = () => {

  let [weatherData, setWeatherData] = useState({})
  let [inpData, setInpData] = useState("")
  console.log(weatherData, 'weatherData')
  useEffect(() => {
    apiCall("karachi")
  }, [])

// snjdskdj
  let apiCall = async (cityName) => {
    try {
      let dataGetApi = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=2e4e1e0c27fa3bf005a6ecc866a70b85&units=metric`)
      console.log("data", dataGetApi.data);
      setWeatherData(dataGetApi.data);

    } catch (error) {
      console.log(error.message)
    }
  }




  let apiData = (e) => {
    e.preventDefault()
    apiCall(inpData)
    setInpData("")
  }

  return (
    <>
      <h1 className="h1">Weather App</h1>
      <div className="zeeshan">
        <div className="khan">
          <form onSubmit={apiData}>
            <div className="input">

              <input className="inp" placeholder="enter your city name"
                onChange={(e) => setInpData(e.target.value)}
                value={inpData}
              />
              <button type="submit" className="btn">Get Weather</button>
            </div>




          </form>
          <h3 className="country">{weatherData?.name}</h3>
          <div className="main">
            <h2 className="image"><img src={`https://openweathermap.org/img/wn/${weatherData?.weather && weatherData?.weather[0]?.icon}@2x.png`} alt="" /></h2>
            <h1 ></h1>
          </div>

          <h3 className="khan" >{` TEMP :: ${weatherData?.main?.temp} C`} </h3>
          <h3 className="khan" >{`Description:  ${weatherData?.weather && weatherData?.weather[0]?.description}`}</h3>
          <h5 className="khan" >{`Humandity ${weatherData?.main?.humidity}`}</h5>

        </div>
      </div>

    </>
  )
}

export default App
