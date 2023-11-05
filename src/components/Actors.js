import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors && actors.map((element) => <div key={element.name}>
        <h3>{element.name}</h3>
        <h4> Movies:</h4>
        <ul>
          {element.movies.map((movie)=>(
            <li key={movie}>{movie}</li>
          ))}
        </ul>
      </div>)}
    </div>
  );
}

export default Actors;
