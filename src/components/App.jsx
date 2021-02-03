import React from 'react';
import movies from '../lib/movies.js';
import MovieList from '../components/MovieList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: movies,
    }

  }


  render(){
    return(
    <div>
      <div className="header"></div>
      <div className="list">
        <div>
          <MovieList movielist={this.state.movies}/>
        </div>
      </div>
    </div>
  )}
}

export default App;
