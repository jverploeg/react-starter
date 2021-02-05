import React from 'react';
//i think we want to make this a class?


class MovieListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      watched: false,
    }
    //binding
    this.onToggle = this.onToggle.bind(this); //want to pass this up to movie and change watched value
  }
  //methods
  onToggle(event) {
    this.setState({
      watched: !this.state.watched,
      // props.movies.watched: this.state.watched,
    })
    //need to save this state to original movie array...
  }

  render() {
    // var style = {
    //   backgroundColor: this.state.watched ? 'green' : 'red'
    // };

    return(
      <div className="movie-list-entry">
        <span className="movie-list-entry-title">{this.props.movies.title}</span>
        <button
        //style={style}
        style={{backgroundColor: this.state.watched ? 'green' : 'red'}}
        onClick={this.onToggle}>watched</button>
    </div>
    )
  }
}


//functional
// var MovieListEntry = (props) => (//passing in props.video
//   <div className="movie-list-entry">
//     <span className="movie-list-entry-title">{props.movies.title}</span>
//     <button className="movie-watched"></button>
//   </div>
// );
// //functional
// var MovieListEntry = (props) => (//passing in props.video
//   <div className="movie-list-entry">
//     <span className="movie-list-entry-title">{props.movieResults.title}</span>
//     <button className="movie-watched" style={{backgroundColor: props.movieResults.watched ? 'green' : 'red'}} onClick={() => props.watchToggle(props.movieResults.id)}></button>
//   </div>
// );


export default MovieListEntry;