import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

// import InventoryList from "../../components/InventoryList/InventoryList";
import InventoryDetails from "../../components/InventoryDetails/InventoryDetails";
// import AddInventoryItem from "../../components/AddInventoryItem/AddInventoryItem";
// import EditInventoryItem from "../../components/EditInventoryItem/EditInventoryItem";
import InventoryItemRow from "../../components/InventoryItemRow/InventoryItemRow";

import "./InventoryPage.scss";


const url = "http://localhost:8080"

const InventoryPage = () => {
  const [inventoryItems, setInventoryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const getInventoryItems = async () => {
      try {
        const response = await axios.get(`${url}/api/inventories`);
        setInventoryItems(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error retrieving inventory items:", error);
        console.log(error);
        setLoading(false)
      }
    }

    getInventoryItems();
  }, []);

  if (location.pathname.includes("inventories/")) return <InventoryDetails />;

  if (location.pathname.endsWith("inventories")) return (
    <main className='content-wrapper'>
      <section className="content-container">
        <div className="inventory-heading">
          <h1 className="inventory-heading__title">Inventory</h1>
          <div className="inventory-heading__item-container">
            <input type="search" name="search" id="search" className="inventory-heading__item-container--search" placeholder='Search...' />
            <Link to='/inventories/add' className="inventory-heading__item-container--addItem">+ Add New Item</Link>
          </div>
          <div className="inventory-heading__sorter">

          </div>
        </div>
        <div className="inventory-list">
          {loading ? (
            <p className='list-loading'>Loading...</p>
          ) : (
            inventoryItems.map(inventoryItem => (
              <InventoryItemRow key={inventoryItem.id} inventoryItem={inventoryItem} />
            ))
          )
        }
        </div>
      </section>
    </main>
  );
};

export default InventoryPage;
