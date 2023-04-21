import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";

import { CharactersState, Character } from "../types";

const initialState: CharactersState = {
  characters: [],
  count: 0,
  currentPage: 1,
  searchQuery: "",
};

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setCharacters: (state, action) => {
      state.characters = action.payload.results;
      state.count = action.payload.count;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      state.currentPage = 1;
    },
    updateCharacter: (state, action: PayloadAction<Character>) => {
      const index = state.characters.findIndex((character) => character.url === action.payload.url);

      if (index !== -1) {
        state.characters[index] = action.payload;
      }
    },
  },
});

export const { setCharacters, setCurrentPage, setSearchQuery, updateCharacter } = charactersSlice.actions;

const store = configureStore({
  reducer: {
    characters: charactersSlice.reducer,
  },
});

export default store;
