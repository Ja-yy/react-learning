import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutesList } from "./RoutesList";
import NoteProvider from "./context/notes/NoteContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <NoteProvider>
          <Routes>
            {publicRoutesList.map((route) => (
              <Route
                exact
                key={`route-${route.name}`}
                path={route.url}
                element={route.element}
              />
            ))}
          </Routes>
        </NoteProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
