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
      //search: '',
      //inputPartial: '',
      //input: '',
      //watched: false,
    }
    //bindings
    this.addMovie = this.addMovie.bind(this);
    this.searchMovie = this.searchMovie.bind(this);

    this.watchedStatus = this.watchedStatus.bind(this);

    //initialize
    //this.searchMovie('');
  }

  addMovie(movie) {
    var newMovies = this.state.movies.slice(); //make a shallow copy of our movie array
    newMovies.push(movie); //add returned movie from the AddMovie class
    this.setState({
      movies: newMovies, //this way we don't lose our original movie array when we add a movie
    })
  }
  searchMovie(movieDisplay) {
    //var displayMovies = this.state.movies.slice(); //make a shallow copy of our movie array
    //do something
    this.setState({
      movieResults: movieDisplay,
    })
    console.log(movieDisplay);
  }
  //initializing the display before search...
  display() {
    if(this.state.movieResults.length === 0) {
      return this.state.movies;
    } else {
      return this.state.movieResults;
    }
  }
  watchedStatus(event) {
    console.log(event);

  }

  render() {
    return(
    <div>
      <div className="header"></div>
      <div className="new-movie">
        <AddMovie addMovie={this.addMovie} />
      </div>
      <div className="search">
        <Search movies={this.state.movies} searchMovie={this.searchMovie}/>
      </div>
      <div className="list">
        <div className="button-bar">
          <button className="watched">Watched</button>
          <button className="to-watch">To Watch</button>
       </div>
        <div>
          <MovieList
            //movies={this.state.movies} //might want to pass movieResults in here...
            //movies={this.state.movieResults}
            movies={this.display()}
            watchedStatus={this.watchedStatus}

           />
        </div>
      </div>
    </div>
  )}
};
//   render() {
//     //making the style conditional on our state lets us update it based on user interactions
//     // var style = {
//     //   backgroundColor: this.state.watched ? 'green' : 'red'
//     //   //change inner text?
//     // };



//     return(
//     <div>
//       <div className="header"></div>
//       <div className="new-movie">
//         <AddMovie handleInput={this.handleInput.bind(this)} handleMovieSubmit={this.handleMovieSubmit.bind(this)} />
//       </div>
//       <div className="search">
//         {/* <Search handleSearch={this.handleSearch.bind(this)} handleSubmit={this.handleSubmit.bind(this)} /> */}
//       </div>
//       <div className="list">
//         <div className="button-bar">
//           <button className="watched">Watched</button>
//           <button className="to-watch">To Watch</button>
//        </div>
//         <div>
//           <MovieList
//             movies={this.state.movies}
//             search={this.state.searchPartial}
//             watchToggle={this.watchToggle.bind(this)}
//            />
//         </div>
//       </div>
//     </div>
//   )}
// };

export default App;




  //movieSearch
  // handleSearch(text) {
  //   console.log(text);
  //   this.setState({
  //     searchPartial: text
  //   });
  // }
  // handleSubmit() {
  //   var searchQ = this.state.searchPartial;
  //   this.setState({
  //     search: searchQ
  //   });
  //   var result = [];
  //   for(var i = 0; i < this.state.movies.length; i++) {
  //     var lower = this.state.movies[i].title.toLowerCase();
  //     if(lower.includes(searchQ)) {
  //       result.push(this.state.movies[i]);
  //     }
  //     // if(movies[i].title.searchQ === undefined) {
  //     //   result = [{title: 'No Movies found by that name'}];
  //     // } this isn't working correctly. Come back to
  //   }
  //   console.log(result);
  //   this.setState({
  //     movieResults: result
  //     //movies: result
  //   });
  // }


  // //movie input methods
  // handleInput(text) {
  //   this.setState({
  //     inputPartial: text
  //   });
  // }
  // handleMovieSubmit() {
  //   var inputEvent = this.state.inputPartial;

  //   this.setState({
  //     movies: [...this.state.movies, {title: inputEvent, watched: false, id: Date.now()}], //this.state.watched}], initialize to not watched
  //     movieResults: [...this.state.movies, {title: inputEvent, watched: false, id: Date.now()}],//create
  //   });
  // }

  // //watch methods
  // watchToggle(id) {
  //   console.log('id',id);
  //   this.setState({
  //     movies: this.state.movies.map(movie => {
  //       if(movie.id === id) {
  //         console.log('changing');
  //         return {
  //           ...movie, //get all the movie properties
  //           watched: !movie.watched,
  //         };
  //       } else {
  //         console.log('not changing');
  //         return movie;
  //       }
  //     })     //!this.state.watched,
  //   });
  // }