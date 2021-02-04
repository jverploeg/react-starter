import React from 'react';
//import movies from '../lib/movies.js';
import MovieList from '../components/MovieList.jsx';
import Search from '../components/Search.jsx';
import AddMovie from '../components/AddMovie.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [], //movies,//our search result are currently overwriting our movie array...
      movieResults: [],
      searchPartial: '',
      search: '',
      inputPartial: '',
      input: '',
      watched: false,
    }

  }
  //movieSearch
  handleSearch(text) {
    console.log(text);
    this.setState({
      searchPartial: text
    });
  }
  handleSubmit() {
    var searchQ = this.state.searchPartial;
    this.setState({
      search: searchQ
    });
    var result = [];
    for(var i = 0; i < this.state.movies.length; i++) {
      var lower = this.state.movies[i].title.toLowerCase();
      if(lower.includes(searchQ)) {
        result.push(this.state.movies[i]);
      }
      // if(movies[i].title.searchQ === undefined) {
      //   result = [{title: 'No Movies found by that name'}];
      // } this isn't working correctly. Come back to
    }
    this.setState({
      movieResults: result
      //movies: result
    });
  }


  //movie input methods
  handleInput(text) {
    this.setState({
      inputPartial: text
    });
  }
  handleMovieSubmit() {
    var inputEvent = this.state.inputPartial;

    this.setState({
      movies: [...this.state.movies, {title: inputEvent, watched: false, id: Date.now()}], //this.state.watched}], initialize to not watched
      movieResults: [...this.state.movies, {title: inputEvent, watched: false, id: Date.now()}],//create
    });
  }

  //watch methods
  watchToggle(id) {
    console.log('id',id);
    this.setState({
      movies: this.state.movies.map(movie => {
        if(movie.id === id) {
          console.log('changing');
          return {
            ...movie, //get all the movie properties
            watched: !movie.watched,
          };
        } else {
          console.log('not changing');
          return movie;
        }
      })     //!this.state.watched,
    });
  }


  render() {
    //making the style conditional on our state lets us update it based on user interactions
    // var style = {
    //   backgroundColor: this.state.watched ? 'green' : 'red'
    //   //change inner text?
    // };



    return(
    <div>
      <div className="header"></div>
      <div className="new-movie">
        <AddMovie handleInput={this.handleInput.bind(this)} handleMovieSubmit={this.handleMovieSubmit.bind(this)} />
      </div>
      <div className="search">
        <Search handleSearch={this.handleSearch.bind(this)} handleSubmit={this.handleSubmit.bind(this)} />
      </div>
      <div className="list">
        <div className="button-bar">
          <button className="watched">Watched</button>
          <button className="to-watch">To Watch</button>
       </div>
        <div>
          <MovieList
            movieResults={this.state.movies}
            search={this.state.searchPartial}
            watchToggle={this.watchToggle.bind(this)}
           />
        </div>
      </div>
    </div>
  )}
};

export default App;
