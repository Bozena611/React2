import React from 'react';
import ChildOne from './Child_1';
import ChildTwo from './Child_2';


class Main extends React.Component {
  render() {
    let names = ["Fyodor", "Leo", "Jane", "Agatha", "George"]
    let lastnames = ["Dostoyevsky", "Tolstoy", "Austen", "Christie", "Orwell" ]
    
    const loop1 = names.map(function(name, i) {

      return (
        /*<div className='container'>*/
          <div className ='children' key={i}>
              <ChildOne name={name}/>
              <ChildTwo lastname={lastnames[i]}/>
           </div>
        );
  });

    /*const loop2 = lastname.map(function(lastname, i) {
      return (
          <div className='child2' key={i}>
            <ChildTwo lastname={lastname}/>
          </div>
     );
  })*/
  
return (
  <div>
    {loop1}
  </div>
  )
}
}


export default Main;