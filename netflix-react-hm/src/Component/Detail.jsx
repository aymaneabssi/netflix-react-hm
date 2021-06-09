import React, { useState, useEffect } from 'react';

const Detail = ({ match, history }) => {
  const [movie, setMovie] = useState('');
  useEffect(() => {
    let id = match.params.movieId;
    const fetchMovies = async () => {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=a0871843&i=${id}`
      );
      let movies_json = await response.json();
      setMovie(movies_json);
    };
    fetchMovies();
  }, []);
  return <h1 style={{ color: 'white' }}>{movie.Title}</h1>;
};

export default Detail;
