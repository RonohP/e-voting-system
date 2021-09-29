import { useQuery } from "react-query";
import { CANDIDATE_URL } from "../urls";
import { useAxios } from "./useAxios";
export const useCandidates = () => {
  const axios = useAxios();

  return useQuery(
    "candidates",
    async () => {
      const { data } = await axios.get(CANDIDATE_URL);
      return data;
    },
    {}
  );
};
