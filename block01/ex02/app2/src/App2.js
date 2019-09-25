import React from 'react';
import Products from './components/Product'; 
import Header from './components/Header'; /*when I put {Header} not working */
import Footer from './components/Footer';

class App extends React.Component{
  render() {

  const items = ["t-shirts", "hats", "shorts", "shirts", "pants", "shoes"]

  return (
    <div>
      <Header className='nav'>
      </Header>
      <h1 style= {styles.title}> Product categories:</h1>
        {items.map((item, i)=> 
          <h2 key ={i}>
            <ul>
              <li style={styles.li}> {item}</li>
            </ul>
          </h2>)}
        <div>
        {Products.map(product=> (
          <Products 
          title={Products.product}
          image={Products.image}
          price={Products.price}
          />
          ))}
        </div>
        <Footer/>
    </div>
    );
  } 
}   

const styles = {
  title: {
    color: 'green'
  },
  li: {
    color: 'red'
  }  
}
  

export default App;



---------

/*class App extends React.Component{
  render() {
  
   const pagedata = Products.map(function(product, i){
    return (
        <div key = {i}>
          <div>
            <img src = {product.image}/>
            <h2>{product.product}</h2>
            <h4>€ {product.price}</h4>
          </div> 
        </div>
      )
    })

  return (
    <div>
      <Header className='nav'>
      </Header>
      <h1 style= {styles.title}> Product categories:</h1>
        {items.map((item, i)=> 
          <h2 key ={i}>
            <ul>
              <li style={styles.li}> {item}</li>
            </ul>
          </h2>)}
      <Footer/>
    </div>
    );
  }
}
  

const styles = {
  title: {
    color: 'green'
  },
  li: {
    color: 'red'
  }  
}
  