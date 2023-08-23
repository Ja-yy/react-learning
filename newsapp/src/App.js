import "./App.css";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <News key="general" pageSize={15} category="general" country="in" />
          }
        ></Route>
        <Route
          exact
          element={
            <News key="science" pageSize={15} category="science" country="in" />
          }
          path="/science"
        ></Route>
        <Route
          exact
          element={
            <News
              key="business"
              pageSize={15}
              category="business"
              country="in"
            />
          }
          path="/business"
        ></Route>
        <Route
          exact
          element={
            <News
              key="entertainment"
              pageSize={15}
              category="entertainment"
              country="in"
            />
          }
          path="/entertainment"
        ></Route>
        <Route
          exact
          element={
            <News key="health" pageSize={15} category="health" country="in" />
          }
          path="/health"
        ></Route>
        <Route
          exact
          element={
            <News key="sports" pageSize={15} category="sports" country="in" />
          }
          path="/sports"
        ></Route>
        <Route
          exact
          element={
            <News
              key="technology"
              pageSize={15}
              category="technology"
              country="in"
            />
          }
          path="/technology"
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
