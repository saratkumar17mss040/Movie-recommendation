import React, { useState } from "react";
import { movies } from "./Movies";
import "./styles.css";

export default function App() {
  const [selectedCategory, setCategory] = useState("Programming");

  function categoryClickHandler(category) {
    setCategory(category);
  }

  function rating(numberOfRatings) {
    const spanElements = [];
    for (let i = 0; i < numberOfRatings; i++) {
      spanElements.push("span");
    }
    return (
      <span>
        {spanElements.map((el, index) =>
          React.createElement(el, { key: index }, "⭐")
        )}
      </span>
    );
  }
  return (
    <div className="App">
      <h1>
        <span role="img" aria-label="movie-icon">
          🎦
        </span>
        &nbsp; Good Movies
      </h1>
      <p>&nbsp; My favourite movies. Select a category to get started</p>
      <div>
        {Object.keys(movies).map((category) => (
          <button onClick={() => categoryClickHandler(category)}>
            {category}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {movies[selectedCategory].map((movie) => (
            <li key={movie.movieName}>
              <div style={{ fontSize: "larger", fontWeight: "bold" }}>
                {movie.movieName}
              </div>
              <div style={{ fontSize: "smaller" }}>
                <p>Rating out of 5</p>
                <span className="stars">{rating(movie.rating)}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
