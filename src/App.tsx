import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";

import store from "./store";
import Home from "./pages/Home";
import Character from "./pages/Character";
import { NetworkErrorProvider } from "./providers/NetworkError";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});

const App: React.FC = () => {
  return (
    <NetworkErrorProvider>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </NetworkErrorProvider>
  );
};

export default App;
