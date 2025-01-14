import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie => {
          return <div>
            {movie.title} - Movie Length: {movie.time} min
          <ul>{movie.genres.map(genre => <li>{genre}</li>)}</ul>
          </div>
        }  
        )}
    </div>
  );
};

export default Movies;
