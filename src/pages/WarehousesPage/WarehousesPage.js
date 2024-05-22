import WarehouseList from "../../components/WarehouseList/WarehouseList";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import AddWarehouse from "../../components/AddWarehouse/AddWarehouse";
import EditWarehouse from "../../components/EditWarehouse/EditWarehouse";

import "./WarehousesPage.scss";

import { useLocation } from "react-router-dom";

const WarehousesPage = () => {
	const location = useLocation();
	console.log(location);

	// const renderWarehouseDetails = () => {
	// 	return <WarehouseDetails />;
	// };

	// const renderComponents = () => {
	// 	switch (urlParams) {
	// 		case urlParams:
	// 			return renderWarehouseDetails();

	// 		default:
	// 			return <WarehouseList />;
	// 	}
	// };

	return (
		<>
			<main>
				<div className="floaty-container">
					{/* {renderComponents()} */}
					{/* <WarehouseDetails /> */}
					{/* <WarehouseList /> */}
				</div>
			</main>
		</>
	);
};

export default WarehousesPage;
