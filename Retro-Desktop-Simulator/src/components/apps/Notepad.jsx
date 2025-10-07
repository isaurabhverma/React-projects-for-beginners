import { useState } from 'react'
import './Notepad.css'

function Notepad() {
  const [text, setText] = useState('Welcome to Retro Notepad!\n\nStart typing your notes here...')

  return (
    <div className="notepad">
      <div className="notepad-menu">
        <button className="menu-btn">File</button>
        <button className="menu-btn">Edit</button>
        <button className="menu-btn">Search</button>
        <button className="menu-btn">Help</button>
      </div>
      <textarea
        className="notepad-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        spellCheck={false}
      />
    </div>
  )
}

export default Notepad
