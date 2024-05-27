import './EditWarehouse.scss';

import { Link } from "react-router-dom";

import BackButton from "../BackButton/BackButton";
import FormWarehouse from "../FormWarehouse/FormWarehouse";

const EditWarehouse = () => {
	return (
		<>
			<section className="main-header main-header--form">
				<Link to={"/"} className="back-button-container">
					<BackButton />
				</Link>
				<h1>Edit Warehouse</h1>
			</section>
			<FormWarehouse submitButton={"Save"}/>
		</>
	);
}

export default EditWarehouse;