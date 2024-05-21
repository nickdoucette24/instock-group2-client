import { useState } from 'react';

import logo from '../../assets/Logo/InStock-Logo.svg'
import "./Header.scss";

const Header = () => {
  const [selectedPage, setSelectedPage] = useState('warehouses');

  return (
    <header className='header'>
      <div className='header__wrapper'>
        <img className='header__logo' src={logo} alt='instock logo' />
        <nav className='header__nav'>
          <button className={`header__nav-btn ${selectedPage === 'warehouses' ? 'selected-button' : ''}`} onClick={() => setSelectedPage('warehouses')}>Warehouses</button>
          <button className={`header__nav-btn ${selectedPage === 'inventory' ? 'selected-button' : ''}`} onClick={() => setSelectedPage('inventory')}>Inventory</button>
        </nav>
      </div>
    </header>
  )
};

export default Header;