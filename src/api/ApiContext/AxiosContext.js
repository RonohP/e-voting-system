import { createContext, useMemo } from "react";
import Axios from "axios";
import { useAuth } from "../../utils/hooks/useAuth";

export const AxiosContext = createContext(undefined);

//setting up axios inteceptors to pass authorization to api requests

export default function AxiosProvider({ children }) {
  const { accessToken } = useAuth();

  const axios = useMemo(() => {
    const axios = Axios.create({
      headers: {
        "Content-Type": "application/json",
      },
    });

    axios.interceptors.request.use((config) => {
      // Read token for anywhere, in this case directly from localStorage

      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }

      return config;
    });

    return axios;
  }, [accessToken]);

  return (
    <AxiosContext.Provider value={axios}>{children}</AxiosContext.Provider>
  );
}
