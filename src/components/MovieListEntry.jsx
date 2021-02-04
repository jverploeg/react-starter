import React from 'react';

//functional
var MovieListEntry = (props) => (//passing in props.video
  <div className="movie-list-entry">
    <span className="movie-list-entry-title">{props.movieResults.title}</span>
    <button className="movie-watched" style={{backgroundColor: props.movieResults.watched ? 'green' : 'red'}} onClick={() => props.watchToggle(props.movieResults.id)}></button>
  </div>
);


export default MovieListEntry;