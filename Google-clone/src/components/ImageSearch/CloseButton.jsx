function CloseButton({ onClose }) {
    return (
      <button className="close-button" onClick={onClose}>
        ✕
      </button>
    );
  }
  
  export default CloseButton;