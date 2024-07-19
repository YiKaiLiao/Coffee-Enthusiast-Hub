import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
// components
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import CoffeeTrivia from "./components/CoffeeTrivia";
import AddEntryForm from "./pages/CoffeeJournalPage/AddEntryForm";
import JournalEntries from "./pages/CoffeeJournalPage/JournalEntries";
import ExploreCoffeePage from "pages/ExploreCoffeePage";
import CoffeeProductsPage from "./pages/CoffeeProductsPage";
// styles
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme/theme";

const App = () => {
  const [entries, setEntries] = useState([]);

  const addEntry = (entry) => {
    setEntries([...entries, { ...entry, id: entries.length + 1 }]);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HelmetProvider>
        <Helmet>
          <title>Coffee Enthusiast Hub</title>
        </Helmet>
        <Router>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <HowItWorks />
                  <CoffeeTrivia />
                </>
              }
            />
            <Route
              path="/journal"
              element={
                <>
                  <AddEntryForm addEntry={addEntry} />
                  <JournalEntries entries={entries} />
                </>
              }
            />
            <Route path="/explore" element={<ExploreCoffeePage />} />
            <Route path="/products" element={<CoffeeProductsPage />} />
          </Routes>
        </Router>
      </HelmetProvider>
    </ThemeProvider>
  );
};

export default App;
