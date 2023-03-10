import React, { useEffect, useState } from "react";

import "./App.css";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";

const API_URL = "https://omdbapi.com/?apikey=f3ccff70";
function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    getMovies("batman");
  }, []);

  return (
    <div className="wrapper">
      <h1 className="app__title">
        <a href="/"> FilmSphere</a>
      </h1>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        getMovies={getMovies}
      />
      {movies?.length > 0 ? (
        <div className="movie__container">
          {movies.map((movie) => {
            return <MovieCard key={movie.imdbID} movie={movie} />;
          })}
        </div>
      ) : (
        <h2 className="movie__notfound">Movie not found!</h2>
      )}
    </div>
  );
}

export default App;
