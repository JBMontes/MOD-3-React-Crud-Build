import { useState } from 'react'
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import './App.css'
import NavBar from './Components/NavBar.jsx';
import ShowsList from './Components/ShowsRelevant/ShowsList.jsx';

function App() {
 
console.log("Our Environment Variable: ", import.meta.env.VITE_10_1_VAR )
  return (
    <>
      <Router>

    <header> 
      <h1>Screen Views</h1>
    </header>
      <br />
    <NavBar />
    <Routes>

   <Route path="/" element={<h1>Home</h1>} /> 
   <Route path="/shows" element={<ShowsList />} /> 
   <Route path="/movies" element={<h1>All Movies</h1>} /> 
   <Route path="/shows/new" element={<h1>Form For New Show</h1>} /> 

    </Routes>

    <h2>  TEST-{import.meta.env.VITE_10_1_VAR}</h2>


  <footer>
  10.1©
  </footer>
      </Router>
    </>
  )
}

export default App

// /api/movies
// /api/shows