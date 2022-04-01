import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ActionTypes } from "../redux/constants/actionTypes";
import {
  getCountriesDetail,
  getCountriesDetailsError,
} from "../redux/actions/actionFunctions";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

const Country = () => {
  const { name } = useParams();
  const oneCountry = useSelector((state) => state.getCountriesdetails);
  const oneCountryError = useSelector((state) => state.error);
  const allCountries = useSelector((state) => state.allCountriesData);
  let allCountriesLoading = useSelector((state) => state.isLoading);

  const user = useSelector((state) => state.countryInput);
  const url = `https://restcountries.com/v2/name/${name}`;
  const dispatch = useDispatch();
  useEffect(() => {
    const countryDetails = async (dispatch) => {
      dispatch({ type: ActionTypes.FETCH_DATA_START });
      try {
        const response = await axios.get(url);
        dispatch(getCountriesDetail(response?.data));
        console.log(response);
      } catch (error) {
        dispatch(getCountriesDetailsError(error.message));
        console.log(error.message);
      }
    };
    dispatch(countryDetails);
  }, [dispatch, url]);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    // let loading = allCountries ? !allCountriesLoading : "";
  };

  return (
    <section className='profile'>
      <button className='back__btn' onClick={handleClick}>
        <HiOutlineArrowNarrowLeft />
        &nbsp; &nbsp;
        <span>Back</span>
      </button>
      {oneCountryError && <p>{oneCountryError}</p>}
      {oneCountry &&
        oneCountry.map((country, index) => (
          <div className='country__details' key={index}>
            <div className='country__image'>
              <img src={country.flag} alt={country.name} key={index} />
            </div>

            <div className='country__name'>
              <div className='country__common'>
                <h2>{country.name}</h2>
              </div>

              <div className='country__info'>
                <div className='country__area'>
                  <p>
                    Native name: <span>{country.nativeName}</span>
                  </p>
                  <p>
                    Population:{" "}
                    <span>
                      {new Intl.NumberFormat("us-US").format(
                        country.population
                      )}
                    </span>
                  </p>
                  <p>
                    Region: <span>{country.region}</span>
                  </p>
                  <p>
                    Sub Region: <span>{country.subregion}</span>
                  </p>
                  <p>
                    Capital: <span>{country.capital}</span>
                  </p>
                </div>

                <div className='country__domain'>
                  <p>
                    Top Level Domain: <span>{country.topLevelDomain}</span>
                  </p>

                  <p>
                    Currencies: <span>{country?.currencies?.[0]?.name}</span>
                  </p>
                  <p>
                    Languages:{" "}
                    <span className='languages'>
                      {country?.languages.map((lang) => lang.name).join(", ")}
                    </span>
                  </p>
                </div>
              </div>
              <div className='country__borders'>
                <span className='border'>Border Countries: &nbsp; </span>
                {!country?.borders ? (
                  <span> Country is an Island, no borders</span>
                ) : (
                  <div className='border__buttons'>
                    {country?.borders?.map((item, index) => (
                      <button className='buttons' key={index}>
                        {item}
                      </button>
                    ))}{" "}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
    </section>
  );
};

export default Country;
