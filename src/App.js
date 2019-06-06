import React from "react";
import "./App.css";

// Components
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Users />
    </div>
  );
};

export default App;
