import { LuMessageSquareWarning } from "react-icons/lu";
import './ResultPage.css'
function FeedbackFooter() {
  return (
    <div className="feedback-footer">
      <div className="feedback-footer-left">
        <div className="feedback-icon-container">
          <LuMessageSquareWarning className="feedback-icon" />
        </div>
        <div className="feedback-text">Did you find these results useful?</div>
      </div>
      <div className="feedback-footer-right">
        <div className="yes-option">Yes</div>
        <div className="no-option">No</div>
      </div>
    </div>
  );
}

export default FeedbackFooter;
