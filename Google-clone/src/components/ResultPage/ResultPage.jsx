import { AppContext } from "../../main.jsx";
import { useContext, useState, useEffect, useRef } from "react";
import ResultPageHeader from "./ResultPageHeader.jsx";
import FeedbackFooter from "./FeedbackFooter.jsx";
import FindImageSource from "./FindImageSource.jsx";
import ProductGrid from "./ProductGrid.jsx";
import Cropper from "react-easy-crop";
import Shimmer from "./Shimmer.jsx";
import "./ResultPage.css";
import "./mockResults.js";


function ResultPage() {
  const { imageUrl, setCameraClicked, setImageUrl } = useContext(AppContext);
  const [clickedSearch, setClickedSearch] = useState(true);
  const [clickedText, setClickedText] = useState(false);
  const [clickedTranslate, setClickedTranslate] = useState(false);
  const [loading, setLoading] = useState(true);

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [cropSize, setCropSize] = useState({ width: 100, height: 100 });
  const [showCropper, setShowCropper] = useState(false);

  const containerRef = useRef(null);

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    console.log("Cropped Area:", croppedArea);
    console.log("Cropped Area Pixels:", croppedAreaPixels);
  };

  const handleResize = (e, corner) => {
    e.preventDefault();
    const containerRect = containerRef.current.getBoundingClientRect();

    setCropSize((prev) => {
      const newSize = { ...prev };

      if (corner === "top-left") {
        newSize.width = Math.max(
          100,
          newSize.width - (e.clientX - containerRect.left)
        );
        newSize.height = Math.max(
          100,
          newSize.height - (e.clientY - containerRect.top)
        );
      } else if (corner === "top-right") {
        newSize.width = Math.max(
          100,
          e.clientX - containerRect.left - prev.width
        );
        newSize.height = Math.max(
          100,
          newSize.height - (e.clientY - containerRect.top)
        );
      } else if (corner === "bottom-left") {
        newSize.width = Math.max(
          100,
          newSize.width - (e.clientX - containerRect.left)
        );
        newSize.height = Math.max(
          100,
          e.clientY - containerRect.top - prev.height
        );
      } else if (corner === "bottom-right") {
        newSize.width = Math.max(100, e.clientX - containerRect.left);
        newSize.height = Math.max(100, e.clientY - containerRect.top);
      }

      return newSize;
    });
  };

  const startResize = (e, corner) => {
    e.preventDefault();
    const onMouseMove = (moveEvent) => handleResize(moveEvent, corner);
    const onMouseUp = () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
        setShowCropper(true);
      }, 1500);
      return () => clearTimeout(timer);
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setShowCropper(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, [clickedSearch, clickedText, clickedTranslate]);

  useEffect(() => {
    setCameraClicked(false);
    const savedImageUrl = localStorage.getItem("imageUrl");
    if (savedImageUrl && !imageUrl) {
      setImageUrl(savedImageUrl);
    }
  }, []);

  useEffect(() => {
    if (imageUrl) {
      localStorage.setItem("imageUrl", imageUrl);
    }
  }, [imageUrl]);

  function handleSearchText() {
    setLoading(true);
    setClickedSearch(true);
    setClickedText(false);
    setClickedTranslate(false);
  }

  function handleText() {
    setLoading(true);
    setClickedSearch(false);
    setClickedText(true);
    setClickedTranslate(false);
  }

  function handleTranslateText() {
    setLoading(true);
    setClickedSearch(false);
    setClickedText(false);
    setClickedTranslate(true);
  }

  // return (
  //   <div className="search-results-main">
  //     <ResultPageHeader />
  //     <div className="left-and-right-container">
  //       <div className="left-side-container">
  //         <FindImageSource />
  //         <div className="reference-image-container">
  //           <img src={imageUrl} className="reference-image"></img>
  //         </div>

  //         <div className="toggle-bar">
  //           <div
  //             className={!clickedSearch ? "Search-text" : "clicked-toggle"}
  //             onClick={() => handleSearchText()}
  //           >
  //             Search
  //           </div>
  //           <div
  //             className={!clickedText ? "Text-text" : "clicked-toggle"}
  //             onClick={() => handleText()}
  //           >
  //             Text
  //           </div>
  //           <div
  //             className={
  //               !clickedTranslate ? "Translate-text" : "clicked-toggle"
  //             }
  //             onClick={() => handleTranslateText()}
  //           >
  //             Translate
  //           </div>
  //         </div>
  //       </div>
  //       <div className="results-container">
  //         {loading ? (
  //           <ClockLoader color="#1f0ee8" size={60} className="loader" />
  //         ) : (
  //           <ProductGrid />
  //         )}
  //         <FeedbackFooter />
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="search-results-main">
      <ResultPageHeader />
      <div className="left-and-right-container">
        <div className="left-side-container">
          <FindImageSource />
          <div className="reference-image-container" ref={containerRef}>
            {showCropper ? (
              <div className="cropper-wrapper">
                <Cropper
                  image={imageUrl}
                  crop={crop}
                  zoom={zoom}
                  cropSize={cropSize}
                  aspect={cropSize.width / cropSize.height}
                  onCropChange={setCrop}
                  onZoomChange={setZoom}
                  onCropComplete={onCropComplete}
                />
                <div
                  className="resize-handle top-left-handle"
                  onMouseDown={(e) => startResize(e, "top-left")}
                ></div>
                <div
                  className="resize-handle top-right-handle"
                  onMouseDown={(e) => startResize(e, "top-right")}
                ></div>
                <div
                  className="resize-handle bottom-left-handle"
                  onMouseDown={(e) => startResize(e, "bottom-left")}
                ></div>
                <div
                  className="resize-handle bottom-right-handle"
                  onMouseDown={(e) => startResize(e, "bottom-right")}
                ></div>
              </div>
            ) : (
              <img
                src={imageUrl}
                className="reference-image"
                onClick={() => setShowCropper(true)}
              />
            )}
          </div>

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
        </div>
        <div className="results-container">
          {loading ? <Shimmer /> : <ProductGrid />}
          <FeedbackFooter />
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
