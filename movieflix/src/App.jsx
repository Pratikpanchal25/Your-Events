import React, { useEffect, useState } from "react";

import Card from "./Components/Cards";
const name = 1;

const APIURL = "https://www.omdbapi.com/?i=tt3896198&apikey=14c12858";
const url =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  const getData = async (title) => {
    const response = await fetch(`${APIURL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);

    console.log(movies);
  };

  const searchMovies = () => {
    getData(searchWord);
  };

  if (searchWord === "") {
    getData("avengers");
  }

  return (
    <>
      <div className="navbar-1">
        <div className="navbar">
          <h1 className="logo">Movie-Flix</h1>
          <div className="search">
            <input
              className="inp-1"
              type="text"
              placeholder="Search For Movies"
              value={searchWord}
              onChange={(e) => {
                setSearchWord(e.target.value);
              }}
            />

            <button className="btn-1" onClick={searchMovies}>
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="cards">
        {movies.map((movie) => (
          <Card movie={movie} />
        ))}
      </div>
    </>
  );
}

export default App;
