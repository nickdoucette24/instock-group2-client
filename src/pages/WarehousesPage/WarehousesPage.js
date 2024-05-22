import WarehouseList from "../../components/WarehouseList/WarehouseList";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import AddWarehouse from "../../components/AddWarehouse/AddWarehouse";
import EditWarehouse from "../../components/EditWarehouse/EditWarehouse";

import "./WarehousesPage.scss";


const WarehousesPage = () => {
	return (
		<>
			<main>
				<div className="floaty-container">
					<WarehouseList />
				</div>
			</main>
		</>
	);
};

export default WarehousesPage;
