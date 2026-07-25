import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Form Submitted'); 
  }

  return (
      <div className="App">
        <form onSubmit={(e) => {submitHandler(e)}}>
          <input type="text" placeholder='Enter your name' />
          <button>Submit</button>
        </form>
      </div>
  )
}

export default App
