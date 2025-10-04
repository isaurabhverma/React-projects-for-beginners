import { useState, useRef } from 'react'
import './Paint.css'

function Paint() {
  const [isDrawing, setIsDrawing] = useState(false)
  const [color, setColor] = useState('#000000')
  const [brushSize, setBrushSize] = useState(2)
  const canvasRef = useRef(null)
  const contextRef = useRef(null)

  const startDrawing = (e) => {
    const canvas = canvasRef.current
    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    if (!contextRef.current) {
      const ctx = canvas.getContext('2d')
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'
      contextRef.current = ctx
    }

    contextRef.current.strokeStyle = color
    contextRef.current.lineWidth = brushSize
    contextRef.current.beginPath()
    contextRef.current.moveTo(x, y)
    setIsDrawing(true)
  }

  const draw = (e) => {
    if (!isDrawing) return
    
    const canvas = canvasRef.current
    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    contextRef.current.lineTo(x, y)
    contextRef.current.stroke()
  }

  const stopDrawing = () => {
    setIsDrawing(false)
    if (contextRef.current) {
      contextRef.current.closePath()
    }
  }

  const clearCanvas = () => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }

  const colors = ['#000000', '#808080', '#800000', '#FF0000', '#008000', '#00FF00', '#000080', '#0000FF', '#800080', '#FF00FF', '#008080', '#00FFFF']

  return (
    <div className="paint">
      <div className="paint-toolbar">
        <button className="tool-btn" onClick={clearCanvas}>Clear</button>
        <div className="brush-size">
          <label>Size:</label>
          <input
            type="range"
            min="1"
            max="10"
            value={brushSize}
            onChange={(e) => setBrushSize(e.target.value)}
          />
        </div>
        <div className="color-palette">
          {colors.map((c) => (
            <div
              key={c}
              className={`color-box ${color === c ? 'selected' : ''}`}
              style={{ background: c }}
              onClick={() => setColor(c)}
            />
          ))}
        </div>
      </div>
      <div className="paint-canvas-container">
        <canvas
          ref={canvasRef}
          width={500}
          height={400}
          className="paint-canvas"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
        />
      </div>
    </div>
  )
}

export default Paint
