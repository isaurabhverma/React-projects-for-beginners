import React, { useContext } from 'react';
import { ProductState } from '../contexts/pagecontext/PageState';
import './wishlist.css';  // Assuming you will add custom styles here
import Footer from './Footer';
import NavbarRed from './NavbarRed';
import NavbarWhite from './NavbarWhite';

const Wishlist = () => {
  const { wishlist, removeFromWishlist, moveToCart } = useContext(ProductState); // You need to handle wishlist in your context

  if (wishlist.length === 0) {
    return (
        <>
        <NavbarRed></NavbarRed>
        <NavbarWhite></NavbarWhite>
      <div className="wishlist-empty">
        <h2>Your Wishlist is Empty!</h2>
        <p>Browse our products and add them to your wishlist.</p>
      </div>
      <Footer></Footer>
      </>
    );
  }

  return (
    <>
    <NavbarRed></NavbarRed>
    <NavbarWhite></NavbarWhite>
    <div className="wishlist-page">
      <h1>Your Wishlist</h1>
      <div className="wishlist-grid">
        {wishlist.map((product) => (
          <div key={product.id} className="wishlist-item">
            <img src={product.imageUrl} alt={product.name} className="wishlist-image" />
            <div className="wishlist-details">
              <h2>{product.name}</h2>
              <p className="price">₹ {product.price}</p>
              <div className="wishlist-actions">
                <button className="move-to-cart" onClick={() => moveToCart(product)}>
                  Move to Cart
                </button>
                <button className="remove-from-wishlist" onClick={() => removeFromWishlist(product.id)}>
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default Wishlist;
