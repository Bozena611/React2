import React from 'react';
import ChildOne from './Child_1';
import ChildTwo from './Child_2';


class App extends React.Component {
  render() {
    let name = ["Fyodor", "Leo", "Jane", "Agatha", "George"]
    let lastname = ["Dostoyevsky", "Tolstoy", "Austen", "Christie", "Orwell" ]
    
    const loop1 = name.map(function(name, i) {

      return (
        /*<div className='container'>*/
          <div className ='child1' key={i}>
            <div>
              <ChildOne name={name}/>
            </div>
          </div>
        );
  });

    const loop2 = lastname.map(function(lastname, i) {
      return (
          <div className='child2' key={i}>
            <ChildTwo lastname={lastname}/>
          </div>
     );
  })
  

return (
  <div className='container'>
    <div>
      {loop1}
    </div>
     <div>
      {loop2}
    </div>
  </div>
  )
}
}


export default App;
