import "./HomePage.scss";
import searchIcon from "../../assets/Icons/search-24px.svg"
import chevron from "../../assets/Icons/chevron_right-24px.svg"
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
      return warehouses;
    })
    .then(setLoading(false))
    .then(console.log(warehouses))
    .catch(err => console.error(err));
  }, []);

  return <>
    <section>
      <h1>Warehouses</h1>
      <input type="text" placeholder="Search..." src={searchIcon}/>
      <button>+ Add New Warehouse</button>
    </section>
    {warehouses.map((warehouse) => {
      <section>
      <div>
        <h4>WAREHOUSE</h4>
        <span>
        <h3>{warehouse.warehouse_name}</h3>
        <img src={chevron} alt="" />
        </span>
      </div>
        <div>
          <h4>CONTACT NAME</h4>
          <p>{warehouse.contact_name}</p>
        </div>
        <div>
          <h4>ADDRESS</h4>
          <p>{warehouse.address}</p>
        </div>
        <div>
          <h4>WAREHOUSE</h4>
          <h4>CONTACT INFORMATION</h4>
          <p>{warehouse.contact_phone}</p>
          <p>{warehouse.contact_email}</p>
        </div>
      </section>
    })}
  </>;
};

export default HomePage;
