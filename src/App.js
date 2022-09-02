// src/App.js
import { Routes, Route } from "react-router-dom";
import "./App.css";
import countries from './countries.json';
import Navbar from './components/Navbar'
import {useState} from 'react';
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";

function App() {
  const [countryState, setCountryState] = useState(countries)
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<CountriesList countryState={countryState}/>} />
        <Route path='/:id' element={<CountryDetails countryState={countryState}/>} />
      </Routes>
    </div>
  )
}
export default App;
