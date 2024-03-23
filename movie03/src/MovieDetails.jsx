// MovieDetails.jsx

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { imdbID } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`http://www.omdbapi.com?apikey=4f3009ea&i=${imdbID}`);
        if (!response.ok) {
          throw new Error("Failed to fetch movie details");
        }
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [imdbID]);

  if (!movie) {
    return <div style={{ fontSize: "1.5rem", color: "#f9d3b4" }}>Loading...</div>;
  }

  const { Title, Year, Type, Poster } = movie;

  return (
    <div className="movie-details">
      <h2>{Title}</h2>
      <p>Year: {Year}</p>
      <p>Type: {Type}</p>
      <img src={Poster} alt={Title} style={{ maxWidth: "300px" }} />
    </div>
  );
};

export default MovieDetails;

