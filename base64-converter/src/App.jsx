import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Base64Converter from './components/Base64Converter';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <h1>Base64 Converter</h1>
        <p>Encode and decode text to/from Base64 format</p>
        <Base64Converter />
      </div>
    </>
  )
}

export default App
