import React from 'react';
import './App.css';

class App extends React.Component {
    state = {
      text: "",
      done: false,
      noText: "no text provided!"
    }

handleChange = e => {
  this.setState({[e.target.name]:e.target.value})
}
handleSubmit = e=> {
  e.preventDefault();
    this.setState({done:true})
  }
  render() {
    let {text, done} = this.state;
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <input 
            onChange = {this.handleChange}
            type="text"
            name="text" 
            placeholder="Write something" 
            value={this.state.text}/>
          <button onSubmit={this.handleSubmit}>Submit</button>
        </form>
        {done ?<h1>{this.state.text}</h1> : <h1>{this.state.noText}</h1>}
      </div>
    )

  }
}


export default App;
