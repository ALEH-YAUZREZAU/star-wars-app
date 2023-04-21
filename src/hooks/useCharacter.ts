import { useEffect, useState } from "react";

import charactersApi from "../services/charactersApi";
import { Character } from "../types";

export const useCharacter = (id: string) => {
  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const data = await charactersApi.fetchCharacter(id);
        setCharacter(data);
      } catch (error) {
        console.error("Error fetching character:", error);
      }
    };

    fetchCharacter();
  }, [id]);

  return { character, setCharacter };
};
