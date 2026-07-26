import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [title, setTitle] = useState('');

    const submitHandler = (e) => {
    e.preventDefault();
    console.log('Form Submitted by ', title); 
  }

  return (
      <div className="App">
        <form onSubmit={(e) => {submitHandler(e)}}>
          <input 
            type="text" 
            placeholder='Enter your name' 
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          />
          <button onClick={submitHandler}>Submit</button>
        </form>
      </div>
  )
}

export default App
