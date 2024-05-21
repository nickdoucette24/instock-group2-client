import "./WarehouseDetailsPage.scss";

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import EditButton from "../../components/EditButton/EditButton";
import BackButton from "../../components/BackButton/BackButton";

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
		<main>
			<div className="floaty-container">
				<div className="main-header">
					<Link to={"/"} className="back-button-container">
						<BackButton />
					</Link>
					<h1 className="warehouse-name">{warehouseDetails.warehouse_name}</h1>
					<EditButton />
				</div>
				<div className="warehouse-info">
					<div className="warehouse-info__address">
						<h4 className="table-header">warehouse address:</h4>
						<div className="warehouse-info__address-content">
							<p>{warehouseDetails.address},</p>
							<p>
								{warehouseDetails.city}, {warehouseDetails.country}
							</p>
						</div>
					</div>
					<div className="warehouse-info__contact">
						<div className="contact-name">
							<h4 className="table-header">contact name:</h4>
							<p className="contact-name__name">
								{warehouseDetails.contact_name}
							</p>
							<p className="contact-name__position">
								{warehouseDetails.contact_position}
							</p>
						</div>
						<div className="contact-info">
							<h4 className="table-header">contact information:</h4>
							<p className="contact-info__phone">
								{warehouseDetails.contact_phone}
							</p>
							<p className="contact-info__email">
								{warehouseDetails.contact_email}
							</p>
						</div>
					</div>
				</div>
				{/* <div>inventory list</div> */}
			</div>
		</main>
	);
};

export default WarehouseDetailsPage;
