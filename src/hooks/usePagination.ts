import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setCurrentPage } from "../store";

export const usePagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state: any) => state.characters.currentPage);
  const count = useSelector((state: any) => state.characters.count);

  const handlePaggintionChange = useCallback((value: number) => {
    dispatch(setCurrentPage(value));
  }, []);

  return { currentPage, count, setCurrentPage: handlePaggintionChange };
};
