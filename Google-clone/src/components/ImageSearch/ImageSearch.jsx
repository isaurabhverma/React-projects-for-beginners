import { useState, useRef, useContext, useEffect } from "react";
import DropZone from "./DropZone";
import SearchInput from "./SearchInput";
import CloseButton from "./CloseButton";
import { AppContext } from '../../main.jsx';
import "./ImageSearch.css";


function ImageSearch() {
  const [dragActive, setDragActive] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const {imageUrl, setImageUrl, setCameraClicked, setShowErrorDiv}=  useContext(AppContext);
  const inputRef = useRef(null);
  const uploadDiv = useRef(null); 

useEffect(()=>{
  console.log('imageURl is => ', imageUrl);
}, [imageUrl])

// removing imageDragDiv on clicking on body
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        uploadDiv.current &&
        !uploadDiv.current.contains(event.target)&&
        event.target.nodeName !== "IMG"
      ) {
        setCameraClicked(false);
        setShowErrorDiv(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  //

  
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => setImageUrl(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => setImageUrl(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleClose = () => {
    setSelectedImage(null);
    setImageUrl("");
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    setCameraClicked(false);
  };

  return (
    <div className="image-search-container" ref={uploadDiv}>
      <CloseButton onClose={handleClose} />
      <h1>Search any image with Google Lens</h1>

      <div className="search-box-image">
        <DropZone
          dragActive={dragActive}
          handleDrag={handleDrag}
          handleDrop={handleDrop}
          handleFileChange={handleFileChange}
          selectedImage={selectedImage}
          inputRef={inputRef}
        />

        <div className="divider">OR</div>

        <SearchInput />
      </div>
    </div>
  );
}

export default ImageSearch;
