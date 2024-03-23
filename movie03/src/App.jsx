import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import SearchIcon from "./assets/SearchIcon.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=4f3009ea";

const App = () => {
  return (
    <div className="app">
      <Home />
    </div>
  );
};

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const searchMovies = async (title) => {
    try {
      let url = API_URL;
      if (title.trim() !== "") {
        url += `&s=${title}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.Search || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setMovies([]);
    }
  };

  useEffect(() => {
    searchMovies("Star Wars");
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      searchMovies(searchTerm);
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img src={SearchIcon} alt="search" onClick={handleSearch} />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <Link key={movie.imdbID} to={`/movie/${movie.imdbID}`}>
              <MovieCard movie={movie} />
            </Link>
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </>
  );
};

export default App;


