import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { Character } from "../types";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const characterId = character.url.match(/(\d+)/)?.[0];

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {character.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Height: {character.height}
          <br />
          Mass: {character.mass}
          <br />
          Hair color: {character.hair_color}
          <br />
          Skin color: {character.skin_color}
          <br />
          Eye color: {character.eye_color}
          <br />
          Birth year: {character.birth_year}
          <br />
          Gender: {character.gender}
        </Typography>
        {characterId && (
          <Link to={`/character/${characterId}`}>
            <Typography variant="body2" color="primary">
              View Details
            </Typography>
          </Link>
        )}
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
