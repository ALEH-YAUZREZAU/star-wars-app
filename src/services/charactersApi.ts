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

const charactersApi = {
  fetchCharacters,
  fetchCharacter,
};

export default charactersApi;
