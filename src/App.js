import "./App.css";

const baseURL = `https://api.openweathermap.org/data/2.5/weather`;

const apiKey = process.env.REACT_APP_API_KEY;
console.log(apiKey);

const units = `&units=metric`;
const queryString = `?q=London&appid=${apiKey}${units}`;
const apiEndpoint = baseURL + queryString;

console.log(apiEndpoint);

function waitForData(response) {
  return response.json();
}

function handleData(data) {
  let maxTemp = data.main.temp_max;
  let minTemp = data.main.temp_min;
  let currentTemp = data.main.temp;
  console.log(`Current Temp: ${currentTemp}`);
  console.log(`Max Temp: ${maxTemp}`);
  console.log(`Min Temp: ${minTemp}`);
}

fetch(apiEndpoint).then(waitForData).then(handleData);
function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <input type="text" />
      <button>Search</button>
    </div>
  );
}

export default App;
