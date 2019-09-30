import React from 'react';
import List from './List';


class Main extends React.Component {
  render() {
    let categories = ["books", "movies", "music", "sports", "art"]
      return (
          <div>
            <List category={categories}/>
          </div>
      )
  }
}

export default Main;
