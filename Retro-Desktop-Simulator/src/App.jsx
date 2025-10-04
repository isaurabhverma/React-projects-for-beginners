import { useState } from 'react'
import './App.css'
import Desktop from './components/Desktop'
import Taskbar from './components/Taskbar'
import Window from './components/Window'
import Calculator from './components/apps/Calculator'
import Notepad from './components/apps/Notepad'
import Paint from './components/apps/Paint'

function App() {
  const [windows, setWindows] = useState([])
  const [activeWindow, setActiveWindow] = useState(null)

  const openWindow = (app) => {
    const newWindow = {
      id: Date.now(),
      app,
      minimized: false,
      maximized: false,
      position: { x: Math.random() * 200 + 100, y: Math.random() * 100 + 50 }
    }
    setWindows([...windows, newWindow])
    setActiveWindow(newWindow.id)
  }

  const closeWindow = (id) => {
    setWindows(windows.filter(w => w.id !== id))
    if (activeWindow === id) {
      setActiveWindow(null)
    }
  }

  const minimizeWindow = (id) => {
    setWindows(windows.map(w => 
      w.id === id ? { ...w, minimized: true } : w
    ))
  }

  const restoreWindow = (id) => {
    setWindows(windows.map(w => 
      w.id === id ? { ...w, minimized: false } : w
    ))
    setActiveWindow(id)
  }

  const maximizeWindow = (id) => {
    setWindows(windows.map(w => 
      w.id === id ? { ...w, maximized: !w.maximized } : w
    ))
  }

  const bringToFront = (id) => {
    setActiveWindow(id)
  }

  const apps = {
    calculator: { title: 'Calculator', component: Calculator },
    notepad: { title: 'Notepad', component: Notepad },
    paint: { title: 'Paint', component: Paint }
  }

  return (
    <div className="retro-os">
      <Desktop onOpenWindow={openWindow} />
      
      {windows.map(window => {
        const AppComponent = apps[window.app].component
        return !window.minimized && (
          <Window
            key={window.id}
            id={window.id}
            title={apps[window.app].title}
            onClose={closeWindow}
            onMinimize={minimizeWindow}
            onMaximize={maximizeWindow}
            onFocus={bringToFront}
            position={window.position}
            maximized={window.maximized}
            isActive={activeWindow === window.id}
          >
            <AppComponent />
          </Window>
        )
      })}

      <Taskbar 
        windows={windows} 
        onWindowClick={restoreWindow}
        activeWindow={activeWindow}
      />
    </div>
  )
}

export default App
