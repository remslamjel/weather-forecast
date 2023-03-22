import "./App.css";
import NavBar from "./components/NavBar";
import WeatherCard from "./components/WeatherCard";
import WeeklyForecast from "./components/WeeklyForecast";
import { useEffect, useState } from "react";

const API_KEY = "Due to GitGuardian policy, I had to hide the api key";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

function App() {
  const [weather, setWeather] = useState();
  const [forecast, setForecast] = useState(null);

  const getData = (searchData) => {
    const getForecast = fetch(
      `${BASE_URL}/forecast?q=${searchData}&appid=${API_KEY}`
    );

    const getWeather = fetch(
      `${BASE_URL}/weather?q=${searchData}&appid=${API_KEY}`
    );

    const allPromise = Promise.all([getWeather, getForecast]);

    async function fetchData() {
      try {
        const res = await allPromise;
        let resWeather = await res[0].json();
        let resForecast = await res[1].json();

        if (resWeather.cod === "404" || resWeather.cod === "404") {
          throw new Error("city not found");
        }
        setWeather(resWeather);
        //console.log("res", resWeather);
        setForecast(resForecast.list);
      } catch (error) {
        console.log(error);
        alert("City not found");
      }
    }

    fetchData();
  };

  const handleSearch = (searchData) => {
    getData(searchData);
  };

  useEffect(() => {
    getData("Pune");
  }, []);

  return (
    <div>
      <NavBar handleSearch={handleSearch} />
      <div className="cards">
        {weather && <WeatherCard weather={weather} />}
        {forecast && <WeeklyForecast forecast={forecast} />}
      </div>
    </div>
  );
}

export default App;
