import React from 'react';
import Products from './Product'; 

/*import Header from './components/Header'; when I put {Header} not working
import Footer from './components/Footer';*/

function Main() { /*why no class App extends React.Component*/
    let sale;
  const productComponents = Products.map(function(product, i){
    
    if (product.onSale === true) {
      sale = "ON SALE"
    } else {
      sale = null;
    }
      return (
        <div className= 'main' key = {i}>
          <div>
            <h2><span className="sale">{sale}</span> {product.product}</h2>
            <img src={product.image} alt="Product"/>
            <h4>Price: € {product.price}</h4>
            <hr/>
          </div>
        </div>
      )
      })
     
       
  return (
    <div>
      {productComponents}
    </div>
  )
}


export default Main;




