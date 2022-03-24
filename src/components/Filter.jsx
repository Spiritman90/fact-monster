import React from "react";
import { IoIosSearch } from "react-icons/io";

const Filter = () => {
  return (
    <div className='search'>
      <form className='search__form'>
        <IoIosSearch className='search__icon' />
        <input
          type='search'
          name='search'
          id='search'
          className='search__input'
          placeholder='Search for a country...'
        />
      </form>

      <div className='filter'>
        <select name='select' id='select' className='filter__select'>
          <option value='Filter by region'>Filter by Region</option>
          <option value='Africa'>Africa</option>
          <option value='America'>America</option>
          <option value='Asia'>Asia</option>
          <option value='Europe'>Europe</option>
          <option value='Oceania'>Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
