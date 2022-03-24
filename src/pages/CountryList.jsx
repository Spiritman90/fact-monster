import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CountryList = () => {
  const allCountries = useSelector((state) => state.allCountriesData);
  return (
    <div className='country'>
      {allCountries.map((country, index) => (
        <Link to={`/${country.name.common}`} key={index}>
          <div className='country__card'>
            <img src={country.flags.svg} alt={country.name.common} />

            <h4>{country.name.common}</h4>
            <p>
              Population:{" "}
              <span>
                {new Intl.NumberFormat("us-US").format(country.population)}
              </span>
            </p>
            <p>
              {" "}
              Region: <span>{country.region}</span>
            </p>
            <p>
              {" "}
              Capital: <span>{country.capital}</span>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CountryList;
