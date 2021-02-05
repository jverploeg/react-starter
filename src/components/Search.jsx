import React from 'react';

//Search modifies what we see on the screen, but shouldn't modify our movies array...
// needs to be able to change view based on either
//   - a search term
//   - buttons for watched or to watch...
// --> so do movie list and movieList view need to be children of search????

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      //watched: false,
    }
    //bindings for created methods
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //methods
  //SEARCH
  handleChange(event) {
    this.setState({
      searchTerm: event.target.value
    })
  }
  handleSubmit(event) {
    event.preventDefault();
    var searchTerm = this.state.searchTerm;
    //want to loop through movies[] and push matching results to a new array
    var result = [];
    var movArray = this.props.movies.slice();
    console.log(this.props.movies);
    console.log(movArray);
    //loop through array
    for(var i = 0; i < movArray.length; i++) {
      var lower = movArray[i].title.toLowerCase();
      //console.log(lower);
      if(lower.includes(searchTerm)) {
        result.push(movArray[i]);
      }
    }
    console.log(result);
    //return result array
    //searchMovie={this.searchMovie}
    this.props.searchMovie(result);

    this.setState({
      searchTerm: '',
    });
  }


  render() {
    return (
      // handles a submit if enter is pressed on keyboard
      <form>
        <label>
          <input name="search" type="text" value={this.state.searchTerm} onChange={this.handleChange}></input>
        </label>
      <button onClick={this.handleSubmit}>Search</button>
      </form>
    )
  }
}

// //functional
// var Search = (props) => (
//   <div className="movie-search">
//     <input className="form-control" type="text" onChange={(event) => props.handleSearch(event.target.value)}/>
//     <button className="btn" onClick={props.handleSubmit}>?</button>
//   </div>
// );


export default Search;