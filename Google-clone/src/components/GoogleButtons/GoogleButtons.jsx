import "./GogleButtons.css";

function GoogleButtons({ insideSuggestions }) {
  return (
    <div
      className="search-buttons"
      style={{
        marginTop: insideSuggestions ? "auto" : "20px",
        position: insideSuggestions ? "absolute" : "static",
        bottom: insideSuggestions ? "15px" : "auto",
        width: insideSuggestions ? "100%" : "auto",
      }}
    >
      <button
        style={{
          backgroundColor: insideSuggestions ? "#3c4043" : "auto",
          fontSize: insideSuggestions ? "14px" : "auto",
          width: insideSuggestions ? "130px" : "auto",
        }}
      >
        Google Search
      </button>
      <a href="https://doodles.google/">
        <button
          style={{
            backgroundColor: insideSuggestions ? "#3c4043" : "auto",
            fontSize: insideSuggestions ? "14px" : "auto",
            width: insideSuggestions ? "150px" : "auto",
          }}
        >
          I'm Feeling Lucky
        </button>
      </a>
    </div>
  );
}

export default GoogleButtons;
