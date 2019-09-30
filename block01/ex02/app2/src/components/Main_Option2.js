

function Main() { /*why no class App extends React.Component*/
  
  
  const productComponents = Products.map(function(product, i){
    if (product.onSale) {
      return (
        <div>
          <Sale />
          <Product />
        </div>
        )
      } else {
       return (
        <div>
        <Product />
        <div>
        )
    }
  }



    /*return (
        <div className= 'main' key = {i}>
          <h2>{product.product}</h2>
          <h3>{product.onSale}</h3>
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
}*/

export default Main