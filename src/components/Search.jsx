import React from 'react';

//functional
var Search = (props) => (
  <div className="movie-search">
    <input className="form-control" type="text" onChange={(event) => props.handleSearch(event.target.value)}/>
    <button className="btn" onClick={props.handleSubmit}>?</button>
  </div>
);


export default Search;