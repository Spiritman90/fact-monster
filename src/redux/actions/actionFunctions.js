import { ActionTypes } from "../constants/actionTypes";

export const getAllCountriesSuccess = (data) => ({
  type: ActionTypes.GET_ALL_COUNTRIES,
  payload: data,
});

export const getAllCountriesError = (error) => ({
  type: ActionTypes.GET_ALL_COUNTRIES_ERROR,
  payload: error,
});

export const getCountriesDetail = (data) => ({
  type: ActionTypes.GET_COUNTRIES_DETAILS,
  payload: data,
});

export const getCountriesDetailsError = (error) => ({
  type: ActionTypes.GET_COUNTRIES_DETAILS_ERROR,
  payload: error,
});
