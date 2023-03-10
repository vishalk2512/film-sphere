import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <span className="movie__year">{movie.Year}</span>

      <img
        className="movie__img"
        src={
          movie.Poster === "N/A"
            ? "https://placehold.jp/000000/ffffff/300x400.png?text=Poster%20not%20Available&css=%7B%22background%22%3A%22%20transparent%22%7D"
            : movie.Poster
        }
        alt={movie.Title}
      />

      <div className="movie__detail">
        <p className="movie__type">{movie.Type}</p>
        <h2 className="movie__title">{movie.Title}</h2>
      </div>
    </div>
  );
};

export default MovieCard;
