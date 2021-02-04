import React from 'react';

//functional
var MovieListEntry = (props) => (//passing in props.video
  <div className="movie-list-entry">
    <div className="movie-list-entry-title">{props.movieResults.title}</div>
    <button className="movie-watched" style={props.style} onClick={props.watchToggle}></button>
  </div>
);


export default MovieListEntry;