import logo from '../../assets/Logo/InStock-Logo.svg'

import "./Header.scss";

const Header = () => {
  return (
    <section className='header'>
      <div className='header__wrapper'>
        <img className='header__logo' src={logo} />
        <div className='header__nav'>
          <button className='header__nav-btn'>Warehouses</button>
          <button className='header__nav-btn'>Inventory</button>
        </div>
      </div>
    </section>
  )
};

export default Header;

  // return <div className="header__wrapper">
  //   <div className="logo__wrapper">
  //     <img className='logo__wrapper--logoMobile' href={logoMobile} alt="instock logo"></img>
  //   </div>
  //   <div className="tab__wrapper">
  //     <button className="btn" placeholder="Warehouses"></button>
  //     <button className="btn" placeholder="Inventory"></button>
  //   </div>
  // </div>;