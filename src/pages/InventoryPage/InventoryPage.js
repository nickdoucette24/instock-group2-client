import { useLocation } from 'react-router-dom';

import InventoryList from "../../components/InventoryList/InventoryList";
import InventoryDetails from "../../components/InventoryDetails/InventoryDetails";
import AddInventoryItem from "../../components/AddInventoryItem/AddInventoryItem";
import EditInventoryItem from "../../components/EditInventoryItem/EditInventoryItem";

import "./InventoryPage.scss";

const url = "http://localhost:8080"

const InventoryPage = () => {
  const location = useLocation();

  const renderComponents = () => {
    if (location.pathname.includes("/add")) return <AddInventoryItem url={url} />;
    if (location.pathname.includes("/edit")) return <EditInventoryItem url={url} />;
    if (location.pathname.includes("/inventories/")) return <InventoryDetails url={url} />;
    if (location.pathname === "/inventories") return <InventoryList url={url} />;
  }

	return renderComponents();
};

export default InventoryPage;
