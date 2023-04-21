import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useCharactersQuery } from "../services/charactersApi";
import { setCharacters } from "../store";
import { useDebounce } from "./index";

export const useCharacters = ({ currentPage, searchQuery }: any) => {
  const dispatch = useDispatch();
  const characters = useSelector((state: any) => state.characters.characters);

  const search = useDebounce(searchQuery, 500);
  const { data, isSuccess, isLoading } = useCharactersQuery(currentPage, search);

  useEffect(() => {
    if (isSuccess) {
      dispatch(setCharacters(data));
    }
  }, [dispatch, isSuccess, data]);

  return { characters, isLoading };
};
