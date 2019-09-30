import React from 'react';
import Products from './Product'; 


function Bestsellers() { /*why no class App extends React.Component*/
    
    const theBest = Products.map(function(product, i){
        if (product.bestSeller === true){
    return (
        <div className= 'bestsellers' key = {i}>
          <h2>{product.product}</h2>
          <img src={product.image} alt = "Product"/>
          <h4>Price: € {product.price}</h4>
          <hr/>
        </div>
      )
    }
  })

  return (
    <div>
      {theBest}
    </div>
  )
}

export default Bestsellers