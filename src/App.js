import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from './containers/Home';
import CV from './components/CV';
import ContactDetails from './components/ContactDetails';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={< Home />} />
          <Route path="/CV" element={< CV />} />
          <Route path="/ContactDetails" element={< ContactDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
