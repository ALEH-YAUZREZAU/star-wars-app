import React from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Box } from "@mui/material";

import CharacterForm from "../components/CharacterForm";
import { useCharacter } from "../hooks";

const CharacterPage: React.FC = () => {
  const params = useParams();
  const id = params.id as string;
  const { character, setCharacter } = useCharacter(id);

  return (
    <Container maxWidth="sm">
      {character ? (
        <>
          <Typography variant="h4" gutterBottom>
            {character.name}
          </Typography>
          <CharacterForm character={character} onSubmit={setCharacter} />
        </>
      ) : (
        <Box textAlign="center">
          <Typography variant="h5" gutterBottom>
            Character not found
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default CharacterPage;
