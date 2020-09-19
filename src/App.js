import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi there{" "}
          <span role="img" aria-label="wave">
            👋🏾
          </span>{" "}
          <br />
          This actually works!{" "}
          <span role="img" aria-label="perplex">
            🤨
          </span>
        </p>
      </header>
    </div>
  );
}

export default App;
