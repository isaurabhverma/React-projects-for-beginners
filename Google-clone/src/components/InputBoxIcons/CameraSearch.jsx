import "./Icons.css";

function CameraSearch({onClick}) {
  return (
    <button className="camera-search" onClick={onClick}>
      <img
        src="/images/lens.png"
        className="lensIcon"
        alt="Lens"
        title="Search by image"
      />
    </button>
  );
}

export default CameraSearch;
