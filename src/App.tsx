import { useEffect } from "react";
import Dashboard from "./components/Dashboard";
import Loader from "./components/Loader";
import Sidebar from "./components/Sidebar";
import { useLocation } from "./context/LocationContext";
import useGeoLocation from "./hooks/useGeoLocation";
import { useSearchLocation } from "./hooks/useSearchLocation";
import * as S from "./style/App";

function App() {
  const { getGeoLocation } = useGeoLocation();
  const { location } = useLocation();
  const { queryLocation } = useSearchLocation();
  const locationExists = Object.keys(location).length;

  useEffect(() => {
    defaultLocal();
    getGeoLocation();
  }, []);

  async function defaultLocal() {
    if (!locationExists) {
      await queryLocation("Rio");
    }
  }

  return (
    <S.Container>
      {!locationExists ? (
        <Loader />
      ) : (
        <>
          <Sidebar />
          <Dashboard />
        </>
      )}
    </S.Container>
  );
}

export default App;
