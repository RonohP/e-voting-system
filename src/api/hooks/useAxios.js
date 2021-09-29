import { useContext } from "react";
import { AxiosContext } from "../ApiContext/AxiosContext";

export function useAxios() {
  return useContext(AxiosContext);
}
