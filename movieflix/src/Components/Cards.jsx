import React, { useEffect } from "react";

export default function Cards({ movie }) {
  // const movie_1 = {
  //   Poster:
  //     "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  //   Title: "Batman v Superman: Dawn of Justice",
  //   Type: "movie",
  //   Year: "2016",
  //   imdbID: "tt2975590",
  // };
  return (
    <>
      <div>
        <div className="card">
          <a href={`https://www.imdb.com/title/${movie.imdbID}/`}>
            <img className="image" src={movie.Poster} alt="Movie Poster" />
          </a>

          <div className="rating ">
            <img className="star" src="\star.png" alt="" />
            {/* <h3 className="star"> Type 🔘</h3> */}
            <h4 className="year">Year </h4> <p> :- {movie.Year}</p>
          </div>

          <div className="info">
            <h4 className="avengers">{movie.Title}</h4>
            <p className="genre">
              <b>Type 🔘 </b> {movie.Type}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
