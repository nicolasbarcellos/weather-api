import axios from "axios";
import { useState } from "react";
import { useLocation } from "../context/LocationContext";
import { api } from "../services/api";

export default function useGeoLocation() {
  const { getLocation, setProgress } = useLocation();
  const [isPending, setIsPending] = useState(false);

  const getGeoLocation = () => {
    navigator.geolocation.getCurrentPosition(showPosition);
  };

  const showPosition = async (position: any) => {
    setIsPending(true);
    setProgress(60);
    try {
      const res = await axios
        .get(
          `https://www.metaweather.com/api/location/search/?lattlong=${position.coords.latitude},${position.coords.longitude}`
        )
        .then((response) => {
          const { woeid } = response.data[0];
          const res = api.get(`${woeid}`);
          return res;
        });

      setProgress(100);
      setIsPending(false);
      getLocation(res.data);
    } catch (error: any) {
      console.log(error.message);
      setIsPending(false);
    }
  };

  return { getGeoLocation, isPending };
}
