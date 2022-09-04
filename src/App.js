// src/App.js
import { Routes, Route } from "react-router-dom";
import "./App.css";
// import countries from './countries.json';
import Navbar from './components/Navbar'
import {useState, useEffect} from 'react';
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import axios from 'axios'

function App() {
  // with DB
  // const [countryState, setCountryState] = useState(countries)

  // with API
  const [countryState, setCountryState] = useState([])
  const apiUrl = 'https://ih-countries-api.herokuapp.com/countries'

  useEffect(() => {
    axios.get(apiUrl)
      .then(response => setCountryState(response.data))
      .catch(err => console.log(err))
  }, [])

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
