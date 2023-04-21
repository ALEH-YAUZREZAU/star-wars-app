import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setSearchQuery } from "../store";

export const useSearch = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state: any) => state.characters.searchQuery);

  const handleSearchChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setSearchQuery(event.target.value));
    },
    [dispatch]
  );

  return { searchQuery, setSearchChange: handleSearchChange };
};
