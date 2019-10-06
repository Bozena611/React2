import React from 'react';
import Email from './Email';
import Password from './Password';
import Button from './Button';
import './App.css';

class App extends React.Component {

  state = {
    
  }
  
  getMail = (mail) => {
      this.setState ({mail})
  }

  getPass = pass => {
    this.setState({pass});
  }

  getData = e => {
    e.preventDefault()
    this.getMail()
    this.getPass()
    
  }

  render() {

    return (
        <div>
          <Email getMail = {this.getMail} />
          <h1>{this.state.mail}</h1>
          <Password getPass = {this.getPass} />
          <h1>{this.state.pass}</h1>
          <Button getData = {this.getData} />
        </div>
      )
  }
}

export default App;
