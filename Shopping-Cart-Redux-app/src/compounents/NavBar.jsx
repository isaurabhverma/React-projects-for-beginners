import React, { useState } from "react";
import { useDispatch ,useSelector } from "react-redux";

function CartDropdown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const cart = useSelector((state)=> state.Cart.cartItems)

  // Sample cart items
  const cartItems = [
    ...cart
    
  ];
  console.log(cart);
  

  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="relative">
      {/* Cart Button */}
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center px-4 py-2 text-gray-900 rounded-lg bg-gray-100 hover:bg-gray-200 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        🛒 Cart
        <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
          {cartItems.length}
        </span>
      </button>

      {/* Cart Dropdown */}
      {dropdownOpen && (
        <div className="absolute top-full left-0 w-60 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 p-4">
          <h3 className="text-lg font-semibold mb-2 dark:text-white">Shopping Cart</h3>

          {cartItems.length > 0 ? (
            <ul className="space-y-2">
              {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between items-center p-2 bg-gray-100 rounded dark:bg-gray-700">
                  <div>
                    <p className="text-sm font-medium dark:text-white">{item.name}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      ₹{item.price} x {item.quantity}
                    </p>
                  </div>
                  <span className="text-sm font-bold dark:text-white">₹{item.price * item.quantity}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600 dark:text-gray-400 text-sm text-center">Your cart is empty</p>
          )}

          {/* Total Price */}
          <div className="flex justify-between items-center mt-4 border-t pt-2 dark:border-gray-600">
            <span className="text-sm font-semibold dark:text-white">Total:</span>
            <span className="text-lg font-bold dark:text-white">₹{totalPrice}</span>
          </div>

          {/* Checkout Button */}
          <button className="w-full mt-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default CartDropdown;
