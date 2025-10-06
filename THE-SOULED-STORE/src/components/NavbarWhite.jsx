import React, { useState } from 'react';
import './navbarWhite.css';
import { ProductState } from '../contexts/pagecontext/PageState';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

function NavbarWhite() {
  const [dropdown, setDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // State to track if the mobile menu is open

  const handleMouseEnter = (menu) => {
    setDropdown(menu);
  };

  const handleMouseLeave = () => {
    setDropdown(null);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the mobile menu open/close
  };

  return (
    <div className="navbar">
      <a href="/"><img alt="souledstorelogo" className='img' src='https://www.thesouledstore.com/static/img/newlogo.8dcc6cc.png'/></a>
      
      {/* Hamburger Menu for Mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>} {/* Toggle between menu (bars) and close (times) icon */}
      </div>

      {/* Menu List */}
      <ul className={`navbar-list ${menuOpen ? 'mobile-menu-active' : ''}`}>
        <li className="navbar-item" onMouseEnter={() => handleMouseEnter('TOPWEAR')} onMouseLeave={handleMouseLeave}>
          TOPWEAR ▼ <span className="new-tag">NEW</span>
          {dropdown === 'TOPWEAR' && <DropdownMenu items={['TShirts', 'Shirts', 'Hoodies']} />}
        </li>
        <li className="navbar-item" onMouseEnter={() => handleMouseEnter('BOTTOMWEAR')} onMouseLeave={handleMouseLeave}>
          BOTTOMWEAR ▼
          {dropdown === 'BOTTOMWEAR' && <DropdownMenu items={['Jeans', 'Shorts', 'Trousers']} />}
        </li>
        <li className="navbar-item" onMouseEnter={() => handleMouseEnter('BESTSELLERS')} onMouseLeave={handleMouseLeave}>
          BESTSELLERS <span className="new-tag">NEW</span> ▼
          {dropdown === 'BESTSELLERS' && <DropdownMenu items={['BestSeller #1', 'BestSeller #2']} />}
        </li>
        <li className="navbar-item" onMouseEnter={() => handleMouseEnter('SNEAKERS')} onMouseLeave={handleMouseLeave}>
          SNEAKERS <span className="new-tag">NEW</span>
          {dropdown === 'SNEAKERS' && <DropdownMenu items={['Marvel Edition']} />}
        </li>
        <li className="navbar-item" onMouseEnter={() => handleMouseEnter('ACCESSORIES')} onMouseLeave={handleMouseLeave}>
          ACCESSORIES ▼
          {dropdown === 'ACCESSORIES' && <DropdownMenu items={['Perfumes', 'Bags', 'Comic Books']} />}
        </li>

        {/* Icons added in the mobile menu */}
        <li className="navbar-item">
          <Link to="/profile"><i className="fa fa-user"></i></Link>
        </li>
        <li className="navbar-item">
          <Link to="/wishlist"><i className="fa fa-heart"></i></Link>
        </li>
        <li className="navbar-item">
          <Link to="/Cart"><i className="fa fa-shopping-bag"></i></Link>
        </li>
      </ul>
    </div>
  );
}

function DropdownMenu({ items }) {
  const { changeData } = useContext(ProductState); // Destructure to get changeData

  return (
    <ul className="dropdown-menu">
      {items.map((item, index) => (
         <li className="dropdown-item" key={index} onClick={() => changeData(item)}>
         <Link to="/products">{item}</Link> {/* Link wraps the item text */}
        </li>
      ))}
    </ul>
  );
}

export default NavbarWhite;
