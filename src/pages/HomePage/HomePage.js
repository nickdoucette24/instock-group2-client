import "./HomePage.scss";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";

import { useParams } from "react-router-dom";

const HomePage = () => {
	const urlParams = useParams();
	console.log(urlParams);

	return (
		<>
			<main>
				<div className="floaty-container">
					{() => {
						switch (urlParams) {
							case urlParams.warehouses && urlParams.id:
								return <WarehouseDetails />;

							default:
								return <WarehouseList />;
						}
					}}
					{/* <WarehouseDetails /> */}
					{/* <WarehouseList /> */}
				</div>
			</main>
		</>
	);
};

export default HomePage;
