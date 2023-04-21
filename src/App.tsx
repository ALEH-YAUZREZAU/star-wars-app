import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import { Provider } from "react-redux";

import store from "./store";
import Home from "./pages/Home";
import Character from "./pages/Character";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Container maxWidth="md">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/character/:id" element={<Character />} />
          </Routes>
        </Container>
      </Router>
    </Provider>
  );
};

export default App;
