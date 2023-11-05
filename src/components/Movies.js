import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((element) => (
        <div key={element.title}>
          <h3>Name: {element.title}</h3>
          <h4>{element.time}</h4>
          <h4>Genres</h4>
          <ul>
            {element.genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Movies;
