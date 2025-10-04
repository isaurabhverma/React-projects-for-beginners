import { useState } from 'react'
import './Desktop.css'
import StartMenu from './StartMenu'

function Desktop({ onOpenWindow }) {
  const [showStartMenu, setShowStartMenu] = useState(false)

  const desktopIcons = [
    { name: 'My Computer', icon: '💻', action: null },
    { name: 'Recycle Bin', icon: '🗑️', action: null },
    { name: 'Calculator', icon: '🖩', action: () => onOpenWindow('calculator') },
    { name: 'Notepad', icon: '📝', action: () => onOpenWindow('notepad') },
    { name: 'Paint', icon: '🎨', action: () => onOpenWindow('paint') }
  ]

  const handleIconDoubleClick = (icon) => {
    if (icon.action) {
      icon.action()
    }
  }

  return (
    <div className="desktop" onClick={() => setShowStartMenu(false)}>
      <div className="desktop-icons">
        {desktopIcons.map((icon, index) => (
          <div
            key={index}
            className="desktop-icon"
            onDoubleClick={() => handleIconDoubleClick(icon)}
          >
            <div className="icon-image">{icon.icon}</div>
            <div className="icon-label">{icon.name}</div>
          </div>
        ))}
      </div>

      {showStartMenu && (
        <StartMenu 
          onOpenWindow={onOpenWindow}
          onClose={() => setShowStartMenu(false)}
        />
      )}
    </div>
  )
}

export default Desktop
