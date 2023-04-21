import React, { useState } from "react";
import { Button, TextField, Grid } from "@mui/material";
import { Character } from "../types";

interface CharacterFormProps {
  character: Character;
  onSubmit: (updatedCharacter: Character) => void;
}

const CharacterForm: React.FC<CharacterFormProps> = ({ character, onSubmit }) => {
  const [editedCharacter, setEditedCharacter] = useState<Character>(character);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEditedCharacter({
      ...editedCharacter,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(editedCharacter);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField fullWidth label="Name" name="name" value={editedCharacter.name} onChange={handleChange} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Height" name="height" value={editedCharacter.height} onChange={handleChange} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Mass" name="mass" value={editedCharacter.mass} onChange={handleChange} />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label="Hair Color" name="hair_color" value={editedCharacter.hair_color} onChange={handleChange} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Skin Color" name="skin_color" value={editedCharacter.skin_color} onChange={handleChange} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Eye Color" name="eye_color" value={editedCharacter.eye_color} onChange={handleChange} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Birth Year" name="birth_year" value={editedCharacter.birth_year} onChange={handleChange} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Gender" name="gender" value={editedCharacter.gender} onChange={handleChange} />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit">
            Save Changes
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default CharacterForm;
