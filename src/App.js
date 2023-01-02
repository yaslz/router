import "./App.css";
import { useState } from "react";
import { moviesData } from "./Components/Data/Data.js";
import MovieList from "./Components/MovieList/MovieList.js";
import AddMovie from "./Components/AddMovie/AddMovie.js";
import FilterByName from "./Components/FilterByName/FilterByName";
import Rate from "./Components/Rate/Rate";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [inputSearch, setInputSearch] = useState("");
  const [rating, setRating] = useState(1);

  const add = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="App">
      <h1>Movie App </h1>
      <FilterByName inputSearch={inputSearch} setInputSearch={setInputSearch} />
      <Rate rating={rating} setRating={setRating} />
      <AddMovie add={add} />
      <MovieList movies={movies} inputSearch={inputSearch} rating={rating} />
    </div>
  );
}

export default App;
