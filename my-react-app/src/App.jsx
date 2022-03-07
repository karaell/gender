import React, { useState } from 'react'
import './App.css'
import { sendRequest } from './Request'
import {Input, Button, Result} from './Components'

function App() {
  const [resultMessage, setResultMessage] = useState("")

  async function handleSubmit(event) {
    event.preventDefault();
    const userName = event.target[0].value;

    const message = (!userName || userName.length < 2) ? 'Enter correct name' : await sendRequest(userName);
    
    setResultMessage(message);
  }

  return (
    <div className = "wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <Input />
        <Button />
      </form>
      <Result message={resultMessage}/>
    </div>
  )
}

export default App;

