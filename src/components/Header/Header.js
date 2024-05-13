import axios from "axios";
import "./Header.scss";

const Header = () => {
  return <div className="header__wrapper">
    <div className="logo__wrapper">
      <img url="" alt=""></img>
      <a href="" className="header__logo">instock</a>
    </div>
    <div className="tab__wrapper">
      <button className="btn" placeholder="Warehouses"></button>
      <button className="btn" placeholder="Inventory"></button>
    </div>
  </div>;
};

export default Header;
