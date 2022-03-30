import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ActionTypes } from "../redux/constants/actionTypes";
import {
  getAllCountriesSuccess,
  getAllCountriesError,
} from "../redux/actions/actionFunctions";
import CountryList from "./CountryList";
import Filter from "../components/Filter";

const url = "https://restcountries.com/v3.1/all";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const countrydata = async (dispatch) => {
      dispatch({ type: ActionTypes.FETCH_DATA_START });
      try {
        const response = await axios.get(url);
        dispatch(getAllCountriesSuccess(response?.data));
      } catch (error) {
        dispatch(getAllCountriesError(error.message));
        console.log(error.message);
      }
    };
    dispatch(countrydata);
  }, [dispatch]);

  const allCountries = useSelector((state) => state.allCountriesData);
  const allCountriesError = useSelector((state) => state.error);
  const allCountriesLoading = useSelector((state) => state.isLoading);
  return (
    <>
      <section
        className='home'
        style={{
          height: allCountriesLoading ? "90vh" : "unset",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Filter />
        {allCountriesError && <p>{allCountriesError}</p>}
        {allCountriesLoading && (
          <h1 style={{ alignSelf: "center", justifySelf: "center" }}>
            Loading...
          </h1>
        )}
        {allCountries && <CountryList countries={allCountries} />}
      </section>
    </>
  );
};

export default Home;
