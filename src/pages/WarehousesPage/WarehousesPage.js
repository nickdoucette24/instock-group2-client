import WarehouseList from "../../components/WarehouseList/WarehouseList";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import AddWarehouse from "../../components/AddWarehouse/AddWarehouse";
import EditWarehouse from "../../components/EditWarehouse/EditWarehouse";

import "./WarehousesPage.scss";

import { useLocation } from "react-router-dom";

const WarehousesPage = () => {
	const location = useLocation();

	const renderComponents = () => {
		if (location.pathname.includes("/edit")) return <EditWarehouse />;
		if (location.pathname.includes("/add")) return <AddWarehouse />;
		if (location.pathname.includes("/warehouses")) return <WarehouseDetails />;
		if (location.pathname === "/") return <WarehouseList />;
	};

	return (
		<>
			<main>
				<div className="floaty-container">{renderComponents()}</div>
			</main>
		</>
	);
};

export default WarehousesPage;
