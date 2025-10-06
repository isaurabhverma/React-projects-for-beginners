import "./Listening.css";
import { FaMicrophone } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
function Listening() {
    const navigateTo = useNavigate();
    function crossButtonNavigation(){
        navigateTo('/')
    }
  return (
    <div className="main">
        <div className="cross-container">
        <RxCross2 className="cross-icon" onClick={()=> crossButtonNavigation()}/>
        </div>
        <div className="content-box">
            <div className="text-box">
                Listening...
            </div>
            <div className="icon-container">
            <FaMicrophone className="mic-icon"/>
            </div>
        </div>
    </div>
  )
}

export default Listening