import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      id: null,
      watched: false,
    }
    //method bindings
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  //methods
  handleChange(event) {
    //set the title state when change occurs
    this.setState({
      [event.target.name] : event.target.value //name="title" in our input matches state.title naming convention above!!!
    })
  }

  handleSubmit(event) {
    //prevent page from refreshing every time
    event.preventDefault();

    var movie = {
      title: this.state.title,
      id: Date.now(), //creates a unique id based on when this movie was created
      watched: false, //new movies automatically set to not seen
    }
    //need to pass this back to parent..
    //addMovie={this.addMovie}
    this.props.addMovie(movie);
    //reset our title state
    this.setState({
      title: '',
      id: null
    })
  }



  render() {
    return (
      // handles a submit if enter is pressed on keyboard
      <form onSubmit={this.handleSubmit}>
        <label> Add Movie...
          <input name="title" type="text" value={this.state.title} onChange={this.handleChange}></input>
        </label>
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    )
  }
}







// //functional
// var AddMovie = (props) => (
//   <div className="movie-input">
//     <input className="form-control" type="text" onChange={(event) => props.handleInput(event.target.value)}/>
//     <button className="btn" onClick={props.handleMovieSubmit}>Submit</button>
//   </div>
// );


export default AddMovie;