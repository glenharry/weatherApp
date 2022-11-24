import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [weather, setWeather] = useState(0);
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);

  function handleCityChange(e) {
    setCity(e.target.value);
  }
  function handleCountryChange(e) {
    setCountry(e.target.value);
  }
  function waitForData(response) {
    return response.json();
  }
  const fetchWeather = () => {
    const baseURL = `https://api.openweathermap.org/data/2.5/weather`;
    const apiKey = process.env.REACT_APP_API_KEY; // stored in env for now
    const units = `&units=metric`;
    const city = `&q=${city}`;
    const country = `&country=uk`;
    const queryString = `?${city}${country}&appid=${apiKey}${units}`;
    const apiEndpoint = baseURL + queryString;

    fetch(apiEndpoint).then(waitForData).then(handleData).catch(console.error);
  };
  function handleData(data) {
    // let weatherDescription = data.weather[0].description;
    // let maxTemp = data.main.temp_max;
    // let minTemp = data.main.temp_min;
    // let currentTemp = data.main.temp;
    // console.log(
    //   `${weatherDescription} \n Max: ${maxTemp} \n Min: ${minTemp} \n Current: ${currentTemp}`
    // );
    setCity(data.name);
    setCountry(data.sys.country);
    setDescription(data.weather[0].description);
    setWeather(data.main.temp);
  }

  // fetchWeather();
  return (
    <div className="App">
      <h1>Weather App</h1>

      <input onChange={handleCityChange} type="text" placeholder="Enter City" />
      <input
        onChange={handleCountryChange}
        type="text"
        placeholder="Enter Country"
      />

      <button onClick={fetchWeather}>Search</button>

      <h2>City: {city}</h2>
      <h2>Country: {country}</h2>
      <h2>Description: {description}</h2>
      <h2>Weather: {weather}&#8451;</h2>
    </div>
  );
}

export default App;
