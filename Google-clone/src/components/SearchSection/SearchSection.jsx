import { AppContext } from "../../main.jsx";
import { useState, useEffect, useContext, useRef } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaArrowTrendUp } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { mockData } from "./mockData.js";
import "./SearchSection.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ImageSearch from "../ImageSearch/ImageSearch";
import GoogleButtons from "../GoogleButtons/GoogleButtons";
import LanguageOptions from "../LanguageOptions/LanguageOptions.jsx";
import VoiceSearch from "../InputBoxIcons/VoiceSearch.jsx";
import CameraSearch from "../InputBoxIcons/CameraSearch.jsx";

const SearchSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionDiv = useRef(null);
  const { cameraClicked, setCameraClicked } = useContext(AppContext);
  const [filteredSuggestions, setFilteredSuggestions] = useState(mockData);

  // removing suggestionDiv on clicking on body
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        suggestionDiv.current &&
        !suggestionDiv.current.contains(event.target) &&
        event.target.nodeName !== "INPUT"
      ) {
        setShowSuggestions(false);
        setFilteredSuggestions([]);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  //

  useEffect(() => {
    if (searchQuery) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(
              searchQuery
            )}`
          );
          let result = await response.json();
          const suggestions = result.map((item, index) => ({
            id: index + 1,
            name: item.show.name,
          }));
          result.length > 1
            ? setFilteredSuggestions(suggestions)
            : setFilteredSuggestions([]);
        } catch (error) {
          console.error("Error fetching data:", error.message);
        }
      };
      fetchData();
    } else {
      setFilteredSuggestions(mockData);
    }
  }, [searchQuery]);

  function crossButtonHandler() {
    setSearchQuery("");
    setFilteredSuggestions(mockData);
  }

  return (
    <>
      <Header />
      <div className="search-section">
        <img src="/images/logo.png" alt="Google" className="google-logo" />
        {cameraClicked ? (
          <ImageSearch />
        ) : (
          <>
            <div className="search-container">
              <div
                className={`search-box ${
                  showSuggestions ? "suggestion-div" : ""
                }`}
              >
                <IoIosSearch className="searchIcon" />
                <input
                  type="text"
                  value={searchQuery}
                  title="Search"
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onClick={() => {
                    setShowSuggestions(true);
                    if (!searchQuery) {
                      setFilteredSuggestions(mockData);
                    }
                  }}
                />
                {searchQuery ? (
                  <div
                    onClick={() => crossButtonHandler()}
                    className="cross-btn-container"
                  >
                    <RxCross2 className="cross-icon-search" />
                    <div className="bar">|</div>
                  </div>
                ) : null}
                <VoiceSearch />
                <CameraSearch
                  onClick={() => {
                    setCameraClicked(true);
                    setFilteredSuggestions([]); // so that mock suggestions won't appear on clicking cross
                  }}
                />
              </div>

              {showSuggestions && filteredSuggestions.length > 0 && (
                <div className="horizontal-line"></div>
              )}

              {showSuggestions && filteredSuggestions.length > 0 && (
                <div
                  className="suggestions"
                  ref={suggestionDiv}
                  style={{
                    height: `${
                      filteredSuggestions.length >= 9
                        ? 50 + filteredSuggestions.length * 40
                        : 60 + filteredSuggestions.length * 50
                    }px`,
                  }}
                >
                  {filteredSuggestions.map((item) => (
                    <div key={item.id} className="suggestion-item">
                      <div>
                        {!searchQuery || filteredSuggestions.length === 0 ? (
                          <FaArrowTrendUp className="trendIcon" />
                        ) : (
                          <IoIosSearch className="item-search-icon" />
                        )}
                      </div>
                      {item.name}
                    </div>
                  ))}
                  {filteredSuggestions.length > 0 ? (
                    <GoogleButtons insideSuggestions={true} />
                  ) : (
                    <GoogleButtons />
                  )}
                </div>
              )}
              {(!showSuggestions || filteredSuggestions.length === 0) && (
                <GoogleButtons insideSuggestions={false} />
              )}
            </div>

            {filteredSuggestions.length === 0 ||
            filteredSuggestions.length > 6? (
              <LanguageOptions />
            ) : null}
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default SearchSection;
