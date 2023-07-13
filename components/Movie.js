import React from 'react';
import { Link } from 'react-router-dom';


export const Movie = (props) => {
  return (
    <div className="col s2 m6">
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="card image" style={{width: "100%", height: 360 }}/>
        </div>
        <div className="card-content">
          <span className="card-title">{props.title}</span>
          <p>Vote Count: {props.voteCount}</p>
          <Link to={`/movie/${props.id}`}>View Details</Link>
        </div>
      </div>
    </div>
  )
}

