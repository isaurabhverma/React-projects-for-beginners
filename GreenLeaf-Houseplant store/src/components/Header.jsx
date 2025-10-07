import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCartCount } from '../store/cartSlice'

export default function Header() {
  const cartCount = useSelector(selectCartCount)
  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="brand">GreenNest</Link>
        <nav className="nav">
          <NavLink to="/products" className="nav-link">Products</NavLink>
          <NavLink to="/cart" className="nav-link cart-link">
            <span role="img" aria-label="cart">🛒</span>
            <span className="cart-badge">{cartCount}</span>
          </NavLink>
        </nav>
      </div>
    </header>
  )
}


