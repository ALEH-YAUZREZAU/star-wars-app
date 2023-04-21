import React from "react";
import { Pagination as MuiPagination } from "@mui/material";

interface IPagination {
  onChange: (value: number) => void;
  count: number;
  currentPage: number;
}

const Pagination: React.FC<IPagination> = (props) => {
  const { onChange, count, currentPage } = props;

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    onChange(value);
  };

  const totalPages = Math.ceil(count / 10);

  return (
    <MuiPagination
      count={totalPages}
      page={currentPage}
      onChange={handleChange}
      color="primary"
      size="large"
      showFirstButton
      showLastButton
      sx={{ mt: 4, mb: 4, justifyContent: "center", display: "flex" }}
    />
  );
};

export default Pagination;
