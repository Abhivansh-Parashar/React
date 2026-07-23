import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [a, setA] = useState(0);

  const increment = () => {
    setA(a+1);
  }
  const decrement = () => {
    setA(a-1);
  }

  const reset = () => {
    setA(0);
  }
  return (
    <>
      <div className="value">
        <h1>{a}</h1>
      </div>
      <div className='buttons'>
        <button className="btn" onClick={increment}>Increment</button>
        <button className="btn" onClick={decrement}>Decrement</button>
        <button className="btn" onClick={reset}>Reset</button>
      </div>
    </>
  )
}

export default App