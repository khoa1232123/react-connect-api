import React from "react";
import "./App.css";
import Menu from './components/Menu/Menu';
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
    <Menu />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Routes />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
