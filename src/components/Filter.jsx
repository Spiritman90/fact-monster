import { IoIosSearch } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { countryInput } from "../redux/actions/actionFunctions";
import { useState, useEffect } from "react";
import { ActionTypes } from "../redux/constants/actionTypes";

const Filter = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInput = useSelector((state) => state.countryInput);
  const [regionSelect, setRegionSelect] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/country`);
  };

  const handleOnChange = (e) => {
    dispatch(countryInput(e.target.value));
  };

  useEffect(() => {
    dispatch({ type: ActionTypes.REGION, payload: regionSelect });
  }, [regionSelect, dispatch]);

  console.log(regionSelect);
  return (
    <div className='search'>
      <form className='search__form' onSubmit={handleSubmit}>
        <IoIosSearch className='search__icon' />
        <input
          type='search'
          name='search'
          id='search'
          className='search__input'
          placeholder='Search for a country...'
          onChange={handleOnChange}
          value={userInput}
        />
      </form>

      <div className='filter'>
        <select
          name='select'
          id='select'
          className='filter__select'
          onChange={(e) => {
            setRegionSelect(e.target.value);
          }}
        >
          <option value='Filter by region'>Filter by Region</option>
          <option value='Africa'>Africa</option>
          <option value='Americas'>Americas</option>
          <option value='Asia'>Asia</option>
          <option value='Europe'>Europe</option>
          <option value='Oceania'>Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
