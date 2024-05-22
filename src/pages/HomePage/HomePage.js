import "./HomePage.scss";
import WarehouseList from "../../components/WarehouseList/WarehouseList";

const HomePage = () => {
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

export default HomePage;
