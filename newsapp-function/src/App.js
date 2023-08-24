import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = (props) => {
  const apiNewKey = process.env.REACT_APP_NEW_API_KEY;
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <LoadingBar
          color="#f11946"
          progress={progress}
          onLoaderFinished={(prs) => setProgress(prs)}
          shadow={true}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                apiNewKey={apiNewKey}
                key="general"
                pageSize={15}
                category="general"
                country="in"
              />
            }
          ></Route>
          <Route
            exact
            element={
              <News
                setProgress={setProgress}
                apiNewKey={apiNewKey}
                key="science"
                pageSize={15}
                category="science"
                country="in"
              />
            }
            path="/science"
          ></Route>
          <Route
            exact
            element={
              <News
                setProgress={setProgress}
                apiNewKey={apiNewKey}
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
                setProgress={setProgress}
                apiNewKey={apiNewKey}
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
              <News
                setProgress={setProgress}
                apiNewKey={apiNewKey}
                key="health"
                pageSize={15}
                category="health"
                country="in"
              />
            }
            path="/health"
          ></Route>
          <Route
            exact
            element={
              <News
                setProgress={setProgress}
                apiNewKey={apiNewKey}
                key="sports"
                pageSize={15}
                category="sports"
                country="in"
              />
            }
            path="/sports"
          ></Route>
          <Route
            exact
            element={
              <News
                setProgress={setProgress}
                apiNewKey={apiNewKey}
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
    </div>
  );
};

export default App;
