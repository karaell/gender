import React, { useState } from 'react'
import './App.css'
import { sendRequest } from './Request'
import {Input, Button, Result} from './Components'

function App() {
  const [resultMessage, setResultMessage] = useState("")

  async function handleSubmit(event) {
    event.preventDefault();
    const userName = event.target[0].value;

    let message;
    if (!userName || userName.length < 2) {
      message = 'Enter correct name'
    } else {
      message = await sendRequest(userName);
    }

    // const message = await sendRequest(userName); 
    setResultMessage(message);
  }

  return (
    <div className = "wrapper">
      <form className='form' onSubmit={handleSubmit}>
        <Input />
        <Button />
      </form>
      <Result message={resultMessage}/>
    </div>
  )
}

export default App;

