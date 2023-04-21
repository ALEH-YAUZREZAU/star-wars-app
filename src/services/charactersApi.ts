import { useQuery } from "react-query";
import api from "../services/api";
import { Character } from "../types";

const fetchCharacters = async (page?: number, search?: string): Promise<Character[]> => {
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

export const useCharactersQuery = (page?: number, search?: string) => {
  return useQuery(["character", search, page], () => fetchCharacters(page, search));
};

export const useCharacterQuery = (id: string) => {
  return useQuery(["character", id], () => fetchCharacter(id), { enabled: !!id });
};
