import { useQuery } from "react-query";
import { VOTERS_URL } from "../urls";
import { useAxios } from "./useAxios";
export const useVoters = () => {
  const axios = useAxios();

  return useQuery(
    "voters",
    async () => {
      const { data } = await axios.get(VOTERS_URL);
      return data;
    },
    {}
  );
};
