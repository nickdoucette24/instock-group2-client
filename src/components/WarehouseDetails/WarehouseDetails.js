import "./WarehouseDetails.scss";

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import EditButton from "../EditButton/EditButton";
import BackButton from "../BackButton/BackButton";
import sortButton from "../../assets/Icons/sort-24px.svg";

const WarehouseDetails = () => {
	const [warehouseDetails, setwarehouseDetails] = useState({});
	const [warehouseInventory, setWarehouseInventory] = useState([]);

	const { id } = useParams();

	useEffect(() => {
		axios
			.get(`http://localhost:8080/api/warehouses/${id}`)
			.then((response) => {
				setwarehouseDetails(response.data);
				// let warehouseId = response.data.id;
				// return warehouseId;
			})
			.then(() => {
				axios
					.get(`http://localhost:8080/api/warehouses/${id}/inventories`)
					.then((response) => setWarehouseInventory(response.data));
			})
			.catch((err) => console.error(err));
	}, []);

	// console.log(warehouseDetails);
	console.log(warehouseInventory);

	return (
		<>
			{warehouseDetails ? (
				<>
					<div className="main-header">
						<Link to={"/"} className="back-button-container">
							<BackButton />
						</Link>
						<h1 className="warehouse-name">
							{warehouseDetails.warehouse_name}
						</h1>
						<Link to={`/warehouses/${warehouseDetails.id}/edit`}>
							<EditButton />
						</Link>
					</div>
					<div className="warehouse-info">
						<div className="warehouse-info__address">
							<h4 className="info-header">warehouse address:</h4>
							<div className="warehouse-info__address-content">
								<p>{warehouseDetails.address},</p>
								<p>
									{warehouseDetails.city}, {warehouseDetails.country}
								</p>
							</div>
						</div>
						<div className="warehouse-info__contact">
							<div className="contact-name">
								<h4 className="info-header">contact name:</h4>
								<p className="contact-name__name">
									{warehouseDetails.contact_name}
								</p>
								<p className="contact-name__position">
									{warehouseDetails.contact_position}
								</p>
							</div>
							<div className="contact-info">
								<h4 className="info-header">contact information:</h4>
								<p className="contact-info__phone">
									{warehouseDetails.contact_phone}
								</p>
								<p className="contact-info__email">
									{warehouseDetails.contact_email}
								</p>
							</div>
						</div>
					</div>
					<div className="warehouse-sort-bar">
						<div className="warehouse-sort-bar__column">
							<h4 className="table-header">inventory item</h4>
							<img
								className="sort-button"
								src={sortButton}
								alt="sort button icon"
							/>
						</div>
						<div className="warehouse-sort-bar__column">
							<h4 className="table-header">category</h4>
							<img
								className="sort-button"
								src={sortButton}
								alt="sort button icon"
							/>
						</div>
						<div className="warehouse-sort-bar__column warehouse-sort-bar__column--status">
							<h4 className="table-header">status</h4>
							<img
								className="sort-button"
								src={sortButton}
								alt="sort button icon"
							/>
						</div>
						<div className="warehouse-sort-bar__column">
							<h4 className="table-header">quantity</h4>
							<img
								className="sort-button"
								src={sortButton}
								alt="sort button icon"
							/>
						</div>
						<div className="warehouse-sort-bar__column">
							<h4 className="table-header">actions</h4>
						</div>
					</div>
				</>
			) : (
				"Loading..."
			)}
			{/* inventory list */}
		</>
	);
};

export default WarehouseDetails;
