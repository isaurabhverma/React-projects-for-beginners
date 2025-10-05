const MessageDisplay = ({mood}) => {

    const messages = {
            Happy: "Keep smiling😊 - the world loves your positivity!",
            Sad: "Tough days don't last, tough people do ＞﹏＜.",
            Stressed: "Breathe in, breathe out. You've got this :-).",
            Motivated: "Your hard work will pay off soon 🔥."
    }
    

    return (
        <div className="message-display">
        <h2>Your Mood Messages</h2>
        <p>{messages[mood]}</p>
        </div>
    );
    }

export default MessageDisplay;