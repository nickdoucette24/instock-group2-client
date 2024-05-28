import WarehouseList from "../../components/WarehouseList/WarehouseList";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import AddWarehouse from "../../components/AddWarehouse/AddWarehouse";
import EditWarehouse from "../../components/EditWarehouse/EditWarehouse";

import "./WarehousesPage.scss";

import { useState } from "react";
import { useLocation } from "react-router-dom";

const WarehousesPage = () => {
	const [updating, setUpdating] = useState(false);
	const location = useLocation();

	const renderComponents = () => {
		if (location.pathname.includes("/edit")) return <EditWarehouse setUpdating={setUpdating} />;
		if (location.pathname.includes("/add")) return <AddWarehouse setUpdating={setUpdating} />;
		if (location.pathname.includes("/warehouses")) return <WarehouseDetails updating={updating} setUpdating={setUpdating} />;
		if (location.pathname === "/") return <WarehouseList updating={updating} setUpdating={setUpdating} />;
	};

	return renderComponents();
};

export default WarehousesPage;
