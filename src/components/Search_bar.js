import React from 'react';

const SearchBar = ({ search, searchTerm }) => {
  return (
    <div>
      <input
        onChange={search}
        placeholder="type to search videos"
      />
    </div>
  );
};

export default SearchBar;
