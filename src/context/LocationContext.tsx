import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface LocationChildren {
  children: ReactNode;
}

interface LocationValues {
  getLocation: (res: object) => void;
  location: any;
  isOpenSearchModal: boolean;
  setIsOpenSearchModal: Dispatch<SetStateAction<boolean>>;
  setProgress: Dispatch<SetStateAction<number>>;
  progress: number;
  tempType: string;
  setTempType: Dispatch<SetStateAction<string>>;
}

export const LocationCtx = createContext<LocationValues>({} as LocationValues);

export const LocationProvider = ({ children }: LocationChildren) => {
  const [location, setLocation] = useState({});
  const [progress, setProgress] = useState(0);
  const [tempType, setTempType] = useState("");
  const [isOpenSearchModal, setIsOpenSearchModal] = useState(false);

  const getLocation = (res: object) => {
    setLocation(res);
  };

  return (
    <LocationCtx.Provider
      value={{
        location,
        getLocation,
        isOpenSearchModal,
        setIsOpenSearchModal,
        progress,
        setProgress,
        tempType,
        setTempType,
      }}
    >
      {children}
    </LocationCtx.Provider>
  );
};

export const useLocation = () => {
  const ctx = useContext(LocationCtx);
  return ctx;
};
