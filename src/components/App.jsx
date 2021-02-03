import React from 'react';
import movies from '../lib/movies.js';
import MovieList from '../components/MovieList.jsx';
import Search from '../components/Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: movies,
      searchPartial: '',
      search: ''
    }

  }
  //onsubmitmethod
  handleSearch(text) {
    console.log(text);
    this.setState({
      searchPartial: text
    });
    if(text === '') {
      this.setState({
        movies: movies
      });
    }
  }
  handleSubmit() {
    var searchQ = this.state.searchPartial;
    console.log(searchQ);
    //console.log(event);
    this.setState({
      search: searchQ
    });
    var result = [];
    for(var i = 0; i < movies.length; i++) {
      var lower = movies[i].title.toLowerCase();
      if(lower.includes(searchQ)) {
        result.push(movies[i]);
      }
      // if(movies[i].title.searchQ === undefined) {
      //   result = [{title: 'No Movies found by that name'}];
      // } this isn't working correctly. Come back to
    }
    this.setState({
      movies: result
    });
  }



  render(){
    return(
    <div>
      <div className="header"></div>
      <div className="nav">
        <Search handleSearch={this.handleSearch.bind(this)} handleSubmit={this.handleSubmit.bind(this)} />
      </div>
      <div className="list">
        <div>
          <MovieList movies={this.state.movies} search={this.state.searchPartial}/>
        </div>
      </div>
    </div>
  )}
}

export default App;
