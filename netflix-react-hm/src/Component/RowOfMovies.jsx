import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import SingleMovie from './SingleMovie';
import '../styles.css';

const RowOfMovies = ({ title }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=a0871843&s="${title.toLowerCase()}"&type=movie&page=1`
      );
      let movies_json = await response.json();

      setMovies(movies_json);
    };
    fetchMovies();
  }, []);

  return (
    <>
      <h2>{title}</h2>
      <Carousel className='car-c' indicators={false}>
        <Carousel.Item>
          {movies.Search &&
            movies.Search.slice(0, 6).map((movie) => (
              <SingleMovie
                key={movie.imdbID}
                img={movie.Poster}
                title={movie.Title}
                id={movie.imdbID}
              />
            ))}
        </Carousel.Item>
        <Carousel.Item>
          {movies.Search &&
            movies.Search.slice(4, 10).map((movie) => {
              return (
                <SingleMovie
                  key={movie.imdbID}
                  img={movie.Poster}
                  title={movie.Title}
                  id={movie.imdbID}
                />
              );
            })}
        </Carousel.Item>
      </Carousel>
    </>
  );
};
export default RowOfMovies;
