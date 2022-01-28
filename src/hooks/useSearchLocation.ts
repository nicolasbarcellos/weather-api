import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "../context/LocationContext";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const useSearchLocation = () => {
  const [locals, setLocals] = useState([]);
  const [isCancelled, setIsCancelled] = useState(false);
  const { getLocation, setProgress } = useLocation();
  const [isPending, setIsPending] = useState(false);

  const showLocalsQuery = async (local: string) => {
    setIsPending(true);
    try {
      const res = await axios.get(
        `https://www.metaweather.com/api/location/search/?query=${local}`
      );
      const localsTitle = res.data.map((local: any) => local.title);
      if (!isCancelled) {
        setIsPending(false);
        setLocals(localsTitle);
      }
    } catch (error: any) {
      if (!isCancelled) {
        setIsPending(false);
        setLocals([]);
        toast.warn("Invalid Location", {
          theme: "dark",
        });
      }
    }
  };

  const queryLocation = async (local: string) => {
    setProgress(60);
    try {
      const res = await axios
        .get(`https://www.metaweather.com/api/location/search/?query=${local}`)
        .then((res) => {
          const { woeid } = res.data[0];
          const response = api.get(`${woeid}`);
          return response;
        });
      if (!isCancelled) {
        getLocation(res.data);
        setProgress(100);
      }
    } catch (error: any) {
      if (!isCancelled) {
      }

      toast.error("Contact us", {
        theme: "dark",
      });
    }
  };

  useEffect(() => {
    return () => setIsCancelled(false);
  }, []);

  return { queryLocation, showLocalsQuery, locals, setLocals, isPending };
};
