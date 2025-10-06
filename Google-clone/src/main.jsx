import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Create the context
export const AppContext = createContext();

function Main() {
  const [cameraClicked, setCameraClicked] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [showErrorDiv, setShowErrorDiv] = useState(false);

  return (
    <AppContext.Provider
      value={{
        cameraClicked,
        setCameraClicked,
        filteredSuggestions,
        setFilteredSuggestions,
        imageUrl, 
        setImageUrl,
        showErrorDiv,
        setShowErrorDiv
      }}
    >
      <App />
    </AppContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
