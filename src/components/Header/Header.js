import { useNavigate, useLocation, Link } from 'react-router-dom';

import logo from '../../assets/Logo/InStock-Logo.svg'
import "./Header.scss";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (page) => {
    if (page === 'warehouses') {
      navigate('/');
    } else if (page === 'inventory') {
      navigate('/inventories');
    }
  };

  const handleLogoClick = () => {
    navigate('/');
  }

  const isWarehousePage = location.pathname.includes('warehouses') || location.pathname === '/';
  const isInventoryPage = location.pathname.includes('inventories');

  return (
    <header className='header'>
      <div className='header__wrapper'>
        <img to="/" className='header__logo' src={logo} alt='instock logo' onClick={() => handleLogoClick()} ></img>
        <nav className='header__nav'>
          <button className={`header__nav-btn ${isWarehousePage ? 'selected-button' : ''}`} onClick={() => handleNav('warehouses')}>Warehouses</button>
          <button className={`header__nav-btn ${isInventoryPage ? 'selected-button' : ''}`} onClick={() => handleNav('inventory')}>Inventory</button>
        </nav>
      </div>
    </header>
  )
};

export default Header;