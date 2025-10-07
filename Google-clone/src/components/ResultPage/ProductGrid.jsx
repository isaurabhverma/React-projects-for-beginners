import { mockResults } from "./mockResults.js";
import "./ResultPage.css";
function ProductGrid() {
  return (
    <div className="product-grid">
      {mockResults.map((item) => (
       <div className="product-card" key={item.id} title={item.price !== '0' && "visti page"}>
        
        {item.price !== '0' ?
          <div className="price-tag">
            <span className="product-price">₹{item.price}</span>
          </div>
: null}
          <a className="visit-page" href={item.a_link} target="_blank">
          <img src={item.image_url} alt={item.title} className="prod-img"></img>
          
          <div className="product-info">
            <h2 className="product-title">{item.title}</h2>

            <p className="product-description">{item.description}</p>
            
          </div>
          </a>
        </div> 
      ))}
    </div>
  );
}

export default ProductGrid;
