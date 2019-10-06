import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [text, setText] = useState("no text provided!");
  
  const handleTextChange = (e) => setText(e.target.value)
  
  return (
    <div>
      <form className='form' onSubmit={event => {
        event.preventDefault();
              alert (text);
        }}>
        <div>
          <input 
            onChange = {handleTextChange}
            type="text"          
            placeholder="Write something"/> 
          <button>Submit</button>
           <div>
              <h1>{text}</h1>
           </div>
        </div>
      </form>
    </div>
  );
}

export default App;
