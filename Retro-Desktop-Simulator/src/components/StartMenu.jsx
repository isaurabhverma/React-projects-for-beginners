import './StartMenu.css'

function StartMenu({ onOpenWindow, onClose }) {
  const menuItems = [
    { name: 'Calculator', icon: '🖩', action: () => onOpenWindow('calculator') },
    { name: 'Notepad', icon: '📝', action: () => onOpenWindow('notepad') },
    { name: 'Paint', icon: '🎨', action: () => onOpenWindow('paint') },
    { divider: true },
    { name: 'Shut Down...', icon: '⏻', action: () => alert('Classic Windows 95 shutdown!') }
  ]

  const handleClick = (item) => {
    if (item.action) {
      item.action()
      onClose()
    }
  }

  return (
    <div className="start-menu" onClick={(e) => e.stopPropagation()}>
      <div className="start-menu-sidebar">
        <div className="sidebar-text">Windows 95</div>
      </div>
      <div className="start-menu-items">
        {menuItems.map((item, index) => (
          item.divider ? (
            <div key={index} className="menu-divider" />
          ) : (
            <div
              key={index}
              className="menu-item"
              onClick={() => handleClick(item)}
            >
              <span className="menu-icon">{item.icon}</span>
              <span className="menu-text">{item.name}</span>
            </div>
          )
        ))}
      </div>
    </div>
  )
}

export default StartMenu
