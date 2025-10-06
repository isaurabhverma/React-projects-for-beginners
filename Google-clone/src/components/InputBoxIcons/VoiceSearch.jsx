import { useNavigate } from "react-router-dom";
import './Icons.css'
function VoiceSearch() {
  const navigateTo = useNavigate();
  return (
    <button className="voice-search" onClick = {()=>navigateTo('/speak')}>
    <img
      src="/images/mic.png"
      className="micIcon"
      alt="Mic"
      title="Search by voice"
    />
  </button>
  )
}

export default VoiceSearch