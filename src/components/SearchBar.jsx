import React from "react";

import SearchIcon from "../assets/search-icon.svg";

const SearchBar = ({ searchTerm, setSearchTerm, getMovies }) => {
  return (
    <form
      className="searchbar"
      onSubmit={(e) => {
        e.preventDefault();
        getMovies(searchTerm);
      }}
    >
      <input
        className="searchbar__input"
        type="text"
        placeholder="Search movie..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.currentTarget.value);
        }}
      />

      <img
        className="searchbar__icon"
        src={SearchIcon}
        alt="search"
        onClick={() => getMovies(searchTerm)}
      />
    </form>
  );
};

export default SearchBar;
