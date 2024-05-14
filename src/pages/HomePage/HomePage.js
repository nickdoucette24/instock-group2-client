import "./HomePage.scss";
import searchIcon from "../../assets/Icons/search-24px.svg";
import chevron from "../../assets/Icons/chevron_right-24px.svg";
import edit from "../../assets/Icons/edit-24px.svg";
import del from "../../assets/Icons/delete_outline-24px.svg";
import { useState, useEffect } from "react";
import axios from "axios";

const HomePage = () => {
  const [warehouses, setWarehouses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:8080/warehouses')
    .then(response => {
      setWarehouses(response.data);
      setLoading(false);
      console.log(warehouses);
      return warehouses;
    })
    .catch(err => console.error(err));
  }, []);

  return <>
    <main>
      <div className="floaty-container">
        <h1>Warehouses</h1>
        <input className="search" type="text" placeholder="Search..." src={searchIcon}/>
        <button className="btn__add">+ Add New Warehouse</button>
      {warehouses.map(warehouse => {
        return(
          <section className="warehouse-container">
          <div class="warehouse-container__item">
            <h4>WAREHOUSE</h4>
            <span>
              <h3>{warehouse.warehouse_name}</h3>
              <img src={chevron} alt="" />
            </span>
          </div>
            <div class="warehouse-container__item">
              <h4>CONTACT NAME</h4>
              <p className="p2">{warehouse.contact_name}</p>
            </div>
            <div class="warehouse-container__item">
              <h4>ADDRESS</h4>
              <p className="p2">{warehouse.address}</p>
            </div>
            <div class="warehouse-container__item">
              <h4>CONTACT INFORMATION</h4>
              <p className="p2">{warehouse.contact_phone}</p>
              <p className="p2">{warehouse.contact_email}</p>
            </div>
            <div className="options">
              <img src={edit} alt="Edit" />
              <img src={del} alt="Delete" />
            </div>
            <span className="divider"></span>
          </section>
        )
      })}
      </div>
    </main>
  </>;
};

export default HomePage;
