import "./AddWarehouse.scss";

import { Link } from "react-router-dom";

import BackButton from "../BackButton/BackButton";
import FormWarehouse from "../FormWarehouse/FormWarehouse";

const AddWarehouse = () => {

	return (
		<>
			<section className="main-header main-header--form">
				<Link to={"/"} className="back-button-container">
					<BackButton />
				</Link>
				<h1>Add New Warehouse</h1>
			</section>
			<FormWarehouse />
		</>
	);
};

export default AddWarehouse;
