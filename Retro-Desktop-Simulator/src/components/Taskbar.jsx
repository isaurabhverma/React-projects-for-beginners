import { useState, useEffect } from 'react'
import './Taskbar.css'

function Taskbar({ windows, onWindowClick, activeWindow }) {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (date) => {
    const hours = date.getHours()
    const minutes = date.getMinutes().toString().padStart(2, '0')
    const ampm = hours >= 12 ? 'PM' : 'AM'
    const displayHours = hours % 12 || 12
    return `${displayHours}:${minutes} ${ampm}`
  }

  return (
    <div className="taskbar">
      <button className="start-button">
        <span className="start-icon">⊞</span>
        <span>Start</span>
      </button>
      
      <div className="taskbar-items">
        {windows.filter(w => !w.minimized).map(window => (
          <button
            key={window.id}
            className={`taskbar-item ${activeWindow === window.id ? 'active' : ''}`}
            onClick={() => onWindowClick(window.id)}
          >
            {window.app}
          </button>
        ))}
      </div>

      <div className="system-tray">
        <div className="tray-icon">🔊</div>
        <div className="clock">{formatTime(time)}</div>
      </div>
    </div>
  )
}

export default Taskbar
