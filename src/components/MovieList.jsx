import React from 'react';
import MovieListEntry from '../components/MovieListEntry.jsx';

//functional
var MovieList = (props) => ( //passing in movielist={this.state.movies}
  <div className="movie-list">
    {props.movies.map((item, index)=>
      <MovieListEntry
      movies={item}
      key={index}
      watchedStatus={props.watchedStatus}
      // search={props.search}
      // watchToggle={props.watchToggle}
      />
    )}
  </div>
);


export default MovieList;