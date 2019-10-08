import React, { useState } from 'react';
import Email from './Email';
import Password from './Password';
import Button from './Button';
import './App.css';

const App = () => {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleEmailChange = e => setEmail(e.target.value)
  const handlePassChange = e => setPass(e.target.value)

  {/*getMail = mail => {
      console.log ('mail data: ${data}')
  }

  getPass = pass => {
    console.log ('pass data: ${pass}')
  }*/}

const handleSubmit = event => {
    alert(`Email: ${email} and Password: ${pass}`);
  };

  return (

    <div>
      <Email handleEmailChange= {handleEmailChange}/>
      <Password handlePassChange={handlePassChange}/>
      {/*<Password {handlePassChange}/>*/}
      <Button handleSubmit={handleSubmit}/>
    </div>
    );
}





export default App;
