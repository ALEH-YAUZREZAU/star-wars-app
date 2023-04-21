import React from "react";
import { Grid, Typography, TextField } from "@mui/material";
import { CircularProgress } from "@mui/material";

import { usePagination, useCharacters, useSearch } from "../hooks";
import { Character } from "../types";
import CharacterCard from "../components/CharacterCard";
import Pagination from "../components/Pagination";

const Home: React.FC = () => {
  const { searchQuery, setSearchChange } = useSearch();
  const { currentPage, count, setCurrentPage } = usePagination();
  const { characters, isLoading } = useCharacters({ currentPage, searchQuery });

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Star Wars Characters
      </Typography>
      <TextField fullWidth margin="normal" label="Search characters" value={searchQuery} onChange={setSearchChange} />

      {isLoading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={4}>
          {characters.map((character: Character) => (
            <Grid item key={character.url} xs={12} sm={6} md={4}>
              <CharacterCard character={character} />
            </Grid>
          ))}
        </Grid>
      )}
      <Pagination count={count} currentPage={currentPage} onChange={setCurrentPage} />
    </>
  );
};

export default Home;
