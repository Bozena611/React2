import React from 'react';
import Child from './ChildOfApp';


class App extends React.Component {
  render() {
    let name = "Bozena"
    return (
        <div className='Hello'>
          <Child name={name}/>
        </div>
      );
  }

}

export default App;
