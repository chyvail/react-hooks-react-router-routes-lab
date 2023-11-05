import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((element) => (
        <div key={element.name}>
          <h3>{element.name}</h3>
          <h4> Movies:</h4>
          <ul>
            {element.movies.map((movie) => (
              <li key={movie}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Directors;
