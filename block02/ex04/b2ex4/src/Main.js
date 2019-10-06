import React from 'react';
import List from './List';
import './index.css';


function Main () {
  
    let categories = ["books", "movies", "music", "sports", "art"]
      return (
          <div className='test'>
            <List category={categories}/>
          </div>
      )
}

export default Main;