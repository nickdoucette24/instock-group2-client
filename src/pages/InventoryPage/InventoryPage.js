import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import InventoryList from "../../components/InventoryList/InventoryList";
import InventoryDetails from "../../components/InventoryDetails/InventoryDetails";
import AddInventoryItem from "../../components/AddInventoryItem/AddInventoryItem";
import EditInventoryItem from "../../components/EditInventoryItem/EditInventoryItem";

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
        setLoading(false);
      }
    }

    getInventoryItems();
  }, []);

  if (location.pathname.endsWith("inventories")) return <InventoryList 
    loading={loading}
    inventoryItems={inventoryItems}
  />;
  if (location.pathname.includes('inventories/')) return <InventoryDetails />;
  if (location.pathname.includes("add")) return <AddInventoryItem />;
  if (location.pathname.includes("edit")) return <EditInventoryItem />;
};

export default InventoryPage;
