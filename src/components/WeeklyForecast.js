import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import icons from "../icons";
import "./WeeklyForecast.css";
import { BsCloudHazeFill } from "react-icons/bs";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function WeeklyForecast({ forecast }) {
  const day = new Date().getDay();
  const forecastWeek = WEEK_DAYS.slice(day, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, day)
  );
  // Function for dynamic icons
  let Icon;
  const getIcon = (item) => {
    Icon = icons[item];
  };

  //
  const kelvinToCelsius = (item) => {
    return Math.floor(item - 273.15);
  };
  return (
    <Container className="container">
      {forecast &&
        forecast.slice(0, 7).map((item, index) => {
          return (
            <div className="forecast__card" key={index}>
              <p>
                <b>{forecastWeek[index]}</b>
              </p>
              <span>
                {/* {getIcon(item?.weather[0]?.main)} */}
                <BsCloudHazeFill size="30px" />
              </span>
              <Card.Subtitle className="mb-2 text-muted">
                Feels like {kelvinToCelsius(item.main.temp_min)}°C
              </Card.Subtitle>
            </div>
          );
        })}
    </Container>
  );
}

export default WeeklyForecast;
