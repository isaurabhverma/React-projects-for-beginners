import { useState } from 'react'
import './Calculator.css'

function Calculator() {
  const [display, setDisplay] = useState('0')
  const [previousValue, setPreviousValue] = useState(null)
  const [operation, setOperation] = useState(null)
  const [newNumber, setNewNumber] = useState(true)

  const handleNumber = (num) => {
    if (newNumber) {
      setDisplay(num)
      setNewNumber(false)
    } else {
      setDisplay(display === '0' ? num : display + num)
    }
  }

  const handleOperation = (op) => {
    const current = parseFloat(display)
    
    if (previousValue === null) {
      setPreviousValue(current)
    } else if (operation) {
      const result = calculate(previousValue, current, operation)
      setDisplay(String(result))
      setPreviousValue(result)
    }
    
    setOperation(op)
    setNewNumber(true)
  }

  const calculate = (a, b, op) => {
    switch (op) {
      case '+': return a + b
      case '-': return a - b
      case '*': return a * b
      case '/': return b !== 0 ? a / b : 0
      default: return b
    }
  }

  const handleEquals = () => {
    if (operation && previousValue !== null) {
      const current = parseFloat(display)
      const result = calculate(previousValue, current, operation)
      setDisplay(String(result))
      setPreviousValue(null)
      setOperation(null)
      setNewNumber(true)
    }
  }

  const handleClear = () => {
    setDisplay('0')
    setPreviousValue(null)
    setOperation(null)
    setNewNumber(true)
  }

  return (
    <div className="calculator">
      <div className="calc-display">{display}</div>
      <div className="calc-buttons">
        <button onClick={handleClear} className="calc-btn">C</button>
        <button onClick={() => handleOperation('/')} className="calc-btn">/</button>
        <button onClick={() => handleOperation('*')} className="calc-btn">*</button>
        <button onClick={() => handleOperation('-')} className="calc-btn">-</button>
        
        <button onClick={() => handleNumber('7')} className="calc-btn">7</button>
        <button onClick={() => handleNumber('8')} className="calc-btn">8</button>
        <button onClick={() => handleNumber('9')} className="calc-btn">9</button>
        <button onClick={() => handleOperation('+')} className="calc-btn tall">+</button>
        
        <button onClick={() => handleNumber('4')} className="calc-btn">4</button>
        <button onClick={() => handleNumber('5')} className="calc-btn">5</button>
        <button onClick={() => handleNumber('6')} className="calc-btn">6</button>
        
        <button onClick={() => handleNumber('1')} className="calc-btn">1</button>
        <button onClick={() => handleNumber('2')} className="calc-btn">2</button>
        <button onClick={() => handleNumber('3')} className="calc-btn">3</button>
        <button onClick={handleEquals} className="calc-btn tall">=</button>
        
        <button onClick={() => handleNumber('0')} className="calc-btn wide">0</button>
        <button onClick={() => handleNumber('.')} className="calc-btn">.</button>
      </div>
    </div>
  )
}

export default Calculator
