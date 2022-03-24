import { ActionTypes } from "../constants/actionTypes";

const countries = {
  allCountriesData: [],
  getCountriesDetails: [],
  countryInput: "",
  isLoading: false,
  error: null,
  isError: false,
};

const reducer = (state = countries, action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.FETCH_DATA_START:
      return { ...state, isLoading: true };

    case ActionTypes.GET_ALL_COUNTRIES:
      return {
        ...state,
        allCountriesData: payload,
        isLoading: false,
        isError: false,
        error: null,
      };

    case ActionTypes.GET_ALL_COUNTRIES_ERROR:
      return {
        ...state,
        isError: true,
        error: payload,
        allCountriesData: [],
      };

    case ActionTypes.GET_COUNTRIES_DETAILS:
      return {
        ...state,
        getCountriesdetails: payload,
        isLoading: false,
        isError: false,
        error: null,
      };

    case ActionTypes.GET_COUNTRIES_DETAILS_ERROR:
      return {
        ...state,
        isError: true,
        error: payload,
        getCountriesDetails: [],
      };

    case ActionTypes.COUNTRY_INPUT:
      return { ...state, countryInput: payload };

    default:
      return state;
  }
};

export default reducer;
