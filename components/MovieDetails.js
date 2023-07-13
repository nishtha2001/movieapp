import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const apiKey = 'c3579da55180fefba457763450270a89';

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setMovie(data);
      });
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m6">
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
        </div>
        <div className="col s14 m7">
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <p><strong>Vote Count:</strong> {movie.vote_count}</p>
          <p><strong>Vote Average:</strong> {movie.vote_average}</p>
        </div>
      </div>
    </div>
  );
}


  

  

export default MovieDetails;