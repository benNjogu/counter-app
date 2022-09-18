import Navbar from "./component/navbar";
import Counters from "./component/counters";
import "./App.css";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main className="container">
        <Counters />
      </main>
    </React.Fragment>
  );
}

export default App;
