import { useDispatch, useSelector } from 'react-redux'
import { selectCartItems, selectCartCount, selectCartTotal, incrementQuantity, decrementQuantity, removeFromCart, clearCart } from '../store/cartSlice'
import { Link } from 'react-router-dom'

export default function Cart() {
  const items = useSelector(selectCartItems)
  const count = useSelector(selectCartCount)
  const total = useSelector(selectCartTotal)
  const dispatch = useDispatch()

  const list = Object.values(items)

  return (
    <div className="container">
      <h2>Your Cart</h2>
      <div className="cart-summary">
        <div><strong>Total items:</strong> {count}</div>
        <div><strong>Total cost:</strong> ${total.toFixed(2)}</div>
      </div>

      {list.length === 0 ? (
        <p>Your cart is empty. <Link to="/products">Continue shopping</Link>.</p>
      ) : (
        <div className="cart-list">
          {list.map(({ product, quantity }) => (
            <div key={product.id} className="cart-row">
              <img src={product.image} alt={product.name} className="thumb small" />
              <div className="cart-details">
                <div className="name">{product.name}</div>
                <div className="unit-price">${product.price.toFixed(2)}</div>
              </div>
              <div className="qty-controls">
                <button className="btn" onClick={() => dispatch(decrementQuantity(product.id))}>-</button>
                <span className="qty">{quantity}</span>
                <button className="btn" onClick={() => dispatch(incrementQuantity(product.id))}>+</button>
              </div>
              <button className="btn danger" onClick={() => dispatch(removeFromCart(product.id))}>Delete</button>
            </div>
          ))}
        </div>
      )}

      <div className="cart-actions">
        <Link to="/products" className="btn">Continue Shopping</Link>
        <button className="btn outline" onClick={() => alert('Checkout coming soon!')}>Checkout</button>
        {list.length > 0 && (
          <button className="btn danger" onClick={() => dispatch(clearCart())}>Clear Cart</button>
        )}
      </div>
    </div>
  )
}


