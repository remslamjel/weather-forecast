import Card from "react-bootstrap/Card";
import { icons } from "../icons";
import "./WeatherCard.css";
import { BsFillCloudsFill } from "react-icons/bs";

function WeatherCard({ weather }) {
  // Dynamic icon based on weather
  //let Icon = weather && icons[weather?.weather[0]?.main];
  return (
    <Card className="weather__card bg-dark text-white">
      <Card.Body>
        <Card.Title>{weather.name}</Card.Title>
        <div className="temp__icon">
          <Card.Title style={{ fontSize: "50px" }}>
            {Math.floor(weather.main.temp - 273.15)}°C
          </Card.Title>
          <p>
            <BsFillCloudsFill size="65" />
          </p>
        </div>

        <Card.Text>
          Feels like: {Math.floor(weather.main.feels_like - 273.15)}°{" "}
          <b>{weather.weather[0].main}</b>
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted">
          Min Temp: {Math.floor(weather.main.temp_min - 273.15)}°C
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          Max temp: {Math.floor(weather.main.temp_max - 273.15)}°C
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
}

export default WeatherCard;
