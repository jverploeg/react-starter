import React from 'react';

//functional
var MovieListEntry = (props) => (//passing in props.video
  <div className="movie-list-entry">
    <div className="movie-list-entry-title">{props.movieResults.title}</div>
  </div>
);


export default MovieListEntry;