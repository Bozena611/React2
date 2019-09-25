
import React from 'react';

class App extends React.Component{
  render() {

  const items = ["t-shirts", "hats", "shorts", "shirts", "pants", "shoes"]

  return (
    <div>
      <h1 style= {styles.title}> Product categories:</h1>
        {items.map((item, i)=> 
          <h2 key ={i}>
            <ul>
              <li style={styles.li}> {item}</li>
            </ul>
          </h2>)}
    </div>
    );
  } 
}   

const styles = {
  title: {
    color: 'blue'
  },
  li: {
    color: 'red'
  }
}
  

export default App;
