import React, { useState } from 'react';
import '../index.css'; 

const SearchBar = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchValue);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}> {/* Add the 'search-bar' class */}
      <input
        type="text"
        value={searchValue}
        onChange={handleChange}
        placeholder="Enter GitHub Username"
        className="search-input" 
      />
      <button type="submit" className="search-button">Search</button> 
    </form>
  );
};

export default SearchBar;
