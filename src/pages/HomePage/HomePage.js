import "./HomePage.scss";
import searchIcon from "../../assets/Icons/search-24px.svg";
import chevron from "../../assets/Icons/chevron_right-24px.svg";
import edit from "../../assets/Icons/edit-24px.svg";
import del from "../../assets/Icons/delete_outline-24px.svg";
import sortBtn from "../../assets/Icons/sort-24px.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const HomePage = () => {
  const [warehouses, setWarehouses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:8080/api/warehouses')
    .then(response => {
      setWarehouses(response.data);
      setLoading(false);
      console.log(warehouses);
      return warehouses;
    })
    .catch(err => console.error(err));
  }, []);

  if (!loading) return (
  <>
    <main>
      <div className="floaty-container">
        <div className="floaty-container__top">
          <h1>Warehouses</h1>
          <span className="floaty-container__top--inputs">
            <input className="search" type="text" placeholder="Search..." src={searchIcon}/>
            <button className="btn__add">+ Add New Warehouse</button>
          </span>
        </div>
        <div className="sorty-selectors">
          <span className="sorty-selectors__item">
          <h4>WAREHOUSE</h4>
            <img src={sortBtn} alt="sort" />
          </span>
          <span className="sorty-selectors__item">
          <h4>CONTACT NAME</h4>
            <img src={sortBtn} alt="sort" />
          </span>
          <span className="sorty-selectors__item">
          <h4>ADDRESS</h4>
            <img src={sortBtn} alt="sort" />
          </span>
          <span className="sorty-selectors__item">
          <h4>CONTACT INFORMATION</h4>
            <img src={sortBtn} alt="sort" />
          </span>
          <span className="sorty-selectors__item col5">
          <h4>ACTIONS</h4>
          </span>
        </div>
      {warehouses.map(warehouse => {
        return(
          <section className="warehouse-container">
            <div class="warehouse-container__item">
              <h4 className="mobile">WAREHOUSE</h4>
              <span>
                <Link to={`/warehouses/${warehouse.id}`}>
                  <h3>{warehouse.warehouse_name}</h3>
                </Link>
                <img src={chevron} alt="" />
              </span>
            </div>
              <div class="warehouse-container__item">
                <h4 className="mobile">CONTACT NAME</h4>
                <p className="p2">{warehouse.contact_name}</p>
              </div>
              <div class="warehouse-container__item">
                <h4 className="mobile">ADDRESS</h4>
                <p className="p2">
                  {warehouse.address}, {warehouse.city}, {warehouse.country}
                </p>
              </div>
              <div class="warehouse-container__item">
                <h4 className="mobile">CONTACT INFORMATION</h4>
                <p className="p2">{warehouse.contact_phone}</p>
                <p className="p2">{warehouse.contact_email}</p>
              </div>
              <div className="warehouse-container__item--col5">
                <img src={del} alt="Delete" />
                <img src={edit} alt="Edit" />
              </div>
              <span className="divider"></span>
            </section>
        )
      })}
      </div>
    </main>
  </>
  );
};

export default HomePage;
