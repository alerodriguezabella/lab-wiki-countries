import React from 'react'
import {Link} from "react-router-dom";

const CountriesList = ({countryState}) => {
  return (
    <div>
        {countryState.map((elem) => {
            return(
                <div className="list-group" key={elem.alpha3Code}>
                    <Link className="list-group-item list-group-item-action" to={`/${elem.alpha3Code}`}>
                        {elem.name.official}
                    </Link>
                </div>
            )
        })}
    </div>
  )
}

export default CountriesList;