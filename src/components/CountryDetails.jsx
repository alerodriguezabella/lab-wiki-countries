import React from 'react'
import {Link, useParams} from "react-router-dom";


const CountryDetails = ({countryState}) => {
  let { id } = useParams()
  const country = countryState.find((country) => {
    return id === country.alpha3Code
  })

  return (
    <div>
      <h1>{country.name.official}</h1>
      <h3>Capital</h3>
        <p>{country.capital}</p>
      <h3>Area</h3>
        <p>{country.area}km<sup>2</sup></p>
      <h3>Borders</h3>
      <ul>
      {country.borders.map((border) => {
        return (
          <li key={border}>
            <Link to={`/${border}`}>
              {border}
            </Link>
          </li>
        )
      })}
      </ul>
    </div>
  )
}

export default CountryDetails
