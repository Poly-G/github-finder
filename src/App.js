import React from "react";
import "./App.css";

// Components
import Navbar from "./components/layout/Navbar";
import UserItem from "./components/users/UserItem";

const App = () => {
  return (
    <div className="App">
      <nav className="navbar bg-primary">
        <Navbar />
      </nav>
      <UserItem />
    </div>
  );
};

export default App;
