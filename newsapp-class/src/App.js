import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  apiNewKey = process.env.REACT_APP_NEW_API_KEY;
  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
            onLoaderFinished={() => this.setProgress(0)}
            shadow={true}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  apiNewKey={this.apiNewKey}
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
                  setProgress={this.setProgress}
                  apiNewKey={this.apiNewKey}
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
                  setProgress={this.setProgress}
                  apiNewKey={this.apiNewKey}
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
                  setProgress={this.setProgress}
                  apiNewKey={this.apiNewKey}
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
                  setProgress={this.setProgress}
                  apiNewKey={this.apiNewKey}
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
                  setProgress={this.setProgress}
                  apiNewKey={this.apiNewKey}
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
                  setProgress={this.setProgress}
                  apiNewKey={this.apiNewKey}
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
  }
}
