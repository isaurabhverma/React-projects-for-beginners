import React from 'react'

function ToggleBar() {
  return (
    <div className="toggle-bar">
    <div
      className={!clickedSearch ? "Search-text" : "clicked-toggle"}
      onClick={() => handleSearchText()}
    >
      Search
    </div>
    <div
      className={!clickedText ? "Text-text" : "clicked-toggle"}
      onClick={() => handleText()}
    >
      Text
    </div>
    <div
      className={
        !clickedTranslate ? "Translate-text" : "clicked-toggle"
      }
      onClick={() => handleTranslateText()}
    >
      Translate
    </div>
  </div>
  )
}

export default ToggleBar