import React from 'react';
import Products from './Product'; 
/*import Header from './components/Header'; when I put {Header} not working
import Footer from './components/Footer';*/

function Main() { /*why no class App extends React.Component*/
    
  const productComponents = Products.map(function(product, i){
    return (
        <div className= 'main' key = {i}>
          <h2>{product.product}</h2>
          <img src={product.image}/>
          <h4>Price: € {product.price}</h4>
          <hr/>
        </div>
    )
    })

  return (
    <div>
      {productComponents}
    </div>
  )
}

export default Main




