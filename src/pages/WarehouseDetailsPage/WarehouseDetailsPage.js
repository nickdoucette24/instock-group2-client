import "./WarehouseDetailsPage.scss";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import EditButton from "../../components/EditButton/EditButton";

const WarehouseDetailsPage = () => {
	const [warehouseDetails, setwarehouseDetails] = useState({});

	const { id } = useParams();

	useEffect(() => {
		axios
			.get(`http://localhost:8080/api/warehouses/${id}`)
			.then((response) => setwarehouseDetails(response.data))
			.catch((err) => console.error(err));
	}, []);

	console.log(warehouseDetails);

	return (
		<div>
			<main>
				<div className="main-header">
					<button className="back-btn"></button>
					<h1 className="warehouse-name"></h1>
					<EditButton />
				</div>
				<div className="warehouse-info">
					<div className="warehouse-info__address"></div>
					<div className="warehouse-info__contact"></div>
				</div>
				{/* <div>inventory list</div> */}
			</main>
		</div>
	);
};

export default WarehouseDetailsPage;
