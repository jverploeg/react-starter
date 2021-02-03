import React from 'react';
import MovieListEntry from '../components/MovieListEntry.jsx';

//functional
var MovieList = (props) => ( //passing in movielist={this.state.movies}
  <div className="movie-list">
    {props.movies.map((item, index)=>
      <MovieListEntry movie={item} key={index} search={props.search}/>
    )}
  </div>
);


export default MovieList;