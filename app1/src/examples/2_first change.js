

// ----- DIFFERENT FROM BCS!!! WORKING AS WELL----

import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {  // this part is different no render and no component
  return (
    <div className="App">
      <h1>Hello!</h1>
    </div>
  );
}

export default App;

//------------------------------

// FROM BCS

import React from 'react';

class App extends React.Component {
  render() {
    return (  // you alway have to return sth, you can write null but can't be empty
      <div className="App"> /*you can have only one <div> and inside it you can have several elements h1, p, ul, li*/
        <h1>Hello</h1>
        <h2>h2</h2>
      </div>
    );
  } 
}
                    
export default App; // you can have only one 'export default' - exporting only one
					// if you were to have several functions e.g. add(), multiply()
					// you have to do 'export add' 'export multiply' separately


import React from 'react';
class App extends React.Component {
    render() {
    return (
      <div className="App"> 
        <h3>2+2</h3> //without {} it's a string so returnd 2+2
        <h3>{2+2}</h3> // with {} it is JS so returns 4
      </div>
    );
  } 
}
                    
export default App;  

//-------------
import React from 'react';
class App extends React.Component {
    render() {
    var names = ['Antonello', 'George', 'Peter', 'Mike']
    return (
      <div className="App"> 
        <h3>2+2</h3>
        <h3>{2+2}</h3>
        {names.map(name=>{
          return <h1>{name}</h1>
        })}
        // ALSO {names.map(name=> <h1>{name}</h1>)}
      </div>
    );
  } 
}
                    
export default App; 

--------------------------

import React from 'react';
class App extends React.Component {
    render() {
    var names = ['Antonello', 'George', 'Peter', 'Mike']
    return (
      <div className="App"> 
        <h3>2+2</h3>
        <h3>{2+2}</h3>
        {names.map((name, i) => <h1 key={i}>{name}</h1>)}
      </div>
    );
  } 
}
                    
export default App;  

------------SAME THING----------------------

import React from 'react';
class App extends React.Component {
  looper(names){
    return names.map((ele, i)=>{
      return <h1 key={i}>{ele}</h1>
    })
  }
    render() {
    var names = ['Antonello', 'George', 'Peter', 'Mike']
    return (
      <div className="App"> 
        {this.looper(names)}
      </div>
    );
  } 
}
                    
export default App;  

---------SAME THING-------------

import React from 'react';
class App extends React.Component {
      render() {
    var names = ['Antonello', 'George', 'Peter', 'Mike']
    const LOOPER = names.map((ele, i)=>{
      return <h1 key={i}>{ele}</h1>
    })
    return (
      <div className="App"> 
        {LOOPER}
      </div>
    );
  } 
}
                    
export default App;  

--------------SAME THING------------------

import React from 'react';
class App extends React.Component {
      
    render() {
    var names = ['Antonello', 'George', 'Peter', 'Mike']
    const looper = names.map((ele, i)=>{  //also (name, i)
      return <h1 key={i}>{ele}</h1>		  // >{name}<
    })
    return (
      <div className="App"> 
        {looper}
      </div>
    );
  } 
}
                    
export default App; 

----------LAST ONE-------------------

import React from 'react';
class App extends React.Component {
      
    render() {
    var names = ['Antonello', 'George', 'Peter', 'Mike']
    const looper = names.map((ele, i)=>{
      return <h1 className='title'  //for CSS
                key={i}>{ele}
              </h1>
    })
    return (
      <div className="App"> 
        {looper}
      </div>
    );
  } 
}
                    
export default App;  