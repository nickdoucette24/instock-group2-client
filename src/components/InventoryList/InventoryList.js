import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import InventoryItemRow from "../../components/InventoryItemRow/InventoryItemRow";
import Sorter from '../../components/Sorter/Sorter';

import './InventoryList.scss';

const InventoryList = ({url}) => {
  const navigate = useNavigate();
  const [inventoryItems, setInventoryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    const getInventoryItems = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${url}/api/inventories`);
        console.log(response.data);
        setInventoryItems(response.data);
        setLoading(false);
        setUpdating(false);
      } catch (error) {
        console.error("Error retrieving inventory items:", error);
        console.log(error);
        setLoading(false)
      }
    }

    getInventoryItems();
  }, [updating]);

  return (
    <main className='content-wrapper'>
      <section className="content-container">
        <div className="inventory-heading">
          <h1 className="inventory-heading__title">Inventory</h1>
          <div className="inventory-heading__item-container">
            <div className='search-container'>
              <input type="search" name="search" id="search" className="inventory-heading__item-container--search" placeholder='Search...' />
            </div>
            <div onClick={() => navigate("/inventories/add")} className="inventory-heading__item-container--addItem">+ Add New Item</div>
          </div>
        </div>
        <div className="inventory-list">
          <Sorter />
          {loading ? (
            <p className='list-loading'>Loading...</p>
          ) : (
            inventoryItems.map((inventoryItem, index) => (
              <InventoryItemRow 
                key={inventoryItem.id} 
                inventoryItem={inventoryItem} 
                isFirst={index === 0} 
                setUpdating={setUpdating}
              />
            ))
          )
        }
        </div>
      </section>
    </main>
  )
}

export default InventoryList;