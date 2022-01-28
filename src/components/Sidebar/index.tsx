import * as S from "./style";
import { MdGpsFixed, MdLocationPin } from "react-icons/md";
import useGeoLocation from "../../hooks/useGeoLocation";
import { useLocation } from "../../context/LocationContext";
import Moment from "react-moment";
import SearchBox from "../SearchBox";
import { formatTemp } from "../../utils/formatTemp";
import LoadingBar from "react-top-loading-bar";

export default function Sidebar() {
  const { getGeoLocation } = useGeoLocation();
  const {
    location,
    setIsOpenSearchModal,
    progress,
    setProgress,
    tempType,
  } = useLocation();
  const urlImg = `https://www.metaweather.com/static/img/weather/`;

  const handleClick = () => {
    getGeoLocation();
  };

  return (
    <S.Container>
      <>
        <LoadingBar
          color="var(--yellow)"
          onLoaderFinished={() => setProgress(0)}
          shadow={true}
          progress={progress}
        />
        <SearchBox />
        <div className="searchBox">
          <button onClick={() => setIsOpenSearchModal(true)}>
            Search for places
          </button>
          <button className="gps" onClick={handleClick}>
            <MdGpsFixed size={22} />
          </button>
        </div>
      </>

      <img
        src={`${urlImg}${location.consolidated_weather[0].weather_state_abbr}.svg`}
        alt="Shower"
      />
      <span className="temperature">
        {formatTemp(location.consolidated_weather[0].the_temp, tempType)}
        <span className="celsius">°{tempType}</span>
      </span>
      <span className="status">
        {location.consolidated_weather[0].weather_state_name}
      </span>
      <div className="date">
        <span>Today</span>
        <span>•</span>
        <span>
          <Moment format="ddd, D MMM">{location.date}</Moment>
        </span>
      </div>
      <div className="location">
        <MdLocationPin size={18} />
        <span>{location.title}</span>
      </div>
    </S.Container>
  );
}
