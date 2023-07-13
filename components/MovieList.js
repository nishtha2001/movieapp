import React from 'react';
import { Movie } from './Movie';

const MovieList = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          {props.movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              image={movie.poster_path}
              title={movie.title}
              voteCount={movie.vote_count}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
