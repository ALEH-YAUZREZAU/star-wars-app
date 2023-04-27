import { useQuery } from "react-query";
import { useNetworkError } from "../providers/NetworkError";

import api from "../services/api";
import { Character } from "../types";

interface ICharactersParams {
  page?: number;
  search?: string;
}

const fetchCharacters = async ({ page, search }: ICharactersParams): Promise<Character[]> => {
  const response = await api.get("/people", {
    params: {
      page,
      search,
    },
  });
  return response.data;
};

const fetchCharacter = async (id: string): Promise<Character> => {
  const response = await api.get(`/people/${id}`);
  return response.data;
};

export const useCharactersQuery = ({ page, search }: ICharactersParams) => {
  const { setError } = useNetworkError();

  return useQuery(["character", search, page], () => fetchCharacters({ page, search }), {
    onError: (error: Error) => {
      setError(error);
    },
  });
};

export const useCharacterQuery = (id: string) => {
  const { setError } = useNetworkError();

  return useQuery(["character", id], () => fetchCharacter(id), {
    enabled: !!id,
    onError: (error: Error) => {
      setError(error);
    },
  });
};
