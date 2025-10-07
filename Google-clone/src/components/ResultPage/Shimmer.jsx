import "./Shimmer.css";

function Shimmer() {
  return (
    <div className="shimmer-effect">
      <div className="main-shine shine"></div>

      <div className="lines">
        <p className="shine line line-short"></p>
        <p className="shine line line-medium"></p>
        <p className="shine line line-long"></p>
      </div>

      <div className="main-shine shine"></div>

      <div className="lines">
        <p className="shine line line-short"></p>
        <p className="shine line line-medium"></p>
        <p className="shine line line-long"></p>
      </div>

      <div className="main-shine shine"></div>
      <div className="lines">
        <p className="shine line line-medium"></p>
        <p className="shine line line-long"></p>
        <p className="shine line line-short"></p>
      </div>
    </div>
  );
}

export default Shimmer;
