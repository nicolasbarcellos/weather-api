import * as S from "./style";
import { MdNavigation } from "react-icons/md";
import { useLocation } from "../../context/LocationContext";
import Moment from "react-moment";
import { formatTemp } from "../../utils/formatTemp";

export default function Dashboard() {
  const { location, setTempType, tempType } = useLocation();
  const urlImg = `https://www.metaweather.com/static/img/weather/`;
  const forecastArr = location.consolidated_weather.slice(1);

  return (
    <S.Container>
      <div className="row">
        <div className="types">
          <button onClick={() => setTempType("C")} className="celsius">
            ℃
          </button>
          <button onClick={() => setTempType("F")}>℉</button>
        </div>

        <div className="cards">
          {forecastArr.map((local: any) => (
            <div className="box" key={local.woeid}>
              <p>
                <Moment format="ddd, D MMM">{local.applicable_date}</Moment>
              </p>
              <img
                src={`${urlImg}${local.weather_state_abbr}.svg`}
                alt={local.weather_state_name}
              />
              <div className="content">
                <span>
                  {formatTemp(local.max_temp, tempType)}°{tempType}
                </span>
                <span className="variant">
                  {formatTemp(local.min_temp, tempType)}°{tempType}
                </span>
              </div>
            </div>
          ))}
        </div>

        <S.Hightlights>
          <h3>Today’s Hightlights</h3>

          <div className="cardsHigh">
            <div className="boxHigh">
              <p>Wind status</p>
              <p className="wind">
                {location.consolidated_weather[0].wind_speed.toFixed()}
                <span> mph</span>
              </p>
              <div>
                <div className="navigation">
                  <MdNavigation />
                </div>
                <span>WSW</span>
              </div>
            </div>
            <div className="boxHigh">
              <p>Humidity</p>
              <p className="larger">
                {location.consolidated_weather[0].humidity}
                <span>%</span>
              </p>
              <S.Humidity
                boxWidth={`${location.consolidated_weather[0].humidity}%`}
              >
                <div className="humidityNumbers">
                  <span>0</span>
                  <span>50</span>
                  <span>100</span>
                </div>
                <small className="percent">%</small>
              </S.Humidity>
            </div>
            <div className="boxHigh">
              <p>Visibility</p>
              <p className="larger">
                {parseFloat(
                  location.consolidated_weather[0].visibility
                ).toFixed(1)}{" "}
                <span>miles</span>
              </p>
            </div>
            <div className="boxHigh">
              <p>Air Pressure</p>
              <p className="larger">
                {location.consolidated_weather[0].air_pressure.toFixed()}{" "}
                <span>mb</span>
              </p>
            </div>
          </div>
        </S.Hightlights>
      </div>
      <footer>
        created by{" "}
        <a href="https://github.com/nicolasbarcellos">Nicolas Barcellos</a> -
        devChallenges.io
      </footer>
    </S.Container>
  );
}
