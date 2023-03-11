import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import Main from "./components/Main";

class App extends React.Component {
  // Constructor

  // ComponentDidMount is used to
  // execute the code

  render() {
    return (
      <>
        <div className="container">
          <NavBar />

          <Main />
        </div>
      </>
    );
  }
}

export default App;
