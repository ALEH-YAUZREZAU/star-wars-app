import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import charactersApi from "../services/charactersApi";

import { setCharacters } from "../store";

export const useCharacters = ({ currentPage, searchQuery }: any) => {
  const dispatch = useDispatch();
  const characters = useSelector((state: any) => state.characters.characters);

  useEffect(() => {
    let fetchCharactersTimeout: NodeJS.Timeout;

    const fetchCharacters = async () => {
      try {
        const data = await charactersApi.fetchCharacters(currentPage, searchQuery);
        dispatch(setCharacters(data));
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharactersTimeout = setTimeout(fetchCharacters, 1000);

    return () => {
      clearTimeout(fetchCharactersTimeout);
    };
  }, [dispatch, currentPage, searchQuery]);

  return { characters };
};
