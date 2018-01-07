import React from 'react';

const SearchBar = ({ search, searchTerm }) => {
  return (
    <div className='search'>
      <img className='loupe' src='../search.png' alt='search' />
      <input
        className='input_search'
        onChange={search}
        placeholder="type to search videos"
      />
    </div>
  );
};

export default SearchBar;
