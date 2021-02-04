import React from 'react';

//functional
var AddMovie = (props) => (
  <div className="movie-input">
    <input className="form-control" type="text" onChange={(event) => props.handleInput(event.target.value)}/>
    <button className="btn" onClick={props.handleMovieSubmit}>Submit</button>
  </div>
);


export default AddMovie;