import React from 'react';
import './index.css';
import Header from './components/Header'; /*when I put {Header} not working */
import Main from './components/Main'; 
import Bestsellers from './components/Bestsellers'; 
import Footer from './components/Footer';


class App extends React.Component{
  render() {

  	return (
      <div>
        <Header className='nav'>
        </Header>
        <div>
          <Main/>
        </div>
        <h1 className='bestTitle'>Bestsellers <span>****</span></h1>
        <div className='best'>
    	     <Bestsellers/>
        </div>
        
        <Footer/>
      </div>
    );
  }
}

export default App;