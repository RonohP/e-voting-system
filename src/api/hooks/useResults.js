import { useQuery } from "react-query";
import { RESULTS_URL } from "../urls";
import { useAxios } from "./useAxios";
export const useResults = () => {
  const axios = useAxios();

  return useQuery(
    "results",
    async () => {
      const { data } = await axios.get(RESULTS_URL);
      return data;
    },
    {}
  );
};
