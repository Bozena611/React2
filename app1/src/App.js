import React from 'react'

const CompOne = () => {
  const _renderStuff = stuff => (
    stuff.map((name, i)=>(
      <h1 key = {i}> Hey {name} </h1>
      ))
    )
  const names = [ "Bozena", "Chiffon", "Sonia" ]

  return <div> 
  {
    _renderStuff (names)
  }
    </div>
}

export default CompOne;
//[ "Bozena", "Chiffon", "Sonia" ] 