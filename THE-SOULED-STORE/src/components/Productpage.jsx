import React, { useContext, useState, useEffect } from 'react';
import { ProductState } from '../contexts/pagecontext/PageState';
import NavbarRed from './NavbarRed';
import NavbarWhite from './NavbarWhite';
import Footer from './Footer';
import './productpage.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for react-toastify

const ProductPage = () => {
    const { whichData, data, addToWishlist, moveToCart } = useContext(ProductState); // Destructure to get whichData and data
    const products = data[whichData];  // Access product list

    // Initialize state as an object to hold selected sizes for each product
    const [selectedSizes, setSelectedSizes] = useState({});

    // Automatically select the first size for each product with available sizes when the component mounts
    useEffect(() => {
        const initialSizes = {};
        products.forEach((product) => {
            if (product.sizes && product.sizes.length > 0) {
                initialSizes[product.id] = product.sizes[0]; // Set the first size as default
            }
        });
        setSelectedSizes(initialSizes); // Initialize selectedSizes state
    }, [products]);

    // Function to handle size selection for individual products
    const handleSizeSelect = (productId, size) => {
        setSelectedSizes((prevSizes) => ({
            ...prevSizes,
            [productId]: size, // Set the selected size for the specific product
        }));
    };

    // Function to handle add to cart action with a toast notification
    const handleAddToCart = (product) => {
        const selectedSize = selectedSizes[product.id];
        if (selectedSize) {
            moveToCart(product, selectedSize);
            toast.success(`${product.name} (Size: ${selectedSize}) added to cart!`);
        } else {
            toast.error('Please select a size before adding to cart.');
        }
    };

    // Function to handle add to wishlist action with a toast notification
    const handleAddToWishlist = (product) => {
        addToWishlist(product);
        toast.info(`${product.name} added to wishlist!`);
    };

    return (
        <>
            <NavbarRed />
            <NavbarWhite />
            <div className="product-page">
                <div className="product-grid">
                    {products.map((product) => (
                        <div key={product.id} className="product-card"> {/* Ensure you have a unique key */}
                            <div className="product-gallery">
                                <img src={product.imageUrl} alt={product.name} className="main-image" />
                            </div>

                            <div className="product-details">
                                <h1>{product.name}</h1>
                                <p className="price">₹ {product.price}</p>

                                {/* Size Selection (Only if sizes exist) */}
                                {product.sizes && product.sizes.length > 0 && (
                                    <div className="size-selection">
                                        <p>Please select a size:</p>
                                        <div className="sizes">
                                            {product.sizes.map((size) => (
                                                <button
                                                    key={size}
                                                    className={`size-button ${selectedSizes[product.id] === size ? 'active' : ''}`}
                                                    onClick={() => handleSizeSelect(product.id, size)} // Pass product id and size
                                                >
                                                    {size}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Quantity Selection */}
                                <div className="quantity-selection">
                                    <label htmlFor="quantity">Quantity:</label>
                                    <select id="quantity" name="quantity">
                                        {[...Array(10).keys()].map((qty) => (
                                            <option key={qty + 1} value={qty + 1}>
                                                {qty + 1}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Add to Cart / Wishlist */}
                                <div className="action-buttons">
                                    <button className="add-to-cart" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                                    <button className="add-to-wishlist" onClick={() => handleAddToWishlist(product)}>Add to Wishlist</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Toast Container to display toasts */}
            <ToastContainer 
                position="top-right" 
                autoClose={3000} 
                hideProgressBar={false} 
                closeOnClick 
                pauseOnHover 
                draggable 
                theme="colored"
            />

            <Footer />
        </>
    );
};

export default ProductPage;
