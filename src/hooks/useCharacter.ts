import { useEffect, useState } from "react";

import { useCharacterQuery } from "../services/charactersApi";
import { Character } from "../types";

export const useCharacter = (id: string) => {
  const { data, isLoading } = useCharacterQuery(id);
  const [character, setCharacter] = useState<Character | undefined>(undefined);

  useEffect(() => {
    setCharacter(data);
  }, [data]);

  return { character, isLoading, setCharacter };
};
