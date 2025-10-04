import { useState, useRef, useEffect } from 'react'
import './Window.css'

function Window({ 
  id, 
  title, 
  children, 
  onClose, 
  onMinimize, 
  onMaximize, 
  onFocus,
  position,
  maximized,
  isActive
}) {
  const [isDragging, setIsDragging] = useState(false)
  const [currentPosition, setCurrentPosition] = useState(position)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const windowRef = useRef(null)

  useEffect(() => {
    setCurrentPosition(position)
  }, [position])

  const handleMouseDown = (e) => {
    if (maximized) return
    
    const rect = windowRef.current.getBoundingClientRect()
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
    setIsDragging(true)
    onFocus(id)
  }

  const handleMouseMove = (e) => {
    if (isDragging && !maximized) {
      setCurrentPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isDragging, dragOffset])

  const style = maximized ? {} : {
    left: `${currentPosition.x}px`,
    top: `${currentPosition.y}px`
  }

  return (
    <div
      ref={windowRef}
      className={`window-frame ${maximized ? 'maximized' : ''}`}
      style={{
        ...style,
        zIndex: isActive ? 100 : 1
      }}
      onMouseDown={() => onFocus(id)}
    >
      <div 
        className={`window-titlebar ${!isActive ? 'inactive' : ''}`}
        onMouseDown={handleMouseDown}
      >
        <div className="window-title">{title}</div>
        <div className="window-controls">
          <button 
            className="window-control-btn"
            onClick={() => onMinimize(id)}
          >
            _
          </button>
          <button 
            className="window-control-btn"
            onClick={() => onMaximize(id)}
          >
            □
          </button>
          <button 
            className="window-control-btn"
            onClick={() => onClose(id)}
          >
            ×
          </button>
        </div>
      </div>
      <div className="window-content">
        {children}
      </div>
    </div>
  )
}

export default Window
