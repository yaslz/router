import "./App.css";
import { useState } from "react";
import { moviesData } from "./Components/Data/Data.js";
import MovieList from "./Components/MovieList/MovieList.js";
import AddMovie from "./Components/AddMovie/AddMovie.js";
import FilterByName from "./Components/FilterByName/FilterByName";
import Rate from "./Components/Rate/Rate";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [inputSearch, setInputSearch] = useState("");
  const [rating, setRating] = useState(1);

  const add = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="App">
      <NavBar />
      <h1>Movie App </h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/*" element={<Error />} />
      </Routes>

      <FilterByName inputSearch={inputSearch} setInputSearch={setInputSearch} />
      <Rate rating={rating} setRating={setRating} />
      <AddMovie add={add} />
      <MovieList movies={movies} inputSearch={inputSearch} rating={rating} />
      <Footer/>
    </div>
  );
}

export default App;
