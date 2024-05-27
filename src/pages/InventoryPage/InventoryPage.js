import { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';

// import InventoryList from "../../components/InventoryList/InventoryList";
import InventoryDetails from "../../components/InventoryDetails/InventoryDetails";
import AddInventoryItem from "../../components/AddInventoryItem/AddInventoryItem";
import EditInventoryItem from "../../components/EditInventoryItem/EditInventoryItem";
import InventoryItemRow from "../../components/InventoryItemRow/InventoryItemRow";
import Sorter from '../../components/Sorter/Sorter';

import "./InventoryPage.scss";


const url = "http://localhost:8080"

const InventoryPage = () => {
  const [inventoryItems, setInventoryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

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

  const handleAddNav = () => {
    navigate("/inventories/add");
  }

  if (location.pathname.endsWith(`add`)) return <AddInventoryItem url={url} />;

  if (location.pathname.endsWith(`edit`)) return <EditInventoryItem url={url} />;

  if (location.pathname.endsWith(`inventories/${id}`)) return <InventoryDetails inventoryItem={inventoryItems} />;

  if (location.pathname.endsWith("inventories")) return (
    <main className='content-wrapper'>
      <section className="content-container">
        <div className="inventory-heading">
          <h1 className="inventory-heading__title">Inventory</h1>
          <div className="inventory-heading__item-container">
            <div className='search-container'>
              <input type="search" name="search" id="search" className="inventory-heading__item-container--search" placeholder='Search...' />
            </div>
            <div onClick={() => handleAddNav()} className="inventory-heading__item-container--addItem">+ Add New Item</div>
          </div>
        </div>
        <div className="inventory-list">
          <Sorter />
          {loading ? (
            <p className='list-loading'>Loading...</p>
          ) : (
            inventoryItems.map((inventoryItem, index) => (
              <InventoryItemRow key={inventoryItem.id} inventoryItem={inventoryItem} isFirst={index === 0} />
            ))
          )
        }
        </div>
      </section>
    </main>
  );
};

export default InventoryPage;
