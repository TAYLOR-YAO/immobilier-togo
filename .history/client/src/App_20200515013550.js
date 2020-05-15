import React from 'react';
import './App.css';
// import LendingPage from "./LendingPage/LendingPage";
import Router from "./Components/Router/Router";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router/>
      <div className="footer fixed-bottom">
        <p>Immo-Togo &copy; 2020</p>
      </div>
    </div>
  );
}

export default App;
